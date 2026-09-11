# Understanding AWS CloudFormation StackSets: Service-Managed vs. Self-Managed Permissions

## 개요
- StackSets가 제공하는 두 가지 권한 모델 — Service-Managed와 Self-Managed — 의 차이와 각각의 베스트 프랙티스를 정리한 리딩.

## 내용
### StackSets 개요
- 하나의 관리자(Administrator) 계정에서 여러 AWS 계정·리전에 CloudFormation 스택을 중앙 집중식으로 배포.
- StackSet은 템플릿, 파라미터, 배포 대상(계정·리전)을 정의하며, IAM 역할·VPC·보안 그룹 등 일관된 인프라 설정을 조직 전체에 유지하는 데 유용.

### 1. Service-Managed Permissions
- **AWS Organizations와 통합**되어 배포 프로세스를 자동화하는 모델. 대상 계정에 필요한 IAM 역할을 자동으로 생성.
- 주요 특징:
  - 자동 역할 생성 — 수동 설정 불필요.
  - AWS Organizations와의 통합으로 계정·조직 단위(OU) 관리.
  - 조직이나 특정 OU에 새로 추가된 계정에도 자동 배포.
  - 위임된 관리(Delegated Administration) — 멤버 계정을 StackSets 관리자로 지정 가능.
- 사용 사례: 신규 계정에 자동 배포가 필요한 경우, 조직 전체의 중앙 집중식 인프라 관리.
- 고려 사항: AWS Organizations와 CloudFormation 간 신뢰된 접근(Trusted Access) 필요, 조직 외부 계정에는 배포 불가.

### 2. Self-Managed Permissions
- Admin 계정과 Target 계정 양쪽에 **IAM 역할을 수동으로 설정**해야 하는 모델 — AWS Organizations를 쓰지 않거나 조직 외부 계정에 배포할 때 적합.
- 주요 특징:
  - Admin 계정에 `AWSCloudFormationStackSetAdministrationRole`, 각 Target 계정에 `AWSCloudFormationStackSetExecutionRole`을 직접 생성해야 함.
  - 권한이 있는 어떤 AWS 계정에도 배포 가능한 유연성.
  - 세밀한 권한 통제(Granular Control) 제공.
- 사용 사례: AWS Organizations 미사용 조직, 조직 외부 계정 배포, 커스터마이즈된 권한 설정이 필요한 경우.
- 고려 사항: IAM 역할을 수동으로 생성·관리해야 하며 설정이 더 복잡하고, 역할 설정 오류 시 잘못 구성될 위험이 큼.

### 비교 표
| 특징 | Service-Managed | Self-Managed |
|---|---|---|
| AWS Organizations 통합 | O | X |
| 자동 IAM 역할 생성 | O | X |
| 외부 계정 배포 | X | O |
| 수동 IAM 역할 관리 | X | O |
| 신규 계정 자동 배포 | O | X |
| 위임된 관리 | O | X |
| 세밀한 권한 통제 | 제한적 | 높음 |

### 베스트 프랙티스
- **Service-Managed**: Trusted Access 활성화, OU로 계정 그룹화, Delegated Administration 활용, Drift Detection으로 배포 상태 정기 모니터링.
- **Self-Managed**: IAM 역할 이름 규칙 일관되게 유지, CloudFormation/CLI 스크립트로 역할 생성 자동화, 최소 권한 원칙 적용, 역할 설정 문서화(감사·컴플라이언스 목적).

## 요약
- Service-Managed Permissions는 AWS Organizations와 통합해 IAM 역할 생성을 자동화하고 조직 내 신규 계정에도 자동 배포되는 반면, Self-Managed Permissions는 IAM 역할을 수동으로 관리하는 대신 조직 외부 계정을 포함한 어떤 계정에도 유연하게 배포할 수 있어, 조직 구조와 거버넌스 요구사항에 따라 선택해야 한다.
