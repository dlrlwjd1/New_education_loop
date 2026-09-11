# Integrate with Reactotron

## 개요
- 디버깅 도구(debugging tool) Reactotron을 React Native 프로젝트에 통합
- 데스크톱 앱 설치 → dev 의존성 패키지 설치 → 설정 파일 생성 → `index.js`에 연결 코드 추가 순서
- 연결되면 Android/iOS 각각의 연결 상태와 `console.log` 출력을 Reactotron 타임라인에서 확인 가능

## 내용

### 데스크톱 앱 설치
1. Google에서 "react native reactotron"을 검색해 공식 저장소/문서로 이동한다.
2. 문서의 "Download the desktop app"에서 릴리스 목록으로 가서 설치 파일이 있는 버전(예: reactotron-app 3.7.7, 자산 14개)을 찾는다.
3. Mac(Apple Silicon)이라면 `Reactotron-arm64.dmg`를 다운로드하고, 더블 클릭 후 Applications로 이동해 설치·실행한다.

### 프로젝트 통합
1. dev 모드로 패키지를 설치한다.

```bash
yarn add -D reactotron-react-native
```

2. 프로젝트 루트에 `ReactotronConfig.js` 파일을 만들고 문서의 설정 코드를 그대로 붙여넣는다.

```js
// ReactotronConfig.js (문서 예시)
import Reactotron from 'reactotron-react-native';

Reactotron.configure() // controls connection & communication settings
  .useReactNative()    // add all built-in react native plugins
  .connect();          // let's connect!
```

3. `App.js` 또는 `index.js`에 연결 코드를 추가한다 (강사는 `index.js`를 선호). 문서의 코드를 `index.js` 상단에 붙여넣는다.

```js
// index.js 상단
if (__DEV__) {
  require('./ReactotronConfig');
}
```

### 연결 확인과 로그 테스트
- Metro 번들러를 종료하고 다시 시작한 뒤 앱을 재실행한다.

```bash
yarn start
yarn both   # 이전 강의에서 만든 스크립트: Android + iOS 실행
```

- Reactotron 앱에서 연결(connection)이 표시된다. Android가 뜨면 연결 1개, iOS까지 빌드가 끝나면 연결 2개(Android 아이콘/iOS)가 보이고 Timeline 탭에서 connection 이벤트를 확인할 수 있다.
- 채팅 화면 등에서 `console.log('Hello Reactotron')`을 찍고 저장하면 Reactotron 타임라인에 로그가 표시된다.

## 예시

```bash
yarn add -D reactotron-react-native
```

```js
// src/screens 등 아무 곳에서
console.log('Hello Reactotron');
// → Reactotron Timeline에 "Hello Reactotron" 로그가 나타남
```

## 요약
- Reactotron은 React Native용 디버깅 도구로, 데스크톱 앱과 `reactotron-react-native`(dev 의존성) 패키지로 구성된다.
- 루트에 `ReactotronConfig.js`를 만들고 `index.js` 상단에서 dev 모드일 때 require하도록 연결한다.
- Metro 재시작 후 앱을 실행하면 Android/iOS 연결이 각각 표시된다.
- `console.log` 출력이 Reactotron Timeline에 실시간으로 표시되어 디버깅이 편해진다.
