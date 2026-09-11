# Final Project - Scenario and Review Criteria

> MOOC 미채점 자료(Ungraded Plugin) · [원본 강의](https://www.mooc.org/learn/applications-development-microservices-serverless-openshift/ungradedWidget/rgRcx/final-project-scenario-and-review-criteria)

## 개요
- 최종 프로젝트의 **시나리오(scenario)** 와 **평가 기준(review criteria)** 을 정리한 자료다.
- 예상 소요 시간: 15분.
- 총 배점: 15점.

## 내용

### 프로젝트 시나리오 — CheckNBuy

제품 비교(product comparison) 회사인 **CheckNBuy**에 고용되어, 이 회사 애플리케이션의 API 엔드포인트를 배포하고 제공하는 상황이다. 애플리케이션은 각각 고유한 목적을 가진 여러 마이크로서비스로 구성된다.

**백엔드 마이크로서비스 2개**

| 마이크로서비스 | 구현 언어 | 역할 |
|---|---|---|
| Product Details | Python | 제품 상세 정보 제공 |
| Dealer Pricing | Node.js | 딜러별 가격 정보 제공 |

두 마이크로서비스를 **serverless(Code Engine)** 로 배포하고 각각의 API 엔드포인트에 접근할 수 있는 URL을 확보하는 것이 첫 번째 과제다. 두 마이크로서비스의 코드는 서로 다른 두 저장소로 제공된다.

**프론트엔드 마이크로서비스 1개**

추가로 **Dealer Evaluation** 프론트엔드 마이크로서비스 저장소를 클론한다. 이 프론트엔드는 Product Details와 Dealer Pricing이 제공하는 API 엔드포인트를 사용해, 최종 사용자가 다음을 할 수 있게 한다.

- 제품 검색
- 딜러 정보 조회
- 가격 비교

모든 마이크로서비스를 배포한 뒤 배포 URL로 프론트엔드 애플리케이션에 접속하고, **최종 애플리케이션의 스크린샷을 제출해 마이크로서비스들이 매끄럽게 통합되었음을 보인다.**

### 평가 기준 — 15점

프로젝트 산출물(deliverables)은 다음 두 가지 방식 중 하나로 제출한다.

**Option 1: AI-Graded Submission and Evaluation**
- AI 도구로 리다이렉트되어 산출물(URL, 터미널 출력, 코드 스니펫, 스크린샷 등)을 업로드한다.
- AI가 생성한 점수가 진행 페이지(progress page)에 자동으로 반영된다.

**Option 2: Peer-Graded Submission and Evaluation**
- My Submission 섹션을 통해 산출물(URL, 터미널 출력, 코드 스니펫, 스크린샷 등)을 업로드한다.
- 동료(peer) 또는 AI grader가 검토한다.

> 코스 팀은 채점이 더 빠른 **Option 1을 권장**한다. 문제가 있거나 접근이 불가능하면 Option 2를 사용한다. 채점 문제가 발생하면 Discussion Forums로 코스 팀에 문의한다.

**공통 요구사항**
- 제출하는 이미지는 **샘플 스크린샷이 아니어야 한다** — 본인이 실제로 배포한 결과물의 스크린샷이어야 한다.

## 예시

제출해야 하는 산출물의 형태:

```text
1. Product Details 마이크로서비스 배포 URL       (Code Engine 애플리케이션 URL)
2. Dealer Pricing 마이크로서비스 배포 URL        (Code Engine 애플리케이션 URL)
3. Dealer Evaluation 프론트엔드 배포 URL
4. 프론트엔드 홈 페이지 스크린샷
5. 제품·딜러 선택 후 가격이 표시된 화면 스크린샷
6. 선택한 제품의 전체 딜러 가격 비교 화면 스크린샷
```

## 요약
- 시나리오: 제품 비교 회사 CheckNBuy를 위해 마이크로서비스 3개(백엔드 2 + 프론트엔드 1)를 배포한다.
- Product Details(Python)와 Dealer Pricing(Node.js)을 Code Engine에 serverless로 배포해 API 엔드포인트 URL을 얻는다.
- Dealer Evaluation 프론트엔드가 그 두 API를 호출해 제품 검색·딜러 조회·가격 비교를 제공한다.
- 배점은 15점이며, AI 채점(Option 1, 권장)과 동료 채점(Option 2) 중 선택해 제출한다.
- 제출 스크린샷은 반드시 직접 배포한 실제 화면이어야 한다.

---

## 이 저장소에서의 진행 상태

이 모듈은 **채점 대상 과제(graded assessment)로만 완료되는 모듈**이다. 이 저장소는 학업 정직성 정책상 채점 과제를 건너뛰므로, 위 두 미채점 자료(Overview / Scenario)까지만 정리하고 실제 제출은 수행하지 않는다. Module 5에 영상 강의가 하나도 없다는 점도 함께 확인했다 (2026-09-03 기준).
