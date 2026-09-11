# The Skill.md File: Instructions & Context for Your AI Agent

## 개요
- 스킬에서 가장 중요한 파일인 **SKILL.md**의 형식(마크다운, front matter + body)을 상세히 다루는 강의.

## 내용
### SKILL.md는 무엇인가
- 스킬의 핵심(core)으로, AI에게 "무엇을 해야 하는지" 가르치는 매뉴얼/지시문을 담은 **텍스트 파일**.
- **마크다운(Markdown)** 형식을 따른다. 마크다운은 제목(heading), 링크, 목록 등을 일반 텍스트만으로 표현하는 표기법.

### 프론트매터(front matter)란
- 비유: 책을 펼쳤을 때 나오는 **저작권 페이지(copyright page)** — 본문은 아니지만, 본문에 대한 정보(누가 저작권을 갖는지, 언제 저작권이 시작됐는지)를 알려주는 부분.
- 마크다운 파일의 front matter도 마찬가지로 **본문은 아니지만, 본문에 대한 핵심 정보를 AI에게 알려주는 부분**이다.
- 파일 맨 위, `---`(대시 3개)로 시작해서 `---`로 끝나는 블록.
- front matter가 제공하는 2가지 핵심 정보:
  - **name**: 스킬 이름
  - **description**: 스킬에 대한 짧은 설명 (언제 이 스킬을 써야 하는지 AI가 판단하는 근거)

### 바디(body)란
- front matter 아래, 두 번째 `---` 이후에 오는 부분.
- 지금까지 다뤄온 "지시문(instructions)", 즉 Word 문서에 적었던 내용 그 자체.
- 매뉴얼, 방법(how-to)이 담기는 곳으로, 순수한 텍스트지만 구조화되어 있다.

### 최소 형태의 SKILL.md 예시 구조
```markdown
---
name: 스킬 이름
description: 짧은 설명 (언제 사용하는지)
---

(여기부터 body: 실제 지시문/절차)
```
- 위 구조만 갖추면 최소한의 SKILL.md 파일이 완성되고, 이를 폴더에 넣고 zip으로 압축해 AI에게 업로드하면 스킬로 사용할 수 있다.
- 다만 강의에서 보여준 예시는 "형식 설명용"으로 극도로 단순화한 것이며, 실제로 좋은 스킬은 이보다 훨씬 **풍부하고 탄탄(rich and robust)**해야 한다고 강조.

### 왜 형식(포맷)이 중요한가
- 사람이 매뉴얼을 읽을 때 일관된 형식이면 필요한 정보를 빠르게 찾을 수 있는 것처럼, **AI 에이전트도 일관되게 포맷된 정보를 좋아한다.**
- 일관된 형식 덕분에 AI가 필요한 정보(이름, 설명, 절차, 제약사항 등)를 빠르게 찾아 학습하고 작업을 시작할 수 있다.

## 예시
```markdown
---
name: expense-reports
description: Use this skill when the user needs to create a travel expense report.
---

1. Read all uploaded receipts and extract vendor, amount, date, category.
2. Create a CSV file with columns: Date, Vendor, Amount, Category.
3. Build an HTML dashboard summarizing expenses by category and date.
```

## 요약
- SKILL.md = **front matter(name, description) + body(지시문 본문)**로 구성된 마크다운 파일.
- front matter는 "언제 이 스킬을 쓸지" AI가 판단하는 메타 정보, body는 실제 수행 절차.
- 파일 하나만으로도 스킬이 성립하지만, 실전에서는 body를 훨씬 풍부하고 견고하게 작성해야 한다.
- 일관된 포맷은 AI가 정보를 빠르고 정확하게 찾아 활용하는 데 중요하다.
