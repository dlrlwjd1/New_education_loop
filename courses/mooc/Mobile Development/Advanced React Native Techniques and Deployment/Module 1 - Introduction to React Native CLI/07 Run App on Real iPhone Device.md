# Run App on Real iPhone Device

## 개요
- 실제 iPhone에서 React Native 앱을 실행하려면 Apple ID가 필요하고, Xcode에 로그인해야 한다.
- iPhone에서 개발자 모드(developer mode)를 켜고, Xcode에서 실기기를 선택해 실행한다.
- 서명 팀(development team) 선택, 키체인(keychain) 접근 허용, 기기에서 개발자 인증서 신뢰(trust) 등의 과정을 거친다.

## 내용
### Apple ID 준비와 Xcode 로그인
1. "Apple Developer"를 검색해 Apple Developer 사이트에서 계정을 만든다. 이름, 국가, 생년월일, 비밀번호를 입력하는 간단한 폼이다.
2. Xcode를 열고 상단 메뉴 Xcode → Settings → **Accounts** 탭으로 이동한다.
3. **+** 아이콘을 눌러 Apple ID를 선택하고 이메일과 비밀번호로 로그인한다. (+는 새 계정 생성이 아니라 Xcode 안에서 Apple ID로 로그인하는 것, −는 계정 제거)
- 실기기에서 iOS 앱을 실행하려면 반드시 Xcode에 Apple ID로 로그인해야 한다.

### iPhone 개발자 모드 활성화
1. iPhone을 케이블로 노트북에 연결한다.
2. 설정(Settings) → 개인정보 보호 및 보안(Privacy & Security) → 아래로 스크롤해 **Developer Mode**를 찾는다.
3. 꺼져 있으면 켠 뒤 iPhone을 재시동한다.

### Xcode에서 실행
1. 터미널에서 `xed -b ios`를 입력해 React Native 프로젝트의 iOS 부분을 Xcode로 연다.
2. Window 메뉴 → **Devices and Simulators**에서 연결된 기기와 시뮬레이터 목록을 볼 수 있다. 기기가 "Preparing"으로 표시되면 100%가 될 때까지 기다린다.
3. 실행 대상 목록에서 시뮬레이터 대신 자신의 실기기(예: "Ahmed iPhone")를 선택하고 실행(Run) 버튼을 누른다.

### 발생하는 에러와 해결
- **"Signing for app requires a development team"**: 프로젝트를 선택 → **Signing & Capabilities** 탭 → Team을 선택한다. 팀이 없으면 Xcode Settings → Accounts에서 Apple ID로 로그인부터 해야 한다.
- **키체인 접근(keychain access) 비밀번호 요청**: 맥 비밀번호를 입력하고 "Always Allow"를 누른다 (여러 번 물어볼 수 있음).
- **"Could not verify the developer app certificate... is trusted" 에러**: iPhone의 설정 → 일반(General) → **VPN 및 기기 관리(VPN & Device Management)** → 개발자 앱 인증서(developer app certificate)를 선택 → **Trust** → Allow를 누른다. 그 후 Xcode에서 다시 실행한다.

### 결과
- 빌드가 성공하면 앱이 iPhone에 설치되고, 스플래시 화면(splash screen) 후 Hello World 화면이 표시된다.

## 예시
```bash
# React Native 프로젝트의 iOS 폴더를 Xcode로 열기
xed -b ios
```

## 요약
- 실기기 iOS 실행 순서: Apple ID 생성 → Xcode Accounts에 로그인 → iPhone 개발자 모드 활성화(재시동 필요) → `xed -b ios`로 Xcode 열기 → 실기기 선택 후 실행.
- 서명 에러가 나면 Signing & Capabilities에서 Team을 선택한다.
- 인증서 신뢰 에러가 나면 iPhone 설정 → 일반 → VPN 및 기기 관리에서 개발자 인증서를 Trust 처리한다.
- 이런 에러들은 흔히 발생하므로 해결 과정을 알아두는 것이 중요하다.
