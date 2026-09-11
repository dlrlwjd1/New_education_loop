# Variables

## 개요
- Ansible 변수의 종류(Custom/Facter), 정의 위치, 단일값·리스트·딕셔너리 형태, 그리고 `register` 개념을 설명.

## 내용
### 변수의 목적
- 시스템·환경 간 차이를 처리하고 Playbook을 재사용 가능하게 만든다.
- 예: 오늘은 패키지 A를 설치하고 며칠 후엔 패키지 B를 설치해야 한다면, 변수 값만 바꾸면 나머지 스크립트는 그대로 재사용 가능.

### 변수의 두 가지 종류
1. **Custom Variable** — 사용자가 직접 정의
2. **Facter Variable** — Ansible이 자동으로 제공하는 매직 변수(시스템 정보 등)

### 변수 정의 위치
- Playbook의 `vars` 블록
- Inventory 파일(호스트 변수로)
- Ad-hoc command의 인자로

### 변수 형태
**단일 값**
```yaml
region: asia
```
- 참조: `{{ region }}`

**리스트(배열)**
```yaml
region:
  - Asia
  - Europe
  - North America
  - South America
```
- 인덱스로 참조(0부터 시작): `{{ region[2] }}` → North America

**딕셔너리(맵)**
```yaml
sample:
  argument1: value1
```
- 참조: `{{ sample.argument1 }}` 또는 `{{ sample['argument1'] }}`

### Register
- 이전에 실행된 모듈의 **출력 결과를 저장**하는 변수를 만드는 개념.

```yaml
- name: Execute shell script
  shell: ./myscript.sh
  register: result

- name: Restart Docker if result is less than 5
  service:
    name: docker
    state: restarted
  when: result.rc < 5
```

- `register: result`로 이전 task의 출력을 저장하고, `when` 조건에서 그 결과값(`result.rc` 등)을 참조해 다음 task 실행 여부를 결정할 수 있다.

## 요약
- Ansible 변수는 단일 값·리스트·딕셔너리 형태로 Playbook/Inventory/Ad-hoc command에 정의할 수 있으며, `{{ }}` 문법으로 참조하고, `register`로 이전 task의 실행 결과를 변수에 저장해 조건부 로직(`when`)에 활용할 수 있다.
