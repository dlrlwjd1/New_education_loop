# Reprojection Pitfalls and Best Practices for Elevation Data

## 개요
- 유형: MOOC 읽기
- 원본: [Reprojection Pitfalls and Best Practices for Elevation Data](https://www.mooc.org/learn/raster-processing-and-remote-sensing/supplement/pIR89/reprojection-pitfalls-and-best-practices-for-elevation-data)
- DEM 재투영에서 CRS 오지정, 부적절한 재표본화, 해상도 변경과 검증 누락이 만드는 오류를 다룬다.

## 내용
- 원본 CRS가 틀린 상태에서 변환하면 결과가 그럴듯해 보여도 위치가 잘못된다.
- 고도처럼 연속적인 값은 재표본화 선택에 따라 평활화·인공 패턴이 생길 수 있다.
- 전후 CRS·범위·픽셀 크기·NoData와 대표 지점의 값을 비교하고 변환 옵션을 기록한다.

## 예시
재투영 전후 `gdalinfo` 결과를 저장하고 공간 범위와 해상도가 의도한 값인지 비교한다.

## 요약
- 도구를 실행하기 전에 입력 데이터와 분석 가정을 검증한다.
- 결과가 그럴듯하게 보이는 것보다 공간적·분석적 의미를 설명할 수 있는지가 중요하다.
