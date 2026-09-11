# Docker Container Running Modes - Detached Mode

## 개요
- Docker 컨테이너 실행 모드(Detached vs Foreground/Attach)의 차이와, Detached 모드의 플래그(`-d`, `--rm`), 재접속(`docker attach`), 사용 사례를 정리.

## 내용
### 두 가지 실행 모드
- **Detached(분리) 모드** — 컨테이너가 터미널과 분리되어 백그라운드에서 실행됨. 터미널이 자유로워 곧바로 다음 명령을 실행 가능.
- **Foreground(Attach) 모드** — 컨테이너가 Docker Host의 터미널에 연결(occupy)되어, 컨테이너에서 빠져나와야만 터미널에서 다른 작업을 할 수 있음.

### Detached 모드 사용법
- **`-d` 플래그** — 컨테이너를 백그라운드에서, 터미널 세션과 독립적으로 실행하도록 함.
```bash
docker run -d -p <호스트포트>:<컨테이너포트> <이미지>
```
- 컨테이너는 그 안의 루트 프로세스(root process, 애플리케이션 프로세스)가 종료될 때만 함께 종료됨.

### `--rm` 플래그
- 컨테이너 안의 프로세스가 종료되면 컨테이너를 **자동으로 삭제**하도록 지정 — Stopped 상태로 남지 않고 곧바로 Deleted(터미네이트) 상태가 되어 Docker Host에서 사라짐.
```bash
docker run -d --rm <이미지>
```
- 주로 임시 테스트 목적으로 사용.

### Detached 컨테이너와의 입출력
- Detached 컨테이너와의 입출력은 네트워크 연결을 통해서만 가능 — Container IP:Container Port로 직접 접근하거나, `-p`로 Port Binding한 Host IP:Host Port로 접근.

### 다시 Attach하기
- `docker attach <컨테이너 이름>` — 백그라운드에서 실행 중인(Detached) 컨테이너를 다시 Foreground로 가져와 터미널을 점유 — 트러블슈팅, 파일·설정 확인 등에 사용한 뒤 다시 Detached 상태로 되돌릴 수 있음.

### Detached 모드 사용 사례
1. **웹 서버, 데이터베이스 등 백그라운드 서비스 실행** — 터미널을 점유하지 않고 계속 실행되어야 하는 서비스.
2. **프로덕션 배포** — 지속적인 상호작용 없이 다수의 애플리케이션을 배포할 때.
3. **여러 컨테이너 동시 실행** — Attach 모드로는 터미널이 하나의 컨테이너에 묶여 다른 컨테이너를 시작할 수 없지만, Detached 모드로는 여러 컨테이너를 연달아 백그라운드에서 시작 가능.

## 요약
- Docker는 터미널을 점유하지 않고 백그라운드에서 실행되는 Detached 모드(`-d`, 필요 시 `--rm`으로 종료 시 자동 삭제)와 터미널을 점유하는 Foreground(Attach) 모드를 제공하며, `docker attach`로 언제든 Detached 컨테이너를 다시 Foreground로 가져올 수 있어 웹 서버·DB 같은 백그라운드 서비스나 다수의 컨테이너를 동시에 실행할 때는 Detached 모드가 적합하다.
