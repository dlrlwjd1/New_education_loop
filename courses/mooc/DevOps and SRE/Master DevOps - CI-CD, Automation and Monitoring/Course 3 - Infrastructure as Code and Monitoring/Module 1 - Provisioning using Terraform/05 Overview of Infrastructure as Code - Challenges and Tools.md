# Overview of Infrastructure as Code - Challenges and Tools

## 개요
- IaC가 없을 때 겪는 문제와, Configuration Management/Server Templating/Provisioning 세 범주의 IaC 도구를 설명.

## 내용
### IaC가 없을 때의 문제
1. **Configuration Drift** — 인프라 설정이 서로 달라지는 현상
2. **수동 설정 중 오류** — 사람이 직접 만들다 보니 실수가 발생하고 고치는 데 시간이 걸림
3. **환경 확장의 비효율** — 사용자 증가에 맞춰 즉시 스케일업해야 하는데 수동 확장은 시간이 걸려 비효율적
4. **버전 관리 부재** — 인프라 설정 변경 이력을 추적하기 어려움 — 방식이 바뀌어도 그 변화가 기록되지 않음

### IaC 도구의 3가지 범주
1. **Configuration Management 도구** (예: Ansible, Chef, Puppet)
   - 서버의 소프트웨어 설치·설정·업데이트를 관리·자동화
   - **인프라 자체를 생성하지는 못함** — 이미 존재하는 인프라를 관리만 할 수 있다.
2. **Server Templating 도구** (예: AWS CloudFormation, Azure Resource Manager)
   - 인프라를 선언적으로 정의하는 재사용 가능한 서버 템플릿 생성
3. **Provisioning 도구** (예: Terraform, Pulumi)
   - 인프라의 **생성과 관리를 자동화** — 이미 만들어진 인프라를 관리하는 게 아니라 인프라를 만드는 시점에 소프트웨어 사전 설치 등 일부 설정도 함께 지정 가능하다. 단, 인프라가 이미 생성된 이후의 추가 도구 설치 등은 이 범주의 역할이 아니다.

### Configuration Management vs Provisioning의 핵심 차이
- Configuration Management 도구는 기존 인프라의 설정을 관리·자동화하지만 인프라 자체를 만들 수는 없다.
- Provisioning 도구는 인프라를 생성·관리하며, 생성 시점에 필요한 기본 설정을 포함시킬 수 있다.

## 요약
- IaC가 없으면 설정 드리프트·수동 오류·비효율적 확장·버전 관리 부재라는 문제가 발생하며, 이를 해결하기 위한 도구는 역할에 따라 Configuration Management(설정 관리, Ansible 등), Server Templating(선언적 템플릿, CloudFormation 등), Provisioning(인프라 생성·관리, Terraform 등) 세 범주로 나뉜다.
