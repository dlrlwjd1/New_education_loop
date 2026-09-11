# Infrastructure Code Processing Lifecycle - Analysis and Design

## 개요
- 소프트웨어 개발과 유사한 Infrastructure as Code 라이프사이클의 5단계 중 Analysis와 Design 단계를 상세히 설명.

## 내용
### IaC 라이프사이클 5단계 개괄
1. **Analysis** — 요구사항 분석
2. **Design** — 요구사항의 실현 가능성(feasibility) 검토
3. **Implementation** — 설계를 코드로 구현
4. **Testing** — 요구사항 기준(acceptance criteria)으로 코드 검증
5. **Deployment** — 코드 배포

### 1. Analysis 단계
- 제안된 인프라의 실현 가능성과 현재 요구사항·목표에 미치는 영향을 점검.
- **주요 활동**
  - **이해관계자 논의(Stakeholder Discussion)** — DevOps, 보안, 개발자, 프로덕트 매니저와 함께 인프라 요구사항·보안 정책·컴플라이언스 요건 논의(예: 멀티클라우드 vs 단일 클라우드, 리전, 민감 데이터 암호화 방식)
  - **회고(Retrospective)** — 과거 인프라 관리 프로세스를 되돌아보며 병목(예: 긴 배포 시간, 수동 설정)을 식별하고 자동화로 개선할 부분을 계획
  - **도구 평가(Tool Utilization)** — Terraform, CloudFormation, Ansible 같은 IaC 도구와 Git/GitHub/GitLab 같은 버전 관리 도구 중 우리에게 맞는 것을 평가·선정 (예: 멀티클라우드 프로비저닝엔 Terraform, 버전 관리엔 GitHub)

### 2. Design 단계
- 선정된 도구로 인프라 변경을 어떻게 구현할지 상세 계획 수립(예: Terraform-GitHub 인증 방식, AWS 배포 흐름 등).
- **주요 활동**
  - **팀 협업(Team Collaboration)** — 여러 팀(보안, DevOps, 프로덕트 매니저 등)이 함께 전체 아키텍처를 정의하고 작은 관리 가능한 컴포넌트로 분해(한 번에 전체를 구현할 수 없으므로 단계적 접근 필요)
  - **문서화(Documentation)** — 코드 컨벤션, 모듈 정의, 아키텍처 명세를 문서화 (예: GitHub 저장소의 README.md에 Terraform 모듈 구조와 클라우드 리소스 정보 기록)
  - **시각화(Visualization)** — AWS 아키텍처 다이어그램, Terraform 그래프 등으로 리소스 간 관계를 명확히 표현 (예: 로드밸런서·EC2 인스턴스·RDS 간 연결·API 호출 흐름을 다이어그램으로 표현)

## 요약
- IaC 라이프사이클의 Analysis 단계는 이해관계자 논의·회고·도구 평가로 "무엇을, 어떤 도구로" 만들지 결정하고, Design 단계는 팀 협업·문서화·시각화로 "어떻게" 구현할지 상세 계획을 세우는 과정이다.
