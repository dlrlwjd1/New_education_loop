# 06 Intersection Over Union (IoU)

## 개요
- **IoU(Intersection over Union)**: 두 바운딩 박스의 겹침 정도를 재는 지표. 검출 평가 + non-max suppression에 사용.

---

## 내용

### 정의
```
IoU = (교집합 넓이, intersection) / (합집합 넓이, union)
```
- 예측 박스와 정답(ground truth) 박스가 완벽히 겹치면 IoU=1.

### 판정 관례
- **IoU ≥ 0.5** 이면 "정확히 검출/위치추정한 것"으로 간주 (인간이 정한 관례, 깊은 이론 근거는 없음).
- 더 엄격하게 0.6, 0.7을 쓰기도 함. 0.5 미만은 거의 안 씀.
- IoU가 높을수록 박스가 더 정확.

### 용도
- 위치추정 정확도 평가 (정확히 검출한 횟수 카운트).
- 두 박스의 **유사도** 측정 → non-max suppression에서 재사용.

---

## 요약
- IoU = 교집합/합집합. ≥0.5면 정확한 검출로 판정(관례).
- 두 박스의 겹침·유사도 측정에 사용.

## 다음 주제
- Non-max Suppression (비최대 억제)
