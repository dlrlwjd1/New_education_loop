# Testing with React Native

## 개요

- TypeScript React Native 컴포넌트를 Jest와 Enzyme의 shallow rendering으로 테스트하는 구성을 시연한다.
- 테스트 설정, suite와 setup hook, 컴포넌트 수 검증을 다룬다.

## 내용

### 구성

강의 예제는 Jest preset, TypeScript용 설정과 `setup.js`에 Enzyme adapter를 연결한다. `.test.tsx` 파일에서 `describe`로 suite를 만들고 `beforeEach`에서 props와 shallow wrapper를 새로 준비한다.

### 격리된 렌더링 테스트

shallow rendering은 자식 구현까지 깊게 렌더링하지 않고 대상 컴포넌트의 출력 구조를 검사한다. 예제는 렌더된 View가 정확히 하나인지 확인하고, View를 두 개로 바꾸어 실패 메시지를 확인한다.

> 이 강의는 Enzyme 기반 예제를 사용한다. 새 프로젝트에서는 현재 React Native 생태계와 버전 호환성을 확인한 뒤 React Native Testing Library 같은 사용자 관점 테스트 도구도 검토한다.

## 예시

```tsx
describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders one View', () => {
    expect(wrapper.find(View)).toHaveLength(1);
  });
});
```

## 요약

- 테스트마다 wrapper를 새로 만들면 상태 누출을 줄일 수 있다.
- shallow rendering은 대상 컴포넌트를 자식과 분리해 검사한다.
- 의도적인 실패로 assertion과 오류 메시지를 확인한다.
