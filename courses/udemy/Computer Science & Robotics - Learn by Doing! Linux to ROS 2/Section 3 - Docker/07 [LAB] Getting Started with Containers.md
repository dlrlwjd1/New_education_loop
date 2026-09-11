# [LAB] Getting Started with Containers

## 개요
1. Docker 명령어를 사용하여 이미지와 컨테이너를 효과적으로 관리하는 방법을 배웁니다.
2. 이미지를 다운로드하고, 컨테이너를 생성하고 실행하는 기본적인 절차를 이해합니다.
3. 이미지의 버전과 크기를 확인하는 방법을 배웁니다.
4. 이미지를 추가하거나 삭제하는 방법을 실습합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52320869#overview)

## 내용
### Docker 명령어 소개
Docker 명령어는 컨테이너와 이미지를 관리하는데 사용됩니다. 기본적인 명령어로는 `docker pull`, `docker images`, `docker run`, `docker ps`, `docker stop` 등이 있습니다.

#### 이미지 다운로드
새로운 이미지를 다운로드하려면 `docker pull` 명령어를 사용합니다.
```bash
docker pull ros:noetic-desktop-full
```

#### 이미지 목록 확인
다운로드한 이미지의 목록을 확인하려면 `docker images` 명령어를 사용합니다.
```bash
docker images
```
이 명령어는 이미지의 ID, 리포지토리 이름, 태그, 크기 등을 보여줍니다.

#### 컨테이너 실행
다운로드한 이미지를 기반으로 새로운 컨테이너를 생성하고 실행하려면 `docker run` 명령어를 사용합니다.
```bash
docker run -it --name my_first_container ros:noetic-desktop-full bash
```
이 명령어는 `-it` 옵션을 사용하여 인터랙티브 모드로 컨테이너를 실행하고, `--name` 옵션을 사용하여 컨테이너의 이름을 지정합니다.

#### 컨테이너 목록 확인
실행 중인 컨테이너의 목록을 확인하려면 `docker ps` 명령어를 사용합니다.
```bash
docker ps
```
이 명령어는 현재 실행 중인 컨테이너의 ID, 이름, 상태 등을 보여줍니다.

#### 컨테이너 종료
더 이상 필요하지 않은 컨테이너를 종료하려면 `docker stop` 명령어를 사용합니다.
```bash
docker stop my_first_container
```

### 이미지 관리
이미지를 추가하거나 삭제하는 방법을 실습합니다.

#### 이미지 추가
이 소절의 본문은 수집되지 않았다. Udemy 자막 원문을 확보한 뒤 보완해야 한다.

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- Docker 명령어를 사용하여 이미지와 컨테이너를 효과적으로 관리하는 방법을 배웁니다.
- 이미지를 다운로드하고, 컨테이너를 생성하고 실행하는 기본적인 절차를 이해합니다.
- 이미지의 버전과 크기를 확인하는 방법을 배웁니다.
- 이미지를 추가하거나 삭제하는 방법을 실습합니다.
