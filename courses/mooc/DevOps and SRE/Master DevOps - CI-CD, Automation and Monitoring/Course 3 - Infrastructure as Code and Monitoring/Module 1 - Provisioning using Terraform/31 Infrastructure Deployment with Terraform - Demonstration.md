# Infrastructure Deployment with Terraform - Demonstration

## 개요
- VPC부터 EC2+Nginx까지 전체 네트워크 인프라를 실제로 Terraform 코드로 작성하고 배포하는 실습.

## 내용
### 리소스 구성 순서
1. **VPC** — CIDR block만 지정한 기본 설정
2. **Internet Gateway** — 이전 단계의 VPC ID 참조, 태그 `gateway1`
3. **Route Table** — 인터넷/게이트웨이 접근을 위한 라우팅 설정
4. **Subnet** — VPC ID, CIDR block, Availability Zone 지정
5. **Route Table Association** — Subnet ID와 Route Table ID를 연결해 Subnet을 Route Table에 연결(attach)
6. **Security Group** — Egress는 모든 포트 허용, Ingress는 443(HTTPS)·22(SSH)·80(HTTP) 개방
7. **Network Interface** — Subnet ID, Private IP, Security Group 지정
8. **Elastic IP** — Network Interface에 연결. **`depends_on`으로 EC2 인스턴스 생성에 의존성 지정** — 인스턴스가 실행 중이어야 Elastic IP를 붙일 수 있기 때문
9. **EC2 인스턴스** — 생성과 동시에(User Data/local-exec 등으로) **Nginx 자동 설치**

### 배포 실행

```bash
terraform plan     # 9개 리소스 추가 예정(Subnet, Security Group, Route Table Association, Route Table, Network Interface 등) 확인
terraform apply -auto-approve
```

- 모든 리소스가 "creating" 상태를 거쳐 생성 완료.

### 검증
1. AWS 콘솔에서 인스턴스 새로고침 → Public IP 확인(초기엔 "initializing" 상태일 수 있음)
2. SSH 접속

```bash
ssh -i terraform.pem ubuntu@<Public IP>
systemctl status nginx   # "active (running)" 확인
```

3. 브라우저에서 Public IP 접속 → **"Welcome to nginx!"** 페이지 확인

## 요약
- VPC→Internet Gateway→Route Table→Subnet→Route Table Association→Security Group→Network Interface→Elastic IP(EC2에 의존)→EC2(Nginx 자동 설치) 순서로 Terraform 코드를 작성해 `plan`/`apply`로 배포하면, SSH 접속과 브라우저 접근 모두로 정상 동작하는 웹 서버 인프라 전체를 end-to-end로 검증할 수 있다.
