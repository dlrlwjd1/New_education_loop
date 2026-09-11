# Integrating Ansible and Jenkins - Demonstration

## 개요
- Ansible 플러그인·도구를 Jenkins에 설정하고, Ansible Playbook을 실행하는 CI/CD 파이프라인을 작성하는 실습.

## 내용
### 1. 준비물
- GitHub 저장소에 이전에 작성한 Ansible Playbook(Apache2 설치·시작, index.html 배포)과 `index.html` 파일을 저장.
- Jenkins와 Ansible이 같은 서버에 설치되어 있어야 함.

### 2. Jenkins에 Ansible 플러그인·도구 설정
- **Manage Jenkins → Plugins → Available** → **Ansible Playbook Plugin** 설치 (Ansible 명령·Playbook 실행 가능하게 함)
- **Manage Jenkins → Tools** → Ansible 섹션에서 **Add Ansible**
  - 이름: `my ansible`
  - Path: 서버의 Ansible 설치 경로(예: `/usr/bin`, `which ansible` 명령으로 확인 가능)

### 3. 파이프라인 작성

```groovy
pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: '<repository-URL>'
            }
        }
        stage('Build Code') {
            steps {
                sh 'echo "build code"'  // 실제로는 Maven 빌드 명령 등
            }
        }
        stage('Deploy - Execute Playbook') {
            steps {
                sh 'ansible-playbook <playbook-name>.yml'
            }
        }
    }
}
```

- Checkout(저장소에서 소스+Playbook 가져오기) → Build Code → Deploy(Ansible Playbook 실행)의 3단계.
- 실제 운영에서는 소스 코드·테스트 케이스·Ansible Playbook을 하나의 공통 저장소에 둘 수 있다.
- 폴링(poll SCM)이나 Webhook Trigger를 추가해 자동 실행되도록 설정 가능.

### 4. 실행 확인
- Build 실행 → 콘솔 로그에서 `ansible-playbook` 명령이 localhost(또는 지정 호스트)에서 성공적으로 실행됐는지 확인.

## 요약
- Jenkins에 Ansible Playbook Plugin과 Ansible 도구 경로를 등록한 뒤, Pipeline의 Deploy stage에서 `sh 'ansible-playbook ...'` 명령으로 Playbook을 실행하면 Checkout→Build→Deploy(Ansible)로 이어지는 완전한 CI/CD 흐름을 구현할 수 있다.
