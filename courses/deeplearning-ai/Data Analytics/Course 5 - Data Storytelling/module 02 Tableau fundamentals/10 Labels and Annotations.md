# Labels and Annotations

## 개요
- **라벨(labels)** 과 **주석(annotations)** 으로 차트에 맥락을 더한다.
- 주석은 색·텍스트·위치 커스터마이즈 가능하며 데이터 변화에 **동적 갱신**된다.

## 내용

### 제목·캡션
- 제목 기본은 시트명(각괄호=동적 필드). 편집·볼드로 강조.
- **캡션(Worksheet → Show Caption)**: 인코딩·필터를 설명하는 동적 설명(복잡한 차트에 유용, 필터 시 갱신).

### 라벨
- **Marks → Labels → Show Mark Labels**: 막대 끝에 정확한 값 표시(축에서 읽을 필요 없음) = **이중 부호화**. 축이 중복이면 **Show Header 해제**·그리드 제거(Format Worksheet → Lines → Grid Lines Off)로 미니멀하게.
- **Show Highlighter**(Rows의 필드): 검색 바 추가(특정 제품 찾기).

### 주석 (annotations)
- **마크 주석**: 막대 우클릭 → Annotate → Mark. 동적 플레이스홀더(product name·average unit price)를 완전한 문장으로. 필터로 해당 항목이 빠지면 **주석도 사라짐**.
- **영역 주석**: 우클릭 → Annotation → Area. 예: "Date Last Updated" + 날짜 필드 삽입. 이동·크기 조정.

### 저장
- **Publish**.

## 요약
- **라벨**(Show Mark Labels)로 값을 직접 표시하고, **캡션·하이라이터**로 해석·검색을 돕는다.
- **주석**(마크·영역)은 정적+동적 콘텐츠를 섞으며 데이터·필터에 따라 동적 갱신된다.
- 다음 강의는 강력한 인터랙티브 기능 **툴팁**이다.
