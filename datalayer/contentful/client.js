import { createClient } from "contentful";
export const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY,
    environment: process.env.CONTENTFUL_ENVIRONMENT
})