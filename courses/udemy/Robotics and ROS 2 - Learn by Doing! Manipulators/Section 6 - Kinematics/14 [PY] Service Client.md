# [PY] Service Client

## 개요

- 앞 실습에서 만든 **service server**(두 정수를 더하는 서비스)를 호출하는 **Python service client** 노드를 만든다.
- 클라이언트는 서비스가 정의한 인터페이스 형식에 맞춰 **request**를 보내고, 서비스 실행이 끝나면 **response** 메시지로 알림을 받는다.
- C++ 개발에만 관심이 있다면 이 강의를 건너뛰고 같은 클라이언트를 C++로 만드는 다음 강의로 가도 된다.

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/37574438#overview)

## 내용

### 새 스크립트 생성

`arduinobot_py_examples` 하위 폴더 안에 새 스크립트를 만들고 이름을 `simple_service_client.py`로 한다.

### 필요한 모듈 import

- `rclpy` 라이브러리를 import 한다.
- `rclpy.node` 모듈에서 **`Node` 클래스**를 import 한다. 새 ROS 2 노드를 정의할 때 사용한다.
- 앞서 정의한 인터페이스 패키지에서 **메시지와 서비스**를 import 한다. 여기서는 `AddTwoInts` 서비스 인터페이스를 가져와 서버와 통신하는 데 사용한다.

### 클래스 정의

- `Node` 클래스를 상속하는 **`SimpleServiceClient`** 클래스를 만든다.
- 생성자(`__init__`)를 정의하고 첫 번째 인자로 `self`를 받는다.
- 생성자 안에서 **기반 클래스(`Node`)의 생성자를 호출**하고, 노드에 부여할 이름을 넘긴다 — 여기서는 `simple_service_client`.
- 생성자는 **더할 두 숫자 `a`, `b`를 입력 파라미터로 추가로 받는다.** 이 두 값이 서버로 보낼 request 메시지에 담긴다.

### 클라이언트 객체 생성

service server를 초기화할 때 `Node` 클래스의 **`create_service`** 함수를 썼던 것처럼, 클라이언트는 **`create_client`** 함수로 만든다. `create_client`는 두 가지를 입력으로 받는다.

| 입력 | 설명 |
|---|---|
| **메시지 인터페이스 타입** | 서비스 서버와 통신할 때 사용할 인터페이스. 여기서는 `AddTwoInts` |
| **서비스 이름** | ROS 2에서 서버가 인식되는 이름. 앞 강의에서 service server를 초기화할 때 `add_two_ints`로 지었다 |

### 서버가 살아 있는지 먼저 확인

클라이언트로 실제 request를 보내기 전에, **서버가 실행 중이고 새 request를 받을 수 있는 상태인지 먼저 확인**한다.

- 클라이언트 객체의 **`wait_for_service`** 함수를 사용한다.
- 기다릴 시간을 지정할 수 있다 — 여기서는 **timeout 1.0초**.
- `wait_for_service` 호출이 정상적으로 완료될 때까지 기다린다. 예를 들어 서비스가 아직 준비되지 않았다면 1초 뒤에 다시 기다린다. **서버가 준비될 때까지 무한히 반복해서 기다린다.**
- 기다리는 동안 서버가 준비되지 않았을 때마다 **안내 메시지를 출력**한다.

> **주의**: 이 노트의 원본 트랜스크립트는 안내 메시지 출력 부분에서 끊겨 있다. 이후 request 메시지를 채워 `call_async`로 호출하고 응답을 처리하는 부분은 원본 강의 영상을 확인해야 한다.

## 예시

강의에서 설명한 부분까지를 코드로 옮기면 다음과 같다.

```python
import rclpy
from rclpy.node import Node

from arduinobot_msgs.srv import AddTwoInts


class SimpleServiceClient(Node):
    def __init__(self, a, b):
        super().__init__("simple_service_client")

        # create_client(인터페이스 타입, 서비스 이름)
        self.client = self.create_client(AddTwoInts, "add_two_ints")

        # 서버가 준비될 때까지 1초 간격으로 무한히 대기
        while not self.client.wait_for_service(timeout_sec=1.0):
            self.get_logger().info("Service not available, waiting again...")
```

## 요약

- `create_service`가 서버를 만들듯, **`create_client`가 클라이언트를 만든다.** 둘 다 **인터페이스 타입**과 **서비스 이름**을 인자로 받는다.
- 서비스 이름은 서버 초기화 때 정한 이름(`add_two_ints`)과 **정확히 같아야** 한다.
- request를 보내기 전에 **`wait_for_service(timeout_sec=1.0)`** 로 서버 가용성을 확인하고, 준비될 때까지 안내 메시지를 남기며 반복 대기한다.
- 클라이언트는 서비스 인터페이스가 정의한 형식으로 request를 보내고, 실행이 끝나면 response로 결과를 통보받는다.
