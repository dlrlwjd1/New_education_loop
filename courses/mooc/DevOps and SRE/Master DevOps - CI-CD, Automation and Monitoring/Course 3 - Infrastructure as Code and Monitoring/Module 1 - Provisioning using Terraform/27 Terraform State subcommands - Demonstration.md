# Terraform State subcommands - Demonstration

## 개요
- 앞서 만든 instance1·instance3 구성으로 `state list`, `state pull`, `state show`, `state rm`을 실습.

## 내용

```bash
# 현재 State가 추적 중인 리소스 목록 (instance2는 삭제되어 없음)
terraform state list
# => aws_instance.instance1
#    aws_instance.instance3

# 클라우드의 현재 상태를 그대로 가져와 표시 (JSON 형식, AWS 콘솔 기준)
terraform state pull

# 특정 리소스의 State 상세 정보 확인 (Terraform 설정 문법 형식)
terraform state show aws_instance.instance1

# State에서 리소스 추적 제거
terraform state rm aws_instance.instance1
```

### 관찰 포인트
- `terraform state pull`은 AWS 콘솔 기준의 **JSON** 형식으로 결과를 보여주는 반면, `terraform state show`는 Terraform Plan/Apply에서 쓰는 **설정 문법** 형식으로 보여준다 — 같은 정보를 다른 포맷으로 확인하는 셈.
- `terraform state rm aws_instance.instance1` 실행 후 `terraform state list`를 다시 확인하면 `instance1`은 더 이상 추적되지 않고 `instance3`만 남는다 — 단, 클라우드의 실제 EC2 인스턴스는 삭제되지 않은 상태로 남아 있다.

## 요약
- `state list`로 현재 추적 중인 리소스를 확인하고, `state pull`(JSON, 클라우드 기준)과 `state show`(Terraform 문법, 개별 리소스)로 상태를 조회하며, `state rm`으로 특정 리소스를 State 추적에서만 제거하는 흐름을 실습했다.
