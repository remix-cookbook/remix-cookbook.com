import { truncate } from 'lodash';
import { BlogTypes, ContentUtils } from '~/features/Blog';
import tailwindcss from '~/styles/tailwind.css';
import background from '~/styles/background.css';
import { filterDataToSingleItem } from '~/lib/sanity/filterDataToSingleItem';
import { domain, siteFullName } from '~/config';

export function description(content: string): string {
  return truncate(content, { length: 150 });
}

export function globalMeta() {
  return {
    'theme-color': '#2E3440',
    'title': `${siteFullName} - Easy to follow recipes for Remix.run`,
    'description': 'Easy to follow recipes for the Remix.run framework',
    'author': 'Fabio Vedovelli',
    'og:type': 'website',
    'og:site_name': siteFullName,
    'og:title': `${siteFullName} - Easy to follow recipes for Remix.run`,
    'og:description': 'Easy to follow recipes for the Remix.run framework',
    'og:url': `https://${domain}`,
    'og:image': `https://${domain}/img/social-banner.jpg`,
    'twitter:image': `https://${domain}/img/social-banner.jpg`,
    'twitter:card': 'summary_large_image',
    'twitter:site': '@RemixCookbook',
    'twitter:creator': '@vedovelli74',
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
      title: `${siteFullName}'s XML Feed`,
    },
    {
      rel: 'alternate',
      type: 'application/atom+xml',
      href: `${domain}/atom.xml`,
      title: `${siteFullName}'s Atom Feed`,
    },
    {
      rel: 'alternate',
      type: 'application/feed+json',
      href: `${domain}/feed.json`,
      title: `${siteFullName}'s JSON Feed`,
    },
  ];
}

export function postMeta(data: { post: BlogTypes.Post; preview: boolean }) {
  const post = filterDataToSingleItem(data.post, data.preview);
  const content = ContentUtils.blocksToText(post.content);
  const desc = description(content.join(' '));

  return {
    'title': `${siteFullName} - ${post.title}`,
    'description': desc,
    'og:title': `${siteFullName} - ${post.title}`,
    'og:description': desc,
    'og:url': `https://${domain}/${post.slug.current}`,
    'twitter:description': desc,
    'og:image': `https://${domain}/img/${post.slug.current}.jpeg`,
    'twitter:image': `https://${domain}/img/${post.slug.current}.jpeg`,
  };
}
