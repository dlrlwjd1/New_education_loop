# (Optional Review) Motion Control with Velocity Inputs (Chapter 11.3, Part 3 of 3)

## 개요

- 이 항목은 **캡스톤을 위한 선택 복습(optional review) 영상**이며, 앞선 강좌의 강의와 **동일한 영상**이다.
- 정리본 원본: **Motion Control with Velocity Inputs (Chapter 11.3, Part 3 of 3)**
- 캡스톤에서의 역할: 마일스톤 3의 피드포워드 + PI 컨트롤러 그 자체

## 내용

### 복습 포인트

- `V_b = [Ad_{X_bd}] V_d + K_p X_e + K_i ∫X_e dt`
- `X_bd = X⁻¹ X_d`, `[X_e] = log(X⁻¹ X_d)` — 오차는 SE(3) 원소가 아니라 **트위스트**
- 캡스톤에서는 이 명령 트위스트를 `J_e⁺` 로 바퀴·조인트 속도로 변환한다

## 요약

- 새로운 내용이 없는 **복습 영상**이므로 정리본을 중복 작성하지 않고 원본 노트로 연결한다.
- 원본: **Motion Control with Velocity Inputs (Chapter 11.3, Part 3 of 3)**
