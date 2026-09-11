# [LAB] Create a Local Registry

## 개요
이 실습에서는 로컬 레지스트리를 생성하고 사용하는 방법을 학습합니다. 로컬 레지스트리는 Docker 이미지를 저장, 관리하고 공유하는데 도움이 됩니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/50287423#overview)

## 내용
### 1. 로컬 레지스트리 설정
우선, 로컬 레지스트리를 설정하는 과정을 살펴보겠습니다.
```bash
docker run -d -p 5000:5000 --name registry registry:2
```
이 명령어는 Docker 컨테이너를 실행하고, 포트 5000을 통해 레지스트리를 연결할 수 있도록 설정합니다. `registry:2`는 가장 최신의 공식 Docker 레지스트리 이미지를 사용합니다.

### 2. 레지스트리 확인
레지스트리가 정상적으로 실행되었는지 확인해보겠습니다.
```bash
docker ps
```
이 명령어를 통해 현재 실행 중인 컨테이너 목록을 확인할 수 있습니다. `registry`라는 이름의 컨테이너가 실행되고 있는 것을 확인하면 됩니다.

### 3. 이미지 추가
레지스트리에 이미지를 추가하는 과정입니다.
```bash
docker tag dockerui:latest localhost:5000/dockerui:latest
docker push localhost:5000/dockerui:latest
```
이 명령어를 통해 `dockerui` 이미지를 레지스트리에 푸시합니다. `localhost:5000/dockerui:latest`는 레지스트리의 주소와 이미지 이름을 지정하는 것입니다.

### 4. 이미지 확인
레지스트리에 추가된 이미지를 확인해보겠습니다.
```bash
curl -X GET "http://localhost:5000/v2/_catalog"
```
이 명령어를 통해 레지스트리에 저장된 이미지 목록을 확인할 수 있습니다.

### 5. 이미지 지속성 유지
레지스트리의 이미지가 지속적으로 유지되는 방법입니다.
```bash
docker stop registry
docker rm registry
docker run -d -p 5000:5000 --name registry -v /registry-data:/var/lib/registry registry:2
```

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- 강의에서 설명한 대표 명령과 절차는 위 내용에 포함되어 있다.
