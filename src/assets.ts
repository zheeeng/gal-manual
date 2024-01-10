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
    src: 'https://player.vimeo.com/video/901591915',
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
    src: 'https://player.vimeo.com/video/901591863',
    options: [
      { text: 'Check out the photo', nextAssetId: 'balcony-aperture-1-shutter-15-picture' },
    ]
  },
  {
    id: 'balcony-aperture-1-shutter-60',
    type: 'video',
    name: 'Taking Balcony Picture',
    description: 'This is a video about taking balcony picture',
    src: 'https://player.vimeo.com/video/901591863',
    options: [
      { text: 'Check out the photo', nextAssetId: 'balcony-aperture-1-shutter-60-picture' },
    ]
  },
  {
    id: 'balcony-aperture-1-shutter-250',
    type: 'video',
    name: 'Taking Balcony Picture',
    description: 'This is a video about taking balcony picture',
    src: 'https://player.vimeo.com/video/901591863',
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
    src: 'https://player.vimeo.com/video/901591863',
    options: [
      { text: 'Check out the photo', nextAssetId: 'balcony-aperture-8-shutter-15-picture' },
    ]
  },
  {
    id: 'balcony-aperture-8-shutter-60',
    type: 'video',
    name: 'Taking Balcony Picture',
    description: 'This is a video about taking balcony picture',
    src: 'https://player.vimeo.com/video/901591863',
    options: [
      { text: 'Check out the photo', nextAssetId: 'balcony-aperture-8-shutter-60-picture' },
    ]
  },
  {
    id: 'balcony-aperture-8-shutter-250',
    type: 'video',
    name: 'Taking Balcony Picture',
    description: 'This is a video about taking balcony picture',
    src: 'https://player.vimeo.com/video/901591863',
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
    src: 'https://player.vimeo.com/video/901591863',
    options: [
      { text: 'Check out the photo', nextAssetId: 'balcony-aperture-16-shutter-15-picture' },
    ]
  },
  {
    id: 'balcony-aperture-16-shutter-60',
    type: 'video',
    name: 'Taking Balcony Picture',
    description: 'This is a video about taking balcony picture',
    src: 'https://player.vimeo.com/video/901591863',
    options: [
      { text: 'Check out the photo', nextAssetId: 'balcony-aperture-16-shutter-60-picture' },
    ]
  },
  {
    id: 'balcony-aperture-16-shutter-250',
    type: 'video',
    name: 'Taking Balcony Picture',
    description: 'This is a video about taking balcony picture',
    src: 'https://player.vimeo.com/video/901591863',
    options: [
      { text: 'Check out the photo', nextAssetId: 'balcony-aperture-16-shutter-250-picture' },
    ]
  },

  {
    id: 'model',
    type: 'video',
    name: 'Model',
    description: 'This is a video about model',
    src: 'https://player.vimeo.com/video/901592072',
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
    src: 'https://player.vimeo.com/video/901592029',
    options: [
      { text: 'Check out the photo', nextAssetId: 'model-aperture-1-shutter-15-picture' },
    ]
  },
  {
    id: 'model-aperture-1-shutter-60',
    type: 'video',
    name: 'Taking Model Picture',
    description: 'This is a video about taking model picture',
    src: 'https://player.vimeo.com/video/901592029',
    options: [
      { text: 'Check out the photo', nextAssetId: 'model-aperture-1-shutter-60-picture' },
    ]
  },
  {
    id: 'model-aperture-1-shutter-250',
    type: 'video',
    name: 'Taking Model Picture',
    description: 'This is a video about taking model picture',
    src: 'https://player.vimeo.com/video/901592029',
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
    src: 'https://player.vimeo.com/video/901592029',
    options: [
      { text: 'Check out the photo', nextAssetId: 'model-aperture-4-shutter-15-picture' },
    ]
  },
  {
    id: 'model-aperture-4-shutter-60',
    type: 'video',
    name: 'Taking Model Picture',
    description: 'This is a video about taking model picture',
    src: 'https://player.vimeo.com/video/901592029',
    options: [
      { text: 'Check out the photo', nextAssetId: 'model-aperture-4-shutter-60-picture' },
    ]
  },
  {
    id: 'model-aperture-4-shutter-250',
    type: 'video',
    name: 'Taking Model Picture',
    description: 'This is a video about taking model picture',
    src: 'https://player.vimeo.com/video/901592029',
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
    src: 'https://player.vimeo.com/video/901592029',
    options: [
      { text: 'Check out the photo', nextAssetId: 'model-aperture-8-shutter-15-picture' },
    ]
  },
  {
    id: 'model-aperture-8-shutter-60',
    type: 'video',
    name: 'Taking Model Picture',
    description: 'This is a video about taking model picture',
    src: 'https://player.vimeo.com/video/901592029',
    options: [
      { text: 'Check out the photo', nextAssetId: 'model-aperture-8-shutter-60-picture' },
    ]
  },
  {
    id: 'model-aperture-8-shutter-250',
    type: 'video',
    name: 'Taking Model Picture',
    description: 'This is a video about taking model picture',
    src: 'https://player.vimeo.com/video/901592029',
    options: [
      { text: 'Check out the photo', nextAssetId: 'model-aperture-8-shutter-250-picture' },
    ]
  },

  {
    id: 'building',
    type: 'video',
    name: 'Building',
    description: 'This is a video about building',
    src: 'https://player.vimeo.com/video/901592175',
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
    src: 'https://player.vimeo.com/video/901592139',
    options: [
      { text: 'Check out the photo', nextAssetId: 'building-aperture-1-shutter-15-picture' },
    ]
  },
  {
    id: 'building-aperture-1-shutter-60',
    type: 'video',
    name: 'Taking Building Picture',
    description: 'This is a video about taking building picture',
    src: 'https://player.vimeo.com/video/901592139',
    options: [
      { text: 'Check out the photo', nextAssetId: 'building-aperture-1-shutter-60-picture' },
    ]
  },
  {
    id: 'building-aperture-1-shutter-250',
    type: 'video',
    name: 'Taking Building Picture',
    description: 'This is a video about taking building picture',
    src: 'https://player.vimeo.com/video/901592139',
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
    src: 'https://player.vimeo.com/video/901592139',
    options: [
      { text: 'Check out the photo', nextAssetId: 'building-aperture-4-shutter-15-picture' },
    ]
  },
  {
    id: 'building-aperture-4-shutter-60',
    type: 'video',
    name: 'Taking Building Picture',
    description: 'This is a video about taking building picture',
    src: 'https://player.vimeo.com/video/901592139',
    options: [
      { text: 'Check out the photo', nextAssetId: 'building-aperture-4-shutter-60-picture' },
    ]
  },
  {
    id: 'building-aperture-4-shutter-250',
    type: 'video',
    name: 'Taking Building Picture',
    description: 'This is a video about taking building picture',
    src: 'https://player.vimeo.com/video/901592139',
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
    src: 'https://player.vimeo.com/video/901592139',
    options: [
      { text: 'Check out the photo', nextAssetId: 'building-aperture-8-shutter-15-picture' },
    ]
  },
  {
    id: 'building-aperture-8-shutter-60',
    type: 'video',
    name: 'Taking Building Picture',
    description: 'This is a video about taking building picture',
    src: 'https://player.vimeo.com/video/901592139',
    options: [
      { text: 'Check out the photo', nextAssetId: 'building-aperture-8-shutter-60-picture' },
    ]
  },
  {
    id: 'building-aperture-8-shutter-250',
    type: 'video',
    name: 'Taking Building Picture',
    description: 'This is a video about taking building picture',
    src: 'https://player.vimeo.com/video/901592139',
    options: [
      { text: 'Check out the photo', nextAssetId: 'building-aperture-8-shutter-250-picture' },
    ]
  },

  {
    id: 'balcony-aperture-1-shutter-15-picture',
    type: 'photo',
    name: 'Balcony Photo',
    description: 'This is a photo of a balcony',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/5b26696f-1d6d-4bf8-8a1b-358d55280a7d',
    options: [],
  },
  {
    id: 'balcony-aperture-1-shutter-60-picture',
    type: 'photo',
    name: 'Balcony Photo',
    description: 'This is a photo of a balcony',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/ddaf8800-4bfe-455f-a7c6-b75fb738b515',
    options: [],
  },
  {
    id: 'balcony-aperture-1-shutter-250-picture',
    type: 'photo',
    name: 'Balcony Photo',
    description: 'This is a photo of a balcony',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/3f003dce-abbc-48e2-b318-4e1b7ad42f69',
    options: [],
  },
  {
    id: 'balcony-aperture-8-shutter-15-picture',
    type: 'photo',
    name: 'Balcony Photo',
    description: 'This is a photo of a balcony',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/697e60d9-633a-433c-ae5d-2814c30e9f6b',
    options: [],
  },
  {
    id: 'balcony-aperture-8-shutter-60-picture',
    type: 'photo',
    name: 'Balcony Photo',
    description: 'This is a photo of a balcony',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/babf17d3-7776-496d-b6c7-1880528243e7',
    options: [],
  },
  {
    id: 'balcony-aperture-8-shutter-250-picture',
    type: 'photo',
    name: 'Balcony Photo',
    description: 'This is a photo of a balcony',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/1484a81d-e921-486e-9a43-30d509ac814c',
    options: [],
  },
  {
    id: 'balcony-aperture-16-shutter-15-picture',
    type: 'photo',
    name: 'Balcony Photo',
    description: 'This is a photo of a balcony',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/afc401be-8edf-4d00-bb05-0612eeb2734e',
    options: [],
  },
  {
    id: 'balcony-aperture-16-shutter-60-picture',
    type: 'photo',
    name: 'Balcony Photo',
    description: 'This is a photo of a balcony',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/024f1555-84f5-49dc-b40a-0c1596942fcc',
    options: [],
  },
  {
    id: 'balcony-aperture-16-shutter-250-picture',
    type: 'photo',
    name: 'Balcony Photo',
    description: 'This is a photo of a balcony',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/65f885aa-aeb5-4158-871c-5573102610a0',
    options: [],
  },
  {
    id: 'model-aperture-1-shutter-15-picture',
    type: 'photo',
    name: 'Model Photo',
    description: 'This is a photo of a model',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/3b4dc48d-118c-4bfe-8549-74a5788a4ae8',
    options: [],
  },
  {
    id: 'model-aperture-1-shutter-60-picture',
    type: 'photo',
    name: 'Model Photo',
    description: 'This is a photo of a model',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/51673297-37e0-4942-978e-e439fba60c68',
    options: [],
  },
  {
    id: 'model-aperture-1-shutter-250-picture',
    type: 'photo',
    name: 'Mode Photo',
    description: 'This is a photo of a model',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/711ea91f-7812-4f11-ba02-fbd76407b5ae',
    options: [],
  },
  {
    id: 'model-aperture-4-shutter-15-picture',
    type: 'photo',
    name: 'Model Photo',
    description: 'This is a photo of a model',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/6c680804-28c1-40b6-a497-8dc02409cf20',
    options: [],
  },
  {
    id: 'model-aperture-4-shutter-60-picture',
    type: 'photo',
    name: 'Model Photo',
    description: 'This is a photo of a model',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/0c769771-826b-40ab-b76f-9783c2eefbe6',
    options: [],
  },
  {
    id: 'model-aperture-4-shutter-250-picture',
    type: 'photo',
    name: 'Mode Photo',
    description: 'This is a photo of a model',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/fd573b95-55ce-451e-abad-d93229e9b988',
    options: [],
  },
  {
    id: 'model-aperture-8-shutter-15-picture',
    type: 'photo',
    name: 'Model Photo',
    description: 'This is a photo of a model',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/29f7ff00-40be-49bc-a011-7cc2d9fc64bc',
    options: [],
  },
  {
    id: 'model-aperture-8-shutter-60-picture',
    type: 'photo',
    name: 'Model Photo',
    description: 'This is a photo of a model',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/a79305d2-3b7e-4292-95c8-754e358b8c4b',
    options: [],
  },
  {
    id: 'model-aperture-8-shutter-250-picture',
    type: 'photo',
    name: 'Mode Photo',
    description: 'This is a photo of a model',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/51d3482b-8de5-44de-9dd7-b9405fc84f89',
    options: [],
  },
  {
    id: 'building-aperture-1-shutter-15-picture',
    type: 'photo',
    name: 'Building Photo',
    description: 'This is a photo of building',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/c243f8b7-d0a4-4f73-81e0-74e0616bc7e7',
    options: [],
  },
  {
    id: 'building-aperture-1-shutter-60-picture',
    type: 'photo',
    name: 'Building Photo',
    description: 'This is a photo of building',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/c96ac290-8f0b-4063-a662-f9a5fe18c845',
    options: [],
  },
  {
    id: 'building-aperture-1-shutter-250-picture',
    type: 'photo',
    name: 'Building Photo',
    description: 'This is a photo of building',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/6900a512-9eb7-42fc-9b11-2c9cd6f99bb1',
    options: [],
  },
  {
    id: 'building-aperture-4-shutter-15-picture',
    type: 'photo',
    name: 'Building Photo',
    description: 'This is a photo of building',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/7466ff62-afe4-4993-a104-2daa83065268',
    options: [],
  },
  {
    id: 'building-aperture-4-shutter-60-picture',
    type: 'photo',
    name: 'Building Photo',
    description: 'This is a photo of building',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/359a968b-5057-440d-902e-ee221f791d8e',
    options: [],
  },
  {
    id: 'building-aperture-4-shutter-250-picture',
    type: 'photo',
    name: 'Building Photo',
    description: 'This is a photo of building',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/558c8487-ed06-495c-bfdc-ac2512329c1b',
    options: [],
  },
  {
    id: 'building-aperture-8-shutter-15-picture',
    type: 'photo',
    name: 'Building Photo',
    description: 'This is a photo of building',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/f9c8795f-02e8-4208-8a77-8ed0eb6010af',
    options: [],
  },
  {
    id: 'building-aperture-8-shutter-60-picture',
    type: 'photo',
    name: 'Building Photo',
    description: 'This is a photo of building',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/b88f0fe8-2bb0-4b0b-a97e-6444b88aa6f0',
    options: [],
  },
  {
    id: 'building-aperture-8-shutter-250-picture',
    type: 'photo',
    name: 'Building Photo',
    description: 'This is a photo of building',
    src: 'https://github.com/zheeeng/gal-manual/assets/1303154/74a7ec59-fe0f-4bc6-95e5-3791b96cc019',
    options: [],
  },
]
