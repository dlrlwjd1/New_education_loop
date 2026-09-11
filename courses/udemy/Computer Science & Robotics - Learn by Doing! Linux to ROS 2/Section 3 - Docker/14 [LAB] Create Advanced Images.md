# [LAB] Create Advanced Images

## 개요
Docker를 사용하여 완전한 개발 환경을 설정하고 팀원 간의 협업을 향상시킬 수 있습니다. 이미지에 필요한 모든 라이브러리와 도구들을 미리 포함하여 새로운 프로그램을 개발하는 데 도움이 됩니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/50287377#overview)

## 내용
### Dockerfile 생성
1. **새 디렉토리 생성 및 이동**
   ```bash
   mkdir dev_box && cd dev_box
   ```
2. **Dockerfile 파일 생성**
   ```bash
   touch Dockerfile
   ```

### Dockerfile 작성
1. **기반 이미지 설정**
   ```dockerfile
   FROM ubuntu:20.04
   ```
2. **메타데이터 추가**
   ```dockerfile
   LABEL maintainer="your_name"
   LABEL description="Advanced dev env with Python, C++ and so on."
   ```
3. **개발 도구 설치**
   ```dockerfile
   RUN apt update && \
       apt install -y build-essential cmake git python3 python3-pip iputils-ping net-tools
   ```
4. **Python 패키지 관리자 설치**
   ```dockerfile
   RUN pip3 install --no-cache-dir numpy scipy pandas matplotlib==3.8.4
   ```
5. **환경 변수 설정**
   ```dockerfile
   ENV MY_VAR=13
   ```
6. **기본 명령 설정**
   ```dockerfile
   CMD ["bash"]
   ```

### Docker 이미지 빌드
1. **Dockerfile 위치로 이동**
   ```bash
   cd dev_box
   ```
2. **이미지 빌드**
   ```bash
   docker build -t advanced_dev_env .
   ```

### 에러 수정 및 재빌드
1. **네트워크 도구 패키지 이름 수정**
   ```dockerfile
   RUN apt update && \
       apt install -y build-essential cmake git python3 python3-pip iputils-ping net-tools
   ```
2. **이미지 재빌드**
   ```bash
   docker build -t advanced_dev_env .
   ```

### 컨테이너 생성 및 확인
1. **컨테이너 실행**
   ```bash
   docker run --rm -it advanced_dev_env bash
   ```
2. **사용자 확인**
   ```bash
   whoami
   ```
3. **환경 변수 확인**
   ```bash
```
## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- 강의에서 설명한 대표 명령과 절차는 위 내용에 포함되어 있다.
