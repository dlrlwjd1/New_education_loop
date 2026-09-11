# Triggering Azure ML with GitHub

## 개요
- GitHub Actions를 "워커 팜(worker farm)"으로 활용해 Azure ML Studio 작업을 트리거하는 2단계 통합(Secrets 설정 → YAML 워크플로 설정)을 설명하는 2분 데모.

## 내용

### GitHub를 Azure ML의 워커로 활용하기
- GitHub와 Azure ML Studio는 서로 긴밀하게 통합되어 있어, GitHub를 일반적인 작업 실행기(worker farm)로 활용해 Azure ML Studio에 배포되는 액션을 만들 수 있음.
- 흐름: Azure ML Studio를 통해 자격 증명(credentials) 생성 → GitHub Actions 생태계의 **Secrets**로 연결 → GitHub Actions YAML 형식으로 작업(job) 구성.

### 1단계 — GitHub Secrets 설정
- 리포지토리의 **Settings → Secrets → Actions**로 이동해 새 리포지토리 시크릿 생성 — 예: Azure 자격 증명을 여기 저장.
- 이후 Actions 워크플로 파일에서 이 시크릿을 참조 가능.

### 2단계 — GitHub Actions YAML 워크플로
- **Actions** 탭에서 새 워크플로를 손쉽게 생성 — YAML 기반 워크플로를 작성해 커밋.
- YAML 파일에서 배포하고자 하는 파이프라인을 참조, 스케줄(schedule) 생성, 어떤 경로(path)에서 작업이 트리거될지 결정, 그리고 실제로 수행할 작업 정의.
- 설정한 자격 증명을 사용해 설정(setup) 작업을 수행하고, 해당 파이프라인을 실행하는 방식으로 구성.

### 핵심 통찰
- 이 방식은 GitHub를 원하는 모든 작업을 수행하는 워커로 사용하는 매우 강력한 설정이며, GitHub와 Azure ML Studio 사이의 긴밀한 통합을 잘 보여줌.

## 예시
```yaml
# .github/workflows/azure-ml-trigger.yml (개념 구조)
name: Trigger Azure ML Pipeline
on:
  push:
    paths:
      - 'src/**'
  schedule:
    - cron: '0 0 * * *'

jobs:
  run-pipeline:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Azure Login
        uses: azure/login@v1
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}
      - name: Run Azure ML Pipeline
        run: az ml job create --file pipeline.yml
```

## 요약
- Azure 자격 증명을 GitHub Secrets에 저장하고 GitHub Actions YAML 워크플로에서 이를 참조해 Azure ML 파이프라인을 실행하도록 구성하면, 코드 푸시나 스케줄에 따라 Azure ML 작업을 자동으로 트리거하는 CI/CD 통합을 완성할 수 있다.
