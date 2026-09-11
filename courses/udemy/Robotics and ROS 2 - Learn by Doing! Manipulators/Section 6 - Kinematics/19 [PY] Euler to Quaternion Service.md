# [PY] Euler to Quaternion Service

## 개요
- ROS 2의 TF2 라이브러리를 사용하여 오일러 각도와 쿼터니언 간의 변환을 수행하는 Python 서비스를 만드는 방법에 대해 설명합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/37574620#overview)

## 내용
### 쿼터니언과 오일러 각도의 이해
- 쿼터니언은 회전을 표현하는 데 사용되는 4차원 벡터입니다.
- 오일러 각도는 회전을 세 개의 각도로 분해하여 표현합니다.

### 서비스 서버 설정
- ROS 2에서 서비스 서버를 생성하려면 `ros2 service create` 명령어를 사용합니다.
- 이 명령어는 서비스 이름, 요청 메시지 타입, 응답 메시지 타입을 지정해야 합니다.

### 쿼터니언到 오일러 각도 변환
- `tf_transformations` 라이브러리를 사용하여 쿼터니언을 오일러 각도로 변환합니다.
- 이 라이브러리는 ROS 2에서 회전 변환에 필수적입니다.

### 오일러 각도到 쿼터니언 변환
- `tf_transformations` 라이브러리를 사용하여 오일러 각도를 쿼터니언으로 변환합니다.
- 이 변환은 회전 정보를 효율적으로 저장하고 전달하는데 중요합니다.

## 예시
```python
# angle_conversion.py

import rclpy
from rclpy.node import Node
from std_srvs.srv import SetBool, SetBoolRequest, SetBoolResponse
from geometry_msgs.msg import Quaternion
from tf_transformations import euler_from_quaternion, quaternion_from_euler

class AngleConverter(Node):
    def __init__(self):
        super().__init__('angle_conversion_service_server')
        self.service = self.create_service(SetBool, 'euler_to_quaternion', self.euler_to_quaternion_callback)
        self.get_logger().info('Euler to Quaternion service is ready')

    def euler_to_quaternion_callback(self, request: SetBoolRequest):
        if not request.data:
            return SetBoolResponse(success=False, message='Invalid input')

        roll = request.value
        pitch = 0.0
        yaw = 1.5

        quaternion = quaternion_from_euler(roll, pitch, yaw)
        response = SetBoolResponse(success=True, message=f'Quaternion: {quaternion}')
        self.get_logger().info(f'Requested Euler angles: roll={roll}, pitch={pitch}, yaw={yaw}')
        self.get_logger().info(f'Converted Quaternion: {quaternion}')

        return response

def main(args=None):
    rclpy.init(args=args)
    angle_converter = AngleConverter()
    rclpy.spin(angle_converter)
    angle_converter.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## 요약
- ROS 2의 TF2 라이브러리를 사용하여 오일러 각도와 쿼터니언 간의 변환 서비스를 만듭니다.
- `tf_transformations` 라이브러리를 활용하여 회전 변환을 수행합니다.
- 서비스 서버는 요청 메시지를 받아서 응답 메시지를 반환하며, 오일러 각도와 쿼터니언 간의 변환 로직을 구현합니다.
