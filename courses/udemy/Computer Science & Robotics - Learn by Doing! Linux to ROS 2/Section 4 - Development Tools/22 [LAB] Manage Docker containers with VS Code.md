# [LAB] Manage Docker containers with VS Code

## 개요
1. **Docker와 Visual Studio Code의 통합**
   Docker를 사용하여 분리된 환경에서 코드를 실행하는 방법을 간소화합니다.
2. **VS Code 확장 사용**
   Visual Studio Code에서 Docker 컨테이너를 관리, 빌드 및 실행할 수 있는 다양한 확장을 사용합니다.
3. **Docker 이미지와 컨테이너의 관리**
   이미지와 컨테이너를 생성하고 삭제하는 방법을 배웁니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/51504549#overview)

## 내용
### 1. 기본적인 사용 사례
1. **기존 컨테이너 사용**
   - 이미지와 컨테이너가 이미 존재할 경우, Visual Studio Code의 Remote Explorer 확장을 사용하여 컨테이너를 시작하고 종료합니다.
   - 컨테이너 내에서 파일을 수정하거나 통합 터미널을 사용할 수 있습니다.

2. **새로운 컨테이너 생성**
   - 이미지나 컨테이터가 없을 경우, Dockerfile과 docker-compose.yml 파일을 사용하여 새로운 dev container를 생성합니다.
   - Visual Studio Code의 Dev Containers 확장을 사용하여 환경 설정 및 컨테이너 생성을 자동화할 수 있습니다.

### 2. Dev Container 이해
1. **Dev Container 개념**
   - Dev Container는 Docker에서 정의된 구성 파일에 따라 준비된 개발 환경입니다.
   - JSON 형식의 구성 파일을 통해 Visual Studio Code가 어떻게 빌드하고 설정해야 하는지 지정합니다.

### 3. Dev Container 생성
1. **기존 컨테이너 제거**
   - 이미지와 컨테이터를 먼저 제거합니다.
   - Docker RMI 명령어로 이미지를 삭제합니다.

2. **Dev Container 구성 파일 작성**
   - devcontainer.json 파일을 생성하고, 필요한 정보를 입력합니다.
   - 이미지 이름, Dockerfile 경로, docker-compose.yml 파일 경로 등을 지정합니다.

3. **Visual Studio Code에서 Dev Container 열기**
   - Visual Studio Code의 Dev Containers 확장을 사용하여 폴더를 Dev Container로 열 수 있습니다.
   - 새로운 컨테이너가 생성되고, 해당 환경 내에서 작업할 수 있습니다.

### 4. Dev Container 관리
1. **컨테이너 시작 및 종료**

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- **Docker와 Visual Studio Code의 통합**
- **VS Code 확장 사용**
- **Docker 이미지와 컨테이너의 관리**
