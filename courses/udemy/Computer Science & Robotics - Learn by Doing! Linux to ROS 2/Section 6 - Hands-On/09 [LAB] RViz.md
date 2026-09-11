# [LAB] RViz

## 개요
1. ROS 2에서 노드가 실행되고 있는 상태를 확인합니다.
2. 터미널에서 Ros2 topic list 명령을 사용하여 주제들을 확인합니다.
3. 복잡한 메시지를 쉽게 시각화하기 위해 RViz를 사용하는 방법을 배웁니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52114867#overview)

## 내용
### 1. 현재 실행 중인 노드 확인
우리의 시스템이 이미 실행되고 있으며, Docker 컨테이너 내에서 모든 노드가 실행 중입니다. 이는 launch 파일로 시작되었습니다. 여기에는 많은 주제들이 있습니다. Ros2 topic list 명령을 사용하여 주제들을 확인해봅시다.

### 2. Ros2 topic list 명령 사용
터미널에서 Ros2 topic list 명령을 입력하면 다음과 같은 결과가 나옵니다:
```
/rosout
/scan
/map
/laser_scan
/camera/image_raw
```

### 3. 복잡한 메시지 시각화를 위한 RViz 사용
Ros 메시지는 종종 복잡할 수 있습니다. 예를 들어, 맵 메시지를 읽을 때는 터미널에서 직접 읽기는 어렵습니다. RViz를 사용하면 이러한 복잡한 메시지를 쉽게 시각화할 수 있습니다.

### 4. RViz 시작
이 소절의 본문은 수집되지 않았다. Udemy 자막 원문을 확보한 뒤 보완해야 한다.

## 예시
1. Ros2 topic list 명령 사용:
   ```bash
   ros2 topic list
   ```
   결과:
   ```
   /rosout
   /scan
   /map
   /laser_scan
   /camera/image_raw
   ```

2. RViz 시작:
   ```bash
   ros2 launch rviz2 rviz2.launch.py
```
## 요약
- ROS 2에서 노드가 실행되고 있는 상태를 확인합니다.
- 터미널에서 Ros2 topic list 명령을 사용하여 주제들을 확인합니다.
- 복잡한 메시지를 쉽게 시각화하기 위해 RViz를 사용하는 방법을 배웁니다.
