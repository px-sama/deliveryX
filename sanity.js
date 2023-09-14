import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
// import client from './sanity/sanity.cli'
// const client = sanityClient({
//     projectId: '7lv91qeu',
//     dataset: 'production',
//     useCdn: true,
//     apiVersion: "2021-10-21",
// });

// const builder = imageUrlBuilder(client);
// export const urlFor = (source) => builder.image(source);

// export default client;

// Get a pre-configured url-builder from your sanity client

const client = createClient({
    projectId: '7lv91qeu',
    dataset: 'production',
    useCdn: true,
    apiVersion: "2023-05-03",
});

const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export const urlFor = (source) => builder.image(source);
export default client;