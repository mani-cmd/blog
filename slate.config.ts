/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://mani-cmd.github.io/blog',
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
      link: 'https://github.com/mani-cmd/blog'
    },
]
});