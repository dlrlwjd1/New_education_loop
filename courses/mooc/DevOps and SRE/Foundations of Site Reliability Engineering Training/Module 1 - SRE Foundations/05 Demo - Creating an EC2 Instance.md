# Demo: Creating an EC2 Instance (데모 — EC2 인스턴스 생성)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 1: SRE Foundations

## 개요
- AWS에서 **EC2 인스턴스를 생성·연결**하는 과정을 데모로 다룬다 (이후 SRE 실습의 기반 환경).
- 도구: AWS 계정 + 관리자 접근. 사전 요구사항 없음(첫 데모).

## 내용 · 예시 (절차)

### 1. EC2 인스턴스 생성·시작
1. 브라우저에서 **AWS Management Console** 로그인.
2. 우상단에서 **리전 선택** (예: US Ohio, 또는 가까운 곳).
3. **EC2** 서비스로 이동 → **Launch Instance** 클릭.
4. 이름 지정: `My Server`.
5. AMI: **Amazon Linux 2023 (kernel 6.1)** 선택.
6. 인스턴스 유형: **t2.medium**.
7. 키 페어: 데모이므로 **Proceed without a key pair**.
8. 네트워크 설정: **HTTP·HTTPS 트래픽 허용** → 보안 그룹 자동 생성.
9. 스토리지: 기본값.
10. **Launch instance** → 상태 pending → 새로고침 시 **running**.
   - (도메인 추가, VPC/서브넷, 종료 동작·예약 종료 등 다양한 설정 가능하나 데모는 기본.)

### 2. 인스턴스 연결·AWS 구성
- 실행 중인 인스턴스 선택 → **Connect** → **public IP**로 연결, 사용자 **ec2-user** → 브라우저 내 셸(Cloud Shell) 접속.
- **AWS 구성**: `aws configure` → 랩 데모의 **액세스 키(access key)** 입력 → AWS 환경 구성 완료.

## 요약
- **EC2 인스턴스 생성**: 콘솔 로그인 → 리전 선택 → EC2 → Launch Instance (이름·Amazon Linux 2023·t2.medium·키 없음·HTTP/HTTPS 허용) → running 확인.
- **연결**: Connect(public IP, ec2-user)로 브라우저 셸 접속 후 `aws configure`로 액세스 키 설정.
- 이 인스턴스가 이후 SRE 실습 환경의 기반이 된다.
