# Practice Project: CloudNova DevOps Enablement through IaC and Monitoring Automation

## 개요
- SaaS 데이터 분석 기업 CloudNova가 Terraform·CloudFormation·Prometheus·Grafana로 인프라 프로비저닝과 모니터링을 자동화하는 실습 프로젝트 시나리오.

## 내용
### 시나리오 설명
- CloudNova는 빠르게 성장 중인 데이터 분석 플랫폼 SaaS 기업으로, 확장 수요를 지원하고 운영 효율을 높이기 위해 클라우드로 인프라를 이전 중.
- 엔지니어링 팀은 DevOps 원칙을 채택해 인프라 프로비저닝과 지속적 모니터링을 자동화하려 함.
- 현재는 인프라 구성·모니터링이 수작업과 파편화된 도구로 이루어져 배포 지연, 환경 불일치, 시스템 성능에 대한 제한적 가시성을 겪고 있음.
- 해결을 위해 Terraform과 AWS CloudFormation으로 IaC를 구현하고, Prometheus·Grafana 기반 모니터링 솔루션을 함께 구축하고자 함.

### 초기 문제점
1. **수작업·비일관적 인프라 프로비저닝**
   - 문제: 인프라 구성 요소가 수동으로 설정되어 Dev/Staging/Production 환경 간 설정 드리프트(drift)와 불일치 발생.
   - 영향: 배포 실패 위험 증가, 설정 소요 시간 증가.
2. **인프라 라이프사이클 자동화 부재**
   - 문제: 인프라 변경, 상태(state), 롤백을 관리하는 표준화된 접근 방식이 없음.
   - 영향: 인프라 버전 관리와 협업의 어려움.
3. **제한적인 모니터링·알림 역량**
   - 문제: 기본적이고 통합되지 않은 도구로 시스템 상태를 모니터링하며 시각화가 부족.
   - 영향: 문제 탐지 지연, 성능 인사이트 부족.

### 프로젝트 목표
- CloudNova를 위한 자동화되고 확장 가능한 인프라 프로비저닝·모니터링 솔루션을 설계·구현:
  1. 재사용 가능한 모듈, State 관리, CI/CD 파이프라인 통합을 갖춘 Terraform·AWS CloudFormation으로 AWS 인프라 프로비저닝 자동화.
  2. Prometheus로 지표 수집, Grafana로 시각화·알림을 수행하는 지속적 모니터링 체계 구축.
  3. IaC와 모니터링 워크플로우를 CI/CD 파이프라인에 통합해 자동화된 배포와 실시간 시스템 상태 추적 실현.

### 수행 과제
1. **Terraform 인프라 자동화**
   - EC2, VPC, Security Group 등 주요 AWS 리소스에 대한 Terraform 설정 작성.
   - Terraform 모듈과 State 관리 베스트 프랙티스 적용.
   - 리소스 생성·업데이트·삭제를 위한 Terraform 워크플로우 구성.
2. **AWS CloudFormation 구현**
   - 인프라 구성 요소를 위한 CloudFormation 템플릿과 스택 작성.
   - Nested Stack, Drift Detection, Stack Policy 같은 고급 기능 활용.
   - AWS CLI로 스택 관리를 자동화하고 CI/CD 파이프라인과 통합.
3. **Prometheus·Grafana 모니터링 구축**
   - Prometheus를 설치·설정해 인프라·애플리케이션 지표 수집.
   - Grafana 대시보드를 설정하고 알림 규칙 구성.
   - 모니터링을 CI/CD 파이프라인에 통합해 지속적 피드백 구현을 시연.
4. **CI/CD 파이프라인 통합**
   - 인프라 배포와 모니터링 설정을 자동화하는 파이프라인 설계.
   - 인프라 변경에 대한 테스트, 검증, 롤백 메커니즘 포함.
   - 파이프라인 가시성과 운영 인사이트를 위한 알림·대시보드 구성.

### 기대 결과
- **자동화된 인프라 배포** — Terraform과 CloudFormation으로 안정적이고 반복 가능한 AWS 리소스 프로비저닝.
- **인프라 State 관리** — 인프라 변경의 명확한 버전 관리로 환경 드리프트 감소.
- **실시간 모니터링과 알림** — Prometheus 지표와 Grafana 대시보드로 시스템을 종합적으로 파악하고 문제에 선제적으로 대응.
- **통합된 DevOps 워크플로우** — 수작업 개입을 줄이고 딜리버리 주기를 단축하는 간소화된 CI/CD 파이프라인.
- **신뢰성·확장성 향상** — CloudNova의 인프라가 고가용성과 운영 투명성을 갖춘 채 빠른 성장을 지원.

## 요약
- CloudNova 프로젝트는 수작업 프로비저닝·라이프사이클 자동화 부재·제한적 모니터링이라는 초기 문제를 Terraform·CloudFormation의 재사용 가능한 모듈·State 관리와 Prometheus·Grafana의 지표 수집·시각화·알림을 CI/CD 파이프라인에 통합함으로써 해결해, 자동화·일관성·가시성을 갖춘 DevOps 성숙도의 기반을 마련하는 것을 목표로 한다.
