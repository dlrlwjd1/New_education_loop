import type { Material, MaterialIndex, MaterialSearchQuery } from "./types.js";

function pushTo(map: Map<string, Material[]>, key: string | null, material: Material): void {
  if (key === null) {
    return;
  }
  const existing = map.get(key);
  if (existing) {
    existing.push(material);
  } else {
    map.set(key, [material]);
  }
}

/**
 * contracts/ingestion-library.md `MaterialIndex` (FR-008): builds every
 * lookup structure once, up front, from the full `Material[]` produced by
 * `parseMaterials`. `byId`/`byPath` are then O(1) map lookups, and `search`
 * intersects O(1) map lookups per provided field instead of scanning the
 * whole material list — satisfying "특정 자료를 찾기 위해 매번 전체 목록을
 * 순차 비교해야만 하는 구조로 설계하지 않는다".
 *
 * `search({ title })` matches on the exact (already-derived) Material.title
 * string, not a fuzzy/substring search — a substring scan across all
 * materials would itself be the linear scan FR-008 rules out. Topic-based
 * search is explicitly out of scope (spec.md Assumptions).
 */
export function buildMaterialIndex(materials: Material[]): MaterialIndex {
  const byIdMap = new Map<string, Material>();
  const byPathMap = new Map<string, Material>();
  const byTitleMap = new Map<string, Material[]>();
  const byCategoryMap = new Map<string, Material[]>();
  const byProviderMap = new Map<string, Material[]>();
  const byCourseMap = new Map<string, Material[]>();
  const byRoadmapMap = new Map<string, Material[]>();

  for (const material of materials) {
    byIdMap.set(material.id, material);
    byPathMap.set(material.sourcePath, material);
    pushTo(byTitleMap, material.title, material);
    pushTo(byCategoryMap, material.category, material);
    pushTo(byProviderMap, material.provider, material);
    pushTo(byCourseMap, material.course, material);
    for (const roadmapId of material.linkedRoadmapIds) {
      pushTo(byRoadmapMap, roadmapId, material);
    }
  }

  return {
    byId(id: string): Material | undefined {
      return byIdMap.get(id);
    },
    byPath(sourcePath: string): Material | undefined {
      return byPathMap.get(sourcePath);
    },
    search(query: MaterialSearchQuery): Material[] {
      const candidateSets: Material[][] = [];
      if (query.title !== undefined) candidateSets.push(byTitleMap.get(query.title) ?? []);
      if (query.category !== undefined) candidateSets.push(byCategoryMap.get(query.category) ?? []);
      if (query.provider !== undefined) candidateSets.push(byProviderMap.get(query.provider) ?? []);
      if (query.course !== undefined) candidateSets.push(byCourseMap.get(query.course) ?? []);
      if (query.roadmapId !== undefined) candidateSets.push(byRoadmapMap.get(query.roadmapId) ?? []);

      if (candidateSets.length === 0) {
        return [];
      }

      let result: Material[] = candidateSets[0] as Material[];
      for (let i = 1; i < candidateSets.length; i++) {
        const idsInThisSet = new Set((candidateSets[i] as Material[]).map((m) => m.id));
        result = result.filter((m) => idsInThisSet.has(m.id));
      }
      return result;
    },
  };
}
