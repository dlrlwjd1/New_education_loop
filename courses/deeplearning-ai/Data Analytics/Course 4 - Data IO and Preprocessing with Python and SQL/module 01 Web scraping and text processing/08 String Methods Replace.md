# String Methods: Replace

## 개요
- **.replace()** 는 문자열의 일부를 다른 것으로 바꾸거나(빈 문자열로) 제거한다.
- 데이터프레임 **열 전체**에 적용하려면 **.str 접근자**를 쓴다: `df["열"].str.replace(...)`.

## 내용

### 문제
- 스크래핑 데이터는 지저분함. 인구 증가율(%) 열이 텍스트(object) → `.mean()` 시 오류("could not convert string '+0.88%'"). **% 기호 제거** 후 숫자 변환 필요.

### .replace() (단일 문자열)
- `text.replace("찾을것", "바꿀것")` — 예: `"United States"` → `"USA"`.
- 제거: 두 번째 인수를 **빈 문자열("")** — 예: `"%".replace("%", "")`(공백 아님, 0글자).

### 열 전체 — .str.replace()
- `df["change percent"].replace("%", "")` 는 **작동 안 함**(전체 값 교체용). 열은 문자열이 아닌 **문자열 모음**.
- 올바름: `df["change percent"] = df["change percent"].str.replace("%", "")` (LLM이 짚어줌).
- **.str** 는 **접근자(accessor)** — 열 각 값에 문자열 연산 적용(**.dt** 처럼 벡터화, 루프 불필요).

## 예시

### .str.replace()
```python
"United States".replace("United States", "USA")   # 단일 문자열
df["change percent"] = df["change percent"].str.replace("%", "")  # 열 전체, % 제거
```

## 요약
- **.replace(찾을것, 바꿀것)** 로 문자열 일부를 교체·제거(빈 문자열)하며, **열 전체엔 .str.replace()** 를 쓴다.
- **.str** 는 열 각 값에 문자열 연산을 적용하는 벡터화 접근자다(.dt와 유사).
- 다음 강의는 정리된 문자열을 숫자 타입으로 **캐스팅**한다.
