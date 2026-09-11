# Hugging Face Spaces Walkthrough

## 개요
- Gradio 공식 예제(**핫도그 분류기, 텍스트 생성, 데이터셋 인터페이스**)를 **GitHub Codespaces에서 로컬로 직접 실행**하며 빠른 피드백 루프로 프로토타이핑하는 6분 실습.

## 내용

### Spaces 문서와 GPU 업그레이드
- Hugging Face Spaces 공식 문서에서 데모·의존성 예제를 확인 가능. **GPU 업그레이드** 옵션도 있어 사이드 프로젝트에서도 필요시 GPU를 요청 가능, PyTorch·JAX 등 추가 패키지 설치도 가능.
- **Gradio Spaces 문서**에는 자신만의 애플리케이션을 빠르게 만드는 법이 잘 정리되어 있음.

### 예제 1 — 핫도그 분류기(Hot Dog Classifier)
- 공식 문서의 예제 코드를 그대로 복사해 **Spaces 웹 인터페이스가 아니라 GitHub Codespaces**에서 로컬로 실행(더 빠른 피드백 루프를 위해).
- 코드 구조: `import gradio as gr` + `transformers`의 "핫도그인지 아닌지 판별하는" 파이프라인 → 이미지를 업로드받는 인터페이스.
- `python hotdog.py`로 실행(GPU 인터페이스 활용) → 실제 핫도그 이미지를 드래그해 제출 → **"Yep, hot dog"**로 정확히 분류됨을 확인.
- 다른 사람의 Space 인터페이스에서 직접 플레이하거나, 로컬에서 실행하며 반복 개선(iterate)하는 두 가지 방식 모두 가능.

### 예제 2 — 텍스트 생성 데모
- 코드 구조: `pipeline`으로 **GPT-2** 텍스트 생성 모델 정의 → `predict` 함수 → Gradio 인터페이스 구성.
- `python textgen.py` 실행 → "the fastest man in the world" 프롬프트 입력 → GPT-2가 생성한 (다소 엉뚱한) 텍스트 확인 — "챗봇류 인터페이스의 프로토타입으로 매우 빠르게 만들 수 있다"고 평가.

### 예제 3 — 데이터셋용 인터페이스 (모델이 아니어도 됨)
- Gradio는 모델뿐 아니라 **데이터셋 속성을 다루는 인터페이스**도 만들 수 있음 — 예: "Super Soaker 불량품 예측"을 위한 tabular 데이터셋 인터페이스에 제목·설명 데이터를 입력해 새 행(row)을 만들어보는 예제.
- `python dataset_gradio.py`로 실행해 실제로 데이터를 입력·제출해보는 과정 시연.

### 핵심 통찰
- Gradio + Hugging Face Spaces의 진짜 장점은 **모델 속성뿐 아니라 데이터셋 속성까지 빠르게 프로토타이핑**할 수 있다는 것 — 로컬(Codespaces)에서 실행하면 반복 개선 속도가 훨씬 빨라짐.

## 예시
```python
# hotdog.py (개념 구조)
import gradio as gr
from transformers import pipeline

classifier = pipeline("image-classification", model="julien-c/hotdog-not-hotdog")

def predict(image):
    return classifier(image)

gr.Interface(fn=predict, inputs="image", outputs="label").launch()
```

```python
# textgen.py (개념 구조)
import gradio as gr
from transformers import pipeline

generator = pipeline("text-generation", model="gpt2")

def predict(prompt):
    return generator(prompt)[0]["generated_text"]

gr.Interface(fn=predict, inputs="text", outputs="text").launch()
```

## 요약
- Gradio 공식 예제(이미지 분류, 텍스트 생성, 데이터셋 인터페이스)를 GitHub Codespaces에서 로컬로 실행하면, Spaces 웹 인터페이스보다 훨씬 빠른 피드백 루프로 모델과 데이터셋 양쪽 모두를 반복적으로 프로토타이핑할 수 있다는 것이 이 실습의 핵심 메시지다.
