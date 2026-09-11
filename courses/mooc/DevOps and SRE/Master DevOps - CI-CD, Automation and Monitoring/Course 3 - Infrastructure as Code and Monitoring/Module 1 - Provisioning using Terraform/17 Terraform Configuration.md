# Terraform Configuration

## 개요
- Terraform 설정 언어(HCL/JSON), 문법 구성요소(Block/Argument/Expression), 4가지 블록 타입, 파일 조직 방식을 설명.

## 내용
### Terraform 설정 언어
- **HCL(HashiCorp Configuration Language)** — 거의 모든 Terraform 프로젝트에서 사용되는 주 언어, 읽고 쓰기 쉬우며 인프라 선언에 특화. 확장자 `.tf`
- **JSON** — 생성된 코드나 기계가 읽기 위한 설정에 유용, HCL보다 덜 쓰임. 확장자 `.tf.json`

### 문법 구성요소
- **Block** — resource, provider, module 등 별개의 설정 단위
- **Argument** — 블록 내부의 key-value 쌍 (예: `cidr_block = var.something`)
- **Expression** — 변수, 출력값, 계산된 값을 참조하는 표현식

### Terraform 설정 구조 (4가지 블록)
1. **Provider Block** — 클라우드 제공자와 설정을 정의 (예: `provider "aws" { region = "us-west-2" }`)
2. **Resource Block** — 실제로 배포·관리할 인프라 리소스 정의 (예: `resource "aws_instance" "example" { ami = ..., instance_type = ... }`)
3. **Output Block** — 설정 적용 후 결과를 출력 (예: `output "instance_ip" { value = aws_instance.example.public_ip }`)
4. **Variable Block** — 리소스를 동적으로 설정할 수 있게 함 (예: `variable "instance_type" { default = "t2.micro" }` — 값이 지정되지 않으면 기본값 `t2.micro` 사용)

### 파일 조직 구조
- **Main 설정 파일(`main.tf`)** — Terraform이 가장 먼저 참조하는 핵심 파일
- **Variables 파일(`variables.tf`)** — 입력 변수 정의와 기본값
- **Output 파일(`outputs.tf`)** — `apply` 이후 출력할 값 정의
- **Provider 파일(`providers.tf`)** — 클라우드 제공자 설정

## 요약
- Terraform 설정은 HCL로 작성되며 Provider(클라우드 지정)·Resource(리소스 정의)·Output(결과 출력)·Variable(동적 값) 4가지 블록으로 구성되고, 이를 main/variables/outputs/providers 같은 파일로 나눠 조직화하면 유지보수가 쉬운 구조를 만들 수 있다.
