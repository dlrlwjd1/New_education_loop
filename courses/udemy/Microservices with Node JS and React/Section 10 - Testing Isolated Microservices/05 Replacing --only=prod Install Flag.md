# Replacing --only=prod Install Flag

## 개요
- Replacing --only=prod Install Flag In the upcoming lecture, we will be adding the --only=prod flag to the npm install instruction of our Dockerfile. This flag no longer exists, and we need to use the --omit=dev flag instead. FROM node:alpine WORKDIR /app COPY package.json . RUN npm install --omit=dev COPY . . CMD ["npm", "start"]

## 내용
### 자막·본문 기반 핵심 내용
- Replacing --only=prod Install Flag In the upcoming lecture, we will be adding the --only=prod flag to the npm install instruction of our Dockerfile. This flag no longer exists, and we need to use the --omit=dev flag instead. FROM node:alpine WORKDIR /app COPY package.json . RUN npm install --omit=dev COPY . . CMD ["npm", "start"]

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `npm`, `Dockerfile`, `json`, `npm install instruction of our Dockerfile. This flag no longer exists`, `npm install --omit`, `package.json`

## 예시
`npm`, `Dockerfile`, `json`, `npm install instruction of our Dockerfile. This flag no longer exists`, `npm install --omit`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Replacing --only=prod Install Flag**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/37802636#overview)
