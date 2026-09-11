# Project Solution [6/6]

## 개요

- 하드코딩된 설정을 파라미터로 바꾸고 런치 파일과 YAML 파일로 프로젝트 전체를 한 번에 실행한다.
- 유형: 동영상
- 길이: 14분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21306720#overview)
- 첨부 자료: final_project_step6.zip

## 내용

- `turtle_controller`의 대상 선택 방식을 `catch_closest_turtle_first` 불리언 파라미터로 만든다.
- `turtle_spawner`에는 새 거북이 이름의 접두사인 `turtle_name_prefix`와 생성 주기인 `spawn_frequency`를 추가한다.
- 각 파라미터를 선언한 뒤 `get_parameter(...).value`로 읽어 기존 하드코딩 값 대신 사용한다.
- bringup 패키지의 `launch/` 디렉터리에 XML 런치 파일을 만들고 `turtlesim_node`, `turtle_controller`, `turtle_spawner`를 등록한다.
- 두 사용자 노드의 파라미터는 YAML 설정 파일에 노드별 `ros__parameters` 구조로 저장한다.
- 런치 파일이 YAML 설정을 로드하도록 연결하면 하나의 명령으로 동일한 구성을 반복 실행할 수 있다.
- bringup 패키지의 `package.xml`에는 런치 파일에서 사용하는 패키지를 실행 의존성으로 추가한다.

## 예시

```yaml
/turtle_controller:
  ros__parameters:
    catch_closest_turtle_first: true

/turtle_spawner:
  ros__parameters:
    turtle_name_prefix: "my_turtle"
    spawn_frequency: 1.5
```

```bash
ros2 launch my_robot_bringup turtlesim_catch_them_all.launch.xml
```

## 요약

- 파라미터는 제어 정책, 이름, 생성 빈도를 코드 수정 없이 바꿀 수 있게 한다.
- YAML은 여러 노드의 설정을 재사용 가능한 파일로 분리한다.
- 런치 파일은 세 노드와 설정을 하나의 확장 가능한 애플리케이션 실행 단위로 묶는다.
