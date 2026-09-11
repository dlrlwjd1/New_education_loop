# Image Gallery Display

## 개요
- `/items/images` page에서 image item을 일반 item card 대신 thumbnail gallery로 표시한다.
- 16:9 aspect ratio, object cover, subtle hover zoom을 사용해 이미지를 빠르게 훑어볼 수 있게 만든다.
- Playwright MCP로 gallery와 drawer 동작을 간단히 확인한다.

## 내용

### 왜 image 전용 display가 필요한가
기존 item card는 title과 description 중심이다.

하지만 image item에서는 title보다 실제 thumbnail이 더 중요하다.

일반 card의 문제:
- 이미지를 찾기 어려움
- title만 보고 식별해야 함
- image library/gallery 경험과 맞지 않음

따라서 `/items/images`에서는 image thumbnail 중심의 gallery UI로 바꾼다.

### Image display spec
Spec file:

```text
image-display-spec.md
```

요구사항:
- image grid/gallery 추가
- 기존 regular item card 대신 image thumbnail card 사용
- grid는 3 columns
- image는 16:9 aspect ratio
- `object-cover`로 card 영역을 채움
- edges가 crop될 수 있지만 더 깔끔한 layout을 유지
- subtle hover zoom effect 추가
- thumbnail click 시 기존 drawer open flow 유지

### Data requirement
Image thumbnail을 보여주려면 item list data에 image URL이 필요하다.

따라서 item list query에서 image item에 필요한 `fileUrl`을 포함하도록 확장한다.

핵심:
- image item card에는 `fileUrl` 필요
- 일반 item type은 기존 card data 유지
- drawer detail fetch 방식은 그대로 유지

### Image thumbnail card
새 component를 만든다.

예:

```text
components/items/image-thumbnail-card.tsx
```

역할:
- ShadCN Card 기반 thumbnail wrapper
- image preview 표시
- 16:9 aspect ratio 유지
- hover 시 살짝 zoom
- click 시 drawer open

### Gallery layout
`/items/images` page에서는 기존 item card grid 대신 image gallery grid를 사용한다.

Layout:

```text
3 columns
thumbnail cards
responsive spacing
```

Image style:

```text
aspect-ratio: 16 / 9
object-fit: cover
```

`object-cover`는 이미지의 일부를 crop할 수 있지만, 모든 thumbnail 크기를 일관되게 맞춰 gallery가 더 깔끔해진다.

### 일반 item card와의 분기
Item list page는 type에 따라 다른 card를 렌더링한다.

예:
- `images`: image thumbnail card
- `snippets`, `commands`, `prompts`, `notes`, `links`: existing item card
- `files`: 다음 강의에서 file list layout으로 개선 예정

이렇게 type-specific UI를 적용하면 각 item type의 사용 목적에 맞게 list experience를 개선할 수 있다.

### Browser 확인
구현 후 `/items/images` page에서 확인한다.

확인할 것:
- image thumbnail이 보이는지
- title 중심 card가 아닌 gallery로 보이는지
- 16:9 비율이 유지되는지
- hover zoom effect가 자연스러운지
- thumbnail click 시 drawer가 열리는지

강사는 결과를 보고 기존 title card보다 이미지 탐색에 훨씬 적합하다고 판단했다.

### Playwright MCP로 UI 점검
강사는 Playwright MCP를 사용해 gallery를 확인하게 했다.

요청 요지:

```text
Use the Playwright MCP to check out the gallery
and let me know your thoughts.
```

Playwright MCP가 확인한 항목:
- gallery visual check
- hover effect check
- drawer open functionality check

이번에는 특별한 개선 제안은 없었고, 동작이 정상이라고 판단했다.

Playwright MCP는 단순 테스트뿐 아니라 UI feedback을 받는 용도로도 사용할 수 있다.

예:
- whitespace가 과한지
- hierarchy가 어색한지
- hover/interaction이 작동하는지
- drawer가 정상으로 열리는지

### Screenshots cleanup
Playwright MCP 실행 후 screenshot files가 생길 수 있다.

강사는 필요 없으면 삭제해도 된다고 언급했다.

이런 generated artifact는 repo에 포함하지 않도록 주의한다.

### Tests
이번 작업은 UI rendering 중심이다.

Server action이나 utility logic이 새로 추가된 것이 아니므로 새 unit test는 필요하지 않다.

다만 기존 tests/build는 feature complete 과정에서 실행한다.

### 다음 단계
다음으로는 `/items/files` page의 display를 개선한다.

현재 file item도 일반 card로 보여서 유용하지 않다.

강사가 원하는 방향:
- Google Drive/Dropbox 같은 row layout
- 파일당 한 줄
- file name
- file size
- date
- download button

Snippets, prompts 등은 card UI가 괜찮지만, images와 files는 type-specific display가 더 적합하다.

## 예시

Image gallery route:

```text
/items/images
```

Thumbnail card style:

```tsx
<img
  src={fileUrl}
  className="aspect-video object-cover transition-transform hover:scale-105"
/>
```

Type-specific render:

```tsx
if (type === "images") {
  return <ImageThumbnailCard item={item} />;
}

return <ItemCard item={item} />;
```

## 요약
- Image item list는 title card보다 thumbnail gallery가 더 적합하다.
- `/items/images`에서는 16:9 image thumbnail grid를 사용한다.
- `object-cover`와 hover zoom으로 깔끔한 gallery 느낌을 만든다.
- Thumbnail click 시 기존 drawer detail flow는 그대로 유지한다.
- 다음 개선 대상은 file item을 row-based file list로 보여주는 것이다.
