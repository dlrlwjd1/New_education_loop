# Ansible Playbooks

## 개요
- Ansible Playbook의 핵심 특징, 주요 섹션, 실무 활용 사례를 설명.

## 내용
### YAML이란
- **YAML** = "YAML Ain't a Markup Language"(또는 "Yet Another Markup Language") — 배우고 쓰기 쉬운 형식으로, Playbook 작성에 사용된다.

### Playbook의 핵심 특징
- **Agentless** — 워커 노드에 별도 에이전트 불필요
- **Idempotency** — 원하는 변경이 이미 적용돼 있으면 "OK"를 반환하고 아무것도 하지 않음
- **선언적(Declarative)** — key-value 쌍으로 작성

### 이점
- 재사용 가능한 코드, 여러 서버에서 동일하게 동작(일관성), 인프라 확장 용이, 다양한 OS에서 유연하게 사용 가능

### Playbook의 주요 섹션
1. **Task** — 모듈과 그 입력(argument)을 작성하는 섹션
2. **Variables** — 다른 데이터셋으로 같은 스크립트를 재사용하고 싶을 때 사용. 별도 파일, Playbook 내부, 또는 런타임에 전달 가능
3. **Conditions & Loops** — Playbook의 견고함을 높이기 위한 조건문·반복문
4. **Handlers** — 의존성이나 병렬 실행을 위한 동기화 작업
5. **Modules** — Ansible이 제공하는 작은 실행 로직 단위(services, packages, files 등)
6. **Play** — Playbook은 여러 **Play**의 조합이며, 각 Play는 **force**(대상)와 **task**로 구성

### 예시

```yaml
- name: Stop HTTPD service
  service:
    name: httpd
    state: stopped
```

- `service`가 모듈, `name`과 `state`가 인자(argument) — HTTP 서비스를 중지하는 로직을 담고 있다.

### 실무 활용 사례
1. Configuration Management
2. 여러 서버에 애플리케이션 배포
3. 오케스트레이션(여러 호스트에 걸친 변경)
4. 환경(Environment) 셋업

## 요약
- Ansible Playbook은 YAML로 작성된 선언적·멱등적 자동화 스크립트로, Task/Variables/Conditions·Loops/Handlers/Modules/Play라는 구성요소를 조합해 Configuration Management, 배포, 오케스트레이션, 환경 셋업 등 다양한 실무에 활용된다.
