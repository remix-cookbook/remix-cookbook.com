import BlockContent from '@sanity/block-content-to-react';
import { serializers } from './util';

export function Content({ blocks }) {
  return (
    <BlockContent
      blocks={blocks}
      serializers={serializers}
      projectId="4njl7vlm"
      dataset="blog-contents"
    />
  );
}
