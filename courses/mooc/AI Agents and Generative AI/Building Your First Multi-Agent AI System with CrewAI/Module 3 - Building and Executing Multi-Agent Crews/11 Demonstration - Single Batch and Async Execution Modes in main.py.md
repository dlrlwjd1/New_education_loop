# Demonstration - Single Batch and Async Execution Modes in main.py

> MOOC video · [원본 학습 항목](https://www.mooc.org/learn/multi-agent-ai-system-crewai/lecture/Oc4Bx/demonstration-single-batch-and-async-execution-modes-in-main-py)

## 개요
- 이는 crew.ai에서 매우 중요한 패턴인데, 이러한 입력값들이 실행 시점에 agents.yaml 과 tasks.yaml 모두에 주입되기 때문입니다.

## 내용
- 이는 crew.ai에서 매우 중요한 패턴인데, 이러한 입력값들이 실행 시점에 agents.yaml 과 tasks.yaml 모두에 주입되기 때문입니다.
- 티켓 해결 시간을 60% 단축한다’와 같은 측정 가능한 주장이 포함된 상세한 제품 설명은 '60% 단축'과 같은 측정 가능한 주장을 포함하고, 목표 시장을 '올해 직원 수 50~500명의 B2B SaaS 기업'으로 설정하며, datetime.now.year에서 자동으로 가져옵니다.
- kickoff는 전체 순차 파이프라인을 시작하고, 전략을 연구하여 QA로 복사하고, 작업 출력, 토큰 사용량 및 구조화된 pydantic 결과를 포함하는 크루 출력 객체를 반환합니다.
- 배치 실행은 명확한 배너를 출력하는 것으로 시작되므로, 터미널 출력을 통해 배치 실행과 단일 실행을 시각적으로 구분해 줍니다.
- 하나는 중견 B2B SAS 기업을 위한 지원 플랫폼인 ‘Flow Desk’이고 Pipeline IQ(중견 시장 영업 팀을 위한 매출 인텔리전스 도구)를 위한 지원 플랫폼)를 실행합니다.
- 이제 CORE 실행 라인은 결과가 각 캠페인에 대해 'campaign crew.crew.kickoff'와 같다는 것입니다 입력 = 배치 입력입니다.
- 따라서 여기서 얻을 수 있는 교훈은, 전체 터미널 보고서를 출력하는 것보다 통합에 더 중점을 둘 때 터미널에 전체 보고서를 출력하는 것보다 통합을 더 중요하게 여길 때 주로 사용된다는 점입니다.

## 예시
- main.py의 단일, 일괄 및 비동기 실행 모드에 대한 이 데모에 오신 것을 환영합니다.

## 요약
- 이제 CORE 실행 라인은 결과가 각 캠페인에 대해 'campaign crew.crew.kickoff'와 같다는 것입니다 입력 = 배치 입력입니다. 따라서 여기서 얻을 수 있는 교훈은, 전체 터미널 보고서를 출력하는 것보다 통합에 더 중점을 둘 때 터미널에 전체 보고서를 출력하는 것보다 통합을 더 중요하게 여길 때 주로 사용된다는 점입니다.
