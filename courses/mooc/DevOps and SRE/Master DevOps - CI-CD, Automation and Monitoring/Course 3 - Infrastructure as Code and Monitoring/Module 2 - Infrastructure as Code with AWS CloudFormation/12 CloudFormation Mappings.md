# CloudFormation Mappings

## 개요
- 정적 key-value 룩업 테이블인 CloudFormation Mappings의 용도, 문법, 제약 사항을 정리.

## 내용
### Mappings란
- 템플릿 내에서 조건부 값을 지정하기 위한 **정적 key-value 쌍**을 정의하는 기능 — YAML/JSON 안에 만드는 일종의 룩업 테이블(lookup table).

### 주요 사용 사례
1. **리전별 설정(Region-specific settings)** — AMI ID처럼 리전마다 값이 다른 경우.
2. **환경 기반 매핑(Environment-based mappings)** — 예: Dev 환경엔 `t2.micro`, Prod 환경엔 `t2.large` 사용.
3. **인스턴스 타입 지정** — 성능이나 비용(예산)에 따라 인스턴스 타입을 매핑.

### 기본 문법
```yaml
Mappings:
  RegionMap:
    us-east-1:
      InstanceType: t2.micro
```
- `Mappings` 아래 맵 이름(예: `RegionMap`)은 템플릿 내에서 고유해야 함.
- 참조 시 `Fn::FindInMap: [RegionMap, us-east-1, InstanceType]` 형태로 리전 이름과 키를 지정해 값을 조회.
- 하나의 맵 안에 여러 값을 정의할 수도 있음(예: 리전별로 AMI1, AMI2처럼 두 개 이상의 AMI ID를 두고, 리전 외 다른 조건까지 함께 고려해 어떤 AMI를 쓸지 선택 가능).

### 사용 시 고려 사항
- **Mappings는 Parameters, Pseudo Parameters, 다른 Intrinsic Function과 함께 사용할 수 없음** — 순수 정적 데이터 조회 용도로만 동작.
- 값이 **자주 바뀌지 않고 미리 정해진(predetermined)** 시나리오에 적합 — 예: AMI ID나 EC2 인스턴스 타입처럼 표준적이고 잘 바뀌지 않는 값.
- 값이 자주 바뀌는 **동적인 설정**이 필요하다면 Mappings 대신 Parameters 등 다른 메커니즘을 고려해야 함.

## 요약
- CloudFormation Mappings는 리전·환경·인스턴스 타입처럼 자주 바뀌지 않는 값을 담는 정적 key-value 룩업 테이블이며, `Fn::FindInMap`으로 조회하되 Parameters나 Intrinsic Function과 결합할 수 없고, 자주 변하는 동적 값에는 적합하지 않다.
