# Calculated Fields

## 개요
- **계산된 필드(calculated field)** 는 다른 필드 값으로 파생한 새 필드다 — Analysis → Create Calculated Field.
- Tableau의 커스텀 언어(SQL+스프레드시트 혼합)로 정의한다.

## 내용

### 산술 계산 필드
- 예: `총 가용 = units in stock + units on order`. 이름(Total Availability) 지정, 드래그·타이핑으로 수식(연산자·함수·값). → 초록 측정값으로 추가.
- 새 시트에 Total Availability를 Columns에, category name을 Rows에 → 카테고리별 총 가용 막대. **Order Ascending** 으로 정렬.

### 조건 계산 필드 (비닝)
- 예: 가격대 분류(<$10 저가, $10~40 중간, $40+ 고가). **IF 문**:
```
IF [unit price] < 10 THEN "inexpensive"
ELSEIF [unit price] < 40 THEN "mid-range"
ELSE "expensive"
END
```
- **END 필수**. 이름 "Price Bin". 새 시트에서 Price Bin(Rows) + Count of Products(Columns) → 가격대별 제품 수. 카테고리 순서는 드래그로 조정.

### 저장
- **Publish**.

## 예시

### 계산된 필드
```
Total Availability = [units in stock] + [units on order]
Price Bin = IF [unit price] < 10 THEN "inexpensive"
            ELSEIF [unit price] < 40 THEN "mid-range"
            ELSE "expensive" END
```

## 요약
- **계산된 필드**(Analysis → Create Calculated Field)로 다른 필드에서 새 필드를 파생한다(산술·조건).
- Tableau 커스텀 언어(SQL+스프레드시트 혼합)를 쓰며 **IF...ELSEIF...ELSE...END** 로 비닝한다.
- 생성 후 드래그로 시각화한다. 다음 강의는 **비집계 차트**다.
