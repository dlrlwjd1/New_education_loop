# Modern Robotics, Course 4: Robot Motion Planning and Control

교재 10~11장. **장애물 사이에서 운동을 계획하고**, 그 궤적을 따라가는 **피드백 컨트롤러를 설계**한다.

- 강좌: https://www.mooc.org/learn/modernrobotics-course4
- 교재 대응: 10장 Motion Planning, 11장 Robot Control
- 구성: 4개 모듈 · 동영상 강의 23개
- 진행 상태: ✅ 23/23 정리 완료

## 학습 흐름

```text
계획 문제 정의 · C-space 장애물 · 그래프 · A* (10.1~10.3)
  -> 격자 / PRM / RRT / 포텐셜 필드 / 비선형 최적화 (10.4~10.7)
  -> 오차 동역학 기초: 1차·2차 응답, 근 위치 읽기 (11.1~11.2)
  -> 속도 입력 제어: P → PI → 피드포워드+PI, 작업 공간 (11.3)
  -> 토크 입력 제어: PD → PID → 계산 토크 (11.4)
  -> 힘 제어 (11.5) -> 하이브리드 모션-포스 제어 (11.6)
```

## 강의 목록

### Module 1 - Chapter 10 - Motion Planning (Part 1 of 2)

| # | 강의 | 핵심 내용 |
| --- | --- | --- |
| 01 | [Overview of Motion Planning (Chapter 10.1)](Module%201%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%201%20of%202%29/01%20Overview%20of%20Motion%20Planning%20%28Chapter%2010.1%29.md) | 문제 정의, 완전성 3단계(완전/해상도/확률적), 다중·단일 질의 |
| 02 | [C-Space Obstacles (Chapter 10.2.1)](Module%201%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%201%20of%202%29/02%20C-Space%20Obstacles%20%28Chapter%2010.2.1%29.md) | 2R 토러스 위상, 연결 성분, 구 근사 충돌 검출 |
| 03 | [Graphs and Trees (Chapter 10.2.3)](Module%201%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%201%20of%202%29/03%20Graphs%20and%20Trees%20%28Chapter%2010.2.3%29.md) | 방향/무방향, 가중/비가중, 트리의 정의 |
| 04 | [Graph Search (Chapter 10.2.4)](Module%201%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%201%20of%202%29/04%20Graph%20Search%20%28Chapter%2010.2.4%29.md) | A\*, 과거 비용·낙관적 비용·OPEN/CLOSED, 다익스트라 |
| 05 | [Complete Path Planners (Chapter 10.3)](Module%201%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%201%20of%202%29/05%20Complete%20Path%20Planners%20%28Chapter%2010.3%29.md) | 로드맵 조건, 가시성 그래프, 완전 + 최적 |

### Module 2 - Chapter 10 - Motion Planning (Part 2 of 2)

| # | 강의 | 핵심 내용 |
| --- | --- | --- |
| 01 | [Grid Methods for Motion Planning (Chapter 10.4)](Module%202%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%202%20of%202%29/01%20Grid%20Methods%20for%20Motion%20Planning%20%28Chapter%2010.4%29.md) | `kⁿ` 셀, 4/8-연결, 해상도 완전, 쿼드트리·옥트리 |
| 02 | [Sampling Methods for Motion Planning (Chapter 10.5, Part 1 of 2)](Module%202%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%202%20of%202%29/02%20Sampling%20Methods%20for%20Motion%20Planning%20%28Chapter%2010.5,%20Part%201%20of%202%29.md) | PRM, 다중 질의, `N`·`k`·표본추출·국소 플래너 |
| 03 | [Sampling Methods for Motion Planning (Chapter 10.5, Part 2 of 2)](Module%202%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%202%20of%202%29/03%20Sampling%20Methods%20for%20Motion%20Planning%20%28Chapter%2010.5,%20Part%202%20of%202%29.md) | RRT, 판데르코르푸트·핼턴, 리즈-셰프 곡선, RRT\* |
| 04 | [Virtual Potential Fields (Chapter 10.6)](Module%202%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%202%20of%202%29/04%20Virtual%20Potential%20Fields%20%28Chapter%2010.6%29.md) | 인끌·반발 포텐셜, 국소 최소점, 내비게이션 함수 |
| 05 | [Nonlinear Optimization (Chapter 10.7)](Module%202%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%202%20of%202%29/05%20Nonlinear%20Optimization%20%28Chapter%2010.7%29.md) | 슈팅 vs 콜로케이션, 전사, RRT + 최적화 결합 |

### Module 3 - Chapter 11 - Robot Control (Part 1 of 2)

| # | 강의 | 핵심 내용 |
| --- | --- | --- |
| 01 | **Control System Overview (Chapter 11.1)** | 제어 목표 4종, 앰프·모터·엔코더 구조, 단순화 가정 |
| 02 | **Error Response (Chapter 11.2.1)** | `θ_e = θ_d − θ`, 정상상태 오차·오버슈트·정착 시간 |
| 03 | **Linear Error Dynamics (Chapter 11.2.2)** | `ẋ = Ax`, 고유값 실수부 < 0, 특성방정식 |
| 04 | **First-Order Error Dynamics (Chapter 11.2.2.1)** | 시간 상수 `b/k`, 2% 정착 시간 ≈ 4 시간 상수 |
| 05 | **Second-Order Error Dynamics (Chapter 11.2.2.2)** | `ω_n`·`ζ`, 과감쇠/임계/부족 감쇠, 근 위치 해석 |
| 06 | **Motion Control with Velocity Inputs (Chapter 11.3, Part 1 of 3)** | 개루프의 한계, P 제어, 정상상태 오차 `c/K_p` |
| 07 | **Motion Control with Velocity Inputs (Chapter 11.3, Part 2 of 3)** | PI 제어, 근 궤적, 피드포워드 + PI 최종 법칙 |
| 08 | **Motion Control with Velocity Inputs (Chapter 11.3, Part 3 of 3)** | 작업 공간 제어, `[X_e] = log(X⁻¹X_d)`, 결합 vs 분리형 |

### Module 4 - Chapter 11 - Robot Control (Part 2 of 2)

| # | 강의 | 핵심 내용 |
| --- | --- | --- |
| 01 | **Motion Control with Torque or Force Inputs (Chapter 11.4, Part 1 of 3)** | PID 정의, 중력 없는 설정점 PD, `K_d`와 마찰 `b` |
| 02 | **Motion Control with Torque or Force Inputs (Chapter 11.4, Part 2 of 3)** | 중력에 의한 정상상태 오차, PID 3차 동역학, `K_i` 상한 |
| 03 | **Motion Control with Torque or Force Inputs (Chapter 11.4, Part 3 of 3)** | 계산 토크 제어, 동역학 선형화, 작업 공간 버전 |
| 04 | **Force Control (Chapter 11.5)** | `τ = g̃ + JᵀF_d`, PI 렌치 피드백, D 항 없음 |
| 05 | **Hybrid Motion-Force Control (Chapter 11.6)** | `A(θ)V_b = 0`, 투영 `P`(rank `6−k`), 독립 설계 |

## 핵심 공식 정리

| 항목 | 공식 |
| --- | --- |
| A\* 비용 | `추정 총비용 = 과거 비용 + 낙관적 비용` |
| 격자 크기 | n차원 × k구간 → `kⁿ` 셀 |
| 인끌 포텐셜 | `P = ½(q−q_goal)ᵀK(q−q_goal)`, `F = −K(q−q_goal)` |
| 반발 포텐셜 | `P ∝ 1/d(q,B)²` |
| 안정성 판정 | `A`의 모든 고유값 실수부 < 0 (`det(sI−A) = 0`의 근) |
| 1차 오차 동역학 | `θ̇_e + (1/t_c)θ_e = 0`, `t_c = b/k`, 2% 정착 ≈ `4t_c` |
| 2차 표준형 | `θ̈_e + 2ζω_nθ̇_e + ω_n²θ_e = 0`, `ω_n = √(k/m)`, `ζ = b/(2√(km))` |
| 부족 감쇠 오버슈트 | `e^{−πζ/√(1−ζ²)}`, `ω_d = ω_n√(1−ζ²)` |
| 속도 입력 최종 제어 | `θ̇ = θ̇_d + K_pθ_e + K_i∫θ_e dt` |
| PI 오차 동역학 | `θ̈_e + K_pθ̇_e + K_iθ_e = 0`, 임계 감쇠 `K_i = K_p²/4` |
| 작업 공간 속도 제어 | `V_b = [Ad_{X_bd}]V_d + K_pX_e + K_i∫X_e dt`, `[X_e] = log(X⁻¹X_d)` |
| 계산 토크 제어 | `τ = M̃(θ̈_d + K_pθ_e + K_i∫θ_e + K_dθ̇_e) + h̃` |
| 힘 제어 | `τ = g̃(θ) + Jᵀ(θ)[F_d + K_fpF_e + K_fi∫F_e dt]` |
| 하이브리드 제어 | `F_b = (I−P)F_force + P F_motion`, `τ = J_bᵀF_b`, `rank(P) = 6−k` |

## 자주 헷갈리는 규칙

- **P는 설정점 오차만, PI는 일정 속도 궤적 오차까지 제거한다.** P 제어기는 **0이 아닌 출력을 내려면 오차가 필요**하다.
- **PD에서 중력이 있으면 정상상태 오차가 남는다** — P 항이 중력을 버텨야 하므로. **PID에서는 I 항이 그 역할**을 맡아 오차가 0이 될 수 있다.
- **`K_i`만 안정성 상한을 가진다.** 적분 항은 오차 방정식의 차수를 올려 이상적 모델에서도 불안정을 만들 수 있다.
- **계산 토크의 가치는 "동역학 선형화"** 다 — 그래서 임의 궤적에서 동일한 선형 오차 동역학을 얻는다. 단 **모델이 나쁘면 오히려 해가 된다.**
- **힘 제어에는 D 항을 쓰지 않는다** — 동역학이 없고 센서 노이즈를 증폭한다.
- **하이브리드 제어에서 `P`는 가역이 아니다.** 그것이 두 컨트롤러를 독립 설계할 수 있게 하는 핵심이다.
- **A\*의 낙관성이 깨지면(추정 > 실제) 최적성이 깨진다.** 낙관적 비용을 0으로 두면 다익스트라가 된다.
