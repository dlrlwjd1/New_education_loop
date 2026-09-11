# Introduction to Terraform

## 개요
- Terraform의 정의, 기본 워크플로우(Plan/Apply), 이점, 도구 통합, 활용 사례, 핵심 기능을 설명.

## 내용
### Terraform이란
- HashiCorp가 개발한 오픈소스 IaC(Provisioning) 도구.
- **선언적 언어 HCL(HashiCorp Configuration Language)** 사용.
- AWS, Azure, GCP 등 **여러 클라우드 플랫폼**에서 동시에 동작.
- 인프라 라이프사이클(코드 작성→테스트→배포→삭제)을 자동화.
- **State File**로 리소스 상태를 추적 — 클라우드의 실제 설정과 Terraform 파일의 설정 간 차이를 파악할 수 있게 함.

### 기본 워크플로우
1. `.tf` 파일에 HCL로 코드 작성 (VS Code + Terraform 플러그인 등 활용)
2. **`terraform plan`** — 생성/수정/삭제될 작업을 미리 보여주는 실행 계획 생성
3. **`terraform apply`** — 승인(yes/no) 후 계획을 실제로 적용 (`-auto-approve` 플래그로 자동 승인 가능)
4. 여러 리소스를 함께 생성할 때 리소스 의존성(dependency) 순서를 올바르게 지킴

### 이점
1. **크로스 플랫폼 이식성** — 여러 클라우드에서 동시 작업
2. **포괄적인 문서화** — 리소스 생성 옵션에 대한 잘 정리된 공식 문서
3. **직관적인 설정 언어** — 초심자도 이해하기 쉬운 HCL
4. **강력한 커뮤니티 지원**
5. **자동화와 협업** — 버전 관리로 팀원과 배포 내용 공유
6. **모듈형 인프라 관리** — EC2/S3/DynamoDB 등을 각각 파일로 나눠 여러 애플리케이션에 재사용 가능

### 도구 통합
- **CI/CD 도구** — Jenkins 파이프라인에서 Terraform 설정을 작성·실행
- **클라우드 제공자** — AWS, Azure 등 멀티클라우드 지원
- **모니터링 도구** — Prometheus, Datadog
- **이미지 관리 도구** — Packer

### 활용 사례
- 멀티클라우드 배포
- 소프트웨어 정의 네트워킹(리소스 전체 네트워킹과 의존성 정의)
- 멀티티어 애플리케이션 인프라(UI, 백엔드, DB까지 전부)
- 확장 가능한 인프라 관리(제한적인 설정 변경만으로 스케일업/다운 — 예: EC2 3대→5대는 숫자만 변경 후 apply)

### 핵심 기능
1. **Infrastructure as Code** — HCL이라는 고수준 설정 문법으로 인프라 정의
2. **Execution Plan** — `terraform plan`으로 변경사항(생성/수정/삭제)을 사전 확인해 실수로 필요한 리소스를 삭제하는 것을 방지
3. **Resource Graph** — 의존성 그래프를 만들어 리소스를 병렬로 생성 가능하게 함
4. **Change Automation** — Execution Plan과 Resource Graph 덕분에 변경사항을 시각적으로 미리 예측 가능

## 요약
- Terraform은 HCL로 인프라를 선언적으로 정의하고 Plan(미리보기)→Apply(적용)의 워크플로우로 여러 클라우드에 걸쳐 인프라를 안전하고 예측 가능하게 프로비저닝하며, 의존성 그래프 기반의 병렬 생성과 모듈화로 확장성과 재사용성을 확보한다.
