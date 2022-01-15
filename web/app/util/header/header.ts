import { truncate } from 'lodash';
import { BlogTypes, ContentUtils } from '~/features/Blog';
import tailwindcss from '~/styles/tailwind.css';
import background from '~/styles/background.css';
import { filterDataToSingleItem } from '~/lib/sanity/filterDataToSingleItem';

const domain = 'remix-cookbook.com';

export function description(content: string): string {
  return truncate(content, { length: 150 });
}

export function globalMeta() {
  return {
    'theme-color': '#2E3440',
    'title': 'Remix Cookbook - Easy to follow recipes for Remix.run',
    'description': 'Easy to follow recipes for the Remix.run framework',
    'author': 'Fabio Vedovelli',
    'og:type': 'website',
    'og:site_name': 'Remix Cookbook',
    'og:title': 'Remix Cookbook - Easy to follow recipes for Remix.run',
    'og:description': 'Easy to follow recipes for the Remix.run framework',
    'og:url': `https://${domain}`,
    'og:image': `https://${domain}/img/social-banner.jpg`,
    'twitter:image': `https://${domain}/img/social-banner.jpg`,
    'twitter:card': 'summary_large_image',
    'twitter:site': '@RemixCookbook',
    'twitter:creator': '@RemixCookbook',
    'twitter:description': 'Easy to follow recipes for the Remix.run framework',
  };
}

export function globalLinks() {
  return [
    { rel: 'manifest', href: '/manifest.json' },
    { rel: 'stylesheet', href: tailwindcss },
    { rel: 'stylesheet', href: background },
    { rel: 'apple-touch-icon', href: '/img/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'icon', href: '/img/favicon-32x32.png', type: 'image/png' },
    { rel: 'icon', href: '/img/favicon-16x16.png', type: 'image/png' },
    { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: '#5bbad5' },
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      href: `${domain}/rss.xml`,
      title: "Remix Cookbook's XML Feed",
    },
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      href: `${domain}/atom.xml`,
      title: "Remix Cookbook's Atom Feed",
    },
    {
      rel: 'alternate',
      type: 'application/feed+json',
      href: `${domain}/feed.json`,
      title: "Remix Cookbook's JSON Feed",
    },
  ];
}

export function postMeta(data: { post: BlogTypes.Post; preview: boolean }) {
  const post = filterDataToSingleItem(data.post, data.preview);
  const content = ContentUtils.blocksToText(post.content);
  const desc = description(content.join(' '));

  return {
    'title': post.title,
    'description': desc,
    'og:title': post.title,
    'og:description': desc,
    'og:url': `https://${domain}/${post.slug.current}`,
    'twitter:description': desc,
    'author': 'Fabio Vedovelli',
    'og:image': `https://${domain}/img/${post.slug.current}.jpeg`,
    'twitter:image': `https://${domain}/img/${post.slug.current}.jpeg`,
  };
}
