# Profile Page and Account Actions

## 개요
- 인증 기능 이후 사용자가 자신의 정보를 확인하고 계정을 관리할 수 있는 간단한 profile 영역을 만든다.
- Profile page에는 user info, usage stats, change password, delete account 기능이 포함된다.
- Email/password user와 GitHub OAuth user의 차이를 고려해 change password 기능은 email user에게만 제공한다.

## 내용

### 기능 목표
이번 강의에서는 dashboard와 별도로 `/profile` route를 만든다.

Profile page에서 제공할 기능:
- 사용자 이름과 email 표시
- 가입일 표시
- item/collection 사용 통계 표시
- password 변경
- account 삭제

처음에는 단순한 profile 영역으로 시작하고, 필요하면 나중에 더 많은 설정을 추가할 수 있다.

### Profile spec 사용
이번 기능은 spec file 기반으로 진행한다.

Spec file 요지:

```text
Create the profile page with user info, stats, change password, and delete account.
```

Requirements:
- `/profile` route 생성
- user info 표시
- total items, total collections 같은 usage stats 표시
- account actions 추가
- change password는 email/password user에게만 표시
- delete account는 confirmation 필요
- 기존 codebase의 data fetching/component pattern 준수
- route 보호

### Feature workflow
Spec file을 context features folder로 옮긴 뒤 `/feature load`로 current feature에 로드한다.

그 다음 `/feature start`를 실행하면 feature branch가 만들어지고 구현이 시작된다.

강사는 feature branch를 사용하는 이유도 다시 강조한다.

문제가 생기면 해당 branch를 삭제하면 feature 시작 전 상태로 돌아갈 수 있다.

### 구현 TODO
AI가 만든 작업 목록은 대략 다음과 같다.

- profile route 생성
- user info section 추가
- usage stats 추가
- change password 기능 추가
- delete account 기능 추가
- build 실행

### AlertDialog 추가
Delete account confirmation을 위해 ShadCN `AlertDialog` component를 추가한다.

용도:
- 계정 삭제 전 경고 표시
- 사용자가 실수로 삭제하지 않도록 확인 절차 제공
- `delete` 같은 확인 문구 입력 요구

생성 위치:

```text
components/ui/alert-dialog.tsx
```

### Profile page
`/profile` page는 server component로 만든다.

중요한 convention:
- page file에는 `use client`를 붙이지 않음
- data fetching은 server side에서 처리
- form state나 dialog interaction이 필요한 부분만 client component로 분리

### Profile components
Profile 관련 component는 `components/profile` folder로 분리한다.

예상 component:

```text
components/profile/profile-info.tsx
components/profile/profile-stats.tsx
components/profile/change-password-dialog.tsx
components/profile/delete-account-dialog.tsx
```

역할:
- `profile-info`: 이름, email, 가입일, avatar 표시
- `profile-stats`: items/collections 개수 표시
- `change-password-dialog`: 현재 password와 새 password 입력
- `delete-account-dialog`: 삭제 확인 modal

### Avatar logic
Spec에서는 avatar 표시 방식도 언급한다.

기본 방향:
- GitHub login user는 GitHub avatar 사용
- avatar가 없으면 initials 사용

### Change password
Change password 기능은 email/password user에게만 보여준다.

GitHub OAuth user는 local password가 없으므로 이 기능을 제공하지 않는다.

Change password route는 다음 값을 받는다.

```text
currentPassword
newPassword
```

처리 흐름:
1. 현재 로그인한 user 확인
2. 현재 password가 맞는지 검증
3. 새 password hash 생성
4. user password 업데이트

### Delete account
Delete account는 confirmation dialog를 거친다.

강의에서는 사용자가 `delete`를 입력해야 실제 삭제가 실행되도록 했다.

삭제 후:
- account가 database에서 제거됨
- homepage로 이동
- 다시 dashboard 접근 시 login 필요
- 삭제된 credentials로 login하면 실패

### 테스트
Build가 통과한 뒤 browser에서 직접 테스트한다.

Profile 확인:
- name 표시
- email 표시
- member since 표시
- usage statistics 표시

Change password 테스트:
1. 현재 password 입력
2. 새 password 입력
3. password 변경 성공 확인
4. sign out
5. 새 password로 sign in 성공 확인

Delete account 테스트:
1. profile page에서 delete account 클릭
2. confirmation dialog 확인
3. `delete` 입력
4. account 삭제
5. homepage로 redirect
6. 기존 email/password로 login 실패 확인
7. database에서 user가 삭제되었는지 확인

### Feature complete
강사는 기능이 명확히 구현되었다고 판단해 별도 review 없이 `/feature complete`를 실행했다.

이후 feature branch가 main에 merge되고 삭제된다.

## 예시

Profile route:

```text
/profile
```

Change password form:

```text
Current password
New password
Confirm new password
```

Delete confirmation:

```text
Type "delete" to confirm
```

Profile component 구조 예:

```text
components/
  profile/
    profile-info.tsx
    profile-stats.tsx
    change-password-dialog.tsx
    delete-account-dialog.tsx
```

## 요약
- Profile page는 사용자가 자신의 계정 정보를 확인하고 관리하는 기본 영역이다.
- Change password는 credentials user에게만 제공해야 한다.
- Delete account는 confirmation dialog와 확인 문구로 실수 삭제를 방지한다.
- Page는 server component로 유지하고, dialog/form만 client component로 분리한다.
- 테스트를 통해 password 변경과 account 삭제가 실제 database에 반영되는지 확인했다.
