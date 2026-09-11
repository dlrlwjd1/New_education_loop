# [LAB] Get Images from Docker Hub

## 개요
이 실습에서는 Docker Hub에서 이미지를 검색하고 다운로드하는 방법을 학습합니다. 특히 Python과 ROS 2에 대한 이미지를 다운로드하는 과정을 중심으로 진행됩니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/50298245#overview)

## 내용
### Docker 이미지 검색
1. **웹 브라우저 열기**: Firefox를 사용하여 Docker Hub 웹 페이지를 열어주세요.
2. **검색 바 입력**: "Python"이라는 키워드를 Docker Hub의 검색 바에 입력합니다.
3. **공식 이미지 선택**: 가능한 경우, 이름 옆에 공식 이미지 페이지를 찾아보세요. 이는 Docker 또는 신뢰할 수 있는 조직이 유지 관리하고 있다는 것을 의미합니다.

### 이미지 자세히 보기
1. **이미지 클릭**: 선택한 이미지를 클릭하여 상세 페이지로 이동합니다.
2. **태그 확인**: 상세 페이지에서 다양한 태그를 확인하세요. 예를 들어 "3.14", "3.13" 등이 있을 수 있습니다. 태그는 특정 버전과 구성의 이미지를 선택하는 데 사용됩니다.

### Python 이미지 다운로드
1. **터미널 열기**: 터미널을 열어주세요.
2. **Docker pull 명령 실행**: `docker pull python` 명령을 입력하여 Python 이미지를 다운로드합니다. 태그를 지정하지 않았으므로, 가장 최신 버전의 이미지가 다운로드됩니다.

### ROS 2 이미지 다운로드
1. **ROS 2 이미지 다운로드**: `docker pull ros` 명령을 입력하여 ROS 2 이미지를 다운로드합니다. 역시 태그를 지정하지 않았으므로, 가장 최신 버전의 이미지가 다운로드됩니다.

## 예시
```bash
# Python 이미지 다운로드
$ docker pull python

# ROS 2 Humble 이미지 다운로드
$ docker pull ros:humble
```
## 요약
1. Docker Hub에서 이미지를 검색하고 다운로드하는 방법을 배웠습니다.
2. 공식 이미지는 신뢰할 수 있는 소스로부터 제공됩니다.
3. 태그
