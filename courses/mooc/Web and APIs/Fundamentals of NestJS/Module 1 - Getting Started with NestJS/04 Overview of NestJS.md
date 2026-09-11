# Overview of NestJS

## 개요
- **NestJS**가 무엇인지, Node.js·Express와의 관계 속에서 NestJS가 왜 필요한지를 백엔드 아키텍처 관점에서 설명하는 강의.

## 내용
### 코스 전체 구성 안내
- 이 코스는 두 개의 모듈(module)로 나뉘며, NestJS의 핵심 개념과 실전 구현을 잘 짜인 레슨과 간결한 영상으로 다룬다.
- 모듈 1의 순서: NestJS 개요 → 개발 환경 설정 → 프로젝트 구조 탐색 → 컨트롤러(controllers) 이해 → 라우트 파라미터(route parameters)와 쿼리 스트링(query strings) → 요청(requests)과 응답(responses) 처리.

### NestJS란 무엇인가
- **NestJS**는 백엔드 애플리케이션을 구축하는 데 주로 사용되는 Node 기반 프레임워크(framework)다.
- 특히 API를 구축하는 데 사용되며, 모듈화되고(modular) 확장 가능한(scalable) 코드 구조를 장려한다.
- 모듈(modules)을 중심으로 구성되어 애플리케이션을 재사용 가능한 컴포넌트로 조직할 수 있게 해준다.
- 시장에서 널리 쓰이고 커뮤니티(community)의 지원을 받는 백엔드 서비스 중 하나다.

### 백엔드 아키텍처에서 NestJS의 위치
- **Node.js**는 자바스크립트를 서버에서 실행할 수 있게 해주는 런타임(runtime)으로, 자바스크립트로 백엔드 애플리케이션을 만들고 서버에서 실행할 수 있는 여러 기능을 제공한다. Node.js만으로도 애플리케이션을 처음부터 끝까지(end to end) 구축할 수 있는 능력이 있다.
- 여기에 추가 기능을 더하기 위해 **Express**가 등장했다. Express는 Node 기반 프레임워크로 라우팅(routing), 미들웨어(middleware) 같은 기능을 Node.js에 더해준다.
- 하지만 Express의 한 가지 문제는 가볍다(lightweight)는 것 — 즉, 특정한 아키텍처(architecture)를 따르지 않는다는 점이다.
- 이 단점을 보완하기 위해 **Nest**가 등장했다. Nest는 백엔드 애플리케이션을 구축할 아키텍처를 제공하는 동시에, Express 관련 기능들도 지원하므로 Express에 있는 모든 기능을 NestJS에서도 사용할 수 있다.

### 공식 문서 확인
- NestJS 공식 문서에는 "효율적이고(efficient) 확장 가능한(scalable) Node.js 서버 사이드 애플리케이션을 구축하는 데 사용된다"고 적혀 있다.
- 개요만 보아도 컨트롤러(controllers), 미들웨어(middlewares), 모듈(modules) 등을 어떻게 사용하는지 알 수 있다.
- MongoDB 연결, 캐싱(caching), 직렬화(serialization) 등 다양한 통합 기법(integration techniques)도 존재하며, 이 코스에서 대부분을 다룰 예정이다.

## 예시
(이 강의에는 별도 코드 예시 없음)

## 요약
- NestJS는 Node 기반의 백엔드 프레임워크로, 모듈화되고 확장 가능한 API 구축을 지향한다.
- Node.js는 런타임, Express는 라우팅·미들웨어를 더한 경량 프레임워크이며, Nest는 여기에 명확한 아키텍처를 더한 것이다.
- NestJS는 Express의 기능을 그대로 활용하면서도 구조화된 아키텍처를 제공한다.
- 다음 영상에서는 NestJS 개발 환경 설정 방법을 다룬다.
