# Demo: Monitoring EC2 Instance and Alerting Strategy with Prometheus, Node Exporter, and Alertmanager - Part 1 (데모 — EC2 모니터링·경고 전략 1부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 5: Alerting, Automation & RCA

## 개요
- EC2에서 **Prometheus + Node Exporter + Alertmanager**로 시스템 메트릭 추적·경고 규칙 정의·인시던트 통지를 구현하는 데모(1부): 설치·설정 파일 작성.
- 도구: EC2, Prometheus, Node Exporter, Alertmanager, Python/Flask. 사전: 보안 그룹에 포트 **80·9090·9093·9100** 허용.

## 내용 · 예시 (절차)

### 1. 환경·도구 설치
```bash
# 보안 그룹에 9090·9093·9100 포트 추가
sudo yum update -y
# 필요 패키지(도구) 설치
```

### 2. Prometheus 설치·설정
```bash
# Prometheus 다운로드·tar 압축 해제 → cd prometheus-*-linux
sudo nano prometheus.yml       # 워크북 내용으로 교체 (YAML 들여쓰기 민감)
```

### 3~4. 경고 규칙·레코딩 규칙
```bash
sudo nano alert.rules.yml      # 경고 규칙
sudo nano recording.rules.yml  # 레코딩 규칙
```

### 5. Node Exporter 설치·실행
```bash
# 스크립트로 node exporter 다운로드·tar → 실행 (포트 9100)
# 브라우저 http://<public-IP>:9100 → "Node Exporter" 확인
```

### 6. 커스텀 메트릭 엔드포인트
```bash
mkdir custom-metrics && cd custom-metrics
# custom_metrics.sh 작성 → sudo chmod +x custom_metrics.sh
# while 루프로 실행 (백그라운드 PID)
# http://<IP>:9100/metrics → 다양한 메트릭 확인
```

### 7. Alertmanager 설치·설정
```bash
# Alertmanager 다운로드·tar → cd alertmanager
sudo nano alertmanager.yml     # 워크북 내용으로 교체 (YAML 들여쓰기 민감)
```

## 요약
- EC2에 **Prometheus·Node Exporter(9100)·Alertmanager(9093)**를 설치하고 설정 파일을 작성하는 준비 단계.
- **prometheus.yml·alert.rules.yml·recording.rules.yml·alertmanager.yml** 작성 + **커스텀 메트릭 스크립트**로 `/metrics` 노출.
- (다음: 서비스 실행·경고 워크플로 테스트 — Part 2) (YAML 들여쓰기 주의)
