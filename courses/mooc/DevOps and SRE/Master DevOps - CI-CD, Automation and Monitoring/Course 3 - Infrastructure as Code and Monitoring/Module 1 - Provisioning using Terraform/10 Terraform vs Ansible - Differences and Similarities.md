# Terraform vs Ansible - Differences and Similarities

## 개요
- Terraform과 Ansible의 핵심 차이점과 공통점을 비교.

## 내용
### 핵심 차이점
| 항목 | Terraform | Ansible |
|---|---|---|
| 목적 | 선언적(declarative) IaC로 인프라 프로비저닝·관리 | Playbook(YAML)으로 설정 관리·배포 자동화 |
| 접근 방식 | "어떤 인프라가 존재해야 하는지" 기술 → 클라우드 API로 생성 (예: EC2, VPC, Security Group 생성) | "서버를 어떻게 설정할지" 정의 (예: Nginx 설치, 배치 스크립트 실행), SSH로 연결 |
| 연결 방식 | 각 Provider API 사용 | SSH(Linux) / WinRM(Windows) |
| 확장 단위 | **3,000개 이상의 Provider** (AWS, Azure, GCP, GitHub, Kubernetes, Datadog 등 — 한 설정에서 AWS+AzureRM+Cloudflare Provider 동시 사용 가능) | **1,000개 이상의 재사용 가능한 Module** (yum, apt 같은 패키지 매니저, copy 등) |
| 재사용 구조 | **모듈(Module)** — 파라미터화된 인프라 블록을 dev/test/prod에서 재사용(예: VPC 모듈을 여러 환경에 재사용) | **Role** — Playbook과 변수를 조직화해 재사용성을 높이고 Ansible Galaxy로 커뮤니티와 공유 |

### 공통점
1. **프로비저닝·설정 모두 관련** — Terraform은 프로비저닝에, Ansible은 설정에 상대적으로 강점
2. **Agentless 아키텍처** — 대상 서버에 별도 에이전트 설치 불필요 (Ansible은 SSH/WinRM, Terraform은 각 Provider의 API 사용)
3. **클라우드 API 통합** — 둘 다 AWS/Azure/GCP 등 클라우드 API와 상호작용
4. **Masterless 상태 관리** — 중앙 서버 없이 로컬 머신이나 파이프라인에서 실행 가능
5. **원격 실행 지원** — 원격 시스템에서 작업을 실행 (Terraform은 Provider, Ansible은 SSH/WinRM 경유)

## 요약
- Terraform은 선언적 접근과 Provider 기반으로 인프라 자체를 프로비저닝하는 데, Ansible은 Playbook과 Module 기반으로 이미 존재하는 서버의 설정을 관리하는 데 강점이 있으며, 둘 다 Agentless·API 기반·Masterless라는 공통점을 가져 종종 함께 사용된다(Terraform으로 프로비저닝 후 Ansible로 설정).
