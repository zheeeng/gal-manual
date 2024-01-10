import { createSignal, createMemo, createEffect, Show, For } from 'solid-js'
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

/** Runtime */
function App() {
  let videoRef!: HTMLVideoElement

  const [videoEnd, setVideoEnd] = createSignal(false)
  const [currentAssetId, setCurrentAssetId] = createSignal(headAsset.id)
  const [history, setHistory] = createSignal<string[]>([headAsset.id])
  const currentAsset = createMemo(() => assetMap[currentAssetId()])
  const showPopup = createMemo(() => !!currentAsset().options.length && (videoEnd() || currentAsset().type !== 'video'))

  createEffect((prevId) => {
    const asset = currentAsset()
    if (asset.type === 'video' && prevId !== asset.id) {
      videoRef.play()

      videoRef.playbackRate = 10

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
        <Show when={currentAsset().type === 'cover'}>
          <div
            id={currentAsset().id}
            class="cover"
            style={{ 'background-image': `url(${currentAsset().src})` }}
          />
        </Show>
        <Show when={currentAsset().type === 'video'}>
          <video id={currentAsset().id} ref={videoRef} src={currentAsset().src} controls={false} onPlay={() => setVideoEnd(false)} onEnded={() => setVideoEnd(true)}>
            Your browser does not support the video tag.
          </video>
        </Show>
        <Show when={currentAsset().type === 'photo'}>
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
