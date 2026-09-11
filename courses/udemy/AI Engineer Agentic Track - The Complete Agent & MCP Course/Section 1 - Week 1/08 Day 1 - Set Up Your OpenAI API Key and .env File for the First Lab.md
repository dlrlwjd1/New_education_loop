# Day 1 - Set Up Your OpenAI API Key and .env File for the First Lab

## 개요
- API 키를 .env에 저장하고 첫 Jupyter 실습의 커널과 환경 변수 로딩을 확인한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49770893#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### API 이용 준비
강의는 ChatGPT 사용자용 서비스와 개발자가 코드에서 호출하는 API를 구분한다. OpenAI 플랫폼에서 API 사용 준비와 키 생성을 시연하고, 다른 제공자를 사용할 때는 저장소 `guides`의 9번 가이드를 안내한다. 가입·권한·결제 화면은 영상 촬영 시점의 예시다.

### .env를 정확히 생성하고 저장
프로젝트 루트에 `.env`를 만든다. `.env.txt`처럼 확장자를 덧붙이지 않는다. `OPENAI_API_KEY`에 복사한 키를 넣고 저장한다. 자동 번역의 `.emv`는 잘못된 표기다. Cursor가 이 파일을 AI 처리 대상에서 제외하는 표시와 편집 내용을 아직 저장하지 않았다는 점 표시는 서로 다르다.

Google을 사용하는 실습에서는 라이브러리마다 찾는 이름이 달라 `GOOGLE_API_KEY`와 `GEMINI_API_KEY`에 같은 값을 두는 경우도 설명한다. 실제 키를 설명 요청이나 노트에 복사하지 않는다.

### 노트북 커널과 셀 실행 순서
`1_foundations`의 첫 실습 노트북을 열고 Python·Jupyter 확장을 확인한다. Select Kernel에서 uv로 만든 프로젝트 `.venv`를 선택한다. 셀은 화면상 위치가 아니라 **실행한 순서**에 따라 상태가 만들어지므로 위에서부터 Shift+Enter로 실행한다.

### 오류 점검
`load_dotenv()`가 파일을 찾는지, 필요한 키가 설정됐는지 확인한 뒤 OpenAI 클라이언트를 준비한다. ImportError라면 커널·설치 환경, NameError라면 선행 셀 실행, 환경 변수 로딩 실패라면 파일명·위치·저장 여부를 확인한다.

## 예시
강의의 환경 확인 절차를 짧게 옮긴 코드다. 프로젝트 환경에서 실행한다.

```python
import os
from dotenv import load_dotenv

load_dotenv()
print("API 키 설정 여부:", bool(os.getenv("OPENAI_API_KEY")))
```

키 값 전체를 출력하지 않고 설정 여부만 확인한다.

## 요약
- `.env`와 환경 변수 이름은 정확해야 한다.
- 노트북은 uv가 생성한 `.venv` 커널을 사용한다.
- 셀 실행 순서와 파일 저장 여부를 먼저 확인한다.
