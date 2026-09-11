# OOP Template for Your Nodes

## 개요

- 이후 강의에서 재사용할 Python과 C++ ROS 2 노드의 객체 지향(OOP) 기본 템플릿을 제공한다.
- 유형: 문서/활동
- 길이: 1분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305308#overview)

## 내용

- Python 노드는 `Node`를 상속한 클래스에서 노드 이름과 기능을 초기화한다.
- `main()`은 ROS 2 통신을 초기화하고 노드 객체를 만든 뒤 `spin()`으로 콜백을 처리한다.
- C++ 노드도 `rclcpp::Node`를 상속한 클래스와 같은 생명주기 구조를 사용한다.
- 템플릿의 클래스명과 노드 이름을 실제 기능에 맞게 변경해야 한다.
- 이후 강의는 이 공통 초기화 코드를 반복 작성하지 않고 템플릿에서 시작한다.

## 예시

```python
#!/usr/bin/env python3

import rclpy
from rclpy.node import Node


class MyCustomNode(Node):
    def __init__(self):
        super().__init__("node_name")


def main(args=None):
    rclpy.init(args=args)
    node = MyCustomNode()
    rclpy.spin(node)
    rclpy.shutdown()


if __name__ == "__main__":
    main()
```

```cpp
#include "rclcpp/rclcpp.hpp"

class MyCustomNode : public rclcpp::Node
{
public:
  MyCustomNode() : Node("node_name")
  {
  }
};

int main(int argc, char ** argv)
{
  rclcpp::init(argc, argv);
  auto node = std::make_shared<MyCustomNode>();
  rclcpp::spin(node);
  rclcpp::shutdown();
  return 0;
}
```

## 요약

- Python과 C++ 노드는 초기화, 객체 생성, 스핀, 종료라는 공통 생명주기를 가진다.
- 실제 노드를 만들 때 클래스명과 노드 이름을 반드시 기능에 맞게 바꾼다.
- 공통 템플릿을 재사용하면 이후 강의에서 새 기능 구현에 집중할 수 있다.
