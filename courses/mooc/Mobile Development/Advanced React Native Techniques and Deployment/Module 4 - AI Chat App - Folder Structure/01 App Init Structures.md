# App Init Structures

## 개요
- AI 챗 앱(ChatGPT 스타일 챗봇, 로그인 화면 + 채팅 화면 2개)의 폴더 구조(folder structure)를 초기 설정
- `src` 아래에 components, screens, constants, helpers, keys, styles, assets 폴더를 생성
- 공용 색상 상수(`colors.ts`)와 플랫폼 판별 상수(`platform.ts`)를 만들고, 반응형 패키지 `react-native-size-matters`를 설치

## 내용

### 앱 개요
- 만들려는 앱은 ChatGPT 같은 단순한 AI 챗봇 앱이다.
  - 로그인 화면: OTP 또는 Google 로그인
  - AI 챗 화면: 질문을 보내고 답변을 받음
- 화면이 2개뿐인 단순한 구조이므로, 필요한 폴더·파일은 진행하며 추가한다.

### 폴더 구조 (src 아래)
- `components/` — 공용 컴포넌트
- `screens/` — 화면
- `constants/` — 상수
- `helpers/` — 헬퍼 함수
- `keys/` — 환경 변수(environment variables) 설정 전까지 API 키를 임시로 두는 폴더
- `styles/` — 스타일 관련 파일
- `assets/` — 이미지·아이콘 (이전 강의에서 `src` 밖에 만들었던 `assets/icons`를 `src/assets`로 이동)

### styles/colors.ts

```ts
export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  gray: '#F5F5F5',
  mediumGray: '#CCC',
};
```

### constants/platform.ts

```ts
import { Platform } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
```

### 패키지 설치
- 반응형 처리를 위해 `react-native-size-matters`를 설치한다. 패키지 이름은 외우지 말고 문서에서 복사하는 편이 안전하다.

```bash
yarn add react-native-size-matters
```

- 네비게이션(navigation) 라이브러리는 앱이 단순하므로 나중에 다룬다.

### assets 이동 후 import 에러 해결
- VS Code에서 파일을 이동하면 import 자동 업데이트를 물어보며, 수락하면 경로가 `src/assets/icons`로 바뀐다.
- 이동 후에도 에러가 계속되면:
  1. 앱 리로드 → 안 되면 Metro 번들러 종료 후 `yarn start` 재실행, `yarn android` 재빌드
  2. Android 에러가 계속되면 Gradle 캐시 정리가 첫 번째 점검 사항이다.

```bash
cd android && ./gradlew clean
cd .. && yarn android

# iOS는 pod 설치를 잊지 말 것
cd ios && pod install
```

- 이런 명령이 길고 번거로우므로 다음 강의에서 package.json 스크립트로 개선한다.

## 요약
- `src` 아래 components / screens / constants / helpers / keys / styles / assets 폴더로 앱 구조를 잡는다.
- `styles/colors.ts`에 공용 색상, `constants/platform.ts`에 `isIOS`/`isAndroid` 플랫폼 상수를 정의한다.
- 반응형을 위해 `react-native-size-matters`를 설치한다.
- 파일 이동 후 import 에러가 나면 Metro 재시작과 `./gradlew clean` 후 재빌드로 해결한다.
- 다음 강의에서 반복 명령을 줄이는 스크립트를 추가한다.
