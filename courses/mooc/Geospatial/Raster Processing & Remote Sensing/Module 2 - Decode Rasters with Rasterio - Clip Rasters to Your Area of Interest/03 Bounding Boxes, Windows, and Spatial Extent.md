# Bounding Boxes, Windows, and Spatial Extent

## 개요
- 유형: MOOC 읽기
- 원본: [Bounding Boxes, Windows, and Spatial Extent](https://www.mooc.org/learn/raster-processing-and-remote-sensing/supplement/ZA5DR/bounding-boxes-windows-and-spatial-extent)
- 공간 좌표의 bounding box를 Rasterio의 픽셀 window로 변환해 필요한 부분만 읽는 원리를 정리한다.

## 내용
- bounds는 실제 좌표계에서의 최소·최대 좌표를 뜻한다.
- window는 그 범위에 해당하는 행·열 구간이므로 전체 파일을 메모리에 올리지 않아도 된다.
- bounding box와 래스터의 CRS가 다르면 엉뚱한 픽셀이 선택될 수 있다.

## 예시
`from_bounds(*bounds, transform=src.transform)`으로 window를 만들고 `src.read(window=window)`로 부분만 읽는다.

## 요약
- 도구를 실행하기 전에 입력 데이터와 분석 가정을 검증한다.
- 결과가 그럴듯하게 보이는 것보다 공간적·분석적 의미를 설명할 수 있는지가 중요하다.
