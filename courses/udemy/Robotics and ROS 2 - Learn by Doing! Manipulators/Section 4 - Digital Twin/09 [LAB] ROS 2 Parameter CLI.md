# [LAB] ROS 2 Parameter CLI

## 개요

- 실행 중인 노드의 파라미터(parameter)를 CLI로 조회하고 변경한다.
- 시작 시 기본값을 덮어쓰는 방법과 실행 중 값을 변경하는 방법을 비교한다.
- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/37727500#overview)
- 확인일: 2026-09-06 · Chrome 확장에서 실제 트랜스크립트 확인.

## 내용

### 노드 실행과 파라미터 조회

워크스페이스의 `install/setup.bash`를 source한 뒤 앞 강의에서 만든 파라미터 노드를 실행한다. 강의는 C++ 구현을 사용하며 Python 구현으로도 진행할 수 있다고 안내한다. `ros2 param list`는 실행 중인 노드별 파라미터 목록을 보여준다. 예제 노드에는 직접 선언한 정수·문자열 파라미터와 ROS 2가 제공하는 기본 파라미터가 나타난다.

`ros2 param get`에 노드 이름과 파라미터 이름을 전달하면 값과 타입을 읽을 수 있다. 강의의 정수 기본값은 `28`, 문자열 기본값은 `Antonio`다.

### 시작 시 기본값 덮어쓰기

노드를 종료한 뒤 실행 명령에 `--ros-args -p`로 파라미터를 전달한다. 강의는 정수 값을 `30`으로 설정하고, 다시 조회해 코드의 기본값 `28`이 덮어써졌음을 확인한다.

### 실행 중 변경과 콜백

`ros2 param set`은 실행 중인 노드의 파라미터를 바꾼다. 강의는 문자열을 변경하고, 앞 강의에서 구현한 콜백이 호출되어 노드 로그에 새 값이 출력되는 것을 확인한다. 이어 `get`으로 변경된 값을 다시 읽는다. 노드를 재시작하지 않고도 변경할 수 있다는 점이 핵심이다.

## 예시

앞선 Parameters 강의의 `/simple_parameter` 노드를 실행한 상태에서 사용한다. 식별자 표기는 같은 섹션의 Python·C++ 노트와 대조했다.

```bash
ros2 param list
ros2 param get /simple_parameter simple_int_param
ros2 param get /simple_parameter simple_string_param
ros2 param set /simple_parameter simple_string_param 'ROS 2'
ros2 param get /simple_parameter simple_string_param
```

정수 값을 시작 시 덮어쓰려면 해당 노드 실행 명령 끝에 `--ros-args -p simple_int_param:=30`을 붙인다. `ros2 param` 다음에 Tab을 두 번 눌러 다른 파라미터 명령도 탐색할 수 있다.

## 요약

- `list`는 파라미터 목록, `get`은 현재 값, `set`은 실행 중 값 변경에 사용한다.
- `--ros-args -p`는 노드 시작 시 기본값을 덮어쓴다.
- 변경 콜백과 재조회를 통해 새 값이 적용되었는지 확인한다.
