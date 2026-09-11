# Change App Icon Android

## 개요
- appicon.co에서 생성한 아이콘으로 Android 앱 아이콘을 교체하는 방법
- Android는 해상도별 `mipmap-*` 폴더에 일반 아이콘(`ic_launcher.png`)과 라운드 아이콘(`ic_launcher_round.png`) 두 종류가 필요
- 파일명은 `AndroidManifest.xml`에서 참조하므로 기본 이름을 정확히 유지해야 함

## 내용

### 일반 아이콘(ic_launcher) 교체
1. appicon.co에서 리소스의 앱 아이콘 이미지를 업로드하고 Generate → 다운로드 후 압축 해제.
2. 생성물의 Android 폴더에는 해상도별(mipmap-hdpi, mdpi, xhdpi 등) `ic_launcher.png`가 들어 있다.
3. 코드베이스의 `android/app/src/main/res/` 아래 mipmap 폴더들과 병합한다.
   - Mac: Finder에서 다운로드한 mipmap 폴더들을 res 폴더로 드래그 앤 드롭 → "Apply to All" → "Merge" 선택. 새 아이콘만 덮어쓰고 기존의 다른 파일은 유지된다.
   - Windows 등: 각 해상도 폴더(hdpi, mdpi, ...)를 하나씩 열어 파일을 복사/붙여넣기한다.

### 라운드 아이콘(ic_launcher_round) 교체
- 코드베이스에는 `ic_launcher.png` 외에 `ic_launcher_round.png`(둥근 아이콘)도 있다.
- appicon.co에 리소스의 라운드 아이콘 이미지를 업로드하고, 파일명 입력란에 코드베이스와 동일한 이름 `ic_launcher_round`를 입력한 뒤 Generate한다.
- 주의(사이트 버그): 파일명에 `.png`까지 입력하면 이름이 반영되지 않고 기본 `ic_launcher`로 생성된다. 확장자 없이 `ic_launcher_round`만 입력해야 한다.
- 생성된 파일들을 같은 방식(Finder 병합)으로 res의 mipmap 폴더에 넣는다.

### 파일명이 중요한 이유
- `android/app/src/main/AndroidManifest.xml`에서 다음과 같이 참조한다.
  - `android:icon="@mipmap/ic_launcher"`
  - `android:roundIcon="@mipmap/ic_launcher_round"`
- React Native가 기본으로 이렇게 설정해 두므로, 파일명만 정확히 맞추면 추가 설정이 필요 없다.

### 재빌드

```bash
clear
yarn android
```

- 빌드 후 홈 화면에서 새 라운드 아이콘이 적용된 것을 확인할 수 있다.

## 요약
- Android 아이콘은 `android/app/src/main/res/mipmap-*` 폴더의 해상도별 PNG를 교체한다.
- 일반 아이콘은 `ic_launcher.png`, 라운드 아이콘은 `ic_launcher_round.png` 이름을 그대로 유지해야 한다 (AndroidManifest.xml이 참조).
- appicon.co에서 라운드 아이콘 생성 시 파일명에 확장자(.png)를 넣으면 이름이 적용되지 않는 버그가 있다.
- 교체 후 `yarn android`로 재빌드해야 반영된다.
