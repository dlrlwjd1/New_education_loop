# Working with Amazon S3

## 개요
- S3 콘솔에서 버킷 생성·파일 업로드부터 **S3 Select**로 SQL 쿼리하기, Cloud9 터미널에서 `aws s3 cp`로 업로드하는 워크플로까지 실습하는 6분 데모.

## 내용

### 버킷 생성과 파일 업로드
- S3 콘솔 → Buckets에서 버킷 개수 확인·탐색 가능. "Create bucket"으로 간단히 새 버킷 생성.
- **버킷 이름은 전역적으로 고유(globally unique)**해야 하므로, 흔한 이름은 충돌이 발생 — 임의의 긴 문자열로 임시 버킷명을 만드는 방식으로 회피 가능.
- 콘솔에서 바로 드래그 앤 드롭으로 파일 업로드 가능(예: 야구 데이터 CSV).

### S3 Select로 직접 SQL 쿼리
- 버킷 내 객체 선택 → **Object Actions → Query with S3 Select**.
- 테라바이트급 파일에 수백만 행이 있어도, S3 Select를 사용하면 **SQL 언어**로 직접 쿼리 가능 — CSV 구분자, 출력 설정, 기본 쿼리(예: 처음 5행 조회)가 기본 제공됨.
- 결과를 **raw** 또는 **formatted**로 확인 가능 — 데이터 과학자에게 매우 유용한 기능.
- "Add SQL from templates"에서 예시 쿼리를 가져와 수정 가능 — 예: NBA 데이터셋에서 선수 이름(player names)과 포지션(player positions) 컬럼만 선택해 쿼리.

### AWS Cloud9에서 업로드
- Cloud9의 파일 메뉴에서 우클릭 → "Upload Local Files"로 로컬 파일(예: 야구 데이터)을 직접 업로드 가능.
- 터미널에서 `aws s3 cp` 명령으로 S3에 복사 가능.
- **도움말 검색 팁**: `aws s3 cp help | less` 후 원하는 동작(예: "copying")으로 `grep` 검색하면 관련 문서 예시를 빠르게 찾을 수 있음.
- 업로드 후 S3 콘솔에서 파일이 정상적으로 존재하는지 확인 → 동일하게 S3 Select로 쿼리 가능.

### 핵심 통찰
- Cloud9과 S3 콘솔은 서로 잘 맞물려 동작하는 생태계이며, 데이터 과학자·엔지니어·ML 엔지니어에게 추천할 만한 워크플로.

## 예시
```bash
# S3 cp 도움말에서 특정 예시 검색
aws s3 cp help | less
# 이후 /copying 등으로 검색

# 로컬 파일을 S3 버킷으로 복사
aws s3 cp baseball_data.csv s3://my-test-bucket-12345/baseball_data.csv
```

```sql
-- S3 Select 쿼리 예시 (CSV 객체 대상)
SELECT * FROM s3object s LIMIT 5;

-- 특정 컬럼만 선택
SELECT s.player_name, s.player_position FROM s3object s;
```

## 요약
- S3 콘솔의 버킷 생성·드래그 앤 드롭 업로드, **S3 Select**를 통한 SQL 직접 쿼리, 그리고 Cloud9 터미널의 `aws s3 cp`가 하나의 자연스러운 워크플로로 이어지며, 대용량 CSV 파일도 별도 다운로드 없이 S3 상에서 즉시 탐색·쿼리할 수 있다.
