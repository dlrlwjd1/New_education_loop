# How gdalwarp Reprojects Raster Data

## 개요
- 유형: MOOC 영상
- 원본: [How gdalwarp Reprojects Raster Data](https://www.mooc.org/learn/raster-processing-and-remote-sensing/lecture/cCaM2/how-gdalwarp-reprojects-raster-data)
- `gdalwarp`가 좌표만 바꾸는 것이 아니라 새 격자를 만들고 픽셀 값을 재표본화한다는 점을 설명한다.

## 내용
- 원본 CRS의 좌표를 목표 CRS로 변환한다.
- 새 좌표계의 격자가 원본과 맞지 않아 nearest, bilinear, cubic 등의 방법으로 값을 추정한다.
- 재투영은 픽셀 값·해상도·형태를 바꿀 수 있는 데이터 변환이므로 목적에 맞는 옵션이 필요하다.

## 예시
범주형 자료는 nearest, 연속형 고도 자료는 bilinear 등 자료 의미에 맞는 재표본화 방법을 선택한다.

## 요약
- 도구를 실행하기 전에 입력 데이터와 분석 가정을 검증한다.
- 결과가 그럴듯하게 보이는 것보다 공간적·분석적 의미를 설명할 수 있는지가 중요하다.
