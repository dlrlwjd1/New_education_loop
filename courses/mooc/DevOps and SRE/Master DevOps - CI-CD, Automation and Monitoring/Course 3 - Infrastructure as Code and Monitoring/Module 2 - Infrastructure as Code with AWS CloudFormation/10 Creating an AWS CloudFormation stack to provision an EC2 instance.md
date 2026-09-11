# Creating an AWS CloudFormation stack to provision an EC2 instance

## 개요
- Parameters(인스턴스 타입), Mappings(AMI), Outputs(인스턴스 ID·Public IP)를 함께 사용해 EC2 인스턴스를 CloudFormation으로 배포하는 실습.

## 내용
### 템플릿 구성 (`ec2-stack.yml`)
- **Parameters**: EC2 인스턴스 타입을 파라미터로 받고, AllowedValues로 3가지 값만 허용.
- **Resources**: AWS::EC2::Instance 리소스 생성 — `InstanceType`은 Parameters를 참조, `ImageId`는 `Fn::FindInMap`으로 Mappings에서 리전별 AMI를 조회, `Tags`로 이름을 `demo-ec2-instance`로 지정.
- **Mappings**: 리전별 AMI ID 정의 — 실습에서는 `us-east-1` 리전의 AMI 사용(다른 리전이면 해당 리전에서 사용 가능한 AMI로 교체 필요).
- **Outputs**: 인스턴스 ID와 Public IP 두 가지를 출력.

### 스택 생성
1. CloudFormation 콘솔 → **Create stack** → **With new resources**.
2. 템플릿 파일(`ec2-stack.yml`) 업로드 후 Next.
3. 스택 이름을 `ec2-demo`로 지정, Parameters 화면에서 인스턴스 타입 선택(기본값 `t2.micro` 그대로 사용, 나열된 값 중 첫 번째가 기본으로 채워짐).
4. Stack 옵션은 기본값 유지 → 리뷰 → 생성.
5. `CREATE_IN_PROGRESS` → EC2 인스턴스(`demo-ec2-instance`) 설정 완료 → `CREATE_COMPLETE`.
6. Outputs 탭에서 인스턴스 ID와 Public IP 확인.

### 검증 및 정리
- EC2 콘솔에서 `demo-ec2-instance`를 확인하고, 스택 Output의 IP와 실제 인스턴스의 Public IP가 일치하는지 검증.
- 실습 후에는 반드시 **스택을 삭제**해 리소스를 정리 — 인스턴스를 계속 실행 상태로 두지 않도록 함. `DELETE_IN_PROGRESS` 후 스택이 목록에서 사라지는 것으로 삭제 완료 확인.

## 요약
- Parameters로 인스턴스 타입을 선택 가능하게 하고 Mappings로 리전별 AMI를 자동 조회하도록 구성한 템플릿을 업로드해 EC2 인스턴스를 생성하고, Outputs로 인스턴스 ID·Public IP를 확인한 뒤 실습이 끝나면 스택을 삭제해 리소스를 정리한다.
