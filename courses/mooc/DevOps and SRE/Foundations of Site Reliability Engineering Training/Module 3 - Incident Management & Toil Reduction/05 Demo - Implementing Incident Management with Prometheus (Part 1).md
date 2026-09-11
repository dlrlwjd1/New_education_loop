# Demo: Implementing Incident Management with Prometheus - Part 1 (데모 — Prometheus로 인시던트 관리 구현 1부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 3: Incident Management & Toil Reduction

## 개요
- **Docker화된 Nginx + Prometheus**로 인시던트 관리를 구현하는 데모(1부): 환경·Docker·Docker Compose 설정, Prometheus·경고 설정 파일 작성, 컨테이너 기동.

## 내용 · 예시 (절차)

### 1. 환경·Docker 설정
```bash
sudo yum update -y
sudo yum install docker
sudo service docker start
docker images                              # 로컬 이미지 확인
sudo usermod -aG docker ec2-user           # 사용자를 docker 그룹에 추가(EC2)
# Docker Compose 설치 (curl로 다운로드) → sudo chmod +x <docker-compose>
docker-compose version                     # 버전 확인
```

### 2. 작업 디렉터리·설정 파일
```bash
mkdir -p sre-foundations4-lab-incident-simple
cd sre-foundations4-lab-incident-simple
```
- **prometheus.yml** (YAML 들여쓰기 민감) — nano로 작성.
- **alert-rules.yml** — 경고 규칙.
- **docker-compose.yaml** — 서비스 정의:
  - **nginx** (이미지·컨테이너명·볼륨·포트 **80:80** host:docker).
  - **nginx-exporter**.
  - **prometheus** (prom/prometheus:latest).

### 3. 컨테이너 기동
```bash
sudo docker-compose up -d
# 포트 충돌·"container reused" 시:
docker ps -a                # 중단/버려진 컨테이너 확인
docker rm <id>              # 제거 (실행 중이면 먼저 stop, 또는 -f로 강제 — 프로덕션 비권장)
```
> 트러블슈팅 팁: YAML 들여쓰기 오류 시 컨테이너가 안 뜨거나 config error → 컨테이너 로그(tail)로 확인.

## 요약
- **Docker + Docker Compose**로 nginx·nginx-exporter·prometheus 스택을 구성하는 인시던트 관리 실습 준비.
- 설정 파일 **prometheus.yml·alert-rules.yml·docker-compose.yaml** (YAML 들여쓰기 주의) 작성.
- EC2에선 사용자를 **docker 그룹에 추가**, 포트 충돌 시 기존 컨테이너 제거 후 `docker-compose up -d`. (다음: 경고 시뮬레이션 — Part 2)
