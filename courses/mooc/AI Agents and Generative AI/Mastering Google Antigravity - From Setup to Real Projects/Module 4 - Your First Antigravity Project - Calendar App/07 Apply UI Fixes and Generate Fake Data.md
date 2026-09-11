# Apply UI Fixes, Generate More Fake Data

## 개요

- 현실적인 mock events를 추가하고 UI action menu를 개선한다.
- Agent, 검색, inline command, Tab suggestion을 함께 사용한다.

## 내용

현재 연도 전체에 더 많은 fake events를 만들고 데이터를 `mocks/` 폴더로 분리한다. 이벤트의 세 점 메뉴에는 Edit와 Delete action을 추가하되 실제 CRUD 로직은 다음 단계에서 구현한다.

작은 텍스트·스타일 수정은 search, find/replace, inline command, Tab completion으로 빠르게 처리한다. AI가 예상 밖 코드를 남기면 직접 삭제하거나 추가 지시로 고친다.

## 예시

```text
mock data 확대 → mocks/로 분리
→ event action dropdown 추가
→ 검색·inline command로 작은 UI 수정
```

## 요약

- 데이터와 UI를 분리해 다음 기능 구현을 준비한다.
- 작업 크기에 따라 Agent와 inline 도구를 나눠 사용한다.
