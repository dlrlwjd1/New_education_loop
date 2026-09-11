# Creating Docker Images

## 개요
1. Docker 이미지를 생성하는 세 가지 방법 중 하나를 탐구했습니다: 기본 옵션인 Docker 앱을 사용하는 것, 공개 온라인 서비스를 통해 컨테이너 이미지 저장소에 접근하는 것, 그리고 압축된 아카이브와 Docker 파일을 사용하는 것.
2. 가장 쉬운 방법은 현재 실행 중인 Docker 컨테이너의 변경 사항을 커밋하는 것입니다.
3. Docker commit은 현재 실행 중인 컨테이너의 상태를 새로운 이미지로 저장할 수 있습니다.
4. 하지만, 장기적인 사용이나 협업 작업에서는 Docker 파일을 사용하여 투명하고 재현 가능한 방식으로 이미지를 빌드하는 것이 권장됩니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52396185#overview)

## 내용
### 커밋 방법 (Commit Method)
1. **커밋의 개념**: 현재 실행 중인 컨테이너의 상태를 새로운 이미지로 저장합니다.
2. **예시**:
   ```bash
   docker commit <container_id> my_new_image
   ```
3. **장점과 단점**:
   - 장점: 간단하고 빠르게 실행됩니다.
   - 단점: 장기적인 유지 관리나 협업에 적합하지 않습니다.

### Docker 파일 사용 (Docker File Usage)
1. **Docker 파일의 개념**: 텍스트 파일로, 이미지를 빌드하는 데 필요한 일련의 지침을 포함합니다.
2. **예시**:
   ```dockerfile
   FROM ubuntu:latest
   RUN apt-get update && apt-get install -y python3
   COPY . /app
   WORKDIR /app
   CMD ["python3", "app.py"]
   ```
3. **장점과 단점**:
   - 장점: 문서화되어 재현 가능하며, 변경 사항을 추적하고 공유할 수 있습니다.

## 예시
- 강의의 개념과 적용 맥락은 위 내용에 정리했으며, 구체적인 명령 실습은 관련 실습 강의에서 진행한다.

## 요약
- Docker 이미지를 생성하는 세 가지 방법 중 하나를 탐구했습니다: 기본 옵션인 Docker 앱을 사용하는 것, 공개 온라인 서비스를 통해 컨테이너 이미지 저장소에 접근하는 것, 그리고 압축된 아카이브와 Docker 파일을 사용하는 것.
- 가장 쉬운 방법은 현재 실행 중인 Docker 컨테이너의 변경 사항을 커밋하는 것입니다.
- Docker commit은 현재 실행 중인 컨테이너의 상태를 새로운 이미지로 저장할 수 있습니다.
- 하지만, 장기적인 사용이나 협업 작업에서는 Docker 파일을 사용하여 투명하고 재현 가능한 방식으로 이미지를 빌드하는 것이 권장됩니다.
