import { Router } from "express";
import { listRoadmaps, getRoadmapDetail } from "../../persistence/queries.js";
import type { PhaseDetail, RoadmapSummary } from "../../persistence/types.js";
import { findContinueTarget } from "../continueStudy.js";
import { renderRoadmapListPage } from "../views/roadmapList.js";
import { renderRoadmapDetailPage } from "../views/roadmapDetail.js";
import { renderMessage } from "../views/layout.js";
import type { RoadmapListItemView, RoadmapDetailViewModel, PhaseView } from "../types.js";

const router = Router();

/**
 * FR-003 three-way distinction, data-model.md `RoadmapListView.progressLabel`:
 * "진행 자료 없음" (no phase docs at all) / "미시작" (phase docs exist but
 * totalCount === 0) / "완료 N/M (P%)" — never collapsed into a single "0%".
 */
function toProgressLabel(summary: RoadmapSummary): string {
  if (!summary.hasPhaseDocs) {
    return "진행 자료 없음";
  }
  if (summary.totalCount === 0) {
    return "미시작";
  }
  const percent = Math.round((summary.progressRatio ?? 0) * 100);
  return `완료 ${summary.completedCount}/${summary.totalCount} (${percent}%)`;
}

function toPhaseView(phase: PhaseDetail): PhaseView {
  return {
    phaseId: phase.phaseId,
    title: phase.title,
    aggregatable: phase.aggregatable,
    items: phase.items.map((item) => ({
      itemId: item.itemId,
      text: item.text,
      completed: item.completed,
      completedDate: item.completedDate,
      linkedMaterialHref: item.linkedMaterialId ? `/materials/${item.linkedMaterialId}` : null,
      needsReview: item.needsReview,
    })),
  };
}

router.get("/", (_req, res) => {
  const items: RoadmapListItemView[] = listRoadmaps().map((summary) => ({
    roadmapId: summary.roadmapId,
    title: summary.title,
    progressLabel: toProgressLabel(summary),
    needsReviewBadge: summary.needsReviewCount > 0,
  }));

  res.status(200).type("html").send(renderRoadmapListPage(items));
});

router.get("/roadmaps/:roadmapId", (req, res) => {
  const detail = getRoadmapDetail(req.params.roadmapId);
  if (!detail) {
    res
      .status(404)
      .type("html")
      .send(renderMessage({ title: "찾을 수 없음", message: "해당 로드맵을 찾을 수 없습니다." }));
    return;
  }

  const model: RoadmapDetailViewModel = {
    roadmapId: detail.roadmapId,
    title: detail.title,
    tracks: detail.tracks.map((track) => ({
      trackId: track.trackId,
      title: track.title,
      phases: track.phases.map(toPhaseView),
    })),
    rootPhases: detail.phases.map(toPhaseView),
  };

  res.status(200).type("html").send(renderRoadmapDetailPage(model));
});

router.get("/roadmaps/:roadmapId/continue", (req, res) => {
  const { roadmapId } = req.params;
  const detail = getRoadmapDetail(roadmapId);
  if (!detail) {
    res
      .status(404)
      .type("html")
      .send(renderMessage({ title: "찾을 수 없음", message: "해당 로드맵을 찾을 수 없습니다." }));
    return;
  }

  const target = findContinueTarget(detail);
  if (target.found) {
    res.redirect(302, `/roadmaps/${roadmapId}#item-${target.itemId}`);
    return;
  }

  const skippedNote =
    target.skippedNeedsReviewCount > 0
      ? ` (확인 필요 항목 ${target.skippedNeedsReviewCount}건은 건너뛰었습니다)`
      : "";
  res
    .status(200)
    .type("html")
    .send(
      renderMessage({
        title: "이어서 공부할 항목 없음",
        message: `더 이상 이어서 공부할 항목이 없습니다${skippedNote}`,
      }),
    );
});

export default router;
