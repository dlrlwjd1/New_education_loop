# [Optional] Hands-on Labs Using IBM Db2

> MOOC 읽기 자료(Reading, 1분) · [원본 자료](https://www.mooc.org/learn/sql-data-science/supplement/UxiGe/optional-hands-on-labs-using-ibm-db2)

## 개요

이 모듈의 개념은 **IBM Db2 시스템**으로도 실습할 수 있습니다. 이 읽기 자료는 실제 데이터베이스를 다루고 테이블 속성에 접근할 때 Db2를 사용하도록 안내하는 리소스 링크를 제공합니다.

## 내용

### 제공되는 리소스

| 자료 | 내용 |
|---|---|
| Loading Data | Db2에서 실제 데이터베이스로 데이터를 적재하고 테이블 속성에 접근하는 방법 안내 |

원본 링크: <https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-DB0201EN-SkillsNetwork/labs/FinalModule_SKO/Reading_Loading_Data.md.html>

### SQLite 실습과의 차이

이 모듈의 기본 실습은 SQLite 기반이며, Db2는 **선택(optional)** 경로입니다. 같은 문제를 Db2로 풀 때 달라지는 지점은 주로 다음 두 가지입니다.

1. **데이터 적재 방식** — pandas의 `df.to_sql()` 대신 Db2 콘솔의 **LOAD 도구**를 사용하는 것이 권장됩니다. pandas 방식은 기본 데이터 타입으로 매핑되어 SQL 쿼리에 최적이 아닐 수 있기 때문입니다 (예: 긴 텍스트 필드가 `VARCHAR` 대신 `CLOB`으로 매핑됨).
2. **시스템 카탈로그 이름** — SQLite의 `sqlite_master` / `PRAGMA_TABLE_INFO()` 대신 Db2에서는 `SYSCAT.TABLES` / `SYSCAT.COLUMNS`를 사용합니다.

자세한 Db2용 쿼리는 `06 (Optional) Hands-on Lab - Practice Querying Real World Datasets`에 정리되어 있습니다.

## 요약

- Db2는 이 모듈의 **선택 실습 경로**다.
- 데이터 적재는 pandas가 아니라 Db2 콘솔의 LOAD 도구를 권장한다.
- 메타데이터 조회 시 카탈로그 테이블 이름이 SQLite와 다르다 (`SYSCAT.TABLES` / `SYSCAT.COLUMNS`).
