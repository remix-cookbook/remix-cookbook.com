import { BlogTypes } from '~/features/Blog';
import { Card } from '../Card';
import { ContentUtils } from '../Content';

export interface PostsProps {
  posts: BlogTypes.Post[];
  pictures: BlogTypes.Picture[];
}

export function Posts({ posts, pictures }: PostsProps) {
  const [firstPost, ...remainingPosts] = posts;
  const [firstPicture, ...remainingPictures] = pictures;
  const [excerpt] = ContentUtils.blocksToText(firstPost.content);

  return (
    <div className="max-w-6xl px-4 mx-auto mt-6">
      <div className="mb-6">
        <Card post={firstPost} excerpt={excerpt} picture={firstPicture} />
      </div>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {remainingPosts.map((post, index) => (
          <li key={post._id}>
            <Card post={post} picture={remainingPictures[index]} small />
          </li>
        ))}
      </ul>
    </div>
  );
}
