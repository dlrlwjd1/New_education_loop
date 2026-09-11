# Stack Policies and Change Sets

## 개요
- 스택 업데이트 시 리소스 변경을 통제하는 Stack Policy와, 변경 사항을 미리 미리보기 할 수 있는 Change Set의 개념·구성·이점을 정리.

## 내용
### Stack Policy란
- 스택 업데이트 시 어떤 리소스가 수정될 수 있는지/없는지를 지정하는 **JSON 기반 접근 제어 문서**.
- DB나 보안 설정처럼 중요한 리소스를 의도치 않은 수정으로부터 보호하기 위해 스택에 연결(attach).

### Stack Policy의 특징
1. **의도치 않은 변경 방지** — 중요 리소스가 실수로 변경·삭제되는 것을 방지.
2. **세밀한 통제(Granular Control)** — 리소스마다 다른 규칙 적용 가능(예: EC2 변경은 허용, RDS 변경은 거부).
3. **기본 거부(Default Deny) 동작** — 명시적으로 허용하지 않는 한 모든 업데이트는 기본적으로 거부됨.
4. **스택당 하나의 정책** — 하나의 스택은 하나의 정책만 가지며, 그 정책이 스택 내 여러 리소스에 적용됨.

### Stack Policy 예시
- Statement에서 `Effect: Allow`, `Action: Update:*`, `Principal: *`, `Resource: *`로 기본적으로 모든 업데이트를 허용하되, 별도 Statement로 프로덕션 DB 리소스에 대해서만 `Effect: Deny`를 지정 — 해당 리소스만 업데이트를 막고 나머지 리소스는 계속 업데이트 가능.

### Stack Policy 구성 요소
- **Effect** — `Allow` 또는 `Deny`.
- **Action** — Update, Create 등 통제 대상 작업.
- **Principal** — 정책이 적용되는 대상(보통 `*`로 모든 사용자).
- **Resource** — 스택 내 리소스의 논리적 ID(Logical Resource ID).
- **Condition** — 선택 사항으로, 추가적인 통제 조건을 지정 가능.

### Change Set이란
- 스택에 변경 사항을 실제로 적용하기 전에 **제안된 변경 내용을 미리보기(preview)**할 수 있게 해주는 기능 — 예기치 못한 변경을 방지하며, 프로덕션 환경이나 자동화 파이프라인에서 특히 유용.
- Terraform의 `terraform plan`과 유사한 개념.

### Change Set의 이점
1. **리스크 완화(Risk Mitigation)** — 변경 적용 전 영향을 미리 확인해 프로덕션 환경에서의 놀라움을 방지.
2. **CI/CD 파이프라인 통합** — 배포 파이프라인에서 변경 사항 검증을 자동화.
3. **역할 분리(Separation of Duties)** — 한 팀이 Change Set을 생성하고, 다른 팀이 이를 검토·승인.

### Change Set 흐름
1. **Original Stack** — 배포하려는 템플릿·리소스가 정의된 기존 스택.
2. **Change Set 생성** — 변경 사항을 미리보기 위해 Change Set을 생성.
3. **Change Set 확인** — 어떤 리소스가 생성·수정·삭제되는지 상세 확인 — 특히 DB 재생성(replacement)처럼 데이터 유실로 이어질 수 있는 위험한 변경을 사전에 발견.
4. 예상치 못한 변경이 있으면 스택을 다시 업데이트해 새 Change Set을 만들거나 기존 Change Set을 폐기.
5. 모든 내용이 의도한 대로라면 **Change Set을 실행(Execute)** — CloudFormation이 스택을 실제로 업데이트.

## 요약
- Stack Policy는 기본 거부 원칙 아래 `Effect`/`Action`/`Principal`/`Resource`로 특정 리소스의 업데이트를 세밀하게 통제해 중요 리소스를 보호하고, Change Set은 스택 업데이트 전 변경 내용을 미리보기해 위험한 변경(예: DB 재생성)을 사전에 발견하고 승인 후 실행할 수 있게 해준다.
