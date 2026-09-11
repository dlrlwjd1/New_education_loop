# Reading Files

## 개요

- 파일 읽기의 세 방법: read, readline, readlines — 각각의 반환 형태와 인자
- 절대 경로 vs 상대 경로

## 내용

### 세 가지 읽기 메서드

- **read()** — 파일 **전체 내용을 하나의 문자열**로 반환. 정수를 넘기면 **그 문자 수만큼만** 반환 (인덱스 0부터 시작해 지정 개수까지 — 출력 구간 제어 가능).
- **readline()** — **한 줄을 문자열로** 반환 (첫 줄). 정수 인자를 주면 그 줄에서 지정한 문자 수만 반환 (예: 10 → 첫 줄의 처음 10글자).
- **readlines()** — 전체 내용을 읽어 **순서 있는 리스트**로 반환. 리스트이므로 순회하거나 조건으로 특정 줄을 뽑을 수 있다.
- with open ... as file로 얻은 file 자체를 for 루프에 돌려도 기본적으로 줄 리스트처럼 순회된다.

### 경로

- **절대 경로(absolute path)** — 앞의 / 또는 드라이브 라벨을 포함, 어느 위치에서든 파일을 찾을 전체 정보를 담는다.
- **상대 경로(relative path)** — 루트 참조 없이 **호출하는 파일 기준** — 현재 작업 디렉터리에서 찾는 데 필요한 정보만 담는다.
- 같은 디렉터리의 파일은 이름만으로 읽을 수 있다.

## 예시

```python
with open("sample.txt", "r") as file:
    print(file.read())        # 전체 내용
    # print(file.read(44))    # 처음 44글자
    # print(file.readline())  # 첫 줄만
    # print(file.readlines()) # 줄 리스트 [ ... ]

    data = file.readlines()
    for x in data:
        print(x)              # 줄 단위 출력
```

## 요약

- read는 전체(또는 지정 문자 수), readline은 한 줄, readlines는 줄 리스트를 반환한다.
- 리스트 반환을 이용해 for 루프로 줄 단위 처리를 한다.
- 다른 위치의 파일은 절대/상대 경로 개념을 구분해 지정한다.
