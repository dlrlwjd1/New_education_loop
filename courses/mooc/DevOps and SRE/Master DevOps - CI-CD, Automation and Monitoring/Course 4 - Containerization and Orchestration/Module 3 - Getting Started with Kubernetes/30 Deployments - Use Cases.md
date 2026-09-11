# Deployments - Use Cases

## 개요
- Stateless/Stateful 애플리케이션의 차이를 기준으로 Deployment의 대표 사용 사례(웹 서버 확장, CI/CD 통합)와, Stateful 애플리케이션에는 별도로 StatefulSet을 사용해야 함을 정리.

## 내용
### Stateless vs Stateful
- **Stateless(무상태) 애플리케이션** — 볼륨·스토리지가 필요 없으며, 데이터가 유실돼도 문제없는 애플리케이션. 예:
  - **웹 서버**(Nginx) — 요청을 받아 DB에 전달하고 응답을 사용자에게 돌려주는 역할만 함.
  - **캐시(Cache)** — 캐시가 사라져도 사용자가 다시 접근하면 재구성됨.
  - **로그 수집 애플리케이션** — 애플리케이션이 사라져도 로그 자체는 크게 중요하지 않으며, 다시 시작하면 새로 로그를 쌓으면 됨.
- **Stateful(상태 유지) 애플리케이션** — 데이터가 무엇보다 중요한 애플리케이션. 예: MySQL, Oracle, PostgreSQL 같은 데이터베이스 — 데이터 없이는 애플리케이션 자체가 의미 없음.

### Deployment의 사용 사례
1. **무상태 웹 애플리케이션 실행(Stateless Web Applications)** — Nginx처럼 Replica(Pod 개수)를 자유롭게 조절 가능한 확장형 애플리케이션 배포에 Deployment 사용.
2. **퍼시스턴트 스토리지가 필요한 애플리케이션은 StatefulSet으로 관리** — Deployment의 대안으로 **StatefulSet**이라는 컨트롤러가 있으며, 데이터베이스 같은 Stateful 애플리케이션은 Deployment가 아니라 StatefulSet으로 관리해야 함.
3. **CI/CD 파이프라인 통합(자동 스케일링·업데이트)** — Deployment YAML을 CI/CD 파이프라인(예: Jenkins)에 포함시켜, 파이프라인이 자동으로 Kubernetes 인프라에 필요한 Pod를 배포·트리거하도록 구성 가능.

## 요약
- Deployment는 데이터 유실이 문제되지 않는 Stateless 애플리케이션(웹 서버, 캐시, 로그 수집기)을 Replica 기반으로 확장 배포하고 CI/CD 파이프라인에 통합하는 데 적합하며, 데이터가 핵심인 Stateful 애플리케이션(데이터베이스)은 Deployment 대신 StatefulSet이라는 별도 컨트롤러로 관리해야 한다.
