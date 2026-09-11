# Creating Files

## 개요

- w(쓰기)·a(추가) 모드로 파일을 생성하고 write/writelines로 내용을 넣는 실습
- 줄바꿈(\n), 덮어쓰기 vs 추가, FileNotFoundError 예외 처리

## 내용

### 파일이 필요한 이유

- 변수의 데이터는 **RAM에만 존재**해 전원이 꺼지면 사라진다 — 파일은 데이터를 영구 보존한다.

### 쓰기 모드로 생성

- `with open("newfile.txt", mode="w") as file:` — w 모드가 새 파일을 만든다. `mode=`를 생략하고 `"w"`만 써도 같다.
- **write("문장")** — 한 줄 쓰기
- **writelines([문장1, 문장2])** — **리스트**를 받아 여러 줄 쓰기. 단, 리스트 내용을 그대로 이어 붙이므로 **줄을 나누려면 \n을 직접 지정**해야 한다.

### w vs a — 덮어쓰기와 추가

- **w 모드는 실행할 때마다 파일을 통째로 교체**한다.
- 기존 내용에 덧붙이려면 **a(append) 모드** — 실행할 때마다 내용이 추가된다. 추가 시에도 시작에 \n이 없으면 이어 붙으므로 주의.

### 예외 처리

- 존재하지 않는 디렉터리에 파일을 만들려 하면 **FileNotFoundError** ("no such file or directory").
- try/except FileNotFoundError로 감싸고, 디렉터리가 실제로 존재하는지 확인하거나 Python에서 디렉터리를 먼저 만들어야 한다.

## 예시

```python
try:
    with open("newfile.txt", "w") as file:          # w = 생성/덮어쓰기
        file.writelines([
            "This is a new file created",
            "\nThis is another line to be added"])   # \n으로 줄 구분

    with open("newfile.txt", "a") as file:          # a = 추가
        file.write("\nAppended line")
except FileNotFoundError as e:
    print("Error", e)
```

## 요약

- w 모드는 파일을 생성하되 매 실행마다 덮어쓰고, a 모드는 기존 파일에 추가한다.
- write는 한 줄, writelines는 리스트로 여러 줄을 쓰며 줄바꿈은 \n으로 직접 지정한다.
- 대상 디렉터리 부재로 인한 FileNotFoundError는 try/except로 처리한다.
