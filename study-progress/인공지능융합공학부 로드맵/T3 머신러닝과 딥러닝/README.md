# T3 — 머신러닝과 딥러닝

학부 교과 **인공지능입문(1-1) · 머신러닝(2-2) · 신경망(2-2) · 기계학습프로젝트(3-1)** 을 담는 트랙이다.
이 로드맵의 **심장**이고, [T4 응용 AI](../T4%20%EC%9D%91%EC%9A%A9%20AI%20%EC%96%B8%EC%96%B4%20%EC%8B%9C%EA%B0%81%20%EB%A1%9C%EB%B4%87/README.md) 전체가 여기 위에 선다.

- 상위 로드맵: [인공지능융합공학부 로드맵](../README.md)
- 선행: [T2 수학 통계와 데이터](../T2%20%EC%88%98%ED%95%99%20%ED%86%B5%EA%B3%84%EC%99%80%20%EB%8D%B0%EC%9D%B4%ED%84%B0/README.md) Phase 4·5 — 학부 커리큘럼도 인공지능수학·회귀분석을 신경망·머신러닝의 선이수로 지정한다
- 도착점 기여: 캡스톤에 **직접 학습시킨 모델**을 넣을 수 있게 된다
- 분량: 약 85시간

## Phase 목록

| Phase | 학부 교과 | 주제 | 산출물 | 저장소 자료 | 파일 |
|---|---|---|---|---|---|
| 1 | 인공지능입문(1-1) | AI가 무엇을 할 수 있고 못 하는가 | AI로 풀 수 있는 문제/없는 문제 판정표 | 있음 | [01 Phase 1](01%20Phase%201%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%9E%85%EB%AC%B8.md) |
| 2 | 머신러닝(2-2) | 지도·비지도·강화학습 | 같은 데이터에 3개 모델을 붙여 비교한 노트북 | **있음 ✅** (2026-09-04 공백 해소) | [02 Phase 2](02%20Phase%202%20-%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D.md) |
| 3 | 신경망(2-2) | 신경망과 딥러닝 | 역전파를 NumPy로 구현한 신경망 | 있음 | [03 Phase 3](03%20Phase%203%20-%20%EC%8B%A0%EA%B2%BD%EB%A7%9D%EA%B3%BC%20%EB%94%A5%EB%9F%AC%EB%8B%9D.md) |
| 4 | 기계학습프로젝트(3-1) | 데이터 수집부터 성능 분석까지 | 실험 기록이 남는 ML 프로젝트 하나 | 있음 | [04 Phase 4](04%20Phase%204%20-%20%EA%B8%B0%EA%B3%84%ED%95%99%EC%8A%B5%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8.md) |

## 뼈대가 되는 강좌

1. **[Deep Learning Specialization](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/README.md)** (DeepLearning.AI · 5강좌 187강) — Phase 3·4의 메인. `01`·`02`가 신경망 본체, `03`이 기계학습 프로젝트 전략. `04`·`05`는 [T4](../T4%20%EC%9D%91%EC%9A%A9%20AI%20%EC%96%B8%EC%96%B4%20%EC%8B%9C%EA%B0%81%20%EB%A1%9C%EB%B4%87/README.md)에서 쓴다.
2. **[IBM Data Science](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/README.md)** — `09 Machine Learning with Python`이 Phase 2의 메인. 지도·비지도·모델 평가를 실습으로 한 바퀴 돈다.
3. **[AI for Everyone](../../../courses/deeplearning-ai/AI%20for%20Everyone/README.md)** (DeepLearning.AI) — Phase 1의 메인. 수식 없이 "AI가 무엇을 할 수 있는가"의 경계를 잡는다.
4. **[Machine Learning for Medical Data](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/README.md)** (MOOC) — Phase 2의 보조. 지도·비지도·신경망을 의료 데이터라는 한 도메인으로 관통해서 본다.
5. **[ML Model Development and Tracking](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/README.md)** (MOOC) — Phase 4의 메인. MLflow로 실험을 기록하는 부분이 학부 "기계학습프로젝트"의 실체에 가장 가깝다.

## 이 트랙의 공백 — 해소됨 ✅

**강화학습(reinforcement learning)이 저장소에 없었다.** RLHF를 언급하는 강의는 여럿 있었지만 에이전트·보상·정책 최적화를 정면으로 다루는 자료가 없었다.

**2026-09-04에 [Fundamentals of Reinforcement Learning](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/README.md)**(University of Alberta · Amii · 5모듈 15시간 · MOOC Plus 포함)**을 수강·정리해 이 공백을 메웠다.** [Phase 2의 2-E](02%20Phase%202%20-%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D.md)가 추천 표에서 **실제 체크리스트로 교체**됐다.

⚠️ 다만 이 강좌는 **강화학습 "문제"의 형식화(밴딧 → MDP → 벨만 방정식 → 동적 계획법)까지**다. **TD·Q-러닝 등 경험으로 배우는 알고리즘**은 전문과정 Course 2 이후에 있으며 학부 한 과목에는 과하다.

## 진행 현황

| Phase | 상태 | 완료일 |
|---|---|---|
| Phase 1 | 미시작 | — |
| Phase 2 | 미시작 | — |
| Phase 3 | 미시작 | — |
| Phase 4 | 미시작 | — |
