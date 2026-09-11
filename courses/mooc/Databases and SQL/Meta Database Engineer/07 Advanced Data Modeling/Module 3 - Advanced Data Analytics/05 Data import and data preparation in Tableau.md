# Data import and data preparation in Tableau

## 개요

- Tableau에서 Excel 데이터 소스 연결과 데이터 클리닝·준비(타입 변경, 숨기기, 분할, 계산 필드) 실습

## 내용

### 데이터 소스 연결

- 연결 페이지 왼쪽 **Connect** 탭 → **Microsoft Excel** → 파일 탐색·열기 → 파일명이 왼쪽에, 데이터가 데이터 패널에 표시.
- **라이브 연결(live connection)** — 원본 소스의 갱신이 자동 반영.
- 대량 데이터는 **데이터 추출(extract)** 처리가 더 빠르다.
- 데이터 패널 왼쪽의 **메타데이터 그리드** — 필드 정보 표시, 버튼으로 표시/숨김 전환.

### 데이터 클리닝·준비

- 오류 수정과 이해·분석이 쉬운 형태로 다듬기 — 필터링·정렬·이름 변경 등.
- **데이터 타입 변경**: 컬럼 상단에 타입 기호 표시 → 작은 화살표 → Describe로 필드 정보 확인 → "Abc" 타입 클릭 → Date 등으로 변경 (예: Order Date)
- **컬럼 숨기기/복원**: 화살표 → **Hide** → 숨김. Tableau 설정 아이콘 → **Show Hidden Fields** → 흐리게 표시된 필드에서 **Unhide**로 복원. 데이터 패널의 표시 행 수도 조절 가능
- **컬럼 분할(Split)**: Customer Name 컬럼 화살표 → **Split** → 두 필드 자동 생성 → **Rename**으로 First name / Last name 명명
- **계산 필드(calculated field)**: Order Date 화살표 → **Create a Calculated Field** → 이름 Return Date → 계산 편집기에 수식 입력 → OK

## 예시

```text
// Tableau 계산 필드 — 반품 가능 마감일 (구매일 + 15일)
[Order Date] + 15
```

## 요약

- Connect 탭에서 소스를 연결하면 라이브 연결로 원본 변경이 반영되고, 대량 데이터는 추출이 빠르다.
- 컬럼 화살표 메뉴 하나로 타입 변경·설명·숨김·분할·이름 변경·계산 필드 생성까지 데이터 준비를 처리한다.
