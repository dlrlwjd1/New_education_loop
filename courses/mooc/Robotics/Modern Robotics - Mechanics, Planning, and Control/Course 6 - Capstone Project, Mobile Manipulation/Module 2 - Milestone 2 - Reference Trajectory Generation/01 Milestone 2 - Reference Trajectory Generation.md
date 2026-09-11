# Milestone 2: Reference Trajectory Generation

## 개요

- 마일스톤 2의 산출물인 **엔드 이펙터 기준 궤적(reference trajectory)** 의 예시를 보여주는 짧은 영상이다.
- 핵심 지침: **나머지 프로젝트를 진행하기 전에 자신의 기준 궤적이 제대로 보이는지 반드시 확인하라.**

## 내용

### 영상이 전달하는 것

```text
영상은 엔드 이펙터 기준 궤적의 한 예를 보여준다.

프로젝트의 나머지 부분으로 넘어가기 전에
자신의 기준 궤적이 올바르게 보이는지 확인해야 한다.

영상에서는 그리퍼가 열리고 닫히는 시간이 짧게 줄여져(shortened) 있다.
```

### 확인해야 할 점 (프로젝트 구조와의 연결)

- 기준 궤적은 [Video Summary of the Capstone Project](../Module%201%20-%20Introduction%20to%20the%20Capstone%20Project,%20and%20Milestone%201/02%20Video%20Summary%20of%20the%20Capstone%20Project.md)에서 정의한 **8개 구간의 연결**이어야 한다.
- 궤적 생성에 쓰이는 도구는 이 모듈의 복습 항목들이 다룬다:
  - **SE(3) 스크류 경로** — [Point-to-Point Trajectories Part 1](02%20%28Optional%20Review%29%20Point-to-Point%20Trajectories%20%28Chapters%209.1%20and%209.2,%20Part%201%20of%202%29.md)
  - **시간 스케일링(3차/5차 다항식)** — [Point-to-Point Trajectories Part 2](03%20%28Optional%20Review%29%20Point-to-Point%20Trajectories%20%28Chapters%209.1%20and%209.2,%20Part%202%20of%202%29.md)

## 요약

- 마일스톤 2는 **엔드 이펙터 기준 궤적 생성**이고, 이 영상은 **올바른 결과의 예시**를 보여준다.
- **다음 단계로 가기 전에 기준 궤적의 시각적 확인이 필수**다. 궤적이 잘못되면 이후 피드백 제어와 시뮬레이션 디버깅이 훨씬 어려워진다.
- **영상의 그리퍼 개폐 시간은 실제보다 짧게 편집**되어 있다는 점에 유의한다.
- 상세 요구사항은 **서면 프로젝트 설명**에 있다.
