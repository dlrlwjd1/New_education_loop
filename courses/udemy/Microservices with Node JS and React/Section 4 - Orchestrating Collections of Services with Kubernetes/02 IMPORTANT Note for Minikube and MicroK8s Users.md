# IMPORTANT Note for Minikube and MicroK8s Users

## 개요
- IMPORTANT Note for Minikube and MicroK8s Users Minikube Users macOS and WSL Windows students should be using Docker Desktop and not Minikube. The default Minikube Docker driver will require additional configuration for basic things to function, such as accessing Node Ports and an Ingress. If, for some reason, you must use Minikube and…

## 내용
### 자막·본문 기반 핵심 내용
- IMPORTANT Note for Minikube and MicroK8s Users Minikube Users macOS and WSL Windows students should be using Docker Desktop and not Minikube. The default Minikube Docker driver will require additional configuration for basic things to function, such as accessing Node Ports and an Ingress. If, for some reason, you must use Minikube and…
- https://minikube.sigs.k8s.io/docs/start/ Accessing Node Port Services In order to access NodePort services, such as in lecture 79, you will need to create a tunnel each time. First, you will need to get the name of the running Node Port Service: kubectl get svc Then, you will create a tunnel: minikube service posts-srv --url
- This will display a URL for you to access in your browser, like this (your port number will be different): http://127.0.0.1:60835 You must leave this tunnel running in your terminal in order to access the service in your browser. Accessing Ingress (Section 15) Similarly, in order to access the Ingress, such as in lecture 95, you will n…
- After running your cluster with the following command: kubectl apply -f infra/k8s/ Use this command to create the tunnel: minikube tunnel Then, you will be able to access the Ingress in your browser at 127.0.0.1. You must leave this tunnel running in your terminal in order to access the service in your browser. All of the above instruc…

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Docker`, `Ingress`, `https`, `NodePort`, `Service`, `kubectl`, `http`, `Docker Desktop and not Minikube. The default Minikube Docker driver will require additional configuration for basic things to function`, `Node Ports and an Ingress`, `Docker Desktop`

## 예시
`Docker`, `Ingress`, `https`, `NodePort`, `Service`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **IMPORTANT Note for Minikube and MicroK8s Users**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/23145358#overview)
