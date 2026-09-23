# Quickstart: 복습큐 자료 이전·영속화 검증

이 문서는 004 구현이 끝난 뒤, 스펙의 User Story 1~3이 실제로 동작하는지 확인하는 실행 절차다. 정확한 시그니처는 [contracts/review-queue-library.md](./contracts/review-queue-library.md)를, 스키마는 [data-model.md](./data-model.md)를 참고한다.

## 사전 준비

```bash
cd backend
npm install
npm run typecheck && npm run lint
```

## 시나리오 1 — 오늘 복습할 항목을 연체 순으로 조회 (User Story 1, SC-001)

```bash
node --experimental-strip-types -e "
import { reload, getReviewQueueStatus } from './src/persistence/queries.ts';
await reload();

// 실제 저장소 파일 기준 오늘 날짜로 대체해 확인
const status = getReviewQueueStatus('2026-09-23');
console.log(status);
"
```

**기대 결과**: `dueItems`에 다음 복습일이 `2026-09-23` 이전이거나 같은 항목만 포함되고, `overdueDays`가 큰 항목이 배열 앞쪽에 온다. 내일(`2026-09-24` 등) 이후가 다음 복습일인 항목은 `dueItems`에 없다(SC-001).

## 시나리오 2 — 재적재해도 중복 없음 (User Story 1, SC-002)

```bash
node --experimental-strip-types -e "
import { reload, getReviewQueueStatus } from './src/persistence/queries.ts';
await reload();
const first = getReviewQueueStatus('2026-09-23');
await reload();
const second = getReviewQueueStatus('2026-09-23');
console.log({ identical: JSON.stringify(first) === JSON.stringify(second) });
"
```

**기대 결과**: `identical: true` — 같은 원본 파일을 두 번 적재해도 항목 수·내용이 완전히 동일하다(SC-002).

## 시나리오 3 — 형식이 깨진 행 분리 (User Story 2, SC-004)

```bash
# 1. 테스트 픽스처 파일에서 "다음 복습일" 칸을 "9월 19일" 같은 비-ISO 형식으로 바꾼다
# 2. reload() 실행
# 3. getReviewQueueStatus()에는 그 행이 없고, listReviewQueueImportErrors()에는 있는지 확인
```

```bash
node --experimental-strip-types -e "
import { reload, getReviewQueueStatus, listReviewQueueImportErrors } from './src/persistence/queries.ts';
await reload();
console.log(getReviewQueueStatus('2026-09-23').totalActiveCount);
console.log(listReviewQueueImportErrors());
"
```

**기대 결과**: 깨진 행은 `totalActiveCount`에 포함되지 않고, `listReviewQueueImportErrors()` 결과에서 `kind: "date_unparseable"`로 확인된다. 나머지 정상 행은 정상적으로 조회된다(SC-004).

## 시나리오 4 — 마스터 완료 항목은 별도 조회에만 나타남 (User Story 3, SC-003)

```bash
node --experimental-strip-types -e "
import { reload, getReviewQueueStatus, listMasteredItems } from './src/persistence/queries.ts';
await reload();
const status = getReviewQueueStatus('2026-09-23');
const mastered = listMasteredItems();
console.log({ dueItemIds: status.dueItems.map(i => i.id), masteredIds: mastered.map(i => i.id) });
"
```

**기대 결과**: 두 id 목록에 겹치는 항목이 하나도 없다(SC-003) — 마스터 완료 항목은 `dueItems`에 나타나지 않는다.

## 시나리오 5 — 파일 자체가 없거나 두 표가 모두 비어 있음 (Edge Case, SC-005)

```bash
node --experimental-strip-types -e "
import { reload, getReviewQueueStatus, listMasteredItems } from './src/persistence/queries.ts';
// 픽스처를 빈 파일 또는 파일 없음 상태로 준비한 뒤 실행
await reload();
console.log(getReviewQueueStatus('2026-09-23'));
console.log(listMasteredItems());
"
```

**기대 결과**: 오류를 던지지 않고 `{ totalActiveCount: 0, dueItems: [] }`와 빈 배열을 반환한다(SC-005).

## 자동화된 검증

```bash
cd backend
npm test
```

- `tests/unit/reviewQueue.parseReviewQueue.test.ts` — 활성/마스터 완료 표 구분, 항목 필드 추출.
- `tests/unit/reviewQueue.identity.test.ts` — 내용 기반 id 계산의 결정성(같은 입력 → 같은 id) 및 재발 항목(같은 개념, 다른 최초 오답일) 구분.
- `tests/unit/reviewQueue.dateParse.test.ts` — 엄격한 ISO-8601 파싱과 실패 케이스(빈 칸, 잘못된 형식, 존재하지 않는 날짜).
- `tests/integration/persistence.reviewQueue.reload.test.ts` — 시나리오 1·2·5 자동화.
- `tests/integration/persistence.reviewQueue.errors.test.ts` — 시나리오 3 자동화, 오류 100% 노출 확인(SC-004).
- `tests/integration/persistence.reviewQueue.mastered.test.ts` — 시나리오 4 자동화.
- 기존 001(65)·002(64)·003(52) 테스트 총 181개가 이 기능 추가 후에도 회귀 없이 그대로 통과하는지 확인한다(스키마 확장이 기존 5개 테이블에 영향을 주지 않음을 검증).
