const prefetchSet = new Set<string>()

export function prefetchImage (image: string) {
    if (prefetchSet.has(image)) {
        return
    }

    prefetchSet.add(image)

    const imageEl = new Image()
    imageEl.src = image
} 