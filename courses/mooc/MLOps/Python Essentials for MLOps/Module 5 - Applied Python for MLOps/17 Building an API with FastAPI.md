# Building an API with FastAPI

## 개요
- FastAPI로 **Hugging Face의 GPT-2 모델을 동적으로 로드해 텍스트를 생성하는 실전 API**를 만드는 실습. `pipeline`으로 모델을 로드하는 부분은 Module 5 앞부분(Hugging Face Transformers)과 동일하며, 여기서는 그것을 FastAPI 엔드포인트에 연결하는 데 집중한다.

## 내용

### 의존성 구성
- `transformers`, `tensorflow`, `fastapi`, `uvicorn`이 필요.
- ONNX(로컬 파일 필요)와 달리 **Hugging Face `pipeline`은 모델을 동적으로 로드**한다는 점이 이전 Flask 예제와의 차이.

### 엔드포인트 구성
- `pipeline("text-generation", model="gpt2")`로 생성기를 만든다.
- `Body(BaseModel)`로 입력 스키마를 정의: `text: str`.
- `/`(root)는 간단한 응답만 반환 (FastAPI는 기본적으로 HTML을 렌더링하지 않으므로, 명시적으로 지시해야 함) — 굳이 정의하지 않아도 되는 선택 사항.
- 실제 핵심은 `/generate` POST 엔드포인트 — `Body`를 받아 `predict()` 함수로 결과를 만들고 반환한다.

### 실행 시 흔한 실수 — 가상환경 미활성화
- `uvicorn`이 "not found"라고 나오면, **가상환경이 활성화되지 않았을 가능성이 크다** — 활성화 후 탭 완성(tab completion)이 되는지로 확인 가능.
- 실행 시 Hugging Face가 백그라운드에서 모델을 다운로드하므로 첫 실행은 시간이 걸릴 수 있다.

### `/docs`에서 실제 테스트
- `/docs`에서 "generate" 엔드포인트에 "Try it out"으로 프롬프트(예: "unlike other programming languages, Python is")를 입력하면, 모델이 이어지는 텍스트를 생성해 응답으로 보여준다.
- 응답에는 curl 명령, 요청 URL, 응답 헤더/본문, HTTP 상태 코드까지 함께 표시되어 **엔드포인트가 올바르게 동작했는지 바로 확인**할 수 있다.

## 예시
```python
from fastapi import FastAPI
from pydantic import BaseModel
from transformers import pipeline

app = FastAPI()
generator = pipeline("text-generation", model="gpt2")

class Body(BaseModel):
    text: str

@app.get("/")
def root():
    return {"message": "text generation API"}

@app.post("/generate")
def generate(body: Body):
    result = generator(body.text, max_length=50)
    return result
```
```bash
uvicorn main:app --host 0.0.0.0 --port 8000
# http://localhost:8000/docs 에서 "generate" 엔드포인트 테스트
```

## 요약
- FastAPI + Hugging Face `pipeline`을 결합하면, 모델을 로컬에 두지 않고도 동적으로 로드해 텍스트 생성 API를 만들 수 있다.
- `BaseModel`로 입력 스키마(`text: str`)를 정의하고, `/docs`에서 바로 실행해 요청/응답을 확인할 수 있다는 것이 FastAPI의 강점.
