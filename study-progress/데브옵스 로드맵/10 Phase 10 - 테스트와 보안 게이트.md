# Phase 10 — 테스트와 보안 게이트

- 목표: 파이프라인에 **통과하지 못하면 배포가 막히는 관문**을 만든다. 속도만 있고 안전망이 없는 파이프라인을 고치는 단계다.
- 분량: 약 8~10시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 테스트 레벨(단위·통합·E2E)과 릴리스 주기의 관계를 설명할 수 있다.
- TDD로 코드를 쓰고, 커버리지를 측정하고, mock으로 외부 의존을 끊을 수 있다.
- BDD 시나리오(Gherkin)로 기획 의도를 실행 가능한 테스트로 만들 수 있다.
- DevSecOps가 무엇을 앞당기는 것인지 설명할 수 있다.
- SAST·DAST·SCA를 파이프라인에 붙일 수 있다.
- OWASP Top 10의 주요 항목을 알고 자기 코드에서 확인할 수 있다.
- 비밀값을 저장소·이미지·상태 파일에 남기지 않는 방법을 안다.

> **왜 마지막에 두는가**: 관문은 「무엇을 막을지」가 정해진 다음에 세워야 한다. Phase 7까지 파이프라인이 돌고 Phase 9까지 인프라가 코드가 된 상태에서, 그 흐름의 어디에 관문을 끼울지 판단할 수 있다.
>
> **다만 이 Phase를 미루면 위험은 그동안 계속 쌓인다.** Phase 3에서 CI를 만들 때 최소한 「테스트 실패 시 머지 차단」과 「의존성 취약점 스캔」 두 개는 먼저 걸어 두는 편이 낫다.

## 10-A. 테스트 개념

메인: IBM Test and Behavior Driven Development, Module 1

- [ ] [01 Course Introduction.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%201%20-%20Introduction%20to%20Software%20Testing/01%20Course%20Introduction.md)
- [ ] [02 The Importance of Testing.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%201%20-%20Introduction%20to%20Software%20Testing/02%20The%20Importance%20of%20Testing.md) — **테스트가 왜 필요한가** — 자동 배포가 있으면 테스트의 중요성이 올라간다. 사람이 중간에서 걸러 주지 않기 때문이다
- [ ] [03 Why Developers Don’t Test.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%201%20-%20Introduction%20to%20Software%20Testing/03%20Why%20Developers%20Don%E2%80%99t%20Test.md) — **개발자가 테스트를 안 쓰는 이유** — 조직에서 이 논의를 할 때 필요한 강의
- [ ] [04 Testing Levels and Release Cycle.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%201%20-%20Introduction%20to%20Software%20Testing/04%20Testing%20Levels%20and%20Release%20Cycle.md) — **테스트 레벨과 릴리스 주기** — 어느 테스트를 파이프라인의 어느 단계에 둘지의 근거
- [ ] [05 TDD and BDD.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%201%20-%20Introduction%20to%20Software%20Testing/05%20TDD%20and%20BDD.md) — TDD와 BDD 구분
- [ ] [06 Testing Case Study.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%201%20-%20Introduction%20to%20Software%20Testing/06%20Testing%20Case%20Study.md)

## 10-B. TDD

메인: IBM Test and Behavior Driven Development, Module 2~3

- [ ] [01 Benefits of Test Driven Development.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%202%20-%20Test%20Driven%20Development/01%20Benefits%20of%20Test%20Driven%20Development.md) — 이익
- [ ] [02 Tools for TDD.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%202%20-%20Test%20Driven%20Development/02%20Tools%20for%20TDD.md) — 도구
- [ ] [03 Running Tests with Nose.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%202%20-%20Test%20Driven%20Development/03%20Running%20Tests%20with%20Nose.md)
- [ ] [04 Running Tests with Nose Demo.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%202%20-%20Test%20Driven%20Development/04%20Running%20Tests%20with%20Nose%20Demo.md)
- [ ] [05 Anatomy of a Test Case.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%202%20-%20Test%20Driven%20Development/05%20Anatomy%20of%20a%20Test%20Case.md) — **테스트 케이스의 구조** — 준비·실행·검증
- [ ] [06 Writing Test Assertions.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%202%20-%20Test%20Driven%20Development/06%20Writing%20Test%20Assertions.md) — 단정문(assertion) 작성
- [ ] [07 Writing Test Assertions Demo.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%202%20-%20Test%20Driven%20Development/07%20Writing%20Test%20Assertions%20Demo.md)
- [ ] [08 Test Fixtures.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%202%20-%20Test%20Driven%20Development/08%20Test%20Fixtures.md) — **픽스처(fixture)** — 테스트마다 같은 초기 상태 만들기. 테스트가 서로 간섭하는 문제의 해법
- [ ] [09 Creating an Initial State Using Test Fixtures Demo.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%202%20-%20Test%20Driven%20Development/09%20Creating%20an%20Initial%20State%20Using%20Test%20Fixtures%20Demo.md)

- [ ] [01 Test Coverage.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%203%20-%20Advanced%20Methods%20for%20Test%20Driven%20Development/01%20Test%20Coverage.md) — **커버리지** — 파이프라인 게이트로 쓸 수 있는 숫자. 단, 커버리지 100%가 품질을 뜻하지 않는다는 것도 알아 둔다
- [ ] [02 Running Test Cases with Coverage Demo.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%203%20-%20Advanced%20Methods%20for%20Test%20Driven%20Development/02%20Running%20Test%20Cases%20with%20Coverage%20Demo.md)
- [ ] [03 Factories and Fakes.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%203%20-%20Advanced%20Methods%20for%20Test%20Driven%20Development/03%20Factories%20and%20Fakes.md) — 팩토리와 페이크 — 테스트 데이터 만들기
- [ ] [04 Factories and Fakes Demo.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%203%20-%20Advanced%20Methods%20for%20Test%20Driven%20Development/04%20Factories%20and%20Fakes%20Demo.md)
- [ ] [05 Mocking.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%203%20-%20Advanced%20Methods%20for%20Test%20Driven%20Development/05%20Mocking.md) — **모킹(mocking)** — 외부 API·DB 없이 테스트하기. CI에서 테스트가 도는 전제 조건
- [ ] [06 Mocking with Patch.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%203%20-%20Advanced%20Methods%20for%20Test%20Driven%20Development/06%20Mocking%20with%20Patch.md)
- [ ] [07 Mocking with Mock Objects.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%203%20-%20Advanced%20Methods%20for%20Test%20Driven%20Development/07%20Mocking%20with%20Mock%20Objects.md)
- [ ] [08 Mocking with Mock Objects Demo.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%203%20-%20Advanced%20Methods%20for%20Test%20Driven%20Development/08%20Mocking%20with%20Mock%20Objects%20Demo.md)
- [ ] [09 Practicing Test Driven Development.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%203%20-%20Advanced%20Methods%20for%20Test%20Driven%20Development/09%20Practicing%20Test%20Driven%20Development.md) — 실전 TDD 사이클
- [ ] [10 Practicing Test Driven Development Demo.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%203%20-%20Advanced%20Methods%20for%20Test%20Driven%20Development/10%20Practicing%20Test%20Driven%20Development%20Demo.md)

## 10-C. BDD

메인: IBM Test and Behavior Driven Development, Module 4

- [ ] [01 What is Behavior Driven Development.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%204%20-%20Behavior%20Driven%20Development/01%20What%20is%20Behavior%20Driven%20Development.md) — **BDD** — 기획·개발·QA가 같은 문장을 보게 만드는 방식
- [ ] [02 Benefits of BDD.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%204%20-%20Behavior%20Driven%20Development/02%20Benefits%20of%20BDD.md)
- [ ] [03 BDD Workflow and Gherkin Syntax.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%204%20-%20Behavior%20Driven%20Development/03%20BDD%20Workflow%20and%20Gherkin%20Syntax.md) — **Gherkin 문법** (Given / When / Then). 기획 문서와 테스트가 같은 형식이 되는 지점 → [PM 로드맵](../PM%20로드맵/README.md)의 사용자 스토리와 이어진다
- [ ] [04 Example of BDD.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%204%20-%20Behavior%20Driven%20Development/04%20Example%20of%20BDD.md)
- [ ] [05 Tools for Behavior Driven Development.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%204%20-%20Behavior%20Driven%20Development/05%20Tools%20for%20Behavior%20Driven%20Development.md)
- [ ] [06 Overview of Behave.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%204%20-%20Behavior%20Driven%20Development/06%20Overview%20of%20Behave.md) — Behave 도구
- [ ] [07 Environment Setup.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%204%20-%20Behavior%20Driven%20Development/07%20Environment%20Setup.md)
- [ ] [08 Writing Feature Files.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%204%20-%20Behavior%20Driven%20Development/08%20Writing%20Feature%20Files.md) — 피처 파일 작성
- [ ] [09 Selenium.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%204%20-%20Behavior%20Driven%20Development/09%20Selenium.md) — Selenium — 브라우저 E2E

## 10-D. DevSecOps — 보안을 앞으로 당기기

메인: IBM Application Security, Module 1

- [ ] [02 Course Introduction.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/02%20Course%20Introduction.md)
- [ ] [03 Security by Design.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/03%20Security%20by%20Design.md) — **Security by Design** — 나중에 붙이는 보안이 왜 비싼가
- [ ] [04 What Is DevSecOps.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/04%20What%20Is%20DevSecOps.md) — **DevSecOps의 정의** — 보안 검사를 파이프라인 안으로 옮긴다는 뜻
- [ ] [05 Summary and Highlights - Introduction to DevSecOps.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/05%20Summary%20and%20Highlights%20-%20Introduction%20to%20DevSecOps.md)
- [ ] [12 Vulnerability Scanning and Threat Modeling.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/12%20Vulnerability%20Scanning%20and%20Threat%20Modeling.md) — **취약점 스캔과 위협 모델링**
- [ ] [13 Threat Monitoring.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/13%20Threat%20Monitoring.md) — 위협 모니터링 → **개발운영 로드맵**
- [ ] [14 Security Concepts and Terminology.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/14%20Security%20Concepts%20and%20Terminology.md) — 용어 정리
- [ ] [16 Summary and Highlights - Inspecting Security in Application Development.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/16%20Summary%20and%20Highlights%20-%20Inspecting%20Security%20in%20Application%20Development.md)

네트워크 보안 기초 (필요한 만큼)

- [ ] [01 IBM Product Spotlight - HashiCorp Vault.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/01%20IBM%20Product%20Spotlight%20-%20HashiCorp%20Vault.md) — HashiCorp Vault 소개 — 10-G의 시크릿 관리와 이어진다
- [ ] [06 The OSI Model.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/06%20The%20OSI%20Model.md) — 학습일 2026-09-04
- [ ] [07 Securing Layers for Application Development.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/07%20Securing%20Layers%20for%20Application%20Development.md) — **애플리케이션 계층별 보안** — 쿠버네티스에서 무엇을 어느 계층에서 막을지
- [ ] [08 Security Patterns.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/08%20Security%20Patterns.md)
- [ ] [09 TLS-SSL.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/09%20TLS-SSL.md) — **TLS/SSL** — Ingress에 HTTPS를 붙일 때 필요 ([Phase 6-C](06%20Phase%206%20-%20%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%20%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%82%B9%20%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80%20%EC%84%A4%EC%A0%95.md))
- [ ] [10 What Is OpenSSL.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/10%20What%20Is%20OpenSSL.md) — OpenSSL — 인증서 다루기
- [ ] [11 Summary and Highlights - Understanding the Role of Network Security.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/11%20Summary%20and%20Highlights%20-%20Understanding%20the%20Role%20of%20Network%20Security.md)
- [ ] [15 Getting Started with Network and Port Scanning with Nmap.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/15%20Getting%20Started%20with%20Network%20and%20Port%20Scanning%20with%20Nmap.md)

## 10-E. 파이프라인에 붙이는 보안 검사

메인: IBM Application Security, Module 2

**이 묶음이 Phase 10의 실전 핵심이다.** 각 검사가 파이프라인의 어느 단계에 들어가는지 대응시키며 본다.

- [ ] [01 Introduction to Security Testing and Mitigation Strategies.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%202%20-%20Security%20Testing%20and%20Mitigation%20Strategies/01%20Introduction%20to%20Security%20Testing%20and%20Mitigation%20Strategies.md)
- [ ] [02 Static Analysis.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%202%20-%20Security%20Testing%20and%20Mitigation%20Strategies/02%20Static%20Analysis.md) — **정적 분석(SAST)** — 코드를 실행하지 않고 검사. CI의 빌드 전 단계
- [ ] [03 Dynamic Analysis.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%202%20-%20Security%20Testing%20and%20Mitigation%20Strategies/03%20Dynamic%20Analysis.md) — **동적 분석(DAST)** — 돌고 있는 앱을 공격해 보기. 스테이징 배포 후 단계
- [ ] [04 Summary and Highlights - Introduction to Security Testing and Mitigation Strategies.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%202%20-%20Security%20Testing%20and%20Mitigation%20Strategies/04%20Summary%20and%20Highlights%20-%20Introduction%20to%20Security%20Testing%20and%20Mitigation%20Strategies.md)
- [ ] [05 Code Review.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%202%20-%20Security%20Testing%20and%20Mitigation%20Strategies/05%20Code%20Review.md) — **코드 리뷰** — 자동화로 대체되지 않는 부분
- [ ] [06 Vulnerability Analysis.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%202%20-%20Security%20Testing%20and%20Mitigation%20Strategies/06%20Vulnerability%20Analysis.md) — 취약점 분석
- [ ] [07 Demo Video - Evaluating Vulnerability Analysis.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%202%20-%20Security%20Testing%20and%20Mitigation%20Strategies/07%20Demo%20Video%20-%20Evaluating%20Vulnerability%20Analysis.md)
- [ ] [08 Runtime Protection.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%202%20-%20Security%20Testing%20and%20Mitigation%20Strategies/08%20Runtime%20Protection.md) — **런타임 보호** → 운영 영역
- [ ] [09 Software Component Analysis.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%202%20-%20Security%20Testing%20and%20Mitigation%20Strategies/09%20Software%20Component%20Analysis.md) — **소프트웨어 구성 분석(SCA)** — 의존성 라이브러리의 알려진 취약점. **가장 값싸고 효과가 큰 게이트다. 이것부터 붙인다**
- [ ] [10 Continuous Security Analysis.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%202%20-%20Security%20Testing%20and%20Mitigation%20Strategies/10%20Continuous%20Security%20Analysis.md) — **지속적 보안 분석** — 한 번 검사가 아니라 파이프라인마다
- [ ] [11 Summary and Highlights - Implementing Key Analysis in Applications.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%202%20-%20Security%20Testing%20and%20Mitigation%20Strategies/11%20Summary%20and%20Highlights%20-%20Implementing%20Key%20Analysis%20in%20Applications.md)

## 10-F. OWASP Top 10

메인: IBM Application Security, Module 3

- [ ] [01 Intro to OWASP (Top 10) Security Vulnerabilities.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%203%20-%20OWASP%20Top%2010%20Vulnerabilities/01%20Intro%20to%20OWASP%20%28Top%2010%29%20Security%20Vulnerabilities.md) — **OWASP Top 10 개요**
- [ ] [02 OWASP Top 1-3.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%203%20-%20OWASP%20Top%2010%20Vulnerabilities/02%20OWASP%20Top%201-3.md) — 1~3위
- [ ] [03 OWASP Top 4-6.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%203%20-%20OWASP%20Top%2010%20Vulnerabilities/03%20OWASP%20Top%204-6.md)
- [ ] [04 OWASP Top 7-10.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%203%20-%20OWASP%20Top%2010%20Vulnerabilities/04%20OWASP%20Top%207-10.md)
- [ ] [05 Discover Code Vulnerabilities with Snyk (SAST) Free Tool.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%203%20-%20OWASP%20Top%2010%20Vulnerabilities/05%20Discover%20Code%20Vulnerabilities%20with%20Snyk%20%28SAST%29%20Free%20Tool.md) — **Snyk (SAST 무료 도구)** — 지금 바로 저장소에 붙일 수 있다
- [ ] [06 Demo Video - Snyk (SAST) Free Tool.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%203%20-%20OWASP%20Top%2010%20Vulnerabilities/06%20Demo%20Video%20-%20Snyk%20%28SAST%29%20Free%20Tool.md)
- [ ] [07 Summary and Highlights - Introducing OWASP Top 10.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%203%20-%20OWASP%20Top%2010%20Vulnerabilities/07%20Summary%20and%20Highlights%20-%20Introducing%20OWASP%20Top%2010.md)
- [ ] [08 SQL Injections.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%203%20-%20OWASP%20Top%2010%20Vulnerabilities/08%20SQL%20Injections.md) — **SQL 인젝션**
- [ ] [09 Other Types of SQL Injection Attacks.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%203%20-%20OWASP%20Top%2010%20Vulnerabilities/09%20Other%20Types%20of%20SQL%20Injection%20Attacks.md)
- [ ] [10 Demo Video - Example of an SQL Injection.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%203%20-%20OWASP%20Top%2010%20Vulnerabilities/10%20Demo%20Video%20-%20Example%20of%20an%20SQL%20Injection.md)
- [ ] [11 Cross Site Scripting.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%203%20-%20OWASP%20Top%2010%20Vulnerabilities/11%20Cross%20Site%20Scripting.md) — XSS
- [ ] [12 Storing Secrets Securely.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%203%20-%20OWASP%20Top%2010%20Vulnerabilities/12%20Storing%20Secrets%20Securely.md) — **시크릿을 안전하게 저장하기** — [Phase 7-D의 21번](07%20Phase%207%20-%20%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%20%EB%B0%B0%ED%8F%AC%20%EC%8B%A4%EC%A0%84.md)에서 미뤄 둔 문제의 답
- [ ] [13 Summary and Highlights - Diving Deeper into OWASP.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%203%20-%20OWASP%20Top%2010%20Vulnerabilities/13%20Summary%20and%20Highlights%20-%20Diving%20Deeper%20into%20OWASP.md)

## 10-G. 코드·의존성·환경

메인: IBM Application Security, Module 4

- [ ] [01 Code Practices.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%204%20-%20Code%20Development%20Practices/01%20Code%20Practices.md) — 안전한 코딩 관례
- [ ] [02 Dependencies.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%204%20-%20Code%20Development%20Practices/02%20Dependencies.md) — **의존성 관리** — 10-E의 SCA와 짝
- [ ] [03 Secure Development Environment.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%204%20-%20Code%20Development%20Practices/03%20Secure%20Development%20Environment.md) — **개발 환경 보안** — 개발자 노트북과 CI 러너도 공격 대상이다
- [ ] [04 Summary and Highlights - Code Development Practices.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%204%20-%20Code%20Development%20Practices/04%20Summary%20and%20Highlights%20-%20Code%20Development%20Practices.md)
- [ ] [05 What's Next - Explore Hashicorp Vault.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%204%20-%20Code%20Development%20Practices/05%20What%27s%20Next%20-%20Explore%20Hashicorp%20Vault.md) — HashiCorp Vault 탐색 — 시크릿을 중앙에서 관리하는 방식
- [ ] [06 Congratulations and Next Steps.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%204%20-%20Code%20Development%20Practices/06%20Congratulations%20and%20Next%20Steps.md)
- [ ] [07 Thanks from the Course Team.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%204%20-%20Code%20Development%20Practices/07%20Thanks%20from%20the%20Course%20Team.md)

함께 보기: API를 노출할 때 (선택)

[Protecting and Managing APIs](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/) 강좌는 모듈 아래에 Lesson 계층이 한 단계 더 있어 여기서는 묶음 단위로만 적는다. Ingress로 API를 외부에 열었다면(Phase 6-C) 아래 두 묶음이 직접적으로 관련된다.

- [ ] [Module 1 / Lesson 1 - Authentication Methods](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/) — 인증 방식 선택
- [ ] [Module 1 / Lesson 2 - Authorization and Access Control](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%202%20-%20Authorization%20and%20Access%20Control/) — 권한 부여
- [ ] [Module 1 / Lesson 3 - Securing APIs Against Threats](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/) — **10-F의 OWASP를 API 관점에서**
- [ ] [Module 1 / Lesson 4 - Encryption and Compliance](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%204%20-%20Encryption%20and%20Compliance/) — 암호화와 규제 대응
- [ ] [Module 2 / Lesson 1 - API Gateways](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%201%20-%20API%20Gateways/) — **Ingress와 API 게이트웨이의 역할 차이**
- [ ] [Module 2 / Lesson 2 - Monitoring and Analytics](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%202%20-%20Monitoring%20and%20Analytics/) — → **개발운영 로드맵**
- [ ] [Module 3 / 02 The Case of the Compromised API Key](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%203%20-%20Course%20Wrap-Up%20and%20Assessment/02.The%20Case%20of%20the%20Compromised%20API%20Key%20%28Dialogue%29.md) — 키 유출 사례. 10-G와 같은 문제

## 10-H. 파이프라인 게이트 설계

Phase 3·7의 파이프라인에 관문을 끼운다. 권장 순서와 배치는 다음과 같다.

| 파이프라인 단계 | 게이트 | 실패 시 | 근거 강의 |
|---|---|---|---|
| 커밋 전 (로컬) | 린터·포맷터 | 커밋 차단 | [Phase 2-E](02%20Phase%202%20-%20Git%EA%B3%BC%20%ED%98%91%EC%97%85%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C.md) Git hooks |
| PR 생성 | 단위 테스트 | 머지 차단 | 10-B |
| PR 생성 | 커버리지 하락 검사 | 경고 또는 차단 | 10-B (Module 3 / 01) |
| PR 생성 | 의존성 취약점 스캔 (SCA) | 심각도 기준 차단 | 10-E (09) |
| PR 생성 | 정적 분석 (SAST) | 심각도 기준 차단 | 10-E (02) |
| 이미지 빌드 후 | 컨테이너 이미지 스캔 | 차단 | [Phase 4-E](04%20Phase%204%20-%20%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88%20Docker.md) (20) |
| 스테이징 배포 후 | E2E / BDD 시나리오 | 운영 배포 차단 | 10-C |
| 스테이징 배포 후 | 동적 분석 (DAST) | 심각도 기준 차단 | 10-E (03) |
| 운영 배포 시 | 헬스 프로브 통과 | 자동 롤백 | [Phase 5-G](05%20Phase%205%20-%20%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%20%EA%B8%B0%EC%B4%88.md) |

> **전부 한 번에 붙이지 않는다.** 붙이는 순서는 「값 ÷ 비용」 순이다. SCA → 단위 테스트 차단 → SAST → 이미지 스캔 → E2E → DAST. 앞의 두 개만 있어도 사고의 상당 부분이 막힌다.

## 산출물 과제

1. **테스트 게이트 1개** — 단위 테스트 실패 시 머지가 막히도록 설정한다. (Phase 3 산출물과 겹치면 그것으로 인정한다.)
2. **SCA 게이트 1개** — 의존성 취약점 스캔을 붙이고, 심각도 기준(예: high 이상은 차단)을 정한다. **기준을 정하는 것이 도구 설치보다 중요하다.**
3. **BDD 시나리오 1개** — 담당 기능 하나를 Given/When/Then으로 쓰고 실행 가능한 테스트로 만든다.
4. **시크릿 정리** — 다음을 점검하고 위반을 고친다.
   - [ ] 저장소 히스토리에 키가 남아 있지 않다
   - [ ] 컨테이너 이미지 레이어에 키가 없다
   - [ ] Terraform 상태 파일이 공개 위치에 없다
   - [ ] CI 로그에 비밀값이 출력되지 않는다
5. **게이트 설계표 채우기** — 10-H의 표를 자기 파이프라인 기준으로 다시 쓰고, 아직 없는 항목에 도입 순서를 붙인다.

## 다음 단계

로드맵 완주. 이어서 볼 방향:

- **배포한 시스템을 지켜보고 장애에 대응하기** → **개발운영 로드맵**
- **앱 자체를 만드는 쪽** → **리액트 네이티브 로드맵**
- **무엇을 만들지 정하는 쪽** → [PM 로드맵](../PM%20로드맵/README.md)
