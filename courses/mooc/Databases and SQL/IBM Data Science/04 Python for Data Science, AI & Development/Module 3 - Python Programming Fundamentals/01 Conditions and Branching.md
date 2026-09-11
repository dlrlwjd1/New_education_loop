# Conditions and Branching

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: Python Programming Fundamentals
- 재생 시간: 10분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/WuZVi/conditions-and-branching)
- 그런 다음 어떤 조건에 따라 Boolean을 생성합니다.
- 두 개의 등호로 표시된 등식 연산자를 사용하여 두 값이 같은지 확인할 수 있습니다.

## 내용
### 핵심 내용
- 그런 다음 어떤 조건에 따라 Boolean을 생성합니다.
- 두 개의 등호로 표시된 등식 연산자를 사용하여 두 값이 같은지 확인할 수 있습니다.
- 연령이 17세인 경우 변수 age 값을 17로 설정합니다.
- 연령이 19세인 경우 변수 age 값을 19로 설정합니다.
- 연령이 17세인 경우 변수 age 값을 17로 설정합니다.
- 위 조건이 거짓인 경우 조건이 true인 경우 대체 표현식이 실행됩니다.

### 한국어 Transcript

이 비디오에서는 조건과 브랜칭에 대해 알아봅니다. 비교 연산은 일부 값 또는 피연산자를 비교합니다. 그런 다음 어떤 조건에 따라 Boolean을 생성합니다. 값을 a에 6으로 할당한다고 가정해 보겠습니다. 두 개의 등호로 표시된 등식 연산자를 사용하여 두 값이 같은지 확인할 수 있습니다.

이 경우 7이 6과 같으면 이 경우 6은 7과 같지 않으므로 결과는 false입니다. 값 6에 대해 동일성 테스트를 수행하면 두 값이 같을 것입니다. 그 결과 우리는 진실을 얻게 될 것입니다. 다음과 같은 동등 비교 연산자를 고려해 보십시오. 왼쪽 피연산자의 값 (이 경우 변수 i) 이 오른쪽 피연산자의 값 (이 경우 5) 보다 크면 조건이 true가 되고 그렇지 않으면 false가 됩니다.

왼쪽에 i의 몇 가지 값을 표시해 보겠습니다. 5보다 큰 값은 녹색으로, 나머지는 빨간색으로 표시해 보겠습니다. i를 6으로 설정하면 6이 5보다 크다는 것을 알 수 있으며 결과적으로 true를 얻습니다. 플로트에도 동일한 연산을 적용할 수 있습니다. 연산자를 다음과 같이 수정하면 왼쪽 피연산자 i가 오른쪽 피연산자의 값 (이 경우 5) 보다 크거나 같으면 조건이 true가 됩니다.

이 경우 숫자 줄에 값 5를 포함하면 그에 따라 색상이 녹색으로 바뀝니다. i의 값을 5로 설정하면 피연산자는 true를 생성합니다. i의 값을 2로 설정하면 2는 5보다 작기 때문에 false가 됩니다. 왼쪽 피연산자의 값 (이 경우 i) 이 오른쪽 피연산자의 값 (이 경우 6) 보다 작으면 조건에 맞는 값이 됩니다. 다시 말하지만, 이를 컬러 숫자선으로 표현할 수 있습니다.

부등식이 참인 영역은 녹색으로 표시되고, 불평등이 거짓인 영역은 빨간색으로 표시됩니다. i의 값을 2로 설정하면 2가 6보다 작으므로 결과는 참입니다. 부등식 검정에서는 등호 앞에 설명 표시를 사용합니다. 두 피연산자가 같지 않으면 조건이 true가 됩니다. 조건이 참이면 해당하는 숫자가 녹색으로 표시되고, 조건이 false인 경우 빨간색으로 표시됩니다.

i를 2로 설정하면 2는 6이 아니므로 연산자는 true입니다. 동등 테스트를 사용하여 AC, DC 및 마이클 잭슨을 비교하면 문자열이 동일하지 않기 때문에 거짓이 나옵니다. 부등식 테스트를 사용하면 문자열이 다르기 때문에 true를 얻습니다. 더 많은 예제는 실습을 참조하십시오. 브랜칭을 사용하면 다른 입력에 대해 다른 명령문을 실행할 수 있습니다.

if 문을 잠긴 방이라고 생각하면 도움이 됩니다. 진술이 참이면 방에 들어갈 수 있고 프로그램에서 미리 정의된 작업을 실행할 수 있습니다. 설명이 거짓이면 프로그램에서 작업을 건너뛰게 됩니다. 예를 들어 AC, DC 콘서트를 나타내는 파란색 직사각형을 생각해 보십시오. 개인이 18세 이상이면 AC, DC 콘서트에 입장할 수 있습니다.

18세 미만인 경우 콘서트에 입장할 수 없습니다. 따라서 콘서트에 대한 액세스 권한이 부여되지 않으므로 계속 진행해야 합니다. 개인이 19세인 경우 해당 조건은 참입니다. 그러면 그들은 계속 나아갈 수 있습니다. 다음은 이전 예제의 if 문 구문입니다.

참일 수도 있고 거짓일 수도 있는 표현이 있습니다. 들여쓰기 내에는 조건이 참일 때 실행되는 표현식이 있습니다. if 문 뒤의 명령문은 조건이 참인지 거짓인지에 관계없이 실행됩니다. 연령이 17세인 경우 변수 age 값을 17로 설정합니다. 따라서 프로그램은 인쇄할 명령문을 실행하지 않습니다.

이 경우에는 그냥 무브먼트를 인쇄합니다. 연령이 19세인 경우 변수 age 값을 19로 설정합니다. 따라서 프로그램은 명령문을 실행하여 인쇄합니다. else 문은 동일한 조건이 false인 경우 다른 코드 블록을 실행합니다. ACDC 콘서트 비유를 다시 사용하겠습니다.

사용자가 17세인 경우 ACDC 콘서트에 갈 수 없습니다. 하지만 보라색 사각형으로 표시된 미트 로프 콘서트에 갈 수 있습니다. 개인이 19세인 경우 해당 조건은 참입니다. ACDC 콘서트에 참가할 수 있습니다. 그러면 이전처럼 계속 진행할 수 있습니다.

다른 문장을 추가하기만 하면 됩니다. 그런 다음 인덴트를 사용하여 실행하려는 표현식을 추가합니다. 연령이 17세인 경우 변수 age 값을 17로 설정합니다. 따라서 else 문장으로 넘어갑니다. 이것은 미트로프 콘서트에 참석하는 개인에 해당합니다.

연령이 19세인 경우 변수 age 값을 19로 설정합니다. 따라서 프로그램은 사용자가 입력할 명령문을 실행하여 인쇄합니다. 프로그램은 else 문에 있는 표현식을 건너뛰고 있습니다. 그리고 나머지 표현식을 계속 실행합니다. elif 문을 사용하면 else if의 줄임말로 추가 조건을 확인할 수 있습니다.

위 조건이 거짓인 경우 조건이 true인 경우 대체 표현식이 실행됩니다. 개인이 18세인 경우 핑크 플로이드 콘서트에 갈 것입니다. ACDC나 미트로프 콘서트에 참석하는 대신 18세의 사람은 19세 이상이 아니므로 해당 지역에 입장합니다. 하지만 18살이 된 그들은 핑크 플로이드에 다니고 있습니다. 핑크 플로이드를 본 후 그들은 이동합니다.

조건과 함께 elif 문을 추가하기만 하면 됩니다. 그런 다음 명령문이 true인 경우 실행할 표현식을 추가합니다. 왼쪽에 있는 코드를 설명해 보겠습니다. 따라서 elif 명령문의 상태가 확인됩니다. 그래서 인쇄를 해서 핑크 플로이드를 보러 가죠.

그러면 우리는 이전처럼 계속 나아갈 것입니다. 변수 연령이 17세인 경우 미트로프를 보러 가라는 문구가 인쇄됩니다. 마찬가지로, 연령이 18세 이상인 경우 입력할 수 있는 명세서가 인쇄됩니다. 실습에서 더 많은 예제를 확인하세요. 로직 연산은 부울 값을 사용하여 다양한 부울 값을 생성합니다.

첫 번째 작업은 not 연산자입니다. 입력값이 true인 경우 결과는 false입니다. 마찬가지로, 입력값이 false인 경우 결과는 true입니다. A와 B가 부울 변수를 나타낸다고 합시다. or 연산자는 두 값을 받아 새 부울 값을 생성합니다.

이 표를 사용하여 다양한 값을 나타낼 수 있습니다. 첫 번째 열은 A의 가능한 값을 나타내고, 두 번째 열은 B의 가능한 값을 나타냅니다. 마지막 열은 or 연산 적용 결과를 나타냅니다. 모든 부울 값이 false인 경우에만 or 연산자가 false를 생성하는 것을 볼 수 있습니다. 이 앨범은 70년대 또는 90년대에 제작되었습니다.

가변 앨범 연도가 80년대에 속하지 않는 경우 앨범 연도를 1990년으로 설정했을 때 어떤 일이 벌어지는지 봅시다. 색상이 지정된 숫자 선은 조건이 참일 때는 녹색이고 조건이 거짓이면 빨간색입니다. 두 번째 조건을 살펴보면 1990년이 1989년보다 크다는 것을 알 수 있습니다. 해당하는 두 번째 숫자 줄을 검토하여 확인할 수 있습니다. 마지막 숫자 줄의 녹색 영역은 해당 면적이 참인 위치를 나타냅니다.

이 영역은 하나 이상의 진술이 참인 경우에 해당합니다. 1990년대가 이 지역에 속한다는 것을 알 수 있습니다. A와 B가 부울 변수를 나타낸다고 합시다. and 연산자는 두 값을 받아 새 부울 값을 생성합니다. 이 표를 사용하여 다양한 값을 나타낼 수 있습니다.

첫 번째 열은 A의 가능한 값을 나타내고, 두 번째 열은 B의 가능한 값을 나타냅니다. 마지막 열은 and 연산을 적용한 결과를 나타냅니다. and 연산자는 모든 부울 값이 true인 경우에만 true를 생성하는 것을 볼 수 있습니다. 이 앨범은 가변 앨범 연도가 1980년에서 1989년 사이인 경우 80년대에 제작되었습니다. 앨범 연도를 1983년으로 설정했을 때 어떤 일이 벌어지는지 봅시다.

이전과 마찬가지로 색상이 지정된 숫자선을 사용하여 조건이 맞는 위치를 확인할 수 있습니다. 이 경우 1983년이 1980년보다 큽니다. 두 번째 조건을 살펴보면 1990년이 1983년보다 크다는 것을 알 수 있습니다. 해당하는 두 번째 숫자 줄을 검토하여 확인할 수 있습니다. 마지막 숫자 줄의 녹색 영역은 해당 면적이 참인 위치를 나타냅니다.

마찬가지로 이 영역은 두 문장이 모두 참인 경우에 해당합니다. 1983년이 이 지역에 속한다는 것을 알 수 있습니다. 브랜칭을 사용하면 다양한 입력에 대해 서로 다른 명령문을 실행할 수 있습니다.

## 예시
- 더 많은 예제는 실습을 참조하십시오.
- 브랜칭을 사용하면 다른 입력에 대해 다른 명령문을 실행할 수 있습니다.
- 예를 들어 AC, DC 콘서트를 나타내는 파란색 직사각형을 생각해 보십시오.
- if 문 뒤의 명령문은 조건이 참인지 거짓인지에 관계없이 실행됩니다.

## 요약
- 연령이 19세인 경우 변수 age 값을 19로 설정합니다.
- 연령이 17세인 경우 변수 age 값을 17로 설정합니다.
- 위 조건이 거짓인 경우 조건이 true인 경우 대체 표현식이 실행됩니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, you will learn about conditions and branching. Comparison operations compare some value or operand. Then, based on some condition, they produce a Boolean. Let's say we assign a value of a to 6. We can use the equality operator denoted with two equal signs to determine if two values are equal.

In this case, if 7 is equal to 6. In this case, as 6 is not equal to 7, the result is false. If we performed an equality test for the value 6, the two values would be equal. As a result, we would get a true. Consider the following equality comparison operator.

If the value of the left operand, in this case the variable, i, is greater than the value of the right operand, in this case 5, the condition becomes true, or else we get a false. Let's display some values for i on the left. Let's see the values greater than 5 in green, and the rest in red. If we set i equal to 6, we see that 6 is larger than 5, and as a result, we get a true. We can also apply the same operations to floats.

If we modify the operator as follows, if the left operand i is greater than or equal to the value of the right operand, in this case 5, then the condition becomes true. In this case, we include the value of 5 in the number line, and the color changes to green accordingly. If we set the value of i equal to 5, the operand will produce a true. If we set the value of i to 2, we would get a false, because 2 is less than 5. We can change the inequality.

If the value of the left operand, in this case i, is less than the value of the right operand, in this case 6, then condition becomes true. Again, we can represent this with a colored number line. The areas where the inequality is true are marked in green, and red where the inequality is false. If the value for i is set to 2, the result is a true, as 2 is less than 6. The inequality test uses an explanation mark preceding the equal sign.

If two operands are not equal, then the condition becomes true. We can use a number line. When the condition is true, the corresponding numbers are marked in green, and red for where the condition is false. If we set i equal to 2, the operator is true, as 2 is not equal to 6. We compare strings as well.

Comparing AC, DC, and Michael Jackson, using the equality test, we get a false, as the strings are not the same. Using the inequality test, we get a true, as the strings are different. See the labs for more examples. Branching allows us to run different statements for a different input. It's helpful to think of an if statement as a locked room.

If the statement is true, you can enter the room, and your program can run some predefined task. If the statement is false, your program will skip the task. For example, consider the blue rectangle representing an AC, DC concert. If the individual is 18 or older, they can enter the AC, DC concert. If they are under the age of 18, they cannot enter the concert.

Individual proceeds to the concert. Therefore, they are not granted access to the concert, and they must move on. If the individual is 19, the condition is true. They can enter the concert. Then they can move on.

This is the syntax of the if statement from our previous example. We have the if statement. We have the expression that can be true or false. The brackets are not necessary. Within an indent, we have the expression that is run if the condition is true.

The statements after the if statement will run regardless if the condition is true or false. For the case where the age is 17, we set the value of the variable age to 17. We check the if statement. The statement is false. Therefore, the program will not execute the statement to print.

In this case, it will just print move on. For the case where the age is 19, we set the value of the variable age to 19. We check the if statement. The statement is true. Therefore, the program will execute the statement to print.

Then it will just print move on. The else statement will run a different block of code if the same condition is false. Let's use the ACDC concert analogy again. If the user is 17, they cannot go to the ACDC concert. But they can go to the meatloaf concert represented by the purple square.

If the individual is 19, the condition is true. They can enter the ACDC concert. Then they can move on as before. The syntax of the else statement is similar. We simply append the statement else.

We then add the expression we would like to execute with an indent. For the case where the age is 17, we set the value of the variable age to 17. We check the if statement. The statement is false. Therefore, we progress to the else statement.

We run the statement in the indent. This corresponds to the individual attending the meatloaf concert. The program will then continue running. For the case where the age is 19, we set the value of the variable age to 19. We check the if statement.

The statement is true. Therefore, the program will execute the statement to print you will enter. The program skips the expressions in the else statement. And continues to run the rest of the expressions. The elif statement, short for else if, allows us to check additional conditions.

If the preceding condition is false. If the condition is true, the alternate expressions will be run. Consider the concert example. If the individual is 18, they will go to the Pink Floyd concert. Instead of attending the ACDC or meatloaf concerts.

The person of 18 years of age enters the area as they are not over 19 years of age. They cannot see ACDC. But as they are 18 years, they attend Pink Floyd. After seeing Pink Floyd, they move on. The syntax of the elif statement is similar.

We simply add the statement elif with the condition. We then add the expression we would like to execute if the statement is true. Let's illustrate the code on the left. An 18 year old enters. They are not older than 18 years of age.

Therefore, the condition is false. So the condition of the elif statement is checked. The condition is true. So then we would print go see Pink Floyd. Then we would move on as before.

If the variable age was 17, the statement go see meatloaf would print. Similarly, if the age was greater than 18, the statement you can enter would print. Check the labs for more examples. Now let's take a look at logic operators. Logic operations take Boolean values and produce different Boolean values.

The first operation is the not operator. If the input is true, the result is a false. Similarly, if the input is false, the result is a true. Let A and B represent Boolean variables. The or operator takes in the two values and produces a new Boolean value.

We can use this table to represent the different values. The first column represents the possible values of A. The second column represents the possible values of B. The final column represents the result of applying the or operation. We see the or operator only produces a false if all the Boolean values are false.

The following lines of code will print out. This album was made in the 70s or 90s. If the variable album year does not fall in the 80s. Let's see what happens when we set the album year to 1990. The colored number line is green when the condition is true and red when the condition is false.

In this case, the condition is false. Examining the second condition, we see that 1990 is greater than 1989. So the condition is true. We can verify by examining the corresponding second number line. In the final number line, the green region indicates where the area is true.

This region corresponds to where at least one statement is true. We see that 1990 falls in the area. Therefore, we execute the statement. Let A and B represent Boolean variables. The and operator takes in the two values and produces a new Boolean value.

We can use this table to represent the different values. The first column represents the possible values of A. The second column represents the possible values of B. The final column represents the result of applying the and operation. We see the and operator only produces a true if all the Boolean values are true.

The following lines of code will print out. This album was made in the 80s if the variable album year is between 1980 and 1989. Let's see what happens when we set the album year to 1983. As before, we can use the colored number line to examine where the condition is true. In this case, 1983 is larger than 1980.

So the condition is true. Examining the second condition, we see that 1990 is greater than 1983. So this condition is also true. We can verify by examining the corresponding second number line. In the final number line, the green region indicates where the area is true.

Similarly, this region corresponds to where both statements are true. We see that 1983 falls in the area. Therefore, we execute the statement. Branching allows us to run different statements for different inputs.

</details>
