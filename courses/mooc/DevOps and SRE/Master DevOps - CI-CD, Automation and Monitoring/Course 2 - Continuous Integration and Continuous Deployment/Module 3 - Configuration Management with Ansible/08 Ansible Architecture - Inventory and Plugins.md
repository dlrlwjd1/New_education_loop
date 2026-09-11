# Ansible Architecture - Inventory and Plugins

## 개요
- Ansible Inventory(Static/Dynamic), API, Plugin, Host, Network 관련 아키텍처 구성요소를 설명.

## 내용
### Inventory
- Ansible의 핵심 구성요소로, 두 가지 유형이 있다.
1. **Static Inventory** — 기본 위치(`/etc/ansible`)에 있는 파일에 대상 머신의 IP/호스트명을 작성. 여러 IP를 묶은 **Host Group**도 정의 가능. Inventory에 없는 IP는 Ansible이 연결할 수 없으므로 **필수(mandatory)** 파일이다.
2. **Dynamic Inventory** — AWS 같은 클라우드에서 스케일업된 서버의 IP·호스트명을 자동으로 가져오는 플러그인 기반 방식(예: EC2 인스턴스 정보를 자동 수집).
- Inventory 파일은 단순 텍스트, YAML, 또는 전용 inventory 포맷으로 작성 가능.

### API
- Ansible이 클라우드에 연결하거나 커맨드라인에서 동작하기 위한 인터페이스.
- 예: **Python API**(Playbook을 Python 코드로 변환해 CLI에서 실행), **Cloud API**(클라우드 제공자에 연결해 inventory 세부 정보 조회)

### Plugin
- Ansible에 추가 기능을 제공하는 확장 요소 — 로깅, 서버 연결, 데이터 조회 등을 지원.
- 종류: **Action**, **Lookup**, **Inventory Plugin**(Dynamic Inventory에 유용) 등.

### 클라우드 통합
- AWS, Google Cloud, Azure 3대 클라우드 제공자와 폭넓게 통합 — 단, 인프라 자체를 프로비저닝하는 것이 Ansible의 주된 역할은 아니며(그건 Terraform 등의 몫), 여러 클라우드에 걸친 확장성을 지원하는 역할.

### Host
- Ansible Controller가 관리하는 머신들. Playbook에 Host Group 이름 또는 IP를 지정하면 Ansible이 SSH로 안전하게 연결해 대상 노드에서 작업(task)을 실행한다.
- Host 이름은 반드시 Inventory 파일에 정의되어야 연결이 가능하다.

### Network
- Ansible은 네트워크 장비(라우터 등)도 관리 대상 Host로 삼을 수 있다.
- 반복적인 네트워크 관련 작업을 피하기 위해 YAML 파일 묶음인 **Collection**을 만들 수 있으며, Ansible은 커뮤니티·벤더가 제공하는 기성 Collection·Playbook을 다수 제공한다.
- 네트워크 장비 관리에도 Agentless 방식이 적용되며, 별도의 모듈·실행 레이어로 관리된다.

## 요약
- Ansible 아키텍처는 Static/Dynamic Inventory(대상 정의), API(CLI·클라우드 연동), Plugin(기능 확장), Host(관리 대상), Network(장비 관리를 위한 Collection)로 구성되며, 이 모든 요소가 결합해 온프레미스·클라우드·네트워크 장비까지 Agentless로 관리할 수 있게 한다.
