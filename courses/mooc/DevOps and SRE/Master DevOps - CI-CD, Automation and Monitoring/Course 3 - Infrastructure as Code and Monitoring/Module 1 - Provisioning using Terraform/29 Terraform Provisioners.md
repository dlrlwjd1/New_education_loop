# Terraform Provisioners

## 개요
- Terraform Provisioner의 정의와 주의사항, 3가지 내장 Provisioner(local-exec, remote-exec, file)를 설명.

## 내용
### Provisioner란
- 리소스 생성 또는 삭제 시점에 로컬/원격 머신에서 스크립트나 명령을 실행하는 기능 — 설정, 소프트웨어 설치, 파일 복사, 배포 스크립트 실행 등에 사용.
- **HashiCorp는 Provisioner를 최소한으로만 사용하도록 권장** — 인프라 관리에 복잡성과 예측 불가능성을 더할 수 있기 때문.
- 예: EC2 인스턴스를 생성하면서 동시에 Nginx 설치·파일 설정·서비스 재시작까지 하면, 서버 생성 이후 정확히 어떤 일이 일어났는지 추적하거나 문제를 재현하기 어려워진다.

### 3가지 내장 Provisioner
1. **`local-exec`** — Terraform이 실행되는 머신(로컬)에서 명령을 실행. 로깅, Ansible/Packer 스크립트 트리거, 알림 전송 등에 사용.
2. **`remote-exec`** — 리소스가 생성된 **이후** 원격(대상) 서버에서 명령 실행. 예: EC2 생성 후 그 인스턴스에 Nginx 설치.
3. **`file`** — 로컬 머신에서 원격 머신(예: EC2)으로 파일/디렉터리를 전송. Terraform이 실행되는 로컬에 있는 파일을 프로비저닝된 인스턴스로 푸시.

### Provisioner 실행 흐름
1. 개발자가 로컬 머신에서 Terraform 코드 작성
2. Terraform이 로컬에서 실행되어 EC2 인스턴스 등 리소스 생성
3. 생성 과정에서 **file provisioner**로 로컬→원격 파일 전송 가능
4. 리소스 생성 후 **remote-exec**로 원격에서 후속 명령 실행, 또는 **local-exec**로 로컬에서 후속 작업 실행

## 요약
- Terraform Provisioner는 local-exec(로컬 실행), remote-exec(원격 실행), file(파일 전송) 세 가지로 나뉘며, 리소스 생성/삭제 시점에 추가 작업을 수행할 수 있지만 추적·재현이 어려워질 수 있어 HashiCorp는 가능한 최소한으로 사용할 것을 권장한다.
