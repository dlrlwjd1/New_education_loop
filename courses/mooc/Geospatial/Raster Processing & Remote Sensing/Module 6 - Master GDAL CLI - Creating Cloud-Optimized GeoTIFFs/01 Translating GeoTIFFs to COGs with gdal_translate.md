# Translating GeoTIFFs to COGs with gdal_translate

## 개요
- 유형: MOOC 영상
- 원본: [Translating GeoTIFFs to COGs with gdal_translate](https://www.mooc.org/learn/raster-processing-and-remote-sensing/lecture/ubsti/translating-geotiffs-to-cogs-with-gdal-translate)
- 표준 GeoTIFF를 웹과 클라우드의 부분 읽기에 적합한 Cloud-Optimized GeoTIFF(COG)로 만드는 원리를 설명한다.

## 내용
- 내부 타일은 클라이언트가 필요한 블록만 HTTP range request로 가져오게 한다.
- 압축은 저장·전송 비용을 줄이고, overview는 작은 축척에서 전체 원본을 읽지 않게 한다.
- COG 생성은 업로드가 아니라 원격 접근 성능을 설계하는 게시 단계다.

## 예시
`gdal_translate input.tif output.tif -of COG -co COMPRESS=DEFLATE`처럼 COG 드라이버와 압축을 명시한다.

## 요약
- 도구를 실행하기 전에 입력 데이터와 분석 가정을 검증한다.
- 결과가 그럴듯하게 보이는 것보다 공간적·분석적 의미를 설명할 수 있는지가 중요하다.
