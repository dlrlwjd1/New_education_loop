# Integrating Ansible and Jenkins

## 개요
- Jenkins와 Ansible을 통합하는 이유, 도전 과제, 실무 활용 사례를 설명.

## 내용
### 통합의 이점
- Jenkins는 CI/CD 파이프라인의 중앙 관리 시스템 — Git, GitHub, Maven 등과 통합되며, 여기에 Ansible(설정 관리)까지 통합하면 사람 개입 없는 Continuous Deployment가 가능해진다.
- 여러 환경·서버에 걸친 배포를 더 잘 확장(scale)할 수 있고, 일관되고 반복 가능한 인프라 관리가 가능해진다.

### 도전 과제
1. **인프라 셋업·파이프라인 구축의 복잡성** — Jenkins가 Ansible 호스트 보안 자격 증명을 다뤄야 하므로, Credential Store 설정이 제대로 안 되면 보안 문제가 될 수 있다.
2. **대규모 인프라 관리** — 수백 대 서버에 Playbook을 배포하려면 서버 추가, 자격 증명 관리, 파이프라인 실행이 번거로워질 수 있다 — 이런 경우 Jenkins 대신 **Ansible Tower** 사용을 고려할 만하다.
3. **대규모 팀·프로젝트에서의 확장성**
4. **환경별 배포 이슈의 트러블슈팅**이 Jenkins를 통해 수행할 때 어려울 수 있다.

### 실무 활용 사례
1. **마이크로서비스 배포 자동화** — Playbook을 GitHub 같은 공통 위치에 저장하면, 빌드가 준비되는 즉시 Jenkins가 코드를 가져와 지정된 서버에 배포.
2. **지속적 인프라 프로비저닝** — 단, Ansible의 주 역할은 인프라 생성이 아니며, 이 작업은 Terraform이 담당하는 것이 더 적합하다.
3. **프로덕션 환경으로의 롤아웃(배포)**

## 요약
- Jenkins-Ansible 통합은 자동화된 Continuous Deployment와 일관된 인프라 관리를 가능하게 하지만, 자격 증명 관리와 대규모 인프라 확장이라는 도전 과제가 있어 매우 큰 규모에서는 Ansible Tower 도입을, 인프라 프로비저닝 자체는 Terraform을 병행하는 것이 실무에서 권장된다.
