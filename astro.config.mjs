import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import remarkToc from 'remark-toc';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), 
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'github-dark' },
      remarkPlugins: [remarkToc],
      remarkRehype: { footnoteLabel: 'Footnotes' },
      gfm: false,
    })]
});