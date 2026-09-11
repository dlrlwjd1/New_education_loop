# Helm Charts - Demonstration - Creating Your First Helm Chart

## 개요
- Kubernetes 패키지 매니저 **Helm**의 필요성과 설치 방법을 소개하고, `helm create`로 첫 Helm Chart를 생성해 자동 생성되는 파일 구조를 살펴봄.

## 내용
### Helm이 필요한 이유
- 지금까지는 YAML 파일을 하나하나 작성해왔지만, 이 방식의 문제점:
  - 값이 YAML 안에 **하드코딩**되어 있어 값만 따로 분리해서 관리하기 어려움.
  - 여러 YAML 파일을 각각 관리·배포하는 것 자체가 **복잡**함.
- **Helm**은 이런 여러 YAML 파일을 **Chart**라는 하나의 묶음(패키지)으로 만들어 한 번에 배포할 수 있게 해주는 **Kubernetes의 패키지 매니저**.
- **Chart** = 여러 YAML 파일들의 모음 — YAML을 하나씩 배포하는 대신, 이 Chart 단위로 한 번에 배포.

### Helm 설치 확인 및 설치 방법
```bash
helm version
```
- 이미 설치되어 있다면 버전 정보(예: `v3.17.3`) 출력.
- 설치가 안 되어 있다면:
  1. 공식 문서/GitHub 릴리스에서 사용 중인 OS/아키텍처(Linux AMD64, Mac, Windows 등)에 맞는 버전 다운로드.
  2. 압축 해제:
     ```bash
     tar -zxvf helm-vX.Y.Z-linux-amd64.tar.gz
     ```
     (`z`: gzip 압축 해제, `x`: tar 압축 해제, `v`: verbose, `f`: 파일 지정)
  3. 압축을 풀면 나오는 `helm` 바이너리를 실행 경로로 이동:
     ```bash
     mv helm /usr/local/bin/helm
     ```
  4. `helm version`으로 설치 확인.

### 첫 Helm Chart 생성
```bash
helm create mychart
```
- `mychart`라는 이름의 새 Chart가 생성되며, **nginx 애플리케이션을 배포하기 위한 기본 파일 세트**가 자동으로 만들어짐(Deployment, Service 등 포함).
```bash
ls -al
cd mychart
ls -al
```
- **`Chart.yaml`** — Chart에 대한 기본 정보(apiVersion, name, type, version, appVersion 등)를 담은 파일 — 필요하면 자유롭게 수정 가능.
- **`templates/`** 디렉터리 — 실제 Kubernetes 리소스 YAML 템플릿들이 위치:
  - `deployment.yaml` — Deployment 정의.
  - **HorizontalPodAutoscaler(HPA)**, **Ingress**, **ServiceAccount**, **Service** 등 다양한 리소스 템플릿이 기본으로 포함되어 있음.

## 요약
- Helm은 여러 개의 YAML 파일을 하나의 배포 단위인 **Chart**로 묶어 관리·배포를 단순화해주는 Kubernetes 패키지 매니저이며, `helm create mychart` 명령 하나로 nginx 애플리케이션을 위한 `Chart.yaml`과 Deployment·Service·Ingress·HPA·ServiceAccount 등의 템플릿이 포함된 기본 Chart 구조가 자동으로 생성된다.
