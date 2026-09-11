# Software Package Management - Demonstration

## 개요
- `apt-get` 명령어로 패키지를 업데이트·설치·업그레이드·삭제·다운로드하는 실습 데모.

## 내용
### 주요 명령어

```bash
# 패키지 목록(사용 가능한 업데이트 정보) 갱신
apt-get update

# 이미 설치돼 있으면 업그레이드하지 않고 그대로 두기
apt-get install python --no-upgrade

# 패키지 설치 (단일/복수/와일드카드)
apt-get install python
apt-get install python mysql
apt-get install name*        # name을 포함하는 모든 패키지 설치

# 설치된 모든 패키지를 최신 버전으로 업그레이드
apt-get upgrade

# 패키지 삭제 (설정 파일은 남김)
apt-get remove python

# 패키지+설정 파일까지 완전 삭제
apt-get remove --purge python

# 설치하지 않고 패키지 파일만 다운로드
apt-get download python

# 패키지의 소스 코드 다운로드·압축 해제
apt-get source python
```

## 요약
- `apt-get`은 update(목록 갱신)→install(설치)→upgrade(업그레이드)→remove/purge(삭제)의 흐름으로 Linux 소프트웨어를 관리하며, download·source 옵션으로 설치 없이 패키지나 소스 코드만 받을 수도 있다.
