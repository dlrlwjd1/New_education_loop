# Method Chaining

## 개요
- **메서드 체이닝(method chaining)** 은 여러 연산을 연달아 연결하는 것 — 각 단계가 이전 결과에 의존한다(사슬처럼).
- 왼쪽 데이터로 시작해 오른쪽 결과(예: 플롯)로 이어지며, **데이터 타입의 흐름**으로 읽는다.

## 내용

### 개념
- 수식 평가처럼 순서대로 복잡성을 해소: `(5+3)*2-4)/2` → 8 → 16 → 12 → 6.
- 코드도 왼→오른쪽으로, 각 단계가 이전 단계가 끝나야 진행.

### 예시 — 누적 차트 한 줄
`df.groupby([...])["loan amount"].sum().unstack().plot(kind="bar", stacked=True)`
1. **groupby(grade, ownership)** → groupby 객체(15 그룹 = 5×3).
2. **["loan amount"]** → 그룹 시리즈(loan amount만).
3. **.sum()** → 시리즈(멀티인덱스, 그룹별 합 15행).
4. **.unstack()** → 행·열 데이터프레임.
5. **.plot(...)** → 플롯.

### 체이닝 vs 변수
- **변수 방식**(각 단계를 변수에 저장): 중간 결과 필요 시 유용(예: 그룹별 중앙값·표준편차 추가 계산). 유연하나 길다.
- **체이닝**: 중간 저장 없이 빠름. 비유 — 체이닝=급행열차(데이터→플롯 직행), 변수=완행열차(각 역 정차, 유연).

## 예시

### 체이닝 vs 변수
```python
# 체이닝 (급행)
df.groupby(["grade","ownership"])["loan amount"].sum().unstack().plot(kind="bar", stacked=True)
# 변수 (완행)
g = df.groupby(["grade","ownership"])
s = g["loan amount"].sum()
s.unstack().plot(kind="bar", stacked=True)
```

## 요약
- **메서드 체이닝**은 각 단계가 이전 결과에 의존하는 연산을 연결하며, 데이터 타입 흐름으로 읽는다.
- **체이닝**은 빠르지만 중간 결과 접근 불가, **변수 방식**은 유연하나 길다.
- 이로써 Lesson 1(Matplotlib)을 마친다. 다음 레슨은 **Seaborn**이다.
