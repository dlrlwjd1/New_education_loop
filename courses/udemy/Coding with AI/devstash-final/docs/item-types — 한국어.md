# 아이템 타입 문서 (Item Types)

> DevStash의 7가지 아이템 타입(item type)에 대한 문서
> 원문 [item-types.md](item-types.md)의 한국어 번역본입니다.

---

## 개요 (Overview)

DevStash는 개발자 리소스를 분류하기 위해 7개의 시스템 정의 아이템 타입(system-defined item type)을 사용합니다. 각 타입은 고유한 용도, 아이콘(icon), 색상(color), 콘텐츠 저장 방식을 가집니다. 모든 시스템 타입은 불변(immutable, `isSystem: true`)이며 전체 사용자에게 공유됩니다.

---

## 아이템 타입 레퍼런스 (Item Types Reference)

### 1. Snippet (스니펫)

| 속성        | 값          |
| ----------- | ----------- |
| **이름(Name)**    | `snippet`   |
| **아이콘(Icon)**    | `Code`      |
| **색상(Color)**   | `#3b82f6` (파랑) |
| **콘텐츠(Content)** | TEXT        |
| **경로(Route)**   | `/items/snippets` |

**용도:** 재사용 가능한 코드 블록, 함수, 패턴, 보일러플레이트(boilerplate) 코드를 저장합니다.

**주로 사용되는 필드:**
- `content` - 코드 내용 (텍스트)
- `language` - 구문 강조(syntax highlighting)를 위한 프로그래밍 언어 (예: "typescript", "python", "yaml")
- `description` - 코드가 하는 일에 대한 설명

---

### 2. Prompt (프롬프트)

| 속성        | 값          |
| ----------- | ----------- |
| **이름(Name)**    | `prompt`    |
| **아이콘(Icon)**    | `Sparkles`  |
| **색상(Color)**   | `#8b5cf6` (보라) |
| **콘텐츠(Content)** | TEXT        |
| **경로(Route)**   | `/items/prompts` |

**용도:** AI 프롬프트, 시스템 메시지(system message), 플레이스홀더(placeholder)가 포함된 프롬프트 템플릿을 저장합니다.

**주로 사용되는 필드:**
- `content` - 프롬프트 텍스트 (주로 `{{placeholder}}` 변수 포함)
- `description` - 이 프롬프트가 달성하려는 목표

---

### 3. Command (명령어)

| 속성        | 값          |
| ----------- | ----------- |
| **이름(Name)**    | `command`   |
| **아이콘(Icon)**    | `Terminal`  |
| **색상(Color)**   | `#f97316` (주황) |
| **콘텐츠(Content)** | TEXT        |
| **경로(Route)**   | `/items/commands` |

**용도:** 셸 명령어(shell command), 스크립트, CLI 한 줄 명령을 빠른 참조용으로 저장합니다.

**주로 사용되는 필드:**
- `content` - 명령어 문자열
- `description` - 명령어의 동작과 중요한 플래그(flag)

---

### 4. Note (노트)

| 속성        | 값          |
| ----------- | ----------- |
| **이름(Name)**    | `note`      |
| **아이콘(Icon)**    | `StickyNote` |
| **색상(Color)**   | `#fde047` (노랑) |
| **콘텐츠(Content)** | TEXT        |
| **경로(Route)**   | `/items/notes` |

**용도:** 범용 노트, 문서, 설명, 참고 자료를 저장합니다.

**주로 사용되는 필드:**
- `content` - 마크다운(Markdown) 형식의 텍스트 콘텐츠
- `description` - 간단한 요약

---

### 5. File (파일 · Pro 전용)

| 속성        | 값          |
| ----------- | ----------- |
| **이름(Name)**    | `file`      |
| **아이콘(Icon)**    | `File`      |
| **색상(Color)**   | `#6b7280` (회색) |
| **콘텐츠(Content)** | FILE        |
| **경로(Route)**   | `/items/files` |

**용도:** 문서, 설정 파일(configuration file), 기타 파일 유형을 업로드하고 저장합니다.

**주로 사용되는 필드:**
- `fileUrl` - 업로드된 파일의 Cloudflare R2 URL
- `fileName` - 원본 파일명
- `fileSize` - 바이트(byte) 단위 크기
- `description` - 파일에 담긴 내용

---

### 6. Image (이미지 · Pro 전용)

| 속성        | 값          |
| ----------- | ----------- |
| **이름(Name)**    | `image`     |
| **아이콘(Icon)**    | `Image`     |
| **색상(Color)**   | `#ec4899` (분홍) |
| **콘텐츠(Content)** | FILE        |
| **경로(Route)**   | `/items/images` |

**용도:** 스크린샷, 다이어그램, 디자인 에셋(asset), 시각 자료를 저장합니다.

**주로 사용되는 필드:**
- `fileUrl` - 이미지의 Cloudflare R2 URL
- `fileName` - 원본 파일명
- `fileSize` - 바이트 단위 크기
- `description` - 이미지가 보여주는 내용

---

### 7. Link (링크)

| 속성        | 값          |
| ----------- | ----------- |
| **이름(Name)**    | `link`      |
| **아이콘(Icon)**    | `Link`      |
| **색상(Color)**   | `#10b981` (에메랄드) |
| **콘텐츠(Content)** | URL         |
| **경로(Route)**   | `/items/links` |

**용도:** 문서, 도구, 아티클, 외부 리소스를 북마크합니다.

**주로 사용되는 필드:**
- `url` - 외부 URL
- `description` - 해당 리소스의 내용이나 유용한 이유

---

## 콘텐츠 타입 분류 (Content Type Classification)

아이템은 `ContentType` enum으로 분류됩니다:

| ContentType | 아이템 타입          | 저장 방식      |
| ----------- | ------------------- | ------------------- |
| `TEXT`      | snippet, prompt, command, note | `content` 필드 (텍스트 blob) |
| `FILE`      | file, image         | `fileUrl` (Cloudflare R2) |
| `URL`       | link                | `url` 필드         |

---

## 공통 속성 (Shared Properties)

모든 아이템은 타입과 무관하게 다음 공통 필드를 공유합니다:

| 필드          | 타입      | 설명                              |
| ------------- | --------- | ---------------------------------------- |
| `id`          | String    | 고유 식별자 (cuid)                 |
| `title`       | String    | 아이템의 표시 이름                |
| `contentType` | Enum      | TEXT, FILE, 또는 URL                       |
| `description` | String?   | 선택적 설명 텍스트                |
| `isFavorite`  | Boolean   | 사용자가 즐겨찾기로 표시함                  |
| `isPinned`    | Boolean   | 목록 상단에 고정됨                   |
| `createdAt`   | DateTime  | 아이템 생성 시각                |
| `updatedAt`   | DateTime  | 마지막 수정 시각                   |
| `userId`      | String    | 아이템 소유자                        |
| `itemTypeId`  | String    | ItemType 참조                    |
| `tags`        | Tag[]     | 다대다(many-to-many) 태그 연결            |
| `collections` | ItemCollection[] | 다대다 컬렉션 소속 |

---

## 표시 방식의 차이 (Display Differences)

### 아이콘 렌더링 (Icon Rendering)

아이콘은 **src/lib/constants/item-types.ts**의 `ITEM_TYPE_ICONS`를 통해 매핑됩니다:

```typescript
export const ITEM_TYPE_ICONS: Record<string, LucideIcon> = {
  Code,      // snippet
  Sparkles,  // prompt
  Terminal,  // command
  StickyNote,// note
  File,      // file
  Image,     // image
  Link: LinkIcon, // link
};
```

### 색상 사용 (Color Usage)

색상은 다음과 같이 적용됩니다:
- 아이콘 전경색(foreground): `style={{ color: iconColor }}`
- 아이콘 배경 틴트(tint): `style={{ backgroundColor: \`${iconColor}20\` }}` (20% 불투명도)
- 컬렉션 테두리 표시(border indicator)는 가장 많이 쓰인 아이템 타입의 색상을 사용

### Pro 기능 표시 (Pro Feature Indicators)

File과 Image 타입은 유료 구독이 필요함을 나타내기 위해 사이드바(sidebar)에 "PRO" 배지(badge)를 표시합니다.

---

## 데이터베이스 스키마 (Database Schema)

### ItemType 모델

```prisma
model ItemType {
  id       String  @id @default(cuid())
  name     String
  icon     String
  color    String
  isSystem Boolean @default(false)
  userId   String?
  user     User?   @relation(...)
  items    Item[]
  defaultForCollections Collection[]

  @@unique([name, userId])
  @@map("item_types")
}
```

### Item 모델 (관련 필드)

```prisma
model Item {
  id          String      @id @default(cuid())
  title       String
  contentType ContentType
  content     String?     @db.Text // TEXT 타입
  fileUrl     String?     // FILE 타입
  fileName    String?     // FILE 타입
  fileSize    Int?        // FILE 타입
  url         String?     // URL 타입
  description String?     @db.Text
  language    String?     // 구문 강조용
  // ... 기타 필드
}
```

---

## 출처 (Sources)

- **prisma/schema.prisma** - 데이터베이스 모델
- **prisma/seed.ts** - 시스템 타입 정의
- **src/lib/constants/item-types.ts** - 아이콘/색상 매핑
- [context/project-overview.md](../context/project-overview.md) - 기능 명세

---

*최종 수정: 2026년 2월*
