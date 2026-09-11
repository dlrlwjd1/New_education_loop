# 과제 1 - Add an RGB Camera to your Robot

## 개요
- ROS 2와 URDF를 사용하여 로봇 팔에 카메라를 통합하는 방법을 배우기
- 로봇의 능력을 확장하여 추가 센서(카메라)를 URDF 모델에 통합하기

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/practice/1509824#overview)

## 내용
### 핵심 내용
1. **ROS 2와 URDF 소개**
   - ROS 2(Robot Operating System 2)는 로봇 개발을 위한 플랫폼입니다.
   - URDF(Universal Robot Description Format)는 로봇의 구조를 설명하는 XML 형식의 파일입니다.

2. **카메라 통합 과정**
   - 카메라 센서를 로봇 팔에 통합하기 위해 URDF 모델을 수정해야 합니다.
   - 카메라의 위치와 방향을 정확하게 설정하여 로봇이 올바르게 인식할 수 있도록 해야 합니다.

3. **ROS 2 노드 작성**
   - ROS 2 노드를 사용하여 카메라 데이터를 처리하고 분석합니다.
   - 예시 코드를 통해 카메라 데이터를 받고, 이를 화면에 표시하는 방법을 배웁니다.

4. **실행 및 테스트**
   - 수정된 URDF 모델과 ROS 2 노드를 실행하여 카메라가 올바르게 작동하는지 확인합니다.
   - 테스트 결과를 기록하고, 문제가 있으면 수정하여 다시 실행합니다.

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

```python
# 카메라 데이터 처리 노드 예시
import rclpy
from rclpy.node import Node
from sensor_msgs.msg import Image

class CameraNode(Node):
    def __init__(self):
        super().__init__('camera_node')
        self.subscription = self.create_subscription(
            Image,
            'camera_topic',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('Received image data')

def main(args=None):
    rclpy.init(args=args)
    camera_node = CameraNode()
    rclpy.spin(camera_node)

    # Destroy the node explicitly
    # (optional - otherwise it will be done automatically
    # when the garbage collector destroys the node object)
    camera_node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## 요약
- ROS 2와 URDF를 사용하여 로봇 팔에 카메라를 통합하는 방법을 배웠습니다.
- 카메라 센서의 위치와 방향을 정확하게 설정하여 로봇이 올바르게 인식할 수 있도록 했습니다.
- ROS 2 노드를 사용하여 카메라 데이터를 처리하고 분
