import { Bookmark as BookmarkType, Like } from '@prisma/client';
import m2r from 'minutes-to-read';
import { Headings, Link, Prose } from '~/components';
import { BlogTypes, Comments, Content } from '~/features/Blog';
import { Bookmark } from '~/features/Bookmarks';
import { LikeButton } from '~/features/Likes/components/LikeButton';
import { DateTimeUtils } from '~/util';
import { Credits } from '../Card/Credits';
import { ContentUtils } from '../Content';

export interface PostProps {
  post: BlogTypes.Post;
  preview: boolean;
  picture: BlogTypes.Picture;
  bookmark: BookmarkType | null;
  userLike: Like | null;
  likeQuantity: number;
}

export function Post({
  post,
  preview = false,
  picture,
  bookmark,
  userLike,
  likeQuantity,
}: PostProps) {
  const content = ContentUtils.blocksToText(post.content).join(' ');
  const minutesToRead = m2r(content);

  return (
    <>
      <div className="relative w-full h-48 md:h-80">
        <Credits user={picture.user} />
        <img
          src={picture.regular}
          className="object-cover w-full h-full"
          alt={`${post.title} - Cover`}
        />
      </div>
      <Prose>
        <>
          {preview ? (
            <div className="p-2 antialiased font-semibold text-center text-normal bg-light-snow-storm1 bg-opacity-70 text-dark-polar-night3">
              Preview Mode Enabled
            </div>
          ) : null}
          <Headings.Content>
            <>
              <div className="flex items-start justify-between gap-3 mb-3">
                {post.title}
                <div className="flex flex-col">
                  <Bookmark post={post} bookmark={bookmark} />
                </div>
              </div>
              <LikeButton post={post} userLike={userLike} likeQuantity={likeQuantity} />
            </>
          </Headings.Content>
          <div className="pb-6 text-sm border-b border-dark-polar-night1 text-light-snow-storm3">
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
