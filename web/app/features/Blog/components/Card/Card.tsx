import { route } from 'routes-gen';
import { Link } from '~/components';
import { BlogTypes } from '~/features/Blog';
import { DateTimeUtils } from '~/util';
import classNames from 'classnames';
import { Credits } from './Credits';

export interface CardProps {
  /* Post data to display */
  post: BlogTypes.Post;

  /* Picture to display */
  picture: BlogTypes.Picture;

  /* If the first post in the list, also display the excerpt */
  excerpt?: string;

  /* If the first in the list, display bigger image */
  small?: boolean;
}

export function Card({ post, excerpt, picture, small = false }: CardProps) {
  const { user, regular: pictureRG, small: pictureSM, alt_description } = picture;
  const { slug, _createdAt, title } = post;

  return (
    <div className="h-full border border-gray-800 shadow-lg rounded-xl bg-light-snow-storm3 bg-opacity-10">
      <div
        className={classNames({
          'card-image-box': small,
          'card-image-box-highlight': !small,
        })}
      >
        <Credits user={user} />
        <img
          src={small ? pictureSM : pictureRG}
          className="object-cover w-full h-full rounded-t-xl"
          alt={alt_description}
        />
      </div>
      <div className="p-6 text-light-snow-storm3">
        <Link.Internal
          href={route('/:slug', {
            slug: slug.current,
          })}
          data-testid="post-link"
        >
          <p className="mb-1 text-sm text-gray-300">{DateTimeUtils.date(_createdAt)}</p>
          <p className="mb-3 text-xl antialiased font-semibold shadowed-text">{title}</p>
          {excerpt ? <p className="hidden text-base shadowed-text md:block">{excerpt}</p> : null}
        </Link.Internal>
      </div>
    </div>
  );
}
