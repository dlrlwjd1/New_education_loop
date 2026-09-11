# ConfigMaps and Secrets - Types of Secrets

## 개요
- 민감한 정보를 다루는 Kubernetes **Secret**이 ConfigMap과 다른 점(Base64 인코딩 저장)을 설명하고, Opaque·ServiceAccountToken·DockerConfigJson·TLS·BasicAuth·SSHAuth·BootstrapToken 등 7가지 Secret 타입을 정리.

## 내용
### Secret이란 — ConfigMap과의 차이
- **Secret**은 비밀번호, 개인 키(private key), TLS 인증서, 토큰 같은 **민감한 정보**를 담기 위한 객체.
- ConfigMap을 민감한 정보에 쓸 수 없는 이유: ConfigMap의 데이터는 **평문(clear text)**으로 저장되므로, ConfigMap을 조회할 수 있는 사람은 누구나 값을 볼 수 있음 — 심각한 보안 문제.
- Secret은 데이터를 **Base64로 인코딩**해서 저장(etcd에 인코딩된 형태로 저장) — 애플리케이션에 전달할 때도 Kubernetes가 자동으로 값을 넘겨주며, 사용자가 직접 값을 조회해도 평문 그대로 노출되지 않음.
- Secret의 핵심 특징: **민감한 데이터의 분리(decoupling)**, 비밀번호·인증서·토큰·개인 키 등에 대한 **유연한 사용성**, 그리고 **Base64 인코딩 저장**.

### Secret의 7가지 타입
1. **Opaque** — 가장 단순한 타입. 사용자 이름/비밀번호, 데이터 파일 경로 등 **임의의 key-value 쌍**을 담는 범용 Secret.
2. **Service Account Token** — Kubernetes 서비스 계정이 API 서버와 인증하기 위한 토큰을 담는 타입. 예: 다른 Pod들의 로그를 수집하는 애플리케이션이 있을 때, 이 애플리케이션이 다른 Pod의 로그에 접근하려면 **서비스 계정(Service Account)**을 만들고 그 계정의 토큰을 이 타입의 Secret으로 생성해야 함.
3. **Docker Config JSON** — 보통 컨테이너 이미지는 Docker Hub 같은 공개 레지스트리에서 가져오므로 별도 인증이 필요 없지만, **프라이빗 레지스트리**를 사용할 경우 인증이 필요함. 이 인증 정보(ID/비밀번호)를 담는 타입 — 프라이빗 Docker 레지스트리 접근용 자격 증명 보관.
4. **TLS Secret** — TLS(공개키/개인키 쌍), 인증서를 저장. 예: HTTPS 애플리케이션이 TLS 프로토콜로 동작하려면 SSL 인증서나 개인 키를 전달해야 하는데, 이때 TLS 타입의 Secret을 사용.
5. **Basic Authentication Secret** — 기본 인증(basic authentication)에 쓰이는 사용자 이름·비밀번호 저장용. Opaque로도 같은 목적을 달성할 수 있지만, Opaque는 더 범용적인 용도(예: 보안이 필요한 설정 파일 전달 등)로도 쓰임.
6. **SSH Authentication Secret** — SSH 개인 키/공개 키 저장용. 보통 개인 키는 자신이 보관하고 공개 키는 로그인하려는 서버에 등록하는데, 애플리케이션이 어딘가에 로그인해야 한다면 그 개인 키를 SSH 타입 Secret으로 전달.
7. **Bootstrap Token** — 클러스터에 **새 워커 노드를 추가**할 때 사용하는 토큰(일종의 사용자 ID/비밀번호 역할)을 저장. 이 토큰이 평문으로 노출되면 누구나 클러스터에 임의의 노드를 추가할 수 있어 매우 위험하므로, 노드 부트스트랩 과정에서 새 노드를 안전하게 클러스터에 추가하기 위해 Bootstrap Token 타입 Secret을 사용.

## 요약
- Kubernetes Secret은 ConfigMap과 달리 데이터를 Base64로 인코딩해 저장함으로써 비밀번호·인증서·토큰 같은 민감한 정보를 안전하게 다루며, 용도에 따라 범용 key-value용 Opaque, API 인증용 Service Account Token, 프라이빗 레지스트리 인증용 Docker Config JSON, HTTPS/TLS 인증서용 TLS Secret, 기본 인증용 Basic Authentication, SSH 키용 SSH Authentication, 신규 노드 추가용 Bootstrap Token까지 총 7가지 타입으로 구분된다.
