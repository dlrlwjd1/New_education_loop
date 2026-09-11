# Hugging Face and FastAPI

## 개요
- **단 하나의 파일(`main.py`)**로 GPT-2 텍스트 생성 모델을 FastAPI 웹 API로 노출하는 최소 예제 코드를 처음부터 끝까지 훑어보는 4분 영상.

## 내용

### 코드 구조 (`main.py` 한 파일)
1. **임포트**:
   - `transformers`의 **`pipeline`** — 다양한 모델을 다루는 복잡성을 추상화해주는 인터페이스.
   - `fastapi`의 **`FastAPI`**(애플리케이션 생성), **`HTMLResponse`**(HTML 응답용).
   - **Pydantic `BaseModel`** — 요청 스키마 타입 정의용.
2. **모델 초기화**: `pipeline("text-generation", model="gpt2")`로 **GPT-2를 동적으로 다운로드**하며 텍스트 생성 파이프라인 준비.
3. **FastAPI 앱 생성**: Flask에 익숙하다면 친숙한 구조 — 요청 바디의 스키마를 정의하는 클래스(`BaseModel` 상속, `text: str` 필드 하나).
4. **루트 엔드포인트(`/`)**: 매우 단순한 HTML 폼을 `HTMLResponse`로 반환(예제를 단순하게 유지하기 위한 최소 구현).
5. **`/generate` 엔드포인트**: 요청을 받아 `generator(text)`를 호출 → 결과 리스트의 **첫 번째 항목(`[0]`)**을 반환.

### 의존성 (`requirements.txt`)
- **`transformers`** + **`tensorflow`**(또는 PyTorch — transformers가 둘 중 하나를 필요로 함).
- **`fastapi`**(특정 버전 고정).
- **`uvicorn`** — FastAPI가 권장하는 ASGI 서버, 실행에 사용.

## 예시
```python
# main.py
from transformers import pipeline
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from pydantic import BaseModel

generator = pipeline("text-generation", model="gpt2")
app = FastAPI()

class TextRequest(BaseModel):
    text: str

@app.get("/", response_class=HTMLResponse)
def root():
    return "<form><input name='text'></form>"

@app.post("/generate")
def generate(request: TextRequest):
    result = generator(request.text)
    return result[0]
```

```text
# requirements.txt
transformers
tensorflow
fastapi==...
uvicorn
```

## 요약
- Hugging Face의 `pipeline` 추상화 덕분에, GPT-2 같은 모델을 FastAPI 엔드포인트로 노출하는 데는 단 몇 줄의 코드(임포트 → 파이프라인 생성 → 요청 스키마 정의 → 엔드포인트 하나)면 충분하다는 것이 이 최소 예제의 핵심 메시지.
