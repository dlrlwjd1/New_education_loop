# String Methods: Split and Strip

## 개요
- **.split()** 은 지정 문자에서 문자열을 나눠 리스트로 만들고, **.strip()** 은 앞뒤 공백을 제거한다.
- 각주·불필요한 텍스트 제거 등 텍스트 정리에 쓴다.

## 내용

### split — 문자로 분리
- 문제: 국가명에 각주(예: "China[a]", 각기 다른 글자)가 붙음. replace로는 복잡.
- `text.split("(")` → 여는 괄호에서 나눠 **길이 2 리스트**(분리 문자는 제거됨). 첫 부분: `substrings[0]`.
- 열 전체: **.str** 접근자 필요. `df["country"].str.split("(")` → 각 행이 리스트. **.str[0]** 로 첫 값 접근(그냥 [0]은 첫 행): `df["country"] = df["country"].str.split("(").str[0]` (LLM 도움).
- `.str.contains(")")` 로 남은 괄호 확인(0개).

### strip — 공백 제거
- split 후 남은 공백(예 "China ") → **.str.strip()** 로 앞뒤 공백 제거. `df["country"] = df["country"].str.strip()`.
- **leading**(앞)·**trailing**(뒤) 공백·탭·개행 제거.

## 예시

### split·strip
```python
df["country"] = df["country"].str.split("(").str[0]   # 각주 제거
df["country"] = df["country"].str.strip()             # 앞뒤 공백 제거
```

## 요약
- **.str.split(문자).str[0]** 로 문자열을 나눠 원하는 부분을 취하고(각주 제거 등), **.str.strip()** 으로 앞뒤 공백을 없앤다.
- 열 전체 작업엔 항상 **.str 접근자**를 쓴다.
- 이로써 텍스트 처리 핵심 메서드(replace·contains·split·strip)를 익혔다. 다음 모듈은 Beautiful Soup 스크래핑이다.
