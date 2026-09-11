# Containerizing Hugging Face

## 개요
- 앞서 만든 FastAPI + Hugging Face(GPT-2) 앱을 **단 13줄짜리 Dockerfile**로 컨테이너화하는 3분 영상. Python 버전 선택 이유와 실무적 의존성 관리 노하우를 함께 다룬다.

## 내용

### Dockerfile 구조 (13줄)
```dockerfile
FROM python:3.8
WORKDIR /webapp
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
ENTRYPOINT ["uvicorn"]
CMD ["main:app", "--host", "0.0.0.0"]
```
- **베이스 이미지: Python 3.8** — 왜 하필 3.8인가? **TensorFlow가 다른 Python 버전과 호환 문제**를 일으키는 경우가 있어서, "지금 시점에 확실히 동작하는 버전"으로 3.8을 선택했다고 설명 — 이런 **버전 호환성 판단이 데이터/MLOps/ML 엔지니어가 실무에서 반드시 거쳐야 하는 과정**이라고 강조.
- **작업 디렉터리**: `/webapp`으로 설정 후 의존성 설치.
- **파일 복사**: 로컬 웹 애플리케이션 전체를 컨테이너의 `/webapp`으로 복사.
- **엔트리포인트(모범 사례)**: 실행 파일로 **`uvicorn`**(FastAPI를 서빙하는 Python 서버) 지정 → 컨테이너 시작 시 `--host 0.0.0.0`(모든 주소에 바인딩)과 `main:app`(모듈:앱 객체)으로 서빙.

### `requirements.txt`의 실무적 의미
- TensorFlow 호환성 문제로 인해 **Python 3.8을 정확히 지정**해야 하는 이유를 재확인 — "무엇이 동작하는지 아는 것"이 엔지니어의 핵심 역량이라는 메시지.

## 예시
```dockerfile
FROM python:3.8
WORKDIR /webapp
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
ENTRYPOINT ["uvicorn"]
CMD ["main:app", "--host", "0.0.0.0"]
```

## 요약
- Hugging Face + FastAPI 앱의 컨테이너화는 "Python 버전 고정(TensorFlow 호환성 때문에 3.8) → 의존성 설치 → 코드 복사 → uvicorn 엔트리포인트"라는 단 13줄의 Dockerfile로 충분하며, 여기서 가장 중요한 실무 판단은 **어떤 Python 버전이 실제로 문제없이 동작하는지 확인하는 것**이다.
