# Introduction to AWS CloudFormation

## 개요
- AWS CloudFormation의 정의, 사용 이유, 주요 기능, 동작 흐름, 이점을 소개하는 강의.

## 내용
### AWS CloudFormation이란
- AWS 인프라를 코드로 모델링·프로비저닝·관리할 수 있게 해주는 서비스 — 대표적인 Infrastructure as Code(IaC) 도구.
- DynamoDB, EC2, SNS, Pipeline, VPC, RDS, API Gateway 등 대부분의 AWS 리소스를 배포할 수 있음.
- **JSON 또는 YAML 템플릿**으로 AWS 리소스를 정의하며, 리소스 생성을 단일 반복 가능한 프로세스로 자동화하고 풀스택 배포를 지원.

### 왜 AWS CloudFormation을 쓰는가
1. **인프라 관리 단순화** — 콘솔에서 수동 설정 없이 전체 환경을 코드로 정의(예: 3계층 웹 애플리케이션을 명령 하나로 구축).
2. **인프라 빠른 복제** — 같은 템플릿을 Dev/Test/Prod 등 모든 환경에서 재사용 → 일관성(consistency)과 재현성(repeatability) 확보.
3. **변경 사항 추적·통제 용이** — 템플릿을 Git 등 버전 관리에 두면 모든 변경이 추적·리뷰·감사(auditable) 가능.

### 주요 기능
- **Infrastructure as Code** — Terraform과 유사하게 YAML/JSON 템플릿으로 인프라 정의.
- **Resource Management** — 리소스 프로비저닝, 업데이트, 삭제를 자동화.
- **Change Sets** — 변경 사항을 적용 전에 미리보기(Terraform의 `plan`과 유사).
- **Drift Detection** — 실제 리소스 상태와 템플릿 설정 간의 차이를 감지.
- **Cross-region/account Management** — 여러 리전·계정에 걸쳐 리소스 관리.

### 동작 흐름
1. YAML/JSON 형식의 CloudFormation 템플릿으로 인프라를 코드로 작성(처음부터 작성하거나 샘플 템플릿 사용).
2. 템플릿을 로컬에서 검증 후 S3 버킷에 업로드.
3. 콘솔/CLI/API를 통해 템플릿 기반으로 **스택(Stack)**을 생성 — 예: VPC → Internet Gateway → Subnet/Network Interface 순으로 리소스를 쌓아 하나의 스택을 구성.
4. CloudFormation이 템플릿에 명시된 스택을 기반으로 리소스를 프로비저닝.

### 사례: FC Barcelona
- 6,000개 이상의 페이지, 1,000개 이상의 디지털 사진을 6개 언어로 관리하는 대규모 디지털 인프라를 수동 관리하던 중 시간 소모와 오류가 많았음.
- Genyon과 협력해 AWS CloudFormation 도입 → 원클릭 배포로 수작업과 오류를 줄이고 신뢰성을 높임.

### 이점
- **확장성(Scalability)** — 트래픽 급증에 따라 리소스를 자동으로 확장/축소.
- **비용 효율성(Cost Efficiency)** — 사용한 만큼만 지불(pay-per-use), 불필요한 리소스 자동 삭제로 비용 최적화.
- **일관성과 신뢰성** — 여러 환경에 배포된 인프라가 동일한 설정을 갖도록 보장, 자동화된 배포로 리스크 감소.

## 요약
- AWS CloudFormation은 JSON/YAML 템플릿으로 스택 단위로 인프라를 정의·프로비저닝하는 IaC 서비스이며, Change Sets(변경 미리보기)와 Drift Detection(설정 차이 감지) 같은 기능으로 Terraform과 유사한 워크플로우를 AWS 네이티브하게 제공한다.
