# Quickstart: 로드맵 탐색·자료실 화면 검증

이 문서는 003 구현이 끝난 뒤, 스펙의 User Story 1~5가 실제 브라우저에서 동작하는지 확인하는 절차다. 라우트 계약은 [contracts/http-routes.md](./contracts/http-routes.md)를, 뷰 모델은 [data-model.md](./data-model.md)를 참고한다.

**전제**: 002의 캐시가 최소 한 번 적재돼 있어야 한다(`backend`에서 002의 `reload()`를 한 번 실행 — 002 quickstart.md 시나리오 1 참고).

## 사전 준비

```bash
cd backend
npm install
npm run typecheck && npm run lint
npm run web   # backend/src/web/server.ts를 띄우는 신규 스크립트(package.json에 추가)
```

브라우저에서 `http://localhost:3000`(포트는 구현 시 확정) 접속.

## 시나리오 1 — 로드맵 목록 (User Story 1)

1. `/`을 연다.
2. **기대**: 로드맵 8개가 제목·완료/전체·진행률과 함께 나타난다(SC-002). Phase 문서가 없는 로드맵은 "진행 자료 없음"으로, 확인 필요 항목이 있는 로드맵은 별도 표시로 구분된다(FR-003, FR-004).

## 시나리오 2 — 로드맵 상세 탐색 (User Story 2)

1. 트랙이 있는 로드맵(예: 인공지능융합공학부 로드맵)을 연다.
2. **기대**: 트랙 → Phase → 학습 항목이 원문 순서로 나타난다(FR-002). 트랙 없는 로드맵도 같은 방식으로 열어 Phase가 바로 나타나는지 확인한다.
3. 체크박스 형식이 깨진 Phase가 있으면 "형식 확인 필요" 안내가 학습 항목 목록 대신 나타나는지 확인한다(FR-003).

## 시나리오 3 — 이어서 공부 (User Story 3)

1. 일부만 완료된 로드맵 상세에서 "이어서 공부"를 누른다.
2. **기대**: 원문 순서상 가장 먼저 나오는 미완료(`completed=false`) 항목 위치로 이동한다(FR-005). `completed=null`(확인 필요) 항목은 건너뛰고, 건너뛴 개수가 안내에 나타나는지 확인한다(research.md §6).
3. 모든 항목이 완료된 로드맵에서 같은 버튼을 누르면 "더 이상 이어서 공부할 항목이 없다"는 안내가 나타나는지 확인한다(임의 항목으로 이동하지 않음).

## 시나리오 4 — 자료 검색 (User Story 4)

1. `/materials`에서 분류(`category=articles` 등)로 검색한다.
2. **기대**: 1초 이내에 결과가 나타나고(SC-003), 제목·경로·분류·연결된 로드맵이 함께 표시된다(FR-008).
3. 결과가 없는 조건으로 검색해 "조건에 맞는 자료가 없다"는 안내가 오류로 보이지 않는지 확인한다.

## 시나리오 5 — 자료 본문 열람 (User Story 5)

1. 표·코드 블록이 있는 실제 자료를 검색 결과에서 연다.
2. **기대**: 원본 서식 그대로 표시되고(SC-004), 원본 출처 링크가 보존된다(FR-009).
3. `<script>` 또는 `onerror` 같은 위험 요소가 섞인 Markdown 픽스처를 열어, 개발자 도구 콘솔에 스크립트 실행 흔적이 없는지 확인한다(SC-005).
4. 자료를 열람한 것만으로 연결된 학습 항목이 완료 처리되지 않는지, 로드맵 상세로 돌아가 확인한다(FR-012).

## 자동화된 검증

```bash
cd backend
npm test
```

- `tests/integration/web.roadmaps.test.ts` — 시나리오 1~3 자동화(supertest로 `/`, `/roadmaps/:id`, `/roadmaps/:id/continue` 검증).
- `tests/integration/web.materials.test.ts` — 시나리오 4 자동화(검색 조건 조합, 페이지네이션).
- `tests/integration/web.materialBody.test.ts` — 시나리오 5 자동화(표·코드 블록 보존, 악성 스크립트 픽스처로 sanitize 검증).
- `tests/unit/materialContent.test.ts`, `tests/unit/continueStudy.test.ts`, `tests/unit/html.test.ts` — 각 모듈 단위 검증.

## 수동 확인이 필요한 것 (헌법 원칙 I/IV)

자동 테스트만으로는 "완료"로 보고하지 않는다 — 다음은 실제 브라우저(데스크톱·모바일 뷰포트)에서 메인 에이전트가 직접 확인한다:

- 위 시나리오 1~5 전체를 실제 저장소 데이터로 골든 패스 확인.
- 좁은 뷰포트(모바일)에서 목록·상세·검색 화면이 가로로 넘치지 않는지.
- 빈 로드맵 목록(신규 사용자) 상태가 오류처럼 보이지 않는지.
