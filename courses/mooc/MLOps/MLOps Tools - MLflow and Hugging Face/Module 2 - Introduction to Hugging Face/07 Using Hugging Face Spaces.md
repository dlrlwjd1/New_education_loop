# Using Hugging Face Spaces

## 개요
- **Gradio 기반 텍스트 요약(summarization) 데모**를 Hugging Face Space로 처음부터 만들고, 의존성 누락으로 인한 런타임 에러를 실제로 겪고 고치는 과정까지 보여주는 12분 실습.

## 내용

### Space 생성
- "New" → Space 생성 시 필요한 설정: 이름(`space-demo`), 라이선스(MIT), **SDK**(Streamlit/**Gradio**/Static 중 선택), 공개/비공개 여부(Public 선택).
- 생성 직후 Space도 **GitHub(Git) 리포지토리**이며, 필수 진입점은 **`app.py`** — 기본 예제는 `import gradio as gr`로 인터페이스를 만들고 실행(launch)하는 최소 코드.

### `app.py` 작성 — Gradio 요약 앱
- `transformers`의 `pipeline`으로 요약기(summarizer) 구성. 하나의 `translate`(실제로는 요약) 함수가 텍스트를 입력받아 따옴표/앰퍼샌드 정리(선택적 전처리) 후 `min_length=180`으로 요약 결과 반환.
- Gradio 인터페이스 구성:
  ```python
  import gradio as gr
  gr.Interface(
      fn=summarize,
      inputs=gr.Textbox(lines=10, placeholder="Enter some text to summarize"),
      outputs="text",
  ).launch()
  ```
  - `inputs`로 텍스트박스(줄 수, 플레이스홀더 지정), `outputs`로 텍스트 출력 지정 — 이미지 출력 등 다른 출력 타입도 가능.

### 함정 — `requirements.txt` 누락으로 인한 런타임 에러
- 웹 UI에서 파일 생성 후 "Commit directly" → Space가 **"Building"** 상태로 전환 → **View Logs**로 Docker 빌드 로그 확인(Python 3.8 환경에서 `requirements.txt` 복사 시도) → **`requirements.txt` 파일 자체가 없어서 빌드 실패**.
- 원인: `app.py`에서 `transformers`, `tensorflow`를 임포트하지만 이를 설치하도록 지시하는 `requirements.txt`가 없었음.
- 로그에서 확인되는 구체적 에러: **"ModuleNotFoundError: No module named 'transformers'"** → **"Runtime error"**(빨간 버튼)로 표시됨 — 의존성 문제가 생기면 이런 식으로 드러난다는 것을 실전으로 확인.

### 해결 — `requirements.txt` 추가
```text
transformers==4.21.2
tensorflow==2.9.1
```
- 파일 생성·커밋 → 다시 빌드 트리거 → 로그에서 모델이 동적으로 다운로드되고 컨테이너가 정상적으로 애플리케이션을 로드하는 과정을 확인 → **"Running"** 상태로 전환.

### 실제 데모 테스트
- 완성된 Space에 접속 → 텍스트박스에 "MLOps" 위키피디아 정의 문단을 붙여넣고 **Submit** → 요약 결과를 기다림(약 70~90초 소요).
- **컴퓨트 사양에 따른 처리 속도 차이**: 기본 CPU(2 vCPU, 16GB RAM)는 T5 모델 요약에는 느린 편 — Space 설정에서 **T4 small(시간당 약 $0.5)** 같은 GPU 옵션을 사용하면 훨씬 빠르다고 언급. Public Space는 트래픽이 몰릴 수 있다는 점도 유의.
- 결과: 다소 거친(garbage) 부분도 있지만 전반적으로 "꽤 괜찮은 요약"이라고 평가.

## 예시
```python
# app.py — Gradio 요약 데모
from transformers import pipeline

summarizer = pipeline("summarization")

def summarize(text):
    text = text.replace('"', "").replace("&", "and")
    result = summarizer(text, min_length=180)
    return result[0]["summary_text"]

import gradio as gr
gr.Interface(
    fn=summarize,
    inputs=gr.Textbox(lines=10, placeholder="Enter some text to summarize"),
    outputs="text",
).launch()
```

```text
# requirements.txt
transformers==4.21.2
tensorflow==2.9.1
```

## 요약
- Hugging Face Space는 `app.py`(Gradio 인터페이스) + `requirements.txt`(의존성)만 갖추면 자동으로 Docker 빌드·배포되는 인터랙티브 ML 데모 환경이며, **의존성 누락은 조용히 실패하지 않고 명확한 "Runtime error"와 로그로 드러난다**는 것을 실전으로 확인했다.
- Space의 컴퓨트 사양(CPU basic vs T4 GPU 등)에 따라 응답 속도가 크게 달라지므로, 실제 모델 크기와 응답 시간 요구사항에 맞는 하드웨어를 선택하는 것이 실무적으로 중요하다.
