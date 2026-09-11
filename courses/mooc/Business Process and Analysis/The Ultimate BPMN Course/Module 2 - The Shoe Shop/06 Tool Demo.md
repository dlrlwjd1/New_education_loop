# Tool Demo

## 개요

- 이 코스 전체에서 사용할 **BPMN 모델링 도구** 사용법을 익히는 강의
- 도구 주소: `processcamp.io/profile/links` → **BPMN Modeler** 클릭

## 내용

### 시작하기

1. `processcamp.io/profile/links` 로 이동
2. **BPMN Modeler** 클릭
3. **빈 캔버스(blank canvas)** 로 시작
4. 화면 **왼쪽에 툴바(toolbar)** 가 있고 모든 BPMN 요소가 들어 있다

### 모델 만드는 순서

**1. Pool 추가**

어떤 프로세스든 가장 먼저 필요한 것은 pool이다.

- pool을 캔버스로 **drag and drop**
- pool **왼쪽 헤더를 더블클릭**해 이름을 붙인다 (예: `Megaworld`)

**2. Start event 이름 붙이기**

- pool 안의 start event를 **더블클릭**해 레이블 입력
- 예: `고객이 맞는 신발 사이즈를 찾을 수 없음(customer can't find the right shoe size)`

**3. Task 추가**

- task를 drag and drop 하고 레이블을 붙인다 (예: `창고 확인(check the warehouse)`)
- **start event에서 task로 화살표를 그리면** 모델러가 자동으로 **sequence flow**를 연결한다

**4. Context menu 활용**

각 요소 옆에 나타나는 **context menu**가 핵심 편의 기능이다. 이것만으로 모델 전체를 만들 수 있다.

- context menu에서 **exclusive gateway**를 추가하고 위치를 잡는다
- 레이블은 **질문 형태**로 쓴다 (예: `신발 사이즈가 있는가?(shoe size available)`)

**5. Gateway 타입 변경 — wrench 아이콘**

> context menu에는 gateway가 **한 종류만** 보인다. 당황할 필요 없다.

- **wrench(렌치) 아이콘을 클릭**하면 기존 gateway를 **원하는 타입으로 변환**할 수 있다
- 이 기법은 **모든 BPMN 요소 생성에 동일하게 적용**된다

## 예시

```text
작업 순서

1. Pool drag & drop        → 헤더 더블클릭 → "Megaworld"
2. Start event 더블클릭     → "고객이 맞는 신발 사이즈를 찾을 수 없음"
3. Task drag & drop        → "창고 확인"
4. Start event → Task 화살표 그리기  (sequence flow 자동 생성)
5. Context menu → gateway 추가 → "신발 사이즈가 있는가?"
6. Wrench 아이콘 → 필요한 gateway 타입으로 변환
```

## 요약

- 도구는 `processcamp.io/profile/links` 의 **BPMN Modeler**를 사용한다
- **pool → start event → task → sequence flow → gateway** 순으로 만든다
- 요소 사이에 화살표를 그리면 sequence flow가 자동 생성된다
- **context menu**로 대부분의 작업을 처리하고, **wrench 아이콘**으로 요소 타입을 변환한다
