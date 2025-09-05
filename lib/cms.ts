import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "placeholder",
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: process.env.SANITY_API_VERSION || "2024-01-01",
  useCdn: true,
  perspective: "published",
  token: process.env.SANITY_READ_TOKEN,
});

export const BLOG_TAG = "blog";

export const queries = {
  allPosts: `*[_type == "post"]|order(publishedAt desc){
    _id, title, "slug": slug.current, excerpt, coverImage, publishedAt,
    "author": author->{name}
  }`,
  postBySlug: `*[_type=="post" && slug.current==$slug][0]{
    _id, title, "slug": slug.current, excerpt, coverImage, body, publishedAt,
    "author": author->{name}
  }`,
};
