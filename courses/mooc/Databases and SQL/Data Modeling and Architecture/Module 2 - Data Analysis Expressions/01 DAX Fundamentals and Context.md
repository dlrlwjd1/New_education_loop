# DAX Fundamentals and Context

## 개요
- Power BI의 수식 언어인 DAX의 구문, 데이터 형식, 함수 범주와 행·필터 컨텍스트를 이해한다.

## 내용

### DAX의 역할
- DAX(Data Analysis Expressions)는 Power BI, Power Pivot, SQL Server Analysis Services에서 측정값, 계산 열, 계산 테이블을 만드는 수식 언어다.
- Excel 수식과 비슷하지만 관계형 데이터 모델과 큰 데이터셋의 분석에 맞게 설계되었다.
- 수식은 `=`로 시작하며 테이블은 이름으로, 열은 `Table[Column]` 형식으로 참조한다.

### 기본 구문과 함수
```DAX
Total Sales = SUM(Sales[Sales Amount])
```
- 주요 형식: 텍스트, 소수, 정수, Boolean, 날짜/시간, 통화.
- 연산자: 산술(`+ - * / ^`), 비교(`= <> > >= < <=`), 논리(`&& ||`), 문자열 연결(`&`).
- 주요 함수 범주: 텍스트, 날짜/시간, 논리, 집계, 관계, 정보 함수.
- DAX는 대소문자를 구분하지 않지만 `BLANK`와 0은 구분한다.

### 평가 컨텍스트
- **행 컨텍스트**는 현재 계산 중인 행을 뜻하며 계산 열과 `SUMX` 같은 반복 함수에서 중요하다.
- **필터 컨텍스트**는 슬라이서, 시각화, 행·열 레이블, DAX 필터로 현재 계산에 포함되는 데이터 범위다.
- 같은 측정값도 필터 컨텍스트에 따라 다른 결과를 반환한다.
- 많은 DAX 함수가 테이블 관계를 이용하므로 먼저 올바른 데이터 모델이 필요하다.

## 예시
```DAX
Full Name = Employees[FirstName] & " " & Employees[LastName]
Short Month = LEFT(Date[Month], 3)
```

## 요약
- DAX는 모델 위에서 동적 계산을 만드는 언어다.
- 구문과 함수뿐 아니라 행·필터 컨텍스트를 이해해야 계산 결과를 정확히 예측할 수 있다.

