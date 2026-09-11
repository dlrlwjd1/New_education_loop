# YAML Parameter Files

## 개요

- YAML 파일을 사용하여 노드의 파라미터를 런타임에 저장하고 로드하는 방법을 배웁니다.
- 유형: 동영상
- 길이: 10분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/48733843#overview)

## 내용

- 노드의 파라미터를 하나의 YAML 파일로 저장할 수 있습니다.
- 파라미터를 명령줄에서 매번 입력하지 않고, 파일로 관리할 수 있습니다.
- YAML 파일은 노드 이름과 해당 파라미터 값을 포함합니다.
- 노드가 시작될 때 YAML 파일을 로드하여 파라미터를 적용합니다.
- 다양한 노드에 대한 여러 가지 구성이 하나의 YAML 파일에 담길 수 있습니다.
- 노드 이름이 일치하는 경우 해당 노드만 파라미터를 적용합니다.

## 예시

- ros2 node list 명령어로 현재 실행 중인 노드 확인
- YAML 파일 생성 및 편집 (number_params.yaml)
- ros2 run number_publisher number_publisher --ros-args -p number:=5 -p timer_period:=0.7 명령어로 파라미터 전달

## 요약

- 파라미터 관리를 용이하게 하기 위해 YAML 파일을 사용합니다.
- 노드 이름과 파라미터를 함께 저장하여 런타임에 로드할 수 있습니다.
- 다양한 노드의 구성도 하나의 파일에 담길 수 있어 효율적입니다.
