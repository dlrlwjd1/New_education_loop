# Deploying Hugging Face Spaces

## 개요
- GitHub와 Hugging Face Spaces를 연동해 **머신러닝 애플리케이션의 지속적 배포(Continuous Delivery)**를 구현하는 라이프사이클을 설명하는 3분 실습.

## 내용

### CD 라이프사이클 개요
- Hugging Face에서 **토큰(token)**을 발급받아, 이를 **GitHub Codespaces 환경**과 **GitHub Actions 환경** 양쪽에 등록.
- 이 토큰이 있으면 모델을 Hugging Face로 다시 push하거나, Spaces 애플리케이션과 상호작용하는 등 어떤 작업이든 가능.
- 예시 흐름: 텍스트 요약(text summarization) Gradio 애플리케이션을 먼저 로컬에서 테스트 → 이후 변경 사항을 자동으로 Spaces에 push → 이것이 곧 머신러닝 애플리케이션의 지속적 배포.

### GitHub Actions 워크플로 설정
- GitHub 리포지토리에 `main.yml` 워크플로 파일 생성 — 이름을 "sync to hugging face"로 지정.
- `main` 브랜치에서 **Ubuntu latest**로 실행, Hugging Face에서 발급받은 시크릿(secret)을 설정.
- Space가 위치한 경로(예: `noahgift-demo`)를 지정하고, 리포지토리에 변경이 생길 때마다 자동으로 push.
- 테스트 등 다른 단계(steps)도 워크플로에 추가 가능.

### Codespaces에서 로컬 검증
- 실제 애플리케이션은 단순한 요약(summarization) 파이프라인 기반의 간단한 구조.
- 여러 개의 GitHub Codespaces 인스턴스 중 하나로 전환해 로컬로 애플리케이션 실행 → Gradio 인터페이스가 실행됨.
- 파이썬 언어에 관한 텍스트를 붙여넣어 요약 테스트 → 정상적으로 요약 결과 확인.
- 이 로컬 환경은 **프로토타이핑**뿐 아니라, 이후 **CD 프로세스 검증**에도 그대로 활용됨 — 만약 동기화(synchronization)가 실패한다면, 링크 문제나 테스트 문제를 로컬에서 먼저 점검.

### 핵심 통찰
- GitHub과 Hugging Face Spaces를 결합한 CD의 진짜 강점은, **로컬 Codespaces 환경에서 빠르게 프로토타이핑하고 검증한 뒤, 동일한 파이프라인으로 자동 배포**까지 이어진다는 점.

## 예시
```yaml
# .github/workflows/main.yml (개념 구조)
name: sync to hugging face
on:
  push:
    branches: [main]
jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Push to Hugging Face Spaces
        env:
          HF_TOKEN: ${{ secrets.HF_TOKEN }}
        run: |
          git remote add space https://user:$HF_TOKEN@huggingface.co/spaces/noahgift-demo
          git push space main
```

## 요약
- Hugging Face 토큰을 GitHub Codespaces·Actions 양쪽에 등록하고, `main.yml` 워크플로로 push 시마다 Spaces에 자동 동기화하는 것이 이 CD 파이프라인의 핵심이다.
- Codespaces에서 애플리케이션을 로컬로 실행·검증하는 과정은 프로토타이핑과 CD 실패 시 디버깅 모두에 활용된다.
