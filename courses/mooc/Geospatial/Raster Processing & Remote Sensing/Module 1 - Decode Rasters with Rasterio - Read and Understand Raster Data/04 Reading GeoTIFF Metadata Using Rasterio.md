# Reading GeoTIFF Metadata Using Rasterio

## 개요
- 유형: MOOC 영상
- 원본: [Reading GeoTIFF Metadata Using Rasterio](https://www.mooc.org/learn/raster-processing-and-remote-sensing/lecture/WMe0D/reading-geotiff-metadata-using-rasterio)
- Rasterio로 GeoTIFF를 열고 분석 전에 공간 유효성을 검증하는 절차를 다룬다.

## 내용
- 너비·높이와 밴드 수로 격자 구조를 확인한다.
- 자료형은 정밀도, 나눗셈 결과, 파일 크기와 성능에 영향을 준다.
- CRS·affine transform·bounds를 함께 봐야 실제 위치와 범위를 판단할 수 있다.

## 예시
`with rasterio.open(path) as src:` 블록에서 `width`, `height`, `dtypes`, `crs`, `transform`, `bounds`를 확인한다.

## 요약
- 도구를 실행하기 전에 입력 데이터와 분석 가정을 검증한다.
- 결과가 그럴듯하게 보이는 것보다 공간적·분석적 의미를 설명할 수 있는지가 중요하다.
