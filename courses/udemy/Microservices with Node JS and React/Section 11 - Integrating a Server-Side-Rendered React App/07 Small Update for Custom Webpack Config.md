# Small Update for Custom Webpack Config

## 개요
- Small Update for Custom Webpack Config In the upcoming lecture, we will create a next.config.js file and add some configuration to it. The latest Next.js 15 requires a few changes and additional configurations. First, the file will need to be named with the .mjs extension, not .js: next.config.mjs The contents of the file should be the…

## 내용
### 자막·본문 기반 핵심 내용
- Small Update for Custom Webpack Config In the upcoming lecture, we will create a next.config.js file and add some configuration to it. The latest Next.js 15 requires a few changes and additional configurations. First, the file will need to be named with the .mjs extension, not .js: next.config.mjs The contents of the file should be the…
- Important - If you are using a different hostname than ticketing.dev, then, you will need to add that to the allowedDevOrigins instead. export default { webpack: (config) => { return { ...config, watchOptions: { ...config.watchOptions, poll: 300 allowedDevOrigins: ['ticketing.dev'] Note - If you are using the Next.js / React app and ve…

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Next.js`, `React`, `next.config.js`

## 예시
`Next.js`, `React`, `next.config.js`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Small Update for Custom Webpack Config**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/33390550#overview)
