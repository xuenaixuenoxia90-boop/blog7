import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().default(''),
    slug: z.string().default(''),
    date: z.string().optional(),
    description: z.string().optional(),
    cover: z.string().optional(),
  }),
});

const tool = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tool' }),
  schema: z.object({
    title: z.string().default(''),
    slug: z.string().default(''),
    description: z.string().optional(),
    cover: z.string().optional(),
  }),
});

const video = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/video' }),
  schema: z.object({
    title: z.string().default(''),
    slug: z.string().default(''),
    description: z.string().optional(),
    cover: z.string().optional(),
    video_url: z.string().optional(),
  }),
});

export const collections = { blog, tool, video };
