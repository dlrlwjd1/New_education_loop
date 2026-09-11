# Terraform State Commands

## 개요
- `terraform state` 하위 명령어들(list, show, mv, rm, pull, push, replace-provider)을 정리.

## 내용
### State 명령어가 중요한 이유
- 리소스 메타데이터 추적, 실제 인프라와 Terraform 설정 간 동기화 보장, 재프로비저닝 없이 안전한 변경·트러블슈팅을 가능하게 함.

### 주요 명령어

```bash
# 1. State가 추적 중인 모든 리소스 나열
terraform state list
terraform state list aws_instance.myinstance   # 특정 리소스만 필터링

# 2. 특정 리소스의 상세 속성(AMI, instance type 등) 확인
terraform state show aws_instance.myinstance

# 3. 리소스를 재생성하지 않고 이름 변경/모듈 이동
terraform state mv aws_instance.old_name aws_instance.new_name

# 4. State에서만 리소스 추적 제거 (클라우드에서는 삭제되지 않음 — 다음 apply 시 실제 삭제될 수 있음)
terraform state rm aws_instance.myinstance

# 5. 백엔드의 현재 State를 로컬로 가져와 저장 (디버깅·리뷰용, 원격 상태 변경 없음)
terraform state pull > backup.tfstate

# 6. 로컬 State 파일을 원격 백엔드로 업로드 (⚠️ 원격 State를 덮어씀 — 주의 필요)
terraform state push backup.tfstate

# 7. State 안의 Provider 참조를 교체 (설정 파일은 바뀌지 않음, 참조만 마이그레이션)
terraform state replace-provider registry.terraform.io/hashicorp/aws registry.terraform.io/custom/aws
```

### 각 명령어 요약
- **`list`** — State가 추적하는 리소스 목록 확인
- **`show`** — 특정 리소스의 상세 속성 확인
- **`mv`** — 리소스 재생성 없이 이름 변경/모듈 이동
- **`rm`** — State에서만 추적 해제(클라우드 리소스는 남아 있음)
- **`pull`** — 원격 State를 로컬로 가져오기(읽기 전용, 안전)
- **`push`** — 로컬 State를 원격에 업로드(쓰기, 원격을 덮어쓰므로 주의)
- **`replace-provider`** — Provider 참조 마이그레이션(예: 공식 Provider → 커스텀 Provider, 또는 버전 업그레이드 시)

## 요약
- `terraform state` 명령어군은 State 파일을 직접 조회(`list`/`show`/`pull`)하거나 조작(`mv`/`rm`/`push`/`replace-provider`)할 수 있게 해주며, 특히 `push`는 원격 State를 덮어쓰는 파괴적 작업이므로 신중하게 사용해야 한다.
