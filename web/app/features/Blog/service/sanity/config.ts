export const config = {
  apiVersion: process.env.SANITY_API_VERSION!,
  dataset: process.env.SANITY_DATASET!,
  projectId: process.env.SANITY_PROJECT_ID!,
  useCdn: Boolean(process.env.SANITY_USE_CDN!),
  token: process.env.SANITY_API_TOKEN!,
};
