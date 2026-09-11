# Integrating Jenkins with Maven (Demo)

## 개요
- Maven 도구를 Jenkins에 등록하고, GitHub의 Java 코드를 체크아웃→컴파일→테스트(JUnit 리포트를 트렌드 리포트로 변환)→패키지하는 파이프라인을 작성하는 실습.

## 내용
### 1. Maven 도구 등록
- **Manage Jenkins → Tools → Maven Installations → Add Maven**
- 이름: `my Maven`, "Install automatically" 체크, Apache Maven 3.9.9 지정 후 저장 (Jenkins 전용으로만 설치되며 서버 전체에 설치되는 것은 아님)

### 2. 파이프라인 작성

```groovy
pipeline {
    agent any
    tools {
        maven 'my Maven'
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/.../repo.git'
            }
        }
        stage('Compile') {
            steps {
                sh 'mvn compile'
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test'
            }
            post {
                success {
                    junit 'target/surefire-reports/*.xml'
                }
            }
        }
        stage('Package') {
            steps {
                sh 'mvn package'
            }
        }
    }
}
```

- **Pipeline Syntax Generator**를 사용해 `junit` step(테스트 성공 후 Surefire 리포트를 JUnit 트렌드 리포트로 변환)의 코드를 자동 생성할 수 있다.
- `post { success { ... } }` 블록으로 Test stage가 성공했을 때만 리포트 변환 단계 실행.

### 3. 언어별 빌드 도구 참고
- Maven — Java(Spring Boot 포함)
- npm — Node.js/JavaScript
- MSBuild — .NET/C#
- Gradle — Maven 대신 Java에 사용 가능

### 4. 실행 결과 확인
- Build 실행 → Compile → Test → Package stage가 순서대로 실행되는 것을 Stage View에서 확인
- 빌드 번호 클릭 → 테스트 리포트(통과한 테스트 케이스 수) 확인
- Workspace의 target 폴더에서 컴파일된 class 파일, Surefire 리포트, 최종 아티팩트 확인

## 요약
- Jenkins Tools에 Maven을 등록한 뒤 `tools { maven '...' }`로 파이프라인에서 참조하고, Checkout→Compile→Test(JUnit 리포트 변환 포함)→Package의 4단계로 GitHub의 Java 프로젝트를 완전히 자동화된 빌드 파이프라인으로 통합할 수 있다.
