# Pulling and Pushing Images - Pulling an Image

## 개요
- `docker tag`로 이미지를 자신의 Docker Hub 계정 네임스페이스로 재태깅한 뒤 Push에 성공하고, 로컬 이미지를 모두 지운 뒤 `docker pull`로 다시 내려받아 검증하는 실습.

## 내용
### Push 실패 원인과 해결 — 이미지 재태깅
- Docker Host에서 로컬로 만든 이미지는 기본적으로 **`library`**라는 계정(Docker Host의 기본 네임스페이스) 아래에 있는 것으로 취급됨.
- Docker Hub에 Push하려면 이미지가 **본인의 계정 이름** 아래에 있어야 함(예: `devcloudhub`).
```bash
docker tag flask-app:v1 devcloudhub/flask-app:v1
```
- `docker tag`는 **동일한 이미지에 별칭(alias)을 하나 더 만드는 것** — 실제로는 같은 이미지(ID 동일)를 `library` 계정 이름과 `devcloudhub` 계정 이름 두 가지로 참조할 수 있게 됨.
```bash
docker images   # 같은 ID를 가진 두 개의 이름(flask-app:v1, devcloudhub/flask-app:v1)이 보임 — 크기·생성 시각도 동일
```

### 재태깅한 이미지 Push
```bash
docker push devcloudhub/flask-app:v1
```
- 정상적으로 업로드 진행 → 완료.
- Docker Hub 웹사이트에서 새로고침하면 `flask-app` 저장소가 방금 생성된 것을 확인, **Public**으로 설정되어 있고 태그 `v1`이 존재함을 확인.

### 이미지 완전 삭제 후 재다운로드 검증
```bash
docker system prune -a   # 모든 이미지(별칭 2개 모두 포함, 실제로는 하나의 이미지) 삭제
docker images             # 아무 이미지도 없음을 확인

docker pull devcloudhub/flask-app:v1   # Docker Hub에서 다시 다운로드
docker images                            # 이미지가 다시 존재함을 확인
```
- 이미지가 **Public**으로 설정되어 있어 누구나 pull 가능(Private로 설정했다면 인증이 필요).

## 요약
- Docker Hub에 이미지를 올리려면 ①계정 생성과 `docker login` 인증, ②`docker tag <이미지>:<태그> <계정명>/<이미지>:<태그>`로 자신의 계정 네임스페이스 아래로 재태깅, ③`docker push`의 세 단계가 필요하며, 이렇게 업로드해두면 로컬 이미지가 모두 삭제되거나 머신에 장애가 생겨도 `docker pull <계정명>/<이미지>:<태그>`로 언제든 이미지를 되찾을 수 있다.
