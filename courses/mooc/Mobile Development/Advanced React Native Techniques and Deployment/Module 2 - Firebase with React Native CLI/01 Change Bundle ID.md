# Change Bundle ID

## 개요
- Firebase 연동 전에 앱의 번들 ID(bundle ID)를 변경해야 한다.
- App Store와 Google Play Store는 중복된 번들 ID를 가진 두 앱을 허용하지 않으므로, 반드시 고유한 번들 ID를 사용해야 한다.
- Android는 3개 파일에서, iOS는 `PRODUCT_BUNDLE_IDENTIFIER` 2곳에서 변경한다.

## 내용
### 번들 ID를 바꿔야 하는 이유
- Apple Store와 Google Play Store는 같은 ID의 앱 두 개를 받아주지 않는다 (중복 번들 ID 불가).
- 번들 ID가 중복되면 Apple/Google Play는 물론 Firebase에서도 문제가 생길 수 있다.

### 번들 ID 명명 규칙(convention)
- 형식: `com.회사명(또는사용자명).앱이름`
- 예: `com.{yourname}.chatapp` — 강사는 자신의 고유한 이름을 중간에 넣었으며, 수강생도 반드시 자기만의 고유한 이름(예: `com.hero.chatapp`)으로 바꿔야 한다.

### Android에서 변경
- VS Code의 검색(Search) 아이콘에서 기존 번들 ID `com.chatapp`을 검색하면 3개 파일에서 발견된다:
  - `build.gradle`
  - `MainActivity.kt`
  - `MainApplication.kt`
- 각각 직접 바꾸거나, 검색 패널의 화살표를 눌러 **Replace(바꾸기)** 기능으로 한 번에 교체한다.
- 교체 문자열에 공백이 없도록 주의한다.

### iOS에서 변경
- 검색에서 `PRODUCT_BUNDLE_IDENTIFIER`를 입력한다 (전체 단어를 다 칠 필요 없음).
- 이 값이 문자열(string)로 지정되어 있는데, 이 문자열을 새 번들 ID로 바꾼다.
- `PRODUCT_BUNDLE_IDENTIFIER`는 프로젝트에 **두 번** 등장하므로 두 곳 모두 변경해야 한다.

### 확인
- `yarn android`로 Android에서 실행하고, 완료 후 `yarn ios`로 iOS에서도 실행해 앱이 정상 동작하는지 확인한다.

## 예시
```bash
# 번들 ID 변경 후 두 플랫폼에서 실행 확인
yarn android
yarn ios
```

```text
# 번들 ID 규칙
com.{회사명 또는 사용자명}.{앱이름}
예: com.hero.chatapp
```

## 요약
- 스토어와 Firebase에서의 충돌을 피하려면 고유한 번들 ID가 필요하다.
- 규칙은 `com.회사명.앱이름`이며 중간 이름을 반드시 자기만의 고유한 값으로 바꾼다.
- Android: `build.gradle`, `MainActivity.kt`, `MainApplication.kt` 3개 파일에서 교체. iOS: `PRODUCT_BUNDLE_IDENTIFIER` 2곳 교체.
- 변경 후 `yarn android` / `yarn ios`로 정상 실행을 확인한다.
