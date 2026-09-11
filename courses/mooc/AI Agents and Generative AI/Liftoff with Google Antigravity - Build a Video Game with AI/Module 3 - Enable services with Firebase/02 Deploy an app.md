# Deploy an app

## 개요

- Firebase 로컬 서버에서 앱을 미리 본다.
- `public/`의 콘텐츠를 정리하고 한 명령으로 배포한다.

## 내용

### 로컬 미리보기

프로젝트 루트에서 다음 명령을 실행한다.

```bash
firebase serve
```

처음에는 Firebase 기본 Hosting 페이지가 나타난다. Antigravity에서 기본 `public/index.html`을 지우고 실제 앱 파일을 `public/`로 옮긴다.

- 영어 페이지의 `index.html`
- 공통 `style.css`
- 스페인어 페이지가 있는 `es/`
- 일본어 페이지가 있는 `ja/`

로컬 Firebase 서버에서 실행하면 Firestore 같은 클라우드 서비스를 사용하는 동작까지 테스트할 수 있다.

### 프로덕션 배포

```bash
firebase deploy
```

강의는 이 명령이 컨테이너화, 빌드, Google Cloud의 프로덕션 환경 배포를 자동화한다고 설명한다. 완료되면 HTTPS Hosting URL이 출력된다.

## 예시

```text
public/
├── index.html
├── style.css
├── es/
│   └── index.html
└── ja/
    └── index.html
```

## 요약

- Hosting이 제공할 파일은 `public/`에 있어야 한다.
- `firebase serve`로 로컬 환경과 클라우드 서비스 연결을 검증한다.
- `firebase deploy`로 빌드와 배포를 자동화한다.
