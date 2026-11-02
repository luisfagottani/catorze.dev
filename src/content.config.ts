import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Astro 7 Content Layer API: each collection declares a `loader`.
// Authors add Markdown/MDX files under the `base` directories below.
const works = defineCollection({
  loader: glob({ base: "./src/content/works", pattern: "**/[^_]*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      description: z.string(),
      link: z.string().url().optional(),
      order: z.number().optional(),
      publishDate: z.coerce.date(),
      repo: z.string().url().optional(),
      tech: z.array(z.string()),
      thumbnail: image().optional(),
      title: z.string(),
    }),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/[^_]*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      description: z.string(),
      draft: z.boolean().default(false),
      heroImage: image().optional(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      title: z.string(),
    }),
});

export const collections = { blog, works };
