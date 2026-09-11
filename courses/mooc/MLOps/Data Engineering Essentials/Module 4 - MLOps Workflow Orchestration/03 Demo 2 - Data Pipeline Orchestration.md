# Demo 2: Data Pipeline Orchestration

## 개요
- Airflow 웹 UI에 로그인해 예시 DAG(ETL)를 살펴보고 그래프로 시각화한 뒤, IoT 데이터를 생성·집계·이메일 발송하는 커스텀 DAG(`iot_dag.py`)를 작성하는 3분 데모(Part 2).

## 내용

### Airflow 웹 UI 둘러보기
- Airflow 웹서버 컨테이너에 로그인 — 사용자명/비밀번호 모두 `airflow`.
- 여러 파일(=**DAG**, ETL을 의미)이 목록에 보이며 기본적으로 **일시정지(paused)** 상태 — 토글 버튼으로 실행 가능.
- 예시로 Kubernetes 관련 ETL, 튜토리얼 ETL 등 다양한 예시 DAG 확인 가능.

### Bash Operator 예시 DAG 살펴보기
- 예시 DAG 코드 확인: Airflow 모듈 임포트 → **DAG ID**(ETL의 ID) → **스케줄**(cron 표현식 방식) → 타임존 설정.
- **Empty Operator**: 아무 동작도 하지 않는 오퍼레이터.
- **Bash Operator**: Linux 명령을 실행하는 오퍼레이터 — 예시로 `echo` 명령 실행.
- DAG를 일시정지 해제하고 새로고침하면 실행이 시작됨을 확인.
- **Graph** 뷰로 DAG를 시각화 — 각 박스(box)는 하나의 **태스크(task)**를 나타내며(변환, 데이터 가져오기, 데이터 쓰기 등), 일부 태스크는 병렬로 실행됨.

### 커스텀 DAG 작성 — IoT 데이터 파이프라인
- 실행 중인 Docker 이미지를 `Ctrl+C`로 중지 → 앞서 만든 `dags` 폴더에 `iot_dag.py` 파일 생성.
- 코드 구성:
  - ETL 실행에 필요한 임포트.
  - 기계 관련 랜덤 데이터를 생성하는 Python 함수.
  - 생성된 데이터를 집계하는 Python 함수.
  - 필요 시 이메일을 생성·발송하는 로직.
  - **Dummy Operator**와 **Python Operator**를 사용 — Python Operator가 먼저 `generate_iot_data` 함수를 트리거하고, 데이터를 집계한 뒤, 필요하다면 이메일을 발송하는 흐름으로 구성.

## 예시
```python
# iot_dag.py (개념 구조)
from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.operators.dummy import DummyOperator
from datetime import datetime
import random

def generate_iot_data():
    return {"machine_id": random.randint(1, 100), "temperature": random.uniform(20, 100)}

def aggregate_data(**context):
    data = context['ti'].xcom_pull(task_ids='generate_data')
    # 집계 로직
    return data

with DAG(
    dag_id="iot_dag",
    schedule_interval="@daily",
    start_date=datetime(2024, 1, 1),
    catchup=False,
) as dag:

    start = DummyOperator(task_id="start")

    generate_data = PythonOperator(
        task_id="generate_data",
        python_callable=generate_iot_data,
    )

    aggregate = PythonOperator(
        task_id="aggregate_data",
        python_callable=aggregate_data,
    )

    start >> generate_data >> aggregate
```

## 요약
- 이 데모는 Airflow 웹 UI에서 기존 예시 DAG(Bash Operator, cron 스케줄, Graph 시각화)를 탐색한 뒤, IoT 데이터를 생성·집계·이메일 발송하는 커스텀 Python DAG(`iot_dag.py`)를 직접 작성하는 과정을 보여준다.
