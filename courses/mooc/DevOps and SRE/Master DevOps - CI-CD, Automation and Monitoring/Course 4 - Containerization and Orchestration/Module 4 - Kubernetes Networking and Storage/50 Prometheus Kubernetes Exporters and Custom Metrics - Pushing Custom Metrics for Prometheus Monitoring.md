# Prometheus Kubernetes Exporters and Custom Metrics - Pushing Custom Metrics for Prometheus Monitoring

## 개요
- 권한 문제를 root 사용자 전환으로 해결해 Docker 이미지를 빌드하고, Docker Hub에 로그인·푸시한 뒤, 이 이미지를 사용하는 Deployment YAML 작성을 시작.
- 참고: 원본 자막에서 Pod를 가리킬 때 "part"/"board"라는 단어가 등장하는 것은 자동 음성 인식 오류이며, 이 노트에서는 문맥에 맞게 Pod로 표기.

## 내용
### 권한 문제 해결 — root 사용자로 전환
- 이전 강의에서 발생한 `permission denied` 오류는 일반 사용자(`edureka`)에게 Docker 실행 권한이 없어서 발생.
```bash
sudo su -
cd /home/edureka/app_yamls/custom-metric-app
```
- **root 사용자로 전환**하면 Docker 명령을 정상 실행할 수 있음.

### 이미지 정리 후 재빌드
```bash
docker system prune -a
docker ps -a
docker images
```
- 기존에 잘못 만들어졌던 이미지·컨테이너를 모두 정리(prune)한 뒤 처음부터 다시 빌드.
```bash
docker build -t jsojdev07/custom-metric-app .
```
- **`-t <Docker Hub 계정명>/custom-metric-app`** 형태로 태깅해야 나중에 Docker Hub에 푸시 가능.
```bash
docker images
```
- 빌드된 이미지 확인(생성된 지 몇 초밖에 안 됨).

### Docker Hub 로그인 — 디바이스 인증 코드 방식
```bash
docker login
```
- 사용자 ID/비밀번호를 직접 입력하는 대신, **디바이스 활성화 코드(device activation code)**가 표시됨.
- 표시된 URL을 웹 브라우저에서 열고, 코드를 입력한 뒤 **Continue → Confirm**하면 로그인 완료(브라우저 기반 디바이스 인증 로그인 흐름).
- "Login Succeeded" 메시지로 로그인 성공 확인.

### Docker Hub에 이미지 푸시
```bash
docker push jsojdev07/custom-metric-app
```
- 푸시 진행 후 Docker Hub 웹 페이지를 새로고침해 **`jsojdev07/custom-metric-app`** 이미지가 정상적으로 업로드된 것을 확인(약 1분 이내 완료).

### 다시 일반 사용자로 전환 후 Deployment YAML 작성 시작
```bash
su - edureka
kubectl get pod
```
- root 권한 작업이 끝났으므로 다시 일반 사용자(`edureka`)로 복귀해 `kubectl` 명령이 정상 동작함을 확인.
```bash
vi deploy.yaml
```
- 작성 중인 Deployment YAML의 핵심 구조:
  - `apps/v1` API 버전의 Deployment, 이름은 `custom-metric-app`, **레플리카 1개**.
  - 레이블이 일치하는 Pod가 있으면 관리, 없으면 `template` 섹션으로 새로 생성.
  - `template`의 컨테이너 이미지로 **방금 Docker Hub에 푸시한 이미지**(`jsojdev07/custom-metric-app`)를 사용.
  - **컨테이너 포트는 3000번** — Dockerfile에서 애플리케이션을 3000번 포트로 `EXPOSE`했기 때문에 이와 일치시킴.

## 요약
- 권한 문제는 `sudo su -`로 root 사용자로 전환해 해결했으며, `docker system prune -a`로 이미지를 정리한 뒤 `docker build -t <Docker Hub 계정>/custom-metric-app .`으로 재빌드하고, 디바이스 활성화 코드 방식으로 `docker login`한 뒤 `docker push`로 Docker Hub에 이미지를 업로드했고, 이후 일반 사용자로 복귀해 이 이미지를 참조하며 컨테이너 포트 3000을 사용하는 Deployment YAML(`custom-metric-app`, 레플리카 1개) 작성을 시작했다.
