# Introduction to NestJS

## 개요
- NestJS가 어떤 프레임워크인지, 어떤 철학과 특징을 가지고 있는지 개괄적으로 소개하는 강의.

## 내용
### NestJS란 무엇인가
- **NestJS**는 견고하고(robust) 확장 가능한(scalable) 서버 사이드 애플리케이션을 만들기 위한 강력한 Node.js 프레임워크다.
- NestJS는 핵심적으로 **타입스크립트(TypeScript)**를 사용하며, 이 덕분에 프로젝트에서 강력하고 정적으로 타입이 지정된(statically typed) 기반을 가질 수 있다는 점이 이 프레임워크가 선호되는 주된 이유 중 하나다.
- 기본적으로 NestJS는 **Express.js** 위에 구축(builds upon)되어 있다. 즉 Express.js와 통합(integrated)되어 있어 Express.js와 동일한 개념(concepts)과 기능(functionalities)을 그대로 따르고 제공한다.
- 그러면서도 **Fastify**나 **GraphQL** 등 다른 기반과도 유연하게(flexible) 연동할 수 있어 빠른 개발(rapid development)을 돕고 가독성 있고(readable) 의미 있는(meaningful) 코드를 작성할 수 있게 해준다.
- 이런 특징 덕분에 REST API나 GraphQL API를 구현하는 작업이 NestJS에서는 매우 쉽다(very easy).

### 모듈형 아키텍처와 핵심 기능
- NestJS는 **Angular**에서 영감을 받은(inspired by) 모듈형 아키텍처(modular architecture)를 따르며, 코드를 관리하기 쉽고(manageable) 재사용 가능한(reusable) 컴포넌트 단위로 조직화(organize)하기 쉽게 해준다.
- 의존성 주입(**dependency injection**), 느슨한 결합(**loose coupling**) 등 다양한 기능들이 있어 풀스택(fullstack) 웹 애플리케이션을 구축하고 유지보수(maintain)하는 데 큰 도움을 준다.
- NestJS는 **MVC(Model-View-Controller)** 패턴을 사용하기 때문에 복잡한 풀스택 웹 애플리케이션도 쉽게 구축하고 유지보수할 수 있다.

### 다른 프레임워크와의 비교 및 부가 기능
- **Laravel**이나 **Ruby on Rails**와 같은 다른 프레임워크들처럼, NestJS도 데이터베이스 작업이나 보안(security) 처리 등을 원활하게(seamlessly) 수행할 수 있는 다양한 내장(built-in) 모듈들을 포함하고 있다.
- 단순한 프레임워크 이상의 매우 유용한 기능들을 제공하기 때문에, NestJS는 "슈퍼파워를 가진 Node.js(Node.js but with super powers)"로 비유할 수 있다.

## 예시
```
(이 강의에는 별도 코드 예시 없음)
```

## 요약
- NestJS는 TypeScript 기반으로 강력한 타입 안정성을 제공하는 Node.js 서버 사이드 프레임워크다.
- 기본적으로 Express.js 위에 구축되어 있지만 Fastify, GraphQL 등과도 유연하게 연동 가능하다.
- Angular에서 영감을 받은 모듈형 아키텍처를 따르며, 의존성 주입과 느슨한 결합을 지원한다.
- MVC 패턴을 기반으로 하며 데이터베이스, 보안 등을 다루는 다양한 내장 모듈을 제공한다.
- 다음 섹션부터 본격적으로 NestJS가 제공하는 기능들을 실습을 통해 살펴본다.
