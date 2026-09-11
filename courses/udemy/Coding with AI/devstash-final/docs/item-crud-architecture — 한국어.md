# Item CRUD Architecture

> 원문 [item-crud-architecture.md](item-crud-architecture.md)의 한국어 번역본입니다.

> DevStash의 7가지 아이템 타입(item type) 전체를 위한 통합 CRUD 시스템 설계

---

## 개요

이 문서는 7가지 아이템 타입(item type) 전체(snippet, prompt, command, note, file, image, link)에 걸쳐 아이템을 생성(create), 조회(read), 수정(update), 삭제(delete)하는 아키텍처를 정의합니다. 이 설계는 다음을 사용합니다.

- 변경 작업(mutation, 생성/수정/삭제)에는 **서버 액션(Server Actions)**
- 데이터 조회에는 `lib/db/` 안의 **직접 Prisma 쿼리(Direct Prisma queries)**
- `/items/[type]`를 통한 **동적 라우팅(Dynamic routing)**
- 아이템 타입에 따라 적응하는 **공유 컴포넌트(Shared components)**

---

## 파일 구조

```
src/
├── actions/
│   └── items.ts              # All item mutations (create, update, delete, toggle)
│
├── lib/
│   └── db/
│       ├── items.ts          # Item queries (existing + new)
│       └── collections.ts    # Collection queries (existing)
│
├── app/
│   └── (dashboard)/
│       └── items/
│           └── [type]/
│               ├── page.tsx      # Server component - item list page
│               └── loading.tsx   # Loading skeleton
│
├── components/
│   └── items/
│       ├── item-list.tsx         # Grid/list of items (server)
│       ├── item-card.tsx         # Individual item card (server)
│       ├── item-drawer.tsx       # View/edit drawer (client)
│       ├── item-form.tsx         # Create/edit form (client)
│       ├── item-actions.tsx      # Delete, favorite, pin buttons (client)
│       ├── item-content.tsx      # Type-specific content display
│       ├── content-editor.tsx    # Text/markdown editor (client)
│       ├── file-uploader.tsx     # File upload component (client)
│       └── link-input.tsx        # URL input with preview (client)
│
└── types/
    └── items.ts              # Shared item types and interfaces
```

---

## 동적 라우팅(Dynamic Routing): `/items/[type]`

### 라우트 패턴(Route Pattern)

```
/items/snippets   → type = "snippet"
/items/prompts    → type = "prompt"
/items/commands   → type = "command"
/items/notes      → type = "note"
/items/files      → type = "file"
/items/images     → type = "image"
/items/links      → type = "link"
```

### URL과 타입 매핑(URL to Type Mapping)

```typescript
// src/lib/constants/item-types.ts

export const ROUTE_TO_TYPE: Record<string, string> = {
  snippets: 'snippet',
  prompts: 'prompt',
  commands: 'command',
  notes: 'note',
  files: 'file',
  images: 'image',
  links: 'link',
};

export const TYPE_TO_ROUTE: Record<string, string> = {
  snippet: 'snippets',
  prompt: 'prompts',
  command: 'commands',
  note: 'notes',
  file: 'files',
  image: 'images',
  link: 'links',
};

export const VALID_ROUTES = Object.keys(ROUTE_TO_TYPE);
```

### 페이지 컴포넌트(Page Component)

```typescript
// src/app/(dashboard)/items/[type]/page.tsx

import { auth } from '@/auth';
import { redirect, notFound } from 'next/navigation';
import { getItemsByType, getItemTypeByName } from '@/lib/db/items';
import { ROUTE_TO_TYPE, VALID_ROUTES } from '@/lib/constants/item-types';
import ItemList from '@/components/items/item-list';
import DashboardLayout from '@/components/layout/dashboard-layout';

interface Props {
  params: Promise<{ type: string }>;
  searchParams: Promise<{ q?: string; sort?: string }>;
}

export default async function ItemTypePage({ params, searchParams }: Props) {
  const session = await auth();
  if (!session?.user?.id) {
    redirect('/sign-in');
  }

  const { type: routeType } = await params;
  const { q: query, sort } = await searchParams;

  // Validate route
  if (!VALID_ROUTES.includes(routeType)) {
    notFound();
  }

  const typeName = ROUTE_TO_TYPE[routeType];

  // Fetch data in parallel
  const [items, itemType] = await Promise.all([
    getItemsByType(session.user.id, typeName, { query, sort }),
    getItemTypeByName(typeName),
  ]);

  if (!itemType) {
    notFound();
  }

  return (
    <DashboardLayout>
      <ItemList
        items={items}
        itemType={itemType}
        query={query}
        sort={sort}
      />
    </DashboardLayout>
  );
}
```

---

## 서버 액션(Server Actions): `src/actions/items.ts`

모든 변경 작업(mutation)은 일관된 패턴으로 하나의 파일에 위치합니다.

```typescript
// src/actions/items.ts

'use server';

import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { ContentType } from '@/generated/prisma/client';

// ============================================
// SCHEMAS
// ============================================

const createTextItemSchema = z.object({
  title: z.string().min(1).max(255),
  content: z.string().min(1),
  description: z.string().max(1000).optional(),
  language: z.string().max(50).optional(),
  itemTypeName: z.enum(['snippet', 'prompt', 'command', 'note']),
  collectionIds: z.array(z.string()).optional(),
  tags: z.array(z.string().max(50)).max(10).optional(),
});

const createLinkItemSchema = z.object({
  title: z.string().min(1).max(255),
  url: z.string().url(),
  description: z.string().max(1000).optional(),
  collectionIds: z.array(z.string()).optional(),
  tags: z.array(z.string().max(50)).max(10).optional(),
});

const createFileItemSchema = z.object({
  title: z.string().min(1).max(255),
  fileUrl: z.string().url(),
  fileName: z.string().min(1),
  fileSize: z.number().positive(),
  description: z.string().max(1000).optional(),
  itemTypeName: z.enum(['file', 'image']),
  collectionIds: z.array(z.string()).optional(),
  tags: z.array(z.string().max(50)).max(10).optional(),
});

const updateItemSchema = z.object({
  id: z.string(),
  title: z.string().min(1).max(255).optional(),
  content: z.string().optional(),
  url: z.string().url().optional(),
  description: z.string().max(1000).optional(),
  language: z.string().max(50).optional(),
  collectionIds: z.array(z.string()).optional(),
  tags: z.array(z.string().max(50)).max(10).optional(),
});

// ============================================
// RESPONSE TYPE
// ============================================

type ActionResult<T = void> =
  | { success: true; data?: T }
  | { success: false; error: string };

// ============================================
// CREATE ACTIONS
// ============================================

export async function createTextItem(
  input: z.infer<typeof createTextItemSchema>
): Promise<ActionResult<{ id: string }>> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: 'Unauthorized' };
    }

    const validated = createTextItemSchema.parse(input);

    // Get item type
    const itemType = await prisma.itemType.findFirst({
      where: { name: validated.itemTypeName, isSystem: true },
    });

    if (!itemType) {
      return { success: false, error: 'Invalid item type' };
    }

    // Create item with tags and collections
    const item = await prisma.item.create({
      data: {
        title: validated.title,
        contentType: ContentType.TEXT,
        content: validated.content,
        description: validated.description,
        language: validated.language,
        userId: session.user.id,
        itemTypeId: itemType.id,
        tags: validated.tags?.length ? {
          connectOrCreate: validated.tags.map(name => ({
            where: { name },
            create: { name },
          })),
        } : undefined,
        collections: validated.collectionIds?.length ? {
          create: validated.collectionIds.map(collectionId => ({
            collectionId,
          })),
        } : undefined,
      },
    });

    revalidatePath('/dashboard');
    revalidatePath(`/items/${validated.itemTypeName}s`);

    return { success: true, data: { id: item.id } };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message };
    }
    console.error('Create item error:', error);
    return { success: false, error: 'Failed to create item' };
  }
}

export async function createLinkItem(
  input: z.infer<typeof createLinkItemSchema>
): Promise<ActionResult<{ id: string }>> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: 'Unauthorized' };
    }

    const validated = createLinkItemSchema.parse(input);

    const itemType = await prisma.itemType.findFirst({
      where: { name: 'link', isSystem: true },
    });

    if (!itemType) {
      return { success: false, error: 'Invalid item type' };
    }

    const item = await prisma.item.create({
      data: {
        title: validated.title,
        contentType: ContentType.URL,
        url: validated.url,
        description: validated.description,
        userId: session.user.id,
        itemTypeId: itemType.id,
        tags: validated.tags?.length ? {
          connectOrCreate: validated.tags.map(name => ({
            where: { name },
            create: { name },
          })),
        } : undefined,
        collections: validated.collectionIds?.length ? {
          create: validated.collectionIds.map(collectionId => ({
            collectionId,
          })),
        } : undefined,
      },
    });

    revalidatePath('/dashboard');
    revalidatePath('/items/links');

    return { success: true, data: { id: item.id } };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message };
    }
    console.error('Create link error:', error);
    return { success: false, error: 'Failed to create link' };
  }
}

export async function createFileItem(
  input: z.infer<typeof createFileItemSchema>
): Promise<ActionResult<{ id: string }>> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: 'Unauthorized' };
    }

    // Pro check for file/image types
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { isPro: true },
    });

    if (!user?.isPro) {
      return { success: false, error: 'File uploads require a Pro subscription' };
    }

    const validated = createFileItemSchema.parse(input);

    const itemType = await prisma.itemType.findFirst({
      where: { name: validated.itemTypeName, isSystem: true },
    });

    if (!itemType) {
      return { success: false, error: 'Invalid item type' };
    }

    const item = await prisma.item.create({
      data: {
        title: validated.title,
        contentType: ContentType.FILE,
        fileUrl: validated.fileUrl,
        fileName: validated.fileName,
        fileSize: validated.fileSize,
        description: validated.description,
        userId: session.user.id,
        itemTypeId: itemType.id,
        tags: validated.tags?.length ? {
          connectOrCreate: validated.tags.map(name => ({
            where: { name },
            create: { name },
          })),
        } : undefined,
        collections: validated.collectionIds?.length ? {
          create: validated.collectionIds.map(collectionId => ({
            collectionId,
          })),
        } : undefined,
      },
    });

    revalidatePath('/dashboard');
    revalidatePath(`/items/${validated.itemTypeName}s`);

    return { success: true, data: { id: item.id } };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message };
    }
    console.error('Create file error:', error);
    return { success: false, error: 'Failed to upload file' };
  }
}

// ============================================
// UPDATE ACTION
// ============================================

export async function updateItem(
  input: z.infer<typeof updateItemSchema>
): Promise<ActionResult> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: 'Unauthorized' };
    }

    const validated = updateItemSchema.parse(input);

    // Verify ownership
    const existing = await prisma.item.findFirst({
      where: { id: validated.id, userId: session.user.id },
      include: { itemType: true },
    });

    if (!existing) {
      return { success: false, error: 'Item not found' };
    }

    // Update item
    await prisma.item.update({
      where: { id: validated.id },
      data: {
        title: validated.title,
        content: validated.content,
        url: validated.url,
        description: validated.description,
        language: validated.language,
        // Handle tags update
        tags: validated.tags !== undefined ? {
          set: [], // Clear existing
          connectOrCreate: validated.tags.map(name => ({
            where: { name },
            create: { name },
          })),
        } : undefined,
        // Handle collections update
        collections: validated.collectionIds !== undefined ? {
          deleteMany: {},
          create: validated.collectionIds.map(collectionId => ({
            collectionId,
          })),
        } : undefined,
      },
    });

    revalidatePath('/dashboard');
    revalidatePath(`/items/${existing.itemType.name}s`);

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message };
    }
    console.error('Update item error:', error);
    return { success: false, error: 'Failed to update item' };
  }
}

// ============================================
// DELETE ACTION
// ============================================

export async function deleteItem(id: string): Promise<ActionResult> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: 'Unauthorized' };
    }

    // Verify ownership and get type for revalidation
    const item = await prisma.item.findFirst({
      where: { id, userId: session.user.id },
      include: { itemType: true },
    });

    if (!item) {
      return { success: false, error: 'Item not found' };
    }

    await prisma.item.delete({ where: { id } });

    revalidatePath('/dashboard');
    revalidatePath(`/items/${item.itemType.name}s`);

    return { success: true };
  } catch (error) {
    console.error('Delete item error:', error);
    return { success: false, error: 'Failed to delete item' };
  }
}

// ============================================
// TOGGLE ACTIONS
// ============================================

export async function toggleItemFavorite(id: string): Promise<ActionResult> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: 'Unauthorized' };
    }

    const item = await prisma.item.findFirst({
      where: { id, userId: session.user.id },
    });

    if (!item) {
      return { success: false, error: 'Item not found' };
    }

    await prisma.item.update({
      where: { id },
      data: { isFavorite: !item.isFavorite },
    });

    revalidatePath('/dashboard');

    return { success: true };
  } catch (error) {
    console.error('Toggle favorite error:', error);
    return { success: false, error: 'Failed to update favorite status' };
  }
}

export async function toggleItemPinned(id: string): Promise<ActionResult> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: 'Unauthorized' };
    }

    const item = await prisma.item.findFirst({
      where: { id, userId: session.user.id },
    });

    if (!item) {
      return { success: false, error: 'Item not found' };
    }

    await prisma.item.update({
      where: { id },
      data: { isPinned: !item.isPinned },
    });

    revalidatePath('/dashboard');

    return { success: true };
  } catch (error) {
    console.error('Toggle pinned error:', error);
    return { success: false, error: 'Failed to update pinned status' };
  }
}
```

---

## 데이터 조회(Data Fetching): `src/lib/db/items.ts`

기존 items.ts 파일에 다음 함수들을 추가합니다.

```typescript
// New functions to add to src/lib/db/items.ts

interface GetItemsOptions {
  query?: string;
  sort?: string;
  limit?: number;
}

export async function getItemsByType(
  userId: string,
  typeName: string,
  options: GetItemsOptions = {}
): Promise<ItemWithType[]> {
  const { query, sort = 'updatedAt', limit } = options;

  const itemType = await prisma.itemType.findFirst({
    where: { name: typeName, isSystem: true },
  });

  if (!itemType) return [];

  const items = await prisma.item.findMany({
    where: {
      userId,
      itemTypeId: itemType.id,
      ...(query ? {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
          { content: { contains: query, mode: 'insensitive' } },
        ],
      } : {}),
    },
    include: {
      itemType: true,
      tags: { select: { name: true } },
    },
    orderBy: sort === 'title'
      ? { title: 'asc' }
      : sort === 'createdAt'
      ? { createdAt: 'desc' }
      : { updatedAt: 'desc' },
    ...(limit ? { take: validateLimit(limit) } : {}),
  });

  return items.map(item => ({
    id: item.id,
    title: item.title,
    description: item.description,
    content: item.content,
    url: item.url,
    fileUrl: item.fileUrl,
    fileName: item.fileName,
    fileSize: item.fileSize,
    language: item.language,
    isFavorite: item.isFavorite,
    isPinned: item.isPinned,
    itemType: item.itemType,
    tags: item.tags.map(t => t.name),
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  }));
}

export async function getItemById(
  userId: string,
  itemId: string
): Promise<ItemWithType | null> {
  const item = await prisma.item.findFirst({
    where: { id: itemId, userId },
    include: {
      itemType: true,
      tags: { select: { name: true } },
      collections: {
        include: { collection: { select: { id: true, name: true } } },
      },
    },
  });

  if (!item) return null;

  return {
    id: item.id,
    title: item.title,
    description: item.description,
    content: item.content,
    url: item.url,
    fileUrl: item.fileUrl,
    fileName: item.fileName,
    fileSize: item.fileSize,
    language: item.language,
    isFavorite: item.isFavorite,
    isPinned: item.isPinned,
    itemType: item.itemType,
    tags: item.tags.map(t => t.name),
    collections: item.collections.map(ic => ic.collection),
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  };
}

export async function getItemTypeByName(name: string) {
  return prisma.itemType.findFirst({
    where: { name, isSystem: true },
  });
}
```

---

## 컴포넌트 책임(Component Responsibilities)

### 서버 컴포넌트(Server Components) ('use client' 없음)

| 컴포넌트 | 책임 |
|-----------|---------------|
| `ItemList` | 데이터를 직접 가져오지 않고(데이터를 전달받음), 헤더 + ItemCard 그리드를 렌더링 |
| `ItemCard` | 아이템 미리보기, 아이콘, 태그, 상태 배지 표시 |
| `ItemContent` | 타입에 따라 콘텐츠 렌더링(코드 블록, 마크다운, 링크 미리보기, 이미지) |

### 클라이언트 컴포넌트(Client Components) ('use client')

| 컴포넌트 | 책임 |
|-----------|---------------|
| `ItemDrawer` | 아이템 조회 및 편집용 시트/드로어(sheet/drawer), 열림 상태 관리 |
| `ItemForm` | 생성/편집용 폼 필드, 서버 액션 호출, 폼 상태 관리 |
| `ItemActions` | 즐겨찾기, 핀, 삭제 버튼, 낙관적 업데이트(optimistic update)로 서버 액션 호출 |
| `ContentEditor` | 타입에 따라 코드 에디터(Monaco/CodeMirror) 또는 마크다운 에디터 |
| `FileUploader` | R2로 드래그앤드롭 파일 업로드, URL 반환 |
| `LinkInput` | 선택적 메타데이터 조회가 포함된 URL 입력 |

---

## 타입별 로직 위치(Type-Specific Logic Location)

**원칙:** 타입별 동작은 액션(action)이 아니라 컴포넌트(component)에 위치합니다.

### 액션 (타입 비의존적, Type-Agnostic)
- 입력 검증(validate input)
- 인증/권한 확인(auth/permissions)
- CRUD 작업 실행
- 경로 재검증(revalidate paths)

### 컴포넌트 (타입 인식, Type-Aware)
- 적절한 에디터 렌더링(코드 vs 마크다운 vs 파일 업로드 vs URL 입력)
- 콘텐츠를 올바르게 표시(구문 강조(syntax highlighting), 이미지 미리보기, 링크 카드)
- 관련 필드 표시(snippet의 언어 선택기, link의 URL 검증)

### 예시: ContentEditor

```typescript
// src/components/items/content-editor.tsx

'use client';

import { ContentType } from '@/generated/prisma/client';
import CodeEditor from './editors/code-editor';
import MarkdownEditor from './editors/markdown-editor';
import FileUploader from './file-uploader';
import LinkInput from './link-input';

interface ContentEditorProps {
  contentType: ContentType;
  itemTypeName: string;
  value: string;
  onChange: (value: string) => void;
  language?: string;
  onLanguageChange?: (lang: string) => void;
}

export default function ContentEditor({
  contentType,
  itemTypeName,
  value,
  onChange,
  language,
  onLanguageChange,
}: ContentEditorProps) {
  // Snippet: Code editor with language selector
  if (itemTypeName === 'snippet') {
    return (
      <CodeEditor
        value={value}
        onChange={onChange}
        language={language}
        onLanguageChange={onLanguageChange}
      />
    );
  }

  // Prompt, Command: Plain text or simple markdown
  if (itemTypeName === 'prompt' || itemTypeName === 'command') {
    return (
      <MarkdownEditor
        value={value}
        onChange={onChange}
        minimal
      />
    );
  }

  // Note: Full markdown editor
  if (itemTypeName === 'note') {
    return (
      <MarkdownEditor
        value={value}
        onChange={onChange}
      />
    );
  }

  // File, Image: File uploader
  if (contentType === 'FILE') {
    return (
      <FileUploader
        value={value}
        onChange={onChange}
        accept={itemTypeName === 'image' ? 'image/*' : undefined}
      />
    );
  }

  // Link: URL input
  if (contentType === 'URL') {
    return (
      <LinkInput
        value={value}
        onChange={onChange}
      />
    );
  }

  return null;
}
```

---

## 라우트 검증 및 404 처리(Route Validation & 404 Handling)

```typescript
// Middleware for route validation (optional, can also handle in page)

// src/app/(dashboard)/items/[type]/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <h2 className="text-2xl font-semibold mb-2">Invalid Item Type</h2>
      <p className="text-muted-foreground">
        The item type you're looking for doesn't exist.
      </p>
    </div>
  );
}
```

---

## 검색 및 필터링 (URL 상태, Search & Filtering (URL State))

검색과 정렬은 공유 가능성(shareability)을 위해 URL 쿼리 파라미터(query parameter)를 사용합니다.

```
/items/snippets?q=react&sort=title
/items/prompts?q=code+review
```

### ItemListHeader 컴포넌트

```typescript
// src/components/items/item-list-header.tsx

'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { useDebouncedCallback } from 'use-debounce';

export default function ItemListHeader({ itemType, query, sort }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const debouncedSearch = useDebouncedCallback((value: string) => {
    updateParams('q', value);
  }, 300);

  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold">{itemType.name}s</h1>
      <div className="flex gap-4">
        <Input
          placeholder="Search..."
          defaultValue={query}
          onChange={(e) => debouncedSearch(e.target.value)}
        />
        <Select
          value={sort || 'updatedAt'}
          onValueChange={(value) => updateParams('sort', value)}
        >
          {/* Sort options */}
        </Select>
      </div>
    </div>
  );
}
```

---

## 요약

| 관심사(Concern) | 위치(Location) | 패턴(Pattern) |
|---------|----------|---------|
| 변경 작업(Mutations) | `src/actions/items.ts` | Zod 검증을 사용하는 서버 액션(Server Actions) |
| 쿼리(Queries) | `src/lib/db/items.ts` | 직접 Prisma, 서버 컴포넌트에서 호출 |
| 라우팅(Routing) | `/items/[type]/page.tsx` | 검증이 포함된 동적 라우트 |
| 타입 로직(Type logic) | 컴포넌트(Components) | 타입에 따른 조건부 렌더링 |
| 폼(Forms) | 클라이언트 컴포넌트 | React 상태 + 서버 액션 호출 |
| 검색(Search) | URL 파라미터 | 서버 측 필터링 |

---

## 출처(Sources)

- [context/project-overview.md](../context/project-overview.md) - 기능 명세(Feature specifications)
- [docs/item-types.md](item-types.md) - 아이템 타입 참조(Item type reference)
- **prisma/schema.prisma** - 데이터베이스 모델(Database models)
- `src/lib/db/`, `src/components/`의 기존 코드베이스 패턴

---

*최종 수정: 2026년 2월*
