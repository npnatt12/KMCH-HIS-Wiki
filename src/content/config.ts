import { defineCollection, z } from 'astro:content';

const wikiSchema = z.object({
  title: z.string(),
  titleTh: z.string().optional(),
  type: z.enum(['module', 'workflow', 'concept', 'entity', 'source', 'overview', 'faq', 'cheatsheet']),
  sources: z.array(z.string()).optional(),
  created: z.coerce.string().optional(),
  updated: z.coerce.string().optional(),
  tags: z.array(z.string()).optional(),
});

export const collections = {
  modules: defineCollection({ schema: wikiSchema }),
  workflows: defineCollection({ schema: wikiSchema }),
  concepts: defineCollection({ schema: wikiSchema }),
  entities: defineCollection({ schema: wikiSchema }),
  faq: defineCollection({ schema: wikiSchema }),
  cheatsheets: defineCollection({ schema: wikiSchema }),
};
