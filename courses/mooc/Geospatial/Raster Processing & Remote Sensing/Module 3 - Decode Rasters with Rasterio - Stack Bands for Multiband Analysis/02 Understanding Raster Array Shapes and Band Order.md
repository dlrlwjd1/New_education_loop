# Understanding Raster Array Shapes and Band Order

## 개요
- 유형: MOOC 읽기
- 원본: [Understanding Raster Array Shapes and Band Order](https://www.mooc.org/learn/raster-processing-and-remote-sensing/supplement/6aTrp/understanding-raster-array-shapes-and-band-order)
- Rasterio 다중 밴드 배열의 `(bands, rows, columns)` 구조와 밴드 순서의 중요성을 설명한다.

## 내용
- 같은 행·열의 값은 같은 지표 위치를 나타낸다는 공간 정렬 가정이 있다.
- 밴드별 배열은 shape, CRS, transform이 일치해야 안전하게 쌓을 수 있다.
- Red와 NIR 순서를 바꾸면 NDVI 계산은 실행돼도 의미가 반대로 왜곡된다.

## 예시
배열 shape와 밴드 설명을 출력하고 `stack[0]`이 Red, `stack[1]`이 NIR인지 문서화한다.

## 요약
- 도구를 실행하기 전에 입력 데이터와 분석 가정을 검증한다.
- 결과가 그럴듯하게 보이는 것보다 공간적·분석적 의미를 설명할 수 있는지가 중요하다.
