# Implementing Show/Hide Password Functionality

## 개요
- 회원가입 폼(sign up form)의 비밀번호(password), 비밀번호 확인(confirm password) 입력란에 아이콘 클릭으로 텍스트를 보이거나 숨기는 show/hide 기능을 순수 자바스크립트(vanilla JavaScript)의 DOM 조작으로 구현하는 강의.

## 내용
### 입력 요소에 id 부여
- 비밀번호 입력 박스에 `id="passwordIp"`(password input), 비밀번호 확인 입력 박스에 `id="confirmPasswordIp"`를 지정한다.
- `script` 태그를 만들어 두 입력 박스의 참조(reference)를 변수에 저장한다. `passwordInput`은 `document.getElementById('passwordInput')`, `confirmPasswordInput`은 `document.getElementById('confirmPasswordInput')`으로 가져온다.
- 텍스트를 보이게 하려면 `type` 속성을 `text`로, 숨기려면 `password`로 바꾸면 된다.

### 공통 토글(toggle) 함수 설계
- `toggleDisplay`라는 공통 함수를 만들고 `event` 인자를 받는다.
- 어떤 입력 박스를 다룰지와 설정할 값을 결정하기 위해 아이콘의 `name` 속성을 활용한다.
- 각 입력 박스에 `name` 속성을 지정하고, 아이콘의 `onclick` 속성에 `toggleDisplay` 함수를 연결하며 `this` 객체를 인자로 전달한다.
- `this`를 넘기는 이유는, `event` 객체(`e`)를 통해 클릭된 아이콘 요소의 클래스(class)와 `name` 속성을 바로 변경할 수 있기 때문이다. 그렇지 않으면 매번 `getElementById`로 다시 요소를 찾아야 해서 번거롭다.

### switch 문으로 4가지 상태 처리
- 함수 안에서 `let selectedToggle = e.getAttribute('name')`으로 클릭된 아이콘의 현재 상태를 가져온다.
- `switch (selectedToggle)` 문으로 4가지 케이스를 정의한다: `password hidden`, `password visible`, `confirm password hidden`, `confirm password visible`.
- **password hidden** 케이스: `passwordInput`의 `type`을 `text`로 바꾸고, 아이콘의 클래스(`e.className`)를 다른 `bi` 아이콘 클래스로 변경하며, 아이콘의 `name` 속성을 `password visible`로 설정한다.
- **password visible** 케이스: 반대로 `type`을 `password`로 되돌리고, 아이콘 클래스도 원래 `bi` 아이콘으로 되돌리며, `name`을 다시 `password hidden`으로 설정한다.
- 저장 후 확인하면, 문자열을 입력했을 때 처음엔 보이지 않다가 아이콘을 클릭하면 비밀번호가 보이는 토글이 정상 동작한다.
- 동일한 로직을 confirm password 입력란에도 그대로 적용해, 두 필드 모두 정상적으로 토글되는 것을 확인한다.

## 예시
```html
<!-- 입력 필드에 id, name 부여 -->
<input type="password" id="passwordInput" name="passwordHidden" class="form-control" />
<i class="bi bi-eye-slash" onclick="toggleDisplay(this)"></i>

<input type="password" id="confirmPasswordInput" name="confirmPasswordHidden" class="form-control" />
<i class="bi bi-eye-slash" onclick="toggleDisplay(this)"></i>
```

```html
<script>
  let passwordInput = document.getElementById('passwordInput');
  let confirmPasswordInput = document.getElementById('confirmPasswordInput');

  function toggleDisplay(e) {
    let selectedToggle = e.getAttribute('name');

    switch (selectedToggle) {
      case 'password hidden':
        passwordInput.type = 'text';
        e.className = 'bi bi-eye';
        e.setAttribute('name', 'password visible');
        break;
      case 'password visible':
        passwordInput.type = 'password';
        e.className = 'bi bi-eye-slash';
        e.setAttribute('name', 'password hidden');
        break;
      case 'confirm password hidden':
        confirmPasswordInput.type = 'text';
        e.className = 'bi bi-eye';
        e.setAttribute('name', 'confirm password visible');
        break;
      case 'confirm password visible':
        confirmPasswordInput.type = 'password';
        e.className = 'bi bi-eye-slash';
        e.setAttribute('name', 'confirm password hidden');
        break;
    }
  }
</script>
```

## 요약
- 비밀번호와 비밀번호 확인 입력 박스에 각각 `id`를 부여하고 `document.getElementById`로 참조를 저장했다.
- 아이콘 클릭 시 `this`를 넘기는 공통 `toggleDisplay` 함수를 만들어, `event` 객체의 `name` 속성으로 현재 상태를 판별하고 `switch` 문으로 4가지 케이스(password hidden/visible, confirm password hidden/visible)를 처리했다.
- `this`(event 객체)를 활용하면 아이콘의 클래스와 `name` 속성을 직접 바꿀 수 있어 `getElementById`를 반복 호출하지 않아도 된다.
- 두 입력란 모두 show/hide 토글이 정상 동작함을 확인했다.
