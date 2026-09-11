# Installing Git on Windows

## 개요
- Windows에 Git을 설치하는 단계별 가이드와 설치 마법사의 주요 옵션 선택 기준.

## 내용
### 설치 절차
1. Git 공식 웹사이트 → **Download for Windows** → **64-bit Git for Windows Setup** 선택
2. 다운로드한 `.exe` 파일 실행 → 설치 마법사 시작
3. 설치 폴더는 기본값(`C:\Program Files\Git`) 유지 가능
4. 컴포넌트 선택 — 특별한 요구사항 없으면 기본값 유지
5. 시작 메뉴 폴더 — 기본값 또는 원하는 폴더 지정
6. 기본 에디터 선택 — 확실하지 않으면 기본값(Vim) 사용
7. 초기 브랜치 이름 — "Let Git decide" 선택
8. PATH 환경 설정 — "Git from the command line and also from 3rd-party software" 선택
9. SSH 실행 파일 — "Use bundled OpenSSL library" 선택
10. 줄바꿈(line ending) 변환 — "Checkout Windows-style, commit Unix-style line endings" 선택
11. 터미널 에뮬레이터 — "Use MinTTY (the default terminal of MSYS2)" 선택
12. `git pull`의 기본 동작 — Fast-forward 또는 merge 중 선택
13. 나머지 옵션은 기본값 유지 → **Install** → **Finish**

### 설치 확인 및 초기 설정

```bash
git --version                              # 설치 확인
git config --global user.name "이름"        # 사용자 이름 설정
git config --global user.email "이메일"     # 사용자 이메일 설정
git config --list                           # 설정 확인
```

## 요약
- Windows에서는 공식 설치 마법사의 각 단계(에디터, PATH, 줄바꿈, 터미널 방식)를 기본값 위주로 선택해 설치하고, Git Bash에서 `git --version`과 `git config`로 설치·사용자 정보를 확인한다.
