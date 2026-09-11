# Automating Rollbacks and Updates

## 개요
- 파라미터 유효성 검사(AllowedPattern 등)가 있는 템플릿으로 스택을 생성·업데이트하며, 잘못된 입력이 어떻게 사전에 차단되는지 확인하는 실습.

## 내용
### 템플릿 준비
- `automated-rollback.yml` — 버킷 접미사(bucket suffix)를 입력 파라미터로 받아 S3 버킷 이름에 결합해 생성.
- 파라미터 제약: **소문자와 숫자만 허용**, 길이는 **3~10자** 사이여야 함.

### 스택 생성
1. CloudFormation → **Create stack** → 템플릿(`automated-rollback.yml`) 업로드 → Next.
2. 스택 이름 `auto-rollback-demo`, 파라미터로 유효한 접미사 `demo123` 입력 → Next.
3. Stack 옵션 기본값 유지 → 리뷰 → 제출.
4. `CREATE_IN_PROGRESS` → `CREATE_COMPLETE` → S3 콘솔에서 `demo123-cf-demo` 버킷 생성 확인.

### 잘못된 값으로 업데이트 시도
1. **Update stack** → **Use existing template** → Next.
2. 접미사를 대문자가 포함된 `INVALID`로 변경 시도(대문자는 허용되지 않음) → Next → Submit.
3. Change Set 생성 단계에서 오류 발생: *"Parameter bucket suffix failed to satisfy the constraint. Bucket suffix must be 3 to 10 lowercase letters and numbers."* — 스택에 반영되기 전에 파라미터 유효성 검사 단계에서 차단됨.

### 올바른 값으로 재시도
1. 이전 단계로 돌아가 유효한 접미사 값으로 다시 입력 → Next → Review → Submit.
2. `UPDATE_IN_PROGRESS` → `UPDATE_COMPLETE`.
3. S3 콘솔에서 새로고침하면 기존 버킷은 삭제되고 새 접미사를 가진 버킷이 새로 생성된 것을 확인.

## 요약
- 템플릿 파라미터에 `AllowedPattern`/길이 제약 같은 유효성 검사를 걸어두면 잘못된 값(대문자 포함 등)으로 업데이트를 시도할 때 Change Set 생성 단계에서 즉시 오류로 차단되어 잘못된 배포를 막고, 올바른 값으로 재시도하면 기존 리소스가 삭제되고 새 리소스로 교체되는 방식으로 업데이트가 완료된다.
