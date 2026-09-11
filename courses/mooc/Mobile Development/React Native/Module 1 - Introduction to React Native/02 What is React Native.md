# What is React Native?

## 개요
- React Native는 React 기반의 오픈 소스(open source) JavaScript 라이브러리로, 교차 플랫폼(cross-platform) 네이티브(native) 모바일 앱을 만든다
- Meta가 최초 개발해 Facebook 모바일 앱 일부에 사용했고, 이후 오픈 소스로 공개됨
- JavaScript로 작성하지만 네이티브 코드로 렌더링되어 iOS·Android·Windows·TV 앱을 하나의 코드베이스(code base)로 개발 가능

## 내용
### React Native란
React Native는 React에 기반한 오픈 소스 JavaScript 라이브러리로, 교차 플랫폼 네이티브 모바일 앱을 만드는 데 사용된다. Meta가 처음 만들어 Facebook 모바일 앱의 일부를 구축하는 데 사용했으며, 곧 오픈 소스로 공개되어 개발자 커뮤니티가 수정할 수 있게 되었다. JavaScript와 React로 네이티브 iOS, Android, Windows, TV 앱을 만들 수 있다.

또한 React Native에는 방대한 내장 컴포넌트(built-in components)가 있다. 예를 들어 텍스트 입력 상자를 추가하는 `TextInput`, 스타일의 컨테이너 역할을 하는 `StyleSheet` 등이다. 개발자는 이런 컴포넌트를 빌딩 블록(building blocks)처럼 조합해 모바일 앱을 만들 수 있다.

### 네이티브(native)의 의미
애플리케이션이 네이티브라는 것은 컴퓨터의 고유 운영체제(OS)를 위해 작성되었다는 뜻이다. 예를 들어 특정 게임 콘솔용으로 설계된 비디오 게임은 그 콘솔에서 네이티브로 실행된다. 네이티브 앱과 네이티브 코드는 해당 플랫폼에 맞게 만들어졌기 때문에 일반적으로 더 좋은 성능과 빠른 속도를 낸다.

원래는 여러 기기에서 완전히 호환되는 앱을 만들려면 별도의 코드를 각각 작성해야 한다. 그러나 React Native는 애플리케이션을 네이티브로 렌더링(render)할 수 있다. 즉, 특정 기기를 위해 특별히 만들어지지 않았어도 네이티브 애플리케이션과 같은 프로그래밍 플랫폼을 사용한다. React Native는 JavaScript로 작성되지만 네이티브 코드를 생성하므로, 코드는 JavaScript여도 기기의 프로세서에 맞게 동작한다.

### 전통적 네이티브 개발과의 비교
- 네이티브 iOS 앱: Objective-C 또는 Swift에 능숙해야 함
- 네이티브 Android 앱: Java 또는 Kotlin이 필요함
- 이 경우 Android와 iOS의 코드베이스가 분리되고, 팀도 따로 운영될 수 있다

React Native를 사용하면 Swift, Objective-C, Java, Kotlin에 능숙하지 않아도 된다. JavaScript, React, 그리고 HTML·CSS의 기초만 알면 시작할 수 있다. React 컴포넌트가 기존 네이티브 모바일 코드를 감싸고(wrap) 네이티브 API와 상호작용하기 때문이다. API(Application Programming Interface)는 두 프로그램이 상호작용하는 수단이며, 여기서는 JavaScript를 통해 이루어진다. 개발은 하나의 코드베이스에서 하지만 여러 플랫폼에 배포된다. React Native를 배우면 사실상 교차 플랫폼 모바일 개발자(cross-platform mobile developer)가 되어 iOS와 Android 앱을 모두 쉽게 만들 수 있다.

## 예시
환영 메시지를 출력하는 기본 교차 플랫폼 앱 예시. React 코드와 매우 비슷하지만 HTML의 `div`나 `p` 태그 대신 `Text`, `View` 같은 네이티브 모바일 컴포넌트를 사용한다.

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeApp = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

- `Text`, `View`를 사용하기 전에 `react-native` 패키지에서 가져오는(import) 문장이 필요하다.
- `View`는 HTML의 `div` 태그와 비슷한 역할을 하며, 텍스트가 가운데 오도록 스타일링했다.
- 하나의 코드베이스로 네이티브 Android와 네이티브 iOS 기기 모두에서 "Welcome to React Native"가 렌더링된다.

## 요약
- React Native는 React 기반 JavaScript 라이브러리로 iOS·Android 등 교차 플랫폼 네이티브 앱을 만든다.
- JavaScript로 작성해도 네이티브 코드로 렌더링되어 네이티브 수준의 동작을 한다.
- Swift/Objective-C/Java/Kotlin 없이 JavaScript, React, HTML·CSS 기초만으로 시작할 수 있다.
- 하나의 코드베이스로 여러 플랫폼의 앱을 만들 수 있다는 것이 핵심 동기다.
