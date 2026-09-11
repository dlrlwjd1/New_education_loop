# Get started with Antigravity

## 개요

- Antigravity를 설치하고 초기 설정을 마친다.
- Editor와 Agent Manager의 역할, 프롬프트 컨텍스트 추가 방법을 익힌다.

## 내용

### 설치 환경

- macOS: Apple Silicon 및 Intel, 보안 업데이트 지원 버전
- Windows: Windows 10 64-bit 이상, x64 또는 ARM64
- Linux: 배포판별 요구 사항 확인 (`glibc >= 2.28`, `glibcxx >= 3.4.25` 예시)

제품은 빠르게 바뀌므로 최신 지원 정보는 [Antigravity 다운로드 페이지](https://antigravity.google/download)에서 확인한다.

### 초기 설정

강의의 최종 빌드 가이드는 테마 선택 후 **Review-driven development**를 선택하고, 기본 키 바인딩과 언어 확장을 유지하며 `agy` 터미널 명령을 활성화하도록 안내한다. Google 계정으로 로그인한 뒤 서비스 약관을 확인한다.

### 두 가지 핵심 화면

- **Editor**: VS Code와 유사한 코드 편집 화면
- **Agent Manager**: 여러 에이전트의 작업을 시작하고 감독하는 지휘 화면

`agy-sandbox` 작업 폴더를 만든 뒤 Agent Manager에서 같은 워크스페이스를 선택한다. 단축키는 macOS에서 `Cmd + E`, Windows/Linux에서 `Ctrl + E`다.

### 컨텍스트 제공

에이전트가 사용할 파일은 프로젝트 폴더 안에 있어야 한다. `+` 버튼의 Media로 이미지나 구조도를, Mentions 또는 `@`로 문서와 요구사항 파일을 대화에 첨부할 수 있다.

## 예시

```text
스크린샷 → 원하는 시각 스타일 전달
아키텍처 이미지 → 구현할 구조 전달
요구사항 문서 → 기능 범위와 제약 전달
```

## 요약

- Editor는 코드를, Agent Manager는 에이전트 협업을 관리한다.
- 에이전트가 참조할 자료는 워크스페이스 안에 배치한다.
- 제품 UI와 지원 환경은 변경 가능하므로 최신 문서를 함께 확인한다.
