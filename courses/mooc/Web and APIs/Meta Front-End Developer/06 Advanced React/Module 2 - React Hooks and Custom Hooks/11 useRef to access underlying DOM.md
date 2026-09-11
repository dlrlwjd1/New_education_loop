# useRef to access underlying DOM

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/advanced-react/lecture/P0gum/useref-to-access-underlying-dom)

## 개요
- 내 시작 앱은 프래그먼트가 포함된 return 명령문이고 그 안에는 UseRef를 사용하여 기본 DOM에 액세스하는 것을 읽는 H1이 들어 있습니다.

## 내용
- 내 시작 앱은 프래그먼트가 포함된 return 명령문이고 그 안에는 UseRef를 사용하여 기본 DOM에 액세스하는 것을 읽는 H1이 들어 있습니다.
- UseRef 후크가 DOM에 액세스하는 데 어떻게 사용되는지 보여주고 싶기 때문에 커서를 입력 필드에 초점을 맞추는 데 사용하겠습니다.
- 이제 온클릭 이벤트 처리 속성을 추가했으니, 버튼 클릭을 처리하기 위한 포커스 입력 함수를 정의해야 합니다.
- 단순화를 위해 내 클릭 핸들러는 양식 입력 참조 객체에만 액세스한 다음 양식 InputRef 객체에 있는 현재 속성에 대한 포커스 메서드에 액세스합니다.
- 따라서 InputRef.current 구문 형식을 사용하여 입력 DOM 노드와 모든 속성 및 값에 액세스할 수 있습니다.
- 입력 요소 DOM 노드에서 포커스 함수에 액세스하고 싶기 때문에 InpuTref.Current.Focus 구문 형식을 사용하고 있습니다.
- 방금 useRef 후크를 사용하여 DOM에 연결하고 당면한 작업에 따라 선택한 특정 DOM 노드의 속성을 사용하는 방법을 배웠습니다.

## 예시
- 참고로 이 데모에서는 useRef 후크를 좀 더 쉽게 선보일 수 있도록 약간의 수정을 가했습니다.

## 요약
- 입력 요소 DOM 노드에서 포커스 함수에 액세스하고 싶기 때문에 InpuTref.Current.Focus 구문 형식을 사용하고 있습니다. 방금 useRef 후크를 사용하여 DOM에 연결하고 당면한 작업에 따라 선택한 특정 DOM 노드의 속성을 사용하는 방법을 배웠습니다.
