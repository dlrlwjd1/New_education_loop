# DevOps Adoption

## 개요
- 조직이 DevOps를 도입하는 5단계 여정(문화 → 프로세스 → 기술 → 자동화 → 도구)을 설명.

## 내용
### DevOps 도입 5단계
1. **Cultural Transformation** — 개발·운영이 더 이상 고립되지 않고 개발부터 프로덕션까지 책임을 공유. 개발자가 인시던트 콜에 참여하거나 Terraform으로 VM을 세팅하는 등 역할 경계가 흐려진다. 리더십 지원·명확한 목표·시간이 필요하며, 비난 대신 학습을 강조하는 blameless postmortem 문화가 핵심.
2. **Process Transformation** — 작고 빠른 반복 딜리버리를 지향. 핸드오프를 최소화하고 팀이 셀프서브(self-serve)한다. Agile/Lean, Kanban으로 진행 중 작업(WIP)을 제한.
3. **Technology Transformation** — 수동 서버 운영에서 자동화·컨테이너·클라우드 네이티브 도구로 전환 (FTP 업로드 → 자동화된 배포 파이프라인). CI 파이프라인, Docker, Kubernetes 오케스트레이션 도입.
4. **Automate Everything** — 빌드·테스트·배포·모니터링까지 자동화. Infrastructure as Code로 명령 하나로 환경 전체를 구성. CPU 사용량 기반 오토스케일링 등.
5. **Adopt DevOps Tools** — Git, Jenkins, Ansible, Prometheus 등 도구를 연결해 코드 푸시 한 번으로 빌드→프로덕션까지 이어지는 파이프라인을 완성.

## 예시
- 개발자가 코드를 푸시 → Jenkins에서 빌드 → 컨테이너에서 테스트 실행 → Kubernetes에 자동 배포되는 전 과정이 사람 개입 없이 이루어진다.

## 요약
- DevOps 도입은 단순한 기술 변화가 아니라 협업·속도·신뢰를 기반으로 한 문화적·운영적 진화이며, 문화 변화가 선행되어야 프로세스·기술·자동화·도구가 제대로 정착한다.
