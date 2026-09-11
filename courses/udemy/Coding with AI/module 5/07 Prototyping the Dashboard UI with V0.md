# Prototyping the Dashboard UI with V0

## 개요
- DevStash의 첫 번째 기능으로 **dashboard UI layout**을 잡는 강의.
- 실제 기능 구현이 아니라, V0로 dashboard mockup을 만들어 Claude Code가 참고할 **screenshot context**를 확보한다.
- 생성된 코드는 사용하지 않고, 시각적 기준이 될 main dashboard와 item drawer 스크린샷만 활용한다.

## 내용

### 왜 dashboard layout부터 시작하는가
강사는 보통 앱의 핵심 화면, 즉 사용자가 가장 많이 보게 될 main area의 layout부터 시작한다.

이번 단계의 목표:
- 기능 구현 X
- 실제 데이터 연동 X
- 완성된 코드 사용 X
- dashboard UI의 기본 구조와 방향성만 잡기

이전 Notes app에서 했던 것처럼 V0를 사용해 빠르게 시각적 prototype을 만든다.

### V0에 전달할 prompt
V0에는 프로젝트 전체 맥락을 알려주기 위해 `context/project-overview.md` 내용을 함께 전달한다.

핵심 요청:
- SaaS dashboard UI prototype 생성
- 전체 프로젝트가 아니라 dashboard mockup만 생성
- visual elements 외 실제 동작은 필요 없음
- project overview를 디자인 참고 자료로 사용
- collapsible sidebar 포함
- collections/items main grid 포함
- item drawer 포함
- dummy collections/items data 사용
- responsive하게 구성

예시 prompt:

```text
I want to prototype a dashboard UI for my SaaS.
I'm going to give you the entire project overview.
From that, I want you to create only a mock-up of the dashboard.
It should not function other than visual elements.
This is only to create the basic UI.

I'll paste the project overview below to use as a reference for the design.
Again, you're not creating the project as a whole, but only the dashboard UI.
Include things like the collapsible sidebar, the main grid of collections and items,
the item drawer, and add dummy data for collections and items.
Also make it responsive.
```

### 생성 결과 확인
V0가 만든 첫 결과는 dashboard의 base로는 괜찮았지만 몇 가지 수정이 필요했다.

초기 결과에 포함된 요소:
- sidebar의 item types: snippets, prompts 등
- favorite collections
- dashboard main area
- collections section
- pinned items
- recent items
- search bar
- new item button
- item drawer

### 첫 번째 수정: top bar와 sidebar 정리
초기 UI에서 user avatar, settings icon, notification icon, new item button 위치가 마음에 들지 않았다.

수정 요청:

```text
In the top bar, remove the user avatar and settings icon
and put them in the bottom left in the sidebar.
Remove the notification icon.
Move the new item button to the right of the top bar.
```

그 다음 settings icon은 user data 옆에 더 작게 배치하도록 요청한다.

```text
Move the settings icon to the right of the user data and remove the text settings.
Move the new collection button next to the new item button.
There is also a white bar above the user area and new collection button. Remove that.
```

### 두 번째 수정: item color coding 강화
DevStash에서는 item type별 색상 구분이 중요하다.
V0가 icon 색상은 넣었지만, item card 자체도 더 빠르게 식별할 수 있어야 했다.

수정 요청:

```text
The color codes for the items are important.
We need the item cards to have a border with the item color.
The collection cards should have the border color of whichever item type there is most of in that collection.
```

결과적으로 command, prompt, snippet 같은 타입을 카드 border 색상으로 더 쉽게 구분할 수 있게 된다.

### 세 번째 수정: collection card icon 정리
collection에는 여러 타입의 item이 섞일 수 있으므로, 큰 단일 icon보다 여러 작은 type icon이 더 적합하다.

수정 요청:

```text
Remove the large icon from the collection cards
and add small icons of all the different types that are in that collection.
Put them on the bottom left.
```

### 네 번째 수정: item drawer 개선
item drawer에서는 close icon이 두 개 보이는 문제가 있었고, code block에는 syntax highlighting이 필요했다.

수정 요청:

```text
In the item drawer, there are two close icons. Fix that.
Also add syntax highlighting to the code.
```

이후 drawer는 단일 close icon과 syntax highlighted code block을 가진 형태로 정리된다.

### screenshot 저장
이번 단계에서는 V0 code가 아니라 screenshot을 가져온다.

저장할 screenshot:
- `dashboard-ui-main.png`
- `dashboard-ui-drawer.png`

저장 위치:

```text
context/screenshots/
```

강사는 수강생이 직접 V0로 만든 screenshot을 써도 되고, resource file에 제공된 screenshot을 써도 된다고 설명한다.

### project overview에 screenshot reference 추가
`context/project-overview.md`의 design references 부분에 screenshot 참조를 추가한다.

예시:

```md
### Screenshots

Refer to the screenshots below as a base for the dashboard UI.
It does not have to be exact. Use it as a reference.

- @context/screenshots/dashboard-ui-main.png
- @context/screenshots/dashboard-ui-drawer.png
```

이렇게 하면 Claude Code가 실제 dashboard UI를 만들 때 시각적 기준으로 screenshot을 참고할 수 있다.

### responsive는 나중에 다듬기
V0 preview에서 responsive 동작을 확인했지만 완벽하지는 않았다.
강사는 이번 단계에서는 screenshot context가 더 중요하므로, responsive behavior는 나중에 Claude Code에서 구현하면서 다듬기로 한다.

## 예시

V0 작업 흐름:

```text
Project overview 전달
  -> Dashboard mockup 생성
  -> Top bar/sidebar 위치 조정
  -> Item color border 추가
  -> Collection card icon 정리
  -> Drawer close icon/syntax highlighting 수정
  -> Main dashboard screenshot 저장
  -> Drawer screenshot 저장
  -> project-overview.md에 screenshot reference 추가
```

## 요약
- 첫 기능은 실제 기능 구현이 아니라 **dashboard UI layout prototype**이다.
- V0는 코드 생성을 위해 쓰는 것이 아니라, Claude Code가 참고할 screenshot을 얻기 위해 사용한다.
- `project-overview.md`를 V0에 붙여넣어 DevStash의 전체 맥락을 반영한 mockup을 만든다.
- main dashboard와 item drawer screenshot을 `context/screenshots/`에 저장한다.
- `project-overview.md`에 screenshot reference를 추가해 이후 UI 구현의 시각적 기준으로 사용한다.
