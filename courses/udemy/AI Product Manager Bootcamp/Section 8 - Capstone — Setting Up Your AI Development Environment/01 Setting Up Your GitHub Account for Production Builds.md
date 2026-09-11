# Setting Up Your GitHub Account for Production Builds

## 개요
- 장기 프로젝트의 버전 관리와 복구를 위해 GitHub 저장소를 준비한다.
- 원본 강의: https://www.udemy.com/course/ai-product-manager-bootcamp/learn/lecture/53244081

## 내용
### 저장소 생성
- 개인 프로젝트는 GitHub 계정을, 회사 프로젝트는 회사 조직의 계정과 접근 권한을 준비한다.
- `Compliance Tracker` 저장소를 만들고 설명을 입력한다.
- 강의에서는 비공개(private) 저장소와 README 생성을 선택하고 라이선스는 일단 추가하지 않는다.

### 목적
- Git으로 변경 이력을 남기고 GitHub에 원격 사본을 보관한다.
- 문제가 생기면 이전 정상 버전으로 돌아갈 수 있다.

## 예시
```bash
git add .
git commit -m "Initialize compliance tracker"
git push
```

## 요약
- 로컬 파일만 두지 말고 변경 이력을 원격 저장소에 축적한다.
- 공개 범위와 조직 정책은 프로젝트 성격에 맞춘다.
