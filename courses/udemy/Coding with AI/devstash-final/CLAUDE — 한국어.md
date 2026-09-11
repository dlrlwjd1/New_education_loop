# DevStash

스니펫(snippet), 명령어(command), 프롬프트(prompt), 노트(note), 파일(file), 이미지(image), 링크(link) 및 커스텀 타입을 위한 개발자 지식 허브.

> 이 문서는 원문 [CLAUDE.md](CLAUDE.md)의 한국어 번역본입니다. Claude Code가 실제로 읽는 것은 영어 원문이므로, 원문을 수정하면 이 번역본도 함께 갱신하세요.

## 컨텍스트 파일 (Context Files)

프로젝트의 전체 맥락을 파악하려면 다음 문서를 읽으세요:

- @context/project-overview.md
- @context/coding-standards.md
- @context/ai-interaction.md
- @context/current-feature.md

## 명령어 (Commands)

- **개발 서버(Dev server)**: `npm run dev` (http://localhost:3000 에서 실행)
- **빌드(Build)**: `npm run build`
- **프로덕션 서버(Production server)**: `npm run start`
- **린트(Lint)**: `npm run lint`
- **테스트(Test)**: `npm run test` (단일 실행)
- **테스트 watch**: `npm run test:watch`

## Neon 데이터베이스 (Neon Database)

Neon MCP 도구를 사용할 때:

- **프로젝트(Project):** `devstash` (ID: `rough-wave-01978094`)
- **기본 브랜치(Default Branch):** `development` (ID: `br-snowy-wave-ahmwgmj3`)
- **데이터베이스(Database):** `neondb`

**중요(IMPORTANT):** 모든 데이터베이스 작업은 항상 development 브랜치에서 수행하세요. 명시적으로 지시받지 않는 한, 프로덕션 브랜치(`br-flat-butterfly-ah9tlloi`)에는 절대 쿼리를 실행하지 마세요.

**중요(IMPORTANT):** 커밋 메시지에 Claude를 추가하지 마세요.
