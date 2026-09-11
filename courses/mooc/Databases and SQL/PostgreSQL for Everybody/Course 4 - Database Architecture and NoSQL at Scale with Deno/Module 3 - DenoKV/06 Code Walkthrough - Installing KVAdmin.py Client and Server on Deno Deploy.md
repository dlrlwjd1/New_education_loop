# Code Walkthrough: Installing KVAdmin.py Client and Server on Deno Deploy

## 개요
- Deno Deploy 무료 계정 생성부터 서버 코드(main.ts) 배포, 로컬 Python 클라이언트(kvadmin.py) 설정까지 실제 설치 과정을 처음부터 보여주는 실습 강의

## 내용
### Deno Deploy "플레이그라운드" 생성
- dash.deno.com에서 무료 계정으로 로그인한 뒤, "새 플레이그라운드(Playground)"를 생성한다 — 이는 무작위 이름(예: `lazy-wolf-17`)의 소규모 배포 인스턴스이며 `이름.deno.dev` 형태의 전역 URL을 즉시 받는다.
- 강사가 제공하는 서버 코드 전체를 플레이그라운드의 `main.ts` 파일에 붙여넣고, 인증용 토큰 값과 크론(cron) 작업 주기(예: 매시간 → 매월 1회로 조정해 정리 빈도를 낮춤)만 개인 설정에 맞게 수정한 뒤 저장·배포한다 — 배포는 약 15초 만에 전 세계 32개 Deno 서버에 반영된다.
- 배포 후 `/dump` 경로로 요청 데이터 전체를 확인하거나, `/kv/list/books?token=...`으로 저장된 데이터를 조회해 정상 동작을 검증한다.

### 로컬 Python 클라이언트 설정
- `kvadmin.py`와 `hidden-dist.py`를 다운로드한 �, `hidden-dist.py`를 `hidden.py`로 복사해 실제 접속 정보(서버 URL, 토큰)를 채워 넣는다 — Course 3에서 다룬 `hidden.py` 관례의 재사용이다.
- `python3 kvadmin.py`를 실행하면 먼저 `/dump` 엔드포인트로 핑(ping)해 서버 연결을 확인한다. Deno 인스턴스가 유휴 상태였다면 첫 응답까지 시간이 걸리는 "콜드 스타트(cold start)" 현상이 발생할 수 있어, 브라우저로 먼저 URL에 접속해 깨운 뒤 재시도하라는 안내가 나온다.
- 연결되면 `help` 명령으로 사용 가능한 명령(set/get/list/delete 등) 목록을 확인하고, `set /book/hamlet {...}` 같은 명령으로 실제 데이터를 저장·조회해본다.

## 예시
```bash
python3 kvadmin.py
> help
> set /book/hamlet {"title": "Hamlet", "author": "William Shakespeare", "isbn": 42}
> list /book
```

## 요약
- Deno Deploy의 "플레이그라운드"는 몇 초 만에 전 세계에 배포되는 무료 소규모 인스턴스이며, 서버 코드를 `main.ts`에 붙여넣기만 하면 즉시 실행된다.
- 로컬에서는 `hidden.py`에 접속 정보를 채운 `kvadmin.py`로 서버와 통신하며, 유휴 상태의 서버는 첫 요청 시 "콜드 스타트" 지연이 발생할 수 있다.
- 이 설치를 마치면 다음 강의에서 클라이언트·서버 코드 내부 동작을 자세히 살펴본다.
