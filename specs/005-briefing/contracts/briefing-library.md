# 인터페이스 계약: 브리핑 서비스 라이브러리

`backend/src/briefing/`가 공개하는 함수다. `backend/src/web/routes/briefing.ts`는 이 함수들만 호출하고, `briefing/store.ts`의 SQLite 스키마나 002·004의 내부 스키마를 직접 건드리지 않는다.

## `formatProgress(completedCount: number, totalCount: number, hasPhaseDocs: boolean): { status: RoadmapProgressStatus; percentLabel: string }`

(`backend/src/briefing/formatProgress.ts`)

- **보장**: FR-004·FR-005의 표시 규칙을 정확히 구현한다 — `hasPhaseDocs=false` → `{status:"no_phase_docs", percentLabel:"진행 자료 없음"}`. `hasPhaseDocs=true && totalCount===0` → `{status:"needs_review_format", percentLabel:"형식 확인 필요"}`. `completedCount===0` → `{status:"not_started", percentLabel:"0% (미시작)"}`. 그 외, 소수 첫째 자리 반올림이 `0.0`이면 `{status:"normal", percentLabel:"<0.1% (진행 중, {completedCount}/{totalCount})"}`. 소수 첫째 자리 반올림이 `100.0`인데 `completedCount < totalCount`(미완료 존재)면 `percentLabel:"<100%"`. 그 외는 `"{P.P}% ({completedCount}/{totalCount})"`.
- 순수 함수 — I/O 없음.

## `buildSnapshot(input): BriefingSnapshot | { reviewDataUnavailable: true; roadmaps: RoadmapProgressView[] }`

(`backend/src/briefing/buildSnapshot.ts`)

```ts
interface BuildSnapshotInput {
  referenceDate: string        // FR-002, 호출자(service.ts)가 시간대로 이미 계산해 넘김
  timezone: string
  scope: "all" | string        // roadmapId
  roadmapSummaries: RoadmapSummary[]   // 002 listRoadmaps() 원본, 필터링 전
  dueReviewResult: ReviewQueueStatus | Error   // 004 getReviewQueueStatus() 결과 또는 실패
}
```

- **보장**: `scope !== "all"`이면 `roadmapSummaries`를 그 `roadmapId` 하나로 필터링한다 — 존재하지 않는 `roadmapId`는 이 함수의 책임이 아니다(호출자가 FR-018을 먼저 검증). `dueReviewResult`가 `Error`면 `{ reviewDataUnavailable: true, roadmaps }`만 반환하고 `dueItems`/평균 등은 계산하지 않는다(research.md §4). 정상일 때는 `dueReviewResult.totalActiveCount`를 `BriefingSnapshot.totalActiveCount`로 그대로 옮긴다 — FR-009의 "복습큐 자체가 비어 있음" vs "밀린 항목만 없음" 구분은 `dueItems.length`(=`dueReviewCount`)만으로는 불가능하므로, 이 값을 반드시 함께 실어 보낸다(data-model.md). 순수 함수 — SQLite나 파일에 쓰지 않는다(그건 `service.ts`의 책임).
- 평균 진행률은 research.md §3에 따라 **필터링된 `roadmaps`만을 대상**으로 계산한다.

## `generateBriefing(options): BriefingSnapshot | { error: "roadmap_not_found" } | { reviewDataUnavailable: true; roadmaps: RoadmapProgressView[] }`

(`backend/src/briefing/service.ts`)

```ts
interface GenerateBriefingOptions {
  scope?: string          // 생략 시 "all". 특정 roadmapId 문자열
  forceNew?: boolean       // true면 research.md §1의 자연 키 dedup을 건너뛰고 항상 새 스냅샷 생성(POST /briefing/rerun 전용)
  timezone?: string        // 생략 시 "Asia/Seoul"(spec.md Assumptions)
  now?: Date               // 테스트 전용, 생략 시 실제 현재 시각
  dbPath?: string          // 테스트 전용, 생략 시 실제 `내학습/briefing-history.sqlite`(store.ts로 전달)
  logPath?: string         // 테스트 전용, 생략 시 실제 `내학습/브리핑로그.md`(logFile.ts로 전달)
}
```

- **보장**: `scope`가 `"all"`이 아니면 002 `listRoadmaps()`로 존재를 먼저 확인하고, 없으면 `{ error: "roadmap_not_found" }`를 반환한다(FR-018) — 이 경우 아무것도 생성·저장하지 않는다.
- `forceNew !== true`일 때: `(referenceDate, timezone, scope)` 키로 `store.findLatestSnapshotForKey()`를 조회해 있으면 그것을 그대로 반환한다(새 스냅샷 생성 없음, research.md §1).
- `forceNew === true`이거나 위 조회 결과가 없을 때: 002 `listRoadmaps()` + 004 `getReviewQueueStatus(referenceDate)`를 호출해 `buildSnapshot()`으로 조립한다. 결과가 `reviewDataUnavailable`이면 그대로 반환하고 저장하지 않는다(research.md §4). 정상이면 `store.insertSnapshot()`으로 저장하고 `logFile.appendSnapshot()`으로 파일에 기록한 뒤(FR-020) 그 `BriefingSnapshot`(생성된 `id` 포함)을 반환한다.
- 이 함수 하나가 이 기능의 유일한 쓰기 진입점이다 — 다른 어떤 모듈도 `store.insertSnapshot()`을 직접 호출하지 않는다. `dbPath`/`logPath`를 생략하면 실제 파일에 쓴다 — 이 함수를 호출하는 테스트·스크립트는 반드시 두 값을 임시 경로로 넘겨야 실제 `내학습/` 파일을 건드리지 않는다(QA 검증 중 발견: 이 함수만 유일하게 재정의 수단이 없던 안전 공백이었다).

## `listSnapshotsByDate(dbPath?: string): Array<{ id: number; referenceDate: string; scope: string; createdAt: string; averageProgressRatio: number | null; dueReviewCount: number }>`

(`backend/src/briefing/store.ts`)

- **보장**: FR-015 "날짜별 조회"를 위한 목록 — 날짜 내림차순, 같은 날짜에 여러 스냅샷(의도적 재실행)이 있으면 생성 시각 내림차순으로 그 안에서 정렬한다.

## `getSnapshotById(id: number, dbPath?: string): BriefingSnapshot | null`

(`backend/src/briefing/store.ts`)

- **보장**: 저장된 그대로(재계산 없이) 반환한다 — 이 시점 이후 002·004의 실제 데이터가 바뀌어도 이 함수의 반환값은 절대 바뀌지 않는다(FR-014). 존재하지 않는 `id`는 예외 대신 `null`.

## 안정성 계약

- `generateBriefing()`의 옵션·반환 타입을 바꾸는 것은 `web/routes/briefing.ts`(프론트엔드가 소비)와 QA 테스트 모두에 영향을 준다 — 헌법의 "역할 간 통합 절차"에 따라 통보 후 진행한다.
- 이 계약은 002·004의 공개 함수 시그니처를 바꾸지 않는다 — 005는 그 둘을 오직 호출자로서 소비한다.
- `dbPath` 인자(테스트 전용)는 `내학습/briefing-history.sqlite`가 아니라 임시 파일을 가리키게 할 수 있다 — 002·004와 동일한 관례.
