# Working with AWS Step Functions

## 개요
- AWS Step Functions의 Hello World 예제를 살펴본 뒤, 두 개의 Lambda 함수(`PreMarco`, `PostMarco`)를 직접 만들어 "Marco Polo" 패턴으로 오케스트레이션하는 8분 실습 — 이후 나올 Marco Polo 파이프라인 챌린지/랩의 기초가 되는 핵심 데모.

## 내용

### Step Functions Hello World 예제
- Step Functions는 AWS의 여러 부분을 오케스트레이션하기에 이상적이며, 일련의 선택(choice)을 **시각적으로 설계**한 뒤 파이프라인으로 실행하고 훌륭한 계측(instrumentation)을 받을 수 있음.
- "Get Started" 가이드의 Hello World 예제는 JSON으로 상태(state)들을 정의: Pass → "Hello World 예제인가?" → 3초 대기 → Hello World 실행 → 최종 상태로 종료.
- "Create state machine" → 실행하면 각 단계가 어떻게 진행되는지 상세히 보여주고, 결과도 바로 확인 가능.

### 직접 Lambda 함수 2개 만들기
1. **PreMarco** 함수(Python): payload에서 `name`이 `"Marco"`이면 `"Polo"`를 반환, 아니면 `"No"`를 반환.
   - 테스트 이벤트 `{"name": "Marco"}` → `"Polo"` 반환 확인.
2. **PostMarco** 함수(Python): `name`이 `"Polo"`이면 축하 메시지("Great job") 반환, 아니면 "계속 시도하라"는 메시지 반환 — 복잡한 데이터 파이프라인을 시뮬레이션하는 두 번째 단계 역할.
   - `PreMarco`의 출력 형식(`{"name": "Polo"}` 또는 `{"name": "No"}`)이 `PostMarco`의 입력 형식과 일치하도록 두 함수의 시그니처를 맞춰줌.
   - `{"name": "Bob"}` 같은 다른 입력으로도 테스트해 "No" 응답을 확인.

### Step Functions로 두 Lambda 연결하기
- Step Functions에서 새 상태 머신(state machine)을 **시각적으로** 정의: 첫 번째 상태 "Lambda Invoke"(설명: "Process Marco Polo messages") → `PreMarco` Lambda 지정 → 그 출력을 두 번째 상태 "Lambda Invoke"로 전달 → `PostMarco` Lambda 지정.
- 상태 머신 이름을 `PrePostMarco`로 저장하고 생성.

### 실행과 검증
- **입력 `{"name": "Marco"}`**로 실행(New execution) → 첫 Lambda(`PreMarco`)가 `{"name": "Polo"}`를 출력 → 두 번째 Lambda(`PostMarco`)가 `"Great job"`을 출력하는 체인 리액션을 실시간으로 확인(각 단계의 input/output 조회 가능).
- **입력 `{"name": "Bob"}`**으로 다시 실행 → 첫 Lambda가 `{"name": "No"}` 반환 → 두 번째 Lambda가 `"Keep Trying"` 반환.

### 핵심 통찰
- Marco Polo 스타일의 이 간단한 2단계 파이프라인은 Step Functions의 개념을 익히는 좋은 출발점이며, 이를 이해하고 나면 훨씬 더 복잡한 데이터 수집·처리 워크플로도 동일한 패턴으로 구축할 수 있음.

## 예시
```python
# PreMarco Lambda
def lambda_handler(event, context):
    if event['name'] == 'Marco':
        return {'name': 'Polo'}
    return {'name': 'No'}
```

```python
# PostMarco Lambda
def lambda_handler(event, context):
    if event['name'] == 'Polo':
        return "Great job"
    return "Keep Trying"
```

```json
// Step Functions 상태 머신 구조 (개념 구조)
{
  "StartAt": "InvokePreMarco",
  "States": {
    "InvokePreMarco": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:...:function:PreMarco",
      "Next": "InvokePostMarco"
    },
    "InvokePostMarco": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:...:function:PostMarco",
      "End": true
    }
  }
}
```

## 요약
- Step Functions는 여러 Lambda 함수를 시각적으로 정의된 상태 머신으로 연결해 순차 실행하며 각 단계의 input/output을 계측해주는 서비스이며, "Marco"→"Polo"→"Great job"으로 이어지는 2단계 체인이 이후 등장할 Marco Polo 파이프라인 프로그래밍 챌린지와 랩의 기반이 된다.
