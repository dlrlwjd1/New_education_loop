# Accessing Databases Using SQL Magic

## 학습 목표

- Jupyter Notebook의 Magic Statement 개념 설명
- Line Magic과 Cell Magic의 차이 구분
- 자주 사용하는 Magic 명령어 이해
- SQL Magic을 사용해 Jupyter Notebook에서 데이터베이스에 접근하는 방법 설명

---

## Magic Statement란?

Magic command 또는 magic function은 Jupyter Notebook에서 제공하는 특수 명령어입니다.

Magic 명령어는 일반적인 Python 문법은 아니지만, Notebook의 동작을 제어하거나 데이터 분석에서 자주 필요한 기능을 간단하게 실행할 수 있게 해줍니다.

예를 들어 현재 작업 디렉터리를 확인하거나, 변수 목록을 확인하거나, SQL 쿼리를 실행할 수 있습니다.

---

## Magic Statement의 두 가지 유형

Jupyter Notebook의 Magic 명령어는 크게 두 가지로 나뉩니다.

| 유형 | 접두사 | 적용 범위 | 설명 |
|------|--------|-----------|------|
| Line Magic | `%` | 한 줄 | 한 줄의 입력에만 적용 |
| Cell Magic | `%%` | 셀 전체 | 여러 줄 또는 셀 전체에 적용 |

---

## Line Magic

Line Magic은 `%` 하나로 시작하며, 한 줄의 입력에만 적용됩니다.

터미널 셸에서 명령어를 실행하는 것과 비슷하게 사용할 수 있습니다.

```python
%pwd
```

위 명령은 현재 작업 디렉터리를 출력합니다.

---

## Cell Magic

Cell Magic은 `%%` 두 개로 시작하며, 셀 전체에 적용됩니다.

여러 줄의 입력을 처리하거나, 셀 전체를 다른 방식으로 실행할 수 있습니다.

```python
%%timeit
total = 0
for i in range(1000):
    total += i
```

위 명령은 셀 전체의 실행 시간을 측정합니다.

---

## 자주 사용하는 Line Magic

| 명령어 | 설명 |
|--------|------|
| `%pwd` | 현재 작업 디렉터리 출력 |
| `%ls` | 현재 디렉터리의 파일 목록 출력 |
| `%history` | 명령 실행 기록 출력 |
| `%reset` | 사용자가 정의한 이름을 제거하여 namespace 초기화 |
| `%who` | namespace에 있는 변수 목록 출력 |
| `%whos` | 변수 목록과 상세 정보 출력 |
| `%matplotlib inline` | matplotlib 그래프를 Notebook 안에 표시 |
| `%timeit` | 한 줄 명령의 실행 시간 측정 |
| `%lsmagic` | 사용 가능한 Magic 명령어 목록 출력 |

---

## 한 셀에서 여러 Line Magic 사용하기

Line Magic은 한 줄에 하나씩 작성하면 같은 셀 안에서 여러 개를 사용할 수 있습니다.

```python
%pwd
%ls
```

위 코드는 현재 작업 디렉터리를 출력한 뒤, 해당 디렉터리의 파일 목록을 출력합니다.

---

## `%timeit`과 `%%timeit`의 차이

일부 Magic 명령어는 Line Magic과 Cell Magic으로 모두 사용할 수 있습니다.

| 명령어 | 적용 범위 | 설명 |
|--------|-----------|------|
| `%timeit` | 한 줄 | 한 줄 명령의 실행 시간 측정 |
| `%%timeit` | 셀 전체 | 셀 전체 코드의 실행 시간 측정 |

```python
%timeit sum(range(1000))
```

```python
%%timeit
total = 0
for i in range(1000):
    total += i
```

---

## 자주 사용하는 Cell Magic

### `%%writefile`

셀의 내용을 파일로 저장합니다.

```python
%%writefile myfile.txt
Hello World
```

위 코드는 셀의 내용을 `myfile.txt` 파일에 저장합니다.

---

### `%%html`

셀 안에 HTML 코드를 작성하고 렌더링합니다.

```html
%%html
<h1>Hello World</h1>
```

---

### `%%javascript` 또는 `%%js`

셀 안에 JavaScript 코드를 작성하고 실행합니다.

```javascript
%%javascript
alert("Hello World");
```

---

### `%%bash`

셀 안에서 Bash 명령어를 실행합니다.

```bash
%%bash
echo "Hello World"
```

---

## SQL Magic이란?

SQL Magic은 Jupyter Notebook에서 SQL 문을 직접 실행할 수 있게 해주는 Magic 기능입니다.

Python 코드 안에서 SQL 문자열을 직접 작성하는 대신, Notebook 셀에서 SQL을 더 간단하게 실행할 수 있습니다.

---

## SQL Magic 사용 준비

SQL Magic을 사용하려면 먼저 관련 패키지를 설치해야 합니다.

```python
!pip install ipython-sql
```

설치 후 Notebook에서 SQL 확장을 로드합니다.

```python
%load_ext sql
```

---

## SQL Magic으로 데이터베이스 연결하기

SQL 쿼리를 실행하기 전에 SQL Magic과 데이터베이스 서버 사이의 연결을 만들어야 합니다.

SQLite 데이터베이스 파일 `HR.db`에 연결하는 예시는 다음과 같습니다.

```python
%sql sqlite:///HR.db
```

여기서 `sqlite:///HR.db`는 현재 작업 디렉터리에 있는 `HR.db` SQLite 데이터베이스 파일에 연결한다는 의미입니다.

---

## Line SQL Magic

한 줄짜리 SQL 쿼리는 `%sql`을 사용합니다.

```python
%sql SELECT * FROM EMPLOYEES;
```

Line Magic은 한 줄 입력에 적합합니다.

---

## Cell SQL Magic

여러 줄 SQL 쿼리는 `%%sql`을 사용합니다.

```sql
%%sql
SELECT *
FROM EMPLOYEES
WHERE DEP_ID = 'D01';
```

Cell Magic은 여러 줄의 SQL 문을 읽기 좋게 작성할 때 유용합니다.

---

## SQL Magic 사용 흐름

SQL Magic을 사용하는 기본 흐름은 다음과 같습니다.

1. SQL Magic 패키지 설치
2. SQL 확장 로드
3. 데이터베이스 연결
4. `%sql` 또는 `%%sql`로 쿼리 실행

```python
!pip install ipython-sql
%load_ext sql
%sql sqlite:///HR.db
```

```sql
%%sql
SELECT *
FROM EMPLOYEES;
```

---

## Line Magic과 Cell Magic 비교

| 구분 | Line Magic | Cell Magic |
|------|------------|------------|
| 접두사 | `%` | `%%` |
| 적용 범위 | 한 줄 | 셀 전체 |
| SQL Magic 예 | `%sql SELECT * FROM EMPLOYEES;` | `%%sql` 후 여러 줄 쿼리 작성 |
| 적합한 상황 | 짧은 명령 | 여러 줄 코드나 SQL |

---

## 핵심 요약

- Magic 명령어는 Jupyter Notebook에서 특수 기능을 제공하는 명령어입니다.
- Line Magic은 `%`로 시작하며 한 줄에 적용됩니다.
- Cell Magic은 `%%`로 시작하며 셀 전체에 적용됩니다.
- `%pwd`, `%ls`, `%history`, `%who`, `%whos`, `%matplotlib inline`, `%timeit`, `%lsmagic` 등이 자주 사용됩니다.
- SQL Magic을 사용하려면 `ipython-sql`을 설치하고 `%load_ext sql`로 확장을 로드합니다.
- 데이터베이스 연결 후 `%sql` 또는 `%%sql`을 사용해 Jupyter Notebook에서 SQL 쿼리를 실행할 수 있습니다.
