# Kubernetes Core Concepts - ReplicaSets and Namespaces

## 개요
- ReplicaSet의 desired-state 유지 방식, Namespace를 통한 리소스 격리, ConfigMap과 Secret의 차이, 그리고 Volume·Ingress의 역할을 마무리로 정리.

## 내용
### ReplicaSet
- Deployment와 유사하게 **지정된 수의 Pod가 항상 실행되도록 보장** — 필요하면 Pod를 생성하거나 불필요한 Pod를 삭제해 원하는 개수를 유지.
- 예: Pod가 4개인데 3개만 필요하면 1개를 삭제, Pod가 2개인데 3개가 필요하면 1개를 추가로 생성.

### Namespace
- Kubernetes 클러스터 내의 **논리적 경계(Logical Boundary)** — 리소스를 격리하는 용도.
- 예: MySQL, Hadoop, Kafka 애플리케이션의 Pod를 서로 분리해, MySQL Pod가 Hadoop Pod를 볼 수 없고 Hadoop이 Kafka를 볼 수 없도록 격리.
- 여러 팀·프로젝트에 걸친 다수의 사용자가 있는 환경에 적합 — 사용자별로 서로 다른 Namespace에 대한 접근 권한을 부여해, 한 사용자가 자신의 Namespace에서 하는 작업을 다른 사용자가 볼 수 없게 하는 **접근 제어(Access Control)**도 가능.

### ConfigMap vs Secret
- **ConfigMap** — 설정 정보를 애플리케이션 이미지 내용과 분리(decouple)해 애플리케이션의 이식성을 높임. 예: 애플리케이션이 Linux에서 실행될 때와 Windows에서 실행될 때 필요한 플랫폼별 설정 정보를 전달.
- **Secret** — 비밀번호, Private Key, SSL 인증서, 토큰 같은 **민감한(sensitive) 정보**를 전달하는 용도.
- **핵심 차이**: ConfigMap의 정보는 암호화되지 않지만, **Secret은 Kubernetes가 인코딩된 형태로 저장** — 그래서 민감 정보는 반드시 Secret을 사용.

### Volume
- 데이터 지속성(Data Persistence)을 위한 리소스 — Pod가 죽으면 컨테이너도 함께 재생성되지만, 그 안에 있던 데이터는 사라짐. 이를 해결하기 위해 애플리케이션 데이터를 애플리케이션 자체와 분리해서 관리.
- Volume은 NetApp, EMC 같은 외부 스토리지 시스템에서 가져올 수 있으며, 이를 컨테이너에 연결(attach)해 데이터를 저장 — Pod가 죽어 재생성되어도 동일한 Volume을 다시 붙이면 데이터가 그대로 유지됨.
- Volume은 컨테이너가 자신의 일시적인(ephemeral) 파일시스템 밖의 스토리지에 접근할 수 있게 해, Pod 재시작·종료 전반에 걸쳐 데이터 지속성을 보장.

### Ingress
- 클러스터 내 서비스에 대한 외부 접근을 관리하는 **애플리케이션 로드밸런서**(일반적으로 HTTP/HTTPS 프로토콜 사용).
- 예: 웹 애플리케이션 안에 여러 백엔드 애플리케이션이 있고 이들을 모두 HTTP로 노출하고 싶을 때 필요한 로드밸런서.
- **SSL 종료(SSL Termination)**와 **이름 기반 가상 호스팅(Name-based Virtual Hosting)**도 지원.

## 요약
- ReplicaSet은 지정된 Pod 개수(desired state)를 자동으로 유지하고, Namespace는 여러 팀·애플리케이션의 리소스를 논리적으로 격리하며, ConfigMap(일반 설정)과 Secret(암호화된 민감 정보)은 애플리케이션에 설정값을 전달하는 서로 다른 방식이고, Volume은 외부 스토리지 연결로 데이터 지속성을 보장하며, Ingress는 HTTP/HTTPS 기반의 애플리케이션 로드밸런서로 SSL 종료와 이름 기반 가상 호스팅까지 지원한다.
