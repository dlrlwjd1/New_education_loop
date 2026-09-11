# Loop Agents Architecture

## 개요
- 결과를 반복 검토·개선하고 조건 충족 시 종료하는 `LoopAgent`를 만든다.

## 내용
### Story Writer 루프
Writer가 이야기를 만들고 Critic이 줄거리·인물·속도를 평가한다. Critic이 `approved`를 반환하면 Refiner가 `exit_loop` 함수 도구를 호출한다. 그렇지 않으면 피드백을 반영해 이야기를 다시 작성한다.

최대 반복 횟수와 명시적 종료 도구를 설정해 무한 반복을 막는다.

## 예시
```text
Writer → Critic → Refiner
  ↑                 │
  └── 개선 필요 ────┘
       approved → 종료
```

## 요약
- 반복 품질 개선에 적합하다.
- 종료 조건과 반복 상한을 구조적으로 정의해야 한다.
