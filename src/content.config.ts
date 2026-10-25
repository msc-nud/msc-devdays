import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cards = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cards' }),
  schema: z.object({
    name: z.string().min(1),
    program: z.string().min(1),
    bio: z.string().min(1),
    github: z.string().optional(),
  }),
});

export const collections = { cards };
