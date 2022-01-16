/// <reference types="cypress" />

import { domain, siteFullName, defaultLanguage } from '../../app/config';

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Site-wide', () => {
    it('should display main heading with image and link', () => {
      cy.get('h1[data-testid="site-name"]').within(() => {
        cy.contains('Remix.run Cookbook');
        cy.get('img')
          .should('have.attr', 'alt', 'Return to the homepage')
          .should('have.attr', 'src', '/img/logo.png');
        cy.get('a')
          .should('not.have.attr', 'target', '_blank')
          .should('not.have.attr', 'rel', 'noopener noreferrer')
          .should('have.attr', 'href', '/');
      });
    });

    it('should set correct language for the document', () => {
      cy.get('html').should('have.attr', 'lang', defaultLanguage);
    });

    it('should display proper title', () => {
      cy.get('title').contains(`${siteFullName} - Easy to follow recipes for Remix.run`);
    });

    it('should load analytics script in the document head', () => {
      cy.get('head').within(() => {
        cy.get(`[data-domain="${domain}"]`).should('have.attr', 'src', '/js/analytics.js');
      });
    });

    it('should load manifest file', () => {
      cy.get('head').within(() => {
        cy.get('[rel="manifest"]').should('have.attr', 'href', '/manifest.json');
      });
    });

    it('should include all meta tags', () => {
      const globalMeta = {
        'viewport': 'width=device-width,initial-scale=1',
        'theme-color': '#2E3440',
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

      const metaNames = Object.keys(globalMeta);
      const metaValues = Object.values(globalMeta);

      metaNames.forEach((name, index) => {
        const meta = cy.get(`meta[name='${name}']`);
        meta.should($selector => {
          if ($selector.length > 0) {
            // the og: types doesn't have name property
            meta.should('have.attr', 'content', metaValues[index]);
          }
        });
      });

      metaNames.forEach((name, index) => {
        const meta = cy.get(`meta[property='${name}']`);
        meta.should($m => {
          if ($m.length > 0) {
            // the non og: types doesn't have name property
            meta.should('have.attr', 'content', metaValues[index]);
          }
        });
      });
    });
  });

  describe('List of posts', () => {
    it('should ensure all images have alt text', () => {
      cy.get('img').should('have.attr', 'alt');
    });

    it('should navigate to posts', () => {
      const assertions = [
        {
          selector: 'Does Remix impose a project',
          assertion: 'Aside from a few conventions you have to follow',
        },
        { selector: 'Dark mode toggle with', assertion: 'a CSS file that dynamically renders' },
      ];

      for (const { selector, assertion } of assertions) {
        cy.contains(selector).click();
        cy.contains(assertion).should('exist');
        cy.visit('/');
      }
    });
  });

  describe('Post page', () => {
    it('should display comment box', () => {
      cy.contains('Does Remix impose a project').click();
      cy.get('.utterances-frame');
    });
  });

  describe('Top navigation', () => {
    it('should return home on site name click', () => {
      cy.get('.header').within(() => {
        cy.assertInternalLink('Remix.run Cookbook').should('have.attr', 'href', '/');
      });
    });

    it('should navigate to static links', () => {
      const assertions = [
        {
          selector: 'Remix Resources',
          assertion: 'Remix.run website',
        },
        { selector: 'About', assertion: 'Created and maintained by Fabio Vedovelli' },
      ];

      for (const { selector, assertion } of assertions) {
        cy.contains(selector).click();
        cy.contains(assertion).should('exist');
        cy.visit('/');
      }
    });

    it('should not display feed overlay when site first loads', () => {
      cy.get('[data-testid=feed-overlay]').should('not.exist');
    });

    it('should display feed overlay on icon click', () => {
      cy.get('[data-testid=feed-icon]').click();
      cy.get('[data-testid=feed-overlay]').should('exist');
    });

    it('should not display github overlay when site first loads', () => {
      cy.get('[data-testid=github-overlay]').should('not.exist');
    });

    it('should display github overlay on icon click', () => {
      cy.get('[data-testid=github-icon]').click();
      cy.get('[data-testid=github-overlay]').should('exist');
    });

    it('should ensure all overlay links are present and open in a new window', () => {
      const items1 = ['RSS', 'Atom', 'JSON'];
      const items2 = ['source code', 'Our organization'];

      cy.get('[data-testid=feed-icon]').click();
      for (const item of items1) {
        cy.assertExternalLink(item);
      }

      cy.get('[data-testid=github-icon]').click();
      for (const item of items2) {
        cy.assertExternalLink(item);
      }
    });
  });

  describe('Footer', () => {
    const links = [
      { title: 'Remix.run', href: 'https://remix.run' },
      { title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
      { title: 'Sanity.io', href: 'https://sanity.io' },
      { title: 'Netlify', href: 'https://netlify.com' },
      { title: 'Nord Theme', href: 'https://www.nordtheme.com' },
      { title: 'Unsplash API', href: 'https://unsplash.com/developers' },
    ];

    it('should display "Happily built with"', () => {
      cy.contains('Happily built with');
    });

    it('should render all links with proper attributes', () => {
      for (const { title, href } of links) {
        cy.get('.footer-nav').within(() => {
          cy.get(`a:contains('${title}')`);
          cy.assertExternalLink(title).should('have.attr', 'href', href);
        });
      }
    });
  });
});
