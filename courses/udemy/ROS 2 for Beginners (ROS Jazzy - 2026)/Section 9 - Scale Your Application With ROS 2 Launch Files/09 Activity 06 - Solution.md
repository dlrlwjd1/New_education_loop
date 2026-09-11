# Activity 06 - Solution

## 개요

- 이름과 파라미터가 다른 뉴스 발행 노드 다섯 개와 스마트폰 구독 노드를 하나의 런치 파일로 실행한다.
- 유형: 동영상
- 길이: 13분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21306530#overview)

## 내용

- 런치 파일을 쓰기 전에 뉴스 발행 노드 하나를 `ros2 run`으로 실행해 패키지명, 실행 파일명, 노드 이름, `robot_name` 파라미터를 확인한다.
- `radio.launch.xml`을 만들고 `robot_news_station` 실행 항목을 다섯 번 추가한다.
- 각 노드는 서로 다른 노드 이름과 `robot_name` 값을 사용하지만 모두 같은 `robot_news` 토픽에 발행한다.
- `smartphone` 노드를 추가해 다섯 발행자의 메시지를 한 토픽에서 수신하고 로그로 출력한다.
- `ros2 node list`, `ros2 topic echo /robot_news`, `rqt_graph`로 노드 수와 통신 구조를 검증한다.
- 추가 연습에서는 다섯 노드의 파라미터를 `radio_config.yaml`에 모으고 각 노드 항목이 같은 YAML 파일을 로드하도록 변경한다.

## 예시

```bash
ros2 run my_py_pkg robot_news_station \
  --ros-args \
  -r __node:=robot_news_station_discard \
  -p robot_name:=discard
```

```bash
colcon build --packages-select my_robot_bringup
source install/setup.bash
ros2 launch my_robot_bringup radio.launch.xml
ros2 topic echo /robot_news
```

## 요약

- 먼저 단일 `ros2 run` 명령으로 설정을 검증하면 런치 파일의 각 속성을 정확히 옮길 수 있다.
- 같은 실행 파일을 여러 번 시작할 때는 고유한 노드 이름과 파라미터 값을 지정한다.
- YAML 파일을 사용하면 여러 노드의 설정을 런치 파일과 분리해 관리할 수 있다.
