# Using the Hugging Face CLI

## 개요
- **Hugging Face CLI**의 핵심 서브커맨드(login, whoami, logout, repo, scan-cache)를 짧게 훑어보는 2분 영상.

## 내용

### 인증 관련 명령
- `huggingface-cli` 실행만으로 도움말 메뉴 확인 가능.
- **`huggingface-cli login`** — Hugging Face 설정의 **Tokens** 디렉터리에서 발급받은 토큰으로 인증.
- **`huggingface-cli whoami`** — 로그인 상태에서 자신이 누구인지, 어떤 조직에 속해 있는지 확인(강사 예시: "Noah Gift, Duke 조직 2개 소속"으로 표시됨).
- **`huggingface-cli logout`** — 로그아웃.

### 리포지토리 및 캐시 관련 명령
- **`huggingface-cli repo`** — 리포지토리 관련 명령(대용량 파일과 멀티파트 업로드 통합 포함).
- **`huggingface-cli scan-cache`** — 강사가 "자주 사용한다"고 언급한 명령. **로컬 머신에 실제로 무엇이 캐시되어 있는지** 보여줘서, 디스크 공간을 확보해야 할지 등을 판단하는 데 매우 유용.

## 예시
```bash
huggingface-cli login       # 토큰으로 인증
huggingface-cli whoami      # 로그인 상태 및 소속 조직 확인
huggingface-cli logout      # 로그아웃
huggingface-cli scan-cache  # 로컬에 캐시된 모델/데이터셋 용량 확인
```

## 요약
- Hugging Face CLI는 `login`/`whoami`/`logout`으로 인증 상태를 관리하고, `repo`로 리포지토리를 다루며, **`scan-cache`로 로컬 디스크에 쌓인 캐시를 점검**할 수 있는 실용적인 도구다. 사용을 시작하려면 먼저 토큰을 발급받아 인증해야 한다.
