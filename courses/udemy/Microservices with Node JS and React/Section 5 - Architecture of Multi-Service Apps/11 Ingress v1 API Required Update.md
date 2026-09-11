# Ingress v1 API Required Update

## 개요
- Ingress v1 API Required Update When running skaffold dev in the upcoming lecture, you may encounter a warning or error about the v1beta1 API version that is being used. The v1 Ingress API is now required as of Kubernetes v1.22 and the v1beta1 will no longer work. A few very minor changes are needed: https://kubernetes.io/docs/concepts/…

## 내용
### 자막·본문 기반 핵심 내용
- Ingress v1 API Required Update When running skaffold dev in the upcoming lecture, you may encounter a warning or error about the v1beta1 API version that is being used. The v1 Ingress API is now required as of Kubernetes v1.22 and the v1beta1 will no longer work. A few very minor changes are needed: https://kubernetes.io/docs/concepts/…
- backend: service: name: auth-srv number: 3000
- A pathType needs to be added How we specify the backend service name and port has changed The kubernetes.io/ingress.class annotation should be removed and replaced by the ingressClassName field under the spec. Replace Prefix PathType with ImplementationSpecific. This is important for any future routes we will define later in the course.
- For all paths that make use of a regex, you would use ImplementationSpecific instead of Prefix. apiVersion: networking.k8s.io/v1 kind: Ingress metadata: name: ingress-service annotations: nginx.ingress.kubernetes.io/use-regex: "true" ingressClassName: nginx - host: ticketing.dev - path: /api/users/?(.*) pathType: ImplementationSpecific

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Ingress`, `API`, `skaffold`, `Kubernetes`, `https`, `service`, `class`, `http`, `skaffold dev in the upcoming lecture`

## 예시
`Ingress`, `API`, `skaffold`, `Kubernetes`, `https`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Ingress v1 API Required Update**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/26707232#overview)
