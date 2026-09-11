# RECIPE with Multiple Requests

## 개요
- RECIPE의 각 요소(R/E/C/I/P/E)를 모두 배운 뒤, 다시 처음(Requests)으로 돌아가 **"한 스킬에 여러 요청(multiple requests)이 있을 때 RECIPE를 어떻게 조직할 것인가"**를 다루는 강의.

## 내용
### 공통 요소 vs. 요청별(request-specific) 요소
- 여러 요청을 한 스킬에 담을 때, SKILL.md 최상단에는 보통 **모든 요청에 공통되는 것들**을 둔다:
  - **Environment(환경)**: 대부분 모든 요청이 동일한 scripts/references 세트를 공유하며, 요청에 따라 그중 어떤 것을 볼지만 달라짐.
  - **공통 목표/이상적 기준(common goals or ideals)**: 모든 요청에 적용되는 공통 표준이 있다면 여기에 둠 (항상 있는 건 아님).
- 그다음, **요청별로 개별화되는 것들**을 각 요청 섹션 안에 둔다:
  - Concrete Steps (그 요청만의 구체적 절차)
  - Ideal Result (그 요청의 결과물)
  - Presentation (그 요청 결과물의 형식 — zip 파일, PPT 등)
  - Examples (그 요청에 대한 올바른 예시)

### 구조화 방식
- SKILL.md 자체에 모든 요청을 다 적을 수도 있고, 이전에 배운 것처럼 **목차(table of contents) 스타일**로 만들어 각 요청이 references의 별도 파일을 가리키게 할 수도 있음.

### 왜 이렇게 조직해야 하는가 — 유지보수(maintenance)와 격리(isolation)
- 스킬을 쓰다 보면 특정 요청에서 결과가 만족스럽지 않아 **스킬을 수정해야 하는 순간**이 반드시 온다.
- 이때 중요한 것:
  1. 문제가 생긴 부분을 **빠르게 찾아 수정**할 수 있어야 한다.
  2. 수정할 때 **스킬 전체를 다시 쓰지 않아도 되어야** 한다.
  3. 한 요청을 고치는 수정이 **다른 요청에 영향을 주지 않아야** 한다 (격리, isolation).
- 요청 단위로 잘 조직되어 있으면, 문제가 생긴 요청의 섹션(또는 별도 파일)만 정확히 찾아가 수정할 수 있음.
- **이상적인 형태**: 각 요청의 지시문이 **별도의 파일**로 분리되어 있어서, 다른 요청을 수행할 때는 그 파일이 아예 읽히지도 않는 구조.
  - 예: "경비 감사(audit)" 요청 수행 시에는 references의 audit 관련 지시문만 읽힘.
  - "경비 제출(submit)" 요청 수행 시에는 submit 관련 지시문만 읽힘. audit 지시문은 전혀 보지 않음.
  - 따라서 audit 지시문을 수정해도 submit 동작에는 영향이 없다는 확신을 가질 수 있음.
- 요청이 많아질수록(스킬에 담기는 요청 수가 늘수록) 이런 **격리 구조의 중요성이 커진다.**

## 예시
```
expense-reports/
├── SKILL.md                      ← 공통 Environment + 요청 목차(table of contents)
└── references/
    ├── audit-request.md          ← 감사 요청 전용: Concrete Steps/Ideal Result/Presentation/Examples
    └── submit-request.md         ← 제출 요청 전용: Concrete Steps/Ideal Result/Presentation/Examples
```
- audit-request.md만 수정해도 submit-request.md를 사용하는 흐름에는 영향이 없음.

## 요약
- 여러 요청을 담은 스킬은 **공통 요소(Environment 등)는 상단에, 요청별 요소(Concrete Steps/Ideal Result/Presentation/Examples)는 각 요청 섹션에** 배치하는 구조를 따른다.
- 요청별로 지시문을 **별도 파일로 격리**하면, 한 요청을 수정할 때 다른 요청에 영향을 주지 않아 유지보수가 쉬워진다.
- 스킬에 담긴 요청 수가 많아질수록 이 격리 구조의 중요성은 더 커진다.
