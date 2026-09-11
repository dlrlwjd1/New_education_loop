# Building for Learning vs. Building for Scaling

## 개요
- 학습을 위한 구현과 확장을 위한 구현을 구분하고, 기술 부채를 팀이 명시적으로 관리한다.
- 원문: https://www.mooc.org/learn/uva-darden-digital-product-management/lecture/3Fpq7/building-for-learning-vs-building-for-scaling

## 내용
### 학습용 구현
- 아직 성공 여부를 모르는 기능을 처음부터 무한 확장 가능하게 만들 필요는 없다.
- MVP와 외부 서비스로 빠르게 검증하면 엔지니어링 과부하와 불필요한 복잡성을 줄인다.

### 확장용 구현
- 가설이 검증되면 성능, 비용, 안정성, 유지보수성을 개선한다.
- 빠른 구현으로 생긴 기술 부채(technical debt)는 숨기지 않고 의도적으로 선택한다.
- 제품 관리자는 이후 리팩터링을 위한 여유를 로드맵에 확보해야 한다.

## 예시
수요를 검증할 때는 비용이 높은 외부 API를 사용하고, 성공이 확인된 뒤 자체 구현의 경제성과 확장성을 평가한다.

## 요약
- 불확실한 아이디어는 학습에 맞게 구현한다.
- 검증 후 확장에 맞게 개선한다.
- 기술 부채와 리팩터링을 제품·개발 팀이 함께 결정한다.
