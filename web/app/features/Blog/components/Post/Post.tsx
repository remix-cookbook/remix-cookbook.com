import { Headings, Link, Prose } from '~/components';
import { Comments, Content } from '~/features/Blog';
import { DateTimeUtils } from '~/util';
import { Post } from '../../types';
import m2r from 'minutes-to-read';
import { ContentUtils } from '../Content';
import pictures from '~/features/Blog/components/Posts/pictures-space.json';
import shuffle from 'lodash/shuffle';

export interface PostProps {
  post: Post;
  preview: boolean;
}

export function Post({ post, preview = false }: PostProps) {
  const content = ContentUtils.blocksToText(post.content).join(' ');
  const minutesToRead = m2r(content);
  const [picture] = shuffle(pictures);
  return (
    <>
      <div className="w-full h-48 md:h-72">
        <img
          src={picture.regular}
          className="object-cover w-full h-full"
          alt={`${post.title} - Cover image`}
        />
      </div>
      <Prose>
        <>
          {preview ? (
            <div className="p-2 antialiased font-semibold text-center bg-opacity-70 text-normal bg-light-snow-storm1 text-dark-polar-night3">
              Preview Mode Enabled
            </div>
          ) : null}
          <Headings.Content>{post.title}</Headings.Content>
          <div className="pb-5 text-sm border-b text-light-snow-storm3 border-dark-polar-night1">
            <p>
              By <span className="font-semibold">{post.author}</span> -{' '}
              <Link.External href={`https://${post.author_url}`}>{post.author_url}</Link.External>
            </p>
            <dl>
              <dd>Created: {DateTimeUtils.date(post._createdAt)}</dd>
            </dl>
            <dl>
              <dd>Last update: {DateTimeUtils.date(post._updatedAt)}</dd>
            </dl>
            <dl>
              <dd className="inline-block mt-6 text-base">
                ⏳ &nbsp;&nbsp;{minutesToRead}, not taking into consideration the code examples.
              </dd>
            </dl>
          </div>
          <Content blocks={post.content} />
          <Comments />
        </>
      </Prose>
    </>
  );
}
