# Running the Code Samples in the Course

## 개요
- 강좌에서 제공되는 실습 코드를 실행하기 위한 환경 설정 가이드(Reading).
- 이 강좌의 모든 코드 예제는 **LiteLLM**을 통해 LLM을 호출하며, Google Colab 사용을 강력히 권장한다.

## 내용

### LiteLLM이란?
- [LiteLLM](https://github.com/BerriAI/litellm) — GPT-4, Claude, Gemini 등 100개 이상의 LLM을 **하나의 통일된 인터페이스(unified interface)**로 호출할 수 있게 해주는 라이브러리.
- 장점: 코드를 바꾸지 않고도 모델을 쉽게 교체할 수 있어, 여러 LLM을 테스트하거나 운영 환경에서 폴백(fallback) 옵션을 두기에 적합. 에이전트를 여러 LLM에 걸쳐 재사용 가능하게 만들어준다 (단, 모델별로 약간의 프롬프트 엔지니어링 조정이 필요할 수 있음).

### API 키 준비
- 이 강좌의 모든 예제는 **OpenAI GPT-4o / GPT-4o-mini** 기준으로 작성·테스트됨 → **OpenAI API 키 + Google Colab** 조합을 강력 권장.
- 다른 LLM(Anthropic Claude, Google Gemini, Meta Llama 등)도 사용 가능하지만, LiteLLM 설정을 직접 변경해야 하며 강좌에서는 해당 설정을 별도로 제공하지 않는다.
- API 키는 **절대 코드에 하드코딩하지 말 것** — 환경 변수(environment variable)로 제공해야 한다.

### 다른 LLM Provider로 전환하는 방법
- 각 예제 상단의 다음과 같은 설정 코드 블록만 교체하면 된다 (Google Colab의 "Secrets" 기능 활용):

```python
# OpenAI 예시
import os
from google.colab import userdata
api_key = userdata.get('OPENAI_API_KEY')
os.environ['OPENAI_API_KEY'] = api_key
```

```python
# Anthropic로 전환 시
import os
from google.colab import userdata
api_key = userdata.get('ANTHROPIC_API_KEY')
```

```python
# Google Gemini로 전환 시
import os
from google.colab import userdata
api_key = userdata.get('GEMINI_API_KEY')
os.environ['GEMINI_API_KEY'] = api_key
```

- 다른 provider 설정은 [LiteLLM 공식 문서](https://docs.litellm.ai/docs/providers) 참고.
- OpenAI가 아닌 다른 LLM 사용 중 문제가 생기면, ChatGPT에 다음과 같은 프롬프트를 사용해 코드를 변환받을 수 있다:
  > "내 코드와 사용 중인 LLM 제공자(Anthropic, OpenAI 등)를 알려달라고 물어봐줘. 그 다음 해당 제공자의 API 키로 설정하는 방법을 보여주도록 코드를 재작성해줘. 설정 부분만 최소한으로 수정하고, LLM과 상호작용하는 코드는 가능한 한 그대로 유지해줘. LiteLLM(https://docs.litellm.ai/docs/providers)을 사용하고 싶어."
- 참고: 강좌 예제 다수가 **함수 호출(function calling)을 지원하는 LLM**에서만 동작한다.

### 코드 실행 방법
1. **Google Colab (권장)** — 로컬 환경 설정 없이 가장 쉽게 실행 가능. 각 레슨마다 Colab 노트북 링크 제공.
2. **로컬 Jupyter Notebook**
   - Python 3.8+ 설치 → (권장) 가상환경(virtual environment) 생성 → 의존성 설치 → 환경 변수로 API 키 설정 → Jupyter 실행 → 새 노트북에 Colab 코드 붙여넣기.
3. **독립 Python 스크립트로 실행**
   - Colab 노트북의 코드를 순서대로 복사해 `agent.py` 같은 파일로 만들고, 환경 변수 설정 후 실행.
   - API 키 관리를 더 쉽게 하려면 `python-dotenv` 사용을 대안으로 제시.

### 트러블슈팅
- **API Key Errors**: 환경 변수로 올바르게 설정됐는지 확인.
- **Module Not Found**: 필요한 패키지가 모두 설치됐는지 확인.
- **Rate Limiting**: API 호출 사이에 짧은 지연(delay)을 추가. 그래도 429 에러가 계속되면 OpenAI 계정의 API 크레딧 한도를 확인/증액해야 할 수 있음. (OpenAI API 과금은 ChatGPT 구독과 별개로 관리됨 — "Usage" 탭에서 확인 가능)
- OpenAI를 사용할 수 없는 경우 Google Gemini의 무료 티어(free tier)를 대안으로 고려할 수 있으나, 이 경우 모든 코드 예제를 Gemini API/LiteLLM 설정에 맞게 직접 변환해야 한다.

## 예시
> **API 키 테스트용 노트북**: [Example Code in Notebook (Google Colab)](https://colab.research.google.com/drive/10USwjwaJ-1J-I_2igKIbJ-GdMDWlHKRU?usp=sharing) — API 키가 정상 동작하는지 먼저 확인할 수 있다.

## 요약
- 이 강좌의 모든 실습은 **LiteLLM + OpenAI GPT-4o/mini + Google Colab** 조합을 기준으로 설계되어 있다.
- 다른 LLM을 쓰려면 상단의 API 키 설정 블록만 해당 provider에 맞게 교체하면 되고, 나머지 로직은 그대로 유지된다.
- API 키는 항상 환경 변수로 관리하고 코드에 하드코딩하지 않는다.
- 함수 호출(function calling)을 지원하는 LLM이어야 대부분의 예제가 정상 동작한다.
