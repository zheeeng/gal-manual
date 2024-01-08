export type Video = {
  id: string,
  name: string,
  src: string,
  options: Choice[],
}

export type Choice = {
  text: string,
  nextVideoId: string,
}

export type GameState = {
  currentVideoId?: string,
  videoMap: Record<string, Video>,
}
