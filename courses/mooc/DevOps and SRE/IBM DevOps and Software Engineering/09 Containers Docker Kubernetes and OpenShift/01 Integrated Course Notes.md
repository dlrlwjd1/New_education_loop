# Introduction to Containers with Docker, Kubernetes & OpenShift

## 개요
- 컨테이너 이미지 작성에서 Kubernetes 배포·운영과 OpenShift·Istio 생태계까지 다룬다.

## 내용
- image는 불변 빌드 산출물이고 container는 실행 인스턴스다. 작은 base, multi-stage build, 비root 실행과 버전 tag로 공급망 위험을 줄인다.
- Kubernetes는 Pod, Deployment, Service, ConfigMap, Secret과 declarative desired state로 애플리케이션을 운영한다.
- readiness·liveness probe, requests·limits, rolling update, autoscaling과 namespace로 안정성과 격리를 관리한다.
- OpenShift는 개발·보안·운영 기능을 확장하고 Istio service mesh는 트래픽 정책, mTLS와 telemetry를 제공한다.

## 예시
```yaml
apiVersion: apps/v1
kind: Deployment
metadata: {name: api}
spec: {replicas: 3}
```

## 요약
- 5개 모듈은 컨테이너, Kubernetes 기초·운영, OpenShift·Istio, 최종 과제다.
