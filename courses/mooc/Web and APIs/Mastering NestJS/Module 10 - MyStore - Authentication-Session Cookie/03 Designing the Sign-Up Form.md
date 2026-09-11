# Designing the Sign-Up Form

## 개요
- Add Product 템플릿의 폼(form) 스타일을 재사용해 회원가입 폼(sign up form)을 만들고, 부트스트랩 그리드(grid) 시스템으로 입력 필드 레이아웃과 비밀번호 표시/숨김 아이콘 자리를 배치하는 강의.

## 내용
### 폼 구조와 입력 필드
- Add Product 템플릿에서 폼(form)과 폼 스타일링 링크를 복사해 붙여 넣는다.
- 제목(title)을 "Sign Up"으로 바꾸고, `action` 속성에서 라우트(route)는 일단 제거한다(추후 단계에서 지정할 예정).
- 입력 필드는 총 세 개다. 사용자 이름(user name, 즉 이메일), 비밀번호(password), 비밀번호 확인(confirm password).
- 각 필드의 `input`의 `name`과 `type` 속성을 필드에 맞게 변경하고, 라벨(label)을 "Username"으로 업데이트한다.
- `span` 태그를 추가해 값으로 "email"을 넣고, 부트스트랩 클래스 `fs-6`, `text-secondary`, `fst-italic`을 적용한다.
- 나머지 필드도 같은 방식으로 업데이트하고, 버튼(button) 텍스트는 "Sign Up"으로 한다.

### 그리드(grid) 시스템으로 필드 배치
- 입력 필드들을 세로로 열(column)처럼 정렬하기 위해 그리드 시스템을 조정한다.
- 비밀번호 필드를 감싸는 `div`에 `row` 클래스를 주고, 그 안쪽 `div`에는 `col-12` 클래스를 줘서 전체 너비를 차지하게 한다.
- 비밀번호 확인(confirm password) 필드도 동일하게 `div`로 감싸고 `row` 클래스를 적용하며, 내부 `div`에는 `col-12`를 준다.
- 이메일(email) `div`에도 마찬가지로 `col-12`를 적용한다.

### 비밀번호 표시/숨김 버튼 자리 배치
- 비밀번호와 비밀번호 확인 필드를 `row`로 감싼 이유는, 같은 줄에 비밀번호 표시/숨김(show-hide) 버튼을 배치하기 위함이다.
- `mt-2 mb-3 col-2`, `btn` 클래스를 가진 새로운 `div`를 만들고, 기존 입력 필드는 `col-10`으로 조정한다. 라벨(label) 태그는 이 `div` 바깥으로 뺀다.
- 이 `div` 안에 아이콘(icon) 태그를 넣고 `bi` 클래스(아이콘 폰트 클래스)를 적용하며, 비밀번호 확인 필드에도 동일하게 적용한다.
- 결과를 확인하면 회원가입 화면(interface)이 완성된다.

## 예시
```html
<!-- signup.ejs 폼 구조 (재구성) -->
<form>
  <div class="row">
    <div class="col-12">
      <label>Username <span class="fs-6 text-secondary fst-italic">email</span></label>
      <input type="email" name="username" class="form-control" />
    </div>
  </div>

  <div class="row">
    <label>Password</label>
    <div class="col-10">
      <input type="password" name="password" class="form-control" />
    </div>
    <div class="mt-2 mb-3 col-2 btn">
      <i class="bi"></i>
    </div>
  </div>

  <div class="row">
    <label>Confirm Password</label>
    <div class="col-10">
      <input type="password" name="confirmPassword" class="form-control" />
    </div>
    <div class="mt-2 mb-3 col-2 btn">
      <i class="bi"></i>
    </div>
  </div>

  <button type="submit" class="btn btn-primary">Sign Up</button>
</form>
```

## 요약
- Add Product 폼 스타일을 재사용해 username(email), password, confirm password 세 필드를 가진 회원가입 폼을 만들었다.
- 부트스트랩 그리드(`row`, `col-12`, `col-10`, `col-2`)로 필드를 세로로 배치하고, 비밀번호 필드 옆에 표시/숨김 아이콘 버튼 자리를 확보했다.
- 다음 강의에서는 이 아이콘 버튼에 실제 비밀번호 표시/숨김(show-hide password) 기능을 구현한다.
