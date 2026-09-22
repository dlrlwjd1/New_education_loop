# Quickstart: 영속 저장소 계층 검증

이 문서는 002 구현이 끝난 뒤, 스펙의 User Story 1~4가 실제로 동작하는지 확인하는 실행 절차다. 계약의 정확한 시그니처는 [contracts/persistence-library.md](./contracts/persistence-library.md)를, 스키마는 [data-model.md](./data-model.md)를 참고한다.

## 사전 준비

```bash
cd backend
npm install
npm run typecheck && npm run lint
```

## 시나리오 1 — 즉시 조회 (User Story 1, SC-001)

```bash
node --experimental-strip-types -e "
import { reload, listRoadmaps, searchMaterials } from './src/persistence/queries.ts';
const t0 = Date.now();
const loadResult = await reload();
const initialMs = Date.now() - t0;

const t1 = Date.now();
for (let i = 0; i < 100; i++) listRoadmaps();
const avgMs = (Date.now() - t1) / 100;

// US1 Acceptance Scenario 2: 자료를 경로로 검색해도 courses/ 재순회 없이 즉시 반환
const [byPath] = searchMaterials({ sourcePath: 'articles/example/sample.md' });

console.log({ initialMs, avgMs, ratio: avgMs / initialMs, loadResult, byPathFound: Boolean(byPath) });
"
```

**기대 결과**: `ratio < 0.01`(SC-001). `loadResult.roadmapCount === 8`, `materialCount === 7865`(001 실행 기록과 일치). `byPathFound: true`(실제 존재하는 경로로 대체해 확인).

## 시나리오 2 — 파일이 원본 (User Story 2, SC-002)

```bash
# 1. 임의의 Phase 파일에서 미완료 체크박스 하나를 완료로 바꾼다 (텍스트 에디터 또는 sed)
# 2. 재적재 전 조회 → 이전 값 확인
# 3. reload() 재실행
# 4. 재적재 후 조회 → completedCount가 정확히 1 증가했는지 확인
# 5. 파일을 원래대로 되돌리고 다시 reload() (테스트 환경 원복)
```

**기대 결과**: 재적재 전에는 이전 값, 재적재 후에는 정확히 +1(SC-002). 실시간 반영은 되지 않는다(재적재 전 조회 결과 변화 없음 — Edge Cases에 명시된 기대 동작).

## 시나리오 3 — 캐시 삭제 후 무손실 재생성 (User Story 3, SC-003)

```bash
node --experimental-strip-types -e "
import { reload, listRoadmaps } from './src/persistence/queries.ts';
const before = { ...(await reload()) };
const beforeList = listRoadmaps();

import { unlinkSync } from 'node:fs';
unlinkSync('.cache/learning-loop.sqlite');

const after = await reload();
const afterList = listRoadmaps();

console.log({ before, after, identical: JSON.stringify(beforeList) === JSON.stringify(afterList) });
"
```

**기대 결과**: `identical: true`, `before`와 `after`의 `roadmapCount`/`materialCount` 완전히 동일(SC-003).

## 시나리오 4 — 화면이 바로 쓸 조회 함수 (User Story 4)

```bash
node --experimental-strip-types -e "
import { listRoadmaps, getRoadmapDetail, searchMaterials } from './src/persistence/queries.ts';
const roadmaps = listRoadmaps();
console.log(roadmaps[0]);

const detail = getRoadmapDetail(roadmaps[0].roadmapId);
console.log(detail?.tracks.length, detail?.phases.length);

// title은 001 MaterialIndex.search와 동일하게 정확히 일치하는 제목만 찾는다(부분 문자열 검색 아님) — 실제 자료 제목으로 교체해 확인
const found = searchMaterials({ category: 'articles' });
console.log(found.slice(0, 3));
"
```

**기대 결과**: 세 호출 모두 내부 스키마(`roadmaps`/`phases` 테이블 등)를 직접 참조하지 않고, 계약이 정의한 타입만으로 결과를 얻는다.

## 자동화된 검증

```bash
cd backend
npm test
```

- `tests/integration/persistence.reload.test.ts` — 시나리오 1·2 자동화(고정 크기 픽스처 사용, SC-001은 비율 임계값으로 검증).
- `tests/integration/persistence.rebuild.test.ts` — 시나리오 3 자동화, 손상된 DB 파일·구버전 `PRAGMA user_version` 픽스처로 FR-003 확인.
- `tests/integration/persistence.queries.test.ts` — 시나리오 4 자동화, `listReviewNeededItems`가 001 오류 픽스처의 100%를 노출하는지 확인(SC-005 상속).
- `tests/unit/schema.test.ts`, `tests/unit/db.test.ts` — 원자적 교체(중간에 프로세스가 죽는 상황을 흉내낸 케이스 포함)와 스키마 버전 판별 단위 검증.
