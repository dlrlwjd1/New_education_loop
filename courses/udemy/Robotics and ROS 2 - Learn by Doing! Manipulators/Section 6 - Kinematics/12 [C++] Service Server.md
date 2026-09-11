# [C++] Service Server

## 개요
- ROS 2 서비스의 기능 이해
- 서비스 서버와 클라이언트 개발
- Ros 2 명령어를 사용한 서비스 상호작용

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/37574434#overview)

## 내용
### 서비스 개념 이해
서비스는 요청과 응답을 통해 데이터를 교환하는 메커니즘이다. 서비스 서버는 요청을 받아 처리하고 결과를 반환하며, 클라이언트는 해당 결과를 사용한다.

### 서비스 서버 개발 단계
1. **서비스 인터페이스 정의**: 서비스가 사용할 메시지 인터페이스를 생성한다.
2. **서비스 서버 클래스 작성**: 서비스 서버 클래스를 작성하고, 해당 클래스에서 서비스를 초기화하고 실행하는 로직을 구현한다.
3. **메인 함수 작성**: 노드를 초기화하고 서비스 서버를 실행하며, 노드 종료 시 Ros 2를 정상적으로 종료한다.

### 서비스 클라이언트 개발
서비스 클라이언트는 서비스 서버에 요청을 보내고 결과를 받는 역할을 한다. 클라이언트도 메시지 인터페이스를 사용하여 데이터를 교환한다.

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

```cpp
// simple_service_server.cpp

#include <rclcpp/rclcpp.hpp>
#include "ardubot_messages/msg/add_joints.hpp"

using namespace std::chrono_literals;

class SimpleServiceServer : public rclcpp::Node
{
public:
    SimpleServiceServer()
        : Node("simple_service_server")
    {
        this->service_ = this->create_service<ardubot_messages::srv::AddJoints>(
            "add_two_ints",
            std::bind(&SimpleServiceServer::service_callback, this, std::placeholders::_1, std::placeholders::_2));
        RCLCPP_INFO(this->get_logger(), "Service 'add_two_ints' is ready");
    }

private:
    void service_callback(const std::shared_ptr<ardubot_messages::srv::AddJoints::Request> request,
                          const std::shared_ptr<ardubot_messages::srv::AddJoints::Response> response)
    {
        RCLCPP_INFO(this->get_logger(), "New request received: a=%d, b=%d", request->a, request->b);
        response->sum = request->a + request->b;
        RCLCPP_INFO(this->get_logger(), "Returning sum: %d", response->sum);
    }

    rclcpp::Service<ardubot_messages::srv::AddJoints>::SharedPtr service_;
};

int main(int argc, char * argv[])
{
    rclcpp::init(argc, argv);
    auto node = std::make_shared<SimpleServiceServer>();
    rclcpp::spin(node);
    rclcpp::shutdown();
    return 0;
}
```

## 요약
- 서비스는 요청과 응답을 통해 데이터를 교환하는 메커니즘이다.
- 서비스
