# Introduction to the FastAPI Framework

## 개요
- **FastAPI**를 Flask와 비교하며 소개한다. `pydantic.BaseModel`로 요청 스키마를 정의하는 법, `uvicorn`으로 실행하는 법, 그리고 FastAPI의 대표적인 장점인 **`/docs`에서 자동 생성되는 인터랙티브 API 문서**를 다룬다.

## 내용

### FastAPI vs. Flask
- FastAPI는 Flask와 상당히 유사하지만(둘 다 `@app.get`/`@app.post` 같은 데코레이터로 라우트 노출), **미묘한 차이**들이 있어 상황에 따라 어느 프레임워크가 더 적합한지가 갈린다. 강사는 개인적으로 FastAPI를 선호한다고 언급.

### 실행 도구 — Uvicorn
- FastAPI 앱은 **Uvicorn**이라는 ASGI 서버로 실행한다: `uvicorn main:app --host 0.0.0.0 --port 8000`.
- `main`은 Python 모듈(`main.py`), `app`은 그 안에서 생성한 FastAPI 인스턴스.

### 요청 스키마 정의 — `pydantic.BaseModel`
- FastAPI에서는 `BaseModel`을 상속받아 **요청 본문(body)의 스키마를 명시적으로 정의**한다.
- 예: `class Body(BaseModel): strftime: str`처럼 필드 이름과 타입을 선언하면, 요청이 올 때 FastAPI가 자동으로 그 타입에 맞는지 검증한다.
- 함수 인자로 이 `Body` 타입을 받으면, FastAPI가 알아서 요청 본문을 해당 객체로 변환해 전달한다.

### 정적 파일 서빙
- `FileResponse`로 `index.html` 같은 정적 파일을 응답으로 반환할 수도 있다.

### 자동 생성 API 문서 — `/docs`
- FastAPI의 핵심 장점: **`/docs` 경로에 인터랙티브 API 문서가 자동으로 생성된다** — 코드 어디에도 `/docs`를 명시적으로 정의하지 않았는데도 자동으로 만들어짐.
- `/docs`에서 각 엔드포인트를 클릭해 "Try it out"으로 직접 값을 입력하고 실행해볼 수 있으며, 실행 결과로 **실제 curl 명령어, 요청 URL, 응답 본문, 응답 헤더**까지 모두 확인 가능.

## 예시
```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Body(BaseModel):
    strftime: str

@app.get("/")
def root():
    return {"message": "hello"}

@app.post("/generate")
def generate(body: Body):
    from datetime import datetime
    return {"result": datetime.now().strftime(body.strftime)}
```
```bash
uvicorn main:app --host 0.0.0.0 --port 8000
# 브라우저에서 http://localhost:8000/docs 접속 → 자동 생성된 문서에서 바로 테스트
```

## 요약
- FastAPI는 Flask와 유사하지만 `pydantic.BaseModel`로 요청 스키마를 명시적으로 정의하고, Uvicorn으로 실행한다.
- 가장 큰 장점은 별도 설정 없이 `/docs`에 자동 생성되는 인터랙티브 API 문서 — curl 명령, 요청/응답을 즉시 확인·테스트할 수 있다.
