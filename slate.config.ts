/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://example.com',
  avatar: '/avatar.png',
  title: 'Mani\'s Blog',
  description: 'Expression. Thoughts. Tech.',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2025 Slate Design',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/SlateDesign/slate-blog'
    },
]
});