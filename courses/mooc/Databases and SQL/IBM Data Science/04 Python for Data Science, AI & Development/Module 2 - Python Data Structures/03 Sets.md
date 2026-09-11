# Sets

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: Python Data Structures
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/7GcLY/sets)
- 즉, 목록 및 튜플과 마찬가지로 다양한 Python 유형을 입력할 수 있습니다.
- 중복된 항목이 있는 것을 알 수 있습니다.

## 내용
### 핵심 내용
- 즉, 목록 및 튜플과 마찬가지로 다양한 Python 유형을 입력할 수 있습니다.
- 중복된 항목이 있는 것을 알 수 있습니다.
- 실제 세트를 생성하면 중복 항목이 나타나지 않습니다.
- add 메서드를 사용하여 세트에 항목을 추가할 수 있습니다.
- 다음과 같이 in 명령을 사용하여 요소가 세트에 있는지 확인할 수 있습니다.
- 앨범 세트 1과 앨범 세트 2의 합집합을 다음과 같이 찾을 수 있습니다.

### 한국어 Transcript

즉, 목록 및 튜플과 마찬가지로 다양한 Python 유형을 입력할 수 있습니다. 목록 및 튜플과 달리 순서가 지정되지 않습니다. 즉, 세트는 요소 위치를 기록하지 않습니다. 즉, 집합에는 특정 요소가 하나만 있습니다. 세트를 정의하려면 중괄호를 사용합니다.

중괄호 안에 집합의 요소를 배치합니다. 중복된 항목이 있는 것을 알 수 있습니다. 실제 세트를 생성하면 중복 항목이 나타나지 않습니다. 함수 세트를 사용하여 목록을 집합으로 변환할 수 있습니다. 목록을 함수 집합의 입력값으로 사용하기만 하면 됩니다.

결과는 집합으로 변환된 목록이 됩니다. 중복된 요소가 없다는 것을 알 수 있습니다. 세트를 변경하는 데 사용할 수 있습니다. 이 집합을 원으로 표현해 보겠습니다. 세트에 익숙하다면 벤 다이어그램의 일부가 될 수 있습니다.

벤 다이어그램은 일반적으로 모양을 사용하여 집합을 나타내는 도구입니다. add 메서드를 사용하여 세트에 항목을 추가할 수 있습니다. 세트 이름 뒤에 점을 넣은 다음 add 메서드를 입력하기만 하면 됩니다. 인수는 추가하려는 집합의 새 요소 (여기서는 InSync) 입니다. 이제 세트 A에 InSync가 아이템으로 포함되어 있습니다.

동일한 항목을 두 번 추가하면 세트에 중복이 없을 수 있으므로 아무 일도 일어나지 않습니다. 집합 A에서 InSync를 제거한다고 가정해 보겠습니다. remove 메서드를 사용하여 집합에서 항목을 제거할 수도 있습니다. 세트 이름 뒤에 점을 넣은 다음 remove 메서드를 입력하기만 하면 됩니다. 인수는 제거하려는 집합의 요소 (여기서는 InSync) 입니다.

remove 메서드를 세트에 적용한 후에는 세트 A에 InSync 항목이 포함되지 않습니다. 세트의 모든 항목에 이 방법을 사용할 수 있습니다. 다음과 같이 in 명령을 사용하여 요소가 세트에 있는지 확인할 수 있습니다. 명령은 항목 (이 경우 ACDC) 이 세트에 있는지 확인합니다. 항목이 세트에 있으면 true를 반환합니다.

세트에 없는 아이템을 찾으면 (이 경우 Who) 아이템의 경우 해당 아이템이 세트에 없기 때문에 false가 나옵니다. 이들은 수학 집합 연산의 유형입니다. 우리가 할 수 있는 다른 작업들이 있습니다. 집합 간에 할 수 있는 유용한 수학 연산이 많이 있습니다. 세트 앨범 집합1을 정의해 보겠습니다.

빨간색 원이나 벤 다이어그램을 사용하여 표현할 수 있습니다. 마찬가지로 세트 앨범Set2를 정의할 수 있습니다. 파란색 원이나 벤 다이어그램을 사용하여 표현할 수도 있습니다. 두 집합의 교차점은 두 집합에 모두 있는 요소를 포함하는 새 집합입니다. 벤 다이어그램을 사용하면 도움이 됩니다.

세트를 나타내는 두 원이 결합됩니다. 겹치는 부분은 새 세트를 나타냅니다. 겹치는 부분이 빨간색 원과 파란색 원으로 구성되므로 교차점을 AND로 정의합니다. Python에서는 앰퍼샌드를 사용하여 두 집합의 교차점을 찾습니다. 공통 요소를 겹치는 영역에 배치하는 원 위에 집합의 값을 겹쳐 놓으면 해당 내용이 표시됩니다.

교차 작업을 적용하면 두 세트에 없는 모든 항목이 사라집니다. Python에서는 단순히 두 세트 사이에 앰퍼샌드를 배치하기만 하면 됩니다. ACDC와 백인블랙이 모두 두 세트에 있는 것을 알 수 있습니다. 그 결과 앨범셋1과 앨범셋2의 모든 요소가 포함된 새 세트 AlbumSet3이 생성됩니다. 두 집합의 합집합은 두 집합의 모든 항목을 포함하는 새로운 요소 집합입니다.

앨범 세트 1과 앨범 세트 2의 합집합을 다음과 같이 찾을 수 있습니다. 그 결과 앨범셋1과 앨범셋2의 모든 요소가 포함된 새 세트가 만들어집니다. 새 앨범 SetAlbumSet3을 생각해 보십시오. 세트에는 AC/DC 및 백인블랙 요소가 포함되어 있습니다. AlbumSet3의 모든 요소가 AlbumSet1에 있으므로 벤 다이어그램으로 이를 표현할 수 있습니다.

앨범셋1을 나타내는 원은 앨범셋3을 나타내는 원을 캡슐화합니다. isSubset 메서드를 사용하여 집합이 하위 집합인지 확인할 수 있습니다. AlbumSet3은 AlbumSet1의 하위 집합이므로 결과는 사실입니다. 세트로 할 수 있는 일은 무궁무진합니다. 실험실에서 더 많은 예제를 확인하세요.

## 예시
- 다음과 같이 in 명령을 사용하여 요소가 세트에 있는지 확인할 수 있습니다.
- 명령은 항목 (이 경우 ACDC) 이 세트에 있는지 확인합니다.

## 요약
- add 메서드를 사용하여 세트에 항목을 추가할 수 있습니다.
- 다음과 같이 in 명령을 사용하여 요소가 세트에 있는지 확인할 수 있습니다.
- 앨범 세트 1과 앨범 세트 2의 합집합을 다음과 같이 찾을 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

They are also a type of collection. Sets are a type of collection. This means that like lists and tuples, you can input different Python types. Unlike lists and tuples, they are unordered. This means sets do not record element position.

Sets only have unique elements. This means there is only one of a particular element in a set. To define a set, you use curly brackets. You place the elements of a set within the curly brackets. You notice there are duplicate items.

When the actual set is created, duplicate items will not be present. You can convert a list to a set by using the function set. This is called typecasting. You simply use the list as the input to the function set. The result will be a list converted to a set.

Let's go over an example. We start off with a list. We input the list to the function set. The function set returns a set. Notice how there are no duplicate elements.

Let's go over set operations. These can be used to change the set. Let's represent this set with a circle. If you are familiar with sets, this can be part of a Venn diagram. A Venn diagram is a tool that uses shapes usually to represent sets.

We can add an item to a set using the add method. We just put the set name followed by a dot, then the add method. The argument is the new element of the set we would like to add, in this case, inSync. The set A now has inSync as an item. If we add the same item twice, nothing will happen as there can be no duplicates in a set.

Let's say we would like to remove inSync from set A. We can also remove an item from a set using the remove method. We just put the set name followed by a dot, then the remove method. The argument is the element of the set we would like to remove, in this case, inSync. After the remove method is applied to the set, set A does not contain the item inSync.

You can use this method for any item in the set. We can verify if an element is in the set using the in command as follows. The command checks that the item, in this case, ACDC, is in the set. If the item is in the set, it returns true. If we look for an item that is not in the set, in this case for the item Who, as the item is not in the set, we will get a false.

These are types of mathematical set operations. There are other operations we can do. There are lots of useful mathematical operations we can do between sets. Let's define the set AlbumSet1. We can represent it using a red circle or Venn diagram.

Similarly, we can define the set AlbumSet2. We can also represent it using a blue circle or Venn diagram. The intersection of two sets is a new set containing elements which are in both of those sets. It's helpful to use Venn diagrams. The two circles that represent the sets combine.

The overlap represents the new set. As the overlap is comprised of the red circle and blue circle, we define the intersection in terms of AND. In Python, we use an ampersand to find the intersection of two sets. If we overlay the values of the set over the circle placing the common elements in the overlapping area, we see the correspondence. After applying the intersection operation, all the items that are not in both sets disappear.

In Python, we simply just place the ampersand between the two sets. We see that both ACDC and BackInBlack are in both sets. The result is a new set AlbumSet3 containing all the elements in both AlbumSet1 and AlbumSet2. The union of two sets is the new set of elements which contain all the items in both sets. We can find the union of the sets AlbumSet1 and AlbumSet2 as follows.

The result is a new set that has all the elements of AlbumSet1 and AlbumSet2. This new set is represented in green. Consider the new album SetAlbumSet3. The set contains the elements ACDC and BackInBlack. We can represent this with a Venn diagram, as all the elements in AlbumSet3 are in AlbumSet1.

The circle representing AlbumSet1 encapsulates the circle representing AlbumSet3. We can check if a set is a subset using the isSubset method. As AlbumSet3 is a subset of the AlbumSet1, the result is true. There is a lot more you can do with sets. Check out the lab for more examples.

</details>
