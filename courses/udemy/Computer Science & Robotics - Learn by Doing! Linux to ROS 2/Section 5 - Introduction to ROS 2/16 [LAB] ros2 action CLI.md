# [LAB] ros2 action CLI

## 개요
이 실습에서는 ROS 2에서 사용 가능한 마지막 통신 메커니즘인 진실한 액션에 대해 탐구합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/49933333#overview)

## 내용
### 액션 서버 시작하기
1. **새로운 터미널 열기**
   ```bash
   ros2 run action_tutorials_cpp fibonacci_action_server
   ```
2. **피보나치 수열 계산**
   피보나치 수열을 원하는 순서까지 계산합니다.

### 액션 서버와 클라이언트 이해
1. **액션 서버 시작**
   ```bash
   ros2 run action_tutorials_cpp fibonacci_action_server
   ```
2. **피보나치 수열 계산**
   피보나치 수열을 원하는 순서까지 계산합니다.

### 액션 서버와 클라이언트의 역할
- **액션 서버**: 특정 기능을 제공하는 서버입니다.

## 예시
### 피보나치 수열 계산
```bash
ros2 run action_tutorials_cpp fibonacci_action_server
```

### 액션 정보 확인
```bash
ros2 action list
```
- 출력: `fibonacci/Fibonacci`

### 인터페이스 타입 확인
```bash
ros2 interface type action/fibonacci
```
- 출력: `action_tutorials_interfaces/action/Fibonacci`

### 액션 목표 보여주기
```bash
ros2 interface show action_tutorials_interfaces/action/Fibonacci
```
- 출력:
  ```yaml
  # Goal definition
  int32 order
  ---
  # Result definition
  int32[] sequence
  ---
  # Feedback definition
  int32[] partial_sequence
  ```

### 액션 목표 보내기
```bash
ros2 action send_goal fibonacci/Fibonacci "order: 20"
```
- 출력:
  ```
  Goal accepted with ID: <goal_id>
  Result received: sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
```
## 요약
- **액션 서버**: 특정 기능을 제공하는 서버입니다.
- **액션 클라이언트**: 해당 기능을 사용하려는 클라이언트입니다.
- 출력: `fibonacci/Fibonacci`
