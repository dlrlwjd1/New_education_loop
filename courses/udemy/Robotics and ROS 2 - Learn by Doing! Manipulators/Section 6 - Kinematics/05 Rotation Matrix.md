# Rotation Matrix

## 개요
- 회전 행렬은 좌표계를 변환하는 데 사용됩니다.
- 기본 회전 행렬은 Z축, Y축, X축을 중심으로 각도로 회전하는 세 가지 행렬입니다.
- 로봇 팔 끝에 위치한 점 P의 좌표와 회전각을 사용하여 고정된 참조 프레임의 좌표를 계산할 수 있습니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/37574306#overview)

## 내용

1. **회전 행렬의 개념**
   - 회전 행렬은 좌표계를 변환하는 데 사용됩니다.
   - 예를 들어, 로봇 팔의 끝에 위치한 점 P의 좌표를 다른 참조 프레임으로 변환할 수 있습니다.

2. **회전 행렬의 구성**
   - 회전 행렬은 Z축, Y축, X축을 중심으로 각도로 회전하는 세 개의 기본 회전 행렬로 구성됩니다.
   - 이 세 가지 기본 회전 행렬은 각각 Roll(피트치), Pitch(롤), Yaw(요우)를 나타냅니다.

3. **좌표 변환 예시**
   - 로봇 팔 끝에 위치한 점 P의 좌표가 (1, 4, 2)이고, 이 점이 위치한 참조 프레임의 회전각이 각각 10도, 30도, 20도라고 가정하겠습니다.
   - 이러한 수치를 사용하여 회전 행렬을 작성하면, Z축으로 20도, Y축으로 30도, X축으로 10도 회전하는 세 개의 기본 회전 행렬이 구성됩니다.
   - 이 세 가지 기본 회전 행렬과 로봇 팔 끝에 위치한 점 P의 좌표를 곱하면, 점 P가 위치한 고정된 참조 프레임의 좌표가 계산됩니다.

## 예시
```python
import numpy as np

# 로봇 팔 끝에 위치한 점 P의 좌표
P_mobile = np.array([1, 4, 2])

# 회전각 (도)
roll = np.radians(10)
pitch = np.radians(30)
yaw = np.radians(20)

# 기본 회전 행렬 생성
R_z = np.array([[np.cos(yaw), -np.sin(yaw), 0],
                [np.sin(yaw), np.cos(yaw), 0],
                [0, 0, 1]])

R_y = np.array([[np.cos(pitch), 0, np.sin(pitch)],
                [0, 1, 0],
                [-np.sin(pitch), 0, np.cos(pitch)]])

R_x = np.array([[1, 0, 0],
                [0, np.cos(roll), -np.sin(roll)],
                [0, np.sin(roll), np.cos(roll)]])

# 회전 행렬 계산
R = R_z @ R_y @ R_x

# 좌표 변환
P_fixed = R @ P_mobile
print("Fixed reference frame coordinates:", P_fixed)
```

## 요약
- 회전 행렬은 좌표계를 변환하는 데 사용됩니다.
- 기본 회전 행렬은 Z축, Y축, X축을 중심으로 각도로 회전하는 세 가지 행렬입니다.
- 로봇 팔 끝에 위치한 점 P의 좌표와 회전각을 사용하여 고정된 참조 프레임의 좌표를 계산할 수 있습니다.
