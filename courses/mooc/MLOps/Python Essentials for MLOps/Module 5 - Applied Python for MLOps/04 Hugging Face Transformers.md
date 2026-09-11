# Hugging Face Transformers

## 개요
- Hugging Face의 `transformers` 라이브러리로 **모델을 로컬 파일 없이 동적으로 다운로드해서 즉시 사용**하는 법을 다룬다. `pipeline` 헬퍼 하나로 요약·감성분석·질의응답·번역·텍스트 생성까지 다양한 NLP 작업을 처리하는 실습.

## 내용

### Hugging Face란
- 머신러닝을 위한 다양한 API·패키지를 만드는 회사. 텍스트, 이미지, 오디오 등 다양한 모달리티를 다룰 수 있다.
- 설치: `pip install transformers`(가상환경에서), Jupyter 사용 시 `ipywidgets`, `ipykernel` 등 부가 의존성도 필요할 수 있음.

### `pipeline` 헬퍼 — 모델과 상호작용하는 핵심 도구
- `from transformers import pipeline` 후, `pipeline("summarization")`처럼 **어떤 작업(task)을 할지 지정**하면 해당 작업에 맞는 모델을 반환한다.
- **핵심 포인트**: 로컬 디스크에 있는 모델을 미리 로드할 필요가 없다 — **모든 모델이 동적으로 로드**된다. 탐색·실험(tinkering)에 매우 편리.

### 다양한 작업 예시 (모두 같은 방식으로 호출)
- **요약(summarization)**: `pipeline("summarization")("summarize: ...")` — 긴 텍스트를 짧게 요약.
- **감성 분석(sentiment-analysis)**: 긍정/부정 판별.
- **질의응답(question-answering)**: 문맥을 주고 질문하면 답을 생성 (다만 항상 정확하지는 않음 — 예시에서 다소 부정확한 답이 나옴).
- **번역(translation)**: 영어→프랑스어 등.

### 특정 모델 지정 — GPT-2로 텍스트 생성
- `pipeline("text-generation", model="gpt2")`처럼 **모델 이름을 명시적으로 지정**할 수도 있다.
- 처음 실행 시 모델을 다운로드하므로 시간이 걸리고(예시에서는 38초), `max_length` 같은 파라미터로 생성 길이를 제어한다.

## 예시
```python
from transformers import pipeline

summarizer = pipeline("summarization")
summarizer("summarize: Machine learning is a key ...")

classifier = pipeline("sentiment-analysis")
classifier("Automation takes hard work that allows you to have solid deployment.")

translator = pipeline("translation_en_to_fr")
translator("Hello, how are you?")

generator = pipeline("text-generation", model="gpt2")
generator("Some phrase was thought to be", max_length=100)
```

## 요약
- `transformers`의 `pipeline` 헬퍼는 작업 이름(요약/감성분석/질의응답/번역/텍스트생성 등)만 지정하면 모델을 동적으로 다운로드해서 바로 쓸 수 있게 해준다.
- 로컬에 모델 파일을 미리 준비할 필요가 없어 탐색·프로토타이핑에 매우 유용하며, 특정 모델(GPT-2 등)을 명시적으로 지정할 수도 있다.
