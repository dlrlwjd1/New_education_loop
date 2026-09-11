# Accessing Databases Using Python

## 학습 목표

- Python으로 데이터베이스에 연결하는 기본 개념 설명
- Jupyter Notebook에서 SQL을 실행해 테이블 생성, 데이터 적재, 데이터 조회 수행
- SQL API와 Python DB API의 역할 이해
- 주요 SQL 기반 DBMS에서 사용하는 API 예시 설명

---

## Module 4에서 배우는 내용

이번 모듈에서는 Python을 사용해 데이터베이스에 접근하는 방법을 배웁니다.

주요 흐름은 다음과 같습니다.

1. Python 애플리케이션에서 데이터베이스에 연결
2. SQL을 사용해 테이블 생성
3. 데이터 적재
4. SQL로 데이터 조회
5. Python으로 조회 결과 분석

실습에서는 클라우드 환경에서 데이터베이스 인스턴스를 만들고, Python과 Jupyter Notebook을 통해 데이터베이스에 연결하고 데이터를 분석합니다.

---

## 데이터 과학에서 데이터베이스가 중요한 이유

데이터베이스는 데이터 과학자에게 강력한 도구입니다.

데이터베이스를 사용하면 다음 작업을 안정적으로 수행할 수 있습니다.

| 작업 | 설명 |
|------|------|
| 데이터 저장 | 대량의 데이터를 체계적으로 보관 |
| 데이터 조회 | SQL을 사용해 필요한 데이터만 검색 |
| 데이터 수정 | 데이터 추가, 갱신, 삭제 |
| 데이터 분석 준비 | Python 분석 도구로 가져오기 전에 필요한 형태로 가공 |

---

## Python을 사용하는 이유

Python은 데이터베이스와 데이터 과학 작업에 널리 사용되는 스크립팅 언어입니다.

### Python의 장점

| 장점 | 설명 |
|------|------|
| 풍부한 생태계 | 데이터 과학에 필요한 패키지가 많음 |
| 쉬운 문법 | 배우기 쉽고 읽기 쉬운 코드 작성 가능 |
| 오픈소스 | 다양한 플랫폼에서 사용 가능 |
| 이식성 | 시스템 의존 기능을 피하면 여러 플랫폼에서 같은 코드 실행 가능 |
| 데이터베이스 지원 | Python DB API를 통해 관계형 데이터베이스에 연결 가능 |

### 대표적인 데이터 과학 패키지

| 패키지 | 용도 |
|--------|------|
| NumPy | 수치 계산 |
| Pandas | 표 형태 데이터 처리 및 분석 |
| Matplotlib | 데이터 시각화 |
| SciPy | 과학 계산 |

---

## Python DB API

Python에서 데이터베이스에 접근하는 코드는 **Python Database API**, 줄여서 **DB API**를 통해 더 쉽게 작성할 수 있습니다.

DB API는 Python 애플리케이션이 데이터베이스와 통신하기 위한 표준적인 방식입니다.

일반적인 작업 흐름은 다음과 같습니다.

```text
Python 코드
    ↓
DB API 호출
    ↓
DBMS
    ↓
쿼리 결과 반환
```

---

## Notebook 환경

Notebook은 코드, 설명, 수식, 시각화 결과를 한 문서 안에 함께 작성하고 실행할 수 있는 프로그래밍 환경입니다.

데이터 과학에서는 분석 과정을 단계별로 기록하고 공유하기 쉽기 때문에 Notebook이 많이 사용됩니다.

### Notebook 인터페이스 예시

| Notebook 환경 | 설명 |
|---------------|------|
| Mathematica Notebook | Mathematica 기반 노트북 환경 |
| Maple Worksheet | Maple 기반 워크시트 |
| Matlab Notebook | Matlab 기반 노트북 |
| IPython / Jupyter | Python 중심의 오픈소스 노트북 |
| R Markdown | R 기반 문서 및 분석 환경 |
| Apache Zeppelin | 빅데이터 분석용 노트북 |
| Apache Spark Notebook | Spark 분석용 노트북 |
| Databricks Cloud | 클라우드 기반 Spark 분석 플랫폼 |

---

## Jupyter Notebook

이 모듈에서는 **Jupyter Notebook**을 사용합니다.

Jupyter Notebook은 라이브 코드, 수식, 시각화, 설명 텍스트를 포함한 문서를 만들고 공유할 수 있는 오픈소스 웹 애플리케이션입니다.

### Jupyter Notebook의 장점

| 장점 | 설명 |
|------|------|
| 다양한 언어 지원 | Python, R, Julia, Scala 등 40개 이상의 언어 지원 |
| 쉬운 공유 | 이메일, Dropbox, GitHub, Jupyter Notebook Viewer 등으로 공유 가능 |
| 풍부한 출력 | HTML, 이미지, 비디오, LaTeX, 사용자 정의 출력 지원 |
| 빅데이터 도구 연동 | Apache Spark 같은 도구와 함께 사용 가능 |
| 분석 라이브러리 활용 | pandas, scikit-learn, ggplot2, TensorFlow 등과 연동 가능 |

---

## Python으로 데이터베이스에 접근하는 흐름

Jupyter Notebook에서 작성한 Python 코드는 API 호출을 통해 DBMS와 통신합니다.

기본 흐름은 다음과 같습니다.

1. 데이터베이스 연결 생성
2. SQL 문을 문자열로 작성
3. API 호출로 SQL 문을 DBMS에 전달
4. DBMS 요청 상태 확인
5. 오류 처리
6. 쿼리 결과 가져오기
7. 데이터베이스 연결 종료

```text
Jupyter Notebook
    ↓ Python 코드
SQL API / Python DB API
    ↓
DBMS
    ↓
결과, 상태 정보, 오류 메시지 반환
```

---

## API란?

API(Application Programming Interface)는 특정 서비스나 기능에 접근하기 위해 호출할 수 있는 함수들의 집합입니다.

데이터베이스 접근에서 API는 애플리케이션과 DBMS 사이의 통신 통로 역할을 합니다.

---

## SQL API

SQL API는 애플리케이션이 DBMS에 SQL 문을 전달하고, 결과와 상태 정보를 받아오기 위해 사용하는 라이브러리 함수 호출 집합입니다.

### SQL API의 기본 동작

| 단계 | 설명 |
|------|------|
| 연결 | API 호출로 애플리케이션을 DBMS에 연결 |
| SQL 작성 | SQL 문을 문자열 형태로 준비 |
| SQL 전달 | API 호출로 SQL 문을 DBMS에 전송 |
| 상태 확인 | 요청 성공 여부와 오류 정보 확인 |
| 결과 처리 | 쿼리 결과를 애플리케이션에서 가져옴 |
| 연결 종료 | API 호출로 데이터베이스 연결 해제 |

---

## 주요 DBMS별 API 예시

각 데이터베이스 시스템은 자체 라이브러리나 API를 제공합니다.

| API | 사용 대상 |
|-----|-----------|
| MySQL C API | C 프로그램에서 MySQL 데이터베이스 접근 |
| psycopg2 | Python 애플리케이션에서 PostgreSQL 데이터베이스 연결 |
| IBM_DB API | Python 애플리케이션에서 IBM Db2 데이터베이스 연결 |
| dblib API | SQL Server 데이터베이스 연결 |
| ODBC | Microsoft Windows 환경의 데이터베이스 접근 |
| OCI | Oracle 데이터베이스 접근 |
| JDBC | Java 애플리케이션에서 데이터베이스 접근 |

---

## 핵심 요약

- Python은 데이터 과학 생태계가 풍부하고 데이터베이스 접근을 잘 지원합니다.
- Jupyter Notebook은 코드, 설명, 수식, 시각화를 함께 작성하고 공유할 수 있는 웹 기반 환경입니다.
- Python 애플리케이션은 DB API나 SQL API 호출을 통해 DBMS와 통신합니다.
- 일반적인 데이터베이스 접근 흐름은 연결, SQL 작성, SQL 실행, 결과 처리, 연결 종료입니다.
- DBMS마다 MySQL C API, psycopg2, IBM_DB, ODBC, OCI, JDBC 같은 다양한 API가 사용됩니다.
