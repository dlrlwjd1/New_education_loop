# Specification Quality Checklist: 브리핑 — 오늘의 학습 현황 한눈에 보기

**Purpose**: Validate specification completeness and quality before proceeding to planning
**Created**: 2026-09-23
**Feature**: [spec.md](../spec.md)

## Content Quality

- [x] No implementation details (languages, frameworks, APIs)
- [x] Focused on user value and business needs
- [x] Written for non-technical stakeholders
- [x] All mandatory sections completed

## Requirement Completeness

- [x] No [NEEDS CLARIFICATION] markers remain
- [x] Requirements are testable and unambiguous
- [x] Success criteria are measurable
- [x] Success criteria are technology-agnostic (no implementation details)
- [x] All acceptance scenarios are defined
- [x] Edge cases are identified
- [x] Scope is clearly bounded
- [x] Dependencies and assumptions identified

## Feature Readiness

- [x] All functional requirements have clear acceptance criteria
- [x] User scenarios cover primary flows
- [x] Feature meets measurable outcomes defined in Success Criteria
- [x] No implementation details leak into specification

## Notes

- 웹전환_기능명세_및_개발가이드.md F01절과 `.claude/skills/브리핑/SKILL.md`를 원본 근거로 사용했다. 명세 문서 7장의 "확정" 항목(브리핑 필터, 평균 진행률, GitHub 연동 제외 등)을 그대로 반영해 [NEEDS CLARIFICATION] 없이 작성했다.
- 검토 중 발견한 사실: 002(영속 저장소)의 `listReviewNeededItems`는 자료 파싱 오류("형식 확인 필요") 조회용이며, 복습큐(내학습/복습큐.md, 간격 반복 다음 복습일)와는 무관한 별개 개념이다. 001/002 모두 `내학습/`을 다룬 적이 없다.
- **2026-09-23 clarify 세션**: 위 발견 사실에 따라 두 가지를 확정했다 — (1) 복습큐 파싱·영속화는 이 기능의 범위에서 제외하고 별도 선행 기능(001·002 패턴)으로 분리하며 이 기능은 그 조회 인터페이스만 사용한다(FR-019, Assumptions), (2) 브리핑 스냅샷은 SQLite뿐 아니라 매 실행마다 `내학습/브리핑로그.md` 형식 파일에도 함께 기록한다(FR-020~021, SC-007). SQLite를 스펙에 명시한 것은 002 spec.md의 선례(구현전_결정사항.md 7.1에서 이미 확정된 저장소 기술이라 재논의하지 않음)를 따른 것이며 "구현 세부사항 없음" 항목 위반이 아니다.
- **2026-09-23 번호 재정렬**: 처음에 `004-briefing`으로 만들었으나, 위 clarify에서 복습큐 데이터 이전 작업이 별도 선행 기능으로 분리되어야 한다는 것이 확정되면서 그 선행 기능이 `004`, 이 브리핑 기능은 의존하는 쪽이라 `005`로 디렉터리를 옮겼다(`specs/005-briefing/`).
