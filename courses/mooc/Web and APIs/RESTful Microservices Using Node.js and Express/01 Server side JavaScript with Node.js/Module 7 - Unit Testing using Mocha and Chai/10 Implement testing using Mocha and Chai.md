# Implement testing using Mocha and Chai

## 개요
- Mocha의 구조 요소와 **훅(hook)** — `it`·`describe`·`before`·`after`·`beforeEach`·`afterEach` — 그리고 Chai의 세 가지 어설션 스타일 **assert·expect·should**

## 내용

### Mocha 훅과 구조
- Mocha는 테스트의 **사전 조건 설정과 정리(clean up)** 에 쓰는 내장 훅을 제공한다.
| 요소 | 역할 |
|---|---|
| **`it`** | **단일 테스트** 정의 |
| **`describe`** | **여러 테스트** 정의(스위트) |
| **`before`** | describe 블록의 **첫 테스트 전에 한 번만** 실행 |
| **`after`** | describe 블록의 **마지막 테스트 뒤에 한 번만** 실행 |
| **`beforeEach`** | describe 블록의 **모든 테스트 전에** 실행 |
| **`afterEach`** | describe 블록의 **모든 테스트 뒤에** 실행 |

### Chai
- Node 내장 `assert`와 비슷한 어설션 라이브러리로, 코드에 실행할 수 있는 많은 어설션을 제공해 테스트를 쉽게 만든다.
- 세 가지 어설션 스타일: **`assert`**, **`expect`**, **`should`**

## 예시
```javascript
const chai = require('chai');
const { assert, expect } = chai;
chai.should();                                  // should 스타일 활성화

describe('Notes store', () => {
  let store;

  before(() => { console.log('open connection (once)'); });
  after(() => { console.log('close connection (once)'); });
  beforeEach(() => { store = []; });             // 매 테스트 전 초기화
  afterEach(() => { store = null; });            // 매 테스트 후 정리

  it('adds a note — assert style', () => {
    store.push('a');
    assert.equal(store.length, 1);
  });

  it('adds a note — expect style', () => {
    store.push('a');
    expect(store).to.have.lengthOf(1);
  });

  it('adds a note — should style', () => {
    store.push('a');
    store.length.should.equal(1);
  });
});
```

## 요약
- `describe`(스위트)와 `it`(단일 테스트)로 구조를 잡고, `before`/`after`는 한 번, `beforeEach`/`afterEach`는 매 테스트마다 실행된다.
- 훅은 사전 조건 설정과 정리에 쓴다.
- Chai는 assert·expect·should 세 스타일의 어설션을 제공한다.
