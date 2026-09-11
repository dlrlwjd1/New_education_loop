# Development process summary

## 개요
- Module 4에서 배운 규율 있는(disciplined) 개발 프로세스를 정리한다.
- 에이전틱 시스템 개발은 두 활동을 **오가는(back and forth) 비선형 과정**이다.
  1. **Building** — 코드를 짜서 시스템을 개선
  2. **Analysis** — 다음에 어디를 개선할지 정하기 위한 분석 (당장 진척처럼 안 느껴져도 똑같이 중요)

## 성숙도에 따른 진행 흐름

시스템이 성숙해질수록 분석이 점점 정교해진다.

1. **초기** — quick and dirty로 end-to-end 시스템을 빠르게 구축
   → 최종 출력과 **트레이스를 읽으며** 잘/못하는 곳을 감(gut)으로 파악 → 컴포넌트나 전체 튜닝
2. **조금 성숙** — 수동 관찰을 넘어 **작은 eval(10~20개 예시)** 로 end-to-end 지표 계산
   → 더 정제된 개선 관점 확보
3. **더 성숙** — 규율 있는 **error analysis** 로 컴포넌트별 오류 빈도를 집계
   → 집중할 컴포넌트를 더 정확히 결정
4. **가장 성숙** — 컴포넌트 단위 효율적 개선을 위해 **component-level eval** 구축

> 이 과정은 선형이 아니다. end-to-end 튜닝 → error analysis → 컴포넌트 개선 → component eval 튜닝 사이를 계속 왕복한다.

## 자주 하는 실수
- 경험이 적은 팀은 **building에 시간을 많이 쓰고 analysis(오류 분석·eval 구축)에는 적게** 쓴다.
- 이상적인 건 그 반대에 가깝다 — 분석이 build 노력을 어디에 쏟을지 집중시켜 준다.

## 도구에 대한 팁
- 트레이스 모니터링, 런타임 로깅, 비용 계산 등을 돕는 **상용 도구**들이 있고 유용하다(DeepLearning.AI 파트너 다수 제공).
- 다만 에이전틱 워크플로는 대개 **매우 커스텀**하므로, Andrew Ng은 자신의 애플리케이션 특유의 문제를 잡아내기 위해 **커스텀 eval을 직접 많이 만든다**. (도구도 쓰되 커스텀 eval 병행)

## 요약
- 개발 = **building ↔ analysis** 의 반복.
- 성숙도에 따라: 트레이스 읽기 → 작은 end-to-end eval → error analysis → component-level eval 순으로 분석을 강화.
- 분석에 충분히 투자하면 대다수 개발자보다 훨씬 앞선 수준으로 에이전틱 워크플로를 구현할 수 있다.

## 다음 모듈
- Module 5: **고도로 자율적인 에이전트를 위한 고급 디자인 패턴** (Patterns for Highly Autonomous Agents)
