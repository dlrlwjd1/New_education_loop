# Referencing Resources in Terraform - Demonstration

## 개요
- 한 리소스의 속성(AMI)을 다른 리소스에서 참조하는 방법을 실습.

## 내용
### 리소스 참조 문법

```hcl
resource "aws_instance" "instance3" {
  ami           = aws_instance.instance1.ami
  instance_type = "t2.micro"
  tags = {
    Name = "instance 3"
  }
}
```

- `<리소스타입>.<로컬이름>.<속성>` 형식으로 다른 리소스의 값을 참조(예: `aws_instance.instance1.ami`).
- 기존 `instance2` 블록을 `instance3`로 교체하면서, AMI 값을 직접 입력하는 대신 **첫 번째 인스턴스(instance1)의 AMI를 참조**하도록 변경.

### 실행 결과

```bash
terraform plan   # "1 to add, 0 to change, 1 to destroy" — instance2 삭제, instance3 생성 예정
terraform apply -auto-approve
```

- `instance2`가 삭제(destroy)되고 `instance3`가 새로 생성됨.
- AWS 콘솔에서 확인하면 `instance3`가 `instance1`과 동일한 AMI로 생성된 것을 볼 수 있다.

## 요약
- Terraform에서는 `<리소스타입>.<이름>.<속성>` 문법으로 다른 리소스의 값을 참조할 수 있어, AMI 같은 값을 중복 입력하지 않고 다른 리소스로부터 동적으로 가져올 수 있다.
