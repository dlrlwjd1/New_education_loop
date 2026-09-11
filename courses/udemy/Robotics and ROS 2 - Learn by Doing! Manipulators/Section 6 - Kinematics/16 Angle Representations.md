# Angle Representations

## 개요
- TF2 라이브러리에서 공간에서 참조 프레임의 방향을 표현하는 두 가지 방법
- 회전 행렬과 요르단 각(Quaternion)의 사용
- 컴퓨터 과학에서 회전 행렬보다는 요르단 각이 선호되는 이유

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/37574612#overview)

## 내용
### 1. 회전 행렬과 요르단 각의 이해
- 초기에는 회전 행렬을 사용하여 참조 프레임의 방향을 세 개의 기본 구성 요소로 분해할 수 있음 (Z, Y, X축에 대한 세 가지 원소 회전)
- 이러한 세 가지 각은 요르단 각(Euler angles)으로 알려져 있으며, 3D 공간에서 물체의 방향을 간단하고 직관적으로 표현할 수 있음

### 2. 실습: 요르단 각 사용
```python
import tf2_ros
import geometry_msgs.msg

# TF2 버퍼 설정
tf_buffer = tf2_ros.Buffer()
listener = tf2_ros.TransformListener(tf_buffer)

# 참조 프레임 간의 변환 요청
try:
    trans = tf_buffer.lookup_transform('base_link', 'camera_link', rospy.Time())
except (tf2_ros.LookupException, tf2_ros.ConnectivityException, tf2_ros.ExtrapolationException):
    print("Transform not available")
    sys.exit(1)

# 요르단 각 계산
roll, pitch, yaw = euler_from_quaternion([trans.transform.rotation.x,
                                         trans.transform.rotation.y,
                                         trans.transform.rotation.z,
                                         trans.transform.rotation.w])
```

### 3. 요르단 각의 단점
- 축전환 문제(Axis-Angle Ambiguity): 세 가지 요르단 각이 동일한 방향으로 회전할 수 있음
- 계산 복잡성: 회전 행렬보다 더 많은 연산이 필요함

### 4. 요르단 각의 장점
- 축전환 문제 해결: 축전환 문제를 완화하여 더욱 정확한 변환을 가능하게 함
- 계산 효율성: 회전 행렬보다 적은 연산으로 동일한 결과를 얻을 수 있음

## 예시
위 코드는 `base_link`와 `camera_link` 간의 변환을 요청하고, 해당 변환을 요르단 각으로 변환하는 과정을 보여줍니다.

## 요약
- 회전 행렬과 요르단 각은 참조 프레임의 방향을 표현하는 두 가지 방법
- 요르단 각은 축전환 문제를 해결하고 계산 효율성이 높아 컴퓨터 과학에서 선호됨
