# Exploring Azure ML Command Line

## 개요
- Azure ML Studio 내장 터미널에서 **Azure ML CLI 확장 v2**(`az ml`)로 데이터셋과 모델을 조회하는 방법을 시연하는 3분 데모.

## 내용

### Azure ML CLI 확장 v2
- 전체 제품을 효율적으로 조회할 수 있는 많은 명령어 제공 — 배치 배포 관리, 배포 삭제, 배포 목록 조회 등, GUI를 클릭하는 것보다 훨씬 간단한 경우가 많음.

### 터미널 진입
- Azure ML Studio에서 워크스페이스에 로그인한 상태로 **Terminal**을 선택 — "Welcome to Azure machine learning terminal" 메시지와 함께 바로 CLI를 사용할 수 있음.

### 기본 명령어 탐색
- `az ml --help`로 전체 명령어 목록 확인 — 하위 그룹으로 batch deployment, compute, datasets, jobs, models 등이 있음.
- `az ml data list --help`로 데이터셋 목록 조회 옵션 확인 — 출력 형식을 **JSON**, **테이블(table)**, **YAML** 중 선택 가능.
  - 위 화살표로 이전 명령을 불러와 `--output table`로 변경해 실행 → 워크스페이스에 등록된 모든 데이터셋을 테이블 형태로 확인.
- 모델 관련 명령어도 동일한 패턴: `az ml model --help`로 archive, create, download, list, restore, show, update 등의 하위 명령 확인.
  - `az ml model list --help` → `--output table`로 등록된 모델 목록을 테이블로 확인.

### 핵심 통찰
- CLI로 조회하려 한다면, **컴퓨트 노트북(compute notebooks)**에서 터미널을 열어 바로 작업하는 것이 가장 좋은 방법.

## 예시
```bash
# 전체 명령어 확인
az ml --help

# 데이터셋 목록 조회 (테이블 형식)
az ml data list --output table

# 모델 목록 조회 (테이블 형식)
az ml model list --output table
```

## 요약
- Azure ML CLI 확장 v2(`az ml`)는 컴퓨트 노트북의 터미널에서 데이터셋·모델·잡·배포 등을 JSON/테이블/YAML 형식으로 빠르게 조회할 수 있게 해주며, GUI보다 더 효율적인 조회 방법을 제공한다.
