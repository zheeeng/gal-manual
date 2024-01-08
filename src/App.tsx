import { createSignal, createMemo, createEffect, Show } from 'solid-js'
import { Video } from './type'
import './App.css'

/** Config */
const videos: Video[] = [
  { id: 'intro', name: 'introduction to camera', src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    options: [
      { text: 'Option A', nextVideoId: 'choice1' },
      { text: 'Option B', nextVideoId: 'choice2' },
    ]
  },
  { id: 'choice1', name: 'choice', src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    options: [
      { text: 'Option A', nextVideoId: 'outcomeA' },
      { text: 'Option B', nextVideoId: 'outcomeB' },
    ]
  },
  { id: 'choice2', name: 'choice', src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    options: [
      { text: 'Option A', nextVideoId: 'outcomeA' },
      { text: 'Option B', nextVideoId: 'outcomeB' },
    ]
  },
  { id: 'outcomeA', name: 'outcome A', src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', options: [] },
  { id: 'outcomeB', name: '', src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', options: [] },
]

const title = 'Introduction to Cameras'
const goBackText = 'Go Back'
const getStartedText = 'Get Started'

/** Utils */
const videoMap = videos.reduce<Record<string, Video>>((acc, video) => ({ ...acc, [video.id]: video }), {})
const rootVideo = videos[0]


/** Runtime */
function App() {
  let videoRef!: HTMLVideoElement

  const [started, setStarted] = createSignal(false)
  const [currentVideoId, setCurrentVideoId] = createSignal(rootVideo.id)
  const [history, setHistory] = createSignal<string[]>([rootVideo.id])

  createEffect((prevId) => {
    if (!started()) {
      return prevId
    }
    const id = currentVideoId()
    if (prevId !== id) {
      videoRef.play()

      return id
    }

    return prevId
  }, undefined)

  const currentVideo = createMemo(() => {
    const video = videoMap[currentVideoId()]

    return {
      id: video.id,
      name: video.name,
      src: video.src,
      options: video.options.filter(option => videoMap[option.nextVideoId]),
    }
  })

  const setOptionId = (optionId: string) => {
    setHistory([...history(), optionId])
    setCurrentVideoId(optionId)
  }

  const goBack = () => {
    const newHistory = history().slice(0, -1)
    const newCurrentVideoId = newHistory[newHistory.length - 1]

    setHistory(newHistory)
    setCurrentVideoId(newCurrentVideoId)
  }

  return (
    <>
      <header>
        <h1>{title}</h1>
        <h2>{currentVideo().name}</h2>
      </header>
      <main>
        <video src={currentVideo().src} ref={videoRef} controls />
        <Show when={!started()}>
          <div class="main__start-mask">
            <button onclick={() => setStarted(true)}>{getStartedText}</button>
          </div>
        </Show>
      </main>
      <footer>
        <div class="footer__options">
          {currentVideo().options.map(option => (
            <button onClick={[setOptionId, option.nextVideoId]}>{option.text}</button>
          ))}
        </div>
        <div class="footer__history">
          <Show when={history().length > 1}>
              <button onClick={goBack}>{goBackText}</button>
          </Show>
        </div>
      </footer>
    </>
  )
}

export default App
