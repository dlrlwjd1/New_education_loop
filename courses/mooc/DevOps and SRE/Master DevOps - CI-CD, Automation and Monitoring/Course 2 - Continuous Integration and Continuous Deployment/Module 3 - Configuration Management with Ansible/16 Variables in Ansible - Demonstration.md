# Variables in Ansible - Demonstration

## 개요
- 이전 Playbook을 변수화하고, index.html을 배포하는 task를 추가하며, 런타임에 `--extra-vars`로 변수 값을 전달하는 실습.

## 내용
### 변수를 사용한 Playbook (`playbook2.yml`)

```yaml
---
- hosts: localhost
  become: true
  vars:
    package_name: apache2
    package_state: present
    service_state: started
    destination_path: /var/www/html
  tasks:
    - name: Install Apache to server
      package:
        name: "{{ package_name }}"
        state: "{{ package_state }}"

    - name: Start Apache2 service
      service:
        name: "{{ package_name }}"
        state: "{{ service_state }}"

    - name: Deploy an html code on Apache2 server
      copy:
        src: index.html
        dest: "{{ destination_path }}"
```

### 실행과 오류 해결

```bash
ansible-playbook playbook2.yml --syntax-check
ansible-playbook playbook2.yml
```

- 처음 실행 시 로컬에 `index.html` 파일이 없어 "could not find the required file" 오류 발생 → 로컬에 `index.html` 파일을 만든 뒤 재실행하면 성공.
- 이미 설치·시작된 패키지/서비스는 **Idempotency** 덕분에 다시 실행해도 "ok" 상태로 남고 변경되지 않음.
- 결과 확인: `cd /var/www/html`로 이동해 `index.html`이 배포됐는지 확인.

### 런타임에 변수 값 전달하기 (`--extra-vars`)
- Playbook에서 변수 값을 비워둔 채로, 실행 시점에 값을 넘길 수 있다.

```bash
ansible-playbook playbook2.yml --extra-vars "package_name=apache2"
```

## 요약
- Playbook의 `vars` 블록에 변수를 선언하고 `{{ 변수명 }}`으로 task 안에서 참조하면 재사용 가능한 스크립트가 되며, `--extra-vars` 옵션으로 실행 시점에 변수 값을 전달할 수도 있고, 이미 적용된 변경은 Idempotency에 의해 재실행 시 그대로 유지된다.
