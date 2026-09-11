# Hands-On Lab: Add Security to Your RESTful Service

> MOOC 실습 자료(Ungraded App Item) · [원본 강의](https://www.mooc.org/learn/devops-capstone-project/ungradedLti/PyvkW/hands-on-lab-add-security-to-your-restful-service)

## 개요
- Sprint 2의 두 번째 스토리("Need to add security headers and CORS policies")를 구현하는 60분짜리 실습 — Flask-Talisman으로 보안 헤더를, Flask-Cors로 CORS 정책을 TDD로 추가한다.

## 내용
### 목표
- Sprint Backlog에서 다음 스토리를 가져와 작업 → 보안 헤더를 위한 Flask-Talisman 추가 → CORS 정책 수립을 위한 Flask-Cors 추가 → 변경 사항 결과 확인 → CI 테스트 통과 후 pull request와 병합 → 스토리를 "Done"으로 이동.

### Exercise 1 — 다음 스토리 착수
```markdown
Need to add security headers and CORS policies
As a service provider
I need my service to use security headers and CORS policies
So that my web site is not vulnerable to CORS attacks

Assumptions
* Flask-Talisman will be used for security headers
* Flask-Cors will be used to establish cross-origin resource sharing (CORS) policies

Acceptance Criteria
Given the site is secured
When a REST API request is made
Then secure headers and a CORS policy should be returned
```

### Exercise 2 — 현재 동작 관찰(Talisman 추가 전)
- `honcho start`로 마이크로서비스를 5000번 포트에서 실행한 뒤, 다른 터미널에서 `curl -I localhost:5000`으로 현재 응답 헤더를 확인 — Talisman 추가 전에는 `Server`, `Date`, `Content-Type`, `Content-Length` 정도만 있고 보안 헤더는 없음.

### Exercise 3 — 테스트 케이스 작성(TDD)
- Flask-Talisman은 REST API 클라이언트가 HTTPS 프로토콜을 사용하도록 강제 — 테스트하려면 Flask 테스트 클라이언트가 `environ_overrides` 속성으로 `https`를 사용하도록 해야 함.
- `tests/test_routes.py`의 `BASE_URL` 정의 아래에 다음을 추가:
  ```python
  HTTPS_ENVIRON = {'wsgi.url_scheme': 'https'}
  ```
- 루트 URL(`/`)을 `environ_overrides=HTTPS_ENVIRON`으로 호출해 다음 헤더와 값이 있는지 단언하는 테스트 작성:
  ```python
  def test_security_headers(self):
      """It should return security headers"""
      response = self.client.get('/', environ_overrides=HTTPS_ENVIRON)
      self.assertEqual(response.status_code, status.HTTP_200_OK)
      headers = {
          'X-Frame-Options': 'SAMEORIGIN',
          'X-Content-Type-Options': 'nosniff',
          'Content-Security-Policy': 'default-src \'self\'; object-src \'none\'',
          'Referrer-Policy': 'strict-origin-when-cross-origin'
      }
      for key, value in headers.items():
          self.assertEqual(response.headers.get(key), value)
  ```
- `nosetests`를 실행하면 아직 헤더가 없어 `AssertionError`로 실패 — TDD의 "실패하는 테스트 먼저" 단계 확인.

### Exercise 4 — 보안 헤더 추가(Flask-Talisman)
- `requirements.txt`에 `Flask-Talisman` 추가 후 `pip install -r requirements.txt`.
- `service/__init__.py`에서 Talisman을 임포트하고 Flask 앱 생성 이후 인스턴스화:
  ```python
  from flask_talisman import Talisman
  # ...
  talisman = Talisman(app)
  ```
- `nosetests tests/test_routes.py`를 실행하면 새로 추가한 보안 헤더 테스트만 통과하고 나머지는 실패 — Talisman이 기본적으로 모든 요청에 HTTPS를 강제하기 때문(다음 Exercise에서 해결).

### Exercise 5 — 강제 HTTPS 비활성화(테스트 환경용)
- Talisman 인스턴스에 `force_https = False`를 설정해 테스트 시 강제 HTTPS를 끔.
- `tests/test_routes.py`에서 `service`로부터 `talisman`을 임포트하고 `setUpClass()`에 추가:
  ```python
  from service import talisman
  # ...
  @classmethod
  def setUpClass(cls):
      """Run once before all tests"""
      # ... 다른 코드 ...
      talisman.force_https = False
  ```
- `nosetests tests/test_routes.py`를 다시 실행하면 모든 테스트가 통과 — `git commit -am "Added security headers"`로 커밋.

### Exercise 6 — 보안 헤더 검증
- `honcho start`로 서비스를 다시 실행하고 `curl -I localhost:5000`으로 확인하면, 이번엔 `302 FOUND`(200이 아님)와 함께 `Location: https://localhost:5000`, `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Content-Security-Policy: default-src 'self'; object-src 'none'`, `Referrer-Policy: strict-origin-when-cross-origin` 등 새 보안 헤더가 추가됨을 확인.
- `curl`은 기본적으로 http를 사용하므로 서비스가 `302`와 `Location` 헤더로 브라우저에게 `https://localhost:5000/`로 리다이렉트하라고 알려주는 것 — https용 엔드포인트가 없어 실제로 호출할 수는 없지만 새 보안 헤더가 작동함은 확인 가능.

### Exercise 7 — CORS 정책 추가(Flask-Cors)
- 루트 URL(`/`)에 `Access-Control-Allow-Origin: *` 헤더가 있는지 단언하는 테스트 작성:
  ```python
  def test_cors_security(self):
      """It should return a CORS header"""
      response = self.client.get('/', environ_overrides=HTTPS_ENVIRON)
      self.assertEqual(response.status_code, status.HTTP_200_OK)
      self.assertEqual(response.headers.get('Access-Control-Allow-Origin'), '*')
  ```
- `nosetests`로 실패 확인 → `requirements.txt`에 `Flask-Cors` 추가 후 설치 → `service/__init__.py`에서 CORS를 임포트하고 Talisman 인스턴스 생성 이후 추가:
  ```python
  from flask_cors import CORS
  # ...
  CORS(app)
  ```
- 전체 단위 테스트를 실행해 모두 통과하는지 확인한 뒤 `git commit -am "Added CORS headers"`로 커밋.

### Exercise 8 — CORS 헤더 검증
- 서비스를 다시 실행하고 `curl -I localhost:5000`으로 확인하면, 이전 결과에 더해 `Access-Control-Allow-Origin: *` 헤더가 추가된 것을 확인 — 애플리케이션 요구에 따라 CORS 정책을 더 구체적으로 설정해 이 헤더 값을 바꿀 수도 있음.

### Exercise 9 — Pull Request 생성
- `git status`로 로컬 커밋 완료를 확인 → 원격 브랜치로 푸시 → pull request 생성 — 이는 저장소에 이제 활성화된 GitHub Action(CI)을 트리거함. CI 테스트를 통과하면 병합.

## 요약
- 이 랩은 TDD 절차(HTTPS 환경을 흉내 내는 `environ_overrides` 사용, 먼저 실패하는 테스트 작성)를 따라 `service/__init__.py`에 `Talisman(app)`을 추가해 `X-Frame-Options`·`Content-Security-Policy` 등 보안 헤더를 적용하고 테스트 환경에서는 `talisman.force_https = False`로 HTTPS 강제를 끄며, 이어서 `CORS(app)`을 추가해 `Access-Control-Allow-Origin` 헤더를 적용함으로써 Sprint 2의 두 스토리(CI 자동화, 보안 강화)를 모두 완료하고 Sprint 3(Kubernetes 배포)으로 넘어갈 준비를 마친다.
