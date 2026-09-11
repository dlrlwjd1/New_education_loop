# From Natural Language to Data Visualizations with LangChain

> MOOC video · [원본 학습 항목](https://www.mooc.org/learn/fundamentals-of-building-ai-agents/lecture/LRMlI/from-natural-language-to-data-visualizations-with-langchain)

## 개요
- 모델을 불러와 LangChain에 연결하려면, 먼저 IBM의 Foundation Models에서 모델 클래스를 가져오고 LangChain의 watsonx LLM을 가져와 watsonx LLM을 설정하는 것부터 시작하세요.

## 내용
- 모델을 불러와 LangChain에 연결하려면, 먼저 IBM의 Foundation Models에서 모델 클래스를 가져오고 LangChain의 watsonx LLM을 가져와 watsonx LLM을 설정하는 것부터 시작하세요.
- 업데이트에 따라 구체적인 구문이 변경될 수 있으므로, 항상 최신 LangChain 문서를 확인하시기 바랍니다.이제 LangChain의 Pandas DataFrame 에이전 이제 LangChain의 Pandas DataFrame 에이전트를 설정해 보겠습니다.
- 다음으로, LLM을 DataFrame에 연결하여 자연어 방식으로 데이터 관련 질문에 답변할 수 있는 DataFrame 에이전트를 생성합니다 답변할 수 있도록 DataFrame 에이전트를 생성합니다.
- LangChain Pandas 에이전트는 미리 구성된 함수와 프롬프트를 사용하며, 사용자의 프롬프트 입력을 받아 기존 Pandas 데이터프레임을 기반으로 처리하며, 답변이나 시각적 자료로 응답한다는 점에서 차별화됩니다.
- IBM watsonx.ai 모델과 함께 LangChain Pandas 에이전트를 설정하려면, 먼저 watsonx LLM으로 모델을 초기화한 다음, create_pandas_dataframe_agent 함수를 사용하여 Pandas 데이터프레임에 연결합니다.
- Pandas 데이터프레임 에이전트에 자연어 질문을 던져 데이터를 분석하고 시각화할 수 있으며 에이전트에 자연어 질문을 던져 데이터를 분석하고 시각화할 수 있으며, 에이전트는 즉시 코드를 생성하여 명확한 데이터 인사이트를 제공합니다.
- 항상 샌드박스 환경을 사용하고, 명확한 프롬프트를 설계하며, 전문가의 검증과 함께, 쿼리를 반복적으로 다듬어 안전하고 효과적인 AI 기반 데이터 분석을 위해 샌드박스 환경을 항상 사용하고, 명확한 프롬프트를 설계하며, LLM 분석 결과를전문

## 예시
- LangChain Pandas 에이전트의 작동 방식을 확인하셨으니, 이제 안전하게 최상의 결과를 얻을 수 있도록 도와줄 몇 가지 모범 사례를 소개합니다.

## 요약
- Pandas 데이터프레임 에이전트에 자연어 질문을 던져 데이터를 분석하고 시각화할 수 있으며 에이전트에 자연어 질문을 던져 데이터를 분석하고 시각화할 수 있으며, 에이전트는 즉시 코드를 생성하여 명확한 데이터 인사이트를 제공합니다. 항상 샌드박스 환경을 사용하고, 명확한 프롬프트를 설계하며, 전문가의 검증과 함께, 쿼리를 반복적으로 다듬어 안전하고 효과적인 AI 기반 데이터 분석을 위해 샌드박스 환경을 항상 사용하고, 명확한 프롬프트를 설계하며, LLM 분석 결과를전문
