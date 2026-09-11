# Managing Resources in Terraform

## 개요
- Terraform Resource의 정의, 문법 구조, 그리고 리소스 관리 베스트 프랙티스를 설명.

## 내용
### Terraform Resource란
- Terraform 설정의 기본 빌딩 블록 — Terraform이 관리·생성할 인프라의 한 조각.
- 원하는 상태(desired state)로 정의되는 예: VM(EC2, Azure VM, GCE), DB(RDS, Cloud SQL, Azure SQL), 네트워킹(VPC, Subnet) 등

### Resource 문법 구조

```hcl
resource "<리소스 타입>" "<로컬 이름>" {
  attribute1 = value1
  attribute2 = value2
}
```

- **`resource`** 키워드 — 리소스 블록임을 선언
- **리소스 타입** — 무엇을 만들지 지정(예: `aws_instance`, `google_storage_bucket`)
- **로컬 이름(Resource Name)** — Terraform 설정 안에서만 쓰이는 사용자 정의 논리적 이름. **클라우드에 실제로 생성되는 이름이 아니다.**
- **Attribute** — 리소스 타입에 특화된 key-value 쌍 (예: AMI, instance_type 등). 값은 하드코딩하거나 변수를 사용할 수 있다.

### 예시

```hcl
resource "aws_instance" "web" {
  ami           = "..."
  instance_type = "t2.micro"
  tags = {
    Name = "web-server"
  }
}
```

- `ami` — Amazon Machine Image ID
- `instance_type` — 생성할 인스턴스 유형
- `tags` — 리소스 식별·필터링을 위한 추가 메타데이터

### 베스트 프랙티스
1. **원격 State 관리 사용** — State를 S3 등 백엔드에 저장해 팀이 안전하게 협업할 수 있게 함
2. **표준 모듈 구조 채택** — `main.tf`, `variables.tf` 등으로 재사용 가능한 코드 블록을 조직화
3. **일관된 네이밍 컨벤션** — 리소스·환경·역할을 조합(예: EC2 + dev + web-server)해 리소스를 쉽게 식별
4. **값 하드코딩 금지** — 리전, 인스턴스 타입, 태그 등은 변수로 관리
5. **기존 모듈 활용** — 커뮤니티/사내 공개 모듈(예: Terraform AWS EC2 모듈 저장소)을 재사용해 코드 중복 방지
6. **정기적인 검증·포맷팅** — `terraform validate`와 `terraform fmt`로 적용 전 코드 확인

## 요약
- Terraform Resource는 `resource "타입" "로컬이름" { attribute = value }` 구조로 정의되며, 원격 State 관리·모듈 구조·네이밍 컨벤션·변수화·기존 모듈 재사용·정기 검증이라는 베스트 프랙티스를 지키면 유지보수하기 쉬운 인프라 코드를 작성할 수 있다.
