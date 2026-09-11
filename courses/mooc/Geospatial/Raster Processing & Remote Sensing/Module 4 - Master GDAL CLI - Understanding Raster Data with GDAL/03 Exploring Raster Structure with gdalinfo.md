# Exploring Raster Structure with gdalinfo

## 개요
- 유형: MOOC 영상
- 원본: [Exploring Raster Structure with gdalinfo](https://www.mooc.org/learn/raster-processing-and-remote-sensing/lecture/Bc7hz/exploring-raster-structure-with-gdalinfo)
- GDAL 처리 전에 `gdalinfo`로 입력 파일의 구조와 경고 신호를 확인하는 습관을 만든다.

## 내용
- CRS가 없거나 unknown이면 재투영 전에 원래 좌표계를 먼저 확인한다.
- 원본 픽셀 크기를 기록해 재투영 후 의도치 않은 해상도 변화를 잡는다.
- 예상 지역과 bounds가 다르거나 DEM의 밴드·자료형이 이상하면 처리를 중단하고 조사한다.

## 예시
`gdalinfo input_dem.tif`를 실행해 CRS, 해상도, 범위, 자료형과 밴드를 확인한다.

## 요약
- 도구를 실행하기 전에 입력 데이터와 분석 가정을 검증한다.
- 결과가 그럴듯하게 보이는 것보다 공간적·분석적 의미를 설명할 수 있는지가 중요하다.
