# Advanced Features in Ansible Playbooks

## 개요
- Ansible Playbook을 더 동적이고 견고하게 만드는 조건문(Conditionals), 반복문(Loops), 에러 핸들링 기법을 정리한 리딩.

## 내용
### 1. Conditionals — Task 실행 제어
- **`when`** — 조건식이 참일 때만 task를 실행.
  - 예: 운영체제 계열이 Debian일 때만 Apache 설치
- **여러 조건 결합** — `and`, `or` 같은 논리 연산자로 여러 조건을 결합.
  - 예: "Debian 계열이면서 `apache_installed` 변수가 정의되어 있을 때만" Apache 서비스 재시작

### 2. Loops — 반복 작업 자동화
- **`loop`** — 아이템 목록을 순회하며 같은 task를 반복 실행.
  - 예: `alice`, `bob`, `charlie` 세 명의 사용자를 한 번에 생성
- **딕셔너리에 대한 반복** — key-value 쌍을 순회하며 처리.
  - 예: 지정된 사용자 ID로 여러 사용자 생성
- **`loop_control`** — 반복 변수의 이름을 커스터마이즈하는 등 반복 동작을 세밀하게 제어.
  - 예: 기본 변수명 `item` 대신 `user_item`처럼 의미 있는 이름 사용

### 3. Error Handling — 견고한 Playbook 만들기
- **`ignore_errors: true`** — task가 실패해도 Playbook 실행을 계속 진행.
  - 예: 존재하지 않는 서비스를 중지하려다 실패해도 다음 단계로 진행
- **`failed_when`** — 사용자 정의 실패 조건을 지정.
  - 예: 루트 파티션 사용량이 100%면 실패로 간주
- **`until`** — 조건이 충족되거나 최대 재시도 횟수에 도달할 때까지 task를 재시도.

## 요약
- Ansible Playbook은 `when`(조건부 실행), `loop`/`loop_control`(반복 작업), `ignore_errors`/`failed_when`/`until`(에러 핸들링)이라는 고급 기능을 통해 단순 자동화를 넘어 상황에 따라 유연하게 대응하고 실패를 우아하게 처리하는 견고한 자동화 워크플로우로 발전할 수 있다.
