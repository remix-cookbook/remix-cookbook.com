import { defaultLanguage } from '~/config';
import { getClient } from '~/lib/sanity/getClient';
import { BlogTypes } from '.';

export function getPosts({ language }: { language: string }): Promise<BlogTypes.Post[]> {
  const query = `*[_type=='post'  && language == '${
    language ?? defaultLanguage
  }' && type == 'post'] | order(_createdAt desc)`;

  return getClient().fetch(query);
}

export function getPost(slug?: string, preview?: boolean) {
  const query = `*[_type == "post" && slug.current ==  $slug]`;
  const queryParams = { slug };

  return getClient(preview).fetch(query, queryParams);
}
