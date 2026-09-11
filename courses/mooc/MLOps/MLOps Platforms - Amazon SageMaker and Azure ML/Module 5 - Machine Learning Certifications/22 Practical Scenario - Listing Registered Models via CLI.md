# Practical Scenario — Listing Registered Models via CLI

## 개요
- Azure ML CLI 확장 지식을 적용해보는 5분짜리 AI 생성 인터랙티브 성찰 활동.

## 내용

### 시나리오
- Azure ML 워크스페이스에 등록된 모든 머신러닝 모델을 빠르게 확인해야 하는 데이터 과학자.
- 질문: Azure ML CLI로 등록된 모든 모델을 나열하려면 어떤 명령어를 사용하겠는가?

### 종합 답변 (강의 개념 기반)
- "Exploring Azure ML Command Line" 데모에서 다룬 대로, 등록된 모델을 나열하는 명령어는 다음과 같다:

```bash
az ml model list --output table
```

- `az ml model list`는 워크스페이스에 등록된 모델 목록을 조회하는 하위 명령이며, `--output table`을 추가하면 결과를 사람이 읽기 쉬운 테이블 형식으로 확인할 수 있다(JSON이나 YAML 형식도 선택 가능).
- 사용 전 도움말을 확인하고 싶다면 `az ml model list --help`로 사용 가능한 옵션(필터, 정렬 등)을 먼저 살펴볼 수 있다.
- 이 명령은 데모에서처럼 **Azure ML Studio 내장 터미널(컴퓨트 노트북)**에서 실행하는 것이 가장 편리하다 — 이미 워크스페이스에 로그인된 상태이므로 별도 인증 없이 바로 사용 가능하다.

## 요약
- 등록된 모델을 빠르게 확인하려면 `az ml model list --output table` 명령을 Azure ML Studio 터미널에서 실행하면 된다.
