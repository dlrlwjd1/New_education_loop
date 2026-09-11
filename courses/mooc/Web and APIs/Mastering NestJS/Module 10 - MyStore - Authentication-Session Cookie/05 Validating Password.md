# Validating Password

## 개요
- 회원가입 폼에서 비밀번호(password)와 비밀번호 확인(confirm password) 값이 서로 일치하는지 검증(validate)하는 로직을 자바스크립트로 구현하는 강의.

## 내용
### 비밀번호 일치 검증 함수
- 이미 확보해 둔 `passwordInput`, `confirmPasswordInput`의 참조(reference)를 이용해, 두 값을 비교하고 그 결과에 따라 `true` 또는 `false`를 반환하는 함수를 만든다.
- `validatePassword`라는 함수를 정의하고, `passwordInput.value === confirmPasswordInput.value` 조건이 참이면 `true`를, 그렇지 않으면 `false`를 반환한다.
- 이 함수는 폼이 제출(submit)될 때 호출되도록 폼의 `onsubmit` 속성에 연결한다.

### 오류 메시지(helper text) 표시
- 비밀번호가 일치하지 않을 때 입력 박스 아래에 안내 문구(helper text)가 나타나야 한다.
- `id="helperText"`, 클래스 `text-danger`를 가진 `div`를 만든다.
- 비밀번호 값이 일치하면 이 `div`의 `innerHTML`을 빈 문자열로 설정하고, 일치하지 않으면 "Passwords do not match"라는 메시지를 넣는다.
- 저장 후 서로 다른 비밀번호 값을 입력하고 폼을 제출하면 "Passwords do not match" 메시지가 나타나는 것을 확인한다.

### 입력 중 실시간 검증
- 비밀번호 검증이 폼 제출 시점뿐 아니라 사용자가 타이핑하는 동안에도 일어나야 한다.
- 비밀번호 필드와 비밀번호 확인 필드 모두에 `onkeyup` 이벤트를 추가해 `validatePassword` 함수를 호출하도록 한다.
- 다시 확인하면, 비밀번호를 입력하는 즉시 검증 메시지가 나타나고, 값이 일치하는 순간 메시지가 사라지며, 일치하지 않으면 계속 메시지가 표시된다.

## 예시
```html
<input type="password" id="passwordInput" name="passwordHidden" onkeyup="validatePassword()" class="form-control" />
<input type="password" id="confirmPasswordInput" name="confirmPasswordHidden" onkeyup="validatePassword()" class="form-control" />

<div id="helperText" class="text-danger"></div>
```

```html
<form onsubmit="return validatePassword()">
  <!-- 입력 필드들 -->
</form>
```

```html
<script>
  function validatePassword() {
    const helperText = document.getElementById('helperText');

    if (passwordInput.value === confirmPasswordInput.value) {
      helperText.innerHTML = '';
      return true;
    } else {
      helperText.innerHTML = 'Passwords do not match';
      return false;
    }
  }
</script>
```

## 요약
- `passwordInput.value`와 `confirmPasswordInput.value`를 비교하는 `validatePassword` 함수를 만들어 폼 제출(`onsubmit`) 시 호출했다.
- 값이 일치하지 않으면 `id="helperText"`, `text-danger` 클래스를 가진 `div`에 "Passwords do not match" 메시지를 표시하고, 일치하면 메시지를 비운다.
- 두 입력 필드에 `onkeyup` 이벤트를 추가해, 타이핑하는 동안에도 실시간으로 검증 메시지가 나타나고 사라지도록 했다.
