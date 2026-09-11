# ROS 2 Actions

## 개요
1. **개념**: ROS 2 Actions는 주어진 작업을 완료할 때까지 지속적으로 진행되는 작업에 적합한 통신 프로토콜입니다.
2. **이유**: 자율주행 모듈과 같은 장기 실행 작업에서 작업의 진행 상황, 완료 여부를 실시간으로 알 수 있어 효율적인 제어가 가능합니다.
3. **절차**: Action Server와 Action Client가 통신하며, Goal, Feedback, Result 메시지를 통해 정보를 주고받습니다.
4. **주의점**: Action Client는 작업 중에 취소 요청을 할 수 있으며, Action Server는 안전하게 취소 요청을 처리해야 합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/49933319#overview)

## 내용
### ### Action의 구성 요소
1. **Goal Message**: Action 실행에 필요한 입력 데이터를 포함합니다. 예: 자율주행 모듈에서 목표 위치.
2. **Feedback Message**: 주기적으로 서버가 클라이언트에게 전송하여 작업 진행 상황을 업데이트합니다. 예: 도착 예정 시간, 남은 거리 등.
3. **Result Message**: 작업 완료 시 전송되며, 작업 성공 여부와 실패 원인을 포함합니다.

### ### Action의 동작 과정
1. **요청**: Action Client가 적절한 Goal 메시지를 통해 Action Server에 작업 실행 요청합니다.
2. **수행**: Action Server는 Goal 메시지를 받아 해당 작업을 수행합니다. 예: 로봇 이동.
3. **피드백**: 작업 중에는 주기적으로 Feedback 메시지를 전송하여 진행 상황을 알려줍니다.
4. **완료**: 작업 완료 시 Result 메시지를 전송하여 성공 여부를 알립니다.

### ### 취소 요청
1. **취소 가능성**: Action Client는 작업 중에 취소 요청을 할 수 있습니다.

## 예시
- 강의의 개념과 적용 맥락은 위 내용에 정리했으며, 구체적인 명령 실습은 관련 실습 강의에서 진행한다.

## 요약
- **개념**: ROS 2 Actions는 주어진 작업을 완료할 때까지 지속적으로 진행되는 작업에 적합한 통신 프로토콜입니다.
- **이유**: 자율주행 모듈과 같은 장기 실행 작업에서 작업의 진행 상황, 완료 여부를 실시간으로 알 수 있어 효율적인 제어가 가능합니다.
- **절차**: Action Server와 Action Client가 통신하며, Goal, Feedback, Result 메시지를 통해 정보를 주고받습니다.
- **주의점**: Action Client는 작업 중에 취소 요청을 할 수 있으며, Action Server는 안전하게 취소 요청을 처리해야 합니다.
