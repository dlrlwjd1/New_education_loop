# Setting up Environment & LLM Keys

## 개요
- Google Colab에서 Gemini API 키와 Google ADK 실습 환경을 준비한다.

## 내용
### Colab 설정
Colab Secrets에 Gemini API 키를 저장하고 코드에서 환경 변수로 불러온다. 키는 노트북 셀에 직접 기록하지 않는다. `google-adk`를 설치하고 버전을 확인하며, Colab에서 ADK Web에 접근하기 위한 Cloudflare Tunnel도 설정한다.

로컬 VS Code 환경에서는 `.env`로 키를 관리하며 Colab용 터널 설정은 필요하지 않다.

## 예시
```text
Google AI Studio에서 키 생성
→ Colab Secrets에 GEMINI 키 저장
→ 노트북 접근 권한 활성화
→ 코드에서 환경 변수로 로드
```

## 요약
- API 키는 Secrets 또는 `.env`로 관리한다.
- 실습과 동일한 ADK 버전을 확인한다.
