# 라이브러리 계약: 자료 이전 기반

이 기능은 외부에 HTTP API를 노출하지 않는다(FR-016 — 영속 저장소·서비스는 3단계 범위). 대신 3단계(사용자·읽기 화면) 구현이 그대로 재사용할 **내부 라이브러리 인터페이스**를 계약으로 정의한다. 이 계약이 바뀌면 3단계 작업에 영향을 준다는 뜻이므로, 변경 시 헌법의 "역할 간 통합 절차"에 따라 백엔드·QA 서브에이전트에게 통보한다.

## `parseRoadmaps(rootPath: string, now?: Date): RoadmapParseResult`

- **입력**: `study-progress/` 절대 경로. `now`(옵션, 기본값 실제 현재 시각)는 완료 날짜의 "미래 날짜" 판정 기준 시각을 주입한다 — 실제 구현 중 테스트가 결정적 시계 없이는 미래 날짜 케이스를 재현할 수 없어 추가됐다.
- **출력**: `data-model.md`의 `Roadmap[]`과, 각 로드맵의 `ImportError[]`(FR-014).
- **보장**: 트랙 유무와 관계없이 모든 Phase·학습 항목을 원문 순서로 반환한다(FR-001, FR-002). Phase 문서가 없거나 집계 불가능한 로드맵도 배제하지 않고 `hasPhaseDocs`/`aggregatable` 플래그와 함께 반환한다(FR-015).

## `parseMaterials(rootPath: string, now?: Date): MaterialParseResult`

- **입력**: `courses/` 절대 경로. `now`는 위와 같은 이유로 추가된 옵션.
- **출력**: `Material[]`과 색인 조회 함수(아래 `MaterialIndex` 참고).
- **보장**: 반환된 자료 수는 실제 파일 수와 정확히 같다(SC-003). 상대 경로·한글·공백·URL 인코딩·앵커가 원문 그대로 보존된다(FR-009).
- **`provider`/`course` 추론 규칙**(FR-007, 실제 `courses/` 구조로 구현하며 확정된 판단): `deeplearning-ai`/`udemy`는 provider=분류명 자체, course=그 다음 경로 세그먼트. `youtube`는 provider=채널(2번째 세그먼트), course=그 아래 재생목록 폴더가 있으면 3번째 세그먼트. `mooc`는 여러 제공처가 뒤섞인 분류라 provider=null, course=2번째 세그먼트. `articles`는 provider·course 모두 null.

## `MaterialIndex`

```ts
interface MaterialIndex {
  byId(id: string): Material | undefined
  byPath(sourcePath: string): Material | undefined
  search(query: { title?: string; category?: string; provider?: string; course?: string; roadmapId?: string }): Material[]
}
```

- **보장**: 위 세 메서드 모두 전체 목록 선형 탐색 없이 직접 조회로 동작한다(FR-008). `search`는 `provider`/`course`가 경로에서 추론되지 않은(null) 자료는 그 조건으로는 찾지 못한다 — 주제(topic) 기반 검색은 이 인터페이스에 없다(spec.md Assumptions, FR-007). 3단계는 이 인터페이스 형태를 그대로 저장소 조회 계층의 계약으로 재사용한다.

## `resolveMaterialLinks(items: LearningItem[], index: MaterialIndex, roadmaps: Roadmap[]): { linked: LearningItem[]; errors: ImportError[] }`

**계약 변경(구현 중 발견)**: 원안에는 `roadmaps` 파라미터가 없었다. `items`/`index`만으로는 어떤 `LearningItem`이 어떤 로드맵에 속하는지 알 수 없어 `Material.linkedRoadmapIds`(FR-013)를 채울 수 없고, `ImportError`의 `sourcePath`도 만들 수 없었다 — `parseRoadmaps`가 이미 반환하는 `Roadmap[]`을 그대로 받아 내부에서 `phaseId → {roadmapId, phaseSourcePath}` 맵을 만드는 것으로 해결했다. 이 변경은 3단계 구현이 이 함수를 호출할 때 반드시 반영해야 한다.

- **입력**: `parseRoadmaps`가 만든 학습 항목 전체·로드맵 전체와, `parseMaterials`로 만든 `MaterialIndex`.
- **보장**: 각 학습 항목의 원문에서 발견한 자료 참조를 `index.byPath`로 해석해 `linkedMaterialId`를 채운다. 해석에 성공하면 해당 `Material.linkedRoadmapIds`에 로드맵 ID를 추가한다(중복 없이). 원문 참조가 파일이 아니라 폴더(디렉터리 링크)를 가리키면 이는 자료 식별의 범주 오류이므로 `linkedMaterialId=null`을 두되 오류로 보고하지 않는다 — 오류는 실제로 존재하지 않는 파일을 가리킬 때만 `ImportError(kind="link_broken")`로 남긴다(FR-013, FR-014). 이 함수가 끝난 뒤에는 어떤 `linkedMaterialId`도 존재하지 않는 `Material.id`를 가리키지 않는다.

## `resolveIdentity(candidate: { sourcePath: string; contentHash: string }, previousBatch?: ImportBatch): { id: string; status: "created" | "updated" | "held" }`

이 함수는 로드맵 엔티티(로드맵/트랙/Phase/학습 항목)와 자료 양쪽 모두가 공유하는 **단일** 식별자 해석 함수다 — 대상 종류별로 별도 구현을 두지 않는다.

- **보장**: 경로를 1차 키로 매칭하고, 경로가 일치하지 않으면 내용 해시로 재확인한다(FR-003, FR-012). 경로가 같고 해시가 다르면 `status: "updated"`(새 버전)로, 완전히 새로운 경로·해시면 신규 `id`를 발급한다. 정규화 후 서로 다른 두 원본이 같은 후보 `id`로 충돌하면 예외를 던지지 않고 `ImportError(kind="id_collision")`를 배치에 추가한 뒤 `status: "held"`로 반환한다(FR-010). `status: "updated"`를 반환할 때는 호출자(`parseMaterials`)가 그 자료의 버전 이력에 새 `MaterialVersion`을 추가해야 한다(FR-012, data-model.md).

**설계 주석(구현 중 확정)**: `previousBatch`는 **이번 실행 자체가 누적 중인 매핑 원장을 자기 자신에게 넘기는 용도가 아니다.** 한 번의 실행 안에서는 실제 파일 경로가 이미 고유하므로 경로 매칭만으로 충분하고, 해시 재확인·`status: "updated"`는 원래 "이전에 저장된 실행 결과"(영속 저장소, FR-016상 이 기능에는 없음)와 비교할 때만 의미가 있다. 이번 실행 자체의 누적 원장을 `previousBatch`로 잘못 주입하면, 내용이 우연히 같은 서로 다른 두 실제 파일(예: 같은 스펙 템플릿이 복사된 서로 다른 강좌 두 개)을 "하나가 이동한 것"으로 오판해 병합해버린다(실제 `courses/`에서 21건 발견·수정됨). 그러므로 이 기능의 파이프라인은 `previousBatch`를 채우지 않고 호출한다 — `id_collision`은 오직 "정규화 후 서로 다른 현재 실행의 경로가 같은 후보 id로 겹치는" 경우만 가리킨다. **3단계**가 영속 저장소를 붙일 때는 진짜 "이전 실행에서 저장된 매핑"을 `previousBatch`로 넘겨야 하며, 이번 실행 내부 상태를 재사용해서는 안 된다.

## `runImport(options: { scope: "real" | "example"; studyProgressRoot?: string; coursesRoot?: string }): ImportBatch`

- **입력**: 가져오기 범위(FR-011). `studyProgressRoot`/`coursesRoot`(옵션, 기본값 실제 저장소 경로)는 테스트가 축소된 픽스처 디렉터리를 가리키도록 하기 위해 추가됐다 — 원안은 이 함수가 항상 실제 저장소만 가리켜 픽스처로 테스트할 방법이 없었다.
- **출력**: `data-model.md`의 `ImportBatch`(매핑·오류·집계 포함).
- **보장**: 동일한 원본으로 두 번 실행해도 `metrics.duplicateCount === 0`(SC-004). `scope: "real"`이면 `metrics.exampleItemCount === 0`(SC-005). 내부적으로 `resolveMaterialLinks`를 실행한 뒤 반환하므로, 이 함수가 반환한 `ImportBatch`의 모든 `linkedMaterialId`는 유효하거나 `null`+`link_broken` 오류로 설명된다.
- **`metrics.duplicateCount`의 정의(구현 중 확정)**: 이 기능에는 영속 상태가 없어(FR-016) 식별자는 각 실행 안에서 경로의 순수 함수로 결정되고, 재실행은 그 자체로 항상 같은 id를 재사용한다. 따라서 이 값은 "재실행 시 새로 생성된 중복 항목 수"가 아니라 **"이번 실행에서 정규화 id 충돌로 보류(`status: "held"`)된 매핑 수"**로 정의한다 — 정상 데이터에서는 0이며, SC-004는 이 값이 재실행 후에도 늘지 않는지로 검증한다.

## 안정성 계약

- 이 인터페이스의 시그니처를 바꾸는 것은 3단계 작업에 영향을 준다 — 헌법의 "역할 간 통합 절차"에 따라 통보 후 진행한다.
- 이 계약은 저장소·API 스키마를 정의하지 않는다. 3단계에서 이 반환 타입을 실제 스키마로 옮길 때의 매핑 규칙은 3단계 자체의 data-model에서 정한다.
