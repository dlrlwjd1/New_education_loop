# CloudFormation Parameters and Outputs

## 개요
- CloudFormation 템플릿에서 동적 입력값을 다루는 Parameters와, 스택 생성/업데이트 후 값을 반환하는 Outputs의 문법과 제약 사항을 정리.

## 내용
### Parameters란
- 스택 생성/업데이트 시점(runtime)에 템플릿에 전달되는 동적 입력값 — 템플릿 코드를 바꾸지 않고도 커스터마이징 가능(일종의 변수화).
- 목적: 템플릿을 재사용 가능하고 유연하게 만듦 — 인스턴스 타입, AMI ID, 환경 이름 등을 주입 가능.

### Parameters 문법
- 템플릿의 `Parameters` 섹션에 선언하며, 각 파라미터는 다음을 포함:
  - **논리적 ID(Logical ID)** — 템플릿 내에서 고유해야 함.
  - **Description, Type, Default(기본값), AllowedValues(허용값)**.
- 예시:
  ```yaml
  Parameters:
    InstanceTypeParameter:
      Type: String
      Default: t2.micro
      AllowedValues:
        - t2.micro
        - t2.small
  ```
  - 값을 전달하지 않으면 Default 값(`t2.micro`)이 사용되고, AllowedValues에 없는 값(예: `t2.medium`)은 지정할 수 없음.

### Parameters 일반 규칙
- 템플릿 하나당 **최대 200개**의 파라미터 제한.
- 파라미터 이름(논리적 ID)은 영숫자여야 하며 템플릿 내에서 고유해야 함.
- 타입은 String, Number, AWS 관련 특수 타입 등 CloudFormation이 지원하는 타입만 사용 가능.
- 값이 없으면 runtime에 값이 필요하며, Default가 있으면 Default 값 사용.
- 파라미터는 반드시 선언(Declaration)된 뒤 같은 템플릿의 Resources/Outputs 섹션에서 참조(Reference)되어야 함.

### Outputs란
- 스택 생성/업데이트 후 반환할 값을 정의하는 **선택적** 템플릿 항목.
- 목적:
  1. EC2 인스턴스의 Public IP, S3 버킷 이름 등 리소스 세부 정보 노출.
  2. **Cross-stack Reference** — 한 스택의 Output을 `Export`하고 다른 스택에서 `ImportValue`로 가져와 스택 간 값 공유 가능.

### Outputs 문법
- `Outputs` 섹션 아래 논리적 ID, Description, Value, (선택적으로) Export를 정의.
- 템플릿당 **최대 200개**의 Output 제한.
- 예: Load Balancer의 DNS 이름을 Description과 함께 Output하거나(`Value: !GetAtt BackupLoadBalancer.DNSName`), 특정 Condition(`CreateCloudResources`)이 참일 때 EC2 인스턴스 ID를 Description과 Value로 Output.

## 요약
- Parameters는 런타임에 값을 주입해 템플릿을 재사용 가능하게 만드는 입력 메커니즘(최대 200개, Type/Default/AllowedValues로 제약)이고, Outputs는 스택 생성 후 리소스 정보를 반환하거나 Export/ImportValue로 스택 간 참조를 가능하게 하는 출력 메커니즘(최대 200개)이다.
