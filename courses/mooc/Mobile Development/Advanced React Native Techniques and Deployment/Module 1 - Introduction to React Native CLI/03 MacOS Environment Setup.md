# MacOS Environment Setup

## 개요
- React Native CLI로 새 프로젝트를 만들기 전에 macOS에서 iOS 개발 환경을 설정한다.
- 공식 문서(React Native → Get Started → Set up your environment)에서 Mac + iOS 조합의 단계를 따라간다.
- 필요 도구: Node, Watchman, Xcode(+ Command Line Tools), iOS 시뮬레이터(simulator), CocoaPods.

## 내용
### 공식 문서 따라가기
- 구글에서 "React Native"를 검색해 공식 사이트로 이동 → Get Started → Set up your environment.
- OS는 macOS, 타깃 플랫폼은 iOS를 선택한다. (Android 설정은 다음 강의에서 진행)
- 환경 설정 중 에러가 나도 당황하지 말고 Q&A 섹션에 질문을 남기면 된다.

### 설치 단계
1. **Node**: Expo 환경 설정 때 이미 설치했다. 터미널에서 버전으로 확인한다.
2. **Watchman**: 문서의 명령을 복사해 터미널에서 실행하고 설치가 끝날 때까지 기다린다.
3. **Xcode**: App Store에서 Xcode를 검색해 다운로드/설치한다. (Expo 설정 때 이미 완료)
   - Xcode → Settings → Locations에서 **Command Line Tools**가 설치되어 있는지 확인한다.
   - Components 탭에서 iOS 플랫폼이 설치되어 있는지 확인한다. iOS는 Xcode 설치 시 기본으로 함께 설치된다.
4. **iOS 시뮬레이터**: Xcode 설정에서 확인하고 시뮬레이터를 실행해 본다.
5. **CocoaPods**: Swift와 Objective-C용 의존성 관리자(dependency manager)다. Swift와 Objective-C는 네이티브 iOS용 프로그래밍 언어다. 문서의 설치 명령을 복사해 터미널에 붙여넣고 (필요 시 비밀번호 입력 후) 실행한다.

## 예시
```bash
# Node 버전 확인 (이미 설치되어 있음)
node -v

# Watchman 설치 (Homebrew)
brew install watchman

# CocoaPods 설치
sudo gem install cocoapods
```

## 요약
- macOS에서 iOS용 React Native CLI 환경 설정은 Node → Watchman → Xcode(Command Line Tools 포함) → iOS 시뮬레이터 → CocoaPods 순서로 진행한다.
- Node와 Xcode는 Expo 환경 설정 때 이미 설치했으므로 확인만 하면 된다.
- CocoaPods는 Swift/Objective-C 의존성 관리자로, iOS 개발에 필수다.
