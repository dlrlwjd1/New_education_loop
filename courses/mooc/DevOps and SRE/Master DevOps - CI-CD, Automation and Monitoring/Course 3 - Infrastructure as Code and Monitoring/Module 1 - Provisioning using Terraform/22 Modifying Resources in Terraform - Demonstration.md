# Modifying Resources in Terraform - Demonstration

## 개요
- 기존 EC2 인스턴스의 태그를 수정하고, 두 번째 EC2 인스턴스를 새로 추가하는 실습.

## 내용
### 설정 변경
- 기존 리소스 블록의 `tags.Name` 값을 `Terraform instance 1` → `instance 1`로 변경(기존 리소스 **수정**)
- 새로운 리소스 블록을 복사·추가해 `instance2`라는 두 번째 EC2 인스턴스 정의(이름: `Terraform instance 2`) — Provider 설정과 Access Key는 그대로 재사용

### 실행

```bash
terraform plan
```

- 출력: "1 to add, 1 to change" — 두 번째 인스턴스는 **생성(add)**, 첫 번째 인스턴스는 **제자리 수정(update in place)**됨을 확인 (리소스 ID는 유지, 태그만 변경).

```bash
terraform apply -auto-approve
```

- State를 새로고침한 뒤 "1 to add, 1 to change"를 반영 — 두 번째 인스턴스를 생성하고 첫 번째 인스턴스는 수정. 약 10초 후 완료.

### 결과 확인
- AWS 콘솔에서 새로고침 → 첫 번째 인스턴스의 이름이 `instance 1`로 바뀌고, 두 번째 인스턴스(`instance 2`)가 새로 생성된 것을 확인.

## 요약
- Terraform은 기존 리소스 블록의 속성을 바꾸면 "in-place update"로, 새 리소스 블록을 추가하면 "add"로 처리하며, `terraform plan`으로 무엇이 바뀔지 미리 확인한 뒤 `terraform apply`로 두 변경을 한 번에 반영할 수 있다.
