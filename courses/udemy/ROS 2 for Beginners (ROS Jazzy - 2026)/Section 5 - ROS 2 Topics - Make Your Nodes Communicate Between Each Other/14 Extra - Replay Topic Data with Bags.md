# Extra: Replay Topic Data with Bags

## 개요

- ROS 2 토픽 데이터 재생을 위한 ROS 2 Bags 사용법을 배운다.
- 유형: 동영상
- 길이: 10분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/48733693#overview)

## 내용

- ROS 2 Bags는 토픽 데이터를 저장하고 재생할 수 있는 도구이다.
- 실제로 토픽 데이터를 저장하려면 ros2 bag record 명령어를 사용한다.
- 데이터를 재생하려면 ros2 bag play 명령어를 사용한다.
- ROS 2 Bags는 여러 개의 토픽을 동시에 저장하거나 모든 토픽을 기록할 수 있다.
- ROS 2 Bags 정보를 확인하려면 ros2 bag info 명령어를 사용한다.

## 예시

- ros2 bag record /number_count
- ros2 bag play test
- ros2 bag record -o test2 /number_count /number

## 요약

- ROS 2 Bags는 토픽 데이터를 저장하고 재생하는 데 매우 유용하다.
- ros2 bag record 명령어로 데이터를 저장하고 ros2 bag play 명령어로 재생한다.
- ROS 2 Bags는 여러 개의 토픽을 동시에 기록하거나 모든 토픽을 기록할 수 있다.
