# Setting Up Project Structure & LLM + Source Code

## 개요
- Python 가상환경, 의존성, Gemini API 키를 준비한다.

## 내용
### 프로젝트 설정
`venv`를 만들고 `uv`로 `requirements.txt`의 의존성을 설치한다. Gemini API 키는 `.env`에 저장하며 저장소에 커밋하지 않는다.

## 예시
```bash
python -m venv venv
source venv/bin/activate
pip install uv
uv pip install -r requirements.txt
```

```text
GOOGLE_API_KEY=<your-key>
```

## 요약
- 가상환경과 고정된 의존성으로 재현 가능한 환경을 만든다.
- 비밀 키는 소스 코드에서 분리한다.
