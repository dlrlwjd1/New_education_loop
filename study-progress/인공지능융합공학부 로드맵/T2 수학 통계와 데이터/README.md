# T2 — 수학·통계와 데이터

학부 교과 **공학수학(1-1·1-2) · 데이터사이언스개론(1-1) · 데이터사이언스통계(1-2) · 인공지능수학(2-1) · 회귀분석(2-1)** 을 담는 트랙이다.
[T3 머신러닝과 딥러닝](../T3%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D%EA%B3%BC%20%EB%94%A5%EB%9F%AC%EB%8B%9D/README.md)이 서 있을 바닥을 까는 트랙이라, **T3보다 먼저 끝내는 것이 원칙이다.**

- 상위 로드맵: [인공지능융합공학부 로드맵](../README.md)
- 도착점 기여: 모델이 왜 그렇게 학습하는지(경사하강·확률·손실함수) **수식 수준에서 설명할 수 있게 된다**
- 분량: 약 117시간

## Phase 목록

| Phase | 학부 교과 | 주제 | 산출물 | 저장소 자료 | 파일 |
|---|---|---|---|---|---|
| 1 | 데이터사이언스개론(1-1) | 데이터사이언스가 무엇이고 어떻게 일하는가 | 문제 하나를 데이터사이언스 방법론 단계로 쪼갠 기획서 | 있음 | [01 Phase 1](01%20Phase%201%20-%20%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%82%AC%EC%9D%B4%EC%96%B8%EC%8A%A4%20%EA%B0%9C%EB%A1%A0.md) |
| 2 | 데이터사이언스통계(1-2) | 기술통계와 데이터 시각화 | 실제 데이터셋 하나의 EDA 보고서 | 있음 | [02 Phase 2](02%20Phase%202%20-%20%EA%B8%B0%EC%88%A0%ED%86%B5%EA%B3%84%EC%99%80%20%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EC%8B%9C%EA%B0%81%ED%99%94.md) |
| 3 | 데이터사이언스통계(1-2) | 추론통계와 가설검정 | 신뢰구간·p값을 근거로 결론 낸 검정 보고서 | 있음 | [03 Phase 3](03%20Phase%203%20-%20%EC%B6%94%EB%A1%A0%ED%86%B5%EA%B3%84%EC%99%80%20%EA%B0%80%EC%84%A4%EA%B2%80%EC%A0%95.md) |
| 4 | 공학수학(1-1·1-2)<br>인공지능수학(2-1) | 선형대수·미적분·확률 | 경사하강을 NumPy로 직접 구현한 노트북 | **있음 ✅** | [04 Phase 4](04%20Phase%204%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%88%98%ED%95%99.md) |
| 5 | 회귀분석(2-1) | 회귀분석 | 회귀 모델 진단(잔차·다중공선성)까지 포함한 분석 보고서 | 있음 | [05 Phase 5](05%20Phase%205%20-%20%ED%9A%8C%EA%B7%80%EB%B6%84%EC%84%9D.md) |

## 뼈대가 되는 강좌

1. **[Statistics with Python](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/README.md)** (MOOC · University of Michigan · 3강좌 91강) — Phase 2·3·5의 메인. Course 1이 기술통계, Course 2가 추론통계, Course 3이 회귀·다수준 모형으로 학부 교과 순서와 그대로 맞는다.
2. **[IBM Data Science](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/README.md)** (MOOC · 12강좌 266강) — Phase 1의 메인(`01`~`03`), Phase 2의 시각화(`08`), Phase 5의 실습(`07`·`09`).
3. **[Data Analytics](../../../courses/deeplearning-ai/Data%20Analytics/README.md)** (DeepLearning.AI · 5강좌) — Phase 1~3·5의 보조. 같은 통계를 **엑셀·파이썬 실습 위주**로 다시 본다.
4. **[Mathematics for Machine Learning: Linear Algebra](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/README.md)** (MOOC · Imperial College London · 5모듈 36강) — **Phase 4의 첫 메인.** 벡터·내적·투영·기저에서 행렬·행렬식·직교행렬·그람-슈미트를 거쳐 **고유값·고유벡터와 PageRank**까지. **2026-09-04 수강·정리 완료.**
5. **[Mathematics for Machine Learning: Multivariate Calculus](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/README.md)** (MOOC · Imperial College London · 6모듈 42강) — **Phase 4의 두 번째 메인.** 도함수 정의부터 야코비안·헤시안·역전파·테일러 급수·경사하강·최소제곱 회귀까지. ⚠️ **위 선형대수를 선수로 요구한다.** **2026-09-04 수강·정리 완료.**

## 이 트랙의 공백 — 전부 해소 (2026-09-04) ✅

> ✅ **Phase 4의 공백이 완전히 닫혔다.** Imperial College London의 **`Linear Algebra`(19h, 영상 36개)** 와 **`Multivariate Calculus`(18h, 영상 42개)** 를 모두 수강·정리해 저장소에 넣었고, [Phase 4](04%20Phase%204%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%88%98%ED%95%99.md)의 추천 표를 **실제 체크리스트로 교체**했다.
>
> **이제 T2 다섯 Phase 전부를 저장소 자료만으로 진행할 수 있다.** 같은 전문과정의 3번째 코스 `PCA`(21h)는 선택 사항이다.

## 진행 현황

| Phase | 상태 | 완료일 |
|---|---|---|
| Phase 1 | 미시작 | — |
| Phase 2 | 미시작 | — |
| Phase 3 | 미시작 | — |
| Phase 4 | 미시작 (강의 자료 전부 확보 2026-09-04) | — |
| Phase 5 | 미시작 | — |
