# Three Important Changes Needed to Deploy - Do Not Skip!

## 개요
- Three Important Changes Needed to Deploy - Do Not Skip! In the upcoming lecture, we will be configuring our project to use the new domain name that was purchased. There are 3 major things that need to be addressed in order for the deployment to work. Update the baseURL in client service's build-client file: In api/build-client.js, chan…

## 내용
### 자막·본문 기반 핵심 내용
- Three Important Changes Needed to Deploy - Do Not Skip! In the upcoming lecture, we will be configuring our project to use the new domain name that was purchased. There are 3 major things that need to be addressed in order for the deployment to work. Update the baseURL in client service's build-client file: In api/build-client.js, chan…
- service.beta.kubernetes.io/do-loadbalancer-hostname: 'www.ticketing-app-prod.xyz' helm.sh/chart: ingress-nginx-2.0.3 app.kubernetes.io/name: ingress-nginx app.kubernetes.io/instance: ingress-nginx app.kubernetes.io/version: 0.32.0 app.kubernetes.io/managed-by: Helm app.kubernetes.io/component: controller name: ingress-nginx-controller
- At the cookie-session middleware, change the following: cookieSession({ signed: false, secure: process.env.NODE_ENV !== 'test', cookieSession({ signed: false, secure: false, Add Load Balancer There is currently a bug with ingress-nginx on Digital Ocean. You can read more about this bug here: https://github.com/digitalocean/digitalocean…
- From this: // We are on the server return axios.create({ baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local', headers: req.headers, // We are on the server return axios.create({ baseURL: 'Whatever_your_purchased_domain_is', headers: req.headers, Since I purchased ticketing-app-prod.xyz, I would update this line to:

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `deployment`, `service`, `api`, `http`, `ingress`, `HTTPS`, `ts`, `cookie`, `session`, `middleware`

## 예시
`deployment`, `service`, `api`, `http`, `ingress`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Three Important Changes Needed to Deploy - Do Not Skip!**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/27616972#overview)
