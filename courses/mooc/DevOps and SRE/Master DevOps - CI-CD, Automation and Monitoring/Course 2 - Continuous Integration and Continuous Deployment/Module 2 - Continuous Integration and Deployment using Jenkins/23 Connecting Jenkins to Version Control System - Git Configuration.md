# Connecting Jenkins to Version Control System - Git Configuration

## 개요
- Jenkins에 Git 플러그인·도구가 이미 설정돼 있는지 확인하고, GitHub Personal Access Token으로 자격 증명을 생성하는 실습.

## 내용
### 1. Git 플러그인·도구 확인
- **Manage Jenkins → Plugins → Installed** — `Git Client Plugin`, `GitHub API Plugin`은 Jenkins 설치 시 기본 포함됨
- **Manage Jenkins → Tools** — Git 설치 경로가 기본 설정되어 있는지 확인 (Ubuntu/Debian 계열 Linux는 대개 Git이 사전 설치되어 있어 별도 설치 불필요)

### 2. Private Repository 연결을 위한 Credential 생성
- Private GitHub 저장소에 연결하려면 **Manage Jenkins → Credentials → Global** → 자격 증명 추가
- 타입: **Username with password**
  - Username: GitHub 사용자명
  - Password: **Personal Access Token**(비밀번호 아님)

### 3. GitHub Personal Access Token 생성
- `github.com/settings/tokens` → **Generate new token (classic)**
- 토큰 이름 지정, 저장소 접근을 위한 **scope**(권한 범위) 선택 필수
- 생성된 토큰을 복사해 Jenkins Credential의 Password 필드에 입력, ID/설명 지정 후 저장

### 4. Job 생성 준비
- 예제 저장소에는 `master`(또는 `main`) 브랜치에 **Jenkinsfile**이 있으며, 사용자 입력(dev/QA 등)에 따라 다른 명령(compile/test)을 실행하는 조건부 파이프라인이 포함되어 있다.
- 목표: 개발자가 저장소에 커밋할 때마다 이 Job이 자동으로 트리거되도록 설정하는 것 (다음 강의에서 이어짐).

## 요약
- Git/GitHub 플러그인과 도구는 Jenkins에 기본 포함되어 있어 별도 설치가 필요 없는 경우가 많으며, Private 저장소는 GitHub Personal Access Token을 Username-Password 타입 Credential로 등록해 인증한다.
