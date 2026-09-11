# Profile Page

> 원문 [profile-spec.md](profile-spec.md)의 한국어 번역본입니다.

## Overview

사용자 정보, 통계, 비밀번호 변경, 계정 삭제 기능을 갖춘 프로필 페이지를 생성합니다.

## Requirements

- `/profile` 경로에 프로필 페이지 생성
- 사용자 정보 표시: 이메일, 이름, 아바타(GitHub 또는 이니셜), 계정 생성일
- 사용량 통계 표시: 전체 항목 수, 전체 컬렉션 수, 항목 유형(item type)별 분류
- 계정 관련 동작 추가: 비밀번호 변경(이메일 사용자만), 확인 절차를 거친 계정 삭제
- 데이터 페칭(data fetching) 및 컴포넌트에 대해 기존 코드베이스 패턴을 따를 것

## Notes

- 아바타 로직: OAuth로 얻은 GitHub 아바타가 있으면 사용하고, 없으면 이름/이메일로부터 이니셜을 생성
- 비밀번호 변경 버튼은 이메일/비밀번호로 가입한 사용자에게만 표시되어야 함 (GitHub OAuth 사용자는 제외)
- 계정 삭제는 실수로 인한 삭제를 방지하기 위해 확인 대화상자(confirmation dialog)가 필요함
- 항목 유형별 분류는 각 유형(snippets, prompts, notes, commands, links, files, images)의 개수를 표시해야 함
- 해당 경로는 보호되어야 함 (인증 필요)

```

```
