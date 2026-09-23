# Quickstart: 브리핑 화면 검증

이 문서는 005 구현이 끝난 뒤, 스펙의 User Story 1~3이 실제 브라우저에서 동작하는지 확인하는 절차다. 라우트 계약은 [contracts/http-routes.md](./contracts/http-routes.md)를, 서비스 계약은 [contracts/briefing-library.md](./contracts/briefing-library.md)를, 저장 구조는 [data-model.md](./data-model.md)를 참고한다.

**전제**: 002 캐시(`backend/.cache/learning-loop.sqlite`)와 004가 함께 적재하는 복습큐 데이터가 최소 한 번 `reload()`돼 있어야 한다(004 quickstart.md 참고 — 004의 `reload()`가 002·004 데이터를 모두 적재한다).

## 사전 준비

```bash
cd backend
npm install
npm run typecheck && npm run lint
npm run web
```

브라우저에서 `http://localhost:3000/briefing` 접속.

## 시나리오 1 — 전체 브리핑 (User Story 1, SC-001·SC-002)

1. `/briefing`을 연다.
2. **기대**: 복습 대상 목록(연체 일수 큰 순서)과 로드맵별 진행률(0%(미시작)/`<0.1%`/`<100%`/소수 첫째 자리 구분 포함)이 함께 나타난다. 완료 0건인 로드맵이 "0% (미시작)"으로, 극소 진행(예: 5/799)인 로드맵이 `<0.1%`로 뭉개지지 않고 구분되는지 직접 실제 저장소 값으로 확인한다.
3. 미시작 로드맵이 4개를 넘으면 이름만 나열되는지 확인한다(FR-010).
4. 같은 URL을 새로고침한다. **기대**: 화면 값은 그대로고, `GET /briefing/history`에 새 기록이 추가로 쌓이지 않는다(SC-004, research.md §1).

## 시나리오 2 — 특정 로드맵으로 좁혀 보기 (User Story 2, SC-003)

1. `/briefing?roadmapId=<존재하는 로드맵 id>`를 연다.
2. **기대**: 진행률 표에는 그 로드맵 하나만 나오고(평균 진행률도 그 하나와 같아짐, research.md §3), 복습 대상 목록은 시나리오 1과 완전히 동일하게 전체가 나온다(FR-006).
3. 존재하지 않는 `roadmapId`로 열어 404 안내가 나오는지, 전체 결과로 조용히 대체되지 않는지 확인한다(FR-018).

## 시나리오 3 — 다시 실행과 기록 이력 (User Story 3, SC-005)

1. `/briefing`에서 "다시 실행" 버튼을 누른다.
2. **기대**: `POST /briefing/rerun` → 303 리다이렉트 → 새 기록 상세 화면. `GET /briefing/history`를 열어 같은 날짜에 기록이 하나 더 늘었는지 확인한다(Acceptance Scenario US3-2).
3. 아무 학습 항목이나 임의로 완료 처리해 진행률을 바꾼 뒤, 방금 만든 과거 기록 상세(`/briefing/history/:id`)를 다시 연다. **기대**: 방금 바꾼 값이 반영되지 않고 기록 당시 값 그대로 보인다(FR-014).
4. `내학습/브리핑로그.md`를 연다. **기대**: 기존 3줄(2026-09-16/18/22)이 그대로 남아 있고, 그 아래 `## 상세 기록 (웹)` 섹션에 방금 만든 기록이 새로 추가돼 있다(FR-020, research.md §7).

## 엣지 케이스 — 복습 데이터 조회 실패 (Edge Cases)

```bash
# 004 캐시 파일을 임시로 옮겨 openReadOnlyOrThrow가 실패하도록 만든다
mv backend/.cache/learning-loop.sqlite /tmp/learning-loop.sqlite.bak
```

1. `/briefing`을 연다. **기대**: 로드맵 진행률은 정상 표시되고, 복습 목록 자리에는 "복습 데이터를 불러올 수 없음"이 표시된다 — 500/503 오류 페이지가 아니다.
2. `GET /briefing/history`를 확인해 이 실패로 새 기록이 저장되지 않았는지 확인한다(research.md §4).

```bash
mv /tmp/learning-loop.sqlite.bak backend/.cache/learning-loop.sqlite   # 원복
```

## 자동화된 검증

```bash
cd backend
npm test
```

- `tests/unit/briefing.formatProgress.test.ts` — FR-004 표시 규칙의 모든 경계(0건, 극소 진행, 반올림 100%, 0/0) 검증.
- `tests/unit/briefing.buildSnapshot.test.ts` — 스코프 필터링, 평균 계산 범위(research.md §3), `reviewDataUnavailable` 분기 검증.
- `tests/unit/briefing.schema.test.ts` — 전용 SQLite 파일의 스키마 생성, 버전 불일치 시 삭제하지 않고 오류로 표면화하는지 검증.
- `tests/integration/briefing.service.dedup.test.ts` — 같은 (날짜, 시간대, 스코프) 재조회는 기존 기록 재사용, `forceNew`는 항상 새 기록 생성(SC-004, US3-2) 검증.
- `tests/integration/web.briefing.test.ts` — `GET /briefing`, `POST /briefing/rerun`, `GET /briefing/history`, `GET /briefing/history/:id` HTTP 계약 검증(supertest).
- `tests/integration/briefing.logFile.test.ts` — `내학습/브리핑로그.md`에 기존 행이 보존되고 새 섹션이 추가되는지(임시 파일 경로로 격리) 검증.

## 수동 확인이 필요한 것 (헌법 원칙 I/IV)

- 위 시나리오 1~3과 엣지 케이스를 실제 저장소 데이터로 직접 브라우저에서 확인.
- 좁은 뷰포트(모바일)에서 진행률 표·복습 목록이 가로로 넘치지 않는지.
- 신규 사용자 상태(로드맵 미시작, 복습큐 비어 있음, 브리핑 기록 없음)가 오류처럼 보이지 않는지.
