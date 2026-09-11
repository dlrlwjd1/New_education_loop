# Seed Data Specification

> 원문 [seed-spec.md](seed-spec.md)의 한국어 번역본입니다.

## Overview

개발 및 데모용 샘플 데이터로 데이터베이스를 채우는 시드 스크립트(seed script) (`prisma/seed.ts`)를 생성합니다.

## Requirements

### User

- **Email:** demo@devstash.io
- **Name:** Demo User
- **Password:** 12345678 (bcryptjs로 해싱, 12 rounds)
- **isPro:** false
- **emailVerified:** 현재 날짜

### System Item Types

| Name    | Icon       | Color   |
| ------- | ---------- | ------- |
| snippet | Code       | #3b82f6 |
| prompt  | Sparkles   | #8b5cf6 |
| command | Terminal   | #f97316 |
| note    | StickyNote | #fde047 |
| file    | File       | #6b7280 |
| image   | Image      | #ec4899 |
| link    | Link       | #10b981 |

아이콘은 Lucide React 컴포넌트 이름입니다. 모든 유형은 `isSystem: true` 입니다.

### Collections & Items

#### React Patterns

_Description: Reusable React patterns and hooks_

snippet 3개 (TypeScript):

- 커스텀 훅(Custom hooks) (useDebounce, useLocalStorage 등)
- 컴포넌트 패턴 (Context providers, compound components)
- 유틸리티 함수

#### AI Workflows

_Description: AI prompts and workflow automations_

prompt 3개:

- 코드 리뷰 프롬프트
- 문서 생성
- 리팩터링 지원

#### DevOps

_Description: Infrastructure and deployment resources_

- snippet 1개 (Docker, CI/CD 설정)
- command 1개 (배포 스크립트)
- link 2개 (문서 URL - 실제 URL 사용)

#### Terminal Commands

_Description: Useful shell commands for everyday development_

command 4개:

- Git 작업
- Docker 명령어
- 프로세스 관리
- 패키지 매니저 유틸리티

#### Design Resources

_Description: UI/UX resources and references_

link 4개 (실제 URL 사용):

- CSS/Tailwind 레퍼런스
- 컴포넌트 라이브러리
- 디자인 시스템
- 아이콘 라이브러리
