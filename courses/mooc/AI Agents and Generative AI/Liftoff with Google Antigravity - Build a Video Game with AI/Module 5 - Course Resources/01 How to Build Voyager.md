# How to Build Voyager

## 개요

- 앞선 설명을 제거하고 Voyager 빌드 단계만 모은 실행 체크리스트다.
- Hello World 실습은 생략하고 `voyager`를 폴더와 Firebase 프로젝트 이름으로 사용한다.

## 내용

### Phase 1: Antigravity 설정

1. Antigravity를 설치하고 실행한다.
2. Review-driven development, 기본 키 바인딩, 기본 언어 확장을 선택한다.
3. `agy` 터미널 명령을 활성화하고 Google 계정으로 로그인한다.
4. `voyager` 폴더를 만들고 연다.

### Phase 2: Firebase 서비스 활성화

1. Firebase 콘솔에서 `voyager` 프로젝트를 만든다.
2. Firebase CLI를 설치하고 로컬 `voyager` 폴더로 이동한다.
3. 초기화하고 Firestore와 Hosting을 선택한다.

```bash
firebase init
```

4. 기존 프로젝트를 연결하고 기본 데이터베이스 위치와 파일명을 사용한다.
5. SPA 구성과 GitHub 자동 배포에는 `n`으로 답한다.
6. 로컬 서버와 기본 배포를 확인한다.

```bash
firebase serve
# Ctrl+C로 서버 종료
firebase deploy
```

7. Firebase 콘솔에서 Web 앱 `Voyager`를 등록한다.
8. **Security > Authentication > Sign-in method > Anonymous**를 활성화한다.

### Phase 3: 에이전트 오케스트레이션

강좌가 제공하는 리소스 패키지에는 공통 `SKILL.md`와 A/B/C 에이전트용 프롬프트가 들어 있다.

```bash
curl -O https://storage.googleapis.com/cloud-training/T-LWGA-B
unzip T-LWGA-B
```

기본 Hosting 페이지를 제거하고 워크스페이스 스킬을 배치한다.

```bash
rm public/index.html
mkdir -p .agents/skills/orchestration
cp ~/Downloads/resources/SKILL.md .agents/skills/orchestration/SKILL.md
```

그다음 순서로 진행한다.

1. Agent A에게 핵심 게임 구현을 맡긴다.
2. Agent B에게 리더보드 구현을 맡긴다.
3. A와 B가 완료될 때까지 계획과 실행을 감독한다.
4. Agent C에게 통합, 로컬 테스트, 오류 수정을 맡긴다.
5. 전체 기능이 검증되면 배포한다.

```bash
firebase deploy
```

## 예시

```text
voyager/
├── .agents/
│   └── skills/
│       └── orchestration/
│           └── SKILL.md
├── public/
├── firebase.json
└── firestore.rules
```

## 요약

- Antigravity, Firebase, 오케스트레이션의 세 단계로 전체 빌드를 나눈다.
- A/B는 병렬 구현, C는 통합 검증을 담당한다.
- 마지막에는 로컬 테스트, 프로덕션 배포, 데이터와 보안 규칙 정리를 수행한다.
