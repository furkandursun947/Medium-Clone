import {
    createCurrentUserHook,
    createClient,
} from 'next-sanity';
import imageUrlBuilder from './sanitymedium/node_modules/@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2022-08-08",
    useCdn: process.env.NODE_ENV === "production"
}


export const sanityClient = createClient(config);

export const urlFor = (source) => imageUrlBuilder(config).image(source);

export const useCurrentUser = createCurrentUserHook(config);