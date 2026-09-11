# Ad-Hoc Commands

## 개요
- Ansible Ad-hoc Command의 정의, 문법, 활용 사례를 설명.

## 내용
### Ad-hoc Command란
- 원하는 호스트 서버에 연결해 **하나의 모듈(=하나의 작업)**만 실행하는 한 줄짜리 명령.
- Playbook·스크립트를 만들지 않고 일회성 작업을 수행할 때 사용.
- **Ansible CLI에서만 동작**하며 Ansible GUI에서는 사용할 수 없다.

### 문법

```bash
ansible <host> -m <module> -a "<arguments>"
```

- `<host>` — 변경을 적용할 워커 노드의 IP 또는 Inventory에 정의된 Host Group 이름
- `-m` — 사용할 모듈 이름(copy, ping, setup, service, package, template, command 등)
- `-a` — 모듈에 전달할 인자(입력값)

### 활용 사례
- 서버 상태 점검, 재부팅, 사용자 관리, 조회(query), 파일 복사 성공 여부 확인, 서비스 관리 등 일회성 작업.

### 예시

```bash
ansible webserver -m shell -a "uptime"
```

- `webserver` — Inventory 파일에 정의된 Host Group(IP 목록)
- `shell`(또는 `command`) 모듈로 `uptime`(Linux 명령)을 해당 그룹의 모든 서버에서 실행해 가동 시간을 확인

## 요약
- Ad-hoc Command는 `ansible <host> -m <module> -a "<args>"` 형태로 CLI에서만 사용하며, Playbook 없이 빠르게 단일 작업(점검, 재부팅, 명령 실행 등)을 여러 서버에 동시 실행할 때 유용하다.
