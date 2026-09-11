# Reflection for Chart Generation — 대화정리

## 개요

강의의 Reflection 패턴을 **"PRD를 작성해 AI에게 개발을 위임하는" 소프트웨어 개발 워크플로우**에 적용해보는 논의 정리.

핵심 통찰:
- 차트 강의의 "실행 가능 ≠ 좋은 결과물"이라는 명제는 코드 개발에도 그대로 적용된다.
- AI가 PRD를 받아 짠 코드는 컴파일되고 테스트를 통과해도 PRD의 진짜 의도에 안 맞을 수 있다.
- 이 간극을 메우는 검증 단계로 Reflection을 넣을 수 있다.

## 내용

### 왜 이 연결이 성립하는가

강의의 핵심은 **실행 가능한 것과 좋은 결과물은 다른 문제**라는 점이다.

- 차트: 에러 없이 그려져도 비교 목적에 안 맞을 수 있음
- 코드: 컴파일·테스트 통과해도 PRD가 원한 사용자 목적에 안 맞을 수 있음

Reflection은 이 간극을 메우는 검증 루프다.

### 차트 워크플로우 → PRD 개발 워크플로우 매핑

| 차트 강의 | PRD 개발 워크플로우 |
|---|---|
| 시각화 목적 (2024 vs 2025 비교) | PRD (요구사항·의도) |
| v1 코드 + plot 이미지 | AI가 짠 코드 + 실행 결과/스크린샷 |
| Evaluation criteria (readability, clarity 등) | 검증 기준 (PRD 충족 여부, 엣지케이스, 보안 등) |
| Multimodal LLM critique | Reflection 단계: 결과물을 PRD에 비춰 비평 |
| Python code v2 | 개선된 코드 |

### 강의가 주는 3가지 설계 단서

1. **구체적 평가 기준을 줘야 한다.**
   "더 잘 만들어줘"가 아니라 PRD의 요구사항을 하나씩 충족했는지 체크하도록 기준을 명시해야 검증이 의미 있다.
   → PRD 자체가 훌륭한 reflection rubric이 된다. 리플렉터에게 **PRD를 평가 기준표로 넘겨주는 것**이 핵심.

2. **생성 모델과 검증 모델을 분리하면 좋다.**
   코드를 짠 모델이 자기 코드를 검토하면 자기 확신 편향이 생기기 쉽다.
   다른 모델 또는 reasoning model로 검증하면 문제를 더 잘 잡아낸다.

3. **Reflection이 항상 이득은 아니다 — eval로 확인해야 한다.**
   추가 LLM 호출 비용·latency를 감수할 가치가 있는지,
   아니면 애초에 PRD(=initial prompt)를 더 잘 쓰는 게 나은지를 따져야 한다.

### 코드 검증에서 특히 주의할 점

차트는 **multimodal**(이미지를 눈으로 봄)이라 reflection이 특히 강력했다.
코드 검증도 위력을 살리려면 코드 텍스트만 다시 넘기지 말고,
**실행 결과·테스트 로그·스크린샷·PRD 대조표** 같은 "관찰 가능한 증거"를 함께 넘겨야 한다.

## 예시

### PRD 위임 + Reflection 흐름

```text
PRD (요구사항·의도)
  -> AI에게 구현 위임
  -> 코드 v1 생성
  -> 실행 / 테스트
  -> 결과물 v1 (실행 결과, 로그, 스크린샷)

[Reflection]
코드 v1
실행 결과 v1
PRD (평가 rubric)
  -> (다른/추론 모델로) critique
  -> PRD 미충족 항목 지적
  -> 코드 v2 생성
```

### Reflection Prompt 구조 예시 (코드 검증용)

```text
You are a senior code reviewer.

Review the implementation against the PRD below.
For each PRD requirement, check whether it is fully satisfied:
- 요구사항별 충족 여부 (PRD 항목 그대로 나열)
- 엣지케이스 처리
- 보안 / 에러 핸들링
- 코드 가독성·유지보수성

Provide the observed evidence (test logs, output) for each judgment,
then write improved code addressing the gaps.
```

## 요약

- "실행 가능 ≠ 좋은 결과물"은 차트뿐 아니라 PRD 기반 코드 개발에도 성립한다.
- Reflection을 검증 단계로 넣으면 PRD 의도 충족 여부를 한 번 더 검토할 수 있다.
- PRD 자체를 reflection의 평가 rubric으로 넘겨주는 것이 핵심.
- 생성 모델과 검증 모델을 분리하면 자기 확신 편향을 줄일 수 있다.
- 코드 텍스트만이 아니라 실행 결과·로그·스크린샷 등 관찰 가능한 증거를 함께 넘겨야 한다.
- Reflection의 비용·latency 대비 가치는 eval로 확인하고, 때로는 PRD를 더 잘 쓰는 것이 나을 수 있다.
