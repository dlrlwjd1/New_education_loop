# Loops

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: Python Programming Fundamentals
- 재생 시간: 7분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/19yQq/loops)
- 이 비디오에서는 많은 시각적 예제를 사용할 것입니다.
- range 함수는 순서가 지정된 시퀀스를 목록 i로 출력합니다.

## 내용
### 핵심 내용
- 이 비디오에서는 많은 시각적 예제를 사용할 것입니다.
- range 함수는 순서가 지정된 시퀀스를 목록 i로 출력합니다.
- range 함수의 입력값이 두 개이거나 첫 번째 입력값이 두 번째 입력값보다 작은 경우 출력값은 첫 번째 입력값에서 시작하는 시퀀스입니다.
- 마찬가지로 다음 정사각형의 경우 정사각형 1의 경우 정사각형 1은 흰색 정사각형이라고 말할 수 있습니다.
- 다음 정사각형의 경우 정사각형 2의 경우 정사각형 2는 흰색 정사각형이라고 말할 수 있습니다.
- 첫 번째 반복의 경우 변수 값은 0번째 인덱스에 해당하는 빨간색이고 i의 값은 0입니다.

### 한국어 Transcript

이 비디오에서는 루프, 특히 for 루프와 while 루프에 대해 알아보겠습니다. 이 비디오에서는 많은 시각적 예제를 사용할 것입니다. 데이터를 사용한 예는 랩을 참조하십시오. 루프에 대해 이야기하기 전에 range 함수에 대해 알아보겠습니다. range 함수는 순서가 지정된 시퀀스를 목록 i로 출력합니다.

입력값이 양의 정수인 경우 출력값은 시퀀스입니다. 시퀀스는 입력값과 동일한 개수의 요소를 포함하지만 0부터 시작합니다. 예를 들어, 입력값이 3인 경우 출력값은 시퀀스 0, 1, 2입니다. range 함수의 입력값이 두 개이거나 첫 번째 입력값이 두 번째 입력값보다 작은 경우 출력값은 첫 번째 입력값에서 시작하는 시퀀스입니다. 그런 다음 시퀀스는 두 번째 숫자까지 반복되지만 두 번째 숫자까지 반복됩니다.

입력 10과 15의 경우 다음 시퀀스를 얻습니다. range 함수의 더 많은 기능은 실습을 참조하십시오. 참고로, 파이썬 3을 사용하는 경우, range 함수는 파이썬 2에서처럼 목록을 명시적으로 생성하지 않습니다. 이 섹션에서는 네 개의 루프를 다룰 것입니다. 목록에 초점을 맞출 것이지만 많은 프로시저를 튜플에서 사용할 수 있습니다.

색깔이 있는 사각형 그룹을 생각해 보십시오. 각 색상의 사각형을 흰색 정사각형으로 바꾸고 싶다고 가정해 보겠습니다. 각 사각형에 숫자를 주어 일을 좀 더 쉽게 만들고 모든 사각형 그룹을 정사각형이라고 합시다. 만약 누군가에게 정사각형 0을 흰색 정사각형으로 바꾸라고 말하고 싶으면 다음과 같이 말할 수 있습니다. “ equals”는 제곱 0을 흰색 정사각형으로 바꿉니다.

또는 제곱 0의 경우 제곱 0은 흰색 정사각형이라고 말할 수 있습니다. 마찬가지로 다음 정사각형의 경우 정사각형 1의 경우 정사각형 1은 흰색 정사각형이라고 말할 수 있습니다. 다음 정사각형의 경우 정사각형 2의 경우 정사각형 2는 흰색 정사각형이라고 말할 수 있습니다. 각 사각형에 대해 이 과정을 반복합니다. 변경되는 유일한 것은 우리가 참조하는 사각형의 인덱스입니다.

파이썬에서 비슷한 작업을 수행하려는 경우 실제 제곱을 사용할 수 없습니다. 이제 목록을 사용하여 상자를 표현해 보겠습니다. 목록의 각 요소는 색상을 나타내는 문자열입니다. 각 요소의 색상 이름을 흰색으로 변경하고 싶습니다. 목록의 각 요소에는 다음과 같은 색인이 있습니다.

이것은 Python에서 루프를 수행하는 구문입니다. range 함수는 목록을 생성합니다. 코드는 인덴트의 모든 내용을 5번 반복하기만 하면 됩니다. 값을 6으로 변경하면 6번 변경됩니다. 하지만 i의 값은 매번 1씩 증가합니다.

이 세그먼트에서는 리스트의 i번째 요소를 white라는 문자열로 변경합니다. 루프의 각 반복은 들여쓰기 시작 부분에서 시작됩니다. 그런 다음 인덴트에서 모든 것을 실행합니다. 목록의 첫 번째 요소는 흰색으로 설정됩니다. 그런 다음 인덴트의 시작 부분으로 이동합니다.

목록의 값을 변경하는 줄에 도달하면 인덱스 1의 값을 흰색으로 설정합니다. 인덱스 2에 대해 이 과정을 반복합니다. 프로세스는 최종 요소에 도달할 때까지 다음 인덱스를 위해 계속됩니다. Python에서 직접 목록이나 튜플을 반복할 수도 있습니다. 목록을 반복할 때마다 목록 제곱의 한 요소를 변수 제곱에 전달합니다.

이 섹션에서 변수 제곱의 값을 표시해 보겠습니다. 첫 번째 반복의 경우 square 값은 빨간색입니다. 그런 다음 두 번째 반복을 시작합니다. 두 번째 반복의 경우 square 값은 노란색입니다. 그런 다음 세 번째 반복을 시작합니다.

최종 반복의 경우 square 값은 녹색입니다. 데이터를 반복하는 데 유용한 함수는 enumerate입니다. 목록의 색인과 요소를 가져오는 데 사용할 수 있습니다. 각 사각형의 인덱스를 나타내는 숫자와 함께 상자 비유를 사용해 보겠습니다. 목록을 반복하고 각 요소의 색인을 제공하는 구문입니다.

목록 사각형을 사용하고 색상 이름을 사용하여 색상이 지정된 사각형을 나타냅니다. enumerate 함수의 인수는 목록 (여기서는 사각형) 입니다. 변수 i는 인덱스이고 변수 square는 목록의 해당 요소입니다. 화면 왼쪽 부분을 사용하여 루프의 다양한 반복에 대해 변수 square 및 i의 다양한 값을 표시해 보겠습니다. 첫 번째 반복의 경우 변수 값은 0번째 인덱스에 해당하는 빨간색이고 i의 값은 0입니다.

두 번째 반복에서 변수 square의 값은 노란색이고 i의 값은 인덱스, 즉 1에 해당합니다. 마지막 인덱스에 대해 이 과정을 반복합니다. while 루프는 for 루프와 비슷하지만, 명령문을 정해진 횟수만큼 실행하는 대신 while 루프는 조건이 충족될 때만 실행됩니다. 목록 사각형의 모든 주황색 사각형을 목록 새 사각형으로 복사하고 싶지만 주황색이 아닌 사각형이 발견되면 중단하고 싶다고 가정해 보겠습니다. 우리는 사각형의 값을 미리 알지 못합니다.

정사각형이 주황색일 때 프로세스를 계속하거나 정사각형이 주황색인지 확인하면 됩니다. 그렇지 않으면 우리는 멈출 것입니다. 첫 번째 예에서는 사각형이 주황색인지 확인합니다. 조건을 만족하므로 정사각형을 복사합니다. 두 번째 사각형에 대해서도 이 과정을 반복합니다.

조건이 충족되었으므로 사각형을 복사합니다. 다음 반복에서는 보라색 사각형을 만납니다. 조건이 충족되지 않아 프로세스를 중단합니다. 이것은 기본적으로 while 루프가 하는 일입니다. 왼쪽 그림을 사용하여 코드를 표현해 보겠습니다.

색상 이름이 있는 목록을 사용하여 다른 사각형을 나타냅니다. while 문은 대괄호 안의 조건이 false가 될 때까지 들여쓰기 내의 명령문을 반복해서 실행합니다. 목록 사각형의 첫 번째 요소 값을 목록 새 사각형에 추가합니다. 목록 사각형의 두 번째 요소 값을 목록 새 사각형에 추가합니다. i의 값을 증가시키면 이제 배열 제곱의 값이 보라색이 됩니다.

따라서 while 명령문의 조건은 false이고 루프를 종료합니다. 랩에서 실제 데이터를 사용한 루프 예제를 더 확인해 보세요.

## 예시
- 예를 들어, 입력값이 3인 경우 출력값은 시퀀스 0, 1, 2입니다.
- range 함수의 더 많은 기능은 실습을 참조하십시오.
- 코드는 인덴트의 모든 내용을 5번 반복하기만 하면 됩니다.
- while 루프는 for 루프와 비슷하지만, 명령문을 정해진 횟수만큼 실행하는 대신 while 루프는 조건이 충족될 때만 실행됩니다.

## 요약
- 마찬가지로 다음 정사각형의 경우 정사각형 1의 경우 정사각형 1은 흰색 정사각형이라고 말할 수 있습니다.
- 다음 정사각형의 경우 정사각형 2의 경우 정사각형 2는 흰색 정사각형이라고 말할 수 있습니다.
- 첫 번째 반복의 경우 변수 값은 0번째 인덱스에 해당하는 빨간색이고 i의 값은 0입니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we will cover loops, in particular, for loops and while loops. We will use many visual examples in this video. See the labs for examples with data. Before we talk about loops, let's go over the range function. The range function outputs an ordered sequence as a list i.

If the input is a positive integer, the output is a sequence. The sequence contains the same number of elements as the input, but starts at 0. For example, if the input is 3, the output is the sequence 0, 1, 2. If the range function has two inputs, or the first input is smaller than the second input, the output is a sequence that starts at the first input. Then the sequence iterates up to, but not including, the second number.

For the input 10 and 15, we get the following sequence. See the labs for more capabilities of the range function. Please note, if you use Python 3, the range function will not generate a list explicitly like in Python 2. In this section, we will cover four loops. We will focus on lists, but many of the procedures can be used on tuples.

Loops perform a task over and over. Consider the group of colored squares. Let's say we would like to replace each colored square with a white square. Let's give each square a number to make things a little easier, and refer to all the group of squares as squares. If we wanted to tell someone to replace square 0 with a white square, we would say, equals replace square 0 with a white square.

Or we can say, for square 0 in squares, square 0 equals white square. Similarly, for the next square, we can say, for square 1 in squares, square 1 equals white square. For the next square, we can say, for square 2 in squares, square 2 equals white square. We repeat the process for each square. The only thing that changes is the index of the square we are referring to.

If we are going to perform a similar task in Python, we cannot use actual squares. So let's use a list to represent the boxes. Each element in the list is a string representing the color. We want to change the name of the color in each element to white. Each element in the list has the following index.

This is a syntax to perform a loop in Python. The range function generates a list. The code will simply repeat everything in the indent 5 times. If you were to change the value to 6, it would do it 6 times. However, the value of i is incremented by 1 each time.

In this segment, we change the ith element of the list to the string white. The value of i is set to 0. Each iteration of the loop starts at the beginning of the indent. We then run everything in the indent. The first element in the list is set to white.

We then go to the start of the indent. We progress down each line. When we reach the line to change the value of the list, we set the value of index 1 to white. The value of i increases by 1. We repeat the process for index 2.

The process continues for the next index until we have reached the final element. We can also iterate through a list or tuple directly in Python. We do not even need to use indices. Here is the list squares. Each iteration of the list we pass one element of the list squares to the variable square.

Let's display the value of the variable square on this section. For the first iteration, the value of square is red. We then start the second iteration. For the second iteration, the value of square is yellow. We then start the third iteration.

For the final iteration, the value of square is green. A useful function for iterating data is enumerate. It can be used to obtain the index and the element in the list. Let's use the box analogy with the numbers representing the index of each square. This is the syntax to iterate through a list and provide the index of each element.

We use the list squares and use the names of the colors to represent the colored squares. The argument of the function enumerate is the list, in this case squares. The variable i is the index and the variable square is the corresponding element in the list. Let's use the left part of the screen to display the different values of the variable square and i for the various iterations of the loop. For the first iteration, the value of the variable is red, corresponding to the zeroth index and the value for i is zero.

For the second iteration, the value of the variable square is yellow and the value of i corresponds to its index, i. We repeat the process for the last index. While loops are similar to for loops, but instead of executing a statement a set number of times, a while loop will only run if a condition is met. Let's say we would like to copy all the orange squares from the list squares to the list new squares, but we would like to stop if we encounter a non-orange square. We don't know the value of the squares beforehand.

We would simply continue the process while the square is orange or see if the square equals orange. If not, we would stop. For the first example, we would check if the square was orange. It satisfies the condition, so we would copy the square. We repeat the process for the second square.

The condition is met, so we copy the square. In the next iteration, we encounter a purple square. The condition is not met, so we stop the process. This is essentially what a while loop does. Let's use the figure on the left to represent the code.

We will use a list with the names of the color to represent the different squares. We create an empty list of new squares. In reality, the list is of indeterminate size. We start the index at 0. The while statement will repeatedly execute the statements within the indent until the condition inside the bracket is false.

We append the value of the first element of the list squares to the list new squares. We increase the value of i by 1. We append the value of the second element of the list squares to the list new squares. We increment the value of i. Now the value in the array squares is purple.

Therefore, the condition for the while statement is false, and we exit the loop. Check out the labs for more examples of loop, many with real data.

</details>
