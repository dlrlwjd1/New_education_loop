# Final Project - Overview

> MOOC 미채점 자료(Ungraded Plugin) · [원본 강의](https://www.mooc.org/learn/applications-development-microservices-serverless-openshift/ungradedWidget/jnTCJ/final-project-overview)

## 개요
- Module 5는 **영상 강의가 없는 최종 프로젝트(Final Project) 모듈**이다. 앞선 모듈에서 배운 마이크로서비스와 serverless 배포를 하나의 통합 애플리케이션으로 묶는다.
- 여러 마이크로서비스를 배포해 통합 애플리케이션을 만드는 것이 과제의 목표다.
- 예상 소요 시간: 15분(읽기 자료 기준), 실습 랩 1시간 30분.

## 내용

### 랩 버전 선택 (Option A / Option B)
수강 중인 기술 스택 또는 Professional Certificate(PC) 트랙에 맞춰 프로젝트 버전을 고른다.

| 옵션 | 대상 | 설명 |
|---|---|---|
| **Option A – Python Labs** | 기본값 | 코스의 기본 랩 버전. Python 기반 랩을 수행했다면 이쪽으로 진행한다. |
| **Option B – JavaScript Labs** | JavaScript PC 트랙 | JavaScript Professional Certificate 트랙을 밟는 경우 권장. 이전 랩이 JavaScript 기반이었다면 이쪽으로 진행한다. |

> 코스 진행 중 사용해 온 기술과 일치하는 버전을 선택한다.

### Part A: 백엔드 마이크로서비스 배포 — Product Details, Dealer Pricing

Code Engine CLI를 열고 저장소의 `products_list` 디렉터리에 있는 **Product Details** 백엔드 마이크로서비스를 배포한다.

| 옵션 | 백엔드 저장소 |
|---|---|
| Option A (Python) | `https://github.com/ibm-developer-skills-network/dealer_evaluation_backend.git` |
| Option B (JavaScript) | `https://github.com/ibm-developer-skills-network/wzpvw-dealer_evaluation_backend_js.git` |

이어서 같은 저장소의 `dealer_details` 디렉터리에 있는 **Dealer Pricing** 백엔드 마이크로서비스(Node.js)를 배포한다.

### Part B: Dealer Evaluation 프론트엔드 마이크로서비스 배포

프론트엔드 저장소를 클론한다.

| 옵션 | 프론트엔드 저장소 |
|---|---|
| Option A (Python) | `https://github.com/ibm-developer-skills-network/dealer_evaluation_frontend.git` |
| Option B (JavaScript) | `https://github.com/ibm-developer-skills-network/pcsjq-dealer_evaluation_frontend_js.git` |

1. `index.html` 파일의 placeholder URL을 **Part A에서 얻은 배포 URL**로 교체한다.
2. Dealer Evaluation 프론트엔드 마이크로서비스를 배포하고 홈 페이지가 정상적으로 로드되는지 확인한다.
3. 사용자가 다음을 할 수 있어야 한다.
   - 제품과 딜러를 선택해 가격을 조회
   - 선택한 제품에 대해 **모든 딜러의 가격**을 조회

### 채점 제출
프로젝트를 채점받으려면 스크린샷 몇 장을 찍어 최종 과제(final assignment)의 일부로 제출한다. 필요한 스크린샷의 상세 내용은 다음 항목(`02 Final Project - Scenario and Review Criteria`)에 있다.

## 예시

```bash
# Part A — 백엔드 배포 (Option A: Python 기준)
git clone https://github.com/ibm-developer-skills-network/dealer_evaluation_backend.git
cd dealer_evaluation_backend/products_list
ibmcloud ce application create --name product-details --image <image> --port <port>

# Dealer Pricing (Node.js)
cd ../dealer_details
ibmcloud ce application create --name dealer-pricing --image <image> --port <port>

# Part B — 프론트엔드 배포
git clone https://github.com/ibm-developer-skills-network/dealer_evaluation_frontend.git
cd dealer_evaluation_frontend
# index.html의 placeholder URL을 Part A의 배포 URL로 교체한 뒤 배포
ibmcloud ce application create --name dealer-evaluation --image <image> --port <port>
```

> 위 명령은 Module 4에서 다룬 IBM Cloud Code Engine 배포 흐름을 따른 형태다. 실제 이미지·포트 값은 랩 환경에서 제공된다.

## 요약
- Module 5는 영상 없이 **최종 프로젝트로만 구성된 모듈**이다.
- Python(Option A)과 JavaScript(Option B) 중 자신이 수행해 온 트랙에 맞는 버전을 고른다.
- Part A에서 백엔드 두 개(Product Details, Dealer Pricing)를 Code Engine에 serverless로 배포하고 API 엔드포인트 URL을 확보한다.
- Part B에서 프론트엔드(Dealer Evaluation)의 `index.html`에 그 URL을 넣고 배포해 세 마이크로서비스의 통합을 완성한다.
- 제출은 스크린샷 기반이며 상세 기준은 다음 자료에 있다.
