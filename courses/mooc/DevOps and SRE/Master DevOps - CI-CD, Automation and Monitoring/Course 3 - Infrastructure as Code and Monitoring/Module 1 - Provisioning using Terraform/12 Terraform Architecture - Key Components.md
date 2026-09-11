# Terraform Architecture - Key Components

## 개요
- Terraform 워크플로우 내부 동작, 핵심 아키텍처 컴포넌트, 설정 파일 구성 요소를 설명.

## 내용
### Terraform 워크플로우 내부 동작
1. 엔지니어가 `.tf` 매니페스트 파일에 코드 작성
2. `terraform plan`/`apply`로 배포
3. 내부적으로 Terraform Core가 이 파일들을 처리하고, **`.tfstate` 파일**에 리소스의 현재 상태를 저장
4. **Provider**(AWS, Azure, VMware 등)가 Terraform API와 연결해 실제 배포 수행
5. **Provisioner**(`remote-exec`, `local-exec`)로 스크립트 실행
   - `remote-exec` — 리소스 배포 후 원격에서 스크립트 실행
   - `local-exec` — 리소스 생성 시점에 로컬에서 스크립트 실행
6. Plugin을 거쳐 최종적으로 클라우드 서비스 제공자에 인프라가 배포됨

### 핵심 컴포넌트
1. **Terraform Core** — 설정 파일을 처리하는 중앙 로직 프로세서, HCL 파일을 빌드·실행·적용
2. **Provider** — 클라우드 플랫폼에 API 호출을 담당(예: AWS EC2 리소스를 정의하면 AWS Provider가 이를 API 호출로 변환), 리소스의 생성·수정·삭제 관리
3. **State Management** — 존재하는 리소스와 속성, 리소스 간 의존 관계를 기록·추적

### Terraform 설정 파일 구성
- HCL로 작성, **Module**로 조직화(EC2, S3, DynamoDB 등을 각각 별도 모듈로 분리)
- **Providers** — 어떤 클라우드 환경(AWS, Azure, GCP 등)에서 작업할지 정의
- **Resources** — 실제로 생성할 인프라 객체(EC2, S3, VPC 등)
- **Variables** — 메인 로직을 수정하지 않고 값을 바꿀 수 있는 입력값 (예: dev 환경은 `t2.micro`, production 환경은 `t2.large`처럼 환경별로 다른 값을 하드코딩 없이 변수화)
- **Outputs** — 배포된 리소스의 정보(EC2 이름, Public IP 등)를 확인하고 다른 모듈에서 참조할 수 있게 함

## 요약
- Terraform은 `.tf` 파일(Provider/Resource/Variable/Output으로 구성)을 Terraform Core가 처리해 `.tfstate`로 상태를 추적하고, Provider가 클라우드 API를 호출해 리소스를 생성하며, Provisioner(remote/local-exec)로 후속 스크립트까지 실행하는 아키텍처를 갖는다.
