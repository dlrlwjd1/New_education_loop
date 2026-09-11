# Connecting Jenkins to Version Control System

## 개요
- Jenkins를 버전 관리 시스템(GitHub 등)과 자동으로 연동해야 하는 이유와 Webhook 기반 통합 워크플로우를 설명.

## 내용
### 왜 자동 연동이 필요한가
- 자동화가 없으면 Jenkins가 Git 저장소와 지속적으로 동기화되도록 수동으로 관리해야 한다.
- 자동화가 없으면 컴파일·테스트·패키징·배포가 지연되고, 개발자에게 가는 피드백도 늦어진다.

### 연동 방법
- GitHub/GitLab을 Jenkins와 연동하는 다양한 **Trigger**를 Job(Freestyle/Pipeline)에 설정할 수 있다.
- 트리거가 설정되면 저장소 변경 시 자동 API 호출로 Jenkins에 알리거나, Jenkins가 저장소를 pull해 변경사항을 가져온다.
- 개발자가 커밋할 때마다 Job이 자동으로 빌드되어 컴파일 파일·테스트 케이스·아티팩트에 변경이 반영되고, 문제가 있으면 즉시 개발자에게 피드백된다.

### 통합 워크플로우
1. 개발자가 로컬에서 코드를 변경(새 기능 작성)
2. 새 브랜치 또는 기존 브랜치로 GitHub에 push
3. Jenkins Job에 **Webhook Trigger** 설정 — GitHub 저장소에 훅(hook)을 걸어둠
4. 저장소에 변경이 생기면 Webhook이 즉시 Jenkins Job에 알림
5. Jenkins가 자동으로 Job(파이프라인)을 실행하고 결과를 보여줌

## 요약
- Jenkins와 버전 관리 시스템은 Webhook Trigger로 연동하며, 개발자의 커밋이 GitHub에 push되는 즉시 Jenkins가 통보받아 자동으로 빌드를 실행함으로써 빠른 피드백 루프를 완성한다.
