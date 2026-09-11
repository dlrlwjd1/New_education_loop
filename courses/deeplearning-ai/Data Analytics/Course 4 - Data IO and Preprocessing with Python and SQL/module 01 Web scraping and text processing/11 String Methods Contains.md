# String Methods: Contains

## 개요
- **.str.contains()** 는 텍스트 열에서 특정 **부분 문자열(substring)** 포함 여부를 확인해 불리언 열을 만든다.
- 등호(==)와 달리 **부분 일치**를 찾으므로 여러 값이 섞인 필드에 유용하다.

## 내용

### 문제 — 부분 일치
- 영어·독일어 공용어 국가 필터. `df["official language"] == "English"` 는 **India**(Hindi·English)를 False로 놓침(정확히 "English"만 매치).
- **contains** 사용: `df["English"] = df["official language"].str.contains("English")` → India는 True.

### 활용
- `english_df = df[df["English"] == True]` → 56개국. `english_df["population"].sum()` → 30억+ 명.

### 대소문자 — case=False
- **.str.contains는 대소문자 구분**. "English" 56개, "english" 0, "ENGLISH" 0.
- 확실히 하려면 **case=False**: `str.contains("English", case=False)` → 대소문자 무관 모두 포착.
- 같은 방식으로 German 열 생성 → 6개국.

## 예시

### .str.contains()
```python
df["English"] = df["official language"].str.contains("English", case=False)
english_df = df[df["English"] == True]
english_df["population"].sum()
```

## 요약
- **.str.contains(부분문자열)** 로 텍스트 열의 부분 일치를 찾아 불리언 열을 만든다(==는 완전 일치라 놓침).
- **대소문자 구분**이며 **case=False** 로 무관하게 매치한다.
- 다음 강의는 텍스트 처리 기법(split·strip)이다.
