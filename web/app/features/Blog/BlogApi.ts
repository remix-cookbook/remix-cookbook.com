import { getClient } from '~/lib/sanity/getClient';
import { BlogTypes } from '.';

export async function getPosts({ language }: { language: string }): Promise<BlogTypes.Post[]> {
  const query = `*[_type=='post'  && language == 'en' && type == 'post'] | order(_createdAt desc)`;

  return await getClient().fetch(query);
}

export function getPost(slug?: string, preview?: boolean) {
  const query = `*[_type == "post" && slug.current ==  $slug]`;
  const queryParams = { slug };

  return getClient(preview).fetch(query, queryParams);
}
