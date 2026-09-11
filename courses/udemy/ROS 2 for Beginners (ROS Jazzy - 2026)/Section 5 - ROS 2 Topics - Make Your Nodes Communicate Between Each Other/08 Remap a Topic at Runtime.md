# Remap a Topic at Runtime

## 개요

- ROS 2에서 토픽의 이름을 런타임에 변경하는 방법을 배웁니다.
- 유형: 동영상
- 길이: 4분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305630#overview)

## 내용

- `my_py_pkg`의 뉴스 발행 노드를 실행하면서 노드 이름을 `my_station`으로 변경합니다.
- 토픽의 이름도 런타임에 변경할 수 있습니다.
- --ros-args와 -r 옵션을 사용하여 토픽의 이름을 변경합니다.
- 코드를 수정하지 않고 `robot_news` 토픽을 `abc`로 리매핑합니다.
- 통신 상대 노드도 같은 리매핑을 적용해야 새 토픽에서 다시 연결됩니다.

## 예시

```bash
ros2 run my_py_pkg robot_news_station \
  --ros-args \
  -r __node:=my_station \
  -r robot_news:=abc

ros2 node list
ros2 topic list
```

## 요약

- 런타임에 토픽의 이름을 변경할 수 있습니다.
- --ros-args와 -r 옵션을 사용하여 변경합니다.
- 코드에서 토픽의 이름을 직접 변경하지 않습니다.
