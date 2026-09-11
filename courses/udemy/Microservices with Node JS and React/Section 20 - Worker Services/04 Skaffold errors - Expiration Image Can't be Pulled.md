# Skaffold errors - Expiration Image Can't be Pulled

## 개요
- Skaffold errors - Expiration Image Can't be Pulled In the upcoming lecture, we will be adding our Expiration and Redis service manifests and then running skaffold dev in the terminal. You will likely get some similar errors about failed deployments: - pod/expiration-depl-5ff9745876-vx59x: container expiration is waiting to start: cygne…

## 내용
### 자막·본문 기반 핵심 내용
- Skaffold errors - Expiration Image Can't be Pulled In the upcoming lecture, we will be adding our Expiration and Redis service manifests and then running skaffold dev in the terminal. You will likely get some similar errors about failed deployments: - pod/expiration-depl-5ff9745876-vx59x: container expiration is waiting to start: cygne…
- - image: YOUR_USERNAME/expiration context: expiration dockerfile: Dockerfile - src: 'src/**/*.ts'
- - deployment/expiration-depl failed. Error: container expiration is waiting to start: cygnetops/expiration can't be pulled. The errors are happening because we did not update our Skaffold configuration file. This will actually be resolved in the very next lecture. However, if you'd like to resolve it now and make sure the deployments a…

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Skaffold`, `Redis`, `service`, `pod`, `deployment`, `yaml`, `docker`, `dockerfile`, `ts`, `Skaffold errors - Expiration Image Can`

## 예시
`Skaffold`, `Redis`, `service`, `pod`, `deployment`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Skaffold errors - Expiration Image Can't be Pulled**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/27393634#overview)
