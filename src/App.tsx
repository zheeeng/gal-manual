import { createSignal, createMemo, createEffect, Show, For, onMount } from 'solid-js'
import Vimeo from '@vimeo/player'
import { Asset, Choice } from './type'
import { assets } from './assets'
import './App.css'
import { prefetchImage } from './utils'

// import assets
import playIcon from '/icon/play.svg'
import pauseIcon from '/icon/pause.svg'
import bgmAudio from '/audio/gal-manual-bgm.mp3'
import confirmAudio from '/audio/confirm.mp3'
import apertureAudio from '/audio/aperture.mp3'
import shutterAudio from '/audio/shutter.mp3'

// Set text
const musicText = 'Music'
const goBackText = 'Go Back'

/** Utils */
const assetMap = assets.reduce<Record<string, Asset>>((acc, asset) => ({ ...acc, [asset.id]: asset }), {})
const headAsset = (() => {
  if (!assets[0]) {
    throw Error('No head asset')
  }

  return assets[0]
})()

function Options ({ options, onChooseOption }: { options: Choice[], onChooseOption: (optionId: string) => void }) {
  const [currentChoices, setCurrentChoices] = createSignal(options)

  const choose = (choice: Choice) => {
    if (choice.text.toLowerCase().includes('aperture')) {
      const audio = new Audio(apertureAudio)
      audio.play()
    } else if (choice.text.toLowerCase().includes('shutter')) {
      const audio = new Audio(shutterAudio)
      audio.play()
    } else {
      const audio = new Audio(confirmAudio)
      audio.play()
    }

    if (choice.children) {
      setCurrentChoices(choice.children)
    } else if (choice.nextAssetId) {
      onChooseOption(choice.nextAssetId)
    }
  }

  return (
    <Show when={currentChoices().length > 0 && currentChoices().map(choice => choice.text).join(';')} keyed>
      <div class="options">
        <For each={currentChoices()}>
          {choice => <button onClick={() => choose(choice)}>{choice.text}</button>}
        </For>
      </div>
    </Show>
  )
}

function Photo ({ id, src } : { id?: string, src?: string }) {
  const [show, setShow] = createSignal(false)

  createEffect(
    () => {
      if (!src) {
        return
      }

      const image = new Image()
      
      image.src = src

      image.onload = () => setShow(true)
    }
  )

  return (
    <Show when={show()}>
      <div class="photo-wrapper">
        <img
          id={id}
          class="photo"
          src={src}
        />
      </div>
    </Show>
  )
}

type VimeoPalerRef = {
  id: string,
  play: () => void,
}

function Video ({ id, src, onEnded, playerRef } : { id?: string, src?: string, onEnded?: () => void, playerRef?: (player?: VimeoPalerRef) => void}) {
  let iframeRef!: HTMLIFrameElement
  let videoPlayer: Vimeo
  const [width, setWidth] = createSignal(window.innerWidth)
  const [height, setHeight] = createSignal(window.innerHeight)

  onMount(() => {
    const resize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize', resize)

    return () => window.removeEventListener('resize', resize)
  })

  createEffect(() => {
    videoPlayer?.destroy()

    if (!src) {
      return
    }

    iframeRef.src = `${src}?autoplay=true&loop=0&playsinline=0&controls=0`

    videoPlayer = new Vimeo(iframeRef)

    playerRef?.(id ? {
      id,
      play: () => videoPlayer.play()
    } : undefined)

    videoPlayer.on('ended', async () => {
      onEnded?.()
      void videoPlayer.setCurrentTime(await videoPlayer.getDuration() - 0.01)
      void videoPlayer.pause()
    })
  })

  return (
    <iframe id={id} ref={iframeRef} width={width()} height={height()} allow="autoplay" />
  )
}

/** Runtime */
function App() {
  let bgmAudioRef: HTMLAudioElement | undefined
  const [videoRef, setVideoRef] = createSignal<VimeoPalerRef>();
  const [playingBgm, setPlayingBgm] = createSignal(false)
  const [videoEnd, setVideoEnd] = createSignal(false)
  const [currentAssetId, setCurrentAssetId] = createSignal(headAsset.id)
  const [history, setHistory] = createSignal<string[]>([headAsset.id])
  const currentAsset = createMemo(() => assetMap[currentAssetId()])
  const showPopup = createMemo(() => !!currentAsset()?.options.length && (videoEnd() || currentAsset()?.type !== 'video'))

  createEffect((prevId) => {
    const asset = currentAsset()
    const video = videoRef()

    if (asset?.type === 'video' && prevId !== video?.id) {
      setVideoEnd(false)

      videoRef()?.play()

      return asset.id
    }

    return prevId
  }, undefined)

  createEffect(() => {
    const asset = currentAsset()

    if (asset?.options.length !== 1) {
      return
    }

    const nextAssetId = asset?.options[0]?.nextAssetId

    if (!nextAssetId) {
      return
    }

    const nextAsset = assetMap[nextAssetId]

    if (!nextAsset) {
      return
    }

    if (nextAsset.type === 'photo') {
      prefetchImage(nextAsset.src)
    }
  })

  const toggleMute = () => {
    if (!bgmAudioRef) {
      const audio = bgmAudioRef = new Audio(bgmAudio)
      audio.loop = true
      audio.volume = 0.5
      audio.play()
      setPlayingBgm(true)

      return
    }

    if (bgmAudioRef.paused) {
      bgmAudioRef.play()
      setPlayingBgm(true)
    } else {
      bgmAudioRef.pause()
      setPlayingBgm(false)
    }
  }

  const setOptionId = (optionId: string) => {
    if (currentAsset()?.type === 'cover' && !bgmAudioRef) {
      toggleMute()
    }

    setHistory([...history(), optionId])
    setCurrentAssetId(optionId)
  }

  const goBack = () => {
    const assetsHistory = history()

    const lastAsset = assetsHistory[assetsHistory.length - 1]

    if (!lastAsset) {
      return
    }

    const newHistory = assetsHistory.slice(0, assetMap[lastAsset]?.type === 'photo' ? -2 : -1)
    const newCurrentAssetId = newHistory[newHistory.length - 1]

    setHistory(newHistory)

    if (newCurrentAssetId) {
      setCurrentAssetId(newCurrentAssetId)
    }
  }

  return (
    <>
      <main>
        <Show when={currentAsset()?.type === 'cover' && currentAsset()?.id} keyed>
          <div
            id={currentAsset()?.id}
            class="cover"
            style={{ 'background-image': `url(${currentAsset()?.src})` }}
          />
        </Show>
        <Show when={currentAsset()?.type === 'video' && currentAsset()?.id} keyed>
          <Video id={currentAsset()?.id} playerRef={setVideoRef} src={currentAsset()?.src} onEnded={() => setVideoEnd(true)} />
        </Show>
        <Show when={currentAsset()?.type === 'photo' && currentAsset()?.id} keyed>
          <Photo
            id={currentAsset()?.id}
            src={currentAsset()?.src}
          />
        </Show>

        <div class="controls">
          <div>
            <button onClick={toggleMute}>
              {musicText}
              <img class="music" src={playingBgm() ? pauseIcon : playIcon} />
            </button>
          </div>
          <div>
            <Show when={history().length > 1}>
              <button onClick={goBack}>{goBackText}</button>
            </Show>
          </div>
        </div>

        <Show when={showPopup()}>
          <div class="popup slide-up-animation">
            <Options options={currentAsset()?.options ?? []} onChooseOption={setOptionId}/>
          </div>
        </Show>

      </main>
    </>
  )
}

export default App
