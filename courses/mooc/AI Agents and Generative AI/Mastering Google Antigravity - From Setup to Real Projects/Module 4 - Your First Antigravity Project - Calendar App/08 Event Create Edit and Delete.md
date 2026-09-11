# Add Event Create, Edit and Delete Functionality

## 개요

- Calendar App에 완전한 이벤트 CRUD 흐름을 구현한다.
- 복잡한 기능에는 강한 모델과 Planning Mode를 활용한다.

## 내용

Create dialog에는 title, 선택적 description, date, time, save action이 필요하다. 선택한 날짜에 이벤트를 저장하면 calendar dot과 day panel이 즉시 갱신돼야 한다.

Edit는 기존 값을 form에 채우고 변경 내용을 저장한다. Delete는 확인 dialog 후 이벤트를 제거한다. AI는 사용자의 머릿속 요구를 알 수 없으므로 버튼 위치, 기본값, 갱신 동작, confirmation 같은 세부 조건을 명시한다.

## 예시

```text
Create: + → form → save → 일정 표시
Edit: action menu → 기존 값 → update
Delete: action menu → confirmation → remove
```

## 요약

- CRUD는 UI, 상태, 데이터 갱신을 함께 검증한다.
- 당연해 보이는 UX도 프롬프트에 명시한다.
