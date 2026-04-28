import { getCollection, type CollectionEntry } from 'astro:content';

const ROLE_SLUG_TO_ID: Record<string, string> = {
  doctor: 'Doctor',
  'nurse-ipd': 'NurseIPD',
  'nurse-opd': 'NurseOPD',
  'nurse-or': 'NurseOR',
  pharmacist: 'Pharmacist',
  'xray-tech': 'XRayTech',
  'admin-system': 'AdminSystem',
  'it-support': 'ITSupport',
};

export async function getRelated(
  type: 'workflows' | 'entities' | 'concepts' | 'modules',
  currentSlug: string,
  roles: string[] | undefined,
  limit = 6,
): Promise<{ title: string; href: string; type: string }[]> {
  if (!roles || roles.length === 0) return [];
  const [workflows, entities, concepts] = await Promise.all([
    getCollection('workflows'),
    getCollection('entities'),
    getCollection('concepts'),
  ]);
  const TYPE_LABEL = {
    workflows: 'Workflow',
    entities: 'Screen',
    concepts: 'Concept',
    modules: 'Module',
  };
  const TYPE_PATH = { workflows: 'workflows', entities: 'entities', concepts: 'concepts', modules: 'modules' };

  const others: { title: string; href: string; type: string; sharedRoles: number }[] = [];
  for (const collection of [
    { kind: 'workflows' as const, items: workflows },
    { kind: 'entities' as const, items: entities },
    { kind: 'concepts' as const, items: concepts },
  ]) {
    for (const p of collection.items) {
      if (collection.kind === type && p.slug === currentSlug) continue;
      const pageRoles = (p.data as any).roles ?? [];
      const shared = pageRoles.filter((r: string) => roles.includes(r)).length;
      if (shared === 0) continue;
      others.push({
        title: p.data.title,
        href: `/${TYPE_PATH[collection.kind]}/${p.slug}/`,
        type: TYPE_LABEL[collection.kind],
        sharedRoles: shared,
      });
    }
  }
  others.sort((a, b) => b.sharedRoles - a.sharedRoles);
  return others.slice(0, limit).map(({ title, href, type }) => ({ title, href, type }));
}
