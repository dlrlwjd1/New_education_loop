# Writing and Running a Terraform Configuration - Terraform Extension in VS Code

## 개요
- VS Code에서 Terraform 설정 파일을 작성하고 AWS Provider와 자격 증명을 연결하는 실습.

## 내용
### 편집 환경 선택
- Ubuntu 서버에서 Vi/Nano로 직접 편집하는 대신, **VS Code**(Windows 등)에 Terraform 확장을 설치해 더 편리하게 작성 가능.

### Provider 설정

```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.0"
    }
  }
}

provider "aws" {
  region     = "us-east-1"
  access_key = "..."
  secret_key = "..."
}
```

- 파일 확장자는 `.tf` (예: `terraform.tf`)
- Terraform 공식 Registry에는 Official/Partner/Community Provider 목록이 있으며, 필요한 Provider와 버전을 `required_providers`에 명시.

### AWS Access Key / Secret Key 발급
1. AWS Console → IAM → 관리자 그룹(Administrator Access 정책)에 속한 사용자 선택
2. **Security credentials** → **Create access key**
3. 용도 선택(예: Command Line Interface) → 설명(선택) 입력 → 생성
4. Access Key/Secret Key는 **한 번만 표시**되므로 즉시 다운로드하거나 복사해 설정 파일에 반영

### EC2 인스턴스 리소스 정의
- Terraform 공식 문서에서 "AWS Terraform EC2 instance" 검색 시 제공되는 예제 코드를 참고해 `resource` 블록 작성 가능.

```hcl
resource "aws_instance" "instance1" {
  ami           = "..."
  instance_type = "..."
}
```

## 요약
- VS Code 등 편한 에디터에서 `.tf` 파일에 `required_providers`로 AWS Provider를 선언하고, IAM에서 발급받은 Access Key/Secret Key로 `provider "aws"` 블록의 인증 정보를 채운 뒤, 공식 문서의 예제를 참고해 `resource "aws_instance"` 블록으로 EC2 인스턴스를 정의한다.
