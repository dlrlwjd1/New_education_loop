# Important Note to Add Environment Variable

## 개요
- Important Note to Add Environment Variable Please don't skip this! You must make a small change to get a step shown in the next video to work correctly! The next video is going to show the deployment of the React app to our Kubernetes cluster. The React app will be running in a Docker container. Unfortunately, create-react-app currentl…

## 내용
### 자막·본문 기반 핵심 내용
- Important Note to Add Environment Variable Please don't skip this! You must make a small change to get a step shown in the next video to work correctly! The next video is going to show the deployment of the React app to our Kubernetes cluster. The React app will be running in a Docker container. Unfortunately, create-react-app currentl…
- ENV CI=true ENV WDS_SOCKET_PORT=0 WORKDIR /app COPY package.json ./ RUN npm install COPY ./ ./ CMD ["npm", "start"] Then save the file. That's it! Continue on to the next video.
- https://github.com/facebook/create-react-app/issues/8688 https://github.com/facebook/create-react-app/issues/11779 To solve this, we have to add two environment variables to the Dockerfile in the client folder. Find the Dockerfile in the client folder and make the following change: FROM node:alpine # Add the following lines

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `deployment`, `React`, `Kubernetes`, `Docker`, `https`, `github`, `Dockerfile`, `CI`, `json`, `npm`

## 예시
`deployment`, `React`, `Kubernetes`, `Docker`, `https`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Important Note to Add Environment Variable**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19438444#overview)
