# Infrastructure Deployment with Terraform

## 개요
- VPC부터 EC2까지 전체 네트워크 인프라를 Terraform으로 구성하는 프로젝트 개요.

## 내용
### 배포할 구성요소
- VPC, Internet Gateway, Route Table, Subnet, Network Interface, EC2 인스턴스, Security Group

### 1. 네트워크 설정
1. **VPC** 생성 (CIDR block 지정)
2. **Internet Gateway** 생성 (VPC ID 필요)
3. **Route Table** 생성 (VPC ID 필요), Internet Gateway와 연결
4. **Subnet** 생성 후 Route Table과 연결 (Subnet ID, Route Table ID 필요)

### 2. Security Group 설정
- EC2 인스턴스용 Security Group 생성
- 포트 개방: **80(HTTP)**, **443(HTTPS)**, **22(SSH, EC2 접속용)**

### 3. Network Interface 설정
- 앞서 만든 Subnet 안에 IP를 가진 **Network Interface** 생성 (Subnet ID 필요)
- **Elastic IP**를 Network Interface에 연결 — 인스턴스를 인터넷에서 접근 가능하게 함

### 4. EC2 인스턴스 설정
- Ubuntu AMI로 EC2 인스턴스 생성, 앞서 만든 Network Interface 연결(Network Interface ID 필요)
- **`local-exec` Provisioner**(User Data)로 Apache/HTTP 서버를 자동 설치

## 요약
- VPC→Internet Gateway→Route Table→Subnet(네트워크) → Security Group(포트 개방) → Network Interface+Elastic IP(연결성) → EC2(User Data로 Apache 자동 설치)의 순서로 리소스를 의존 관계에 따라 쌓아 올리는 것이 Terraform으로 전체 웹 서버 인프라를 배포하는 전형적인 흐름이다.
