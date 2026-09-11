# Finish enabling services

## 개요

- Firestore를 웹 앱에 연결한다.
- 로그인 없이 점수를 기록할 수 있도록 익명 인증을 켠다.

## 내용

### 필요한 세 서비스

1. Firebase Hosting: 게임 공개
2. Firestore: 리더보드 데이터 저장
3. Anonymous Authentication: 로그인 없는 점수 기록

Hosting은 이미 `firebase deploy`로 사용할 수 있다. Firestore와 익명 인증은 콘솔에서 추가 구성이 필요하다.

### 웹 앱 등록

Firebase 콘솔의 **Settings > General > Your apps**에서 Web을 선택한다. 앱 이름을 등록하면 웹 클라이언트가 프로젝트의 Firestore 같은 서비스에 접근할 기반이 마련된다.

### 익명 인증 활성화

Firebase 콘솔에서 다음 경로로 이동한다.

```text
Security > Authentication > Get started
  → Sign-in method
  → Native providers > Anonymous
  → Enable > Save
```

## 예시

```text
브라우저의 익명 사용자
  → Firebase Anonymous Auth
  → 인증된 사용자 ID
  → Firestore에 점수 저장
```

## 요약

- Hosting만으로는 리더보드 기능을 완성할 수 없다.
- 웹 앱을 Firebase 프로젝트에 등록하고 익명 인증을 활성화한다.
- 세 서비스를 모두 준비하면 Voyager 구현을 시작할 수 있다.
