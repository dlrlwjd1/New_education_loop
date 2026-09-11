# Module summary: Lists and Text Input in React Native

## 개요
- 리스트 렌더링과 텍스트 입력을 위한 React Native 핵심 컴포넌트(core component) 모듈의 총정리다.
- FlatList, SectionList, TextInput과 가상 키보드(virtual keyboard) 처리 기법을 복습한다.

## 내용

### 첫 번째 레슨: FlatList
- FlatList가 지연 렌더링(lazy rendering)으로 ScrollView보다 빠른 앱 성능과 부드러운 사용자 경험을 제공하는 원리를 설명할 수 있다.
- 필수 props인 `data`와 `renderItem`, 그리고 각각에 전달되는 정보를 포함한 FlatList 문법을 설명할 수 있다.
- FlatList로 큰 리스트를 렌더링할 수 있다.
- 내장 메서드도 다뤘다:
  - `keyExtractor` prop으로 배열에서 고유 ID 추출
  - `ItemSeparatorComponent` prop으로 구분선 렌더링
  - `ListHeaderComponent` prop으로 헤더 렌더링
  - `ListFooterComponent` prop으로 푸터 렌더링

### 두 번째 레슨: SectionList
- FlatList와 유사하지만 리스트를 섹션으로 나눠 렌더링하는 기능이 추가된 컴포넌트다.
- SectionList와 FlatList의 차이점과 각각의 적절한 사용 사례(use case)를 식별할 수 있다.
- 필수 props인 `sections`와 `renderItem`의 목적을 포함한 SectionList 문법을 설명할 수 있다.
- SectionList로 각 섹션마다 자체 헤더를 가진, 섹션으로 구분된 큰 리스트를 렌더링할 수 있다.

### 세 번째 레슨: TextInput과 가상 키보드
- TextInput은 기기의 가상 키보드로부터 입력을 받는 텍스트 입력 박스를 만들며, 강력한 내장 커스터마이징 옵션을 제공한다.
- TextInput을 구성해 사용자 입력을 받아 로컬 상태(local state)로 저장할 수 있다.
- ScrollView 안에 여러 TextInput을 포함하는 페이지를 만들 수 있다.
- 가상 키보드 처리의 중요성을 이해하고:
  - `keyboardDismissMode` 속성으로 키보드 닫기(dismissal) 동작을 설정할 수 있다.
  - `KeyboardAvoidingView` 컴포넌트로 키보드가 화면의 다른 요소를 가리는 것을 방지할 수 있다.

### 마지막 레슨: TextInput의 props와 메서드
- TextInput에 props를 전달해 플레이스홀더 텍스트 추가, 글자 수 제한 같은 기능을 활성화할 수 있다.
- TextInput 메서드로 입력 박스에서 수행되는 특정 동작에 대한 응답을 제어할 수 있다.

## 예시
- 이 모듈에서 배운 내용을 적용해 Little Lemon 예제 React Native 앱(메뉴 리스트 + 피드백 폼)을 만들었다.

## 요약
- FlatList(`data`, `renderItem`)는 지연 렌더링으로 큰 리스트를 성능 좋게 표시한다.
- SectionList(`sections`, `renderItem`)는 섹션 헤더가 있는 구분된 리스트를 지원한다.
- TextInput은 가상 키보드 입력을 로컬 상태로 저장하며 다양한 props로 커스터마이징한다.
- `keyboardDismissMode`와 `KeyboardAvoidingView`로 가상 키보드가 UI를 방해하지 않게 처리한다.
