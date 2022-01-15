const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const PicoSanity = require('picosanity');
const { Feed } = require('feed');
const domain = 'remix-cookbook.com';

dotenv.config();

const client = new PicoSanity({
  apiVersion: process.env.SANITY_API_VERSION,
  dataset: process.env.SANITY_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.SANITY_USE_CDN,
});

function filterDataToSingleItem(data = [], preview = false) {
  if (preview) {
    return data.find(item => item._id.startsWith(`drafts.`)) || data[0];
  }

  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  return data[0];
}

function blocksToText(blocks) {
  return blocks
    .filter(({ _type }) => _type === 'block')
    .map(block => block.children.map(child => child.text).join(''));
}

(async () => {
  const posts = client.fetch(
    `*[_type == "post"] | order(_updatedAt desc) { _id, title, content, slug, _updatedAt }`
  );

  const feed = new Feed({
    title: 'Remix Cookbook',
    description: 'Easy to follow recipes for the Remix.run framework',
    id: `https://${domain}/`,
    link: `https://${domain}/`,
    language: 'en',
    image: `https://${domain}/img/social-banner.jpg`,
    favicon: `https://${domain}/favicon.ico`,
    copyright: 'Some right reserved',
    feedLinks: {
      rss2: `https://${domain}/rss.xml`,
      json: `https://${domain}/feed.json`,
      atom: `https://${domain}/atom.xml`,
    },
    author: {
      name: 'Fabio Vedovelli',
      email: 'vedovelli@gmail.com',
      link: 'https://twitter.com/vedovelli74',
    },
  });

  (await posts).forEach(post => {
    const { content } = filterDataToSingleItem(post);
    const [paragraph1, paragraph2] = blocksToText(content);

    feed.addItem({
      title: post.title,
      id: post._id,
      link: `https://${domain}/${post.slug.current}`,
      content: `
<p>${paragraph1}</p>
<p>${paragraph2}</p>
<p><strong>Read the full article here</strong>: <a href="https://${domain}/${post.slug.current}">${domain}/${post.slug.current}</a></p>
      `,
      date: new Date(post._updatedAt),
      image: `https://${domain}/img/${post.slug.current}.jpeg`,
    });
  });

  fs.writeFile(path.resolve(__dirname, '../public/rss.xml'), feed.rss2(), err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });

  fs.writeFile(path.resolve(__dirname, '../public/atom.xml'), feed.atom1(), err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });

  fs.writeFile(path.resolve(__dirname, '../public/feed.json'), feed.json1(), err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
})();
