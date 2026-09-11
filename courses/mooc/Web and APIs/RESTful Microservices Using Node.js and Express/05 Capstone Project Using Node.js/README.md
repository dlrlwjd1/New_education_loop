# Capstone Project Using Node.js

**Course URL:** [mooc.org/learn/capstone-project-using-nodejs](https://www.mooc.org/learn/capstone-project-using-nodejs)

NIIT의 `RESTful Microservices Using Node.js and Express` 전문과정 5번째(마지막) 강좌. 전문과정에서 배운 Node.js·Express·REST·데이터베이스·마이크로서비스 지식을 **Meal Drop** 음식 배달 서비스의 백엔드 마이크로서비스 3개로 통합 구현하는 캡스톤이다.

- 구성: 1개 모듈 · 영상 2개
- 수집 상태: 영상 2개 Transcript 정리 완료 (2026-09-06)
- 제외: 읽기 자료 2개(`Building Backend Application using NodeJs`, `Best Practices to Develop Backend Application using Node.JS`)와 채점 프로그래밍 과제 1개(`Meal Drop`)의 정답 및 제출

## 강의 목록

### Module 1 - Capstone Project using Node.js
1. [Context Setting](Module%201%20-%20Capstone%20Project%20using%20Node.js/01%20Context%20Setting.md) — 캡스톤의 취지, 풀스택 개발자의 정의, 애자일 반복 개발
2. [Project Brief](Module%201%20-%20Capstone%20Project%20using%20Node.js/02%20Project%20Brief.md) — Meal Drop 요구사항, 마이크로서비스 3개 구축 단계, 설계 접근법과 제출 규칙

## 핵심 개념 요약

- **과제**: Meal Drop(10개 이상 대도시, 수백 개 레스토랑 파트너)의 소비자·레스토랑 파트너·배달 담당자용 앱 3개를 위한 백엔드 마이크로서비스 3개를 만들고 컨테이너화한다.
- **구축 단계**: 서비스별 프로젝트 3개 → 서비스별 별도 DB 배포(MongoDB 권장) → JWT 인가 + OpenAPI 명세 준수 → RabbitMQ로 주문 데이터 동기화
- **마일스톤**: 사용자 등록 → 로그인 → 레스토랑·음식 미리보기 → 장바구니 추가 → 주문
- **권장 순서**: Pencil로 프로토타입 → 데이터 모델 → 마이크로서비스 설계(API 게이트웨이용 Discovery Service) → 동기·비동기 통신 설계 → 테스트 코드(Mocha·Chai) → 마지막에 구현
- **설계 원칙**: SRP(단일 책임 원칙), DRY. 설계 문서는 소스 코드 밖 별도 폴더에 둔다.
- **제출**: `node_modules` 제외한 zip + 프로젝트 목표·기술 스택·실행 명령을 담은 `README.md`

> 2026-09-06: 이 강좌는 이전에 `01 Capstone Guide.md` 통합 노트 하나(1.5KB)만 있었다. MOOC 커리큘럼 기준으로 영상 2개의 Transcript를 정리해 강의별 노트로 대체했다.
