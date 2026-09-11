# Introduction to Ansible

## 개요
- Ansible의 정의, Push vs Pull 접근 방식, 핵심 기능과 이점을 설명.

## 내용
### Ansible이란
- 단일 서버가 아닌 여러 서버에 애플리케이션 배포와 변경을 수행하는 자동화 도구.
- 주요 역할:
  1. **Configuration Management** — 파일 복사, 사용자 생성, 권한 부여, 패키지 설치/제거/업그레이드 등 서버의 모든 변경
  2. **배포(Deployment)** 도구
  3. **오케스트레이터(Orchestrator)** — 여러 서버와의 통신·변경을 관리
- **Push 방식**으로 변경사항을 서버에 적용.

### Push vs Pull 접근 방식
- **Pull 방식 (Puppet, Chef)** — 워커 노드에 에이전트가 설치되어 있으며, 주기적으로(기본 15분, 변경 가능) 컨트롤러에 접속해 변경사항을 스스로 가져와 적용.
- **Push 방식 (Ansible, SaltStack)** — 코드를 작성·실행하는 즉시 변경사항이 워커 노드에 적용됨. 컨트롤 노드가 변경을 주도.
- **Ansible은 Agentless** — 워커 노드(Ansible Host)에는 Ansible이 설치되어 있지 않으며, 컨트롤 노드가 연결해 코드를 실행하고 변경사항을 밀어넣는다. Push 기반이지만 필요시 Pull 방식 설정도 구현 가능한 유연성을 갖는다.

### 핵심 기능
1. **쉬운 설정** — 워커 노드에 에이전트를 설치할 필요가 없어 셋업이 간단
2. **YAML 기반 Playbook** — 배우기 쉬운 문법으로 코드 작성
3. **다중 서버 동시 변경** — 일관성 확보, 환경 확장(scale-up) 시에도 쉽게 연결·적용
4. **Dynamic Inventory** 지원
5. **Multi-tier 배포 지원** — 여러 기능/마이크로서비스를 손쉽게 배포 가능

### 이점
- 수작업 대비 시간 절약, 사람의 실수 감소
- 다양한 작업을 단순화, 변경 적용 시점 스케줄링 가능(Push 방식에서는 즉시 적용)
- Continuous Deployment가 필요한 프로젝트에 적합
- 소프트웨어 딜리버리·배포 주기 가속화
- Git, GitHub, Jenkins 같은 DevOps 도구와 매끄럽게 통합, Docker와 결합해 컨테이너화까지 자동화 가능

## 요약
- Ansible은 Agentless·Push 기반의 설정 관리 도구로, YAML 기반 Playbook으로 여러 서버에 일관된 변경을 즉시 적용하며, DevOps 도구·컨테이너 기술과 매끄럽게 통합되어 지속적 배포에 적합하다.
