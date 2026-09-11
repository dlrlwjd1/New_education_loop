# Hands-On Lab: Develop a RESTful Service Using Test Driven Development (TDD)

> MOOC 실습 자료(Ungraded App Item) · [원본 강의](https://www.mooc.org/learn/devops-capstone-project/ungradedLti/L7s49/hands-on-lab-develop-a-restful-service-using-test-driven-development-tdd)

## 개요
- [[05 Hands-on Lab - Agile Planning using Github|Agile Planning]] 랩에서 세운 계획을 따라, 좋은 TDD 기법으로 Customer Account 마이크로서비스의 REST API(Create·Read·Update·Delete·List)를 실제로 구현하고 95% 이상의 테스트 커버리지를 달성하는 90분짜리 핵심 실습.

## 내용
### 목표
- 칸반 보드의 계획을 따라 "있었으면 하는" 코드에 대한 테스트 케이스를 먼저 작성하고, 그 테스트 케이스를 통과시키는 REST API 엔드포인트 여러 개를 만들고, Nose와 Coverage로 단위 테스트를 수행해 95% 코드 커버리지를 달성하고, 스프린트 리뷰를 열어 REST 서비스가 작동함을 시연.

### 개발 환경 초기화
- Cloud IDE의 랩 환경은 일시적(ephemeral)이므로 언제든 삭제될 수 있음 — 모든 변경 사항은 반드시 자신의 GitHub 저장소에 푸시해야 새 랩 환경이 만들어질 때마다 복원 가능. GitHub Personal Access Token(`repo`, `write` 권한, 60일 만료)을 미리 생성해 Git이 비밀번호를 물을 때 사용.
- 환경을 초기화하는 3가지 명령:
  ```bash
  git clone https://github.com/{your_github_account}/devops-capstone-project.git
  cd devops-capstone-project
  bash ./bin/setup.sh
  exit
  ```
- 새 터미널을 열어야 Python 가상 환경이 활성화됨 — `which python`과 `python --version`(Python 3.9대)으로 검증.

### 프로젝트 개요
- Customer Account 마이크로서비스는 고객을 create, read, update, delete, list할 수 있는 잘 구성된 REST API를 갖춰야 함. 이미 데이터베이스 모델과 계정 생성(Create) 엔드포인트가 있는 Flask 기반 REST API가 [[05 Hands-on Lab - Agile Planning using Github]]에서 만든 저장소에 준비되어 있음.

### REST API 가이드라인(테스트 케이스 작성 기준)
| 동작 | 메서드 | 반환 코드 | 본문 | URL 엔드포인트 |
|---|---|---|---|---|
| List | GET | 200_OK | 계정 배열 `[{...}]` | `GET /accounts` |
| Create | POST | 201_CREATED | 계정 JSON `{...}` | `POST /accounts` |
| Read | GET | 200_OK | 계정 JSON `{...}` | `GET /accounts/{id}` |
| Update | PUT | 200_OK | 계정 JSON `{...}` | `PUT /accounts/{id}` |
| Delete | DELETE | 204_NO_CONTENT | `""` | `DELETE /accounts/{id}` |

- 추가로 필요한 HTTP 상태 코드: `200 HTTP_200_OK`(성공), `201 HTTP_201_CREATED`(리소스 생성됨), `204 HTTP_204_NO_CONTENT`(추가 내용 없음), `404 HTTP_404_NOT_FOUND`(리소스를 찾을 수 없음), `405 HTTP_405_METHOD_NOT_ALLOWED`(엔드포인트에 허용되지 않는 HTTP 메서드), `409 HTTP_409_CONFLICT`(요청에 충돌 있음) — 모두 `service/common/status.py`에 정의되어 이미 임포트되어 있음.

### Exercise 1 — 첫 사용자 스토리 구현("Set up the development environment")
- Sprint Backlog 맨 위 스토리("Set up the development environment", `technical debt` 라벨)를 In Progress로 옮기고 자신에게 배정.
- `dev-setup`이라는 새 브랜치를 만듦: `git checkout -b dev-setup`
- `setup.cfg`의 `[nosetests]` 항목에 다음 플래그를 추가해, `nosetests` 명령만으로 색상 출력과 커버리지가 함께 동작하도록 설정:
  ```ini
  [nosetests]
  verbosity=2
  with-spec=1
  spec-color=1
  with-coverage=1
  cover-erase=1
  cover-package=service
  ```
- `nosetests`를 실행해 파일이 올바르게 읽히는지 확인 → `git commit -am "added nose arguments"` → `git push --set-upstream origin dev-setup` → GitHub에서 pull request를 만들어 main에 병합 → 브랜치 삭제 → 칸반 보드에서 스토리를 Done으로 이동.

### 참고 — 각 스토리의 RESTful 동작
- **List** — `Account.all()`로 모든 계정을 dict 리스트로 반환하고 `HTTP_200_OK` 반환. 계정이 없어도 `404`가 아니라 빈 리스트(`[]`)와 `200_OK`를 반환해야 함.
- **Read** — `account_id`를 받아 `Account.find()`로 조회. 없으면 `HTTP_404_NOT_FOUND`. 찾으면 `serialize()`를 호출해 dict와 `HTTP_200_OK`를 반환.
- **Update** — `account_id`를 받아 `Account.find()`로 조회. 없으면 `404`. 찾으면 `request.get_json()`을 넘겨 `deserialize()`를 호출하고, `update()`로 데이터베이스를 갱신한 뒤 `serialize()` 결과와 `HTTP_200_OK`를 반환.
- **Delete** — `account_id`를 받아 `Account.find()`로 조회. 없으면 아무 것도 하지 않음. 찾으면 `delete()`를 호출해 삭제하고, 빈 본문(`""`)과 `HTTP_204_NO_CONTENT`를 반환.

### Exercise 2 — Flask로 REST API 구현(TDD 워크플로우)
- 공통 작업 흐름: 다음 순위 스토리 선택 → 브랜치 생성(`git checkout main && git pull && git branch -d {old} && git checkout -b {new}`) → 올바른 동작을 단언(assert)하는 테스트 케이스 작성 → 테스트를 통과시키는 코드 작성 → 커버리지 95% 이상 유지 → pull request → 칸반 보드를 Done으로 갱신 → 스크린샷으로 진행 기록.
- **Read 예시 — 테스트 케이스**(`tests/test_routes.py`):
  ```python
  def test_get_account(self):
      """It should Read a single Account"""
      account = self._create_accounts(1)[0]
      resp = self.client.get(
          f"{BASE_URL}/{account.id}", content_type="application/json"
      )
      self.assertEqual(resp.status_code, status.HTTP_200_OK)
      data = resp.get_json()
      self.assertEqual(data["name"], account.name)
  ```
- **Read 예시 — 구현 코드**(`service/routes.py`):
  ```python
  @app.route("/accounts/<int:account_id>", methods=["GET"])
  def get_accounts(account_id):
      """Reads an Account"""
      app.logger.info("Request to read an Account with id: %s", account_id)
      account = Account.find(account_id)
      if not account:
          abort(status.HTTP_404_NOT_FOUND, f"Account with id [{account_id}] could not be found.")
      return account.serialize(), status.HTTP_200_OK
  ```
- 커버리지 95% 유지를 위해 "찾지 못한 경우"도 테스트해야 함 — 존재하지 않는 계정 ID(`0`)로 조회해 `404`가 반환되는지 확인하는 `test_account_not_found` 테스트를 추가.
- 각 스토리("Read an account", "List all accounts", "Update an account", "Delete an account")가 완료될 때마다 칸반 보드 스크린샷으로 진행을 기록하며, Read → List → Update → Delete 순서로 반복.

### Hints and Solutions — List / Update / Delete 구현
- **List 테스트/구현**:
  ```python
  def test_get_account_list(self):
      """It should Get a list of Accounts"""
      self._create_accounts(5)
      resp = self.client.get(BASE_URL)
      self.assertEqual(resp.status_code, status.HTTP_200_OK)
      data = resp.get_json()
      self.assertEqual(len(data), 5)

  @app.route("/accounts", methods=["GET"])
  def list_accounts():
      """List all Accounts"""
      app.logger.info("Request to list Accounts")
      accounts = Account.all()
      account_list = [account.serialize() for account in accounts]
      app.logger.info("Returning [%s] accounts", len(account_list))
      return jsonify(account_list), status.HTTP_200_OK
  ```
- **Update 테스트/구현**:
  ```python
  def test_update_account(self):
      """It should Update an existing Account"""
      test_account = AccountFactory()
      resp = self.client.post(BASE_URL, json=test_account.serialize())
      self.assertEqual(resp.status_code, status.HTTP_201_CREATED)
      new_account = resp.get_json()
      new_account["name"] = "Something Known"
      resp = self.client.put(f"{BASE_URL}/{new_account['id']}", json=new_account)
      self.assertEqual(resp.status_code, status.HTTP_200_OK)
      updated_account = resp.get_json()
      self.assertEqual(updated_account["name"], "Something Known")

  @app.route("/accounts/<int:account_id>", methods=["PUT"])
  def update_accounts(account_id):
      """Update an Account"""
      app.logger.info("Request to update an Account with id: %s", account_id)
      account = Account.find(account_id)
      if not account:
          abort(status.HTTP_404_NOT_FOUND, f"Account with id [{account_id}] could not be found.")
      account.deserialize(request.get_json())
      account.update()
      return account.serialize(), status.HTTP_200_OK
  ```
- **Delete 테스트/구현**:
  ```python
  def test_delete_account(self):
      """It should Delete an Account"""
      account = self._create_accounts(1)[0]
      resp = self.client.delete(f"{BASE_URL}/{account.id}")
      self.assertEqual(resp.status_code, status.HTTP_204_NO_CONTENT)

  @app.route("/accounts/<int:account_id>", methods=["DELETE"])
  def delete_accounts(account_id):
      """Delete an Account"""
      app.logger.info("Request to delete an Account with id: %s", account_id)
      account = Account.find(account_id)
      if account:
          account.delete()
      return "", status.HTTP_204_NO_CONTENT
  ```
- **오류 핸들러 테스트** — 지원하지 않는 HTTP 메서드를 호출하면 `405`가 반환되는지 확인:
  ```python
  def test_method_not_allowed(self):
      """It should not allow an illegal method call"""
      resp = self.client.delete(BASE_URL)
      self.assertEqual(resp.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
  ```

### Exercise 3 — REST 서비스 실행
```bash
flask db-create   # 데이터베이스 새로 고침
make run          # 새 데이터베이스로 서비스 시작
```
- 웹 브라우저에서 "Launch Account Service" 버튼으로 애플리케이션을 실행해 서비스가 정상적으로 응답하는지 확인.

### Exercise 4 — 스프린트 리뷰(curl로 REST 호출 데모)
- 서비스가 실행 중인 상태에서 두 번째 Bash 터미널을 열어 `curl` 명령으로 각 기능을 시연:
  ```bash
  # Create
  curl -i -X POST http://127.0.0.1:5000/accounts \
    -H "Content-Type: application/json" \
    -d '{"name":"John Doe","email":"john@doe.com","address":"123 Main St.","phone_number":"555-1212"}'

  # List
  curl -i -X GET http://127.0.0.1:5000/accounts

  # Read
  curl -i -X GET http://127.0.0.1:5000/accounts/1

  # Update
  curl -i -X PUT http://127.0.0.1:5000/accounts/1 \
    -H "Content-Type: application/json" \
    -d '{"name":"John Doe","email":"john@doe.com","address":"123 Main St.","phone_number":"555-1111"}'

  # Delete
  curl -i -X DELETE http://127.0.0.1:5000/accounts/1
  ```
- 제품 소유자와 이해관계자에게 Create·List·Read·Update·Delete가 모두 예상대로 동작함을 시연한 뒤, Zenhub 칸반이면 Done → Closed로 옮기고, GitHub 칸반이면 Done으로 옮긴 스토리가 GitHub의 기본 기능으로 자동으로 닫히는지 확인.

### 마무리 — 스프린트 회고(Retrospective)
- 캡스톤의 첫 스프린트를 완료한 뒤, 실제 Agile 팀이라면 반드시 진행할 **스프린트 회고**를 스스로 수행할 것을 권장 — 무엇이 잘 됐는지, 무엇이 잘못됐는지, 다음 스프린트에서 무엇을 바꿀지 성찰하고 기록해두는 것이 성과 향상에 중요.

## 요약
- 이 랩은 개발 환경을 초기화한 뒤, REST API 가이드라인 표(List/Create/Read/Update/Delete의 메서드·반환 코드·엔드포인트)를 기준으로 TDD 워크플로우(브랜치 생성 → 실패하는 테스트 작성 → 테스트를 통과시키는 Flask 라우트 구현 → 95% 커버리지 유지 → PR 병합 → 칸반 보드 갱신)를 Read·List·Update·Delete 각각에 반복 적용해 Customer Account 마이크로서비스의 전체 CRUD REST API를 완성하고, `curl`로 각 기능을 시연하는 스프린트 리뷰로 Sprint 1을 마무리한다.
