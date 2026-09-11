# React Native Vector Icons

## 개요
- React Native CLI 프로젝트(Expo 아님)에 `react-native-vector-icons`를 통합하는 방법 (Expo는 더 간단함)
- iOS는 `Info.plist`에 폰트 목록 추가 + `pod install`, Android는 `android/app/build.gradle`에 설정 추가
- 아이콘 이름은 공식 디렉터리 사이트(react-native-vector-icons directory)에서 정확히 복사해 사용해야 함

## 내용

### 설치와 네이티브 설정

```bash
yarn add react-native-vector-icons
npx pod-install   # iOS
```

- iOS: 문서에서 `UIAppFonts` 키와 폰트 파일 배열을 복사해 `ios/{앱이름}/Info.plist`에 붙여넣는다. (키와 값 구조 확인)
- Android: 문서의 설정 한 줄(fonts.gradle apply 구문)을 `android/app/build.gradle`에 붙여넣는다. 루트의 `android/build.gradle`이 아니라 app 쪽 build.gradle임에 주의.
- 네이티브 변경이므로 재빌드한다.

```bash
yarn android
yarn ios
```

### 아이콘 사용
- 아이콘 이름은 Google에서 "react native vector icons"로 검색해 나오는 디렉터리 사이트에서 찾는다.
- 아이콘 세트(예: AntDesign, Entypo, Feather)별로 import 경로가 다르며, default import이므로 변수명은 자유롭게 지을 수 있다.
- `name`, `size`, `color` 속성을 지정한다. `color`는 색 이름 또는 hex 색상 모두 가능하다.
- `name` 값은 디렉터리 사이트의 이름과 정확히 일치해야 한다. 글자 하나라도 다르면(예: `check` → `checked`) 물음표가 표시되고 "Failed prop type: Invalid name of value" 에러가 난다.

### TypeScript 타입 추가
- TS 경고를 없애려면 타입 패키지를 설치한다. npm과 Yarn을 섞어 쓰지 않는다.

```bash
yarn add -D @types/react-native-vector-icons
```

- 설치 후 빨간 경고가 사라지고 속성 자동완성(auto completion)이 동작한다.

## 예시

```tsx
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';

// 여러 아이콘을 렌더링하려면 View로 감싼다
<View>
  <AntDesignIcon name="retweet" size={60} color="red" />
  <EntypoIcon name="add-user" size={100} color="aqua" />
  <FeatherIcon name="check" size={60} color="#000" />
</View>
```

```xml
<!-- ios/{앱이름}/Info.plist -->
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <!-- 문서의 폰트 목록 -->
</array>
```

```gradle
// android/app/build.gradle
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
```

## 요약
- `yarn add react-native-vector-icons` 후 iOS는 `Info.plist`에 폰트 배열 + `npx pod-install`, Android는 `android/app/build.gradle`에 gradle 설정을 추가하고 재빌드한다.
- 아이콘 세트별로 `react-native-vector-icons/{세트명}`에서 import하며, `name`/`size`/`color` 속성으로 사용한다.
- `name`은 공식 디렉터리 사이트의 이름과 정확히 일치해야 하며, 틀리면 물음표와 prop type 에러가 발생한다.
- `@types/react-native-vector-icons`를 설치하면 TypeScript 경고 제거와 자동완성이 가능하다.
