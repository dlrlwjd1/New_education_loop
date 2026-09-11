# Tab & Navigation Feature

## 개요

- AI 기반 Tab completion으로 다음 코드를 예측한다.
- Tab to Jump와 자동 import로 반복 작업과 이동을 줄인다.

## 내용

Antigravity는 파일명, 클래스, 주변 코드를 분석해 다음 논리적 코드를 제안한다. 제안이 적합하면 Tab으로 수락한다.

**Tab to Jump**는 새 함수의 사용 위치처럼 다음 편집 지점을 예측해 이동시킨다. 필요한 심볼이 다른 파일에 있으면 import도 제안한다. 제안은 개인의 수락·거절 패턴에 맞춰 조정된다.

## 예시

```text
getMonth() 작성
→ 다음 메서드 제안
→ Tab으로 수락
→ Tab to Jump로 호출 위치 이동
→ 필요한 import 수락
```

## 요약

- Tab은 단순 자동완성뿐 아니라 다음 작업 위치도 예측한다.
- 제안이 현재 설계와 맞는지 확인한 뒤 수락한다.
