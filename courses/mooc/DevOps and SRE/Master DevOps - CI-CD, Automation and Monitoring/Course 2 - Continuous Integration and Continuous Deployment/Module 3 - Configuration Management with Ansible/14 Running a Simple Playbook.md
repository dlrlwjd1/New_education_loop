# Running a Simple Playbook

## 개요
- Apache2를 설치·시작하는 간단한 Playbook을 작성하고 실행하는 실습.

## 내용
### Playbook 작성 (`playbook1.yml`)

```yaml
---
- hosts: localhost
  become: true
  become_user: root
  tasks:
    - name: Install Apache to server
      package:
        name: apache2
        state: present

    - name: Start Apache2 service
      service:
        name: apache2
        state: started
```

- 파일 확장자는 `.yml` 또는 `.yaml`
- `hosts`에 IP, 호스트명, 호스트 그룹, 혹은 `all`(Inventory의 모든 호스트) 지정 가능 — 이번 예제는 `localhost`
- `package` 모듈로 Apache2 설치(`name`, `state: present`)
- `service` 모듈로 Apache2 서비스 시작(`name`, `state: started`)
- root가 아닌 사용자로 실행한다면 `become: true`, `become_user: root`로 권한 상승 필수 (root로 이미 실행 중이면 생략 가능)

### 실행

```bash
# 문법 검사
ansible-playbook playbook1.yml --syntax-check

# 실제 실행
ansible-playbook playbook1.yml
```

- 실행하면 Ansible이 지정된 호스트(localhost)에 연결해 설정을 적용하는 과정이 출력된다.

### 결과 확인

```bash
systemctl status apache2
```

- Apache2가 설치되고 "active (running)" 상태인지 확인.

## 요약
- 간단한 Ansible Playbook은 `hosts` 지정 → (필요 시) `become`으로 권한 상승 → `tasks`에 `package`(설치)와 `service`(시작) 모듈을 순서대로 작성하며, `ansible-playbook <파일명>`으로 실행하고 `systemctl status`로 결과를 검증한다.
