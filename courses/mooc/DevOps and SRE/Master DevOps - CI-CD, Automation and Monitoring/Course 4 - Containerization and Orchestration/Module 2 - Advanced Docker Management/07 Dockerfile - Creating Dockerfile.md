# Dockerfile - Creating Dockerfile

## 개요
- 간단한 `FROM`+`CMD` Dockerfile을 직접 작성하고 `docker build`로 이미지를 만드는 과정에서, 각 레이어가 중간 컨테이너(intermediate container)를 거쳐 커밋되는 내부 동작 원리를 정리.

## 내용
### Dockerfile 작성
```bash
touch Dockerfile
# 편집기(gedit, vi 등)로 아래 내용 작성
```
```dockerfile
FROM ubuntu
CMD echo "Hello World"
```
- `FROM` — 베이스 이미지(Docker Hub 공식 Ubuntu 이미지)를 지정 — 첫 번째 레이어.
- `CMD` — 베이스 이미지 위에서 실행할 명령(`echo Hello World`) — 두 번째 레이어.

### 빌드
```bash
docker build .
```
- **태그(`-t`)를 지정하지 않으면 이미지 이름 없이 ID만 생성됨.**

### 빌드 내부 동작 원리
1. Docker가 베이스 이미지(Ubuntu, Layer 1)로부터 **중간 컨테이너(intermediate container)**를 생성.
2. 이 중간 컨테이너 안에서 Dockerfile의 다음 지시문(`CMD echo Hello World`, Layer 2)이 실행됨.
3. 실행이 끝나면 Docker가 **`docker commit`**과 같은 방식으로 이 중간 컨테이너를 새로운 이미지 레이어로 변환.
4. 레이어가 만들어지고 나면 **중간 컨테이너는 삭제됨**("Removing intermediate container ...") — 최종적으로 남는 것은 이미지 레이어들.
5. 이 과정을 Dockerfile의 지시문 수만큼 반복해, 최종 이미지는 여러 레이어가 쌓인 결과물이 됨.

### 최종 이미지에 대한 오해 주의
- `docker build` 결과로 표시되는 ID(예: `7c22...`)는 **최상위(topmost) 레이어의 ID일 뿐**, 실제 최종 이미지는 **Layer 1(베이스 이미지) + Layer 2(CMD 레이어) 전체의 조합**.
- Docker Hub에서 이 이미지를 pull하면 Layer 1과 Layer 2가 모두 함께 다운로드됨 — 최상위 레이어 하나만 있는 것이 아님.

### 이름·태그 없는 이미지 실행
```bash
docker images        # 이름/태그 없이 ID만 존재
docker run --name test <이미지 ID>   # 사람이 기억하기 어려운 ID로도 실행 가능
```
- Docker 내부적으로는 모든 것을 ID로 참조하며, 사람이 다루기 편하도록 이름(태그)을 붙이는 것 — 태그가 없으면 `docker tag` 명령으로 나중에 이름을 붙일 수 있음.
- `docker run`은 이미지 이름이든 ID든 상관없이 정상 동작 — 실행 결과로 "Hello World" 출력을 확인해 이미지 빌드와 컨테이너 실행이 모두 성공했음을 검증.

## 요약
- Dockerfile의 각 지시문은 빌드 과정에서 이전 레이어로부터 중간 컨테이너를 만들어 명령을 실행한 뒤 그 결과를 새 레이어로 커밋하고 중간 컨테이너를 삭제하는 과정을 반복하며, `docker build`가 보여주는 최종 ID는 최상위 레이어일 뿐 실제로는 모든 레이어(베이스 이미지 포함)가 합쳐진 것이 최종 이미지이고, 태그 없이 빌드된 이미지도 ID만으로 `docker run` 실행이 가능하다.
