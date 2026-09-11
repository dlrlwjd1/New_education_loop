# Writing Test Assertions

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/test-and-behavior-driven-development-tdd-bdd/lecture/zP5tE/writing-test-assertions)

## 개요
- 어설션의 목적을 설명하고, 일반적인 PyUnit 어설션을 설명하고, 테스트에서 행복한 경로와 슬픈 경로가 차지하는 역할을 요약할 수 있습니다.

## 내용
- 어설션의 목적을 설명하고, 일반적인 PyUnit 어설션을 설명하고, 테스트에서 행복한 경로와 슬픈 경로가 차지하는 역할을 요약할 수 있습니다.
- 어설션은 Python에서 기본으로 제공되며 assert () 함수 호출을 사용하여 어설션을 만들 수 있습니다.
- 오류로 인한 예외로 인해 테스트 실행이 중단되는 것을 원하지 않지만 오류 핸들러가 작동한다는 것을 알기 위해서는 오류가 발생하도록 해야 합니다.
- 그런 다음 TestAreaOfTriangle이라는 테스트 클래스를 만들고 TestCase에서 서브클래스를 생성합니다.이제 몇 가지 테스트 케이스를 작성해야 합니다.
- 이 슬픈 경로에서는 asserTraises () 함수를 사용하며 밑수가 -2이고 높이가 5인 area_of_a_triangle을 호출하면 함수가 ValueError를 발생시킨다고 주장합니다.
- 다시 asserTraises () 함수를 사용합니다.숫자가 아닌 Boolean인 True라는 값을 사용하여 area_of_a_triangle 을 호출하면 TypeError가 발생한다고 주장합니다.
- Python에서 어설션을 만들려면 개발자는 assert () 함수 또는 추가 PyUnit 어설션을 사용할 수 있습니다.

## 예시
- 마지막 두 테스트 사례에서는 예외가 발생하면 각 테스트를 통과합니다.

## 요약
- 다시 asserTraises () 함수를 사용합니다.숫자가 아닌 Boolean인 True라는 값을 사용하여 area_of_a_triangle 을 호출하면 TypeError가 발생한다고 주장합니다. Python에서 어설션을 만들려면 개발자는 assert () 함수 또는 추가 PyUnit 어설션을 사용할 수 있습니다.
