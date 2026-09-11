# [PY] Parameters

## 개요
- 파라미터의 개념 이해
- 파라미터 선언 및 초기화
- 파라미터 변경 콜백 함수 구현
- 노드 실행 중 파라미터 변경

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/37492244#overview)

## 내용
### 파라미터 선언 및 초기화
파라미터는 노드가 동작하는 방식을 조정하는 중요한 요소입니다. 파라미터를 선언하고 초기화하려면 `declare_parameter` 함수를 사용합니다. 이 함수에는 파라미터 이름과 기본값이 필요합니다.

### 파라미터 변경 콜백 함수 구현
파라미터가 노드 실행 중에 변경될 수 있도록 `add_on_set_parameters_callback` 함수를 사용하여 콜백 함수를 정의할 수 있습니다. 이 콜백 함수는 파라미터가 변경될 때마다 호출되며, 새로운 값을 처리하고 결과를 반환해야 합니다.

### 노드 실행 중 파라미터 변경
노드가 실행 중일 때 파라미터를 변경하려면 `set_parameters_callback` 함수를 사용하여 콜백 함수를 정의합니다. 이 콜백 함수는 파라미터가 변경될 때마다 호출되며, 새로운 값을 처리하고 결과를 반환해야 합니다.

## 예시
```python
import rclpy
from rclpy.node import Node

class SimpleParameter(Node):
    def __init__(self):
        super().__init__('simple_parameter')
        self.declare_parameter('simple_int_param', 28)
        self.declare_parameter('simple_string_param', 'Antonio')

        self.add_on_set_parameters_callback(self.param_change_callback)

    def param_change_callback(self, params):
        result = rcl_interfaces.msg.SetParametersResult()
        for param in params:
            if param.name == 'simple_int_param':
                if isinstance(param.value, int):
                    self.get_logger().info(f'Param simple_int_param changed. New value is {param.value}')
                    result.successful = True
                else:
                    result.successful = False
            elif param.name == 'simple_string_param':
                if isinstance(param.value, str):
                    self.get_logger().info(f'Param simple_string_param changed. New value is {param.value}')
                    result.successful = True
                else:
                    result.successful = False
        return result

def main(args=None):
    rclpy.init(args=args)
    simple_parameter = SimpleParameter()
    rclpy.spin(simple_parameter)
    simple_parameter.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## 요약
- 파라미터는 노드의 동작 방식을 조정하는 중요한 요소입니다.
- `declare_parameter` 함수를 사용하여 파라미터를 선언하고 초기화합니다.
- `add_on_set_parameters_callback` 함수를 사용하여 파라미터 변경 콜백 함수를 정의합니다.
- 노드가 실행 중일 때 파라미터를 변경하려면 `set_parameters_callback` 함수를 사용하여 콜백 함수를 정의합니다.
