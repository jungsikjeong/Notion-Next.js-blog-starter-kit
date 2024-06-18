import { CONFIG } from './site.config';

module.exports = {
  siteUrl: `https://${CONFIG.domain}`,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,
};
