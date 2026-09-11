# kubectl Installation

## 개요
- Linux 서버에 kubectl 바이너리를 다운로드·검증·설치하고 버전을 확인하는 4단계 절차를 실습.

## 내용
### 4단계 절차
1. 최신 릴리스 다운로드.
2. (선택) 바이너리 검증.
3. kubectl 설치.
4. 설치 확인.

### 1단계: 다운로드
```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
ls -al   # kubectl 파일 다운로드 확인
```

### 2단계: 바이너리 검증 (선택 사항)
```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256"
ls -al   # .sha256 파일 다운로드 확인

echo "$(cat kubectl.sha256)  kubectl" | sha256sum --check
# 출력: kubectl: OK
```
- 다운로드한 kubectl 바이너리가 손상되지 않았는지 체크섬(SHA-256)으로 검증.

### 3단계: 설치
```bash
install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```
- **`-o root -g root`** — 소유자·그룹을 root로 설정.
- **`-m 0755`** — 파일 권한 755로 설정.
- 일반 사용자라면 `sudo`를 붙이고, root 사용자라면 생략 가능.
```bash
ls -al /usr/local/bin/kubectl   # 설치 확인
```

### 4단계: 설치 확인
```bash
kubectl version --client
```
- 클라이언트 버전 확인(예: `1.33.1`) — 이 시점에서는 kubectl 자체는 설치됐지만, 명령을 실제로 실행하려면 **Kubernetes 클러스터**가 있어야 함.

### 특정 버전 설치
- 안내 문서에 따라 URL의 `stable.txt` 부분을 원하는 버전(예: `v1.29`, `v1.31`)으로 바꾸면 특정 버전의 kubectl을 설치 가능.

## 요약
- kubectl은 최신 릴리스 URL(`stable.txt`)에서 바이너리를 다운로드해 SHA-256 체크섬으로 무결성을 검증한 뒤 `/usr/local/bin/kubectl`에 755 권한으로 설치하며, `kubectl version --client`로 설치를 확인하고 특정 버전이 필요하면 URL의 `stable.txt`를 원하는 버전 문자열로 교체해 설치할 수 있다.
