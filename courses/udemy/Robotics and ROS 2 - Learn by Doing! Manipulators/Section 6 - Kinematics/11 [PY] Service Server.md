# [PY] Service Server

## 개요
- ROS 2 서비스 서버를 만드는 방법을 설명합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/37574430#overview)

## 내용
### 서비스의 의미와 목적
서비스는 클라이언트가 특정 작업을 요청하고, 서버가 해당 작업을 처리한 후 결과를 반환하는 메커니즘입니다. 이 예제에서는 두 정수의 합을 계산하는 서비스를 만듭니다.

### 서비스 서버 개발 단계
1. **Visual Studio Code에서 새로운 Python 스크립트 생성**
   - Arduino Pi 예제 패키지와 Arduino Pi Examples 앱 폴더 내에 새 Python 스크립트 `simple_service_server.py`를 만듭니다.

2. **필요한 라이브러리 임포트**
   ```python
   import rclpy
   from rclpy.node import Node
   ```

3. **서비스 서버 클래스 정의**
   - `SimpleServiceServer`라는 이름의 클래스를 만듭니다.
   - 클래스 생성자에서 노드 이름을 설정하고, 서비스 객체를 생성합니다.

4. **서비스 인터페이스 정의**
   - 새로운 메시지 타입을 위한 패키지를 만들고, 해당 패키지 내에 서비스 인터페이스 파일 `AddToInsertServe.msg`를 만듭니다.
   - 요청과 응답 메시지의 구조를 정의합니다.

5. **서비스 서버 생성**
   - `create_service` 함수를 사용하여 서비스 서버를 생성하고, 해당 서비스에 대한 콜백 함수를 등록합니다.

6. **메인 함수 정의**
   - 노드가 시작될 때 자동으로 실행되는 메인 함수를 정의합니다.
   - Ros 2 초기화, 서비스 서버 인스턴스 생성, 노드 유지 및 종료 로직을 포함합니다.

### 예시
원문에 나온 코드/명령/적용 예시는 다루지 않습니다.

## 요약
- ROS 2 서비스 서버를 만드는 기본 단계와 구현 방법을 설명합니다.
- 서비스 인터페이스의 정의와 콜백 함수의 등록 방법을 포함합니다.
