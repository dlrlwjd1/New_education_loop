# Writing and Running a Terraform Configuration - Configuring EC2 Instance

## 개요
- 이전 강의(VS Code에서 Provider 설정)에 이어 EC2 인스턴스 리소스를 구성하는 내용 (실제 영상 스크립트는 이전 강의와 대부분 겹친다).

## 내용
### 핵심 흐름 재확인
1. `required_providers`에 AWS Provider(`hashicorp/aws`, 버전 `>= 3.0`) 선언
2. `provider "aws"` 블록에 리전(`us-east-1` 등)과 IAM에서 발급받은 Access Key/Secret Key 입력
3. Terraform 공식 문서의 EC2 인스턴스 예제를 참고해 `resource "aws_instance" "instance1" { ... }` 블록 작성

### AWS 자격 증명 발급 절차 (요약)
- IAM 사용자(Administrator Access 정책이 붙은 그룹 소속) → **Security credentials → Create access key**
- 용도로 "Command Line Interface" 선택 → 생성된 Access Key/Secret Key는 그 자리에서만 확인 가능하므로 즉시 저장

## 요약
- EC2 인스턴스를 Terraform으로 구성하는 과정은 Provider 선언 → AWS 자격 증명 설정 → 공식 문서 기반의 `aws_instance` 리소스 블록 작성으로 이어지며, 이 파일이 준비되면 다음 단계(`terraform init`/`plan`/`apply`)로 실제 배포를 진행한다. (상세 내용은 [19 Writing and Running a Terraform Configuration - Terraform extension in VS Code](19%20Writing%20and%20Running%20a%20Terraform%20Configuration%20-%20Terraform%20extension%20in%20VS%20Code.md) 참고)
