const path = require('path');
const sitemapGenerator = require('sitemap-generator');
const filePath = path.resolve(__dirname, '../public');

// create generator
const generator = sitemapGenerator('https://remix-cookbook.com', {
  stripQuerystring: false,
  filepath: `${filePath}/sitemap.xml`,
});

// register event listeners
generator.on('error', error => {
  console.log(error);
  process.exit(1);
});

// start the crawler
generator.start();
