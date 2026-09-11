# Introduction to Yarn

## 개요
- Yarn은 npm과 유사한 JavaScript 패키지 매니저(package manager)로, npm의 한계를 보완하기 위해 만들어졌다.
- 캐싱(caching) 덕분에 빠르고, 이미 캐시된 패키지는 인터넷 연결 없이(오프라인 모드) 설치할 수 있다.
- 한 프로젝트에서 npm과 Yarn을 동시에 사용하면 안 되며 lock 파일도 하나만 유지해야 한다.

## 내용
### Yarn이란
- JavaScript용 패키지 매니저로 npm처럼 프로젝트의 의존성(dependency)을 관리한다.
- npm의 몇 가지 한계를 해결하기 위해 만들어졌으며 주요 특징:
  - **속도(speed)**: 캐싱 메커니즘을 사용해 매우 빠르다.
  - **오프라인 모드(offline mode)**: 이미 캐시된 패키지는 인터넷 연결 없이 설치할 수 있다.
  - 그 외 다양한 장점과 기능이 있다.

### Yarn 설치와 사용
- 터미널에서 전역(global)으로 설치한다.
- npm으로 패키지를 설치하던 방식 그대로 Yarn으로도 설치할 수 있다. 예: `npm install axios` 대신 `yarn add axios`.
- 설치 후 `package.json`의 `dependencies`에 라이브러리(axios)가 추가된 것을 확인할 수 있다.

### lock 파일 주의사항
- Yarn으로 설치하면 `yarn.lock` 파일이 생성된다 (`package-lock.json`과 같은 역할의 lock 파일).
- 프로젝트에 `yarn.lock`과 `package-lock.json`이 **둘 다 존재하면 안 된다** — npm 또는 Yarn 중 하나만 사용해야 한다.
  - npm을 쓴다면 `package-lock.json`을 남기고 `yarn.lock`을 삭제한다.
  - Yarn을 쓴다면 `yarn.lock`을 남기고 `package-lock.json`을 삭제한다.
- 왜 두 개의 lock 파일을 함께 쓰면 안 되는지는 직접 검색해서 알아보라는 과제 — 이제 초급이 아닌 고급(advanced) 수준이기 때문이다.
- 강의에서는 Yarn을 사용하므로 `package-lock.json`을 삭제하고 진행한다.

## 예시
```bash
# Yarn 전역 설치
npm install --global yarn

# npm 대신 Yarn으로 패키지 설치
yarn add axios
```

## 요약
- Yarn은 npm의 한계를 보완한 JavaScript 패키지 매니저로 속도와 오프라인 설치가 강점이다.
- `npm install 패키지` 대신 `yarn add 패키지`로 동일하게 의존성을 설치할 수 있다.
- 한 프로젝트에서는 npm 또는 Yarn 하나만 사용하고, lock 파일(`package-lock.json` / `yarn.lock`)도 하나만 유지한다.
