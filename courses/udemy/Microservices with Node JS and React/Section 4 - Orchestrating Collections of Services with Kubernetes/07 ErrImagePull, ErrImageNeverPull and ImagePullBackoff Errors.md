# ErrImagePull, ErrImageNeverPull and ImagePullBackoff Errors

## 개요
- ErrImagePull, ErrImageNeverPull and ImagePullBackoff Errors If your pods are showing ErrImagePull, ErrImageNeverPull, or ImagePullBackOff errors after running kubectl apply, the simplest solution is to provide an imagePullPolicy to the pod. First, run kubectl delete -f infra/k8s/ Then, update your pod manifest: containers:

## 내용
### 자막·본문 기반 핵심 내용
- ErrImagePull, ErrImageNeverPull and ImagePullBackoff Errors If your pods are showing ErrImagePull, ErrImageNeverPull, or ImagePullBackOff errors after running kubectl apply, the simplest solution is to provide an imagePullPolicy to the pod. First, run kubectl delete -f infra/k8s/ Then, update your pod manifest: containers:
- - name: posts image: cygnet/posts:0.0.1 imagePullPolicy: Never Then, run kubectl apply -f infra/k8s/ This will ensure that Kubernetes will use the image built locally from your image cache instead of attempting to pull from a registry. Minikube Users: If you are using a vm driver, you will need to tell Kubernetes to use the Docker daem…
- Run the following command: eval $(minikube docker-env) Note - This command will need to be repeated anytime you close and restart the terminal session. Afterward, you can build your image: docker build -t USERNAME/REPO . Update, your pod manifest as shown above and then run: kubectl apply -f infra/k8s/ https://minikube.sigs.k8s.io/docs…

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `kubectl`, `pod`, `Kubernetes`, `Docker`, `session`, `https`, `kubectl apply`, `kubectl delete -f infra/k8s/`, `kubectl apply -f infra/k8s/`, `Docker daemon running inside of the single node cluster instead of the host`

## 예시
`kubectl`, `pod`, `Kubernetes`, `Docker`, `session`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **ErrImagePull, ErrImageNeverPull and ImagePullBackoff Errors**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/23494884#overview)
