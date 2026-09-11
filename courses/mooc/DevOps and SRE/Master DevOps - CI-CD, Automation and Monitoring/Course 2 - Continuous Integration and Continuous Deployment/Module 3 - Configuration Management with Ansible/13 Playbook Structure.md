# Playbook Structure

## 개요
- Ansible Playbook의 YAML 구조 — Play, Host, Task, Handler, Variable, Become 섹션을 상세히 설명.

## 내용
### 기본 구조

```yaml
---
- hosts: all
  become: yes
  become_user: desmond
  become_method: su
  vars:
    key: value
  tasks:
    - name: Add Docker repository
      apt_repository:
        repo: "..."
        state: present
      notify: Restart Docker

  handlers:
    - name: Restart Docker
      apt:
        name: docker
        state: latest
```

### 섹션별 설명
- **`---`** — YAML 파일의 시작을 나타내는 표시(3개의 하이픈)
- **Play** — `hosts` + `tasks`의 조합. `-`로 시작하며 하나의 Playbook은 여러 Play로 구성될 수 있다.
- **Host** — 작업을 실행할 대상(Inventory 안의 그룹, 예: `all`)
- **Task 섹션 (필수)** — 여러 task로 구성되며 각 task는 `-`로 시작. Task마다 `name`(권장, 필수는 아님)을 붙여 무엇을 하는지 명시.
  - 예: `apt_repository` 모듈 — Ubuntu의 apt에 저장소를 추가. 인자로 `repository`(경로, 사용자 지정값)와 `state`(present/absent/latest 등 Ansible이 제공하는 선택값)를 받는다.
- **Notify & Handler** — `notify` 키워드로 특정 task가 완료된 후 필요할 때만 실행되는 **Handler**(의존적 task)를 호출. Handler도 이름과 모듈을 가진 일반 task와 같은 형태.
- **Variables(`vars`)** — 같은 Playbook을 다른 데이터로 재사용하고 싶을 때 사용하는 key-value 섹션.
- **Become** — 실행 사용자의 권한을 상승(escalate)시키는 플러그인.
  - `become: yes/no` — 권한 상승 여부(Boolean)
  - `become_user` — 상승할 대상 사용자(예: `desmond`, 또는 `root`)
  - `become_method` — 상승 방법(예: `su`)

### Task Block
- Task 섹션은 **block**으로 묶을 수 있어, 조건문이나 변수를 블록 전체에 한 번에 적용할 수 있다(directive를 그룹 전체에 적용).

### 흐름 요약
1. `---`로 시작
2. `hosts`로 대상 지정
3. `become` 섹션으로 실행 권한 설정
4. `vars`로 재사용할 변수 선언
5. `tasks`로 순차 실행할 작업 정의
6. `handlers`로 필요 시에만(notify로 트리거) 실행되는 의존 작업 정의

## 요약
- Ansible Playbook은 `---`로 시작해 `hosts`(대상)→`become`(권한 상승)→`vars`(변수)→`tasks`(순차 실행 작업)→`handlers`(notify로 트리거되는 의존 작업) 순으로 구성되며, 각 task는 모듈과 인자로 이루어진 YAML key-value 쌍으로 작성된다.
