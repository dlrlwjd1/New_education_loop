# Project Requirements

## 개요
- 유형: MOOC 읽기
- 원본: [Project Requirements](https://www.mooc.org/learn/raster-processing-and-remote-sensing/supplement/l1W08/project-requirements)
- 두 시점 Red·NIR 래스터로 NDVI와 변화 지도를 만드는 프로젝트의 입력·출력·검증 조건을 정리한다.

## 내용
- 입력 `raster_A.tif`, `raster_B.tif`는 Band 1=Red, Band 2=NIR이며 같은 범위와 해상도를 사용한다.
- NDVI, NoData, 0 나눗셈, 밴드 선택, -1~1 범위와 시점 간 오정렬을 처리한다.
- `NDVI_A.tif`, `NDVI_B.tif`, `change_map.tif`와 가정·한계를 포함한 분석문을 제출한다.

## 예시
변화는 증가·감소·변화 없음으로 분류하고, 구름·mixed pixel·대기 보정 정보 부족 같은 제한을 한 가지 이상 밝힌다.

## 요약
- 도구를 실행하기 전에 입력 데이터와 분석 가정을 검증한다.
- 결과가 그럴듯하게 보이는 것보다 공간적·분석적 의미를 설명할 수 있는지가 중요하다.
