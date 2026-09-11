# Connecting Jenkins to Version Control System - GitHub Repository

## 개요
- GitHub Webhook을 설정해 저장소에 커밋이 발생할 때마다 Jenkins Job이 자동으로 트리거되도록 구성하는 실습.

## 내용
### 1. Jenkins Job 설정 (자동 트리거용)
- Pipeline Job 생성 → **Build Triggers**에서 **"GitHub hook trigger for GITScm polling"** 체크
- Pipeline 섹션에서 "Pipeline script from SCM" 선택 → Git, Repository URL 입력 (Private면 Credential 선택, Public이면 생략 가능)
- Branch 지정(`master` 또는 `main`), Script Path는 `Jenkinsfile`
- 저장만 하고 **직접 실행하지 않음** — Webhook을 통한 자동 실행이 목적

### 2. GitHub에서 Webhook 설정
- 저장소 **Settings → Webhooks → Add webhook**
- **Payload URL**: `<Jenkins URL>/github-webhook/`
- **Content type**: `application/json`
- SSL verification: Enabled 유지
- 트리거할 이벤트 선택 (예: **push event**)
- Webhook을 Active로 설정 후 생성 → GitHub가 테스트 ping을 전송, "Last delivery was successful" 체크 표시로 통신 확인

### 3. 동작 확인
- 저장소의 Jenkinsfile을 수정·커밋
- 즉시 Jenkins 대시보드에서 새 빌드가 자동으로 트리거됨을 확인
- 콘솔 출력에 "This job was started because there was a commit into the GitHub repository by..." 메시지와 함께 파이프라인이 실행됨

## 요약
- GitHub 저장소의 Settings → Webhooks에서 `<Jenkins URL>/github-webhook/`을 Payload URL로 등록하고 Jenkins Job의 Build Trigger에서 "GitHub hook trigger"를 활성화하면, 저장소에 커밋이 발생하는 즉시 Jenkins 빌드가 자동으로 트리거되는 완전한 CI 흐름이 완성된다.
