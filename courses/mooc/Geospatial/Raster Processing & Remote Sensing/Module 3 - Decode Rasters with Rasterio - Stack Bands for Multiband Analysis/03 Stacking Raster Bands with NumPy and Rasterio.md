# Stacking Raster Bands with NumPy and Rasterio

## 개요
- 유형: MOOC 영상
- 원본: [Stacking Raster Bands with NumPy and Rasterio](https://www.mooc.org/learn/raster-processing-and-remote-sensing/lecture/hD0rK/stacking-raster-bands-with-numpy-and-rasterio)
- NumPy와 Rasterio로 단일 밴드들을 다중 밴드 래스터로 결합하는 검증 중심 절차를 다룬다.

## 내용
- 쌓기 전에 CRS·크기·픽셀 정렬과 배열 shape를 확인한다.
- `np.stack`의 새 축이 밴드 축이 되며 순서는 의도적으로 정해야 한다.
- 출력할 때 count, 크기, CRS, transform 메타데이터를 배열 구조에 맞게 갱신한다.

## 예시
`stacked = np.stack([red, nir], axis=0)`으로 `(2, rows, columns)` 배열을 만든 뒤 두 밴드를 같은 순서로 기록한다.

## 요약
- 도구를 실행하기 전에 입력 데이터와 분석 가정을 검증한다.
- 결과가 그럴듯하게 보이는 것보다 공간적·분석적 의미를 설명할 수 있는지가 중요하다.
