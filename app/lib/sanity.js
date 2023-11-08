import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'yd1t7ds2',
    dataset: 'production',
    apiVersion: '2023-11-08',
    useCdn: false
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);