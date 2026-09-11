# Handlers in Ansible - Demonstration

## 개요
- HTML 파일 변경이 있을 때만 Apache2 서비스를 재시작하는 Handler를 작성하고, Handler가 항상 마지막에 실행됨을 확인하는 실습.

## 내용
### Playbook (`playbook3.yml`)

```yaml
---
- hosts: localhost
  become: true
  vars:
    package_name: apache2
  tasks:
    - name: Execute a command
      command: echo "start the deployment on Apache2 server"
      notify: Status of command

    - name: Install Apache2
      package:
        name: "{{ package_name }}"
        state: present

    - name: Start Apache2 service
      service:
        name: "{{ package_name }}"
        state: started

    - name: Deploy an html code on Apache2 server
      copy:
        src: index.html
        dest: /var/www/html
      notify: Restart Apache2

  handlers:
    - name: Status of command
      debug:
        msg: "Command executed successfully"

    - name: Restart Apache2
      service:
        name: "{{ package_name }}"
        state: restarted
```

### 동작 확인
1. **변경이 없을 때**: `index.html`을 수정하지 않고 재실행하면, Deploy task가 "이미 배포됨(no change)" 상태이므로 `notify`가 트리거되지 않아 handler가 실행되지 않는다 — Apache2 서비스도 불필요하게 재시작되지 않는다.
2. **변경이 있을 때**: `index.html`을 수정한 뒤 재실행하면, Deploy task 상태가 "changed"로 바뀌어 `notify: Restart Apache2` handler가 트리거된다.
3. **Handler는 항상 마지막에 실행**: 첫 번째 task("Execute a command")에서 이미 `notify: Status of command`를 걸어도, 해당 handler는 즉시 실행되지 않고 **모든 task가 끝난 뒤** 다른 handler(Restart Apache2)와 함께 순서대로 실행된다.

## 요약
- Handler는 대응하는 부모 task에 실제 변경(changed)이 있을 때만 `notify`로 트리거되며, 아무리 앞쪽 task에서 notify되었더라도 실제 실행은 Playbook의 모든 task가 완료된 뒤 이루어진다 — 이 두 특성이 "필요할 때만, 마지막에" 서비스 재시작 등을 수행하게 만드는 Handler의 핵심 동작이다.
