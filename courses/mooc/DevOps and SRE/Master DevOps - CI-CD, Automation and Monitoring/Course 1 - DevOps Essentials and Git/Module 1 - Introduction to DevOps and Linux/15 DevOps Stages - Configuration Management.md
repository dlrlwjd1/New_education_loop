# DevOps Stages - Configuration Management

## 개요
- Configuration Management의 목적과 configuration drift 문제, 대표 도구, Puppet·Ansible의 작동 방식을 설명.

## 내용
### Configuration Management란
- 조직 전반의 소프트웨어·시스템·인프라 일관성을 체계적으로 관리·유지하는 것.
- 없으면 환경이 서서히 어긋나는 **configuration drift**가 발생해 예상치 못한 버그·장애로 이어진다.
- 표준 템플릿/플레이북으로 시스템 셋업 방식을 정의해 일관성을 유지하고 장애 시 빠르게 복구할 수 있다.

### 대표 도구
- **Ansible** — 애플리케이션 배포·설정 관리·작업 자동화를 학습 곡선 낮게 처리. Agent-less(관리 대상에 별도 소프트웨어 설치 불필요), SSH로 연결하고 inventory 파일로 대상 정의.
- **Puppet** — 초창기 Configuration Management 도구, 프로비저닝·관리를 자동화해 시스템을 원하는 상태(desired state)로 유지. Master-Agent 구조 — Puppet Master가 SSH로 여러 Agent에 설정 지시를 내림.
- **SaltStack** — 이벤트 기반 자동화·설정, 수천 대 서버를 빠르고 안정적으로 관리.
- **Terraform** — Infrastructure as Code에 특화, 여러 클라우드 제공자에 걸쳐 일관되게 인프라 프로비저닝.
- **Chef** — 인프라를 코드로 정의하는 방식, 환경 전체 생애주기에 대한 유연성과 제어력 제공.

### Puppet vs Ansible 비교
- **Puppet**: Master-Agent 아키텍처. 중앙(Master)이 정책을 정의하면 여러 Agent가 자동으로 그 정책을 따른다 (학교 본부가 규칙을 정하면 각 캠퍼스가 자동으로 따르는 것과 유사).
- **Ansible**: Playbook(레시피처럼 재료·절차를 정의)으로 반복적인 시스템 셋업·업데이트·배포를 예측 가능하고 확장 가능하게 처리. Agent-less라 별도 설치 없이 하나~수천 대 호스트를 동일한 Playbook 로직으로 제어.

## 요약
- Configuration Management는 일관된 설정으로 신뢰성을 높이고 configuration drift를 막으며, Puppet(Master-Agent)과 Ansible(Agent-less + Playbook)이 이를 자동화·확장하는 대표적인 접근 방식이다.
