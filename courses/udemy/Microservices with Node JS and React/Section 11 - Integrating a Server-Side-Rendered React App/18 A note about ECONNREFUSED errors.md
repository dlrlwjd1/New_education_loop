# A note about ECONNREFUSED errors

## 개요
- A note about ECONNREFUSED errors In the upcoming lecture at about the 4:10 timestamp, we will be moving the axios request from the getInitialProps function directly to the LandingPage as part of an explanation. This will likely fail with a long ECONNREFUSED error in your Skaffold output. Node Alpine Docker images are now likely using t…

## 내용
### 자막·본문 기반 핵심 내용
- A note about ECONNREFUSED errors In the upcoming lecture at about the 4:10 timestamp, we will be moving the axios request from the getInitialProps function directly to the LandingPage as part of an explanation. This will likely fail with a long ECONNREFUSED error in your Skaffold output. Node Alpine Docker images are now likely using t…
- Change this code in client/pages/index.js const LandingPage = ({ currentUser }) => { console.log(currentUser); axios.get('/api/users/currentuser'); return <h1>Landing Page</h1>; to this: const LandingPage = ({ currentUser }) => { console.log(currentUser); axios.get('/api/users/currentuser').catch((err) => { console.log(err.message);

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `request`, `Skaffold`, `Docker`, `api`, `Skaffold output`, `Node Alpine Docker images are now likely using the v16 version of Node`, `index.js`

## 예시
`request`, `Skaffold`, `Docker`, `api`, `Skaffold output`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **A note about ECONNREFUSED errors**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/26947876#overview)
