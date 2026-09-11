# CloudFormation Templates

## 개요
- CloudFormation 템플릿의 정의, 작성 방법, 구성 섹션, 포맷(JSON/YAML), 장점을 정리.

## 내용
### CloudFormation 템플릿이란
- AWS 리소스와 그 설정을 정의하는 JSON 또는 YAML 파일 — 클라우드 인프라의 청사진(blueprint)으로, 리소스의 생성·업데이트·삭제(라이프사이클 관리)에 사용.
- 목적은 여러 리전에 걸친 **일관된(consistent) 인프라 배포**.

### 템플릿 생성 방법
1. **AWS Infrastructure Composer** — 최신 버전의 비주얼 인터페이스로 템플릿을 시각적으로 설계.
2. **AWS CloudFormation Designer** — 이전 버전의 드래그 앤 드롭 기반 비주얼 인터페이스.
3. **Text Editor** — VS Code 등에서 JSON/YAML 문법으로 직접 작성.
4. **IaC Generator** — 아직 CloudFormation으로 관리되지 않는 기존 AWS 리소스(예: 수동으로 만든 EC2 인스턴스)를 스캔해 재사용 가능한 CloudFormation 템플릿으로 변환.

### 템플릿 구성 섹션
- **Resources** — 생성할 모든 AWS 서비스를 정의하는 핵심 섹션.
- **Parameters** — 템플릿을 커스터마이징하는 사용자 입력값.
- **Outputs** — 스택 생성 후 인스턴스 ID, 버킷 이름 등 유용한 데이터를 반환.
- **Mappings** — 정적인 key-value 맵 정의(예: 리전별 AMI 설정).
- **Metadata** — 정보성 안내나 지침 추가.
- **Rules** — 입력 파라미터에 대한 조건 설정.
- **Conditions** — 특정 조건을 만족할 때만 리소스를 생성.
- **Transform** — SAM(Serverless Application Model) 같은 매크로 처리를 활성화.
- **Format Version** — 템플릿 포맷 버전 지정(선택 사항).
- **Description** — 템플릿이 하는 일에 대한 간단한 설명.

### 템플릿 포맷
- **JSON** — 문법이 엄격하고 verbose하며, 템플릿을 자동 생성하는 도구들이 선호.
- **YAML** — 가독성이 높고 주석(comment) 지원 — 수동 편집에 권장되며, 간결한 문법 덕분에 가장 널리 사용됨.

### CloudFormation 템플릿의 장점
1. **자동화와 일관성** — 클릭 한 번으로 배포 반복, 수동 설정 차이 제거(예: Front-end·Back-end·DB로 구성된 3계층 애플리케이션을 모든 리전에서 동일하게 유지).
2. **Infrastructure as Code** — 인프라가 Git 등 버전 관리 시스템(SCM)에 코드로 저장되어 버전 관리·코드 리뷰·DevOps 베스트 프랙티스를 가능하게 함.
3. **재사용성과 확장성** — 같은 템플릿을 다른 입력 파라미터로 재사용(예: 같은 VPC 모듈을 Dev/Prod에 다른 CIDR block으로 재사용), 오토스케일링과 모듈형 성장 지원.
4. **비용 관리** — `stack delete`로 전체 환경을 빠르게 해체해 미사용 리소스를 방지, 비용 관리에 도움.
5. **롤백과 복구** — 스택 생성 실패 시 내장된 롤백 기능이 작동해 깨진 인프라가 배포되는 리스크를 줄임.
6. **중앙 집중식 관리** — AWS 콘솔에서 EC2, Security Group, EBS Volume 등 스택 전체의 관계와 의존성을 한 곳에서 확인 가능.

## 요약
- CloudFormation 템플릿은 JSON/YAML로 작성하는 인프라 청사진으로, Resources·Parameters·Outputs·Mappings·Conditions 등의 섹션으로 구성되며, 자동화·재사용성·비용 관리·롤백·중앙 집중 관리라는 장점을 통해 일관되고 반복 가능한 인프라 배포를 가능하게 한다.
