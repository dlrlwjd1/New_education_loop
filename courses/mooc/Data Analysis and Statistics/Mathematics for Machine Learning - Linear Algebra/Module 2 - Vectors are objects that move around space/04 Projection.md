# 04 Projection

## 개요
- 강좌: Mathematics for Machine Learning - Linear Algebra (Imperial College London)
- 모듈: Module 2 — Vectors are objects that move around space
- 강사: David Dye
- [MOOC 원본 강의](https://www.mooc.org/learn/linear-algebra-machine-learning/lecture/kjrpq/projection)
- **투영(projection)** — 내적이 **한 벡터의 다른 벡터 위 그림자**를 준다는 것. **스칼라 투영**과 **벡터 투영**.

---

## 내용

### 그림자로서의 내적 ⭐
벡터 **r**과 **s**가 있고, s에서 r로 **직각 삼각형**을 내린다.

**sohcahtoa**에서:
```
cos θ = 인접변 / 빗변 = 인접변 / |s|
→ 인접변 = |s| cos θ
```

내적의 정의와 비교하면:
```
r · s = |r| · |s| cos θ
              └──┬──┘
              인접변 = s의 r 위 그림자
```

> ⭐ **r에 직각으로 빛을 비추면 s가 r 위에 드리우는 그림자** — 그것이 `|s|cos θ` 다.
>
> **즉 내적은 "s의 r 위 투영" × "r의 크기"를 준다.**

⚠️ **s가 r에 수직이면 그림자가 없다.** cos 90° = 0 이므로 투영이 0이다.

### 스칼라 투영(scalar projection) ⭐
내적을 **r의 길이로 나누면** 그림자 길이만 남는다.
```
스칼라 투영 = (r · s) / |r| = |s| cos θ
```
- `r·s`도 수이고 `|r|`도 수이므로 **결과는 수(스칼라)** 다.
- ⭐ **그래서 내적을 "투영 곱(projection product)"이라고도 부른다** — 한 벡터의 다른 벡터 위 투영을 취하기 때문이다.
- ⚠️ **r이 마침 단위 벡터라면** `|r| = 1` 이므로 **`r·s` 자체가 s의 그 축 위 스칼라 투영**이 된다.

### 벡터 투영(vector projection) ⭐
> **r이 어느 방향이었는지도 담고 싶다면** 벡터 투영을 정의한다.
```
벡터 투영 = ( (r · s) / (r · r) ) · r
          = ( (r · s) / |r|² ) · r
```
> `r·r = |r|²` 이므로 두 표기가 같다.

**해석**
```
(r·s)/|r|  ← 스칼라 투영 (s가 r을 따라 얼마나 가는가)
r/|r|      ← r 방향의 단위 벡터
```
> ⭐ **벡터 투영 = (스칼라 투영이라는 수) × (r 방향의 단위 벡터).**
>
> 즉 **스칼라 투영에 r의 방향 정보까지 인코딩한 것**이다.

---

## 요약
- **내적은 s의 r 위 "그림자"(투영)에 `|r|`을 곱한 것**이다.
- **스칼라 투영 `= (r·s)/|r| = |s|cos θ`** — 수 하나. **r이 단위 벡터면 `r·s` 자체가 스칼라 투영.**
- **벡터 투영 `= ((r·s)/(r·r))·r`** — 스칼라 투영 × r 방향 단위 벡터.
- **s ⊥ r 이면 투영이 0** 이다.
- 내적을 **투영 곱**이라 부르는 이유가 여기 있다. [다음 강의](05%20Changing%20basis.md)의 기저 변환이 이 위에 선다.

## 다음 주제
- [05 Changing basis.md](05%20Changing%20basis.md)
