import { createSignal, createMemo, createEffect, Show } from 'solid-js'
import { Video } from './type'
import './App.css'

/** Config */
const videos: Video[] = [
  {
    id: 'intro',
    name: 'introduction to camera',
    description: 'This is a video about cameras',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    options: [
      { text: 'Option A', nextVideoId: 'choice1' },
      { text: 'Option B', nextVideoId: 'choice2' },
    ]
  },
  {
    id: 'choice1',
    name: 'choice 1',
    description: 'This is a video about choice 1',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    options: [
      { text: 'Option A', nextVideoId: 'outcomeA' },
      { text: 'Option B', nextVideoId: 'outcomeB' },
    ]
  },
  {
    id: 'choice2',
    name: 'choice 2',
    description: 'This is a video about choice 2',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    options: [
      { text: 'Option A', nextVideoId: 'outcomeA' },
      { text: 'Option B', nextVideoId: 'outcomeB' },
    ]
  },
  {
    id: 'outcomeA',
    name: 'outcome A',
    description: 'This is a video about outcome A',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    options: [
    ]
  },
  {
    id: 'outcomeB',
    name: 'outcome B',
    description: 'This is a video about outcome B',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    options: [
    ]
  },
]

const title = 'Introduction to Cameras'
const goBackText = 'Go Back to last video'
const getStartedText = 'Get Started'

/** Utils */
const videoMap = videos.reduce<Record<string, Video>>((acc, video) => ({ ...acc, [video.id]: video }), {})
const rootVideo = videos[0]


/** Runtime */
function App() {
  let videoRef!: HTMLVideoElement

  const [started, setStarted] = createSignal(false)
  const [showPopup, setShowPopup] = createSignal(false)
  const [currentVideoId, setCurrentVideoId] = createSignal(rootVideo.id)
  const [history, setHistory] = createSignal<string[]>([rootVideo.id])

  createEffect((prevId) => {
    if (!started()) {
      return prevId
    }
    const id = currentVideoId()
    if (prevId !== id) {
      videoRef.play()

      videoRef.playbackRate = 10

      return id
    }

    return prevId
  }, undefined)

  const currentVideo = createMemo(() => {
    const video = videoMap[currentVideoId()]

    return {
      id: video.id,
      name: video.name,
      description: video.description,
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
      <main>
        <video src={currentVideo().src} ref={videoRef} controls={false} onPlay={() => setShowPopup(false)} onEnded={() => setShowPopup(true)}/>

        <div class="go-back">
          <Show when={history().length > 1}>
            <button onClick={goBack}>{goBackText}</button>
          </Show>
        </div>

        <Show when={showPopup()}>
          <div class="popup slide-up-animation">
            {/* <h2>{currentVideo().name}</h2>
            <div class="description">
              <Show when={started()}>
                {currentVideo().description}
              </Show>
            </div> */}
            <div class="options">
              {currentVideo().options.map(option => (
                <button onClick={[setOptionId, option.nextVideoId]}>{option.text}</button>
              ))}
            </div>
          </div>
        </Show>

      </main>

      <Show when={!started()}>
        <div class="bonjour">
          <h1>{title}</h1>
          <button onclick={() => setStarted(true)}>{getStartedText}</button>
        </div>
      </Show>
    </>
  )
}

export default App
