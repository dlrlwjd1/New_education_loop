# Orchestrator Design Pattern

> MOOC video · [원본 학습 항목](https://www.mooc.org/learn/agentic-ai-with-langgraph-crewai-autogen-and-beeai/lecture/Fir7g/orchestrator-design-pattern)

## 개요
- 상태의 섹션 목록에서, ‘assign workers’ 노드는 ‘send’를 사용하여 섹션 변수에 포함된 각 요리 객체를 워커 상태 변수를 통해 각 워커 에이전트로 전달합니다.

## 내용
- 상태의 섹션 목록에서, ‘assign workers’ 노드는 ‘send’를 사용하여 섹션 변수에 포함된 각 요리 객체를 워커 상태 변수를 통해 각 워커 에이전트로 전달합니다.
- 오케스트레이터는 ‘dish’ 클래스를 사용하여 이름, ingredients, location의 세 가지 필드로 구성된 구조화된 출력을 생성하며, 이는 상태의 섹션 키에 포함된 구조화된 출력물을 생성합니다.다음으로, ‘dish_underscore’ 프롬프트를 사용하여 식사 요청 다음으로, ‘dish_underscore’ 프롬프트를 사용하여 식사 요청을 요리 이름, 재료, 요리 유형으로 분할합니다.
- 오케스트레이터는 상태에서 식사 요청을 가져와, meals 키를 사용하여 planner_pipe를 통과시킨 후 pipe를 통해 meals 키를 사용하여 전달하고, 워커 에이전트를 위한 구조화된 요리 목록을 반환합니다.
- 오케스트레이터는 ‘meals’ 키를 통해 이탈리아 파스타, 멕시코 타코, 인도식 카레, 태국식 볶음 요리, 미국식 버거를 준비해 주세요라는 식사 요청을 ‘meals’ 키를 통해 수신합니다.
- chef_underscore worker 노드는 'assign workers' 노드에서 전달받은 worker 상태에 포함된 요리 객체를 받아 완성된 메뉴를 구성합니다.
- synthesizer 노드는 상태 변수인 completed_menu에서 모든 완료된 식사 계획을 가져와 menu에서 가져와 구분 기호를 포함한 형식화된 문자열로 결합한 후, 통합된 최종 _meal_guide를 최종 _meal_guide에 저장합니다.
- 'assign workers' 노드는 오케스트레이터 노드에서 입력을 받아 워커 노드로 향하는 조건부 에지를 생성하여 요리 수에 따라 병렬 실행 경로를 만듭니다.

## 예시
- 'assign workers' 노드는 오케스트레이터 노드에서 입력을 받아 워커 노드로 향하는 조건부 에지를 생성하여 요리 수에 따라 병렬 실행 경로를 만듭니다.

## 요약
- synthesizer 노드는 상태 변수인 completed_menu에서 모든 완료된 식사 계획을 가져와 menu에서 가져와 구분 기호를 포함한 형식화된 문자열로 결합한 후, 통합된 최종 _meal_guide를 최종 _meal_guide에 저장합니다. 'assign workers' 노드는 오케스트레이터 노드에서 입력을 받아 워커 노드로 향하는 조건부 에지를 생성하여 요리 수에 따라 병렬 실행 경로를 만듭니다.
