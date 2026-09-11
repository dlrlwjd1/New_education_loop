# Implementing Jest Testing in React Native

## 개요

- 영상 제목은 Jest 구현이지만 실제 내용은 앞 강의에 이어 Detox E2E 테스트를 작성하고 실행하는 과정이다.
- 앱 실행, 요소 표시 확인, 탭 후 화면 전환 확인을 자동화한다.

## 내용

### 테스트 흐름

`beforeAll`에서 앱을 실행하고 첫 테스트에서 welcome 요소가 보이는지 확인한다. 다음 테스트는 버튼을 탭한 뒤 hello 요소가 표시되는지 검증한다. 앱 요소에는 테스트가 안정적으로 찾을 수 있는 고유 `testID`를 부여한다.

### 빌드와 실행

Gradle·Android 에뮬레이터 설정이 일치해야 한다. Detox용 앱을 먼저 빌드한 다음 동일한 configuration 이름으로 테스트를 실행한다.

## 예시

```tsx
describe('Welcome flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('shows welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('shows hello screen after tap', async () => {
    await element(by.id('next-button')).tap();
    await expect(element(by.id('hello'))).toBeVisible();
  });
});
```

## 요약

- 실제 강의 내용은 Jest 단위 테스트가 아니라 Detox E2E 테스트다.
- 요소마다 의미 있고 고유한 `testID`를 사용한다.
- 각 테스트는 가능한 한 독립적으로 실행되게 만든다.
