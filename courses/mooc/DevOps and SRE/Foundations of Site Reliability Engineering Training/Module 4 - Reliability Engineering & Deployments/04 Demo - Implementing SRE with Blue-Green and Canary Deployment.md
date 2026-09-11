# Demo: Implementing SRE with Blue-Green and Canary Deployment (데모 — 블루-그린·카나리 배포로 SRE 구현)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 4: Reliability Engineering & Deployments

## 개요
- **블루-그린 배포**로 업그레이드 중 제로 다운타임을 유지하고, **카나리 배포**로 블루·그린 버전 간 트래픽을 분할하는 데모.
- 도구: AWS EC2(포트 80), Nginx, Python. 사전: 포트 80 열린 보안 그룹.

## 내용 · 예시 (절차)

### 1. 환경 설정
```bash
sudo yum update -y
sudo yum install -y nginx python3
sudo systemctl start nginx
sudo systemctl enable nginx        # 포트 80
```

### 2. 블루·그린 환경 생성
```bash
sudo mkdir -p /var/www/blue    # blue용 HTML 파일 작성
sudo mkdir -p /var/www/green   # green용 HTML 파일 작성
```

### 3. Blue를 active로 배포
```bash
# nginx가 blue를 서빙하도록 설정 (시뮬레이션 프로덕션)
sudo nginx -t                  # 설정 테스트 → successful
sudo systemctl reload nginx
# 브라우저에서 EC2 public IP → "blue version" 확인
```

### 4. Blue → Green 전환
```bash
sudo sed -i 's|/blue|/green|' /etc/nginx/conf.d/site.conf   # 설정에서 blue→green
sudo nginx -t
sudo systemctl reload nginx
# 브라우저 새로고침 → "green version" (거의 무중단 전환)
```

### 5~6. 카나리 배포 설정 (Python HTTP 서버로 두 버전 실행)
```bash
sudo pkill -f "python3 -m http.server"    # 기존 프로세스 정리
nohup python3 -m http.server 8081 --directory /var/www/blue &    # blue → 8081
nohup python3 -m http.server 8082 --directory /var/www/green &   # green → 8082
curl localhost:8081   # blue version
curl localhost:8082   # green version
# nginx를 카나리 배포용으로 설정 (트래픽 분할) → sudo nginx -t → reload
```

### 7. 카나리 테스트
```bash
# 20회 루프로 curl localhost(:80)
# → blue version / green version이 섞여 나옴 (약 80-20 분할)
# 로드밸런서가 트래픽을 두 버전에 분배
```

## 요약
- **블루-그린**: `/var/www/blue`·`/var/www/green` 두 환경을 만들고 nginx 설정을 `sed`로 전환(`nginx -t` → `reload`)해 **무중단 전환**.
- **카나리**: 두 버전을 Python HTTP 서버(8081/8082)로 띄우고 nginx로 **트래픽 분할**(약 80:20).
- 설정을 즉석에서 교체하고 로드밸런싱으로 시스템 다운타임 없이 배포를 전환하는 실습.
