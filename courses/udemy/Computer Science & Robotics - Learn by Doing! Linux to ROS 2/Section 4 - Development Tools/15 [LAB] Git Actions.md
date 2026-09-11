# [LAB] Git Actions

## 개요
1. GitHub에서 Git Actions를 사용하여 자동화된 워크플로우 설정 방법 이해
2. 워크플로우의 트리거, 작업, 단계 및 실행 결과 확인
3. 공용 리포지토리와 개인 리포지토리에 대한 액션 파일 생성 및 실행

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/51268697#overview)

## 내용
### 1. GitHub Actions 개요
- **개요**: Git Actions는 리포지토리의 변경사항을 자동으로 트리거하여 워크플로우를 실행하는 기능입니다.
- **구체적 제목**: Git Actions 기본 개념 및 설정 방법

### 2. 워크플로우 설정
- **트리거 설정**: 코드 푸시, 브랜치 업데이트 등 다양한 이벤트에 따라 액션 실행
- **작업 정의**: 여러 작업으로 구성된 워크플로우를 생성
- **단계 구현**: 각 단계는 동일한 환경에서 실행되며 이전 단계의 결과를 사용할 수 있음

### 3. 공용 리포지토리 액션 파일 생성
- **소스 코드 다운로드**: `actions/checkout` 액션을 사용하여 소스 코드 다운로드
- **종속성 설치**: `sudo apt update`와 `apt install -y cmake cpp` 등으로 종속성 설치

### 4. 개인 리포지토리 액션 파일 생성
- **공용 리포지토리 클론**: `git clone` 명령어로 공용 리포지토리 클론
- **개인 리포지토리 클론**: SSH 인증을 사용하여 개인 리포지토리 클론

### 5. 워크플로우 실행 및 결과 확인
- **액션 실행**: GitHub Actions 탭에서 액션 실행 추적

## 예시
```yaml
name: Build Test

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Install dependencies
      run: |
        sudo apt update
        sudo apt install -y cmake cpp

    - name: Compile program
      run: |
        mkdir build
```
## 요약
- GitHub에서 Git Actions를 사용하여 자동화된 워크플로우 설정 방법 이해
- 워크플로우의 트리거, 작업, 단계 및 실행 결과 확인
- 공용 리포지토리와 개인 리포지토리에 대한 액션 파일 생성 및 실행
