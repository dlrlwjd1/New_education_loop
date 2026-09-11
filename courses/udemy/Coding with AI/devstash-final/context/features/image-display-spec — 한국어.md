# Image Gallery View

> 원문 [image-display-spec.md](image-display-spec.md)의 한국어 번역본입니다.

## 개요(Overview)

일반 항목(item) 카드 대신 썸네일(thumbnail) 카드를 사용하는 이미지 그리드/갤러리를 추가한다.

## 요구사항(Requirements)

- 현재의 항목 카드를 대체할 이미지 썸네일 카드 생성
- 3열로 구성된 이미지 그리드/갤러리 표시
- 16:9 종횡비(aspect ratio, `aspect-video`)의 이미지 썸네일 표시
- 카드를 채우기 위해 `object-cover` 사용(가장자리가 잘릴 수 있음)
- 은은한 호버 줌(hover zoom) 효과(300ms 트랜지션으로 5% 확대)
