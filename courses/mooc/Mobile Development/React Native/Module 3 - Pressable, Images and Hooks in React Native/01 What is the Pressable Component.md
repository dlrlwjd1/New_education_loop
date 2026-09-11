# What is the Pressable Component?

## 개요
- Pressable은 사용자의 프레스 상호작용(press interaction)을 감지하는 React Native의 코어 컴포넌트(core component)다.
- Pressable로 자식 컴포넌트(child component)를 감싸면 해당 영역이 눌릴 수 있는(pressable) 요소가 된다.
- `onPressIn`, `onPressOut`, `onLongPress` 등의 내장 메서드로 프레스의 여러 단계를 구분할 수 있다.
- HitRect로 터치가 인식되는 범위를 넓혀 사용성(usability)을 높일 수 있다.

## 내용

### Pressable 컴포넌트란
- 텍스트, 스크롤 뷰, 텍스트 입력 등 기본 컴포넌트만으로는 앱이 정적이므로, 사용자가 물리적으로 상호작용할 수 있는 요소가 필요하다.
- Pressable은 비교적 최근에 React Native 라이브러리에 추가된 코어 컴포넌트로, 사용자의 다양한 프레스 상호작용 단계를 감지한다. 자식 컴포넌트에서 발생하는 프레스도 감지한다.
- Pressable 컴포넌트는 자식 요소를 감싸는(wrap) 방식으로 사용하며, 감싸진 자식이 사용자가 누를 수 있는 대상이 된다.

### 주요 내장 메서드
- **onPressIn**: 프레스가 활성화될 때 호출된다. 사용자의 손가락이 Pressable로 감싼 요소를 누르는 즉시 실행된다.
- **onPressOut**: 프레스 제스처가 비활성화될 때, 즉 손가락이 Pressable 요소에서 떨어질 때 호출된다.
- **onLongPress**: 사용자가 손가락을 500밀리초(ms) 이상 누르고 있으면 트리거된다.
- **delayLongPress** prop으로 롱 프레스로 인정되는 시간을 커스터마이즈할 수 있다. 이를 통해 일반 프레스와 롱 프레스를 구분할 수 있다.

### Pressable의 표현 방식
- 사용자가 앱에서 마주치는 Pressable 요소는 버튼(Button)일 수도 있지만, 텍스트(Text), 아이콘(Icon) 등 어떤 형태로든 표현할 수 있다.
- 눌리는 영역(pressable area)의 모양과 느낌은 전적으로 개발자가 자식 컴포넌트로 디자인한다.

### 로컬 상태(local state)와의 결합 패턴
- Little Lemon 앱에서는 사용자가 메뉴에 접근할 수 있는 View Menu 버튼을 Pressable로 만든다.
- 버튼 클릭, 사용자 상호작용, 텍스트 입력 등은 React 컴포넌트에 로컬(local)한 동작이므로, 그 상태도 보통 컴포넌트 내부에 로컬로 저장한다.
- View Menu를 누르면 `onPress` 메서드가 호출되어 showMenu 상태를 true로 설정하고, 이 로컬 상태로 메뉴를 화면에 표시할지 숨길지 추적한다.

### HitRect
- HitRect는 Pressable의 선택적(optional) 기능으로, 요소로부터 얼마나 떨어진 곳까지 터치를 인식할지 정의한다.
- 손가락은 특히 작은 화면에서 정확하지 않으므로, 잘못 누르는 것을 줄여주는 유용한 옵션이다.

## 예시

Pressable의 기본 구조 (강의 설명 기반 재구성):

```jsx
<Pressable onPress={() => setShowMenu(true)} style={styles.button}>
  <Text style={styles.buttonText}>View Menu</Text>
</Pressable>
```

- Pressable이 텍스트 자식 컴포넌트를 감싸서 누를 수 있게 만든다.
- 스타일시트(StyleSheet)의 `button` 스타일을 적용해 초록 배경에 흰 텍스트 버튼이 된다.
- `onPress`에서 showMenu 로컬 상태를 true로 설정한다.

## 요약
- Pressable은 자식 요소를 감싸 프레스 상호작용을 감지하는 React Native 코어 컴포넌트다.
- onPressIn(누르는 순간), onPressOut(떼는 순간), onLongPress(500ms 이상, delayLongPress로 조정 가능)로 프레스 단계를 구분한다.
- Pressable 영역은 버튼, 텍스트, 아이콘 등 자유롭게 디자인할 수 있다.
- 버튼 프레스로 컴포넌트의 로컬 상태를 갱신하는 패턴이 흔히 쓰인다.
- HitRect로 터치 인식 범위를 확장해 사용성을 개선할 수 있다.
