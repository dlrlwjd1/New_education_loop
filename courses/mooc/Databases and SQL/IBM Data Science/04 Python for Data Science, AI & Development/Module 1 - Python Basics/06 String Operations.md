# String Operations

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: Python Basics
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/hENII/string-operations)
- 다른 변수에 문자열을 바인딩하거나 할당할 수 있습니다.
- 시퀀스의 각 요소는 숫자 배열로 표시된 인덱스를 사용하여 액세스할 수 있습니다.

## 내용
### 핵심 내용
- 다른 변수에 문자열을 바인딩하거나 할당할 수 있습니다.
- 시퀀스의 각 요소는 숫자 배열로 표시된 인덱스를 사용하여 액세스할 수 있습니다.
- 게다가, 우리는 13번째 색인에 접근할 수 있습니다.
- 다른 변수에 문자열을 바인딩할 수 있습니다.
- 우리는 문자열을 연결하거나 결합할 수 있습니다.
- 잭이라는 하위 문자열을 찾을 수 있습니다.

### 한국어 Transcript

Python에서는 문자열이 문자 시퀀스입니다. 문자열은 두 개의 따옴표 안에 포함됩니다. 문자열은 공백이나 숫자일 수 있습니다. 문자열은 특수 문자일 수도 있습니다. 다른 변수에 문자열을 바인딩하거나 할당할 수 있습니다.

문자열을 정렬된 시퀀스로 간주하는 것이 좋습니다. 시퀀스의 각 요소는 숫자 배열로 표시된 인덱스를 사용하여 액세스할 수 있습니다. 첫 번째 인덱스는 다음과 같이 액세스할 수 있습니다. 게다가, 우리는 13번째 색인에 접근할 수 있습니다. 또한 문자열과 음수를 사용할 수도 있습니다.

마지막 요소는 인덱스 음수 요소로 지정됩니다. 첫 번째 요소는 인덱스 음수 15 등으로 얻을 수 있습니다. 다른 변수에 문자열을 바인딩할 수 있습니다. 문자열을 목록이나 튜플 으로 생각하는 것은 유용합니다. 문자열을 시퀀스로 처리하고 시퀀스 작업을 수행할 수 있습니다.

우리는 또한 다음과 같이 보폭 값을 입력할 수 있습니다. 두 개는 우리가 매 두 번째 변수를 선택한다는 것을 나타냅니다. 이 경우 인덱스 4까지 두 번째 값을 반환합니다. len 명령을 사용하여 문자열의 길이를 얻을 수 있습니다. 15개의 요소가 있으므로 결과는 15개입니다.

우리는 문자열을 연결하거나 결합할 수 있습니다. 우리는 끈의 값을 복제할 수 있습니다. 우리는 간단히 그 끈에 복제하고 싶은 횟수에 곱하기만 하면 됩니다. 새 문자열은 원래 문자열의 세 복사본으로 구성됩니다. 즉, 문자열 값은 변경할 수 없지만 새 문자열을 만들 수 있습니다.

예를들어 새 문자열을 원래 변수에 설정하고 새 문자열로 연결하여 만들 수 있습니다. 그 결과는 마이클 잭슨에서 마이클 잭슨으로의 변화가 최고라는 새로운 끈이다. 슬래시는 이스케이프 시퀀스의 시작을 나타냅니다. 이스케이프 시퀀스는 입력하기 어려운 문자열을 나타냅니다. 예를 들어 백슬래시 n은 새 행을 나타냅니다.

백슬래시가 n이면 새 줄에 의해 출력됩니다. 마찬가지로 백슬래시는 탭을 나타냅니다. 결과는 백슬래시 t가 있는 탭에서 제공됩니다. 문자열에 백슬래시를 넣으려면 이중 백슬래시를 사용합니다. 그 결과는 이스케이프 시퀀스 뒤에 백슬래시가 됩니다.

우리는 또한 실 앞에 r을 놓을 수 있습니다. 문자열은 시퀀스이며 이러한 경우 목록 및 튜플에서 작동하는 적용 메서드가 있습니다. 문자열 또한 문자열에서 작용하는 두 번째 메서드 집합을 가지고 있습니다. 문자열 A에 메서드를 적용하면 A와 다른 문자열 B가 새로 만들어집니다. 이 메서드는 소문자를 대문자로 변환합니다.

이 예에서 변수 A를 다음 값으로 설정합니다. 이 방법은 상위에 적용하고 B와 동일하게 설정합니다. B의 값은 A와 비슷하지만 모든 문자는 대문자입니다. 이 메서드는 문자열(예: 새 문자열이 포함된 하위 문자열. 두 번째 주장은 세그먼트와 교환하려는 것입니다.

결과가 세그먼트가 변경된 새 문자열입니다. 출력은 시퀀스의 첫 번째 인덱스입니다. 잭이라는 하위 문자열을 찾을 수 있습니다. 문자열에 하위 문자열이 없으면 출력에는 음수 문자열이 있습니다. 더 많은 예를 보려면 검사실에서 확인하십시오.

## 예시
- len 명령을 사용하여 문자열의 길이를 얻을 수 있습니다.
- 예를 들어 백슬래시 n은 새 행을 나타냅니다.

## 요약
- 다른 변수에 문자열을 바인딩할 수 있습니다.
- 우리는 문자열을 연결하거나 결합할 수 있습니다.
- 잭이라는 하위 문자열을 찾을 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

In Python, a string is a sequence of characters. A string is contained within two quotes. You could also use single quotes. A string can be spaces or digits. A string can also be special characters.

We can bind or assign a string to another variable. It is helpful to think of a string as an ordered sequence. Each element in the sequence can be accessed using an index represented by the array of numbers. The first index can be accessed as follows: We can access index six. Moreover, we can access the 13th index.

We can also use negative indexing with strings. The last element is given by the index negative one. The first element can be obtained by index negative 15 and so on. We can bind a string to another variable. It is helpful to think of string as a list or tuple.

We can treat the string as a sequence and perform sequence operations. We can also input a stride value as follows: The two indicates we'd select every second variable. We can also incorporate slicing. In this case, we return every second value up to index four. We can use the len command to obtain the length of the string.

As there are 15 elements, the result is 15. We can concatenate or combine strings. We use the addition symbols. The result is a new string that is a combination of both. We can replicate values of a string.

We simply multiply the string by the number of times we would like to replicate it- in this case, three. The result is a new string. The new string consists of three copies of the original string. This means you cannot change the value of the string, but you can create a new string. For example, you can create a new string by setting it to the original variable and concatenate it with a new string.

The result is a new string that changes from Michael Jackson to Michael Jackson is the best. Strings are immutable. Back slashes represent the beginning of escape sequences. Escape sequences represent strings that may be difficult to input. For example, backslash "n" represents a new line.

The output is given by a new line after the backslash "n" is encountered. Similarly, backslash "t" represents a tab. The output is given by a tab where the backslash, "t" is. If you want to place a backslash in your string, use a double backslash. The result is a backslash after the escape sequence.

We can also place an "r" in front of the string. Now, let's take a look at string methods. Strings are sequences and as such, have apply methods that work on lists and tuples. Strings also have a second set of methods that just work on strings. When we apply a method to the string A, we get a new string B that is different from A.

Let's do some examples. Let's try with the method "Upper". This method converts lowercase characters to uppercase characters. In this example, we set the variable A to the following value. We apply the method "Upper", and set it equal to B.

The value for B is similar to A, but all the characters are uppercase. The method replaces a segment of the string- i. a substring with a new string. We input the part of the string we would like to change. The second argument is what we would like to exchange the segment with.

The result is a new string with a segment changed. The method find, finds substrings. The argument is the substring you would like to find. The output is the first index of the sequence. We can find the substring Jack.

If the substring is not in the string, the output is negative one. Check the labs for more examples.

</details>
