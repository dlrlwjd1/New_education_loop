# Continuous Deployment Using Jenkins Pipelines - Building Pipeline

## 개요
- Docker 이미지를 빌드→Docker Hub에 푸시→컨테이너로 배포하는 Continuous Deployment 파이프라인을 작성하는 실습.

## 내용
### 파이프라인 구조

```groovy
pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/.../repo.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh "docker build -t myimagepython:${BUILD_NUMBER} ."
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-password', variable: 'DOCKERHUB_PASSWORD')]) {
                    sh "docker login -u <dockerhub-username> -p ${DOCKERHUB_PASSWORD}"
                }
                sh "docker tag myimagepython:${BUILD_NUMBER} <dockerhub-account>/myimagepython:${BUILD_NUMBER}"
                sh "docker push <dockerhub-account>/myimagepython:${BUILD_NUMBER}"
            }
        }
        stage('Deploy') {
            steps {
                sh "docker run -d -p 8080:8080 <dockerhub-account>/myimagepython:${BUILD_NUMBER}"
            }
        }
    }
}
```

### 단계별 설명
1. **Checkout** — `git` 스텝으로 branch(`master`)와 저장소 URL을 지정해 소스 코드·Dockerfile을 Job workspace로 가져옴.
2. **Build Docker Image** — `docker build .` 명령으로 workspace의 Dockerfile을 이용해 이미지 생성. 이미지 이름에 **`${BUILD_NUMBER}`**(빌드 번호)를 태그로 붙여 매 실행마다 고유한 이미지를 만든다 (예: `myimagepython:1`).
3. **Push to Docker Hub** — Jenkins의 **`withCredentials`** 플러그인으로 Credential Store에 저장해둔 Docker Hub 비밀번호(`dockerhub-password`)를 안전하게 불러와 `docker login` 수행. 이후 이미지를 Docker Hub 계정명 형식(`계정명/이미지명:빌드번호`)으로 태그하고 `docker push`로 업로드.
4. **Deploy** — 기존 컨테이너를 정리하고 `docker run`으로 새 이미지를 컨테이너로 실행, 포트 매핑(`-p`)을 지정해 브라우저에서 접근 가능하게 함.

### 실행 전 확인 사항
- 앞선 강의에서 설정한 대로, Jenkins가 Docker 명령을 실행할 수 있는 권한(Docker 소켓 접근)이 있는지 먼저 확인해야 한다.

## 요약
- Docker 기반 Continuous Deployment 파이프라인은 Checkout(소스+Dockerfile 확보) → Build(빌드 번호로 태깅된 이미지 생성) → Push(withCredentials로 안전하게 로그인 후 Docker Hub 업로드) → Deploy(컨테이너 실행)의 4단계로 구성되며, 매 빌드마다 고유한 이미지 태그를 사용해 버전을 관리한다.
