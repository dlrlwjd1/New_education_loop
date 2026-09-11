# Lists and Tuples

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: Python Data Structures
- 재생 시간: 9분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/bUWEy/lists-and-tuples)
- 이를 복합 데이터 유형이라고 하며 Python의 주요 데이터 구조 유형 중 하나입니다.
- 튜플은 괄호 안에 쉼표로 구분된 요소로 표현됩니다.

## 내용
### 핵심 내용
- 이를 복합 데이터 유형이라고 하며 Python의 주요 데이터 구조 유형 중 하나입니다.
- 튜플은 괄호 안에 쉼표로 구분된 요소로 표현됩니다.
- 예를 들어 두 번째 요소에 액세스할 수 있습니다.
- 예를 들어 첫 번째 요소를 다음과 같이 변경할 수 있습니다.
- 두 번째 요소를 삭제할 수 있습니다.
- 목록으로 수행할 수 있는 작업에 대한 자세한 내용은 실습을 참조하십시오.

### 한국어 Transcript

이 비디오에서는 리스트와 튜플을 다룰 것입니다. 이를 복합 데이터 유형이라고 하며 Python의 주요 데이터 구조 유형 중 하나입니다. 튜플 튜플은 순서가 지정된 시퀀스입니다. 튜플은 괄호 안에 쉼표로 구분된 요소로 표현됩니다. 파이썬에는 문자열, 정수, 부동 소수점 등 다양한 유형이 있습니다.

모두 튜플에 포함될 수 있지만 변수 유형은 튜플입니다. 튜플의 각 요소는 인덱스를 통해 액세스할 수 있습니다. 다음 표는 인덱스와 튜플 요소 간의 관계를 나타냅니다. 첫 번째 요소는 튜플 이름 뒤에 인덱스 번호가 있는 대괄호로 액세스할 수 있습니다. 다음과 같이 두 번째 요소에 액세스 할 수 있습니다.

마지막 요소에도 액세스할 수 있습니다. 파이썬에서는 음수 인덱스를 사용할 수 있습니다. 튜플을 추가하여 연결하거나 결합할 수 있습니다. 결과는 다음 인덱스와 함께 다음과 같습니다. 튜플에서 여러 요소를 원하면 튜플을 슬라이스할 수도 있습니다.

예를 들어 처음 세 요소가 필요한 경우 다음 명령을 사용합니다. 마지막 인덱스가 원하는 인덱스보다 하나 더 큽니다. 마찬가지로 마지막 두 요소가 필요한 경우 다음 명령을 사용합니다. 마지막 인덱스가 튜플의 마지막 인덱스보다 하나 더 큰 것을 알 수 있습니다. len 명령을 사용하여 튜플의 길이를 얻을 수 있습니다.

이것이 왜 중요한지 알아보기 위해 변수 등급 1을 등급으로 설정하면 어떤 일이 발생하는지 살펴보겠습니다. 이 이미지를 사용하여 현재 상황을 간단하게 설명해 보겠습니다. 각 변수는 튜플을 포함하지 않지만 동일한 불변 튜플 객체를 참조합니다. 객체에 대한 자세한 내용은 객체 및 클래스 모듈을 참조하십시오. 인덱스 2에 있는 요소를 변경하고 싶다고 가정해 봅시다.

튜플은 변경할 수 없기 때문에 변경할 수 없습니다. 따라서 튜플은 변경할 수 없기 때문에 등급 1은 등급 변경의 영향을 받지 않습니다. 즉, 튜플을 변경할 수 없기 때문입니다. 등급 변수에 다른 튜플을 할당할 수 있습니다. 이제 변수 등급이 다른 튜플을 참조합니다.

불변성의 결과로 튜플을 조작하려면 대신 새 객체를 만들어야 합니다. 예를 들어 튜플을 정렬하려면 sorted 함수를 사용합니다. 함수에 대한 자세한 내용은 함수 동영상을 참조하십시오. 튜플은 다른 튜플과 다른 복잡한 데이터 유형을 포함할 수 있습니다. 표준 인덱싱 방법을 사용하여 이러한 요소에 액세스할 수 있습니다.

튜플이 있는 인덱스를 선택하면 동일한 인덱스 규칙이 적용됩니다. 따라서 튜플의 값에 액세스할 수 있습니다. 예를 들어 두 번째 요소에 액세스할 수 있습니다. 이 인덱싱을 튜플 변수 nt에 직접 적용할 수 있습니다. 이것을 나무로 시각화하면 도움이 됩니다.

이 둥지를 나무로 시각화할 수 있습니다. 튜플에는 다음과 같은 인덱스가 있습니다. 다른 튜플이 있는 인덱스를 고려하면 인덱스 2의 튜플에 두 개의 요소가 있는 튜플이 포함되어 있음을 알 수 있습니다. 이 두 인덱스에 액세스할 수 있습니다. 인덱스 3에도 동일한 규칙이 적용됩니다.

해당 튜플의 요소에도 액세스할 수 있습니다. 대괄호를 하나 더 추가하여 나무의 더 깊은 층에 접근할 수도 있습니다. 문자열의 다른 문자 또는 첫 번째 튜플에 포함된 두 번째 튜플의 다양한 요소에 액세스할 수 있습니다. 목록은 Python에서 널리 사용되는 데이터 구조이기도 합니다. 목록은 순서가 지정된 시퀀스이기도 합니다.

여러 측면에서 목록은 튜플과 같습니다. 한 가지 중요한 차이점은 변경 가능하다는 것입니다. 목록에는 문자열, 부동 소수점, 정수가 포함될 수 있습니다. 또한 튜플과 기타 데이터 구조를 중첩합니다. 중첩에도 동일한 색인 규칙이 적용됩니다.

튜플과 마찬가지로 목록의 각 요소는 인덱스를 통해 액세스할 수 있습니다. 다음 표는 색인과 목록 요소 간의 관계를 나타냅니다. 첫 번째 요소는 목록 이름 뒤에 인덱스 번호가 있는 대괄호 (이 경우 0) 로 액세스할 수 있습니다. 다음과 같이 두 번째 요소에 액세스 할 수 있습니다. 마지막 요소에도 액세스할 수 있습니다.

파이썬에서는 음수 인덱스를 사용할 수 있습니다. 목록에서 슬라이싱을 수행할 수도 있습니다. 예를 들어, 이 목록의 마지막 두 요소가 필요한 경우 다음 명령을 사용합니다. 마지막 색인이 목록 길이보다 하나 더 큰 것을 알 수 있습니까? 리스트와 튜플의 인덱스 규칙은 동일합니다.

실습에서 더 많은 예제를 확인하세요. 목록을 추가하여 리스트를 연결하거나 결합할 수 있습니다. 새 목록에는 다음과 같은 색인이 있습니다. 목록은 변경 가능하므로 변경할 수 있습니다. 예를 들어, 점 다음에 메서드 이름, 괄호를 추가하여 extend를 적용합니다.

괄호 안의 인수는 원래 목록에 연결할 새 목록입니다. 이 경우 새 목록 L1을 만드는 대신 두 개의 새 요소를 추가하여 원래 목록 L을 수정합니다. 메서드에 대해 자세히 알아보려면 객체 및 클래스에 대한 동영상을 확인하세요. 또 다른 유사한 방법은 덧붙이는 것입니다. 확장 대신 append를 적용하면 목록에 하나의 요소가 추가됩니다.

인덱스를 보면 요소가 하나 더 있습니다. 색인 3에는 우리가 추가한 목록이 들어 있습니다. 메서드를 적용할 때마다 목록이 바뀝니다. extend를 적용하면 목록에 두 개의 새 요소가 추가됩니다. 목록 L은 두 개의 새 요소를 추가하여 수정됩니다.

문자열 A를 추가하면 문자열 A를 추가하여 목록을 추가로 변경합니다. 목록은 변경 가능하므로 변경할 수 있습니다. 예를 들어 첫 번째 요소를 다음과 같이 변경할 수 있습니다. 이제 이 목록은 하드락 10 1.2가 됩니다. del 명령을 사용하여 목록의 요소를 삭제할 수 있습니다.

제거하려는 목록 항목을 인수로 지정하기만 하면 됩니다. 예를 들어 첫 번째 요소를 제거하려는 경우 결과는 10 1.2가 됩니다. 두 번째 요소를 삭제할 수 있습니다. 이 작업은 목록에서 두 번째 요소를 제거합니다. split을 사용하여 문자열을 목록으로 변환 할 수 있습니다.

예를 들어 split 메서드는 공백으로 구분된 모든 문자 그룹을 목록의 요소로 변환합니다. split 함수를 사용하여 구분 기호라고 하는 특정 문자의 문자열을 구분할 수 있습니다. 분할하려는 구분 기호를 인수 (이 경우에는 쉼표) 로 전달하기만 하면 됩니다. 결과는 목록이며, 각 요소는 쉼표로 구분된 문자 집합에 해당합니다. 하나의 변수 b를 a와 같게 설정하면 a와 b 모두 동일한 목록을 참조합니다.

동일한 객체를 참조하는 여러 이름을 앨리어싱이라고 합니다. 목록 슬라이드를 보면 b의 첫 번째 요소가 HardRock으로 설정되어 있다는 것을 알 수 있습니다. a의 첫 번째 요소를 바나나로 변경하면 부작용이 발생합니다. a와 b는 동일한 목록을 참조하므로 a를 변경하면 목록 b도 변경됩니다. 리스트 a를 변경한 후 b의 첫 번째 요소를 확인하면 HardRock 대신 바나나가 나옵니다.

다음 구문을 사용하여 목록 a를 복제할 수 있습니다. 변수 a는 하나의 목록을 참조합니다. 변수 b는 원본 목록의 새 사본 또는 복제본을 참조합니다. 이제 a를 변경해도 b는 변경되지 않습니다. help 명령을 사용하여 Python의 목록, 튜플 및 기타 여러 객체에 대한 자세한 정보를 얻을 수 있습니다.

목록, 튜플 또는 기타 Python 객체를 전달하기만 하면 됩니다. 목록으로 수행할 수 있는 작업에 대한 자세한 내용은 실습을 참조하십시오.

## 예시
- 예를 들어 처음 세 요소가 필요한 경우 다음 명령을 사용합니다.
- 마찬가지로 마지막 두 요소가 필요한 경우 다음 명령을 사용합니다.
- len 명령을 사용하여 튜플의 길이를 얻을 수 있습니다.
- 예를 들어 튜플을 정렬하려면 sorted 함수를 사용합니다.

## 요약
- 예를 들어 첫 번째 요소를 다음과 같이 변경할 수 있습니다.
- 두 번째 요소를 삭제할 수 있습니다.
- 목록으로 수행할 수 있는 작업에 대한 자세한 내용은 실습을 참조하십시오.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we will cover lists and tuples. These are called compound data types and are one of the key types of data structures in Python. Tuples Tuples are an ordered sequence. Here is a tuple ratings. Tuples are expressed as comma-separated elements within parentheses.

These are values inside the parentheses. In Python, there are different types, strings, integer, float. They can all be contained in a tuple, but the type of the variable is tuple. Each element of a tuple can be accessed via an index. The following table represents the relationship between the index and the elements in the tuple.

The first element can be accessed by the name of the tuple followed by a square bracket with the index number. We can access the second element as follows. We can also access the last element. In Python, we can use negative index. The relationship is as follows.

The corresponding values are shown here. We can concatenate or combine tuples by adding them. The result is the following with the following index. If we would like multiple elements from a tuple, we can also slice tuples. For example, if we want the first three elements, we use the following command.

The last index is one larger than the index you want. Similarly, if we want the last two elements, we use the following command. Notice how the last index is one larger than the last index of the tuple. We can use the len command to obtain the length of a tuple. As there are five elements, the result is five.

Tuples are immutable, which means we can't change them. To see why this is important, let's see what happens when we set the variable ratings 1 to ratings. Let's use the image to provide a simplified explanation of what's going on. Each variable does not contain a tuple, but references the same immutable tuple object. See the Objects and Classes module for more about objects.

Let's say we want to change the element at index 2. Because tuples are immutable, we can't. Therefore, ratings 1 will not be affected by a change in rating because the tuple is immutable, i. We can assign a different tuple to the ratings variable. The variable ratings now references another tuple.

As a consequence of immutability, if we would like to manipulate a tuple, we need to create a new object instead. For example, if we would like to sort a tuple, we use the function sorted. The input is the original tuple. The output is a new sorted list. For more on functions, see our video on functions.

A tuple can contain other tuples as well as other complex data types. This is called nesting. We can access these elements using the standard indexing methods. If we select an index with a tuple, the same index convention applies. As such, we can then access values in the tuple.

For example, we could access the second element. We can apply this indexing directly to the tuple variable nt. It is helpful to visualize this as a tree. We can visualize this nesting as a tree. The tuple has the following indexes.

If we consider indexes with other tuples, we see the tuple at index 2 contains a tuple with two elements. We can access those two indexes. The same convention applies to index 3. We can access the elements in those tuples as well. We can continue the process.

We can even access deeper levels of the tree by adding another square bracket. We can access different characters in the string, or various elements in the second tuple contained in the first. Lists are also a popular data structure in Python. Lists are also an ordered sequence. A list is represented with square brackets.

In many respects, lists are like tuples. One key difference is they are mutable. Lists can contain strings, floats, integers. We can nest other lists. We also nest tuples and other data structures.

The same indexing conventions apply for nesting. Like tuples, each element of a list can be accessed via an index. The following table represents the relationship between the index and the elements in the list. The first element can be accessed by the name of the list followed by a square bracket with the index number, in this case, 0. We can access the second element as follows.

We can also access the last element. In Python, we can use a negative index. The relationship is as follows. The corresponding indexes are as follows. We can also perform slicing in lists.

For example, if we want the last two elements in this list, we use the following command. Notice how the last index is one larger than the length of the list? The index conventions for lists and tuples are identical. Check the labs for more examples. We can concatenate or combine lists by adding them.

The result is the following. The new list has the following indices. Lists are mutable, therefore we can change them. For example, we apply the method extends by adding a dot followed by the name of the method, and then parentheses. The argument inside the parentheses is a new list that we are going to concatenate to the original list.

In this case, instead of creating a new list, L1, the original list, L, is modified by adding two new elements. To learn more about methods, check out our video on objects and classes. Another similar method is append. If we apply append instead of extended, we add one element to the list. If we look at the index, there is only one more element.

Index 3 contains the list we appended. Every time we apply a method, the list changes. If we apply extend, we add two new elements to the list. The list L is modified by adding two new elements. If we append the string A, we further change the list adding the string A.

As lists are mutable, we can change them. For example, we can change the first element as follows. The list now becomes HardRock 10 1.2. We can delete an element of a list using the del command. We simply indicate the list item we would like to remove as an argument.

For example, if we would like to remove the first element, the result becomes 10 1.2. We can delete the second element. This operation removes the second element off the list. We can convert a string to a list using split. For example, the method split converts every group of characters separated by a space into an element of a list.

We can use the split function to separate strings on a specific character, known as a delimiter. We simply pass the delimiter we would like to split on as an argument, in this case a comma. The result is a list, each element corresponds to a set of characters that have been separated by a comma. When we set one variable, b, equal to a, both a and b are referencing the same list. Multiple names referring to the same object is known as aliasing.

We know from the list slide that the first element in b is set as HardRock. If we change the first element in a to banana, we get a side effect. The value of b will change as a consequence. a and b are referencing the same list, therefore if we change a, list b also changes. If we check the first element of b after changing list a, we get banana instead of HardRock.

You can clone list a by using the following syntax. Variable a references one list. Variable b references a new copy or clone of the original list. Now if you change a, b will not change. We can get more info on lists, tuples, and many other objects in Python using the help command.

Simply pass in the list, tuple, or any other Python object. See the labs for more things you can do with lists.

</details>
