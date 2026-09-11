# Ideal Result

## 개요
- RECIPE 프레임워크의 네 번째 요소 **I = Ideal Result**를 다루는 강의.
- 강사는 I(Ideal Result)와 다음 강의의 P(Presentation)를 서로 밀접히 연관되어 있다며 함께 언급한다 — 둘 다 "결과물(outcome/output)이 무엇이어야 하는가"를 다루기 때문.

## 내용
### Ideal Result란 무엇인가
- 에이전트가 **최종적으로 무엇을 만들어내야 하는지**를 명확히 설명하는 것.
- 이걸 명시하지 않으면 결과물에 **변동성(variation)**이 생긴다.
  - 강의 초반 예시: "경비 보고서를 만들어줘"라고만 하면 그냥 표(table)를 만들어줌. 실제로 원했던 건 특정 컬럼의 CSV 파일, 지출 breakdown 대시보드, 이름이 정리된 영수증 파일들이었음.
- 따라서 스킬에는 "내가 얻고자 하는 것들이 정확히 이것이다"를 구체적으로 나열해야 한다.

### 품질 기준(quality criteria)도 함께 명시해야 한다
- 흔한 실수: "이거 해줘"라고만 하고, **결과물이 좋은지 나쁜지 판단할 기준(벤치마크, 루브릭)을 주지 않는 것**.
- 좋은 스킬은 "무엇을 만들지"뿐 아니라 "그것이 좋다고 판단하는 기준"까지 명시한다.

### 실전 예시 — 경비 보고서 감사 결과물 명세
```
Summary: Reviewed 12 items, totaling $847.50. Errors on lines 11-14.
Issues: (구체적 문제점 목록)
Recommendations: (권장 사항)
```
- "정확히 이것들만 만들어라(produce exactly these things)"라고 할 수도 있고, "이 외에 유용하다고 판단되면 다른 것(예: 노트)도 만들어도 된다"고 여지를 줄 수도 있음 — **정확히 무엇을 원하는지 그 범위를 명시**하는 것이 핵심.
- 여기서 "좋고 나쁨의 기준"은 굳이 별도로 장황하게 설명하지 않고, **"이렇게 생겨야 한다"는 형태(예시)로 보여주는 방식**으로 표현됨. LLM은 주어진 입력의 형태를 잘 모방(mirroring)하기 때문에 효과적.

### 환각(hallucination) 방지 팁 — 결과를 입력에 근거(ground)시키기
- 경비 보고서처럼 사실에 기반해야 하는 작업에서는, 에이전트가 지어내는(hallucinate) 위험이 항상 있다.
- 해결책: **"출력이 반드시 내가 준 입력에 매핑되도록 하라"**고 명시.
  - 예: "Errors on lines 11-14"처럼, 문제점을 원본 보고서의 **특정 줄(line)/특정 영수증**과 연결해서 답하게 만든다.
  - 이렇게 하면 (1) 환각 가능성이 줄어들고, (2) 사용자가 결과를 검증할 때 원본의 어디를 봐야 할지 명확해진다.
  - 예: "Line 3: Meal $75", "Line 7: ..." 형태로 구체적 위치를 참조하도록 요구.

## 예시
```markdown
## Ideal Result
Produce exactly:
1. Summary — e.g. "Reviewed 12 items, totaling $847.50. Errors on lines 11-14."
2. Issues — list specific problems, referencing the exact line/receipt.
3. Recommendations.

(Ground every issue in a specific line number or receipt from the input.)
```

## 요약
- Ideal Result는 에이전트가 **정확히 무엇을 만들어내야 하는지**와 **그 결과가 좋다고 판단하는 기준**을 명시하는 요소다.
- 명시하지 않으면 매번 결과물이 달라지는 변동성이 생긴다.
- 결과물을 원본 입력의 구체적 위치(줄 번호, 영수증 등)에 매핑하도록 지시하면, 환각을 줄이고 검증을 쉽게 만든다.
