import { defaultLanguage } from '~/config';
import { getClient } from '~/features/Blog/service/sanity';
import { BlogTypes } from '.';

export function getPosts({ language }: { language: string }): Promise<BlogTypes.Post[]> {
  const query = `*[!(_id in path('drafts.**')) && _type=='post'  && language == '${
    language ?? defaultLanguage
  }' && type == 'post'] | order(_createdAt desc)`;

  return getClient().fetch(query);
}

export function getPost(slug?: string, preview = false) {
  const queryParams = { slug };
  const query = preview
    ? `*[_type == "post" && slug.current ==  $slug]`
    : `*[!(_id in path('drafts.**')) && _type == "post" && slug.current ==  $slug]`;

  return getClient().fetch(query, queryParams);
}
