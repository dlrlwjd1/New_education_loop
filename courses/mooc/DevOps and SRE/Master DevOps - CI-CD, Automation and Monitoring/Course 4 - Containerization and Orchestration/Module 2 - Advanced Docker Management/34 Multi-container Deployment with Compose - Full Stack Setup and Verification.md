# Multi-container Deployment with Compose - Full Stack Setup and Verification

## 개요
- `docker-compose up -d`로 WordPress+MySQL 스택을 실행하고, `docker-compose exec`/`docker exec`로 데이터베이스에 접속해 확인한 뒤 브라우저로 WordPress 초기 설정을 완료하는 실습.

## 내용
### 스택 실행
```bash
ls -al   # docker-compose.yaml 파일 존재 확인
docker-compose up -d
```
- **`-d`** — Detach(백그라운드) 모드로 프론트엔드·데이터베이스 컨테이너 모두 생성.
- **`up`** — YAML 파일에 정의된 대로 실행(네트워크 생성 → 볼륨 생성 → MySQL 이미지 pull → WordPress 이미지 pull → DB 컨테이너 생성 → WordPress 컨테이너 생성 순서로 진행).
- 컨테이너 이름은 **폴더 이름이 접두사로 붙는 규칙**을 따름 — 예: `wordpress_db_1`, `wordpress_wordpress_1`(폴더명_서비스명_번호).
```bash
docker images    # DB, WordPress 이미지 확인
docker ps -a      # 두 컨테이너(프론트엔드, DB)가 Up 상태로 실행 중임을 확인
```

### 데이터베이스 컨테이너 접속 — 두 가지 방법
1. **`docker-compose exec`**(서비스 이름 기준으로 접속):
```bash
docker-compose exec db mysql -u root -proot123
```
   - `docker-compose exec`에는 **컨테이너 이름이 아니라 서비스 이름**(YAML의 `db`)을 사용.
2. **`docker exec`**(컨테이너 이름/ID 기준):
```bash
docker exec -it wordpress_db_1 bash
mysql -u root -proot123
```
- 두 방식 모두 MySQL 프롬프트로 접속 가능(`-p` 뒤에 공백 없이 비밀번호를 붙여야 함).

### 데이터베이스 상태 확인
```sql
SHOW DATABASES;      -- wp_db 존재 확인 (YAML에 정의한 그대로)
USE wp_db;
SHOW TABLES;          -- 아직 초기화 전이므로 "Empty set" — 테이블이 하나도 없음
```
- 이유: 컨테이너만 생성되었을 뿐 WordPress 초기 설정을 아직 하지 않았기 때문 — 프론트엔드에서 초기 설정을 마쳐야 DB에 테이블이 생성됨.

### 보안 설계 — 데이터베이스는 외부에 노출하지 않음
- YAML에서 프론트엔드(포트 80→31000)만 Port Binding 되어 있고, **DB(3306)는 외부에 노출되지 않음**.
- 사용자는 반드시 프론트엔드를 통해서만 데이터베이스와 상호작용 — 데이터베이스에 직접 접근할 수 없는 것이 **모범 사례(Best Practice)**이며, 중요한(mission-critical) 애플리케이션은 항상 이렇게 안전하게 유지해야 함.

### 브라우저에서 WordPress 초기 설정
- `http://<Docker Host IP>:31000` 접속 → WordPress 설치 화면 표시.
- 언어 선택(English) → Continue → Site Title(예: `Edureka Blog`), Username(`edureka`), Password(예: `edureka@123`, 약한 비밀번호 경고 시 "Confirm use of weak password" 체크), Email 주소 입력 → 검색 엔진 노출 여부 선택 → **Install WordPress** → 설치 완료.

## 요약
- `docker-compose up -d`로 정의된 네트워크·볼륨·이미지·컨테이너가 순서대로 생성되며, `docker-compose exec <서비스명>` 또는 `docker exec <컨테이너명>`으로 데이터베이스에 접속해 초기 상태(빈 테이블)를 확인할 수 있고, DB는 외부에 노출하지 않은 채 프론트엔드(포트 31000)를 통해서만 WordPress 초기 설정을 완료하는 것이 이 스택의 보안 설계다.
