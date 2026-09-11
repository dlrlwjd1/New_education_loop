# Ansible Roles - Demonstration

## 개요
- `ansible-galaxy` 명령으로 Apache Role을 생성하고, task/vars/handlers/files를 채운 뒤 Playbook에서 Role을 호출하는 실습.

## 내용
### 1. Role 생성

```bash
mkdir roles && cd roles
ansible-galaxy init apache
```

- 7개 표준 디렉터리(`defaults`, `vars`, `handlers`, `tasks`, `files`, `meta`, `templates`)가 자동 생성됨.
- `tree` 명령(패키지 설치 필요할 수 있음)으로 디렉터리 구조를 시각적으로 확인 가능.

### 2. 각 디렉터리 채우기
- **`tasks/main.yaml`** — 헤딩 없이 바로 task 목록 작성 (명령 실행, 패키지 설치, 서비스 시작, HTML 코드 복사, notify 등). Handler task와 host 정보는 여기 포함하지 않음. YAML은 공백(들여쓰기)에 민감하므로 주의.
- **`vars/main.yaml`** — task에서 쓰는 변수와 값을 정의.
- **`handlers/main.yaml`** — handler task 작성(헤딩 불필요, task 내용만).
- **`files/`** — task가 참조하는 정적 파일(예: `index.html`)을 여기 배치. (Jinja2 템플릿이 필요하면 `templates/` 사용)

### 3. Role을 호출하는 Playbook (`playbook4.yml`, roles 디렉터리 바깥에 위치)

```yaml
---
- hosts: localhost
  become: true
  become_user: root
  roles:
    - apache
```

- `tasks` 섹션 대신 **`roles`** 섹션에 role 이름만 나열 — 여러 role을 추가로 나열할 수도 있음.

### 4. 실행

```bash
ansible-playbook playbook4.yml
```

- Ansible이 `roles/apache` 디렉터리를 찾아가 tasks·handlers를 순서대로 실행 — 패키지 설치, 서비스 시작, HTML 배포, handler 실행까지 확인.

## 요약
- `ansible-galaxy init <이름>`으로 Role의 7개 표준 디렉터리를 생성한 뒤 tasks/vars/handlers/files에 각각 내용을 채우면, Playbook에서는 `tasks` 대신 `roles: [role이름]`만 지정해 여러 Role을 조합·재사용할 수 있다.
