# Infrastructure Code Processing Lifecycle - Implementation, Testing and Deployment

## 개요
- IaC 라이프사이클의 나머지 단계인 Implementation, Testing, Deployment를 설명.

## 내용
### 3. Implementation 단계
- 설계된 솔루션을 실행 가능한 코드·설정으로 옮기는 단계(일반 소프트웨어 개발에서 아키텍처 설계를 Java/Python 코드로 옮기는 것과 동일한 원리).
- **주요 활동**
  - **코딩(Coding)** — 선택한 도구(Terraform, CloudFormation 등)로 IaC 작성 (예: Auto Scaling Group이 연결된 EC2 인스턴스를 정의하는 Terraform 스크립트)
  - **버전 관리** — Git 등으로 인프라 코드를 저장·관리해 변경 추적·협업·필요 시 롤백 지원(로컬에서 GitHub 저장소로 커밋할 때마다 v1, v2, v3처럼 여러 버전 확보)
  - **피어 리뷰(Peer Review)** — 동료가 코드를 리뷰해 품질·베스트 프랙티스 준수 여부와 요구사항 부합 여부를 확인. 작성자 스스로는 코드가 완벽하다고 느낄 수 있지만, 리뷰를 통해 개선점을 발견할 수 있다.

### 4. Testing 단계
- 개발된 코드가 요구사항대로 동작하는지 검증.
- **주요 활동**
  - **테스트** — 문법 오류, 호환성 문제, 예상대로 동작하는지 확인 (Terraform의 `plan`으로 실제 배포될 내용을 미리 확인해 문제 파악)
  - **지속적 통합(CI)** — Jenkins, GitLab CI 같은 도구로 테스트 프로세스를 자동화해 dev/test/prod 등 여러 단계에서 코드가 예상대로 작동하는지 보장 (예: `terraform validate`, `terraform plan`을 커밋 시마다 자동 실행)

### 5. Deployment 단계
- CI/CD 파이프라인 또는 수동 스크립트로 인프라 코드를 적용(`terraform apply` 등)해 AWS/Azure/GCP 등 대상 클라우드 플랫폼에 리소스를 프로비저닝.

## 요약
- Implementation 단계에서는 코딩·버전 관리·피어 리뷰로 설계를 실행 가능한 코드로 만들고, Testing 단계에서는 `plan`/`validate`와 CI 자동화로 코드를 검증하며, Deployment 단계에서는 `apply`로 실제 클라우드에 인프라를 프로비저닝한다 — 이렇게 Analysis→Design→Implementation→Testing→Deployment의 5단계가 IaC 라이프사이클을 완성한다.
