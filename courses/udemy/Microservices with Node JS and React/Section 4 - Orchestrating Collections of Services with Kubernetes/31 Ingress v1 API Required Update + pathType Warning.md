# Ingress v1 API Required Update + pathType Warning

## 개요
- Ingress v1 API Required Update + pathType Warning When running kubectl apply in the upcoming lecture, you may encounter a warning or error about the v1beta1 API version that is being used. The v1 Ingress API is now required as of Kubernetes v1.22 and the v1beta1 will no longer work. A few very minor changes are needed:

## 내용
### 자막·본문 기반 핵심 내용
- Ingress v1 API Required Update + pathType Warning When running kubectl apply in the upcoming lecture, you may encounter a warning or error about the v1beta1 API version that is being used. The v1 Ingress API is now required as of Kubernetes v1.22 and the v1beta1 will no longer work. A few very minor changes are needed:
- So, for any path that makes use of a regex, you would use ImplementationSpecific instead of Prefix. - path: /posts/?(.*)/comments pathType: ImplementationSpecific
- https://kubernetes.io/docs/concepts/services-networking/ingress/ A pathType needs to be added How we specify the backend service name and port has changed The kubernetes.io/ingress.class annotation should be removed and replaced by the ingressClassName field under the spec: apiVersion: networking.k8s.io/v1 kind: Ingress
- metadata: name: ingress-srv ingressClassName: nginx - host: posts.com - path: /posts pathType: Prefix backend: service: name: posts-clusterip-srv number: 4000 Cannot be used with pathType Prefix Warning A few lectures from now, you may eventually see a warning in your terminal: Warning: path /posts/?{.*}/comments cannot be used with pa…

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Ingress`, `API`, `kubectl`, `Kubernetes`, `https`, `service`, `class`, `http`, `clusterip`, `github`

## 예시
`Ingress`, `API`, `kubectl`, `Kubernetes`, `https`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Ingress v1 API Required Update + pathType Warning**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/26508852#overview)
