# Demo: Automating SRE with Ansible and HTTPS Nginx (데모 — Ansible과 HTTPS Nginx로 SRE 자동화)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 4: Reliability Engineering & Deployments

## 개요
- **Ansible**로 EC2에 **HTTPS 지원 Nginx 서버** 설치·구성을 자동화하는 데모 → 수동 설정·구성 드리프트(drift) 제거.
- 도구: EC2(Amazon Linux 2), Ansible, Nginx(SSL), OpenSSL. 사전: 포트 **80·443** 열린 보안 그룹.

## 내용 · 예시 (절차)

### 1. Ansible 설치·인벤토리
```bash
sudo yum update -y
sudo dnf install ansible-core -y
echo "localhost ansible_connection=local" > inventory   # 로컬 실행 인벤토리
```

### 2. HTTPS Nginx 플레이북 작성
```bash
sudo nano nginx-https.yaml   # 워크북 내용 붙여넣기 (YAML 들여쓰기 민감!) → Ctrl+O, Ctrl+X
cat nginx-https.yaml
```

### 3. 플레이북 실행·검증
```bash
ansible-playbook nginx-https.yaml    # 실행 → 완료
# 브라우저에서 EC2 public IP (HTTPS) → "연결이 비공개가 아님" 경고(자체 서명 인증서)
#   → Advanced → 진행 → "Hello from Self-Signed Nginx via Ansible"
```

### 4. Nginx 중지 플레이북 작성·실행
```bash
sudo nano stop_nginx.yaml    # 워크북 내용 붙여넣기 (들여쓰기 주의) → 저장
cat stop_nginx.yaml
ansible-playbook stop_nginx.yaml     # nginx 서비스 중지
# 브라우저 새로고침 → 다운 확인
```

## 요약
- **Ansible**을 설치하고 **로컬 인벤토리**를 만든 뒤, **플레이북(YAML)**으로 HTTPS Nginx를 자동 배포·중지.
- `ansible-playbook nginx-https.yaml`로 자체 서명 HTTPS Nginx를 올리고, `stop_nginx.yaml`로 중지 → **수동 설정 없이 반복 가능·드리프트 제거**.
- (YAML 들여쓰기 민감 — 붙여넣기 후 형식 확인) (모듈 4 완료)
