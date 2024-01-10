import { Asset } from './type'

/** Config */
export const assets: Asset[] = [
  {
    id: 'intro',
    type: 'cover',
    name: 'Introduction',
    description: 'This is a introduction image',
    src: 'https://source.unsplash.com/random/600x600/?sky',
    options: [
      { text: 'Balcony', nextAssetId: 'balcony' },
      { text: 'Model', nextAssetId: 'model' },
      { text: 'Building', nextAssetId: 'building' },
    ]
  },
  {
    id: 'balcony',
    type: 'video',
    name: 'Balcony',
    description: 'This is a video about balcony',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/balcony-X8tJFPk39iJPsyYZzm5Qdv9DIzwmzw.mov',
    options: [
      { text: 'Aperture 1',
        children: [
          { text: 'Shutter 15', nextAssetId: 'balcony-aperture-1-shutter-15' },
          { text: 'Shutter 60', nextAssetId: 'balcony-aperture-1-shutter-60' },
          { text: 'Shutter 250', nextAssetId: 'balcony-aperture-1-shutter-250' },
        ]
      },
      { text: 'Aperture 8',
        children: [
          { text: 'Shutter 15', nextAssetId: 'balcony-aperture-8-shutter-15' },
          { text: 'Shutter 60', nextAssetId: 'balcony-aperture-8-shutter-60' },
          { text: 'Shutter 250', nextAssetId: 'balcony-aperture-8-shutter-250' },
        ]
      },
      { text: 'Aperture 16',
        children: [
          { text: 'Shutter 15', nextAssetId: 'balcony-aperture-16-shutter-15' },
          { text: 'Shutter 60', nextAssetId: 'balcony-aperture-16-shutter-60' },
          { text: 'Shutter 250', nextAssetId: 'balcony-aperture-16-shutter-250' },
        ]
      },
    ]
  },

  // group 1
  {
    id: 'balcony-aperture-1-shutter-15',
    type: 'video',
    name: 'Taking Balcony Picture',
    description: 'This is a video about taking balcony picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/balcony-shutter-hAsTGtKqzXWPUYumANXfSl0MXpLgfS.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'balcony-aperture-1-shutter-15-picture' },
    ]
  },
  {
    id: 'balcony-aperture-1-shutter-60',
    type: 'video',
    name: 'Taking Balcony Picture',
    description: 'This is a video about taking balcony picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/balcony-shutter-hAsTGtKqzXWPUYumANXfSl0MXpLgfS.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'balcony-aperture-1-shutter-60-picture' },
    ]
  },
  {
    id: 'balcony-aperture-1-shutter-250',
    type: 'video',
    name: 'Taking Balcony Picture',
    description: 'This is a video about taking balcony picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/balcony-shutter-hAsTGtKqzXWPUYumANXfSl0MXpLgfS.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'balcony-aperture-1-shutter-250-picture' },
    ]
  },
  
  // group 2
  {
    id: 'balcony-aperture-8-shutter-15',
    type: 'video',
    name: 'Taking Balcony Picture',
    description: 'This is a video about taking balcony picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/balcony-shutter-hAsTGtKqzXWPUYumANXfSl0MXpLgfS.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'balcony-aperture-8-shutter-15-picture' },
    ]
  },
  {
    id: 'balcony-aperture-8-shutter-60',
    type: 'video',
    name: 'Taking Balcony Picture',
    description: 'This is a video about taking balcony picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/balcony-shutter-hAsTGtKqzXWPUYumANXfSl0MXpLgfS.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'balcony-aperture-8-shutter-60-picture' },
    ]
  },
  {
    id: 'balcony-aperture-8-shutter-250',
    type: 'video',
    name: 'Taking Balcony Picture',
    description: 'This is a video about taking balcony picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/balcony-shutter-hAsTGtKqzXWPUYumANXfSl0MXpLgfS.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'balcony-aperture-8-shutter-250-picture' },
    ]
  },

  // group 3
  {
    id: 'balcony-aperture-16-shutter-15',
    type: 'video',
    name: 'Taking Balcony Picture',
    description: 'This is a video about taking balcony picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/balcony-shutter-hAsTGtKqzXWPUYumANXfSl0MXpLgfS.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'balcony-aperture-16-shutter-15-picture' },
    ]
  },
  {
    id: 'balcony-aperture-16-shutter-60',
    type: 'video',
    name: 'Taking Balcony Picture',
    description: 'This is a video about taking balcony picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/balcony-shutter-hAsTGtKqzXWPUYumANXfSl0MXpLgfS.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'balcony-aperture-16-shutter-60-picture' },
    ]
  },
  {
    id: 'balcony-aperture-16-shutter-250',
    type: 'video',
    name: 'Taking Balcony Picture',
    description: 'This is a video about taking balcony picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/balcony-shutter-hAsTGtKqzXWPUYumANXfSl0MXpLgfS.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'balcony-aperture-16-shutter-250-picture' },
    ]
  },

  {
    id: 'model',
    type: 'video',
    name: 'Model',
    description: 'This is a video about model',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/model-pxzZjlkLc2lPyDgRYcgDLZCy4YVCM9.mov',
    options: [
      { text: 'Aperture 1',
        children: [
          { text: 'Shutter 15', nextAssetId: 'model-aperture-1-shutter-15' },
          { text: 'Shutter 60', nextAssetId: 'model-aperture-1-shutter-60' },
          { text: 'Shutter 250', nextAssetId: 'model-aperture-1-shutter-250' },
        ]
      },
      { text: 'Aperture 4',
        children: [
          { text: 'Shutter 15', nextAssetId: 'model-aperture-4-shutter-15' },
          { text: 'Shutter 60', nextAssetId: 'model-aperture-4-shutter-60' },
          { text: 'Shutter 250', nextAssetId: 'model-aperture-4-shutter-250' },
        ]
      },
      { text: 'Aperture 8',
        children: [
          { text: 'Shutter 15', nextAssetId: 'model-aperture-8-shutter-15' },
          { text: 'Shutter 60', nextAssetId: 'model-aperture-8-shutter-60' },
          { text: 'Shutter 250', nextAssetId: 'model-aperture-8-shutter-250' },
        ]
      },
    ]
  },

  // group 1
  {
    id: 'model-aperture-1-shutter-15',
    type: 'video',
    name: 'Taking Model Picture',
    description: 'This is a video about taking model picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/model-shutter-l7WlG8MfXFiraPXaAYNF0SSrudkwJB.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'model-aperture-1-shutter-15-picture' },
    ]
  },
  {
    id: 'model-aperture-1-shutter-60',
    type: 'video',
    name: 'Taking Model Picture',
    description: 'This is a video about taking model picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/model-shutter-l7WlG8MfXFiraPXaAYNF0SSrudkwJB.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'model-aperture-1-shutter-60-picture' },
    ]
  },
  {
    id: 'model-aperture-1-shutter-250',
    type: 'video',
    name: 'Taking Model Picture',
    description: 'This is a video about taking model picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/model-shutter-l7WlG8MfXFiraPXaAYNF0SSrudkwJB.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'model-aperture-1-shutter-250-picture' },
    ]
  },
  
  // group 2
  {
    id: 'model-aperture-4-shutter-15',
    type: 'video',
    name: 'Taking Model Picture',
    description: 'This is a video about taking model picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/model-shutter-l7WlG8MfXFiraPXaAYNF0SSrudkwJB.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'model-aperture-4-shutter-15-picture' },
    ]
  },
  {
    id: 'model-aperture-4-shutter-60',
    type: 'video',
    name: 'Taking Model Picture',
    description: 'This is a video about taking model picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/model-shutter-l7WlG8MfXFiraPXaAYNF0SSrudkwJB.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'model-aperture-4-shutter-60-picture' },
    ]
  },
  {
    id: 'model-aperture-4-shutter-250',
    type: 'video',
    name: 'Taking Model Picture',
    description: 'This is a video about taking model picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/model-shutter-l7WlG8MfXFiraPXaAYNF0SSrudkwJB.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'model-aperture-4-shutter-250-picture' },
    ]
  },

  // group 3
  {
    id: 'model-aperture-8-shutter-15',
    type: 'video',
    name: 'Taking Model Picture',
    description: 'This is a video about taking model picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/model-shutter-l7WlG8MfXFiraPXaAYNF0SSrudkwJB.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'model-aperture-8-shutter-15-picture' },
    ]
  },
  {
    id: 'model-aperture-8-shutter-60',
    type: 'video',
    name: 'Taking Model Picture',
    description: 'This is a video about taking model picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/model-shutter-l7WlG8MfXFiraPXaAYNF0SSrudkwJB.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'model-aperture-8-shutter-60-picture' },
    ]
  },
  {
    id: 'model-aperture-8-shutter-250',
    type: 'video',
    name: 'Taking Model Picture',
    description: 'This is a video about taking model picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/model-shutter-l7WlG8MfXFiraPXaAYNF0SSrudkwJB.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'model-aperture-8-shutter-250-picture' },
    ]
  },

  {
    id: 'building',
    type: 'video',
    name: 'Building',
    description: 'This is a video about building',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/building-HH2xsHHpL4pR4AEXZcQMujXVUcHqmt.mov',
    options: [
      { text: 'Aperture 1',
        children: [
          { text: 'Shutter 15', nextAssetId: 'building-aperture-1-shutter-15' },
          { text: 'Shutter 60', nextAssetId: 'building-aperture-1-shutter-60' },
          { text: 'Shutter 250', nextAssetId: 'building-aperture-1-shutter-250' },
        ]
      },
      { text: 'Aperture 4',
        children: [
          { text: 'Shutter 15', nextAssetId: 'building-aperture-4-shutter-15' },
          { text: 'Shutter 60', nextAssetId: 'building-aperture-4-shutter-60' },
          { text: 'Shutter 250', nextAssetId: 'building-aperture-4-shutter-250' },
        ]
      },
      { text: 'Aperture 8',
        children: [
          { text: 'Shutter 15', nextAssetId: 'building-aperture-8-shutter-15' },
          { text: 'Shutter 60', nextAssetId: 'building-aperture-8-shutter-60' },
          { text: 'Shutter 250', nextAssetId: 'building-aperture-8-shutter-250' },
        ]
      },
    ]
  },

  // group 1
  {
    id: 'building-aperture-1-shutter-15',
    type: 'video',
    name: 'Taking Building Picture',
    description: 'This is a video about taking building picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/building-shutter-aRC0iuwH1A3vP0BFXRuIU9aVv47l0H.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'building-aperture-1-shutter-15-picture' },
    ]
  },
  {
    id: 'building-aperture-1-shutter-60',
    type: 'video',
    name: 'Taking Building Picture',
    description: 'This is a video about taking building picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/building-shutter-aRC0iuwH1A3vP0BFXRuIU9aVv47l0H.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'building-aperture-1-shutter-60-picture' },
    ]
  },
  {
    id: 'building-aperture-1-shutter-250',
    type: 'video',
    name: 'Taking Building Picture',
    description: 'This is a video about taking building picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/building-shutter-aRC0iuwH1A3vP0BFXRuIU9aVv47l0H.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'building-aperture-1-shutter-250-picture' },
    ]
  },
  
  // group 2
  {
    id: 'building-aperture-4-shutter-15',
    type: 'video',
    name: 'Taking Building Picture',
    description: 'This is a video about taking building picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/building-shutter-aRC0iuwH1A3vP0BFXRuIU9aVv47l0H.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'building-aperture-4-shutter-15-picture' },
    ]
  },
  {
    id: 'building-aperture-4-shutter-60',
    type: 'video',
    name: 'Taking Building Picture',
    description: 'This is a video about taking building picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/building-shutter-aRC0iuwH1A3vP0BFXRuIU9aVv47l0H.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'building-aperture-4-shutter-60-picture' },
    ]
  },
  {
    id: 'building-aperture-4-shutter-250',
    type: 'video',
    name: 'Taking Building Picture',
    description: 'This is a video about taking building picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/building-shutter-aRC0iuwH1A3vP0BFXRuIU9aVv47l0H.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'building-aperture-4-shutter-250-picture' },
    ]
  },

  // group 3
  {
    id: 'building-aperture-8-shutter-15',
    type: 'video',
    name: 'Taking Building Picture',
    description: 'This is a video about taking building picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/building-shutter-aRC0iuwH1A3vP0BFXRuIU9aVv47l0H.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'building-aperture-8-shutter-15-picture' },
    ]
  },
  {
    id: 'building-aperture-8-shutter-60',
    type: 'video',
    name: 'Taking Building Picture',
    description: 'This is a video about taking building picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/building-shutter-aRC0iuwH1A3vP0BFXRuIU9aVv47l0H.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'building-aperture-8-shutter-60-picture' },
    ]
  },
  {
    id: 'building-aperture-8-shutter-250',
    type: 'video',
    name: 'Taking Building Picture',
    description: 'This is a video about taking building picture',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/building-shutter-aRC0iuwH1A3vP0BFXRuIU9aVv47l0H.mov',
    options: [
      { text: 'Check out the photo', nextAssetId: 'building-aperture-8-shutter-250-picture' },
    ]
  },

  {
    id: 'balcony-aperture-1-shutter-15-picture',
    type: 'photo',
    name: 'Balcony Photo',
    description: 'This is a photo of a balcony',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/balcony-aperture-1-shutter-15.jpg',
    options: [],
  },
  {
    id: 'balcony-aperture-1-shutter-60-picture',
    type: 'photo',
    name: 'Balcony Photo',
    description: 'This is a photo of a balcony',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/balcony-aperture-1-shutter-60.jpg',
    options: [],
  },
  {
    id: 'balcony-aperture-1-shutter-250-picture',
    type: 'photo',
    name: 'Balcon Photo',
    description: 'This is a photo of a balcony',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/balcony-aperture-1-shutter-250.jpg',
    options: [],
  },
  {
    id: 'balcony-aperture-8-shutter-15-picture',
    type: 'photo',
    name: 'Balcony Photo',
    description: 'This is a photo of a balcony',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/balcony-aperture-8-shutter-15.jpg',
    options: [],
  },
  {
    id: 'balcony-aperture-8-shutter-60-picture',
    type: 'photo',
    name: 'Balcony Photo',
    description: 'This is a photo of a balcony',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/balcony-aperture-8-shutter-60.jpg',
    options: [],
  },
  {
    id: 'balcony-aperture-8-shutter-250-picture',
    type: 'photo',
    name: 'Balcon Photo',
    description: 'This is a photo of a balcony',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/balcony-aperture-8-shutter-250.jpg',
    options: [],
  },
  {
    id: 'balcony-aperture-16-shutter-15-picture',
    type: 'photo',
    name: 'Balcony Photo',
    description: 'This is a photo of a balcony',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/balcony-aperture-16-shutter-15.jpg',
    options: [],
  },
  {
    id: 'balcony-aperture-16-shutter-60-picture',
    type: 'photo',
    name: 'Balcony Photo',
    description: 'This is a photo of a balcony',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/balcony-aperture-16-shutter-60.jpg',
    options: [],
  },
  {
    id: 'balcony-aperture-16-shutter-250-picture',
    type: 'photo',
    name: 'Balcon Photo',
    description: 'This is a photo of a balcony',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/balcony-aperture-16-shutter-250.jpg',
    options: [],
  },
  {
    id: 'model-aperture-1-shutter-15-picture',
    type: 'photo',
    name: 'Model Photo',
    description: 'This is a photo of a model',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/model-aperture-1-shutter-15.jpg',
    options: [],
  },
  {
    id: 'model-aperture-1-shutter-60-picture',
    type: 'photo',
    name: 'Model Photo',
    description: 'This is a photo of a model',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/model-aperture-1-shutter-60.jpg',
    options: [],
  },
  {
    id: 'model-aperture-1-shutter-250-picture',
    type: 'photo',
    name: 'Mode Photo',
    description: 'This is a photo of a model',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/model-aperture-1-shutter-250.jpg',
    options: [],
  },
  {
    id: 'model-aperture-4-shutter-15-picture',
    type: 'photo',
    name: 'Model Photo',
    description: 'This is a photo of a model',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/model-aperture-4-shutter-15.jpg',
    options: [],
  },
  {
    id: 'model-aperture-4-shutter-60-picture',
    type: 'photo',
    name: 'Model Photo',
    description: 'This is a photo of a model',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/model-aperture-4-shutter-60.jpg',
    options: [],
  },
  {
    id: 'model-aperture-4-shutter-250-picture',
    type: 'photo',
    name: 'Mode Photo',
    description: 'This is a photo of a model',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/model-aperture-4-shutter-250.jpg',
    options: [],
  },
  {
    id: 'model-aperture-8-shutter-15-picture',
    type: 'photo',
    name: 'Model Photo',
    description: 'This is a photo of a model',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/model-aperture-8-shutter-15.jpg',
    options: [],
  },
  {
    id: 'model-aperture-8-shutter-60-picture',
    type: 'photo',
    name: 'Model Photo',
    description: 'This is a photo of a model',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/model-aperture-8-shutter-60.jpg',
    options: [],
  },
  {
    id: 'model-aperture-8-shutter-250-picture',
    type: 'photo',
    name: 'Mode Photo',
    description: 'This is a photo of a model',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/model-aperture-8-shutter-250.jpg',
    options: [],
  },
  {
    id: 'building-aperture-1-shutter-15-picture',
    type: 'photo',
    name: 'Building Photo',
    description: 'This is a photo of building',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/building-aperture-1-shutter-15.jpg',
    options: [],
  },
  {
    id: 'building-aperture-1-shutter-60-picture',
    type: 'photo',
    name: 'Building Photo',
    description: 'This is a photo of building',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/building-aperture-1-shutter-60.jpg',
    options: [],
  },
  {
    id: 'building-aperture-1-shutter-250-picture',
    type: 'photo',
    name: 'Buildin Photo',
    description: 'This is a photo of building',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/building-aperture-1-shutter-250.jpg',
    options: [],
  },
  {
    id: 'building-aperture-4-shutter-15-picture',
    type: 'photo',
    name: 'Building Photo',
    description: 'This is a photo of building',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/building-aperture-4-shutter-15.jpg',
    options: [],
  },
  {
    id: 'building-aperture-4-shutter-60-picture',
    type: 'photo',
    name: 'Building Photo',
    description: 'This is a photo of building',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/building-aperture-4-shutter-60.jpg',
    options: [],
  },
  {
    id: 'building-aperture-4-shutter-250-picture',
    type: 'photo',
    name: 'Buildin Photo',
    description: 'This is a photo of building',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/building-aperture-4-shutter-250.jpg',
    options: [],
  },
  {
    id: 'building-aperture-8-shutter-15-picture',
    type: 'photo',
    name: 'Building Photo',
    description: 'This is a photo of building',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/building-aperture-8-shutter-15.jpg',
    options: [],
  },
  {
    id: 'building-aperture-8-shutter-60-picture',
    type: 'photo',
    name: 'Building Photo',
    description: 'This is a photo of building',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/building-aperture-8-shutter-60.jpg',
    options: [],
  },
  {
    id: 'building-aperture-8-shutter-250-picture',
    type: 'photo',
    name: 'Buildin Photo',
    description: 'This is a photo of building',
    src: 'https://pm0h9jpwpaimrfy1.public.blob.vercel-storage.com/building-aperture-8-shutter-250.jpg',
    options: [],
  },
]
  