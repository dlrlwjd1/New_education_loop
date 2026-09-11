# Starting Containers in Different Modes - Interactive Mode

## 개요
- Nginx 이미지로 `-it` 옵션의 인터랙티브(Attach) 모드 컨테이너를 실행하고, `Ctrl+P Ctrl+Q`(안전하게 빠져나오기)와 `exit`/`Ctrl+C`/`Ctrl+D`(컨테이너 정지)의 차이를 실습으로 비교.

## 내용
### 이미지 준비
```bash
systemctl status docker   # active 확인
docker pull nginx          # Docker Hub에서 최신 Nginx 이미지 다운로드
docker images
```

### 애플리케이션만 실행 (셸 없이)
```bash
docker run -it nginx
```
- 이름을 지정하지 않으면 Docker가 무작위 이름(예: `youthful_bernal`)을 자동 할당.
- 뒤에 셸 명령을 주지 않으면 컨테이너는 셸이 아니라 **Nginx 애플리케이션 자체를 바로 실행** — 터미널에 아무 프롬프트도 뜨지 않고 애플리케이션 로그만 출력됨.
- 다른 터미널에서 `docker ps -a`로 확인하면 컨테이너가 정상적으로 `Up` 상태.

### 빠져나오는 방법의 차이
- **`Ctrl+P` → `Ctrl+Q`** — 컨테이너를 **정지시키지 않고** 안전하게 터미널에서 빠져나옴 — `docker ps -a`로 확인하면 여전히 `Up` 상태.
- **`Ctrl+C`** 또는 **`Ctrl+D`** — 컨테이너의 메인 프로세스를 종료시켜 **컨테이너가 정지(Exited)됨** — 다시 실행하려면 `docker start <컨테이너 이름>`으로 수동 시작 필요.

### 셸(Bash)로 진입하는 컨테이너
```bash
docker run -it nginx bash
```
- 이미지 이름 뒤에 `bash`(또는 `bin/bash`)를 추가하면 애플리케이션 대신 **컨테이너 내부 셸에 진입** — 프롬프트가 컨테이너 ID로 바뀌어 컨테이너 안에 있음을 확인 가능.
- 다른 터미널의 `docker ps -a`에서 표시되는 컨테이너 ID와 실제 진입한 셸의 컨테이너 ID가 일치하는지 확인 가능.
- 여기서도 마찬가지로 **`Ctrl+P Ctrl+Q`로 나가면 컨테이너는 계속 실행**되지만, **`exit`(또는 `Ctrl+C`/`Ctrl+D`)로 나가면 컨테이너가 정지**됨.
- 정지된 컨테이너는 `docker start <컨테이너 이름 또는 ID>`로 다시 시작 가능.

## 요약
- `docker run -it <이미지>`는 애플리케이션을 바로 실행하고, `docker run -it <이미지> bash`는 컨테이너 내부 셸에 진입하는데, 두 경우 모두 `Ctrl+P Ctrl+Q`는 컨테이너를 실행 상태로 둔 채 안전하게 빠져나오는 반면 `exit`/`Ctrl+C`/`Ctrl+D`는 컨테이너의 메인 프로세스를 종료시켜 컨테이너를 정지시키므로 다시 `docker start`로 재시작해야 한다는 차이가 있다.
