# [C++] Parameters

## 개요
- ROS 2 노드를 파라미터로 구성하고 동작을 변경하는 방법에 대해 학습합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/37484674#overview)

## 내용
### 파라미터의 의미
파라미터는 노드의 동작을 설정하거나 변경할 수 있는 변수입니다. 파라미터는 노드가 시작될 때 선언되고 초기화됩니다. 또한, 노드 실행 중에도 파라미터를 변경할 수 있습니다.

### 파라미터 클래스 정의
1. **파라미터 클래스 생성**:
   - `SimpleParameter`라는 이름의 새로운 클래스를 생성합니다.
   - 이 클래스는 `RTL CPP Node` 클래스를 상속받습니다.

2. **생성자 정의**:
   - `SimpleParameter` 클래스의 생성자는 노드가 시작될 때 자동으로 실행됩니다.
   - 생성자에서 `declare_parameter` 함수를 사용하여 파라미터를 선언합니다.

3. **파라미터 설정 콜백 함수**:
   - `add_on_set_parameters_callback` 함수를 사용하여 파라미터 변경 시 호출되는 콜백 함수를 정의합니다.
   - 이 콜백 함수에서는 파라미터가 변경될 때마다 정보 메시지를 출력하고, 결과를 반환합니다.

### 예시 코드
```cpp
#include "rclcpp/rclcpp.hpp"

using namespace rclcpp;

class SimpleParameter : public Node {
public:
    SimpleParameter() : Node("simple_parameter") {
        this->declare_parameter<int>("simple_int_param", 28);
        this->declare_parameter<std::string>("simple_string_param", "Antonio");

        this->add_on_set_parameters_callback(
            std::bind(&SimpleParameter::param_change_callback, this, std::placeholders::_1)
        );
    }

private:
    void param_change_callback(const std::vector<rclcpp::Parameter> &parameters) {
        for (const auto &parameter : parameters) {
            if (parameter.get_name() == "simple_int_param") {
                if (parameter.as_int() != 28 && parameter.type() == rclcpp::ParameterType::PARAMETER_INTEGER) {
                    RCLCPP_INFO(this->get_logger(), "Param simple_int_param changed. New value: %d", parameter.as_int());
                }
            } else if (parameter.get_name() == "simple_string_param") {
                if (parameter.as_string() != "Antonio" && parameter.type() == rclcpp::ParameterType::PARAMETER_STRING) {
                    RCLCPP_INFO(this->get_logger(), "Param simple_string_param changed. New value: %s", parameter.as_string().c_str());
                }
            }
        }
    }
};

int main(int argc, char *argv[]) {
    init(argc, argv);
    auto node = std::make_shared<SimpleParameter>();
    spin(node);
    rclcpp::shutdown();
    return 0;
}
```

## 요약
- 파라미터는 노드의 동작을 설정하거나 변경할 수 있는 변수입니다.
- `declare_parameter` 함수를 사용하여 파라미터를 선언하고 초기화합니다.
- `add_on_set_parameters_callback` 함수를 사용하여 파라미터 변경 시 호출되는 콜백 함수를
