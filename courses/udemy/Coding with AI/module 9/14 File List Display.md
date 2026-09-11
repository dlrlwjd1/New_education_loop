# File List Display

## 개요
- `/items/files` page에서 file item을 일반 card 대신 Google Drive/Dropbox 스타일 single-column list로 표시한다.
- 각 row에 file icon, title, file name, size, date, download button을 보여준다.
- Row click은 기존 drawer를 열고, download button은 직접 file download를 실행한다.

## 내용

### 왜 file 전용 display가 필요한가
File item은 snippet/prompt처럼 title 중심 card로 보는 것보다 file metadata를 한 줄로 보는 편이 더 유용하다.

일반 card의 한계:
- file name이 잘 드러나지 않음
- file size/date/download가 list에서 바로 보이지 않음
- file storage 서비스의 익숙한 탐색 경험과 다름

그래서 `/items/files` page는 Drive/Dropbox 같은 list layout으로 바꾼다.

### File display spec
Spec file:

```text
file-display-spec.md
```

요구사항:
- cards 대신 single-column list 사용
- 각 file을 row component로 표시
- row click 시 item drawer open
- row에 download button 표시
- file extension에 따라 icon 표시
- file name, size, date 표시
- hover state 추가
- mobile에서는 responsive stacking

### File list row component
새 component를 만든다.

예:

```text
components/items/file-list-row.tsx
```

각 row에서 보여줄 정보:
- file icon
- title
- original file name
- file size
- created/updated date
- download button

### File icon mapping
File extension에 따라 icon을 다르게 보여주기 위한 utility를 추가한다.

예상 역할:
- PDF
- text
- document
- spreadsheet
- archive
- generic file

강의에서는 실제 PDF icon asset을 가져오지는 않고, Lucide React icons를 사용했다.

이 정도만으로도 file type을 빠르게 구분할 수 있다.

### Data 확장
File list row를 렌더링하려면 기존 item list data에 file metadata가 필요하다.

필요한 field:

```text
fileName
fileSize
fileUrl
createdAt or updatedAt
```

따라서 item type list query에서 file item에 필요한 metadata를 포함하도록 확장한다.

### `/items/[type]` page 수정
Dynamic items page에서 type이 `files`인 경우 file row layout을 사용한다.

개념:

```tsx
if (type === "files") {
  return items.map((item) => <FileListRow item={item} />);
}

return items.map((item) => <ItemCard item={item} />);
```

Image type은 이전 강의에서 gallery로 분리했고, file type은 이번 강의에서 row list로 분리한다.

### Row click과 drawer
File row 전체를 클릭하면 기존 item drawer가 열린다.

Drawer에는 기존처럼 favorite/pin 등 action도 남아 있을 수 있다.

강사는 list에서는 favorite/pin을 보여주지 않을 수 있지만, drawer에는 해당 action이 있으므로 drawer 자체는 유지한다고 설명했다.

### Download button
File row에는 download button을 직접 배치한다.

처음 구현 후 list의 download button이 동작하지 않았다.

문제:
- 이전 download proxy bug와 비슷하게 R2 full URL/path 처리 방식이 잘못됨
- download route에는 full URL이 아니라 R2 path가 필요함

수정:
- file URL에서 R2 path를 추출
- download button이 `/api/download/...` 형식으로 올바르게 요청하도록 변경

수정 후 list row의 download button도 정상 동작했다.

### Browser 확인
강사는 `/items/files` page에서 결과를 확인했다.

확인한 내용:
- file들이 card가 아니라 row로 표시됨
- title 표시
- file icon 표시
- file name 표시
- file size 표시
- date 표시
- download button 표시
- row click 시 drawer open
- drawer의 download button은 기존처럼 동작
- list row download button도 수정 후 동작

### 추가 개선 아이디어
이번 강의에서는 기본 file list까지만 구현한다.

추가로 만들 수 있는 기능:
- folders
- sorting
- filtering
- search
- move file to folder
- Google Drive/Dropbox 스타일 toolbar

강사는 course 밖에서 이런 기능을 더 추가할 수 있다고 언급했다.

### Tests
이번 기능은 UI display 중심이다.

Server action이나 utility logic을 새로 크게 추가하지 않았기 때문에 별도 unit test는 만들지 않았다.

기존 tests와 build를 실행한 뒤 `/feature complete`를 진행했다.

### 다음 단계
File/image display가 개선되었고, 이제 몇 가지 작은 enhancement를 이어서 진행할 예정이다.

Snippets, prompts, notes 등은 기존 card UI가 충분히 괜찮지만, images와 files는 type-specific display가 더 적합하다.

## 예시

File row 정보:

```text
[icon] Project Brief
project-brief.pdf
1.2 MB
Jul 9, 2026
[Download]
```

Type-specific render:

```tsx
if (type === "files") {
  return <FileListRow item={item} />;
}
```

Download route:

```text
/api/download/{r2Path}
```

## 요약
- File item list는 card보다 Drive/Dropbox 스타일 row layout이 더 적합하다.
- `/items/files`에서는 file icon, file name, size, date, download button을 한 줄에 표시한다.
- Row click은 drawer를 열고, download button은 직접 file download를 실행한다.
- Download button bug는 full URL 대신 R2 path를 사용하도록 고쳐 해결했다.
- Sorting, filtering, folders 같은 고급 기능은 이후 확장할 수 있다.
