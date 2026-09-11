# Connecting Cursor, Claude Code, GitHub, and Vercel for Continuous Deployments

## 개요
- 로컬 편집·AI 코딩·버전 관리·배포를 하나의 연속 흐름으로 연결한다.
- 원본 강의: https://www.udemy.com/course/ai-product-manager-bootcamp/learn/lecture/53244129

## 내용
### 로컬 개발 연결
- Cursor에서 GitHub 프로젝트 폴더를 연다.
- 터미널에서 Claude Code를 실행하고 저장소 신뢰 및 계정 인증을 처리한다.
- 먼저 프로젝트 구조를 읽고 제품의 목적을 짧게 설명하게 해 맥락 인식을 확인한다.

### 지속 배포
- Vercel에 GitHub 저장소를 연결한다.
- Claude Code의 변경을 커밋·푸시하면 Vercel이 자동으로 새 배포를 시작한다.
- 빌드가 실패하면 Vercel 로그를 Claude Code에 전달해 수정하고 다시 푸시한다.
- 강의 사례에서는 프레임워크 설정을 React에서 Next.js로 바로잡아 배포를 성공시켰다.

## 예시
```text
로컬 수정 → GitHub push → Vercel 자동 build/deploy → 로그 확인
```

## 요약
- 네 도구가 같은 저장소를 기준으로 연결되어야 한다.
- 배포 실패 로그를 수정 입력으로 사용하며 성공한 실제 URL까지 확인한다.
