# Casting

## 개요
- **캐스팅(casting)** 은 데이터를 한 타입에서 다른 타입으로 변환하는 것. 스크래핑·텍스트 데이터에서 흔하다.
- pandas 열은 **.astype()** 로 캐스팅한다.

## 내용

### 왜 캐스팅인가
- 타입이 가능한 연산을 결정(`400/2`는 int OK, string 오류). 이미 **pd.to_datetime**(문자열→날짜)도 캐스팅의 예.

### .astype()
- % 제거 후에도 change percent는 여전히 **object(텍스트)** → mean 오류.
- `df["change percent"] = df["change percent"].astype("float64")`.
  - 인수는 대상 타입 문자열. **float64** = 결측값(NaN) 허용하는 pandas 부동소수점 타입(스크래핑 데이터에 결측 흔해 유용).
  - astype도 원본 자동 변경 안 함 → **재할당**.
- 이후 `df["change percent"].mean()` ≈ 연 1% 계산 가능.
- 인구 열은 float 대신 정수로 캐스팅 고려 가능.

## 예시

### 캐스팅
```python
df["change percent"] = df["change percent"].astype("float64")   # 텍스트 → float
df["change percent"].mean()   # 이제 계산 가능
```

## 요약
- **.astype("타입")** 으로 열을 캐스팅하며(재할당 필요), **float64** 는 결측값을 처리하는 pandas 부동소수점 타입이다.
- 캐스팅 후 수치 연산이 가능하고, 전처리에서 결측 대비가 중요하다.
- 다음 강의는 **결측값 처리** 기법이다.
