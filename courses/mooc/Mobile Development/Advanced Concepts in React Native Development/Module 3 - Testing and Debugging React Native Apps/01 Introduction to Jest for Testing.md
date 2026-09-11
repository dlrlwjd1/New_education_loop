# Introduction to Jest for Testing

## 개요

- JavaScript·TypeScript 테스트 프레임워크 Jest의 목적, 테스트 탐색 규칙과 대표 matcher를 소개한다.
- 단위·통합·스냅숏 테스트, mock과 비동기 검증을 주요 기능으로 설명한다.

## 내용

### 테스트 파일과 실행

Jest는 일반적으로 `.test.ts`, `.spec.ts`, `.test.tsx`, `.spec.tsx` 같은 이름의 파일을 탐색해 실행한다. 테스트를 격리하고 병렬 실행하며 mock·spy 기능을 제공한다.

### 대표 matcher

원시 값은 `toBe`, 객체·배열의 구조적 동등성은 `toEqual`을 사용한다. `toBeNull`, `toBeDefined`, `toBeTruthy`, `toMatch`, 수치 비교 matcher와 mock 호출 검증 matcher도 제공한다.

> 강의에서는 Jest를 Microsoft가 만들었다고 설명하지만, Jest는 Facebook(현 Meta)에서 시작된 프로젝트다.

## 예시

```tsx
test('adds one', () => {
  expect(1 + 1).toBe(2);
});

test('returns a user', async () => {
  await expect(loadUser()).resolves.toEqual({ id: 1 });
});
```

## 요약

- Jest는 React Native의 단위·통합 테스트와 mock에 사용할 수 있다.
- 값의 종류와 검증 목적에 맞는 matcher를 선택한다.
- 작고 독립적이며 의도가 드러나는 테스트를 작성한다.
