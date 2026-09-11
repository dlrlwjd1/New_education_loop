# Running FastAPI with Hugging Face

## 개요
- FastAPI + Hugging Face 앱을 **① 로컬에서 먼저 검증 → ② Docker로 빌드 → ③ 컨테이너로 실행**하는 순서로 직접 실행해보는 7분 실습. "컨테이너화 전에 로컬에서 먼저 검증하라"는 원칙을 강조한다.

## 내용

### 1단계 — 로컬에서 먼저 실행해 검증
- **"컨테이너화하기 전에 로컬에서 먼저 동작을 확인해야 한다"** — 그렇지 않으면 컨테이너화 이후 문제가 생겨도 원인을 특정하기 어려움.
- `python3.8 -m venv venv` → `source venv/bin/activate` → `pip install -r requirements.txt`.
- `which uvicorn`으로 정상 설치 확인.
- `web` 디렉터리로 이동 후:
  ```bash
  uvicorn --host 0.0.0.0 main:app
  ```
  - `0.0.0.0`은 모든 주소에 바인딩, `main:app`은 `main.py` 모듈의 `app` 객체.
- 기본 포트 **8000**에서 실행 확인 → 이 시점에 Hugging Face가 GPT-2 모델을 다운로드.
- **`/docs`**(Swagger/OpenAPI UI)로 접속해 텍스트 생성 엔드포인트를 "Try it out"으로 직접 테스트 → 응답 확인(모델이 뭔가 코드스러운 문자열을 생성).

### 2단계 — Docker로 이미지 빌드
```bash
docker build -t huggingface:local .
```
- Dockerfile이 있는 경로에서 실행, 태그(`huggingface:local`)를 지정, `.`으로 빌드 컨텍스트(현재 디렉터리) 지정.
- 이전에 한 번 빌드해둔 덕분에 **레이어 캐시**로 빌드가 매우 빠르게 완료.

### 3단계 — 컨테이너 실행 및 검증
```bash
docker run -it -p 8000:8000 huggingface:local
```
- 처음 접속 시 **"Bad Gateway"** 에러 발생 — 원인은 **컨테이너 안에서는 모델을 다시 다운로드해야 하기 때문**(로컬 실행 때 캐시된 모델과 별개로, 컨테이너는 격리된 환경이라 처음부터 다시 받아야 함).
- 잠시 기다린 후 새로고침 → 로그에 **200 응답**이 찍히며 정상 동작 확인.
- `/docs`에서 다시 Swagger UI로 테스트: "What's the definition of MLOps?"라는 프롬프트를 넣어 GPT-2가 생성한 텍스트("MLOps는 마이크로서비스 파일들을 관리하는 단순하고 유연하며 이식 가능한 도구를 구현하는 것") 확인 — **"내가 원하던 답은 아니지만, 로컬과 컨테이너 양쪽에서 모두 정상 동작하는 것을 검증했다"**는 것이 핵심.

## 예시
```bash
# 1. 로컬 검증
python3.8 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn --host 0.0.0.0 main:app   # http://localhost:8000/docs

# 2. Docker 빌드
docker build -t huggingface:local .

# 3. 컨테이너 실행
docker run -it -p 8000:8000 huggingface:local
```

## 요약
- FastAPI + Hugging Face 앱은 **로컬에서 먼저 검증(문제 발생 시 컨테이너와 무관함을 확인) → Docker 빌드 → 컨테이너 실행**이라는 순서로 다뤄야 하며, 컨테이너는 격리된 환경이라 로컬에서 이미 캐시된 모델도 **처음엔 다시 다운로드**해야 한다는 점이 실전에서 마주치는 함정이다.
- Swagger UI(`/docs`)는 로컬이든 컨테이너든 동일하게 API를 대화식으로 테스트할 수 있는 유용한 도구다.
