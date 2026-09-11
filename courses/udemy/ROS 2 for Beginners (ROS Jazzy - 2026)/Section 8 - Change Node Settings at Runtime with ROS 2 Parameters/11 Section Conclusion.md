# Section Conclusion

## 개요

- ROS 2 파라미터를 사용하여 노드 설정을 런타임에 변경하는 방법을 배웠습니다.
- 유형: 문서/활동
- 길이: 1분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21306412#overview)
- 첨부 자료: code_end_section8.zip

## 내용

- ROS 2 파라미터의 개념과 이점에 대해 설명했습니다.
- 파라미터를 사용하면 코드 수정 없이 설정을 변경할 수 있습니다.
- 노드 시작 시 파라미터 값을 설정하고, 노드 코드에서 파라미터 값 가져와 사용합니다.
- YAML 파일을 사용하여 여러 노드의 파라미터를 저장할 수 있습니다.
- 노드 시작 시 YAML 파일 로드하여 파라미터 설정을 적용합니다.

## 예시

- 파라미터 선언: `declare_parameter('parameter_name', default_value)`
- 파라미터 값 가져오기: `get_parameter('parameter_name')`
- YAML 파일 예시: `parameters.yaml`

## 요약

- 파라미터를 사용하여 노드 설정을 런타임에 변경할 수 있습니다.
- 노드 시작 시 파라미터 값을 설정하고, 코드에서 사용합니다.
- YAML 파일을 통해 여러 노드의 파라미터를 효율적으로 관리할 수 있습니다.
