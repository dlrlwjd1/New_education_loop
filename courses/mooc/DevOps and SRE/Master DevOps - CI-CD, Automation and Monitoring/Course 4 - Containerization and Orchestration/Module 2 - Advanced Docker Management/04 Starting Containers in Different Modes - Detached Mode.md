# Starting Containers in Different Modes - Detached Mode

## 개요
- `-d` 플래그로 컨테이너를 백그라운드에서 실행하고, `docker logs`로 로그를 확인하며, `docker container prune`/`docker image prune`/`docker system prune`으로 정리하는 실습.

## 내용
### Detach 모드로 컨테이너 실행
```bash
docker run -d nginx
```
- `-d`만 있으면 컨테이너가 즉시 백그라운드에서 실행되어 **터미널이 점유되지 않음** — `Ctrl+C`, `exit`, `Ctrl+P Ctrl+Q` 같은 탈출 동작이 필요 없음.
```bash
docker ps -a   # 새로 생성된 컨테이너의 (Truncated) ID와 상태 확인
docker stop <이름 또는 ID>
docker start <이름 또는 ID>
```

### 로그 확인
- Attach 모드로 실행하면 터미널에 애플리케이션 로그가 그대로 출력되어 즉시 확인 가능하지만, Detach 모드에서는 별도로 로그를 조회해야 함:
```bash
docker logs <이름 또는 ID>
```
- 이름과 ID 모두 Docker Host 내에서 고유하므로 어느 쪽을 사용해도 무방.

### 정리(cleanup) 명령
```bash
docker stop <컨테이너1> <컨테이너2> ...   # 여러 컨테이너를 한 번에 정지 (이름/ID 혼용 가능)
docker rm <컨테이너>                        # 정지된 컨테이너 삭제
docker rm -f <컨테이너>                      # 실행 중이어도 강제 삭제
```
- **`docker container prune`** — 정지된(Stopped) 모든 컨테이너를 한 번에 삭제(실행 중인 컨테이너는 영향 없음).
- **`docker image prune`** — 어떤 컨테이너에서도 사용되지 않는 "댕글링(dangling)" 이미지를 삭제 — 단, 컨테이너가 완전히 삭제된 후가 아니면 예상대로 지워지지 않을 수 있음(실습에서 이미지가 곧바로 지워지지 않는 사례 확인).
- **`docker system prune -a`** — `docker image prune` + `docker container prune`을 합친 것과 유사하게, 정지된 컨테이너·미사용 네트워크·연결된 컨테이너가 없는 이미지·사용되지 않는 빌드 캐시(레이어)까지 한 번에 정리. `-a` 옵션으로 이미지까지 포함해 정리 범위를 넓힘 — 확보된 공간(예: 192.5MB)이 출력됨.

## 요약
- `-d` 플래그만 지정하면 컨테이너가 곧바로 백그라운드에서 실행되어 터미널을 점유하지 않으며, 로그 확인은 `docker logs`로 별도 수행하고, 정리 작업은 `docker container prune`(정지된 컨테이너), `docker image prune`(미사용 이미지), `docker system prune -a`(컨테이너·네트워크·이미지·빌드 캐시 전체)로 단계적으로 넓혀가며 수행할 수 있다.
