# Advanced Git Commands

## 개요
- 마지막 커밋 메시지 수정(`--amend`)과 태그(tag) 관련 명령어를 다루는 실습.

## 내용

```bash
# 마지막 커밋 메시지 수정
git commit --amend

# 특정 커밋에 이름있는 태그(annotated tag) 생성
git tag -a <태그이름> -m "메시지"

# 커밋 ID를 지정해서 이전 커밋에 태그 달기
git log                                 # 커밋 ID 확인
git tag -a <태그이름> <커밋ID> -m "메시지"

# 생성한 모든 태그 목록 확인
git tag
```

- 태그는 커밋 ID의 별칭(alias) 역할을 해서, 릴리스 시점처럼 프로젝트 이력의 특정 지점을 사람이 읽기 쉬운 이름으로 표시할 수 있다.
- 이미 존재하는 태그 이름을 재사용하려 하면 `tag already exists` 오류가 발생하므로 새 태그 이름을 사용해야 한다.

## 요약
- `git commit --amend`로 마지막 커밋을 수정하고, `git tag -a`로 특정 커밋(현재 또는 과거)에 릴리스 마커를 붙이는 것이 초기화·추적·스테이징·커밋·브랜칭에 이은 Git의 기본기를 완성한다.
