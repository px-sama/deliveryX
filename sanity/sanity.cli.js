import { defineCliConfig } from 'sanity/cli'
// import { ImageUrlBuilder } from 'sanity'
// import { imageUrlBuilder } from '@sanity/image-url';

// const builder = imageUrlBuilder(defineCliConfig)
// export const urlFor = (source) => builder.image(source);

export default defineCliConfig({
  api: {
    projectId: '7lv91qeu',
    dataset: 'production'
  }
})
