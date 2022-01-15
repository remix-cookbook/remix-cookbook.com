import { route } from 'routes-gen';
import { Link } from '~/components';
import { BlogTypes } from '~/features/Blog';
import { DateTimeUtils } from '~/util';
import classNames from 'classnames';

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
    <div className="h-full border border-gray-700 shadow-lg bg-light-snow-storm3 bg-opacity-10 rounded-xl">
      <div
        className={classNames({
          'card-image-box': small,
          'card-image-box-highlight': !small,
        })}
      >
        <span className="absolute z-10 right-4 top-2">
          <Link.External
            href={user.portfolio_url ?? 'https://unsplash.com'}
            externalIndicator={false}
            title={`Photo by ${user.name} on Unsplash`}
          >
            <span className="text-xs text-light-snow-storm3 shadowed-text">
              Photo by {user.name} on Unsplash
            </span>
          </Link.External>
        </span>
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
        >
          <p className="mb-1 text-sm text-gray-300">{DateTimeUtils.date(_createdAt)}</p>
          <p className="mb-3 text-xl antialiased font-semibold shadowed-text">{title}</p>
          {excerpt ? <p className="hidden text-base shadowed-text md:block">{excerpt}</p> : null}
        </Link.Internal>
      </div>
    </div>
  );
}
