# Quickstart: 자료 이전 기반 검증

이 기능이 끝났다고 보고하기 전에, 아래 절차로 스펙의 성공 기준(SC-001~006)이 실제 저장소 데이터로 통과하는지 확인한다.

## 사전 준비

- Node.js LTS, 이 기능 패키지의 의존성 설치 완료(`npm install`).
- 실제 저장소 루트(`study-progress/`, `courses/`)에 접근 가능한 상태에서 실행한다 — 별도의 축소된 샘플 데이터로는 SC-001~003(원본 수치 100% 일치)을 검증할 수 없다.

## 1. 로드맵 가져오기 → 원본 대조 (SC-001, SC-002)

```bash
npm run ingest -- --scope=real --roadmaps-only
```

- 결과 리포트(`ImportBatch`)의 `metrics`에서 로드맵별 `completedItemCount`/`totalItemCount`를 확인한다.
- 각 로드맵 디렉터리에서 아래로 원본 체크박스 수를 직접 세어 대조한다:

```bash
grep -rE '^\s*-\s*\[[xX ]\]' "study-progress/<로드맵>/"*"Phase"*.md | wc -l
```

- 트랙-Phase 중첩 구조가 있는 로드맵(예: 인공지능융합공학부)에서는 하위 트랙 폴더까지 포함해 위 명령을 재귀적으로 돌려 누락이 없는지 확인한다(SC-002).

## 2. 재실행으로 중복 없음 확인 (SC-004)

```bash
npm run ingest -- --scope=real --roadmaps-only
```

- 같은 명령을 다시 실행한 뒤 `metrics.duplicateCount === 0`인지 확인한다.

## 3. 자료 색인 → 원본 파일 수 대조 (SC-003, SC-006)

```bash
npm run ingest -- --scope=real --materials-only
find courses/ -name '*.md' | wc -l
```

- 두 수치가 일치해야 한다.
- 한글·공백·URL 인코딩이 섞인 경로 100건을 무작위로 뽑아 `MaterialIndex.byPath()`로 조회해 오류 없이 나오는지 확인한다(SC-006).

## 4. 예시/실제 분리 확인 (SC-005)

```bash
npm run ingest -- --scope=real
```

- 결과의 `metrics.exampleItemCount`가 0인지 확인한다.
- `사용과개선.md`에 명시된 예시 데이터 경로가 결과의 `ImportMapping` 목록에 전혀 나타나지 않아야 한다.

## 5. 오류 목록 확인

- 실행 결과의 `errors` 배열을 훑어, 날짜 오류·해석 불가 체크박스·식별자 충돌이 있다면 각각 원본 파일을 열어 실제로 그런 문제가 있는지 수동으로 확인한다(오탐 여부 점검).

## 기대 결과

위 5단계 모두 통과하면 이 기능은 완료 기준(SC-001~006)을 만족한다. 이 결과물(파싱 규칙·자료구조)은 3단계 구현이 `contracts/ingestion-library.md`의 인터페이스를 통해 그대로 재사용한다 — 이 기능에서 별도의 저장소·API를 만들지 않는다(FR-016).
