# Research Skill and Project Documentation

## 개요
- CRUD 구현에 들어가기 전에 프로젝트 문서를 생성하기 위한 `/research` skill을 만든다.
- 이 문서는 AI context용이 아니라 개발자와 팀이 application 구조를 이해하기 위한 project documentation이다.
- Item types와 item CRUD architecture를 조사해 `docs` folder에 문서로 남긴다.

## 내용

### 왜 문서화가 필요한가
AI가 많은 코드를 작성하면 개발자가 모든 line을 직접 작성하지 않는다.

그래서 application을 이해하기 위한 별도 문서가 더 중요해진다.

문서화 대상:
- domain model
- item type별 차이
- CRUD architecture
- data fetching pattern
- route 구조
- server action과 utility의 역할

이 문서는 AI에게도 다시 context로 줄 수 있고, 팀원이 project를 이해하는 데도 도움이 된다.

### `/research` skill
강사는 `/feature` command처럼 문서 생성을 위한 `/research` command를 만들었다.

생성 위치:

```text
.claude/skills/research/SKILL.md
```

역할:
- research prompt file을 읽음
- codebase, database, 문서, MCP tool 등을 조사
- 결과를 markdown 문서로 작성
- 기본 output은 `docs` folder

중요한 규칙:
- source code를 수정하지 않음
- branch나 commit을 만들지 않음
- documentation만 작성함

### Context research folder
Feature spec을 `context/features`에 두는 것처럼 research prompt는 `context/research`에 둔다.

예:

```text
context/research/item-types-research.md
context/research/item-crud-research.md
```

Research prompt에는 다음 내용이 들어간다.

- output path
- 조사할 내용
- 포함해야 할 세부 항목
- 참고할 files/tools
- source나 database를 볼지 여부

### Item types research
첫 번째 research file은 DevStash의 7개 item type을 문서화한다.

포함 항목:
- name
- icon
- hex color
- purpose
- key fields
- text/file/url classification
- shared properties
- display differences

Output 예:

```text
docs/item-types.md
```

문서에는 snippet, prompt, command, note, file, image, link 같은 item type별 목적과 주요 field가 표로 정리된다.

### Item type별 차이
Research 결과는 각 type의 핵심 차이를 보여준다.

예:
- snippet: reusable code block, `content`, `language`, `description`
- prompt: AI prompt text, `content`, `description`
- command: command text, `content`, `description`
- file/image: file URL, file name, file size 등
- link: URL field

또한 UI에서 icon, color, pro feature indicator가 어떻게 다르게 표시되는지도 정리한다.

### Item CRUD architecture research
두 번째 research file은 7개 item type을 위한 unified CRUD 구조를 설계한다.

Output 예:

```text
docs/item-crud-architecture.md
```

핵심 방향:
- read/data fetching은 server component에서 `lib/db` helper를 통해 처리
- create/update/delete mutation은 server actions로 처리
- 모든 item type을 하나의 unified system으로 다룸
- dynamic route를 사용해 type별 page 중복을 피함

### Data fetching 위치
강의에서는 database 접근을 `src/lib/db`에 모아 둔다.

예:

```text
src/lib/db/collections.ts
src/lib/db/items.ts
```

Server component는 이 helper를 호출해 Prisma query를 수행한다.

이 패턴을 유지하면 UI component와 database logic이 뒤섞이지 않는다.

### Dynamic routing 방향
Item type별로 folder를 따로 만들지 않는다.

대신 dynamic route를 사용한다.

예:

```text
/items/snippets
/items/commands
/items/links
```

구조:

```text
app/items/[type]/page.tsx
```

`[type]` 값이 `snippets`, `commands`, `links` 등으로 바뀌며 같은 page component를 재사용한다.

### Research 문서 활용
생성된 문서는 필요할 때 AI에게 mention해서 context로 줄 수 있다.

예:

```text
@docs/item-types.md
@docs/item-crud-architecture.md
```

이렇게 하면 다음 기능 구현 시 AI가 domain 구조와 설계 방향을 더 잘 이해한다.

## 예시

Research command:

```text
/research item-types-research.md
/research item-crud-research.md
```

Research prompt 구조:

```md
Output: docs/item-types.md

Research:
- Document all seven item types
- Include name, icon, color, purpose, key fields
- Classify text/file/url types
- Include shared properties and display differences
```

## 요약
- `/research` skill은 code 변경이 아니라 project documentation 생성을 위한 command다.
- Research prompt는 `context/research`에 두고, 결과는 기본적으로 `docs`에 작성한다.
- Item types와 CRUD architecture 문서를 만들어 다음 CRUD 구현의 설계 context로 사용한다.
- AI가 작성한 코드를 이해하기 위해 문서화 workflow를 별도로 갖추는 것이 중요하다.
