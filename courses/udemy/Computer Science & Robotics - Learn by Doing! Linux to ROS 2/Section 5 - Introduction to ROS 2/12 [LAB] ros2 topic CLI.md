# [LAB] ros2 topic CLI

## 개요
1. Ros2 CLI를 사용하여 사용 가능한 토픽을 모니터링하고 전송되는 데이터를 검사합니다.
2. 간단한 노드를 실행하여 정기적으로 메시지를 게시하는 방법을 배웁니다.
3. Ros2 CLI를 사용하여 시스템의 토픽을 모니터링하고 내용을 확인하는 방법을 학습합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/49933327#overview)

## 내용
### 1. 간단한 노드 실행
- **노드**: talker (demo node C++ 패키지)
- **명령**: `ros2 run demo_nodes_cpp talker`
- **실행 결과**: 터미널에 "talker" 노드가 "chatter" 토픽에서 새로운 메시지를 게시하고 있다는 로그 메시지가 출력됩니다.

### 2. 토픽 모니터링
- **명령**: `ros2 topic list`
- **실행 결과**: "talker" 노드가 실행한 "chatter" 토픽과 "Rosout" 이벤트 토픽이 출력됩니다.
- **노드 종료 후 확인**: `Ctrl+C`로 노드를 종료하고 다시 `ros2 topic list` 명령을 실행하면 "chatter" 토픽이 사라진 것을 확인할 수 있습니다.

### 3. 토픽 내용 모니터링
- **명령**: `ros2 topic echo /chatter`
- **실행 결과**: "talker" 노드가 게시하는 메시지가 터미널에 출력됩니다.
- **추가 정보 확인**: `ros2 topic info /chatter` 명령을 사용하여 메시지 타입과 interacting 하는 노드를 확인할 수 있습니다.

### 4. 토픽 빈도 측정
- **명령**: `ros2 topic hz /chatter`
- **실행 결과**: "talker" 노드가 "chatter" 토픽에서 메시지를 게시하는 빈도를 출력합니다.

### 5. 새로운 메시지 게시
- **명령**: `ros2 topic pub /chatter std_msgs/msg/String "data: 'Hello, ROS2!'"`

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- Ros2 CLI를 사용하여 사용 가능한 토픽을 모니터링하고 전송되는 데이터를 검사합니다.
- 간단한 노드를 실행하여 정기적으로 메시지를 게시하는 방법을 배웁니다.
- Ros2 CLI를 사용하여 시스템의 토픽을 모니터링하고 내용을 확인하는 방법을 학습합니다.
