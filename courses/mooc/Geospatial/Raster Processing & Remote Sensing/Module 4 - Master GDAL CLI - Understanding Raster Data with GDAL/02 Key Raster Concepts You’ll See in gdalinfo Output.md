# Key Raster Concepts You’ll See in gdalinfo Output

## 개요
- 유형: MOOC 읽기
- 원본: [Key Raster Concepts You’ll See in gdalinfo Output](https://www.mooc.org/learn/raster-processing-and-remote-sensing/supplement/x4y4E/key-raster-concepts-you-ll-see-in-gdalinfo-output)
- `gdalinfo` 출력에서 드라이버, 크기, CRS, 원점·픽셀 크기, 범위, 밴드와 NoData를 읽는 법을 정리한다.

## 내용
- CRS와 좌표 범위는 공간 정렬을 검증하는 핵심이다.
- 픽셀 크기와 자료형은 해상도·정밀도와 처리 비용을 좌우한다.
- NoData를 일반 값으로 처리하면 통계와 시각화가 왜곡된다.

## 예시
출력에서 `Coordinate System`, `Pixel Size`, `Corner Coordinates`, `Band`, `NoData Value`를 우선 확인한다.

## 요약
- 도구를 실행하기 전에 입력 데이터와 분석 가정을 검증한다.
- 결과가 그럴듯하게 보이는 것보다 공간적·분석적 의미를 설명할 수 있는지가 중요하다.
