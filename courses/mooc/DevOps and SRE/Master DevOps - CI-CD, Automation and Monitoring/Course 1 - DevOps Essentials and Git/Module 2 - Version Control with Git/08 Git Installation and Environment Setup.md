# Git Installation and Environment Setup

## 개요
- Linux(Ubuntu/Debian 계열)에서 Git을 설치하고 사용자 정보를 설정하는 실습 데모.

## 내용

```bash
# 패키지 목록 갱신 (설치는 하지 않음, 최신 정보만 반영)
sudo apt-get update

# Git 설치 (-y로 모든 프롬프트 자동 동의)
sudo apt-get install git -y

# 설치 확인
git --version

# 사용자 이름 설정 (모든 커밋에 연결됨)
git config --global user.name "이름"

# 사용자 이메일 설정 (기여자 식별에 사용됨)
git config --global user.email "이메일"

# 설정 확인
git config --list
```

## 요약
- `apt-get update` → `apt-get install git` → `git --version`으로 설치를 확인하고, `git config --global user.name/user.email`로 커밋에 연결될 신원 정보를 설정하는 것이 Git 환경 설정의 기본 흐름이다.
