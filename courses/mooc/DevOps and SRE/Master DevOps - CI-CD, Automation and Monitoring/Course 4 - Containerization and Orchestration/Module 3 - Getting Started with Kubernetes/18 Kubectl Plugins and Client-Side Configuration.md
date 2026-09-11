# Kubectl Plugins and Client-Side Configuration

## 개요
- kubectl 플러그인 작성·관리 방법(Krew 포함)과, kubeconfig·Context를 이용한 멀티 클러스터 클라이언트 설정을 정리.

## 내용
### kubectl 플러그인이란
- `PATH`에 있는 **`kubectl-<플러그인명>`** 형태의 실행 파일은 `kubectl <플러그인명>`으로 실행 가능.
- kubectl은 플러그인을 일급(first-class) 대상으로 취급해 관련 환경 변수와 CLI 파라미터를 그대로 전달.

### 플러그인을 쓰는 이유
- kubectl 코어를 건드리지 않고도 기능 확장 가능.
- **중앙화된 설정** — 플러그인이 kubectl의 kubeconfig 처리 방식을 그대로 상속받아, 포맷이 바뀌어도 호환성 유지.
- **손쉬운 탐색** — `kubectl plugin list`로 사용 가능한 플러그인 목록 확인.

### 플러그인 만들기
- 간단한 셸 스크립트 예시:
```bash
kubectl get pods -o custom-columns='NAME:metadata.name,IMAGES:spec.containers[*].image'
```
  - 이를 `kubectl-img`라는 파일로 저장, `chmod +x`로 실행 권한 부여, `PATH`에 배치 → `kubectl img`로 사용.
- **Go 기반 플러그인** — 복잡한 로직에는 `client-go`를 사용(예: 서버 버전을 조회하는 `kubectl-server-version` 실행 파일).

### Krew를 이용한 플러그인 관리
- **Krew**는 공식 플러그인 매니저 — 커뮤니티 인덱스에서 플러그인을 검색·설치·업데이트.
- 주의: 보안 관련 플러그인은 로컬에 대한 전체 접근 권한을 가질 수 있음.

### Kubeconfig 파일
- 기본 위치: **`~/.kube/config`**.
- 구성 요소:
  - **clusters** — API 서버 엔드포인트와 인증서.
  - **users** — 인증 정보.
  - **contexts** — [cluster, user, namespace] 세 값의 조합(triplet).

### Context 관련 명령
```bash
kubectl config get-contexts        # 전체 컨텍스트 목록(현재 컨텍스트 표시)
kubectl config current-context      # 활성 컨텍스트 확인
kubectl config use-context <이름>    # 활성 컨텍스트 전환
kubectl config set-context           # 컨텍스트 생성/수정
kubectl config delete-context        # 오래된 컨텍스트 제거
```

### 베스트 프랙티스
- **`KUBECONFIG` 환경 변수**로 여러 설정 파일을 병합하거나 전환.
- 팀 전체의 일관성을 위해 **설정 파일을 Git으로 중앙화**.
- 별칭(alias) 설정(예: `alias k8s-prod='kubectl config use-context prod'`)으로 편의성 향상.
- 보안 강화를 위해 토큰보다 **exec 기반 인증**(예: 클라우드 CLI를 통한 인증) 선호.

### 실전 사용 예시
- Pod 안의 컨테이너 이미지를 나열하는 플러그인: `kubectl img`.
- 서버 버전을 확인하는 Go 기반 플러그인: `kubectl server-version`.
- 컨텍스트 전환:
```bash
kubectl config get-contexts
kubectl config set-context staging --cluster=staging --user=stageUser --namespace=staging
kubectl config use-context staging
```
- 여러 YAML 설정 관리: `$KUBECONFIG=~/.kube/config:~/.kube/dev-config kubectl config get-contexts`.

## 요약
- kubectl은 `kubectl-<이름>` 형태의 실행 파일로 손쉽게 확장 가능하며 Krew로 커뮤니티 플러그인을 관리할 수 있고, `~/.kube/config`의 clusters/users/contexts 조합을 `kubectl config` 하위 명령(`get-contexts`, `use-context`, `set-context` 등)으로 다뤄 여러 클러스터·네임스페이스·사용자 환경을 안전하고 빠르게 전환할 수 있다.
