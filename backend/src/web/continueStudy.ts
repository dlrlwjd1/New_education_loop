import type { RoadmapDetail } from "../persistence/types.js";
import type { ContinueStudyTarget } from "./types.js";

/**
 * "이어서 공부" 위치 계산 (research.md §6, data-model.md `ContinueStudyTarget`).
 *
 * Pure, synchronous, no I/O — walks the tree in document order (already
 * `order_index`-sorted by 002): tracks first, then root-level phases,
 * matching `RoadmapDetail`'s own field order and data-model.md's relationship
 * summary. The first item with `completed === false` is the target.
 * `completed === null` ("확인 필요") items are never a candidate target — they
 * are skipped and only counted in `skippedNeedsReviewCount` — and
 * `completed === true` items are skipped silently. If no `completed === false`
 * item exists anywhere, `found: false` is returned (the skipped count still
 * reflects however many null items were passed over along the way).
 */
export function findContinueTarget(detail: RoadmapDetail): ContinueStudyTarget {
  let skippedNeedsReviewCount = 0;

  for (const track of detail.tracks) {
    for (const phase of track.phases) {
      for (const item of phase.items) {
        if (item.completed === false) {
          return {
            found: true,
            trackId: track.trackId,
            phaseId: phase.phaseId,
            itemId: item.itemId,
            skippedNeedsReviewCount,
          };
        }
        if (item.completed === null) {
          skippedNeedsReviewCount += 1;
        }
      }
    }
  }

  for (const phase of detail.phases) {
    for (const item of phase.items) {
      if (item.completed === false) {
        return {
          found: true,
          trackId: null,
          phaseId: phase.phaseId,
          itemId: item.itemId,
          skippedNeedsReviewCount,
        };
      }
      if (item.completed === null) {
        skippedNeedsReviewCount += 1;
      }
    }
  }

  return { found: false, trackId: null, phaseId: null, itemId: null, skippedNeedsReviewCount };
}
