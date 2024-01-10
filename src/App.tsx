import { createSignal, createMemo, createEffect, Show, For, onMount } from 'solid-js'
import Vimeo from '@vimeo/player'
import { Asset, Choice } from './type'
import { assets } from './assets'
import './App.css'

const goBackText = 'Go Back'

/** Utils */
const assetMap = assets.reduce<Record<string, Asset>>((acc, asset) => ({ ...acc, [asset.id]: asset }), {})
const headAsset = assets[0]

function Options ({ options, onChooseOption }: { options: Choice[], onChooseOption: (optionId: string) => void }) {
  const [currentChoices, setCurrentChoices] = createSignal(options)

  const choose = (choice: Choice) => {
    if (choice.children) {
      setCurrentChoices(choice.children)
    } else if (choice.nextAssetId) {
      onChooseOption(choice.nextAssetId)
    }
  }

  return (
    <div class="options">
      <For each={currentChoices()}>
        {choice => <button onClick={() => choose(choice)}>{choice.text}</button>}
      </For>
    </div>
  )
}

function Photo ({ id, src } : { id: string, src: string }) {
  const [show, setShow] = createSignal(false)

  createEffect(
    () => {
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

function Video ({ id, src, onEnded, playerRef } : { id: string, src: string, onEnded?: () => void, playerRef?: (player: VimeoPalerRef) => void}) {
  let iframeRef!: HTMLIFrameElement
  let videoPlayer: Vimeo
  const [width, setWidth] = createSignal(window.innerWidth)
  const [height, setHeight] = createSignal(window.innerHeight)
  
  createEffect(() => {
    console.log('asset video', id)
  })

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

    iframeRef.src = `${src}?autoplay=true&loop=0&playsinline=0&controls=0`

    videoPlayer = new Vimeo(iframeRef)

    playerRef?.({
      id,
      play: () => videoPlayer.play()
    })

    videoPlayer.on('ended', async () => {
      videoPlayer.setCurrentTime(await videoPlayer.getDuration() -1)
      onEnded?.()
    })
  })

  return (
    <iframe id={id} ref={iframeRef} width={width()} height={height()} allow="autoplay" />
  )
}

/** Runtime */
function App() {
  const [videoRef, setVideoRef] = createSignal<VimeoPalerRef>();
  const [videoEnd, setVideoEnd] = createSignal(false)
  const [currentAssetId, setCurrentAssetId] = createSignal(headAsset.id)
  const [history, setHistory] = createSignal<string[]>([headAsset.id])
  const currentAsset = createMemo(() => assetMap[currentAssetId()])
  const showPopup = createMemo(() => !!currentAsset().options.length && (videoEnd() || currentAsset().type !== 'video'))

  createEffect((prevId) => {
    const asset = currentAsset()
    const video = videoRef()

    if (asset.type === 'video' && prevId !== video?.id) {
      setVideoEnd(false)

      videoRef()?.play()

      return asset.id
    }

    return prevId
  }, undefined)


  const setOptionId = (optionId: string) => {
    setHistory([...history(), optionId])
    setCurrentAssetId(optionId)
  }

  const goBack = () => {
    const newHistory = history().slice(0, -1)
    const newCurrentAssetId = newHistory[newHistory.length - 1]

    setHistory(newHistory)
    setCurrentAssetId(newCurrentAssetId)
  }

  return (
    <>
      <main>
        <Show when={currentAsset().type === 'cover' && currentAsset().id} keyed>
          <div
            id={currentAsset().id}
            class="cover"
            style={{ 'background-image': `url(${currentAsset().src})` }}
          />
        </Show>
        <Show when={currentAsset().type === 'video' && currentAsset().id} keyed>
          <Video id={currentAsset().id} playerRef={setVideoRef} src={currentAsset().src} onEnded={() => setVideoEnd(true)} />
        </Show>
        <Show when={currentAsset().type === 'photo' && currentAsset().id} keyed>
          <Photo
            id={currentAsset().id}
            src={currentAsset().src}
          />
        </Show>

        <Show when={history().length > 1}>
          <div class="go-back">
            <button onClick={goBack}>{goBackText}</button>
          </div>
        </Show>

        <Show when={showPopup()}>
          <div class="popup slide-up-animation">
            <Options options={currentAsset().options} onChooseOption={setOptionId}/>
          </div>
        </Show>

      </main>
    </>
  )
}

export default App
