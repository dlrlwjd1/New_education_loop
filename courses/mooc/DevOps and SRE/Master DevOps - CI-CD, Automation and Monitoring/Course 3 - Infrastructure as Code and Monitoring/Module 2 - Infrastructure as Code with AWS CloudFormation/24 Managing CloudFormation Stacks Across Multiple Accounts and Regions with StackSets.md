# Managing CloudFormation Stacks Across Multiple Accounts and Regions with StackSets

## 개요
- StackSets의 핵심 구성 요소를 복습하고, 배포 전략(Region/Account Concurrency, Failure Tolerance), 베스트 프랙티스, 대표 사용 사례, 한계점을 정리한 리딩.

## 내용
### StackSets 핵심 구성 요소 (복습)
- **Administrator Account** — StackSet을 생성·관리하는 계정. `AWSCloudFormationStackSetAdministrationRole` IAM 역할 필요.
- **Target Accounts** — Stack Instance가 배포되는 대상 계정. 각각 `AWSCloudFormationStackSetExecutionRole` 필요.
- **Stack Instances** — 특정 계정·리전 조합에 대응하는 스택의 개별 인스턴스.
- **Deployment Options** — 동시성(concurrency), 실패 허용치(failure tolerance) 등 배포 방식을 제어.

### 권한 모델
- **Self-Managed Permissions** — Admin/Target 계정에 IAM 역할을 수동 설정, 세밀한 권한 통제 제공.
- **Service-Managed Permissions** — AWS Organizations와 통합해 필요한 IAM 역할을 자동 생성, 조직에 신규 추가된 계정에도 자동 배포.

### 배포 전략
1. **Region Concurrency(리전 동시성)**
   - **Sequential Deployment** — 지정된 순서대로 한 번에 한 리전씩 배포 — 통제된 롤아웃에 유용.
   - **Parallel Deployment** — 지정된 모든 리전에 동시에 배포 — 배포 속도는 빠르지만 관리가 더 복잡.
2. **Account Concurrency(계정 동시성)** — **Maximum Concurrent Accounts**로 동시에 스택이 배포되는 계정 수를 제한해 리소스 사용량과 잠재적 오류를 관리.
3. **Failure Tolerance(실패 허용치)** — 배포를 중단하기 전 허용할 최대 실패 횟수를 지정해, 문제가 통제 없이 전체로 번지는 것을 방지.

### 베스트 프랙티스
- **템플릿 설계** — Parameters와 Mappings로 계정/리전별 동작을 커스터마이징하고, 환경마다 달라질 수 있는 값은 하드코딩하지 않음.
- **테스트** — 대규모 배포 전에 통제된 환경에서 StackSets를 테스트해 문제를 사전에 발견.
- **모니터링과 로깅** — AWS CloudTrail과 Amazon CloudWatch로 StackSet 작업을 모니터링하고 실패·이상 징후에 알림 설정.
- **버전 관리** — CloudFormation 템플릿을 버전 관리 저장소에 보관해 변경 사항을 추적하고 필요 시 롤백.
- **자동화** — CI/CD 파이프라인과 StackSets를 통합해 배포를 자동화하고 환경 간 일관성을 보장.

### 대표 사용 사례
- **보안 기준선(Security Baselines)** — 모든 계정에 일관된 IAM 역할, 보안 그룹, 컴플라이언스 설정 배포.
- **네트워킹** — 여러 리전에 표준화된 VPC, Subnet, Route Table 구성.
- **모니터링·로깅** — 조직 전체에 균일한 CloudWatch 알람, 로그, 대시보드 구현.
- **애플리케이션 배포** — 로드밸런서, EC2 인스턴스 등 애플리케이션 인프라를 여러 환경에 동시에 롤아웃.

### 한계와 고려 사항
- **템플릿 통일성** — StackSets는 모든 배포에 단일 템플릿을 요구하므로, 계정·리전별 커스터마이징은 Parameters와 Conditions로 처리해야 함.
- **작업 소요 시간** — 다수의 계정·리전에 배포할 경우 시간이 상당히 걸릴 수 있어 미리 계획 필요.
- **리전 가용성** — 템플릿에 명시된 AWS 서비스·리소스가 모든 대상 리전에서 사용 가능한지 확인 필요.
- **IAM 역할 관리** — StackSets가 사용하는 IAM 역할을 제대로 관리·보호해 무단 접근을 방지해야 함.

## 요약
- StackSets는 Sequential/Parallel Region Concurrency, Account Concurrency 제한, Failure Tolerance 설정을 통해 배포 속도와 안전성의 균형을 맞추며, 보안 기준선·네트워킹·모니터링·애플리케이션 배포 같은 멀티 계정·리전 표준화 사례에 활용되지만, 단일 템플릿 요구·배포 소요 시간·리전 가용성·IAM 역할 관리라는 한계를 함께 고려해야 한다.
