import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'yd1t7ds2',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true,
    // token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

// export const urlFor = (source) => builder.image(source);
export function urlFor(source) {
    return builder.image(source);
}