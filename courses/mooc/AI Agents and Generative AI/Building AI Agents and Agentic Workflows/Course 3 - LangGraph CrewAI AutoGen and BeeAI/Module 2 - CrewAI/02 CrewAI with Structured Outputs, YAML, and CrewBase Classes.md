# CrewAI with Structured Outputs, YAML, and CrewBase Classes

> MOOC video · [원본 학습 항목](https://www.mooc.org/learn/agentic-ai-with-langgraph-crewai-autogen-and-beeai/lecture/e3VLb/crewai-with-structured-outputs-yaml-and-crewbase-classes)

## 개요
- 설정의 대부분은 파이썬으로 이루어지지만, 남은 음식 에이전트는 YAML과 CrewBase 클래스를 사용하여 코드를 변경하지 않고도 간단하고 쉽게 업데이트할 수 있도록 설계되었습니다.

## 내용
- 설정의 대부분은 파이썬으로 이루어지지만, 남은 음식 에이전트는 YAML과 CrewBase 클래스를 사용하여 코드를 변경하지 않고도 간단하고 쉽게 업데이트할 수 있도록 설계되었습니다.
- 가격, 수량, 식단 요구 사항 등 특정 입력값이 필요한 작업이 있기 때문에, Pydantic 모델을 사용하여 각 에이전트의 출력이 구조화되고 다음 단계로 전달될 수 있도록 보장합니다.
- 각 에이전트는 공유된 LLM을 기반으로 작동하며, 일부는 SERPER 웹과 같은 외부 도구를 사용하여 웹 검색과 같은 외부 도구를 사용하여 실시간 레시피와 가격 정보를 확인하기도 합니다.
- output_pedantic=MealPlan을 설정하여, 다른 에이전트가 사용할 수 있도록 이전에 정의된 구조화된 출력이 다른 에이전트가 사용할 수 있도록 정형화된 출력을 보장합니다.
- `Summary_task`는 모든 에이전트(식단 계획자, 장보기 정리자, 예산 자문가, 남은 음식 관리자의 출력을 수집하여 이를 컨텍스트로 활용해 레시피, 쇼핑 목록, 팁, 남은 음식 활용 아이디어가 포함된 완전한 보고서를 생성합니다.
- CrewAI를 사용하면 특정 역할, 목표 및 작업으로 에이전트를 정의한 후, 이를 크루(Crew)로 그룹화하여 순차적으로 실행함으로써 다중 에이전트 워크플로를 구축할 수 있다는 점을 배웠습니다.
- GroceryItem, MealPlan, GroceryShoppingPlan과 같은 Pydantic 모델은 에이전트들이 서로에게 안정적으로 전달할 수 있는 명확하고 검증된 데이터 구조를 제공하여 에이전트들이 서로 데이터를 안정적으로 전달할 수 있게 합니다.

## 예시
- 다음은 수량, 가격 및 카테고리가 포함된 품목 목록을 전달하는 농산물에 대한 예시입니다.

## 요약
- CrewAI를 사용하면 특정 역할, 목표 및 작업으로 에이전트를 정의한 후, 이를 크루(Crew)로 그룹화하여 순차적으로 실행함으로써 다중 에이전트 워크플로를 구축할 수 있다는 점을 배웠습니다. GroceryItem, MealPlan, GroceryShoppingPlan과 같은 Pydantic 모델은 에이전트들이 서로에게 안정적으로 전달할 수 있는 명확하고 검증된 데이터 구조를 제공하여 에이전트들이 서로 데이터를 안정적으로 전달할 수 있게 합니다.
