# 신규 기능 목록(New Feature List)

> 원문 **new-feature-list.md**의 한국어 번역본입니다.

향후 기능 아이디어를 티어(tier)별로 정리한 목록.

---

## 무료 티어(Free Tier)

- **Import/Export (기본)** - 백업용 아이템 JSON 내보내기(export), 데이터 마이그레이션을 위한 JSON 가져오기(import)
- **키보드 단축키(Keyboard shortcuts)** - Vim 스타일 내비게이션, 빠른 동작(예: 새 아이템은 `n`, 즐겨찾기는 `f`)
- **아이템 복제(Duplicate item)** - 모든 아이템을 빠르게 복제
- **아이템 정렬(Item sorting)** - 목록 페이지에서 이름, 생성일, 수정일 기준으로 아이템 정렬
- **휴지통/소프트 삭제(Trash/soft delete)** - 30일 휴지통(trash bin)으로 복구 가능한 삭제
- **태그 페이지(Tags page)** - 모든 태그를 탐색하고, 클릭하면 해당 태그로 아이템 필터링
- **카드 내 마크다운 미리보기(Markdown preview in cards)** - 노트/프롬프트 카드에 렌더링된 마크다운 조각 표시
- **공개 공유(Public sharing)** - 단일 아이템에 대한 공개 읽기 전용 링크 생성(Gist처럼)
- **다크/라이트 테마 토글(Dark/Light theme toggle)** - 라이트 모드 옵션(현재는 다크 모드만 있음)

## 프로 티어(Pro Tier)

- **AI 채팅(AI Chat)** - 내 스태시(stash)에 대해 질문하기("내 React 인증 스니펫 찾아줘", "Docker용으로 저장한 명령어가 뭐였지?")
- **커스텀 아이템 타입(Custom item types)** - 사용자 정의 아이콘/색상이 있는 사용자 정의 타입(이미 명세에 "coming soon"으로 포함됨)
- **일괄 작업(Bulk operations)** - 여러 아이템을 다중 선택하여 이동, 태그 지정, 삭제, 컬렉션에 할당
- **버전 히스토리(Version history)** - 시간에 따른 아이템 편집 추적, diff 뷰, 이전 버전 복원
- **GitHub Gists에서 가져오기(Import from GitHub Gists)** - 기존 Gist를 스니펫으로 가져오기
- **팀 공유(Team sharing)** - 다른 DevStash 사용자와 컬렉션 공유(읽기 전용 또는 편집)
- **웹훅/API 접근(Webhooks/API access)** - REST API + API 키(API keys)로 사용자가 CLI 도구, 확장 프로그램 등에서 아이템을 저장 가능
- **VS Code 확장(VS Code extension)** - 에디터에서 직접 스니펫 저장
- **고급 내보내기(Advanced export)** - 파일 포함 ZIP으로 내보내기, 또는 컬렉션을 마크다운 문서로 내보내기
- **AI 자동 분류(AI auto-categorize)** - 가져오기나 붙여넣기 시 AI가 타입, 컬렉션, 태그를 자동으로 제안
- **중첩 컬렉션(Nested collections)** - 더 깊은 조직화를 위한 하위 컬렉션(sub-collections)

## 빠른 성과(Quick Wins)

| 기능 | 티어 | 이유 |
|---|---|---|
| Duplicate item | Free | 쿼리 하나 + 다이얼로그 |
| Tags page | Free | 이미 태그 데이터 보유 |
| Item sorting | Free | 클라이언트 사이드, 최소한의 코드 |
| Public sharing | Free | 새 라우트 하나 + 토큰 |
| Custom types | Pro | 이미 명세됨, 스키마가 지원 |
| Bulk operations | Pro | 큰 UX 개선 |
