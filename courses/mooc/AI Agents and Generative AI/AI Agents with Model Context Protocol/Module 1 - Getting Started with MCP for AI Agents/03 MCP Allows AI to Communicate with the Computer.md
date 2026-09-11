# MCP Allows AI to Communicate with the Computer

## 개요
- 앞선 강의(스파게티 요리)의 도구 사용 개념을, **실제 비즈니스 문제(회의 일정 잡기)**로 확장해 보여주고, MCP가 "사람이 대신 실행해주던 것"을 어떻게 컴퓨터가 자동으로 처리하게 만드는지 설명하는 강의.

## 내용
### 실습 프롬프트 — 분기 계획 회의 잡기
```
Sarah Johnson, Mike Chen, Lisa Rodriguez와 다음 주에 2시간짜리 분기 계획 회의를 예산 검토 발표 시간 포함해서 잡아야 해.
사용 가능한 도구: calendar checker(캘린더 확인), corporate directory(사내 주소록), email sender(이메일 발송).
지시사항: 한 단계당 도구 하나만 사용. 형식: use: 도구, 메모
과제: 세 사람 모두와 분기 계획 회의를 잡아라. 첫 단계는?
```

### 진행 과정
1. AI: `use: calendar checker, check available two hour slots next week.`
2. (사람이 결과를 시뮬레이션해서 붙여넣음: 가능한 2시간 슬롯들)
3. AI: `use: corporate directory, look up Sarah Johnson's email address.`
4. (Sarah의 이메일 결과 제공)
5. AI: `use: corporate directory, look up Mike Chen's email address.`
6. (Mike의 이메일 결과 제공)
7. AI: `use: corporate directory, look up Lisa Rodriguez's email address.`
8. (Lisa의 이메일 결과 제공)
9. AI: `use: email sender, send meeting invitation to all three team members with available time slots.`

### 핵심 관찰 — AI가 "여러 번의 도구 호출"이 필요하다는 것을 스스로 이해함
- AI는 단순히 "사내 주소록 한 번 조회"로 끝내지 않고, **세 사람 각각에 대해 별도로 조회가 필요하다는 것을 스스로 파악**했다.
- 즉, 문제를 세부 단계로 분해하고, 각 단계에 맞는 도구를 순서대로 호출하는 능력을 보여줌 — 파스타 요리뿐 아니라 **임의의 비즈니스 문제도 도구 집합으로 분해해 해결**할 수 있음을 시사.

### MCP가 실제로 하는 일 — "사람 시뮬레이션"을 "자동화"로 대체
- 지금까지의 실습에서는 **사람이 직접 도구 실행 결과를 복사·붙여넣기하며 시뮬레이션**했다.
- MCP가 실제로 하는 일: AI가 `use: 도구, 메모` 형식의 메시지를 내보내면, **컴퓨터가 이 특정 형식의 메시지를 직접 인식**해서 해당 도구(함수/애플리케이션)를 자동으로 실행하고, 그 결과를 다시 AI에게 직접 전달한다 — **사람이 중간에서 더 이상 개입할 필요가 없어짐.**

### 프로그래머 관점에서 본 MCP
- 프로그래머들이 평소에 하는 일: 이름이 있는 함수(예: `corporate_directory(params)`)를 작성하고, 매개변수를 넘겨 데이터를 반환받는 것.
- 보통 사람은 GUI(버튼 클릭 등)를 통해 이런 기능과 상호작용하지만, **AI는 GUI를 조작하기 어렵다.**
- 대신 AI는 프로그래머들이 작업하는 **더 낮은 layer**에서 동작한다 — "이 이름의 이 함수를 호출하고 싶다"고 직접 표현하고, 반환된 데이터를 직접 소비(consume)한다.
- **MCP는 AI가 이런 함수(도구)들을 직접 보고, 직접 호출하고, 직접 결과를 소비할 수 있게 해주는 프로토콜**이다.

## 예시
```
Available tools: calendar checker, corporate directory, email sender.
Instructions: You may use one tool per step. Format: use: tool, notes.
Task: Schedule the quarterly planning meeting with all three people.
```
→ AI가 캘린더 확인 → 3명의 이메일을 각각 조회 → 이메일 발송까지 순서대로 도구를 호출하며 문제 해결.

## 요약
- MCP는 파스타 요리 같은 단순한 예시를 넘어, **회의 일정 잡기 같은 실제 비즈니스 문제**에도 동일한 원리로 적용된다 — AI가 문제를 여러 단계로 분해하고 필요한 도구를 순서대로 호출.
- 지금까지는 사람이 도구 실행 결과를 직접 시뮬레이션(복사·붙여넣기)했지만, **MCP는 이 과정을 자동화**해 컴퓨터가 `use: 도구` 메시지를 직접 인식하고 실행한 뒤 결과를 AI에 돌려준다.
- 이는 프로그래머가 함수를 호출하고 결과를 받는 것과 유사한 방식이며, AI가 GUI 대신 **함수/도구 호출 레벨**에서 컴퓨터와 직접 소통하게 해주는 것이 MCP의 본질이다.
