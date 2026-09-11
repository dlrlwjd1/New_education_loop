# Prisma + Neon PostgreSQL Setup

> 원문 [database-spec.md](database-spec.md)의 한국어 번역본입니다.

## 개요 (Overview)

Prisma ORM와 Neon PostgreSQL 데이터베이스(database)를 설정합니다.

## 요구사항 (Requirements)

- Neon PostgreSQL(서버리스, serverless)을 사용합니다
- project-overview.md의 데이터 모델(data models)을 기반으로 초기 스키마(schema)를 생성합니다 (이는 계속 발전할 예정입니다)
- NextAuth 모델(Account, Session, VerificationToken)을 포함합니다
- 적절한 인덱스(indexes)와 캐스케이드 삭제(cascade deletes)를 추가합니다

## 참고 자료 (References)

- 초기 데이터 모델: `@context/project-overview.md`
- Prisma 문서: https://prisma.io/docs (Prisma 7에는 호환성이 깨지는 변경사항(breaking changes)이 있으니 최신 버전을 가져오세요)

## 참고 사항 (Notes)

작업용 개발 브랜치(development branch)를 두고 이를 DATABASE_URL에 지정하며, 그다음 프로덕션 브랜치(production branch)를 둡니다. 따라서 우리는 명시적으로 지정되지 않는 한 항상 마이그레이션(migration)을 생성하고 절대 직접 push 하지 않습니다.

중요! Prisma 7을 사용하세요. 여기에는 호환성이 깨지는 변경사항(breaking changes)이 몇 가지 있습니다. https://www.prisma.io/docs/orm/more/upgrade-guides/upgrading-versions/upgrading-to-prisma-7 에 있는 업그레이드 가이드 전체를 읽고 변경 내용을 충분히 파악하세요.

또한 여기 있는 설정 가이드도 살펴볼 수 있습니다 - https://www.prisma.io/docs/getting-started/prisma-orm/quickstart/prisma-postgres
