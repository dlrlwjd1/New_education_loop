# Implement stream and buffer

## 개요
- 큰 파일을 통째로 메모리에 올리지 않고 조각(chunk)으로 처리하는 **스트림(stream)** — 장점(메모리·시간 효율), 4가지 타입(Readable·Writable·Duplex·Transform), Readable의 **flowing/paused 모드**, 이벤트(data·finish·error·end), Writable의 `write`·`drain`, **readline** 모듈, 그리고 이진 데이터를 담는 고정 크기 메모리 **버퍼(Buffer)**

## 내용

### 왜 스트림인가
- 32 GB 넘는 파일을 통째로 읽어 메모리에 두고 조작할까, **한 줄씩 읽으며 동시에 조작**할까? → 스트림.
- 스트림은 파일 읽기/쓰기, 네트워크 통신 등 **끝에서 끝으로의 정보 교환을 효율적으로** 다루는 방법이다. 전통 방식은 파일을 처음부터 끝까지 메모리에 읽은 뒤 처리하지만, 스트림은 **조각조각 읽으며 메모리에 두지 않고** 처리한다.
- 두 가지 장점:
  1. **메모리 효율** — 처리 전에 대량 데이터를 메모리에 올릴 필요가 없다.
  2. **시간 효율** — 전체 페이로드를 기다리지 않고 데이터가 오는 즉시 처리를 시작한다. (YouTube·Netflix가 영상을 연속 청크로 보내 즉시 재생하는 것과 같다.)

### 스트림 4가지 타입
| 타입 | 설명 |
|---|---|
| **Readable** | pipe **from**만 가능 — 데이터를 받을 수 있지만 보낼 수 없다. push된 데이터는 소비자가 읽기 시작할 때까지 버퍼링된다 |
| **Writable** | pipe **into**만 가능 — 보낼 수 있지만 받을 수 없다 |
| **Duplex** | 양쪽 모두 — Readable + Writable 조합 |
| **Transform** | Duplex와 비슷하나 **출력이 입력의 변환(압축)** |

### Readable 스트림의 두 모드
- **flowing 모드**: 데이터가 자동으로 읽혀 **EventEmitter 인터페이스의 이벤트**로 최대한 빨리 전달된다. `data` 이벤트에 콜백을 붙인다.
- **paused 모드**: **`stream.read()`** 를 명시적으로 호출해 청크를 읽는다.
- 주요 이벤트: **`data`**(읽을 데이터 있음), **`finish`**(쓰기 완료), **`error`**(읽기/쓰기 오류), **`end`**(읽기 스트림이 다 읽음)

**flowing 모드 읽기 단계**
1. `fs.createReadStream()` → Readable 스트림(처음엔 정적 상태)
2. `data` 이벤트에 콜백 연결 → 스트림이 흐르기 시작
3. 청크를 읽어 콜백에 전달(얼마나 자주 `data`를 내보낼지는 구현체가 결정)
4. 더 읽을 게 없으면 **`end`**, 오류 시 **`error`**
- 명시적으로 pause되지 않은 스트림에 `data` 리스너를 붙이면 flowing으로 전환된다.

**paused 모드 읽기 단계**
1. `read()`로 내부 버퍼에서 읽는다
2. 읽을 게 없으면 `read()`가 **`null`** 반환
3. while 루프에서 null을 확인해 종료
- 모든 Readable은 **paused로 시작**하며 ① `data` 핸들러 추가 ② `stream.resume()` ③ `stream.pipe()`(Writable로 보냄) 중 하나로 flowing이 된다. `readable` 이벤트는 청크가 읽힐 때 발생한다.

### Writable 스트림
- 인스턴스의 **`write()`** 를 호출한다. 입력 스트림의 청크를 읽어 목적지에 쓴다. **Boolean 반환** — true면 성공. `write(chunk)`가 **false**를 반환하면, 다시 쓰기에 적절한 시점에 **`drain`** 이벤트가 발생한다.

### readline 모듈
- Readable 스트림에서 데이터를 읽는 인터페이스 — **한 줄씩** 읽게 해 준다.
- `readline.createInterface({ input, output })` — 첫 파라미터 표준 입력, 둘째 표준 출력용.
- 리스너 메서드 **`on(event, callback)`** — **`line`** 이벤트는 입력 스트림이 줄 끝(end-of-line)을 받을 때마다 발생한다.

### Buffer
- **고정 크기 메모리 청크**로 크기를 바꿀 수 없다. **전역 객체**라 `require` 불필요. `Buffer` 클래스로 구현.
- 전통적으로 문자열만 다루던 생태계에서 **이진 데이터**를 다루기 위해 도입됐다. 순수 JavaScript는 유니코드 문자열엔 강하지만 이진 데이터엔 약하다 — 브라우저는 괜찮지만 Node.js 서버는 **TCP 스트림과 파일 시스템 읽기/쓰기**로 순수 이진 스트림을 다뤄야 한다.
- 스트림·파일 작업에서 주로 쓰이며 이진 데이터를 다른 형식으로 변환할 수 있다.
- **`length` 속성은 내용 크기가 아니라 버퍼 자체의 크기**를 반환한다.

## 예시
```javascript
const fs = require('fs');
const readline = require('readline');

// flowing 모드
const rs = fs.createReadStream('big.csv', { encoding: 'utf8' });
rs.on('data', (chunk) => console.log('chunk bytes:', chunk.length));
rs.on('end', () => console.log('done'));
rs.on('error', (e) => console.error(e));

// paused 모드
const rs2 = fs.createReadStream('big.csv');
rs2.on('readable', () => {
  let chunk;
  while ((chunk = rs2.read()) !== null) console.log(chunk.length);
});

// Writable — write()는 Boolean, false면 drain 대기
const ws = fs.createWriteStream('out.txt');
const ok = ws.write('line 1\n');
if (!ok) ws.once('drain', () => ws.write('line 2\n'));
ws.on('finish', () => console.log('all written'));
ws.end();

// readline — 한 줄씩
const rl = readline.createInterface({ input: fs.createReadStream('big.csv'), output: process.stdout });
rl.on('line', (line) => console.log('LINE:', line));
```

```javascript
// Buffer — 전역, require 불필요
const buf = Buffer.alloc(8);              // 고정 크기
buf.write('hi');
console.log(buf.toString('utf8', 0, 2)); // 'hi'
console.log(Buffer.isBuffer(buf));       // true
console.log(buf.length);                 // 8  ← 내용 크기(2)가 아니라 버퍼 크기
const copy = Buffer.alloc(8);
buf.copy(copy);
```

## 요약
- 스트림은 큰 데이터를 청크로 처리해 메모리·시간 효율을 얻으며 Readable·Writable·Duplex·Transform 네 타입이 있다.
- Readable은 paused로 시작해 `data` 리스너·`resume()`·`pipe()`로 flowing이 되고, `data`·`end`·`error`·`finish` 이벤트를 쓴다; Writable의 `write()`가 false면 `drain`을 기다린다.
- readline은 스트림을 한 줄씩(`line` 이벤트) 읽고, Buffer는 이진 데이터를 담는 고정 크기 전역 객체다(`length`는 버퍼 크기).
