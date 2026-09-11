# Demo 1: Data Pipeline Orchestration

## 개요
- 공장 IoT 센서 데이터를 실시간 처리해 정비 기술자에게 공유하는 시나리오를 배경으로, Docker Compose로 Apache Airflow 환경을 처음부터 구축하는 4분 데모(Part 1).

## 내용

### 시나리오
- 많은 기계를 보유한 공장, IoT 기기가 다양한 기계 지표를 수집.
- 목표: Airflow의 **스케줄링(scheduling)** 기능으로 일정 간격마다 이 데이터를 실시간 처리하고, 최종적으로 정비 기술자에게 정보를 공유.
- 처리 중 문제가 발생하면 정비 기술자가 손쉽게 조치를 취할 수 있어야 하며, 오케스트레이션 자체는 데이터 엔지니어·데이터 웨어하우스 엔지니어·MLOps 엔지니어가 담당.

### 환경 구축 단계
1. `example_orchestration` 디렉토리 생성 후 이동.
2. **Airflow의 Docker 이미지** 다운로드.
3. Airflow 실행에 필요한 폴더 생성: `dags`, `logs`, `plugins`, `config`.
   - **DAGs**(Directed Acyclic Graph, 방향성 비순환 그래프)는 파이프라인을 저장하는 곳으로 이해하면 됨.
4. Airflow용 프로세스 ID 생성 명령 실행.
5. `docker-compose.yml` 파일 검토 — Airflow 구성 요소 포함:
   - **Airflow 2.11.2 이미지** 다운로드.
   - **Redis**, **Postgres**(Airflow의 메트릭을 저장하는 데이터베이스) 서비스 포함.
   - **Airflow 웹 서버**(UI) — 포트를 **8081**로 업데이트.
   - **Airflow 스케줄러**(정해진 간격마다 ETL을 스케줄링하는 역할).
   - **Airflow 워커**(실제 실행을 담당).

### 실행
1. `docker-compose airflow init` — 초기화 스크립트가 실행되어 Airflow 실행에 필요한 폴더 구조·초기 구성 요소를 설정. 사용자 생성, 권한 부여 등 진행 후 종료 코드 0으로 완료 확인.
2. `docker-compose up` — 모든 이미지를 실행하고 컨테이너를 생성(약 5~10분 소요). 로그에 Airflow 로고가 나타나면 서비스가 정상 가동 중이라는 신호.
3. 포트 8081을 열어 Airflow 웹 서버가 정상적으로 실행되는 것을 확인.

## 예시
```bash
mkdir example_orchestration
cd example_orchestration
mkdir dags logs plugins config

# Airflow 초기화
docker-compose -f docker-compose.yml run airflow-init

# Airflow 전체 스택 실행
docker-compose up
```

```yaml
# docker-compose.yml (개념 구조)
services:
  postgres:
    image: postgres:13
  redis:
    image: redis:latest
  airflow-webserver:
    image: apache/airflow:2.11.2
    ports:
      - "8081:8080"
  airflow-scheduler:
    image: apache/airflow:2.11.2
  airflow-worker:
    image: apache/airflow:2.11.2
```

## 요약
- 이 데모는 Docker Compose로 Postgres·Redis·Airflow 웹서버·스케줄러·워커를 포함한 전체 Airflow 스택을 구축·실행하는 과정을 다루며, `docker-compose airflow init`으로 초기화한 뒤 `docker-compose up`으로 전체 서비스를 띄우고 웹 UI(포트 8081)로 정상 가동을 확인한다.
