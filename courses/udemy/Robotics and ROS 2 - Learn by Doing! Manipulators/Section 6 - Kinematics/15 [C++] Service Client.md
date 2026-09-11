# [C++] Service Client

## 개요
- 이 강의는 [C++] Service Client의 핵심 개념과 구현 흐름을 다룬다.
- 세부 명령과 설정은 위 내용과 원본 강의에서 확인한다.
이 강의에서는 이전 실습에서 개발한 서비스 서버를 사용하여 두 정수의 합을 계산하는 C++ 노드를 만드는 방법에 대해 설명합니다. 이 노드는 서비스에 요청을 보내고, 서버가 실행을 완료하면 응답 메시지를 받습니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/37574442#overview)

## 내용
### 서비스 클라이언트 클래스 정의

우선, Arduino bot CP 예제 폴더 내에 새로운 스크립트를 생성합니다. 이 파일은 `Simple Service Client.cpp`로 이름을 지정합니다.

```cpp
#include "rclcpp/rclcpp.hpp"
#include "add_joints_interfaces/srv/add_joints.hpp"

using namespace std::chrono_literals;

class SimpleServiceClient : public rclcpp::Node
{
public:
    SimpleServiceClient()
        : Node("simple_service_client")
    {
        client_ = this->create_client<add_joints_interfaces::srv::AddJoints>("add_joints");
    }

private:
    rclcpp::Client<add_joints_interfaces::srv::AddJoints>::SharedPtr client_;
};
```

### 서비스 클라이언트 초기화

클라이언트를 초기화하는 데 필요한 코드를 추가합니다.

```cpp
int main(int argc, char * argv[])
{
    rclcpp::init(argc, argv);
    auto node = std::make_shared<SimpleServiceClient>();

    if (argc != 4)
    {
        RCLCPP_ERROR(rclcpp::get_logger("rclcpp"), "Wrong number of arguments. Usage: simple_service_client A B");
        return 1;
    }

    int a = std::stoi(argv[2]);
    int b = std::stoi(argv[3]);

    while (!node->client_->wait_for_service(1s))
    {
        if (!rclcpp::ok())
        {
            RCLCPP_ERROR(rclcpp::get_logger("rclcpp"), "Interrupted while waiting for service");
            return 1;
        }
        RCLCPP_INFO(rclcpp::get_logger("rclcpp"), "Service not available, waiting again...");
    }

    auto request = std::make_shared<add_joints_interfaces::srv::AddJoints::Request>();
    request->a = a;
    request->b = b;

    auto future_result = node->client_->async_send_request(request);

    rclcpp::spin_until_future_complete(node, future_result);

    if (future_result.get()->sum)
    {
        RCLCPP_INFO(rclcpp::get_logger("rclcpp"), "Service response: %d", future_result.get()->sum);
    }
    else
    {
        RCLCPP_ERROR(rclcpp::get_logger("rclcpp"), "Service failure");
    }

    rclcpp::shutdown();
    return 0;
}
```

### CMakeLists.txt 파일 업데이트

CMakeLists.txt 파일을 업데이트하여 새로운 실행 파일을 추가합니다.

```cmake
add_executable(simple_service_client src/SimpleServiceClient.cpp)
ament_target_dependencies(simple_service_client rclcpp add_joints_interfaces)

install(TARGETS
  simple_service_client
  DESTINATION lib/${PROJECT_NAME})
```

## 예시

### 코드 예시
서비스 클라이언트 클래스, 비동기 요청 처리, `CMakeLists.txt` 등록 예시는 위 `## 내용` 절에 실행 흐름 순서대로 정리돼 있다.

## 요약
- 이 강의는 [C++] Service Client의 핵심 개념과 구현 흐름을 다룬다.
- 세부 명령과 설정은 위 내용과 원본 강의에서 확인한다.
