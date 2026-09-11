# CloudFormation Conditions

## 개요
- 특정 기준에 따라 리소스 생성·설정을 제어하는 CloudFormation Conditions의 개념과 조건 Intrinsic Function(And, Equals, If, Not, Or, ForEach)을 정리.

## 내용
### Conditions란
- 템플릿 내에서 특정 조건(criteria)에 따라 리소스 생성·설정을 제어할 수 있게 해주는 기능 — 템플릿을 중복 작성하지 않고도 여러 환경에 맞게 적용 가능.
- 사용 이유: 유스케이스마다 별도 템플릿을 작성하지 않고 파라미터에 따라 기능을 켜고/끌 수 있으며, 환경이나 리전에 따라 값을 동적으로 설정.

### Conditions 문법
```yaml
Conditions:
  ConditionLogicalID: !<IntrinsicFunction>
```
- 각 Condition은 고유한 논리적 ID(Logical ID)를 가지며, Intrinsic Function으로 참/거짓을 평가.
- Resource 정의 안, Outputs 안, `Fn::If`와 결합한 값 제어에 사용 가능.

### Condition Intrinsic Functions
- **Fn::And** — 모든 조건이 참일 때만 true(조건 최소 2개, 최대 10개). 예: 환경이 `prod`이면서 모니터링이 활성화된 경우에만 true.
- **Fn::Equals** — 두 값을 비교해 같으면 true.
- **Fn::If** — 조건이 참/거짓인지에 따라 두 값 중 하나를 반환. Resource Properties, Outputs, Mappings 등에서 사용 가능. 예: `IsProd` 조건이 참이면 `t3.large`, 거짓이면 `t2.micro`를 인스턴스 타입으로 반환.
- **Fn::Not** — 주어진 조건의 반대를 반환(참 → 거짓, 거짓 → 참). 예: `NonProd` 조건을 `!Not [!Condition IsProd]`로 정의해 "Prod가 아니면" 로직을 표현.
- **Fn::Or** — 조건 중 하나라도 참이면 true, 모두 거짓이면 false(조건 최소 2개, 최대 10개).
- **Fn::ForEach** — 값 목록(리스트/컬렉션)을 순회하며 지정한 템플릿 조각을 각 항목에 적용. **네이티브 표준 Intrinsic Function이 아니라 매크로(macro) 변환을 통해서만 사용 가능**하다는 점에 유의. 고유한 루프 이름과 순회할 값 목록을 지정해 선언.

## 요약
- CloudFormation Conditions는 And/Equals/If/Not/Or 같은 Intrinsic Function으로 환경·파라미터에 따라 리소스 생성 여부와 설정 값을 동적으로 제어해 템플릿 중복을 피하게 해주며, ForEach는 유사한 역할을 하지만 표준 함수가 아니라 매크로를 통해서만 사용할 수 있다.
