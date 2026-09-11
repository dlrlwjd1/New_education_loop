# Important Note about Node and Unhandled Promise Rejections

## 개요
- Important Note about Node and Unhandled Promise Rejections In the upcoming lecture, we will be adding POST requests to our Event bus. Unhandled Promise Rejections are now treated as errors instead of warnings and will cause the servers to crash. You can read up about it here: https://nodejs.medium.com/node-js-v15-0-0-is-here-deb00750f278

## 내용
### 자막·본문 기반 핵심 내용
- Important Note about Node and Unhandled Promise Rejections In the upcoming lecture, we will be adding POST requests to our Event bus. Unhandled Promise Rejections are now treated as errors instead of warnings and will cause the servers to crash. You can read up about it here: https://nodejs.medium.com/node-js-v15-0-0-is-here-deb00750f278
- console.log(err.message); res.send({ status: 'OK' });
- At the bare minimum, you'll need to add a catch block to every request of the event-bus/index.js: axios.post('http://localhost:4000/events', event).catch((err) => { console.log(err.message); axios.post('http://localhost:4001/events', event).catch((err) => { console.log(err.message); axios.post('http://localhost:4002/events', event).cat…

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Promise`, `Event`, `https`, `nodejs`, `request`, `http`, `Node and Unhandled Promise Rejections`, `index.js`

## 예시
`Promise`, `Event`, `https`, `nodejs`, `request`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Important Note about Node and Unhandled Promise Rejections**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/26393470#overview)
