# Key Raster Metadata Fields You Must Understand

## 개요
- 유형: MOOC 읽기
- 원본: [Key Raster Metadata Fields You Must Understand](https://www.mooc.org/learn/raster-processing-and-remote-sensing/supplement/vm3WR/key-raster-metadata-fields-you-must-understand)
- 래스터 분석 전에 CRS, 픽셀 크기, 범위, 밴드, NoData를 먼저 확인해야 하는 이유를 정리한다.

## 내용
- CRS는 픽셀을 실제 지표 위치에 배치한다.
- 픽셀 크기는 분석 가능한 공간 규모를 결정하고, 범위는 데이터가 덮는 영역을 정의한다.
- 밴드 수·순서와 NoData 정의가 틀리면 계산은 실행돼도 결과 해석은 틀릴 수 있다.

## 예시
`src.crs`, `src.res`, `src.bounds`, `src.count`, `src.nodata`를 한 번에 출력해 입력 래스터를 점검한다.

## 요약
- 도구를 실행하기 전에 입력 데이터와 분석 가정을 검증한다.
- 결과가 그럴듯하게 보이는 것보다 공간적·분석적 의미를 설명할 수 있는지가 중요하다.
