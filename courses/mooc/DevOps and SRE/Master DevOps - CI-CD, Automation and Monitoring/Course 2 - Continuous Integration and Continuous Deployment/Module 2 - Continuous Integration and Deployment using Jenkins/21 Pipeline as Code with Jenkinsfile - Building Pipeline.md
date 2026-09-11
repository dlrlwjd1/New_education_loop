# Pipeline as Code with Jenkinsfile - Building Pipeline

## 개요
- 파이프라인 실행 결과(Workspace, 아티팩트)를 확인하고, 파이프라인 코드를 Jenkins 서버가 아닌 **GitHub의 Jenkinsfile**로 관리하는 방법을 실습.

## 내용
### 파이프라인 실행 결과 확인
- 각 stage를 클릭하면 콘솔 로그로 상세 내용 확인 가능 — 예: war 파일이 생성되어 현재 Job의 **Workspace → target 폴더**에 위치.
- Job 대시보드의 **Workspace** 메뉴에서 target 폴더 안의 컴파일된 class 파일, Surefire 테스트 리포트, 최종 war 파일(패키지)을 확인할 수 있다.

### Jenkinsfile을 저장소에서 관리하기
- Jenkins 서버에 직접 코드를 쓰는 대신, 소스 코드 저장소에 확장자 없는 **Jenkinsfile**을 만들어 파이프라인 코드를 저장(이번 예제에서는 코드 리뷰 관련 stage가 추가된 버전).
- 새 Job(예: `Jenkinsfile CI demo`) 생성 → 프로젝트 타입: Pipeline
- Pipeline 섹션에서 **"Pipeline script from SCM"** 선택
  - SCM: Git
  - Repository URL 입력 (public 저장소라면 credential 불필요)
  - Branch: `master` (Jenkinsfile이 있는 브랜치명 확인)
  - Script Path: `Jenkinsfile`
- 저장 후 Build 실행 → Jenkins가 자동으로 해당 저장소에서 Jenkinsfile을 가져와 각 stage를 순서대로 실행.

### 이 방식의 의미
- **Jenkins 서버에는 어떤 파이프라인 코드도 직접 작성하지 않음** — 파이프라인 코드 자체가 소스 코드처럼 버전 관리되어(Pipeline as Code) 이력 추적·협업이 가능해진다.

## 요약
- 파이프라인 결과물은 Job의 Workspace(target 폴더)에서 확인할 수 있으며, 파이프라인 코드를 Jenkins 서버가 아닌 GitHub 저장소의 `Jenkinsfile`에 두고 "Pipeline script from SCM"으로 연결하면 파이프라인 자체도 버전 관리되는 진정한 Pipeline as Code를 구현할 수 있다.
