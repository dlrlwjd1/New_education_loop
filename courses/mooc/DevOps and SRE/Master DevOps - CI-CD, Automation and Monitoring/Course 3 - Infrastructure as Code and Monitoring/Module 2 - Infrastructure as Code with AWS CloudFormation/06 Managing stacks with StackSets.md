# Managing stacks with StackSets

## 개요
- 여러 계정·리전에 인프라를 한 번에 배포하는 StackSets의 정의, 구성 요소, 이점, 동작 흐름과 라이프사이클을 정리.

## 내용
### StackSets란
- 하나의 CloudFormation 템플릿으로 **여러 AWS 계정과 리전**에 걸쳐 리소스를 배포할 수 있게 해주는 기능.
- 예: 계정 1~4에 각각 수동으로 스택을 만드는 대신, 한 번 정의한 StackSet이 네 개 계정에 동시에 롤아웃을 처리.

### 핵심 구성 요소
- **Stack Set** — 템플릿과 설정(전역 배포용).
- **Stack Instance** — 특정 계정·리전에 배포된 스택의 사본(복제본).
- **Administrator Account** — Stack Set을 소유·관리하는 별도의 AWS 계정.
- **Target Accounts** — 스택이 실제로 배포되는 대상 계정(조직 내 또는 연결된 설정으로 구성 가능).

### 이점
1. **전역 리소스 표준화 강제(Enforced Global Resource Standardization)** — 여러 계정·리전에 걸쳐 리소스의 일관성 보장.
2. **간소화된 멀티 계정 배포** — 중복 작업 방지, 설정 시간 단축 — 계정마다 반복 설정할 필요 없음.
3. **중앙 집중식 거버넌스** — Organizations를 이용해 중앙 관리자 계정에서 인프라 프로비저닝을 통제(예: 회사 전체에 표준 CloudWatch Log Group을 배포해 모든 애플리케이션 로그를 모니터링).

### 동작 흐름
- Administrator Account에서 Stack Set을 정의(어떤 계정·리전에 배포할지 설정 포함).
- 지정된 리전 내 여러 Target Account(A, B, C, D, E)가 각각 동일한 스택을 받음.
- 다른 리전(예: US East 1, EU West 1)에서도 동일한 구성이 적용되어, 하나의 관리자 계정이 여러 리전에 걸쳐 지리적 커버리지를 보장.

### 라이프사이클
1. **생성(Create)** — Stack Set이 생성되어 A, B, C, D 등 여러 계정에 다수의 스택으로 배포됨.
2. **업데이트(Update)** — 태그 등 변경 사항이 Stack Set에서 모든 계정·리전의 Stack Instance로 전파됨(예: EC2 인스턴스 타입을 T3.medium으로 변경하면 전 계정에 반영).
3. **삭제(Delete)** — Stack Set을 삭제하면 모든 계정에 존재하는 Stack Instance가 함께 자동으로 삭제됨(예: 4개 계정의 EC2 인스턴스가 한 번에 제거).

## 요약
- StackSets는 Administrator Account가 하나의 템플릿으로 여러 Target Account·리전에 Stack Instance를 배포·업데이트·삭제할 수 있게 해, 멀티 계정 환경에서 표준화된 인프라를 중앙에서 거버넌스하는 데 사용된다.
