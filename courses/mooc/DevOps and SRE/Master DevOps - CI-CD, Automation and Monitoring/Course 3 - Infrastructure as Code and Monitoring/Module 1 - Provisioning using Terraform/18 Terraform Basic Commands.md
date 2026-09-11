# Terraform Basic Commands

## 개요
- Terraform의 핵심 CLI 명령어(init, validate, plan, apply, destroy, show, output, fmt, state)를 정리.

## 내용

### `terraform init`
- 설정 파일이 있는 작업 디렉터리를 초기화 — 필요한 Provider·Module을 다운로드하고 `.terraform` 폴더 생성(Git의 `git init`이 `.git` 폴더를 만드는 것과 유사).
- 새 Terraform 프로젝트에서 **가장 먼저** 실행해야 하는 명령. 설정 파일이 있어야 동작한다.

### `terraform validate`
- 설정 파일의 문법이 올바르고 내부적으로 일관성이 있는지 검증. 잘못된 문법이나 리소스/모듈에 필요한 인자 누락을 확인.

### `terraform plan`
- 실제로 아무것도 적용하지 않고 실행 계획(dry run)을 보여줌 — 생성/수정/삭제될 리소스 요약.
- 현재 인프라 상태와 설정 파일을 비교해 어떤 변경이 필요한지 분석하고 상세 계획을 제시.

### `terraform apply`
- Plan의 변경사항을 실제로 인프라에 적용. 승인(yes/no) 확인 후 진행.
- 예: 설정에 새 S3 버킷이 정의되어 있으면 이 명령으로 실제 생성.

### `terraform destroy`
- 설정 파일에 정의된 모든 리소스를 삭제. 테스트 환경 정리나 더 이상 필요 없는 인프라를 없앨 때 유용.
- 리소스 삭제와 함께 **State 파일도 함께 정리**됨 — 그렇지 않으면 State에는 남아 있지만 실제 클라우드엔 없는 리소스를 Terraform이 다시 생성하려 시도하는 문제가 생긴다.

### `terraform show`
- Terraform이 관리하는 리소스의 현재 상태를 상세히 표시 — 사람이 읽기 어려운 State 파일 내용을 사람이 읽기 쉬운 형태로 보여줌.

### `terraform output`
- 설정에 정의된 Output 블록의 값(리소스 ID, IP 주소 등)을 배포 후 출력. 다른 스크립트에 결과값을 전달하는 용도로도 사용.

### `terraform fmt`
- 파일의 들여쓰기·정렬·간격을 표준화해 일관성 있게 포맷팅. (예: `terraform fmt test.tf`)

### `terraform state`
- State 파일의 리소스를 조회·이동·삭제 — 트러블슈팅과 State 관리에 사용.
  - `terraform state list` — State 안의 모든 리소스 목록
  - `terraform state rm` — State에서 리소스 제거
  - `terraform state mv` — State 안에서 리소스 이름 변경/이동

## 요약
- Terraform의 기본 워크플로우는 `init`(초기화)→`validate`(검증)→`plan`(미리보기)→`apply`(적용)→(필요 시)`destroy`(삭제)로 이어지며, `show`/`output`/`fmt`/`state`는 각각 상태 조회·출력값 확인·포맷팅·State 직접 관리를 위한 보조 명령이다.
