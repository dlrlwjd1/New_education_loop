# Reading Files with Open

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: Working with Data in Python
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/78ZHl/reading-files-with-open)
- 이 단원에서는 Python의 내장 오픈 함수를 사용하여 파일 객체를 만들고 "txt" 파일에서 데이터를 가져옵니다.
- 우리는 Python의 열린 기능을 이용하여 파일 객체를 얻을 것이다.

## 내용
### 핵심 내용
- 이 단원에서는 Python의 내장 오픈 함수를 사용하여 파일 객체를 만들고 "txt" 파일에서 데이터를 가져옵니다.
- 우리는 Python의 열린 기능을 이용하여 파일 객체를 얻을 것이다.
- 파일 이름과 파일 디렉터리로 구성됩니다.
- 데이터 속성 이름을 사용하여 파일 이름을 가져올 수 있습니다.
- 파일 객체 "File1"을 사용할 수 있습니다.
- 그러나 들여쓰기 외부의 파일 내용도 인쇄할 수 있습니다.

### 한국어 Transcript

이 단원에서는 Python의 내장 오픈 함수를 사용하여 파일 객체를 만들고 "txt" 파일에서 데이터를 가져옵니다. 우리는 Python의 열린 기능을 이용하여 파일 객체를 얻을 것이다. 해당 객체에 메서드를 적용하여 파일의 데이터를 읽을 수 있습니다. 파일 이름과 파일 디렉터리로 구성됩니다. 사용되는 일반적인 값에는 읽기 'r', 쓰기용 'w', 덧붙이기 위한 'a'가 포함됩니다.

우리는 읽는데 'r'을 사용할 것이다. 이제 파일 개체를 사용하여 파일에 대한 정보를 얻을 수 있습니다. 데이터 속성 이름을 사용하여 파일 이름을 가져올 수 있습니다. 결과는 파일 이름을 포함하는 문자열입니다. 데이터 속성 모드를 사용하는 개체가 어떤 모드인지 볼 수 있으며 읽기를 나타내는 'r'이 표시됩니다.

메서드 닫기를 사용하여 항상 파일 개체를 닫아야 합니다. 이것은 때때로 지루해질 수 있으므로 "with" 문을 사용합시다. with 문을 사용하여 파일을 여는 것이 좋습니다. 코드는 들여쓰기 블록에서 모든 항목을 실행한 다음 파일을 닫습니다. 파일 객체 "File1"을 사용할 수 있습니다.

코드는 들여쓰기 블록의 모든 작업을 수행한 다음 들여쓰기 끝에 파일을 닫습니다. read 메서드는 파일 값을 "file_stuff" 변수에 문자열로 저장합니다. 파일 컨텐트가 닫혀 있는지 확인할 수 있지만 들여쓰기 외부에서 파일 내용을 읽을 수는 없습니다. 그러나 들여쓰기 외부의 파일 내용도 인쇄할 수 있습니다. 원시 문자열을 검사할 때 "\n을 표시합니다.

" 파이톤은 새 라인을 시작하는 것을 알고 있다. readlines 방법을 사용하여 모든 라인을 목록의 요소로 출력할 수 있습니다. 첫 번째 줄은 목록의 첫 번째 요소에 해당합니다. 두 번째 줄은 목록의 두 번째 요소에 해당합니다. readline 메서드를 사용하여 파일의 첫 줄을 읽을 수 있습니다.

이 명령을 실행하면 첫 번째 행이 "file_stuff" 변수에 저장되고 첫 번째 행이 인쇄됩니다. 읽기 라인 방법을 두 번 사용할 수 있습니다. 처음 호출되면 첫 번째 줄을 "file_stuff" 변수에 저장한 다음 첫 번째 줄을 인쇄합니다. 두 번째 호출에서는 두 번째 줄을 "file_stuff" 변수에 저장한 다음 두 번째 줄을 인쇄합니다. 루프를 사용하여 각 라인을 다음과 같이 개별적으로 인쇄할 수 있습니다.

문자열에서 모든 문자를 격자로 표시해 보겠습니다. 문자열에서 읽을 문자 수를 "readlines" 메서드의 인수로 지정할 수 있습니다. "readlines" 메서드의 인수로 4를 사용하면 파일의 처음 4자를 출력합니다. 이 방법을 호출할 때마다 텍스트를 통과합니다. 인수 16을 사용하여 메서드를 호출하면 처음 16자가 인쇄되고 새 줄이 인쇄됩니다.

이 메서드를 두 번째로 호출하면 다음 5자가 출력됩니다. 마지막으로, 9개의 인수로 마지막 메서드를 호출하면 마지막 9개의 문자가 출력됩니다. 방법 및 기타 파일 형식의 예제를 보려면 Labs를 참조하십시오.

## 예시
- 코드는 들여쓰기 블록에서 모든 항목을 실행한 다음 파일을 닫습니다.
- 코드는 들여쓰기 블록의 모든 작업을 수행한 다음 들여쓰기 끝에 파일을 닫습니다.
- 이 명령을 실행하면 첫 번째 행이 "file_stuff" 변수에 저장되고 첫 번째 행이 인쇄됩니다.

## 요약
- 데이터 속성 이름을 사용하여 파일 이름을 가져올 수 있습니다.
- 파일 객체 "File1"을 사용할 수 있습니다.
- 그러나 들여쓰기 외부의 파일 내용도 인쇄할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

In this section, we will use Python's built-in open function to create a file object and obtain the data from a txt file. We will use Python's open function to get a file object. We can apply a method to that object to read data from the file. We can open the file Example1. We use the open function.

The first argument is the file path. This is made up of the file name and the file directory. The second parameter is the mode. Common values used include r for reading, w for writing, and a for appending. We will use r for reading.

Finally, we have the file object. We can now use the file object to obtain information about the file. We can use the data attribute name to get the name of the file. The result is a string that contains the name of the file. We can see what mode the object is in using the data attribute mode, and r is shown representing read.

You should always close the file object using the method close. This may get tedious sometimes, so let's use the with statement. Using a with statement to open the file is better practice because it automatically closes the file. The code will run everything in the indent block, then closes the file. This code reads the file Example1.

We can use the file object file1. The code will perform all operations in the indent block, then close the file at the end of the indent. The method read stores the values of the file in the variable file underscore stuff as a string. You can print the file content. You can check if the file content is closed, but you cannot read from it outside the indent.

But you can print the file content outside the indent as well. We can print the file content. We will see the following. When we examine the raw string, we will see the slash n. This is so Python knows to start a new line.

We can output every line as an element in a list using the method readlines. The first line corresponds to the first element in the list. The second line corresponds to the second element in the list, and so on. We can use the method readline to read the first line of the file. If we run this command, it will store the first line in the variable file underscore stuff, then print the first line.

We can use the method readline twice. The first time is called. It will save the first line in the variable file underscore stuff, and then print the first line. The second time it's called, it will save the second line in the variable file underscore stuff, and then print the second line. We can use a loop to print out each line individually as follows.

Let's represent every character in a string as a grid. We can specify the number of characters we would like to read from a string as an argument to the method readlines. When we use a four as an argument in the method readlines, we print out the first four characters in the file. Each time we call the method, we will progress through the text. If we call the method with the argument 16, the first 16 characters are printed out and then the new line.

If we call the method a second time, the next five characters are printed out. Finally, if we call the method the last time with the argument 9, the last nine characters are printed out. Check out the labs for more examples of methods and other file types.

</details>
