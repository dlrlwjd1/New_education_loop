# Practical Scenario — GPU Codespaces and CLI Login

## 개요
- AI가 생성한 실전 시나리오형 성찰 활동(real-world application, ungraded). GPU 지원 Codespaces에서 새 ML 프로젝트를 시작하고 Hugging Face CLI로 로그인·신원 확인까지 하는 단계를 정리하는 연습.

## 내용

### 시나리오
- 새 ML 프로젝트를 시작하며 GitHub Codespaces의 사전 빌드 컨테이너로 빠르게 착수하고, Hugging Face CLI로 로그인해 신원을 확인하고 싶은 상황.
- **질문**: 이를 달성하기 위한 단계를 설명하고, 첫 번째로 할 일은 무엇인가?

### 정리 (이번 레슨에서 다룬 순서)
1. **첫 단계**: `.devcontainer`가 구성된 템플릿 리포지토리(예: `mlops-template`)에서 "Use this template"로 새 리포지토리를 만들거나, 기존 리포지토리에서 "Code → Create codespace on main"으로 Codespace 실행.
2. Codespace 생성 시 **머신 타입을 GPU 포함 옵션**(예: 6코어+GPU 1개+RAM 112GB)으로 선택.
3. Codespace가 시작되면 `.devcontainer`의 Dockerfile/Makefile에 정의된 패키지(CUDA 드라이버 포함)가 자동으로 설치됨.
4. **`huggingface-cli login`**으로 Hugging Face 계정 토큰을 입력해 인증.
5. **`huggingface-cli whoami`**로 로그인이 제대로 되었는지, 어떤 조직에 속해 있는지 확인.

## 요약
- "GPU 옵션으로 Codespace 생성 → 사전 구성된 환경 자동 설치 → `huggingface-cli login` → `whoami`로 확인"이라는, 이번 레슨에서 실제로 다룬 흐름을 그대로 정리하는 성찰 활동이다.
