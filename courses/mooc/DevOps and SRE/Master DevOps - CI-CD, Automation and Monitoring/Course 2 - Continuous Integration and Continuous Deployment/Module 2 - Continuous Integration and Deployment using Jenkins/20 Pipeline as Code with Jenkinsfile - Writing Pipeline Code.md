# Pipeline as Code with Jenkinsfile - Writing Pipeline Code

## 개요
- Maven 도구를 Jenkins에 등록하고, GitHub의 Java 프로젝트를 가져와 컴파일·테스트·패키징하는 4단계 파이프라인을 직접 작성하는 실습.

## 내용
### 1. Jenkins에 Maven 도구 등록
- **Manage Jenkins → Tools** → Maven Installations → **Add Maven**
- 이름: `my Maven` (이 예제를 그대로 따라할 경우 동일 이름 권장)
- "Install automatically" 체크, Apache Maven 버전(예: 3.9.9) 선택 후 저장

### 2. Pipeline Job 생성 및 코드 작성
- 새 Job 생성 → 프로젝트 타입: **Pipeline**
- Pipeline 섹션에서 **Pipeline script** 직접 작성 선택 (실무에서는 GitHub 등 SCM에 저장하는 것을 권장)

```groovy
pipeline {
    agent any
    tools {
        maven 'my Maven'
    }
    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/.../address-book-repo.git'
            }
        }
        stage('Compile Code') {
            steps {
                sh 'mvn compile'
            }
        }
        stage('Test Code') {
            steps {
                sh 'mvn test'
            }
        }
        stage('Package Code') {
            steps {
                sh 'mvn package'
            }
        }
    }
}
```

### 구조 설명
- `agent any` — 현재 Jenkins 서버(어디든 사용 가능한 서버)에서 실행
- `tools { maven 'my Maven' }` — 앞서 등록한 Maven 버전을 이 파이프라인에서 사용
- **4개 stage**: 코드 체크아웃(Git) → 컴파일(`mvn compile`) → 테스트(`mvn test`) → 패키징(`mvn package`)
- Jenkins 키워드(`pipeline`, `agent`, `stage`, `steps`, `sh` 등)는 소문자로 작성, Stage 이름 등 사용자가 지정하는 문자열은 따옴표로 감싼다.

### 실행 확인
- 저장 후 **Build Now** 실행 → 좌측 **Stage View**에서 Checkout → Compile → Test → Package가 순서대로 실행되는 것을 확인 가능.

## 요약
- Jenkins Pipeline은 `tools`에 등록한 빌드 도구를 참조해 `stages` 안에 Checkout→Compile→Test→Package 같은 stage들을 순서대로 정의하며, 각 stage의 `steps`에 `git`, `sh 'mvn ...'` 같은 실제 명령을 작성해 GitHub 코드를 가져와 빌드하는 전체 흐름을 자동화한다.
