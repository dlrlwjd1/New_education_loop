# Demo: Implementing Incident Management with Prometheus - Part 2 (데모 — Prometheus로 인시던트 관리 구현 2부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 3: Incident Management & Toil Reduction

## 개요
- 1부에서 세운 스택으로 **Nginx 장애를 시뮬레이션**하고 Prometheus에서 **경고 생애주기(alert lifecycle)**를 관찰·복구하는 데모(2부).

## 내용 · 예시

### 컨테이너 확인·트러블슈팅
```bash
docker ps                      # nginx(80)·prometheus(9090)·nginx-exporter 실행 확인
# 오류 시(대개 YAML 들여쓰기):
docker logs --tail 50 <container>   # 컨테이너 로그로 원인 파악
```

### Prometheus 접속·타깃 상태
- 브라우저 `http://<public-IP>:9090` → Prometheus.
- **Status → Target health**: nginx-exporter(또는 nginx:80)와 prometheus가 **up** 확인 (Prometheus가 데이터를 pull하는 두 타깃).

### 장애 시뮬레이션
```bash
sudo docker stop nginx         # nginx 컨테이너 중지
docker ps                      # nginx 사라짐, exporter·prometheus만 남음
# (exporter도 stop해 크래시 시뮬레이션)
```
- `http://<IP>:80` → "Welcome to nginx" 사라짐(오프라인).
- Prometheus **Target health** 새로고침 → **down**.
- **Alerts** → 경고가 **firing**(발화) 상태로 전환 (nginx 오프라인 감지).
- → 경고 규칙에 **이메일·티켓(SNOW) 통지**를 연결해 담당자에게 알림 가능.
> 참고: 무료 **node/nginx exporter** 사용(직접 API 연결 아님). Prometheus 유료판은 API 직접 연결 가능.

### 복구
```bash
sudo docker start nginx-exporter
sudo docker start nginx
sudo docker restart prometheus
# Prometheus Target health 새로고침 → up
# Alerts → inactive(초록), 발화 중단
```

## 요약
- **`docker stop nginx`**로 장애를 시뮬레이션 → Prometheus **Target health = down**, **Alert = firing**.
- 컨테이너를 다시 start·restart하면 **up + Alert inactive**로 복구.
- Docker 컨테이너(Prometheus + Nginx)를 함께 운영하며 장애 발생·경고 발화·복구의 전체 인시던트 흐름을 실습했다.
