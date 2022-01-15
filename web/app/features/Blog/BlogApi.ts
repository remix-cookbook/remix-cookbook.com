import { getClient } from '~/lib/sanity/getClient';
import { BlogTypes } from '.';

export async function getPosts({ language }: { language: string }): Promise<BlogTypes.Post[]> {
  const query = `*[_type=="postType" && name == "Post"]{
    "posts": *[_type=='post' && language == '${language}' && references(^._id)] | order(_createdAt desc)
  }`;
  const [{ posts }] = await getClient().fetch(query);

  return posts;
}

export function getPost(slug?: string, preview?: boolean) {
  const query = `*[_type == "post" && slug.current ==  $slug]`;
  const queryParams = { slug };

  return getClient(preview).fetch(query, queryParams);
}
