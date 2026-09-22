/**
 * TypeScript types for the entities defined in
 * specs/001-content-ingestion-foundation/data-model.md.
 *
 * FR-016: this feature does not persist any of this to a database or serve
 * it over HTTP. These types describe the in-memory / JSON-report shape that
 * stage 3 (user/read screens) will later map onto a real persistent schema.
 */

// ---------------------------------------------------------------------------
// Roadmap / Track / Phase / LearningItem
// ---------------------------------------------------------------------------

export interface Roadmap {
  /** Roadmap-root-path based deterministic identifier. */
  id: string;
  /** Path relative to `study-progress/`. */
  sourcePath: string;
  /** Roadmap title (directory name, or README title if available). */
  title: string;
  /** Whether any Phase document exists anywhere under this roadmap (FR-015). */
  hasPhaseDocs: boolean;
  /** Ordered tracks. Roadmaps without tracks (Phases directly under root) have []. */
  tracks: Track[];
  /**
   * Phases that live directly under the roadmap root (no track).
   * Not part of data-model.md's table verbatim, but required because a
   * roadmap can mix "no track" Phases with tracks in principle, and because
   * data-model.md's relation summary explicitly allows
   * `Roadmap 1--* Phase` (트랙 없는 로드맵) as a parallel edge to
   * `Roadmap 1--* Track 1--* Phase`.
   */
  rootPhases: Phase[];
  /** Explicit order among sibling roadmaps (FR-001). */
  orderIndex: number;
}

export interface Track {
  /** Deterministic identifier, unique within the roadmap. */
  id: string;
  roadmapId: string;
  title: string;
  /** Order within the roadmap (FR-001) — derived from an explicit order source, not string sort. */
  orderIndex: number;
  phases: Phase[];
}

export interface Phase {
  id: string;
  roadmapId: string;
  trackId: string | null;
  /** Path to the Phase document, relative to `study-progress/`. */
  sourcePath: string;
  title: string;
  /** Order within the parent (roadmap root or track) (FR-001). */
  orderIndex: number;
  /** Whether this Phase document's checkbox format could be aggregated (FR-015). */
  aggregatable: boolean;
  items: LearningItem[];
}

export interface LearningItem {
  /** Deterministic identifier based on position within the Phase. */
  id: string;
  phaseId: string;
  /** Checkbox label text, as written in the source (link markup stripped to plain text). */
  text: string;
  /**
   * Completion state. `null` means the checkbox notation could not be
   * interpreted — a matching ImportError(kind="checkbox_unrecognized") MUST
   * exist for this item (FR-006, data-model.md validation rules).
   */
  completed: boolean | null;
  /** ISO-8601 date string, or null when absent/unparseable/invalid (FR future-date rule, Edge Cases). */
  completedDate: string | null;
  /** Linked Material.id, or null if this item has no material reference or the reference is broken. */
  linkedMaterialId: string | null;
  /** Always false: code-block checkboxes never become LearningItems (FR-005). */
  isFromCodeBlock: false;
}

// ---------------------------------------------------------------------------
// Material / MaterialVersion
// ---------------------------------------------------------------------------

export interface Material {
  /** Path-first / content-hash-fallback identifier (FR-003). */
  id: string;
  /** Path relative to `courses/`, exactly as found on disk (FR-009). */
  sourcePath: string;
  title: string;
  /** Top-level category folder under `courses/` (articles | deeplearning-ai | mooc | udemy | youtube | ...). */
  category: string;
  /** Provider inferred from path structure, or null when it cannot be inferred (FR-007). */
  provider: string | null;
  /** Course/playlist unit inferred from path structure, or null (FR-007). */
  course: string | null;
  /** SHA-256 of the file's current content. */
  contentHash: string;
  /** Roadmap ids that link to this material via some LearningItem (FR-013), deduplicated. */
  linkedRoadmapIds: string[];
}

export interface MaterialVersion {
  materialId: string;
  contentHash: string;
  /** ISO-8601 timestamp of the import run that observed this version. */
  capturedAt: string;
}

// ---------------------------------------------------------------------------
// ImportBatch and friends
// ---------------------------------------------------------------------------

export type ImportScope = "real" | "example";

export type EntityType = "roadmap" | "track" | "phase" | "item" | "material";

export type MappingStatus = "created" | "updated" | "held";

export interface ImportMapping {
  sourcePath: string;
  contentHash: string;
  entityId: string;
  entityType: EntityType;
  status: MappingStatus;
}

export type ImportErrorKind =
  | "date_invalid"
  | "checkbox_unrecognized"
  | "id_collision"
  | "link_broken";

export interface ImportError {
  sourcePath: string;
  kind: ImportErrorKind;
  detail: string;
}

export interface ImportMetrics {
  roadmapCount: number;
  /** Per-roadmap completed/total item counts (SC-001 verification), keyed by Roadmap.id. */
  completedItemCount: Record<string, number>;
  totalItemCount: Record<string, number>;
  /** Number of materials indexed (SC-003). */
  materialCount: number;
  /** Newly-created duplicate entities detected during this run (SC-004, must be 0). */
  duplicateCount: number;
  /** Example-data items included while scope="real" (SC-005, must be 0). */
  exampleItemCount: number;
}

export interface ImportBatch {
  id: string;
  scope: ImportScope;
  startedAt: string;
  finishedAt: string;
  mappings: ImportMapping[];
  errors: ImportError[];
  metrics: ImportMetrics;
  /** Full parsed entities, so callers (and the CLI/tests) don't need a second pass. */
  roadmaps: Roadmap[];
  materials: Material[];
  materialVersions: MaterialVersion[];
}

// ---------------------------------------------------------------------------
// Parse-result shapes used by the contract functions
// ---------------------------------------------------------------------------

export interface RoadmapParseResult {
  roadmaps: Roadmap[];
  errors: ImportError[];
  mappings: ImportMapping[];
}

export interface MaterialParseResult {
  materials: Material[];
  materialVersions: MaterialVersion[];
  errors: ImportError[];
  mappings: ImportMapping[];
}

export interface MaterialSearchQuery {
  title?: string;
  category?: string;
  provider?: string;
  course?: string;
  roadmapId?: string;
}

export interface MaterialIndex {
  byId(id: string): Material | undefined;
  byPath(sourcePath: string): Material | undefined;
  search(query: MaterialSearchQuery): Material[];
}

export interface ResolveIdentityCandidate {
  sourcePath: string;
  contentHash: string;
}

export interface ResolveIdentityResult {
  id: string;
  status: MappingStatus;
}
