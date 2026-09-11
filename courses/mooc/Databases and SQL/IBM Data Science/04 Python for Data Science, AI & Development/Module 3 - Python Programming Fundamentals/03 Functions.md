# Functions

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: Python Programming Fundamentals
- 재생 시간: 14분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/zLQQX/functions)
- Python의 내장 함수 중 일부를 사용하는 방법과 자체 함수를 작성하는 방법을 배우게 됩니다.
- 함수는 일부 입력을 받은 다음 일부 출력을 생성하거나 변경합니다.

## 내용
### 핵심 내용
- Python의 내장 함수 중 일부를 사용하는 방법과 자체 함수를 작성하는 방법을 배우게 됩니다.
- 함수는 일부 입력을 받은 다음 일부 출력을 생성하거나 변경합니다.
- 이러한 함수를 저장하여 재사용하거나 다른 사용자의 함수를 사용할 수 있습니다.
- 정렬 함수를 목록 앨범 등급에 적용하고 새 목록 정렬 앨범 등급을 가져올 수 있습니다.
- 함수를 정의한 후 호출할 수 있습니다.
- 글로벌 스코프에서 변수 등급을 정의한 다음 함수를 호출하면 파이썬은 변수 등급에 대한 값이 없음을 알게 됩니다.

### 한국어 Transcript

이 비디오에서는 함수를 다룰 것입니다. Python의 내장 함수 중 일부를 사용하는 방법과 자체 함수를 작성하는 방법을 배우게 됩니다. 함수는 일부 입력을 받은 다음 일부 출력을 생성하거나 변경합니다. 이 함수는 재사용할 수 있는 코드일 뿐입니다. 직접 함수를 구현할 수도 있지만 대부분의 경우 다른 사람의 함수를 사용합니다.

이 경우 함수가 어떻게 작동하는지, 어떤 경우에는 함수를 가져오는 방법만 알면 됩니다. 주황색과 노란색 사각형이 유사한 코드 블록을 나타낸다고 가정해 보겠습니다. 일부 입력을 사용하여 코드를 실행하고 출력을 얻을 수 있습니다. 작업을 수행할 함수를 정의하면 함수를 호출하기만 하면 됩니다. 작은 사각형이 함수를 호출하는 데 사용되는 코드 줄을 나타낸다고 가정해 보겠습니다.

함수를 몇 번 호출하여 이러한 긴 코드 줄을 대체할 수 있습니다. 프로세스는 다음과 같이 생각할 수 있습니다. 함수 f1을 호출하면 함수에 입력값을 전달합니다. 이러한 값은 사용자가 작성한 모든 코드 줄에 전달됩니다. 예를 들어, 이 값을 새 함수 f2에 입력할 수 있습니다.

이 새 함수 f2를 호출하면 값이 다른 코드 행으로 전달됩니다. 이 과정이 반복되어 호출한 함수에 값이 전달됩니다. 이러한 함수를 저장하여 재사용하거나 다른 사용자의 함수를 사용할 수 있습니다. 파이썬에는 많은 내장 함수가 있습니다. 이러한 함수가 내부적으로 어떻게 작동하는지 알 필요는 없지만 해당 함수가 수행하는 작업만 알 수 있습니다.

len 함수는 문자열이나 목록 같은 형식 시퀀스의 입력이나 사전 또는 집합과 같은 형식 컬렉션을 받아 해당 시퀀스 또는 컬렉션의 길이를 반환합니다. len 함수는 이 목록을 인수로 사용하여 결과를 변수 l에 할당합니다. 함수는 목록에 8개의 항목이 있는 것을 확인한 다음 목록의 길이 (이 경우 8) 를 반환합니다. 함수 sum은 튜플이나 리스트와 같은 이터러블을 받아 전체 요소의 합계를 반환합니다. 목록을 sum 함수에 전달하고 결과를 변수 s에 대입합니다.

함수는 모든 요소의 합계를 결정한 다음 반환합니다. 목록을 정렬하는 두 가지 방법이 있습니다. 첫 번째는 sorted 함수를 사용하는 것입니다. list 메소드 sort를 사용할 수도 있습니다. 차이점을 설명하기 위해 이를 예로 들어 보겠습니다.

sorted 함수는 새로운 정렬 목록 또는 튜플을 반환합니다. 정렬 함수를 목록 앨범 등급에 적용하고 새 목록 정렬 앨범 등급을 가져올 수 있습니다. 목록 앨범 등급을 보면 아무것도 바뀌지 않았습니다. 일반적으로 함수는 입력 (이 경우 목록) 을 받습니다. 새로운 출력 (이 경우 정렬 목록) 을 생성합니다.

정렬 방법을 사용하면 목록 앨범 등급이 변경되고 새 목록이 생성되지 않습니다. 다이어그램을 사용하여 프로세스를 설명해 보겠습니다. 이 경우 사각형은 목록 앨범 등급을 나타냅니다. 리스트에 sort 메소드를 적용하면 리스트 앨범 등급이 변경됩니다. 이전 사례와 달리 목록 앨범 등급이 변경되었음을 알 수 있습니다.

이 경우 새 목록이 생성되지 않습니다. 이제 Python에서 함수를 사용하는 방법을 살펴보았으므로 자체 함수를 빌드하는 방법을 살펴보겠습니다. 이제 Python에서 자신만의 함수를 빌드하는 방법을 시작하겠습니다. 이것은 입력 값에 1을 더한 값을 반환하는 Python 함수의 예입니다. 함수를 정의하려면 def 키워드로 시작합니다.

함수 이름은 함수가 수행하는 작업을 설명해야 합니다. 괄호 안에 함수 형식 매개 변수 a가 있고 그 뒤에 콜론이 있습니다. 들여쓰기가 있는 코드 블록이 있습니다. 이 경우 a에 1을 더하고 b에 할당합니다. 함수를 정의한 후 호출할 수 있습니다.

이 함수는 1에서 5에 1을 더하고 6을 반환합니다. 함수를 다시 호출하여 이번에는 변수 c에 할당할 수 있습니다. 함수를 호출할 때의 예제를 살펴보겠습니다. 이것은 파이썬의 단순화된 모델이며, 파이썬은 내부적으로 이렇게 작동하지 않는다는 점에 유의해야 합니다. 함수를 호출하여 입력값 5를 제공합니다.

값 5가 함수에 전달된다고 생각하면 도움이 됩니다. 이 경우 b에 6이라는 값이 할당되었으므로 함수는 6을 반환합니다. 함수를 다시 호출하면 프로세스가 처음부터 시작됩니다. 마지막 호출에서 발생한 모든 작업이 a와 다른 값을 사용하여 다시 발생합니다. 함수는 값 (이 경우 9) 을 반환합니다.

다시 말하지만, 이것은 단지 유용한 비유일 뿐입니다. 이 함수를 좀 더 복잡하게 만들어 봅시다. 처음 몇 줄에 함수를 문서화하는 것이 일반적입니다. 이것은 함수를 사용하는 모든 사람에게 함수의 기능을 알려줍니다. 이 문서는 삼중 따옴표로 묶여 있습니다.

함수의 help 명령을 사용하여 다음과 같이 문서를 표시할 수 있습니다. 그러면 함수 이름과 설명서가 출력됩니다. 나머지 예제에서는 설명서를 포함하지 않겠습니다. 함수에는 여러 매개변수가 있을 수 있습니다. mult 함수는 두 숫자를 곱합니다.

정수 2와 3을 전달하면 결과는 새로운 정수입니다. 정수 10과 부동 소수점 3.14를 전달하면 결과는 부동 소수점 31.4입니다. 정수 2와 문자열 마이클 잭슨을 전달하면 문자열 마이클 잭슨이 두 번 반복됩니다. 곱셈 기호는 시퀀스 반복을 의미할 수도 있기 때문입니다. 실수로 정수에 정수 두 개 대신 문자열을 곱해도 오류가 발생하지 않습니다.

대신 문자열을 얻게 되고 프로그램이 진행되는데, 정수를 예상한 문자열이 있기 때문에 나중에 실패할 수 있습니다. 이 속성을 사용하면 코딩이 더 간단해지지만 코드를 더 철저하게 테스트해야 합니다. 대부분의 경우 함수에는 return 문이 없습니다. 이 경우, 파이썬은 특별한 none 객체를 반환합니다. 실제로 함수에 return 문이 없으면 함수가 아무 것도 반환하지 않는 것처럼 처리할 수 있습니다.

함수 MJ는 단순히 마이클 잭슨이라는 이름을 출력합니다. 이 함수는 마이클 잭슨을 출력합니다. 아무 작업도 수행하지 않는 nowork 함수를 정의해 보겠습니다. 파이썬은 함수의 본문이 비어 있는 것을 허용하지 않으므로 pass 키워드를 사용할 수 있습니다. 이 키워드는 아무 것도 하지 않지만 비어 있지 않은 본문의 요구 사항을 충족합니다.

함수를 호출하여 출력하면 함수는 none을 반환합니다. 백그라운드에서 return 문을 호출하지 않으면 파이썬은 자동으로 none 을 반환합니다. 다음 return 문을 사용하여 함수가 작동하지 않는지 확인하는 것이 좋습니다. 일반적으로 함수는 둘 이상의 작업을 수행합니다. 이 함수는 명령문을 인쇄한 다음 값을 반환합니다.

이 표를 사용하여 함수가 호출될 때의 다양한 값을 표현해 보겠습니다. 함수는 a와 b의 값으로 명령문을 출력합니다. 마지막으로 함수는 b 값 (이 경우 3) 을 반환합니다. 함수에서 루프를 사용할 수 있습니다. 이 함수는 루프 또는 튜플의 값과 인덱스를 출력합니다.

목록 앨범 등급을 입력으로 사용하여 함수를 호출합니다. 오른쪽에 해당 색인과 함께 목록을 표시해 보겠습니다. Stuff는 함수 열거에 대한 입력으로 사용됩니다. 이 연산은 인덱스를 i에 전달하고 목록의 값을 s에 전달합니다. 이 함수는 목록의 첫 번째 인덱스와 첫 번째 값을 출력합니다.

마찬가지로 목록과 색인의 다음 값도 인쇄됩니다. 목록의 최종 값이 출력될 때까지 계속 반복합니다. 가변 파라미터를 사용하면 가변 개수의 요소를 입력할 수 있습니다. 함수의 매개변수 이름에는 별표가 있습니다. 함수를 호출하면 세 개의 매개 변수가 튜플 이름에 압축됩니다.

두 개의 매개 변수만 입력값으로 사용하여 동일한 함수를 호출하면 변수 이름에는 두 개의 요소만 포함됩니다. 결과는 두 개의 값만 출력된다는 것입니다. 변수의 범위는 해당 변수에 액세스할 수 있는 프로그램의 일부입니다. 모든 함수 외부에서 정의된 변수는 글로벌 범위 내에 있다고 합니다. 즉, 정의된 후 어디서나 액세스할 수 있습니다.

다음은 매개 변수 x에 문자열 dc를 더하는 함수입니다. x의 값이 ac로 설정된 부분에 도달하면 이 값은 전역 범위 내에 있습니다. 즉, x는 정의된 후 어디서나 액세스할 수 있습니다. 글로벌 스코프에 정의된 변수를 글로벌 변수라고 합니다. 함수를 호출할 때 새 스코프 또는 add dc의 스코프를 입력합니다.

add dc 함수 (이 경우에는 ac) 를 인수로 전달합니다. 함수 범위 내에서 x 값은 ac dc로 설정됩니다. 이 함수는 값을 반환하고 z에 할당됩니다. 글로벌 스코프 내에서 z 값은 ac dc로 설정됩니다. 값이 반환되면 함수의 범위가 삭제됩니다.

지역 변수는 함수 범위 내에서만 존재합니다. 지역 변수 날짜는 1982년으로 설정됩니다. 함수를 호출하면 새 스코프가 생성됩니다. 이 함수 범위 내에서 날짜 값은 1982로 설정됩니다. 날짜 값은 글로벌 범위 내에 존재하지 않습니다.

전역 범위 내의 변수는 충돌 없이 로컬 범위에 있는 변수와 동일한 이름을 가질 수 있습니다. 지역 변수 날짜는 1982년으로 설정됩니다. 글로벌 변수 날짜는 2017년으로 설정됩니다. 함수를 호출하면 새 스코프가 생성됩니다. 이 범위 내에서 날짜 값은 1982년으로 설정됩니다.

함수를 호출하면 로컬 스코프의 날짜 값을 반환합니다. 글로벌 스코프에서 인쇄할 때는 글로벌 변수 값을 사용합니다. 함수 내에 변수가 정의되지 않은 경우, 파이썬은 전역 범위를 확인합니다. 함수에는 값이 할당되지 않은 변수 등급이 있습니다. 글로벌 스코프에서 변수 등급을 정의한 다음 함수를 호출하면 파이썬은 변수 등급에 대한 값이 없음을 알게 됩니다.

결과적으로 파이썬은 스코프를 떠나 변수 등급이 글로벌 스코프에 존재하는지 확인합니다. ac dc 범위 내에서 글로벌 범위의 등급 값을 사용합니다. 1을 더하면 글로벌 스코프에서 z 값은 10이 됩니다. 등급의 가치는 글로벌 범위 내에서 변경되지 않습니다. 핑크 플로이드 함수를 생각해 봅시다.

global 키워드를 사용하여 클레임 판매 변수를 정의하면 해당 변수는 글로벌 변수가 됩니다. 우리는 이 함수를 핑크 플로이드라고 부릅니다. 클레임 매출 변수는 글로벌 스코프에서 4,500만 이라는 문자열로 설정됩니다. 변수를 출력하면 4,500만 값이 나옵니다. 함수로 할 수 있는 일은 무궁무진합니다.

실험실에서 더 많은 예제를 확인하세요.

## 예시
- 이 함수는 재사용할 수 있는 코드일 뿐입니다.
- 주황색과 노란색 사각형이 유사한 코드 블록을 나타낸다고 가정해 보겠습니다.
- 일부 입력을 사용하여 코드를 실행하고 출력을 얻을 수 있습니다.
- 작은 사각형이 함수를 호출하는 데 사용되는 코드 줄을 나타낸다고 가정해 보겠습니다.

## 요약
- 정렬 함수를 목록 앨범 등급에 적용하고 새 목록 정렬 앨범 등급을 가져올 수 있습니다.
- 함수를 정의한 후 호출할 수 있습니다.
- 글로벌 스코프에서 변수 등급을 정의한 다음 함수를 호출하면 파이썬은 변수 등급에 대한 값이 없음을 알게 됩니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we will cover functions. You will learn how to use some of Python's built-in functions, as well as how to build your own function. Functions take some input, then produce some output or change. The function is just a piece of code you can reuse. You can implement your own function, but in many cases, you use other people's functions.

In this case, you just have to know how the function works, and in some cases, how to import the functions. Let the orange and yellow squares represent similar blocks of code. We can run the code using some input and get an output. If we define a function to do the task, we just have to call the function. Let the small squares represent the lines of code used to call the function.

We can replace these long lines of code by just calling the function a few times. Now we can just call the function. Our code is much shorter. The code performs the same task. You can think of the process like this.

When we call the function f1, we pass an input to the function. These values are passed to all those lines of code you wrote. This returns a value. You can use the value. For example, you can input this value to a new function, f2.

When we call this new function, f2, the value is passed to another set of lines of code. The function returns a value. The process is repeated, passing the values to the function you call. You can save these functions and reuse them, or use other people's functions. Python has many built-in functions.

You don't have to know how those functions work internally, but simply what task those functions perform. The function len takes in an input of type sequence, such as a string or list or type collection, such as a dictionary or set, and returns the length of that sequence or collection. Consider the following list. The len function takes this list as an argument, and we assign the result to the variable l. The function determines there are eight items in the list, then returns the length of the list, in this case, eight.

The function sum takes in an iterable, like a tuple or list, and returns the total of all the elements. Consider the following list. We pass the list into the sum function and assign the result to the variable s. The function determines the total of all the elements, then returns it. In this case, the value is 70.

There are two ways to sort a list. The first is using the function sorted. We can also use the list method sort. Methods are similar to functions. Let's use this as an example to illustrate the difference.

The function sorted returns a new sorted list or tuple. Consider the list album ratings. We can apply the function sorted to the list album ratings and get a new list sorted album rating. The result is a new sorted list. If we look at the list album ratings, nothing has changed.

Generally, functions take an input, in this case, a list. They produce a new output, in this instance, a sorted list. If we use the method sort, the list album ratings will change and no new list will be created. Let's use the diagram to help illustrate the process. In this case, the rectangle represents the list album ratings.

When we apply the method sort to the list, the list album rating changes. Unlike the previous case, we see that the list album rating has changed. In this case, no new list is created. Now that we've gone over how to use functions in Python, let's see how to build our own functions. We will now get you started on building your own functions in Python.

This is an example of a function in Python that returns its input value plus one. To define a function, we start with the keyword def. The name of the function should be descriptive of what it does. We have the function formal parameter a in parentheses, followed by a colon. We have a code block with an indent.

For this case, we add one to a and assign it to b. We return, or output, the value for b. After we define the function, we can call it. The function will add one to five and return a six. We can call the function again, this time assign it to the variable c.

The value for c is 11. Let's explore this further. Let's go over an example when you call a function. It should be noted that this is a simplified model of Python, and Python does not work like this under the hood. We call the function, giving it an input five.

It helps to think of the value of five as being passed to the function. Now the sequences of commands are run. The value of a is five. b would be assigned a value of six. We then return the value of b.

In this case, as b was assigned a value of six, the function returns a six. If we call the function again, the process starts from scratch. We pass in an eight. The subsequent operations are performed. Everything that happened the last call will happen again, with a different value of a.

The function returns a value, in this case, nine. Again, this is just a helpful analogy. Let's try and make this function more complex. It's customary to document the function on the first few lines. This tells anyone who uses the function what it does.

This documentation is surrounded in triple quotes. You can use the help command on the function to display the documentation as follows. This will print out the function name and the documentation. We will not include the documentation in the rest of the examples. A function can have multiple parameters.

The function mult multiplies two numbers. In other words, it finds their product. If we pass the integers two and three, the result is a new integer. If we pass the integer 10 and the float 3.14, the result is a float 31.4. If we pass in the integer two and the string Michael Jackson, the string Michael Jackson is repeated two times.

This is because the multiplication symbol can also mean repeat a sequence. If you accidentally multiply an integer with a string instead of two integers, you won't get an error. Instead, you will get a string and your program will progress, potentially failing later because you have a string where you expected an integer. This property will make coding simpler, but you must test your code more thoroughly. In many cases, a function does not have a return statement.

In these cases, Python will return the special none object. Practically speaking, if your function has no return statement, you can treat it as if the function returns nothing at all. The function MJ simply prints the name Michael Jackson. We call the function. The function prints Michael Jackson.

Let's define the function no work that performs no task. Python doesn't allow a function to have an empty body, so we can use the keyword pass, which doesn't do anything, but satisfies the requirement of a non-empty body. If we call the function and print it out, the function returns a none. In the background, if the return statement is not called, Python will automatically return a none. It is helpful to view the function no work with the following return statement.

Usually, functions perform more than one task. This function prints a statement then returns a value. Let's use this table to represent the different values as the function is called. We call the function with an input of 2. We find the value of b.

The function prints the statement with the value of a and b. Finally, the function returns the value of b, in this case 3. We can use loops in functions. This function prints out the values and indexes of a loop or tuple. We call the function with the list album ratings as an input.

Let's display the list on the right with its corresponding index. Stuff is used as an input to the function enumerate. This operation will pass the index to i and the value in the list to s. The function will begin to iterate through the loop. The function will print the first index and the first value in the list.

We continue iterating through the loop. The values of i and s are updated. The print statement is reached. Similarly, the next values of the list and index are printed. The process is repeated.

The values of i and s are updated. We continue iterating until the final values in the list are printed out. Variadic parameters allow us to input a variable number of elements. Consider the following function. The function has an asterisk on the parameter names.

When we call the function, three parameters are packed into the tuple names. We then iterate through the loop. The values are printed out accordingly. If we call the same function with only two parameters as inputs, the variable names only contain two elements. The result is only two values are printed out.

The scope of a variable is the part of the program where that variable is accessible. Variables are defined outside of any function are said to be within the global scope, meaning they can be accessed anywhere after they are defined. Here we have a function that adds the string dc to the parameter x. When we reach the part where the value of x is set to ac, this is within the global scope, meaning x is accessible anywhere after it is defined. A variable defined in the global scope is called a global variable.

When we call the function, we enter a new scope or the scope of add dc. We pass as an argument the add dc function, in this case ac. Within the scope of the function, the value of x is set to ac dc. The function returns the value and is assigned to z. Within the global scope, the value z is set to ac dc.

After the value is returned, the scope of the function is deleted. Local variables only exist within the scope of a function. Consider the function thriller. The local variable date is set to 1982. When we call the function, we create a new scope.

Within that scope of the function, the value of the date is set to 1982. The value of date does not exist within the global scope. Variables inside the global scope can have the same name as variables in the local scope with no conflict. Consider the function thriller. The local variable date is set to 1982.

The global variable date is set to 2017. When we call the function, we create a new scope. Within that scope, the value of the date is set to 1982. If we call the function, it returns the value of date in the local scope. When we print in the global scope, we use the global variable value.

The global value of the variable is 2017. Therefore, the value is set to 2017. If a variable is not defined within a function, Python will check the global scope. Consider the function ac dc. The function has the variable rating with no value assigned.

If we define the variable rating in the global scope, then call the function, Python will see there is no value for the variable rating. As a result, Python will leave the scope and check if the variable ratings exists in the global scope. It will use the value of ratings in the global scope within the scope of ac dc. In the function, we'll print out a 9. The value of z in the global scope will be 10 as we added 1.

The value of rating will be unchanged within the global scope. Consider the function, Pink Floyd. If we define the variable claimed sales with the keyword global, the variable will be a global variable. We call the function, Pink Floyd. The variable claimed sales is set to the string 45 million in the global scope.

When we print the variable, we get a value of 45 million. There is a lot more you can do with functions. Check out the lab for more examples.

</details>
