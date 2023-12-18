import { createClient } from 'next-sanity'
import imageUrlBuilder from "@sanity/image-url";
import build from 'next/dist/build';

export const client = createClient({
    projectId: '9ycyn5y2',
    dataset: 'production',
    apiVersion: '2023-12-15',
    useCdn: true,
});

const builder = imageUrlBuilder(client)

export function urlFor(source:any){
    return builder.image(source);
}