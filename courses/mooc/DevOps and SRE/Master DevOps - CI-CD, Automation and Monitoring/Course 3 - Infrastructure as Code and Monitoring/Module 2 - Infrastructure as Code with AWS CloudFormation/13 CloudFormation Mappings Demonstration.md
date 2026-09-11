# CloudFormation Mappings Demonstration

## 개요
- 이전 EC2 배포 템플릿의 AMI ID를 하드코딩 대신 Mappings로 리팩터링해 스택을 재배포하는 실습.

## 내용
### 템플릿 수정
- 기존 `ec2-stack.yml`에서 AMI ID를 직접 지정하는 대신, Parameters 앞에 **Mappings 설정**을 추가.
- 리전(`us-east-1`)과 그 리전에서 사용 가능한 AMI ID를 key-value로 매핑.
- Resources의 `ImageId` 속성을 하드코딩된 값 대신 `Fn::FindInMap`으로 변경 — `RegionMap`, 리전(예: `us-east-1`을 직접 지정하거나 `AWS::Region` 참조), AMI 키를 지정해 값을 조회하도록 구성.
- 오타(리전 이름 등)를 수정한 뒤 저장.

### 스택 배포
1. CloudFormation 콘솔 → **Create stack** → **Existing template** → `ec2-stack.yml` 업로드 → Next.
2. Parameters에서 인스턴스 타입은 기본값 `t2.micro` 유지, 스택 이름은 `ec2-demo`로 지정.
3. Stack 옵션 기본값 유지 → 리뷰 → 제출.
4. `CREATE_IN_PROGRESS` → 설정 완료 후에도 인스턴스는 잠시 생성 중 상태 → EC2 콘솔에서 `demo-ec2-instance` 확인.

### 검증
- 새로고침 후 인스턴스 생성 완료 확인.
- Outputs 탭에서 인스턴스 ID·Public IP를 확인하고, EC2 콘솔의 실제 인스턴스 ID와 일치하는지 대조.

## 요약
- AMI ID처럼 리전마다 달라지는 값을 Mappings에 정의해 두고 `Fn::FindInMap`으로 참조하도록 템플릿을 수정하면, 하드코딩 없이도 동일한 스택 배포 절차(Create stack → 업로드 → 파라미터 지정 → 생성)로 EC2 인스턴스를 프로비저닝할 수 있다.
