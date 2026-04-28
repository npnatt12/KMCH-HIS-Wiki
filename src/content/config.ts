import { defineCollection, z } from 'astro:content';

const wikiSchema = z.object({
  title: z.string(),
  titleTh: z.string().optional(),
  type: z.enum(['module', 'workflow', 'concept', 'entity', 'source', 'overview', 'faq', 'cheatsheet']),
  sources: z.array(z.string()).optional(),
  roles: z.array(z.string()).optional(),
  'verified-on-uat': z.coerce.string().optional(),
  'mock-data': z.boolean().optional(),
  created: z.coerce.string().optional(),
  updated: z.coerce.string().optional(),
  tags: z.array(z.string()).optional(),
});

const roleSchema = z.object({
  title: z.string(),
  type: z.literal('role'),
  'role-id': z.string(),
  icon: z.string(),
  accent: z.string(),
  description: z.string().optional(),
  status: z.string().optional(),
  'verified-on-uat': z.coerce.string().optional(),
  tier: z.union([z.literal(1), z.literal(2)]).optional(),
  tags: z.array(z.string()).optional(),
  created: z.coerce.string().optional(),
  updated: z.coerce.string().optional(),
});

export const collections = {
  modules: defineCollection({ schema: wikiSchema }),
  workflows: defineCollection({ schema: wikiSchema }),
  concepts: defineCollection({ schema: wikiSchema }),
  entities: defineCollection({ schema: wikiSchema }),
  faq: defineCollection({ schema: wikiSchema }),
  cheatsheets: defineCollection({ schema: wikiSchema }),
  roles: defineCollection({ schema: roleSchema }),
};
