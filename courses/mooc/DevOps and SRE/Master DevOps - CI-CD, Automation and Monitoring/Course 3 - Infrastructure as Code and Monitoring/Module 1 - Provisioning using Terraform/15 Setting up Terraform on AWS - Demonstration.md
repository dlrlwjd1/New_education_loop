# Setting up Terraform on AWS - Demonstration

## 개요
- AWS에 EC2 인스턴스를 생성하고 SSH로 접속해 Terraform을 설치하는 실습.

## 내용
### 1. EC2 인스턴스 생성
- **Launch Instances** → 이름 지정(예: `terraform`)
- AMI: **Ubuntu**(최신 버전 기본 선택)
- Instance Type: **t2.micro**(Free Tier 대상, 월 750시간 무료. 없으면 **t3.micro**도 Free Tier 대상)
- Key Pair 생성(예: `terraform`) — SSH 직접 접속 시 **.pem** 형식, PuTTY 사용 시 **.ppk** 형식 선택 (다운로드 폴더에 자동 저장됨)
- 네트워크 설정은 기본값 유지 후 인스턴스 시작(Launch)

### 2. 보안 그룹(Security Group) 설정
- 기본적으로 SSH(포트 22)만 허용되어 있음
- Security Group의 **Inbound Rules**를 수정해 모든 트래픽을 모든 주소에서 허용하도록 변경 후 저장

### 3. SSH 접속

```bash
ssh -i terraform.pem ubuntu@<퍼블릭 IP>
```

- Ubuntu AMI의 기본 사용자명은 `ubuntu`
- 최초 접속 시 호스트 신뢰 여부(fingerprint) 확인 메시지에 `yes` 입력

### 4. Terraform 설치 (Ubuntu/Debian 공식 문서 기준)

```bash
sudo apt update -y

# HashiCorp GPG 키 다운로드 및 등록
wget -O- https://apt.releases.hashicorp.com/gpg | gpg --dearmor | sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg

# 아키텍처(AMD/ARM)에 맞는 HashiCorp 저장소를 apt 소스 목록에 추가
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list

sudo apt update
sudo apt install terraform

# 설치 확인
terraform -v
```

## 요약
- AWS에서 Terraform 작업 환경을 준비하려면 Ubuntu EC2 인스턴스를 생성하고 Security Group의 인바운드 규칙을 조정한 뒤, SSH로 접속해 HashiCorp 공식 apt 저장소를 등록하고 `apt install terraform`으로 설치·검증한다.
