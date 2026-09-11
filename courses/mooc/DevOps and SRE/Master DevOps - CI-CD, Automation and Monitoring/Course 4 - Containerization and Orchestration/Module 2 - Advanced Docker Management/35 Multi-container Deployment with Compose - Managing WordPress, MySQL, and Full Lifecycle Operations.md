# Multi-container Deployment with Compose - Managing WordPress, MySQL, and Full Lifecycle Operations

## 개요
- WordPress에서 생성한 사용자 데이터가 실제로 MySQL 테이블에 저장되는 것을 확인하고, `docker-compose logs`/`restart`/`stop`/`config`/`down`으로 스택 전체 라이프사이클을 관리하는 실습.

## 내용
### 프론트엔드 데이터가 DB에 저장되는지 확인
- WordPress 초기 설정에서 만든 사용자(`edureka`)가 실제로 데이터베이스에 저장됐는지 CLI로만 확인 가능(DB는 외부에 노출되지 않으므로).
```sql
SHOW TABLES;                        -- 이제 테이블이 존재함(이전엔 Empty set)
SELECT * FROM wp_users;              -- edureka 사용자와 이메일 확인
```
- WordPress 관리자 화면(**Users → Add User**)에서 테스트 사용자를 추가한 뒤 다시 확인:
```sql
SELECT * FROM wp_users;   -- 새로 추가한 사용자도 테이블에 반영된 것을 확인
```
- 이를 통해 Docker Compose로 실행한 멀티 컨테이너 애플리케이션(WordPress+MySQL)이 정상적으로 연동되어 동작함을 검증.

### 로그 확인
```bash
docker-compose logs wordpress   # 프론트엔드 로그
docker-compose logs db           # 데이터베이스 로그
```
- `docker logs <컨테이너 이름>`과 동일한 정보를 서비스 이름으로 조회하는 방식.

### 재시작
```bash
docker-compose restart
docker ps -a   # 두 컨테이너 모두 재시작되어 가동 시간이 초기화된 것을 확인
```

### 컨테이너 내부 명령 실행 (복습)
```bash
docker-compose exec db mysql -u root -proot123
```

### 정지와 설정 확인
```bash
docker-compose stop
docker ps -a           # 두 컨테이너 모두 Exited 상태
docker-compose config   # 실행에 사용된 전체 YAML 설정(서비스 정의)을 출력해 검증
```

### 전체 종료 및 정리
```bash
docker-compose down
docker ps -a   # 컨테이너, 볼륨, 네트워크 등 생성했던 모든 리소스가 제거됨
```
- `docker-compose config`로 확인했듯 Compose는 `db`를 먼저, `wordpress`를 나중에 생성했으며, `down` 명령으로 이 모든 리소스를 한 번에 깨끗이 제거.

## 요약
- WordPress UI에서 만든 사용자 데이터가 실제로 MySQL의 `wp_users` 테이블에 저장되는 것을 확인해 Compose 기반 멀티 컨테이너 연동을 검증했으며, `docker-compose logs`(로그 확인)·`restart`(재시작)·`exec`(내부 명령 실행)·`stop`(정지)·`config`(설정 확인)·`down`(전체 제거)으로 스택의 전체 라이프사이클을 관리할 수 있다.
