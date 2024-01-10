export type Asset = {
  id: string,
  type: 'cover' | 'video' | 'photo'
  name: string,
  src: string,
  description: string,
  options: Choice[],
}

export type Choice = {
  text: string,
  nextAssetId?: string,
  children?: Choice[],
}

export type GameState = {
  currentVideoId?: string,
  assetMap: Record<string, Asset>,
}
