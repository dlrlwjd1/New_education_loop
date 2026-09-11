# Dictionaries

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: Python Data Structures
- 재생 시간: 2분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/4c7Hw/dictionaries)
- 값은 변경 불가능하고 변경 가능하며 중복될 수 있습니다.
- 노란색을 사용하여 키를 강조 표시하고 값을 흰색으로 둘 수 있습니다.

## 내용
### 핵심 내용
- 값은 변경 불가능하고 변경 가능하며 중복될 수 있습니다.
- 노란색을 사용하여 키를 강조 표시하고 값을 흰색으로 둘 수 있습니다.
- 다음과 같이 사전에 새 항목을 추가할 수 있습니다.
- 다음과 같이 in 명령을 사용하여 요소가 사전에 있는지 확인할 수 있습니다.
- 딕셔너리의 모든 키를 보려면 메서드 키를 사용하여 키를 가져올 수 있습니다.
- 같은 방식으로 메서드 값을 사용하여 값을 얻을 수 있습니다.

### 한국어 Transcript

딕셔너리는 파이썬의 컬렉션 유형입니다. 기억하시겠지만 목록에는 정수 인덱스가 있습니다. 주소와 비슷하지만 정수일 필요는 없습니다. 값은 목록의 요소와 유사하며 정보를 포함합니다. 사전을 만들려면 중괄호를 사용합니다.

각 키 뒤에는 콜론으로 구분된 값이 옵니다. 값은 변경 불가능하고 변경 가능하며 중복될 수 있습니다. 각 키와 값 쌍은 쉼표로 구분됩니다. 앨범 제목이 핵심이고 값은 출시 데이터입니다. 노란색을 사용하여 키를 강조 표시하고 값을 흰색으로 둘 수 있습니다.

테이블을 사용하여 첫 번째 열이 키를 나타내고 두 번째 열이 값을 나타내는 사전을 시각화하는 것이 좋습니다. 사전에 몇 가지 예를 더 추가할 수 있습니다. 사전을 변수에 할당할 수도 있습니다. 검은색 키를 사용하여 1980의 값을 반환합니다. 달의 어두운 면을 보면 1973년의 가치를 알 수 있습니다.

보디가드가 키를 사용하면 1992라는 값이 나오는 식입니다. 다음과 같이 사전에 새 항목을 추가할 수 있습니다. 이렇게 하면 졸업이라는 새 키와 함께 2007의 가치가 추가됩니다. 다음과 같이 항목을 삭제할 수 있습니다. 이로 인해 핵심 스릴러와 그 가치가 사라집니다.

다음과 같이 in 명령을 사용하여 요소가 사전에 있는지 확인할 수 있습니다. 사전에 있으면 true를 반환합니다. 딕셔너리에 없는 키로 동일한 명령을 시도하면 false가 발생합니다. 딕셔너리의 모든 키를 보려면 메서드 키를 사용하여 키를 가져올 수 있습니다. 출력은 모든 키가 있는 목록과 같은 객체입니다.

같은 방식으로 메서드 값을 사용하여 값을 얻을 수 있습니다. 실습에서 더 많은 예제와 사전에 대한 정보를 확인하세요.

## 예시
- 다음과 같이 in 명령을 사용하여 요소가 사전에 있는지 확인할 수 있습니다.
- 딕셔너리에 없는 키로 동일한 명령을 시도하면 false가 발생합니다.
- 실습에서 더 많은 예제와 사전에 대한 정보를 확인하세요.

## 요약
- 다음과 같이 in 명령을 사용하여 요소가 사전에 있는지 확인할 수 있습니다.
- 딕셔너리의 모든 키를 보려면 메서드 키를 사용하여 키를 가져올 수 있습니다.
- 같은 방식으로 메서드 값을 사용하여 값을 얻을 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Let's cover dictionaries in Python. Dictionaries are a type of collection in Python. If you recall, a list has integer indexes. These are like addresses. A list also has elements.

A dictionary has keys and values. The key is analogous to the index. They are like addresses, but they don't have to be integers. They are usually characters. The values are similar to the element in a list and contain information.

To create a dictionary, we use curly brackets. The keys are the first elements. They must be immutable and unique. Each key is followed by a value separated by a colon. The values can be immutable, mutable, and duplicates.

Each key and value pair is separated by a comma. Consider the following example of a dictionary. The album title is the key, and the value is the release data. We can use yellow to highlight the keys and leave the values in white. It is helpful to use the table to visualize a dictionary where the first column represents the keys and the second column represents the values.

We can add a few more examples to the dictionary. We can also assign the dictionary to a variable. The key is used to look up the value. We use square brackets. The argument is the key.

This outputs the value. Using the key of back in black, this returns the value of 1980. The key the dark side of the moon gives us the value of 1973. Using the key the bodyguard gives us the value 1992, and so on. We can add a new entry to the dictionary as follows.

This will add the value 2007 with a new key called graduation. We can delete an entry as follows. This gets rid of the key thriller and its value. We can verify if an element is in the dictionary using the in command as follows. The command checks the keys.

If they are in the dictionary, they return a true. If we try the same command with a key that is not in the dictionary, we get a false. In order to see all the keys in a dictionary, we can use the method keys to get the keys. The output is a list like object with all the keys. In the same way, we can obtain the values using the method values.

Check out the labs for more examples and info on dictionaries.

</details>
