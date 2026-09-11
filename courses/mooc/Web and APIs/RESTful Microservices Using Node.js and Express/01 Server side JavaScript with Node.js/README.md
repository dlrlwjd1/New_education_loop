# Server side JavaScript with Node.js

**Course URL:** [mooc.org/learn/server-side-javascript-with-nodejs](https://www.mooc.org/learn/server-side-javascript-with-nodejs)

NIIT의 `RESTful Microservices Using Node.js and Express` 전문과정 1번째 강좌. Node.js 런타임과 JavaScript 기본기(Module 1~2)에서 시작해 **모듈 시스템과 npm**(Module 3), **비동기 프로그래밍**(콜백·이벤트 루프·Promise·async/await, Module 4), **파일 시스템·스트림·EventEmitter**(Module 5), **오류 처리와 디버깅**(Module 6), **Mocha·Chai 단위 테스트**(Module 7)까지 서버 측 JavaScript의 기초를 다진다.

- 구성: 7개 모듈 · 영상 121개
- 수집 상태: 영상 **114개** Transcript 정리 완료 (2026-09-06)
- 미확인 7개: 각 모듈의 `Learning Consolidation` — 자막이 없거나 `[MUSIC]` 한 줄뿐이라 상태만 기록했다
- 제외: 읽기 자료 8개, 채점 프로그래밍 과제 19개, 비채점 프로그래밍 과제 2개(`Todo List Users`·`Calculator App Part2`), 채점 평가 7개의 정답 및 제출

## 모듈 구성

- [Module 1 - Getting Started With JavaScript in Node.js](Module%201%20-%20Getting%20Started%20With%20JavaScript%20in%20Node.js/) — Node.js 소개와 구성 요소·동작 원리, 다른 플랫폼과의 비교와 장점, JavaScript 기본 문법, 급여·복리후생 계산과 온도 변환 데모, Calorie Tracker·Area Calculator·Swap Digits 과제
- **Module 2 - Work with JavaScript Functions Arrays and Objects** — 함수로 코드 모듈화, 배열 함수(filter·map·reduce)로 데이터 필터링·변환·집계와 체이닝, 배열·객체로 데이터 모델링, 복합 데이터 구조 다루기, Banking Application·Cricket Series·JavaScript Logic Building 과제
- [Module 3 - Build and Use Modules in Node.js](Module%203%20-%20Build%20and%20Use%20Modules%20in%20Node.js/) — 모듈 만들기, 내장(built-in)·사용자 정의(user-defined)·외부(npm) 모듈, 프로젝트 구조, 출력 스타일링과 Lodash 배열 조작 데모, npm 레지스트리에 모듈 게시, String·Array Manipulation 과제
- [Module 4 - Asynchronous Programming](Module%204%20-%20Asynchronous%20Programming/) — 동기 vs 비동기, 콜백과 에러 우선 콜백, Node.js 아키텍처와 이벤트 루프, Promise·Promise 체이닝·async/await(청구서 계산 3부 데모), Employees·Todo list·Todo List Users·Grade Evaluation 과제
- [Module 5 - Working with File System using Node.js](Module%205%20-%20Working%20with%20File%20System%20using%20Node.js/) — fs 모듈의 동기·비동기 읽기/쓰기와 flag, 노트 앱 데모 2부, `fs.watch`·`fs.watchFile`, 스트림(4타입·flowing/paused)·readline·Buffer, EventEmitter, Sales Analyzer·Insurance Data·상품 정렬 과제
- [Module 6 - Error Handling and Debugging Node Applications](Module%206%20-%20Error%20Handling%20and%20Debugging%20Node%20Applications/) — 운영 오류 vs 논리 오류, `throw`·`try-catch-finally`·커스텀 예외(유권자 나이 검증 데모), 동기/비동기 오류 처리, 내장 Node 디버거(Chrome)와 VS Code 디버거, 진단 리포트, 계산기·파일 읽기 과제
- [Module 7 - Unit Testing using Mocha and Chai](Module%207%20-%20Unit%20Testing%20using%20Mocha%20and%20Chai/) — 테스트 분류와 test first, TDD와 BDD(Given/When/Then), Mocha(`describe`·`it`·훅)와 Chai(assert·expect·should), 동기·비동기 계산기 테스트 데모, Calculator App·Employee App 과제

## 강의 목록

### Module 1 - Getting Started With JavaScript in Node.js
1. **Context Setting**
2. **Explore Node.js**
3. [Define the components of Node.js](Module%201%20-%20Getting%20Started%20With%20JavaScript%20in%20Node.js/03%20Define%20the%20components%20of%20Node.js.md)
4. **Working of Node.js**
5. **Node.js Vs Other Platforms**
6. **Benefits of using Node.js**
7. **Watch and Repeat - Simple JavaScript Program in Node**
8. **Explore JavaScript fundamentals**
9. **Watch and Repeat - Calculate Salary and benefits**
10. **Watch and Repeat - Calculate Salary and benefits1**
11. **Watch and Repeat - Temperature Convertor**
12. **Practice Brief1**
13. **Practice Brief2**
14. **Practice Brief3**
15. **Practice Debrief**
16. **Learning Consolidation** — 자막 없음, 상태만 기록

### Module 2 - Work with JavaScript Functions Arrays and Objects
1. **Context Setting**
2. **Modularize the code by creating functions and making function invocations**
3. **Watch and Repeat - Functions**
4. **Filter, transform, and aggregate data using array functions**
5. **Watch and Repeat - Create and Access Array Elements**
6. **Watch and Repeat - Perform Array Operations**
7. **Watch and Repeat - Perform Complex Array Operations**
8. **Watch and Repeat - Chaining filter() map() reduce()**
9. **Model data using arrays and Objects**
10. **Watch and Repeat - Create JavaScript Object**
11. **Watch and Repeat - Working With Complex Data Structures**
12. **Practice Brief1**
13. **Practice Breif2**
14. **Practice Debrief**
15. **Challenge Brief**
16. **Challenge Debrief**
17. **Learning Consolidation** — 자막 없음, 상태만 기록

### Module 3 - Build and Use Modules in Node.js
1. **Context Setting**
2. **Build Modules in Node.js**
3. **Describe Built-In Modules**
4. [Describe User-Defined Modules](Module%203%20-%20Build%20and%20Use%20Modules%20in%20Node.js/04%20Describe%20User-Defined%20Modules.md)
5. **Watch and Repeat - Arrays Manipulation**
6. **Understand External Module — npm module**
7. **Understand Project Structure**
8. **Work with External Module**
9. **Watch and Repeat - Style the Output**
10. **Watch and Repeat - Arrays Manipulation Using Lodash**
11. **Publish Modules to the npm Registry**
12. **Practice Brief1**
13. **Practice Brief2**
14. **Practice Debrief**
15. **Learning Consolidation** — 자막 없음, 상태만 기록

### Module 4 - Asynchronous Programming
1. **Context Setting**
2. **Differentiate between synchronous programming and asynchronous programming**
3. **Control structures for asynchronous programming and Callbacks**
4. **Watch and Repeat - Validate and Calculate Total Bill**
5. **Watch and Repeat - Validate and Calculate Total Bill using Error first callbacks**
6. **Describe Node.js architecture**
7. [Use the event loop](Module%204%20-%20Asynchronous%20Programming/07%20Use%20the%20event%20loop.md)
8. **Use Promises**
9. **Watch and Repeat - Bill Calculation**
10. **Use Promise Chaining**
11. **Watch and Repeat - Promise Chaining**
12. [Use async-await](Module%204%20-%20Asynchronous%20Programming/12%20Use%20async-await.md)
13. **Watch and Repeat - Bill Calculation async-await**
14. **Practice Brief1**
15. **Practice Brief2**
16. **Practice Brief3**
17. **Practice Debrief**
18. **Challenge Brief**
19. **Challenge Debrief**
20. **Learning Consolidation** — 자막 없음, 상태만 기록

### Module 5 - Working with File System using Node.js
1. **Context Setting**
2. **Understand the Node.js fs module**
3. **Read and write a file synchronously**
4. **Read and write a file asynchronously**
5. **Watch and Repeat - Reading and Writing on Files Set -I**
6. **Watch and Repeat - Reading and Writing on Files Set -II**
7. **Explore watch and a watchFile module**
8. [Implement stream and buffer](Module%205%20-%20Working%20with%20File%20System%20using%20Node.js/08%20Implement%20stream%20and%20buffer.md)
9. **Watch and Repeat - String Conversion**
10. **Implement EventEmitter in Node.js**
11. **Watch and Repeat - Demo for EventEmitter**
12. **Practice Brief1**
13. **Practice Brief2**
14. **Practice Debrief**
15. **Challenge Brief**
16. **Challenge Debrief**
17. **Learning Consolidation** — 자막 없음, 상태만 기록

### Module 6 - Error Handling and Debugging Node Applications
1. **Context Setting**
2. **Define Errors in Node.js**
3. **Error Handling in Node.js Applications**
4. **Watch and Repeat - Voting Age Validator**
5. **Handle Errors in Synchronous Programs**
6. **Watch and Repeat - Voter Age Custom Errors**
7. [Handle Errors in Asynchronous Programs](Module%206%20-%20Error%20Handling%20and%20Debugging%20Node%20Applications/07%20Handle%20Errors%20in%20Asynchronous%20Programs.md)
8. **Watch and Repeat - Read Data from File**
9. **Debugging and the inbuilt Node debugger**
10. **Watch and Repeat - Debugging with the In-Built Debugger**
11. **Debug in VSCode**
12. **Watch and Repeat - Debugging in VS Code**
13. **Diagnose errors in Node Applications**
14. **Practice Brief1**
15. **Practice Brief2**
16. **Practice Brief3**
17. **Practice Debrief**
18. **Learning Consolidation** — 자막 없음, 상태만 기록

### Module 7 - Unit Testing using Mocha and Chai
1. **Context Setting**
2. **Describe testing**
3. **Sample the implementation of TDD and BDD**
4. **Get started with TDD**
5. **Get started with BDD**
6. **Describe Mocha and Chai**
7. **Watch and Repeat - Test Basic Calculator Operations 1**
8. **Watch and Repeat - Test Basic Calculator Operations 2**
9. **Watch and Repeat - Test Basic Calculator Operations 3**
10. [Implement testing using Mocha and Chai](Module%207%20-%20Unit%20Testing%20using%20Mocha%20and%20Chai/10%20Implement%20testing%20using%20Mocha%20and%20Chai.md)
11. **Watch and Repeat - Async Test Basic Calculator Operations**
12. **Practice Brief1**
13. **Practice Brief2**
14. **Practice Brief3**
15. **Practice Debrief**
16. **Challenge Brief**
17. **Challenge Debrief**
18. **Learning Consolidation** — 자막 없음, 상태만 기록

## 핵심 개념 요약

- **Node.js** — 서버 측 애플리케이션을 만드는 오픈소스·크로스플랫폼 JavaScript 런타임. 브라우저의 JavaScript는 보안상 DOM 환경에 갇혀 쿠키·로컬/세션 스토리지만 쓸 수 있지만, Node는 JavaScript에 파일·OS 접근 컨텍스트를 제공한다.
- **모듈** — 내장(built-in) 모듈은 `require('fs')`처럼 바로 쓰고, 사용자 정의 모듈은 `module.exports`로 내보내 `require('./경로')`로 가져오며, 외부 모듈은 npm으로 설치해 `package.json`에 기록한다.
- **동기 vs 비동기** — 동기 API(`readFileSync`)는 다른 프로세스를 차단하고 오류를 `throw`로 보고한다. 비동기 API(`readFile`)는 비차단이며 **에러 우선 콜백** `(err, data)`로 결과를 준다. 비동기 콜백은 태스크 큐에서 콜 스택이 빌 때 이벤트 루프가 올려 실행하므로, 뒤에 호출한 동기 코드가 먼저 출력된다.
- **Promise / async-await** — Promise는 `then(onFulfilled, onRejected)`·`catch`로 소비하고 체이닝할 수 있다. async 함수는 Promise와 제너레이터의 조합으로 **항상 Promise를 반환**하며 `await`는 Promise를 반환하는 함수에만 쓴다. 여러 Promise를 함께 기다릴 때는 `Promise.all`, 콜백 함수를 Promise로 바꾸는 것은 Promisifying.
- **타이머** — `setTimeout`·`setInterval`·`setImmediate`는 `require` 없이 쓰고 `clearTimeout`·`clearInterval`·`clearImmediate`로 취소한다.
- **fs 모듈** — `readFileSync(path, options)`(encoding 기본 `null` → Buffer, flag 기본 `'r'`), `writeFileSync(file, data, options)`, `readFile`/`writeFile` + 콜백. flag `r+`/`w+`/`a`/`a+`. `fs.stat`은 `fs.Stats`, `fs.watchFile`은 폴링(interval 기본 5007ms), `fs.watch`는 `rename`·`change` 이벤트(플랫폼 간 비일관).
- **스트림** — 큰 데이터를 청크로 처리해 메모리·시간 효율을 얻는다. Readable(pipe from만)·Writable(pipe into만)·Duplex·Transform. Readable은 paused로 시작해 `data` 리스너·`resume()`·`pipe()`로 flowing이 되고 `data`·`end`·`error`·`finish` 이벤트를 쓴다. `write()`가 false면 `drain`을 기다린다. `readline.createInterface` + `on('line')`으로 한 줄씩 읽는다. Buffer는 이진 데이터용 고정 크기 전역 객체(`length`는 버퍼 크기).
- **EventEmitter** — `require('events')`의 클래스. 인스턴스에 `on`/`addListener`로 등록(emit 전에), `emit(name, ...args)`로 트리거. 여러 구독자는 등록 순서대로 호출되고 인자를 공유하며 `once`는 한 번만 반응한다. 모든 스트림은 EventEmitter를 상속한다.
- **오류** — 운영 오류(네트워크·타임아웃·500·메모리·시스템·표준 JS·사용자 정의·assertion)는 올바른 코드에서도 나는 런타임 오류, 논리 오류(콜백 누락·미catch Promise·`undefined` 속성 접근)는 프로그램 버그다. `try`(핵심 코드)·`catch(err)`·`finally`(항상 실행), catch/finally 중 하나는 필수. `new Error(message, { cause })`. 잡지 않은 throw는 프로세스를 즉시 종료한다. `class AgeError extends Error`로 커스텀 예외. Node 라이브러리는 `JSON.parse` 외에는 콜백 첫 인자/`error` 이벤트로 오류를 넘기는 것이 표준.
- **디버깅** — 식별 → 격리 → 수정/우회 → 테스트. 내장 디버거는 `debugger` 문 + `node inspect 파일` + `chrome://inspect`(Scope·Call Stack·Console, Ctrl+C 두 번 종료). VS Code는 JavaScript Debug Terminal에서 `node 파일`을 실행하면 브레이크포인트에 자동 연결(Variables·Watch·Call Stack, Step Into/Over). 진단 리포트는 `process.report.writeReport()`로 JSON 생성, `reportOnFatalError`·`reportOnSignal`·`reportOnUncaughtException`(기본 false)·`filename`·`directory`.
- **테스트** — 정적/동적, 화이트박스(단위·통합)/블랙박스(시스템·인수, 알파·베타). 늦게 발견된 결함은 수정 비용이 10~100배라 **test first**가 효율적이다. TDD(Kent Beck, XP)는 실패하는 테스트 → 최소 코드 → 리팩터링을 반복하고, BDD는 쉬운 영어의 Given/When/Then 시나리오로 모든 이해관계자가 협업한다.
- **Mocha / Chai** — Mocha는 테스트를 직렬 실행하는 프레임워크(`describe`·`it`, 훅 `before`·`after`·`beforeEach`·`afterEach`), Chai는 assert·expect·should 세 스타일의 어설션 라이브러리. `npm install mocha chai --save-dev`, `package.json`의 `"test": "mocha 경로"`로 `npm test`. 비동기 테스트는 `done` 콜백 또는 `async` 테스트 함수. 스파이/스텁을 설정했으면 실제 메서드 대신 그것이 호출되게 하고, 의존 코드는 mock/stub한다.

> 2026-09-06: 이 강좌는 이전에 `01 Integrated Course Notes.md` 통합 노트 하나만 있었다. MOOC 커리큘럼 기준으로 영상 121개를 확인해 강의별 노트로 대체했다.
