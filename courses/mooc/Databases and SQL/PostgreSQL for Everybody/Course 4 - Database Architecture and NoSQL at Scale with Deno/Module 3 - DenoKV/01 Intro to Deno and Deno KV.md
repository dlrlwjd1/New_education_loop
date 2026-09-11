# Intro to Deno and Deno KV

## 개요
- Node.js의 창시자 Ryan Dahl이 Deno를 만든 배경, Cloudflare 같은 엣지(edge) 컴퓨팅·CDN의 발전 과정, 그리고 Deno KV(내장 분산 키-값 데이터베이스)를 이 강좌에서 다루는 이유를 설명하는 강의

## 내용
### Node.js에서 Deno로: 창시자의 재출발
- Node.js(Ryan Dahl, 2009년 설립)는 서버에서 JavaScript를 실행할 수 있게 해 큰 성공을 거뒀지만, 초창기 설계 결정(타입스크립트 지원 미흡, 아무것도 내장되지 않은 "빈 껍데기"라 방대한 서드파티 의존성 필요)이 발목을 잡았다. Dahl은 2018년 이름을 거꾸로 뒤집은 "Deno"를 새로 시작하며, 표준 라이브러리를 대폭 내장하고 TypeScript/JavaScript를 모두 기본 지원하도록 설계했다.

### CDN·엣지 컴퓨팅의 발전 (Cloudflare 사례)
- 정적 자산을 사용자와 가까운 곳에 캐싱해 해저 케이블 같은 값비싼 장거리 대역폭을 절약하려는 시도(Akamai 등)에서 출발해, Cloudflare가 이를 무료로 제공하며 널리 퍼졌다.
- Cloudflare는 전 세계 분산 서버 덕분에 분산 서비스 거부(DDoS) 공격도 효과적으로 완화할 수 있었고, 이후 정적 자산뿐 아니라 소규모 JavaScript 코드("Workers")까지 실행할 수 있게 확장되었다 — 강사는 개인 서버를 Cloudflare VPN 뒤에 두어 직접 공격받지 않도록 운영하는 사례를 소개한다.

### Deno Deploy와 Deno KV
- Deno는 Cloudflare Workers와 유사한 개념의 상용 호스팅 서비스 "Deno Deploy"를 통해 수익을 창출하며 오픈소스 프로젝트를 지속 가능하게 만들려 한다. 소규모 개발자용 계정은 영구 무료다.
- 핵심은 Deno Deploy의 모든 배포 인스턴스에 MongoDB 같은 JSON 기반 키-값 데이터베이스(Deno KV)가 자동으로 딸려온다는 점이다 — SQL이 아니라 최종적 일관성(eventual consistency)을 갖는 분산 데이터베이스다. 자체 메시징/알림 인프라(KV Watch)도 내장되어 있어 Redis와 유사한 역할도 겸한다.
- 강사는 여전히 영속적 데이터에는 전통적인 관계형 백엔드(Postgres/MySQL)가 필요하다고 보며, Deno KV는 실시간·캐시성 데이터에 적합하다고 평가한다.

## 예시
- (코드 예시 없음 — 배경 소개 강의)

## 요약
- Deno는 Node.js의 창시자가 초기 설계의 한계를 극복하기 위해 새로 만든 프로젝트로, 표준 라이브러리 내장과 TS/JS 동시 지원이 특징이다.
- Cloudflare 같은 엣지 컴퓨팅 서비스의 발전이 Deno Deploy 같은 서버리스 배포 모델의 배경이 되었다.
- Deno KV는 Deno Deploy에 기본 내장된 최종적 일관성 기반의 분산 키-값 데이터베이스이며, 영속 데이터에는 여전히 관계형 DB가 필요하다.
