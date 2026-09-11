# [LAB] Create Images with Dockerfile

## 개요
이 실습에서는 Dockerfile을 사용하여 이미지를 생성하는 방법을 학습합니다. 기본 이미지를 정의하고, 작업 디렉토리를 설정하며, Python 스크립트를 실행하는 단계를 포함합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/50955541#overview)

## 내용
### 1. 시작 이미지 정의
새로운 터미널을 열고 적절한 디렉토리를 생성합니다.
```bash
mkdir hello_docker
cd hello_docker
```
이 디렉토리에서 작업할 것입니다.

### 2. Dockerfile 작성
Dockerfile은 기본적으로 이미지를 생성하는 데 사용됩니다. 기본 이미지는 Python을 기반으로 합니다.
```dockerfile
# Dockerfile
FROM python:3.10-slim

# 작업 디렉토리 설정
WORKDIR /app

# 애플리케이션 코드 복사
COPY hello.py .

# 애플리케이션 실행 명령
CMD ["python", "hello.py"]
```

### 3. Dockerfile 생성 및 실행
Dockerfile을 사용하여 이미지를 생성하고 실행합니다.
```bash
docker build -t hello_python .
docker run hello_python
```

## 예시
### Dockerfile 명령어
- `FROM python:3.10-slim`: 기본 이미지 설정
- `WORKDIR /app`: 작업 디렉토리 설정
- `COPY hello.py .`: 애플리케이션 코드 복사
- `CMD ["python", "hello.py"]`: 애플리케이션 실행 명령

### Dockerfile 예시
```dockerfile
# Dockerfile
FROM python:3.10-slim
WORKDIR /app
COPY hello.py .
CMD ["python", "hello.py"]
```
## 요약
- 기본 이미지를 정의하여 새로운 이미지를 생성합니다.
- 작업 디렉토리를 설정하고, 애플리케이션 코드를 복사합니다.
- Dockerfile을 사용하여 이미지를 빌드하고 실행합니다.
- 이미지 크기를 최적화하여 시스템을 가볍게 유지합니다.
