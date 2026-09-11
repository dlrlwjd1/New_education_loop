# 01 Object Localization

## 개요
- **분류(classification)** → **위치 추정 포함 분류(classification with localization)** → **검출(detection)** 순으로 확장.
- Localization = 검출한 물체의 **바운딩 박스(위치)** 를 그리는 것.

---

## 내용

### 세 문제 비교
- **분류/위치추정 포함 분류**: 보통 **물체 1개**.
- **검출(detection)**: **여러 물체**(다양한 종류)가 있을 수 있음.

### 바운딩 박스 출력
- CNN 출력에 **4개 숫자** 추가: **b_x, b_y**(중심), **b_h**(높이), **b_w**(너비).
- 좌표 규약: 좌상단 (0,0), 우하단 (1,1).

### 타깃 라벨 y (예: pedestrian/car/motorcycle/background)
```
y = [ P_c, b_x, b_y, b_h, b_w, c1, c2, c3 ]
```
- **P_c**: 물체 존재 여부 (1=클래스1~3 중 하나, 0=배경).
- P_c=1이면 b_* (박스) + c1,c2,c3 (클래스, 최대 하나만 1).
- P_c=0이면 나머지는 **don't care(?)**.

### 손실 함수
- **P_c=1**: 8개 성분 모두에 대해 제곱 오차 합.
- **P_c=0**: `(ŷ₁ − y₁)²` 만 (P_c만 신경 씀).
- (실무: c는 softmax 로그우도, 박스는 제곱오차, P_c는 로지스틱 손실을 섞어 써도 됨. 제곱오차만으로도 대체로 OK.)

---

## 요약
- 위치추정 = CNN이 클래스 + 바운딩 박스(b_x,b_y,b_h,b_w)를 회귀로 출력.
- 라벨 y=[P_c, 박스, 클래스]. P_c=0이면 나머지 don't care.

## 다음 주제
- 랜드마크 검출 (Landmark Detection)
