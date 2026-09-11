# Day 5 - Deploy Your Digital Twin AI Agent to Hugging Face Spaces

## 개요
- Gradio 디지털 트윈을 Hugging Face Spaces에 배포하고 비밀값과 동작을 확인한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49771337#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 배포 준비
로컬 서버를 종료하고 Lab 4의 배포 안내를 따른다. Hugging Face 계정과 쓰기 권한이 있는 토큰으로 CLI에 로그인한 뒤 `uvx hf auth whoami`로 계정을 확인한다. 영상은 무료 CPU 공간을 사용하며 비활성 시 잠드는 동작도 설명한다. 제공 조건은 촬영 시점 기준이다.

### Gradio 배포
`twin` 폴더에서 `uv run gradio deploy`를 실행한다. 앱 이름, 진입 모듈 `app.py`, CPU basic을 지정하고 비밀값은 나중에 웹 설정에서 추가한다. 자동 배포용 GitHub Action은 이 시연에서 만들지 않는다.

### Secrets 설정
첫 빌드는 키가 없어 실패한다. Space Settings의 Variables and secrets에서 **New secret**으로 `OPENAI_API_KEY`, `PUSHOVER_USER`, `PUSHOVER_TOKEN`을 추가하고 재시작한다. 로컬 `.env`를 공개 저장소에 업로드하지 않는다. 일반 변수와 비밀값을 구분한다.

### 배포 후 검증과 개선
공개 앱에서 질문을 보내 응답과 Pushover 알림을 확인한다. Embed this Space 안내로 기존 사이트에 삽입할 수 있고 Files에서 업로드 파일을 확인한다. 변경 후에는 같은 배포 명령을 다시 실행한다. 확장 과제는 미응답 질문에 따른 프로필 보완, 도구 추가, 출력 평가 가드레일, 검색 기능이다. 사용량 관리와 호출 제한도 검토하라고 안내한다.

## 예시
수업 앱의 `twin` 폴더에서 사용하는 배포·확인 명령이다.

```bash
uvx hf auth whoami
uv run gradio deploy
```

배포 후 검사: 앱 응답 → 미응답 질문 알림 → 연락처 기록 알림.

## 요약
- 로컬에서 실행되는 앱과 배포 환경의 비밀값 설정은 별개다.
- Spaces에는 `.env` 대신 Secrets를 설정한다.
- 배포 성공 여부는 실제 응답과 알림으로 확인한다.
