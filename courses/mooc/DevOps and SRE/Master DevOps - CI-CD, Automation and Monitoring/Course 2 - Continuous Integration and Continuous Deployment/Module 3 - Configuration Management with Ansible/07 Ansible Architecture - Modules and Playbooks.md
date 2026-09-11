# Ansible Architecture - Modules and Playbooks

## 개요
- Ansible Controller Machine의 구성요소와, Module·Playbook의 개념 및 작동 방식을 설명.

## 내용
### Ansible Controller Machine(ACM)
- Ansible이 설치된 머신 — 반드시 **Linux 기반 OS**여야 함(Windows에는 설치 불가). Windows/Linux 호스트 모두에 **연결**은 가능.
- Ansible은 **Python 기반**이라 ACM과 연결 대상 머신 모두에 Python이 필요.
- ACM의 구성요소: **Inventory**, **Ansible Modules**, **Ansible Plugins**, **API**(클라우드 연결용)
- 사용자는 ACM에서 **Playbook**을 작성하고 실행하면, Ansible이 SSH(Linux) 또는 WinRM(Windows)으로 대상 호스트(네트워크 장비 포함)에 연결해 변경을 적용.

### Module
- Ansible이 제공하는 미리 만들어진 작은 Python 프로그램 — 워커 노드에서 어떤 변경을 수행할지에 대한 로직을 담고 있음.
- Ansible이 SSH로 워커 노드에 연결해 이 모듈을 실행하며, 실행에는 워커 노드에도 Python이 필요.
- 예: **copy 모듈** — 컨트롤러에서 워커 노드로 파일을 복사하는 로직을 가지고 있으며, 사용자는 원본 파일 경로와 대상 경로(파라미터)만 지정하면 된다.

### Playbook
- 모듈을 어떤 순서로, 어떤 호스트에 실행할지 정의하는 **YAML로 작성된 재사용 가능한 스크립트**.
- 주요 특징:
  - 설정·오케스트레이션 작업(task)을 선언
  - 작업이 실행될 호스트 정보 선언
  - 병렬 실행 또는 순차 실행 가능
  - 복잡한 애플리케이션 배포에 소스 관리 스크립트와 함께 적합
- Playbook은 YAML로 작성되지만, **실행 시 Python 코드로 변환**되어 SSH로 워커 노드에 복사된 뒤 그곳에서 실행된다.

## 요약
- Ansible Controller Machine(Linux)에서 사용자가 YAML Playbook을 작성하면, 이는 실행 시 Python 코드로 변환되어 SSH/WinRM으로 워커 노드에 전달되고, 그 안에 정의된 Module(작은 Python 로직)이 실제 변경(파일 복사 등)을 수행한다.
