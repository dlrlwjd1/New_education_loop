# Meta Arguments in Resources

## 개요
- Terraform 리소스의 동작 방식을 제어하는 5가지 Meta-argument(count, for_each, depends_on, provider, lifecycle)를 설명.

## 내용
### Meta-argument란
- Resource, Module, Provider 블록에 추가해 **동작 방식**(몇 개를 만들지, 언제·어떻게 만들지, 어떤 Provider를 쓸지)을 조정하는 특수 파라미터.
- 인프라 자체를 정의하는 게 아니라 Terraform의 **plan/apply 단계에서의 행동**을 제어한다.

### 1. `count`
- 동일한 설정(같은 AMI, 인스턴스 타입 등)으로 리소스를 여러 개(정수 값만큼) 생성.
- 예: `count = 3`이면 EC2 인스턴스 3개를 동일 구성으로 생성.

### 2. `for_each`
- key-value 쌍을 순회(loop)하며 리소스별로 **개별 설정**을 적용 — `count`보다 세밀한 제어(이름·AMI 등을 각각 다르게 지정) 가능.
- 예: 인스턴스 2개를 만들되 각각 다른 이름과 AMI를 지정.

### 3. `depends_on`
- 리소스 간 **명시적 의존성**을 정의 — 특정 순서로 생성/삭제되도록 보장.
- 예: VPC가 없으면 Subnet을 만들 수 없으므로, Subnet에 `depends_on = [aws_vpc.main]`을 지정해 VPC가 먼저 생성된 후에만 EC2/Subnet이 만들어지도록 보장.

### 4. `provider`
- 멀티클라우드/멀티리전 설정에서 어떤 Provider(별칭 포함)를 사용할지 지정.
- 예: 기본 Provider가 `us-east-1`이어도, `provider = aws.west`처럼 별칭(alias)이 붙은 Provider를 지정하면 해당 리소스만 `us-west-2`에 배포 가능.

### 5. `lifecycle`
- 리소스의 업데이트·삭제 방식을 커스터마이즈.
- `create_before_destroy = true` — 기존 리소스를 삭제하기 전에 새 리소스를 먼저 생성
- `prevent_destroy = false` — 리소스가 삭제되는 것을 막지 않음(true로 하면 실수로 삭제되는 것 방지 가능)

## 요약
- Meta-argument는 인프라 정의 자체가 아니라 Terraform이 리소스를 "몇 개, 어떤 순서로, 어떤 Provider로, 어떻게 업데이트·삭제"할지를 제어하는 특수 파라미터로, `count`/`for_each`(개수·반복), `depends_on`(순서), `provider`(대상 클라우드/리전), `lifecycle`(업데이트·삭제 정책)이 대표적이다.
