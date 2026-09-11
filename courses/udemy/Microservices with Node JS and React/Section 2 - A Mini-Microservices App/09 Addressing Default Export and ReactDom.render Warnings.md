# Addressing Default Export and ReactDom.render Warnings

## 개요
- Addressing Default Export and ReactDom.render Warnings In the upcoming lecture, we will be creating our first React component. You will see a few warnings in the terminal or browser console: Line 1:1: Assign arrow function to a variable before exporting as module default import/no-anonymous-default-export This is a linter warning as of…

## 내용
### 자막·본문 기반 핵심 내용
- Addressing Default Export and ReactDom.render Warnings In the upcoming lecture, we will be creating our first React component. You will see a few warnings in the terminal or browser console: Line 1:1: Assign arrow function to a variable before exporting as module default import/no-anonymous-default-export This is a linter warning as of…
- You can suppress the warning by refactoring from this: import React from "react"; export default () => { return <div>Blog app</div>; to this: import React from "react"; const App = () => { return <div>Blog app</div>; export default App; The warning will come up a few more times in this project (and throughout the course) when creating…
- Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. To address this warning, update the root index.js to use ReactDOM.createRoot instead of ReactDOM.render: import React from "react"; import ReactDOM from "react-dom/client"; import App from "./App"; const root = ReactDOM.createRoot(document.getElementBy…

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `React`, `index.js`

## 예시
`React`, `index.js`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Addressing Default Export and ReactDom.render Warnings**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/26374972#overview)
