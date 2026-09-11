# DevOps Stages - Continuous Deployment

## 개요
- Continuous Deployment 개념과 도구, 그리고 이를 뒷받침하는 컨테이너화(containerization)를 설명.

## 내용
### Continuous Deployment
- 모든 코드 변경이 사람 개입 없이 자동으로 빌드·테스트·배포 준비를 거쳐 프로덕션까지 릴리스되는 DevOps 관행.
- 전통적 방식(사람이 수동으로 승인·배포)과 달리, 모든 검증을 통과한 코드는 즉시 릴리스된다.

### Continuous Deployment 도구
- **Jenkins** — 오픈소스 자동화 서버, 수천 개 플러그인으로 빌드·테스트·배포 지원
- **AWS CodeDeploy** — EC2 인스턴스나 온프레미스 서버로의 배포 자동화, 다운타임 최소화
- **GitLab** — 저장소 관리·CI/CD 파이프라인·배포까지 하나의 인터페이스로 통합
- **Azure DevOps** — pipelines, boards, repos, artifacts 등 협업 도구로 빌드·테스트·배포 엔드투엔드 자동화
- **Octopus Deploy** — 여러 환경에 걸친 안전하고 신뢰할 수 있는 배포·릴리스 관리 전문

### 컨테이너화(Containerization)
- 전체 가상머신 대신, 애플리케이션과 모든 의존성을 하나의 패키지로 캡슐화하는 경량 가상화 방식.
- 개발자 노트북·테스트 서버·프로덕션 어디서나 동일하게 동작 → "내 컴퓨터에서는 되는데" 문제 해결.
- Kubernetes 같은 컨테이너 클러스터 관리 도구가 컨테이너 오케스트레이션, 스케일링, 로드밸런싱, 장애 복원력을 담당.

## 요약
- Continuous Deployment는 검증된 코드를 자동으로 프로덕션까지 흘려보내 릴리스를 빠르고 일관되게 만들며, 컨테이너화는 환경 간 차이로 인한 마찰을 없애 이 자동 배포를 안정적으로 뒷받침한다.
