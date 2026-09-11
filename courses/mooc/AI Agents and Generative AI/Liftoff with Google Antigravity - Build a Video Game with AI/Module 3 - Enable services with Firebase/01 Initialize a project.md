# Initialize a project

## 개요

- Firebase 프로젝트와 로컬 코드베이스를 연결한다.
- Voyager에 필요한 Hosting과 Firestore를 초기화한다.

## 내용

### Firebase가 해결하는 문제

| 개발 과제 | Firebase 서비스 |
|---|---|
| 애플리케이션을 전 세계에 제공 | Firebase Hosting |
| 플레이어와 점수 저장 | Firestore |
| 로그인 없이 점수 기록 | Anonymous Authentication |

Firebase는 애플리케이션 서비스를 한 플랫폼에서 제공하므로 인간 개발자와 Antigravity 에이전트가 같은 배포·데이터 환경을 사용하기 쉽다.

### 프로젝트 생성과 초기화

Firebase 콘솔에서 `agy-sandbox` 프로젝트를 만들고 Firebase CLI를 설치한다. 로컬 `agy-sandbox` 폴더의 루트에서 초기화 명령을 실행한다.

```bash
firebase init
```

서비스 선택 단계에서는 **Firestore**와 **Hosting**을 선택하고 **App Hosting**은 선택하지 않는다. 기존 Firebase 프로젝트를 연결하고 기본 데이터베이스 위치와 기본 파일명을 사용한다.

단일 페이지 앱 구성과 GitHub 자동 빌드·배포는 이 실습에서 `n`을 선택한다.

### 생성되는 주요 파일

- `public/`: Hosting에서 제공할 정적 파일
- `.firebaserc`: 프로젝트 별칭과 연결 정보
- `firebase.json`: Firebase 서비스 설정
- `firestore.rules`: 데이터베이스 보안 규칙
- `firestore.indexes.json`: Firestore 인덱스 정의
- `.gitignore`, `.firebase/`: 로컬 개발 및 캐시 관련 파일

## 예시

```text
Firebase Console의 프로젝트
        ↕ Firebase CLI
로컬 agy-sandbox 디렉터리
```

## 요약

- Firebase 프로젝트는 콘솔에서 만들고 CLI로 로컬 폴더와 연결한다.
- Voyager에는 Hosting, Firestore, 익명 인증이 필요하다.
- 초기화 단계에서는 Hosting과 Firestore부터 설정한다.
