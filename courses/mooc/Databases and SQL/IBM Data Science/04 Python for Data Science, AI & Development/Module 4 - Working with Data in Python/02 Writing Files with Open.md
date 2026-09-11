# Writing Files with Open

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: Working with Data in Python
- 재생 시간: 3분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/2ijQE/writing-files-with-open)
- 또한 열린 기능을 사용하여 파일에 쓸 수도 있습니다.
- Python의 열린 함수를 사용하여 텍스트 파일을 만드는 파일 개체를 가져옵니다.

## 내용
### 핵심 내용
- 또한 열린 기능을 사용하여 파일에 쓸 수도 있습니다.
- Python의 열린 함수를 사용하여 텍스트 파일을 만드는 파일 개체를 가져옵니다.
- 루프의 첫 번째 이터레이션은 목록의 첫 번째 요소를 Example2 파일에 기록합니다.
- 먼저 Example1 파일을 읽고 파일 객체, 읽기 파일을 통해 상호 작용합니다.
- 그런 다음 새 파일 예3을 만들고 파일 객체 쓰기 파일을 사용하여 파일 파일과 상호 작용합니다.
- for 루프는 파일 객체의 줄을 가져와 파일을 읽은 다음 파일 객체, 쓰기 파일을 사용하여 Example3 파일에 저장합니다.

### 한국어 Transcript

또한 열린 기능을 사용하여 파일에 쓸 수도 있습니다. Python의 열린 함수를 사용하여 텍스트 파일을 만드는 파일 개체를 가져옵니다. 메서드 쓰기를 해당 파일에 쓸 수 있습니다. 결과적으로 텍스트가 파일에 기록됩니다. 디렉토리에 해당 파일이 있으면 해당 파일을 덮어쓰고 파일 디렉토리를 덮어씁니다.

쓰기 위해 모드 매개변수를 W로 설정합니다. with 문을 사용하기 전과 같이 코드는 들여쓰기 블록에서 모든 항목을 실행한 다음 파일을 닫습니다. 우리는 데이터를 파일에 쓰기 위해 방법을 사용합니다. 인수는 파일에 입력하고자 하는 텍스트입니다. 쓰기 방법을 사용할 때마다 순차적으로 파일에 씁니다.

이 이름을 처음 호출하면 새 줄을 나타내는 슬래시로 n이\n된 "A줄"을 씁니다. 이 메서드를 두 번째로 호출하면 "B줄"이\n되면 파일이 닫힙니다. 목록의 각 요소를 파일에 쓸 수 있습니다. 전과 마찬가지로 with 명령과 열린 함수를 사용하여 파일을 만듭니다. for 루프를 사용하여 첫 번째 선의 각 요소를 읽고 변수 라인에 전달합니다.

루프의 첫 번째 이터레이션은 목록의 첫 번째 요소를 Example2 파일에 기록합니다. 두 번째 이터레이션은 목록의 두 번째 요소 등을 기록합니다. 소문자 a를 사용하여 추가 모드를 설정할 수 있습니다. 새 파일은 만들어지지 않고 기존 파일만 사용합니다. 메서드 쓰기를 호출하면 기존 파일에 쓴 다음 "This is line C"를 추가한 다음 파일을 닫습니다.

다음과 같이 하나의 파일을 새 파일로 복사할 수 있습니다. 먼저 Example1 파일을 읽고 파일 객체, 읽기 파일을 통해 상호 작용합니다. 그런 다음 새 파일 예3을 만들고 파일 객체 쓰기 파일을 사용하여 파일 파일과 상호 작용합니다. for 루프는 파일 객체의 줄을 가져와 파일을 읽은 다음 파일 객체, 쓰기 파일을 사용하여 Example3 파일에 저장합니다. 첫 번째 이터레이션은 첫 번째 라인을 복사합니다.

두 번째 이터레이션은 파일 끝에 도달할 때까지 두 번째 줄을 복사합니다. 더 많은 예를 보려면 실험실에서 확인하세요.

## 예시
- with 문을 사용하기 전과 같이 코드는 들여쓰기 블록에서 모든 항목을 실행한 다음 파일을 닫습니다.
- 전과 마찬가지로 with 명령과 열린 함수를 사용하여 파일을 만듭니다.

## 요약
- 먼저 Example1 파일을 읽고 파일 객체, 읽기 파일을 통해 상호 작용합니다.
- 그런 다음 새 파일 예3을 만들고 파일 객체 쓰기 파일을 사용하여 파일 파일과 상호 작용합니다.
- for 루프는 파일 객체의 줄을 가져와 파일을 읽은 다음 파일 객체, 쓰기 파일을 사용하여 Example3 파일에 저장합니다.

<details>
<summary>영문 Transcript 원문</summary>

We can also write to files using the open function. We will use Python's open function to get a file object to create a text file. We can apply method 'write' to write data to that file. As a result, text will be written to the file. We can create the file Example2.

We use the 'open' function. The first argument is the file path. This is made up of the file name (if you have that file in your directory, it will be overwritten,) and the file directory. We set the mode parameter to W for writing. Finally, we have the file object.

As before, we use the 'with' statement. The code will run everything in the indent block, then close the file. We create the file object, File1. We use the open function. This creates a file Example2.

txt in your directory. We use the method write, to write data into the file. The argument is the text we would like input into the file. If we use the write method successively, each time it is called, it will write to the file. The first time it is called, we will write, "This is line A" with a slash-n to represent a new line.

The second time we call the method, it will write, "This is line B" then it will close the file. We can write each element in a list to a file. As before, we use a 'with' command and the open function to create a file. The list, Lines, has three elements consisting of text. We use a 'for' loop to read each element of the first lines and pass it to the variable line.

The first iteration of the loop writes the first element of the list to the file Example2. The second iteration writes the second element of the list and so on. At the end of the loop, the file will be closed. We can set the mode to appended using a lowercase 'a'. This will not create a new file, but just use the existing file.

If we call the method write, it will just write to the existing file, then add "This is line C" then close the file. We can copy one file to a new file as follows. First, we read the file Example1 and interact with it via the file object, readfile. Then we create a new file Example3 and use the file object writefile to interact with it. The for loop takes a line from the file object, readfile, and stores it in the file Example3 using the file object, writefile.

The first iteration copies the first line. The second iteration copies the second line, till the end of the file is reached. Then both files are closed. Check out the labs for more examples.

</details>
