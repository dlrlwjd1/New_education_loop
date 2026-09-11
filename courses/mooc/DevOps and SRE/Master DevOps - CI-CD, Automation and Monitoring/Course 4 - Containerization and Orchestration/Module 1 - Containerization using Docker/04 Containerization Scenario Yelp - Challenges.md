# Containerization Scenario Yelp - Challenges

## 개요
- 리뷰 플랫폼 기업 Yelp가 Docker 도입 전 Chef 기반 인프라에서 겪었던 문제를 소개하는 사례 도입부.

## 내용
### Yelp 소개
- 사업체에 대한 크라우드소싱 리뷰를 게시하는 미국 기업 — 사용자들이 비즈니스에 평점과 리뷰를 남기면 다른 사용자들이 이를 참고해 의사결정.
- 2024년 12월 기준 약 3억 800만 개의 사용자 리뷰를 보유, 모든 기기를 합쳐 월평균 약 1억 2,849만 명의 순 방문자를 기록.

### Yelp의 기존 기술 스택 (SeatMe 플랫폼)
- **Frontend** — Backbone.js.
- **Backend** — Django(Python 프레임워크).
- **비동기 작업(메시지 큐)** — Celery(작업 큐)와 RabbitMQ(메시지 브로커)로 프론트엔드-미들웨어-백엔드-데이터베이스 간 메시지 전달.
- **Database** — PostgreSQL.
- **Infrastructure** — AWS(호스팅 플랫폼)와 **Chef**(AWS 리소스 생성을 위한 자동화 도구).

### Pre-Docker(Docker 도입 전) 환경의 문제점
- Yelp는 Test·Staging·Production 환경 관리를 위해 **Chef Recipe**를 사용했으나, 다음과 같은 문제를 겪음:
1. **가파른 학습 곡선** — Chef Recipe가 Ruby로 작성되어 있어, Chef를 모르는 신규 엔지니어가 익히기 어려움.
2. **복잡한 운영 절차** — 권한(permission)·라이브러리 관리, 롤링 업데이트(rolling update)나 롤백(rollback) 수행이 복잡함.
3. **취약한(brittle) 환경** — 환경이 쉽게 깨지고 원래 설정에서 드리프트(drift)되기 쉬움.
4. **중앙 집중식 의존성 관리 부재** — 도구마다 별도의 의존성이 필요했지만 Chef에는 이를 중앙에서 관리하는 기능이 없어, 배포·롤링 업데이트·업그레이드가 자주 깨지고 롤백도 어려웠음.
- 이러한 문제들로 인해 Yelp는 기존 기술 스택에서 벗어나 **Docker 기반 컨테이너**로 모든 것을 전환하고자 함.

## 요약
- Yelp는 Backbone.js·Django·Celery/RabbitMQ·PostgreSQL·AWS+Chef로 구성된 기존 스택에서, Chef Recipe의 Ruby 기반 학습 곡선·복잡한 운영·환경 취약성·의존성 관리 부재라는 문제를 겪었고, 이를 해결하기 위해 Docker 컨테이너화로의 전환을 모색하게 되었다.
