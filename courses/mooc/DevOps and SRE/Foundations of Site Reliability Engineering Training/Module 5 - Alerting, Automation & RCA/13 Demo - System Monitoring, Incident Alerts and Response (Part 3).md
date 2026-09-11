# Demo: Setting Up System Monitoring, Incident Alerts, and Response with Prometheus and Alertmanager - Part 3 (데모 — 시스템 모니터링·인시던트 경고·대응 3부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 5: Alerting, Automation & RCA

## 개요
- 서비스를 **시작·활성화**하고, **Nginx 중지로 인시던트를 트리거**해 Prometheus 경고가 firing되는지 검증하는 데모(3부).

## 내용 · 예시 (절차)

### 서비스 시작·활성화
```bash
# 모든 서비스 start + enable (부팅 시 자동):
#   node_exporter, nginx exporter, alertmanager, prometheus, webhook
```

### 상태 확인
```bash
sudo systemctl status node_exporter    # running
sudo systemctl status <nginx exporter> # running
sudo systemctl status alertmanager     # running
sudo systemctl status prometheus       # 실패 시 → 설정 파일(오타·들여쓰기) 수정 후 재시작 → active running
```
> 문제 대부분은 **설정 파일 형식/오타** — 파일 재확인.

### 인시던트 트리거·검증
```bash
sudo systemctl stop nginx      # 인시던트 발생
```
- Prometheus **Alerts** 페이지 관찰:
  - 처음엔 정상 → 약 20~30초 후 **pending**(exporter를 계속 확인/heartbeat 대기).
  - 잠시 후 **firing(active)** — Nginx down 경고 발화.
- 이 경고에 **이메일·PagerDuty** 등을 연결해 담당자에게 통지 가능.

## 요약
- 모든 서비스를 **systemctl start + enable**하고 status로 확인(실패 시 설정 파일 수정).
- **`systemctl stop nginx`**로 인시던트를 만들면 Prometheus 경고가 **inactive → pending → firing**으로 전이됨을 검증.
- Prometheus·Node Exporter·Nginx Exporter·Alertmanager로 **완전한 모니터링·경고·대응 스택**을 구성·검증했다.
