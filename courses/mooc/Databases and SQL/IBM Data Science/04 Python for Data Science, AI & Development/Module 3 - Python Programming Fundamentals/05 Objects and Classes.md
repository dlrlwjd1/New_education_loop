# Objects and Classes

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: Python Programming Fundamentals
- 재생 시간: 11분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/KgVed/objects-and-classes)
- 파이썬에는 정수, 부동 소수점, 문자열, 목록, 사전, 부울 등 다양한 종류의 데이터 유형이 있습니다.
- 모든 객체에는 형식, 내부 표현, 데이터와 상호 작용하는 메서드라고 하는 함수 집합이 있습니다.

## 내용
### 핵심 내용
- 파이썬에는 정수, 부동 소수점, 문자열, 목록, 사전, 부울 등 다양한 종류의 데이터 유형이 있습니다.
- 모든 객체에는 형식, 내부 표현, 데이터와 상호 작용하는 메서드라고 하는 함수 집합이 있습니다.
- 실습에서는 생성자를 사용하여 circle 유형의 새 객체를 만들 수 있습니다.
- 마찬가지로, circle 유형의 새 객체를 만들 수 있습니다.
- 생성자를 사용하여 사각형 유형의 새 객체를 만들 수 있습니다.
- 예를 들어, 클래스 서클의 두 객체 또는 클래스 사각형의 두 객체를 만들 수 있습니다.

### 한국어 Transcript

이 모듈에서는 객체와 클래스에 대해 알아보겠습니다. 파이썬에는 정수, 부동 소수점, 문자열, 목록, 사전, 부울 등 다양한 종류의 데이터 유형이 있습니다. 모든 객체에는 형식, 내부 표현, 데이터와 상호 작용하는 메서드라고 하는 함수 집합이 있습니다. 예를 들어 유형 1과 유형 2의 두 가지 유형이 있습니다. 노란색으로 표시된 것처럼 유형 1의 여러 개체를 가질 수 있습니다.

각 오브젝트는 유형 1의 인스턴스입니다. 또한 녹색으로 표시된 유형 2의 여러 개체가 있습니다. 각 오브젝트는 유형 2의 인스턴스입니다. 몇 가지 덜 추상적인 예를 들어보겠습니다. 정수를 만들 때마다 정수 유형의 인스턴스를 만들거나 정수 객체를 만듭니다.

이 경우 정수 유형의 인스턴스 5개 또는 정수 객체 5개를 만듭니다. 마찬가지로 목록을 만들 때마다 유형 목록의 인스턴스를 만들거나 목록 객체를 만듭니다. 이 경우 목록 유형의 인스턴스 5개 또는 목록 객체 5개를 만듭니다. type 명령을 사용하여 개체의 유형을 찾을 수 있습니다. 이 경우 목록 유형의 객체가 있습니다.

마지막으로 딕셔너리 타입의 객체가 생겼습니다. 클래스 또는 형식 메서드는 해당 클래스나 형식의 모든 인스턴스가 제공하는 함수입니다. 우리는 지금까지 리스트와 같은 메서드를 사용해 왔습니다. 정렬은 개체의 데이터와 상호 작용하는 메서드의 예입니다. 데이터는 목록에 포함된 일련의 숫자입니다.

sort 메서드는 객체 내의 데이터를 변경합니다. 객체 이름 끝에 마침표를 추가하고 괄호를 사용하여 호출하려는 메서드 이름을 추가하여 메서드를 호출합니다. 등급 목록은 주황색으로 표시되어 있습니다. 목록에 포함된 데이터는 일련의 숫자입니다. 이렇게 하면 개체에 포함된 데이터가 변경됩니다.

개체의 상태를 변경한다고 말할 수 있습니다. 목록에서 reverse 메서드를 호출하여 목록을 다시 변경할 수 있습니다. 객체 내에서 시퀀스의 순서를 반대로 하여 메서드를 호출합니다. 대부분의 경우 클래스의 내부 작동 방식과 메서드를 알 필요가 없으며 사용 방법만 알면 됩니다. 다음으로 자신만의 클래스를 구성하는 방법을 살펴보겠습니다.

Python에서 고유한 유형 또는 클래스를 만들 수 있습니다. 이 단원에서는 클래스를 생성해 보겠습니다. 그런 다음 해당 클래스나 객체의 인스턴스 또는 인스턴스를 만듭니다. 클래스 데이터 속성은 클래스를 정의합니다. 첫 번째 클래스는 원이 될 것입니다.

원을 구성하는 요소에 대해 생각해 봅시다. 이 이미지를 살펴보면 원을 정의하는 데 필요한 것은 반경뿐입니다. 나중에 클래스의 여러 인스턴스를 쉽게 구분할 수 있도록 색상을 추가해 보겠습니다. 따라서 클래스 데이터 속성은 반경과 색상입니다. 마찬가지로 사각형을 정의하려면 이미지를 검사할 때 높이와 너비가 필요합니다.

또한 나중에 각 인스턴스를 구분하기 위한 색상도 추가할 예정입니다. 따라서 데이터 속성은 색상, 높이 및 너비입니다. 클래스 서클을 만들려면 클래스 정의를 포함해야 합니다. 이것은 파이썬에게 여러분이 자신만의 클래스, 즉 클래스의 이름을 만들고 있다는 것을 알려줍니다. 이 강좌에서는 항상 객체라는 용어를 괄호 안에 넣습니다.

클래스 사각형의 경우 클래스 이름을 변경하지만 나머지는 동일하게 유지됩니다. 클래스는 객체를 생성하기 위해 어트리뷰트를 설정해야 하는 아웃라인입니다. circle 타입의 인스턴스인 객체를 만들 수 있습니다. 색상 데이터 속성은 빨간색이고 데이터 속성 반경은 4입니다. circle 유형의 인스턴스인 두 번째 객체를 만들 수도 있습니다.

이 경우 색상 데이터 속성은 녹색이고 데이터 속성 반경은 2입니다. 사각형 유형의 인스턴스인 객체를 만들 수도 있습니다. 색상 데이터 속성은 파란색이고 높이와 너비의 데이터 속성은 2입니다. 두 번째 객체는 사각형 유형의 인스턴스이기도 합니다. 이 경우 색상 데이터 속성은 노란색이고 높이는 1이고 너비는 3입니다.

이제 서클 클래스와 타입 서클의 다른 객체가 생겼습니다. 또한 사각형 클래스나 사각형 유형의 다른 객체도 있습니다. 파이썬에서 Circle 클래스를 계속 만들어 보겠습니다. 그런 다음 클래스 생성자를 사용하여 데이터 속성, 반경 및 색상으로 클래스의 각 인스턴스를 초기화합니다. 파이썬에 새 클래스를 만들고 있다고 알려주는 특수 함수입니다.

파이썬에는 더 복잡한 클래스를 만드는 다른 특수 함수가 있습니다. radius 및 color 매개 변수는 클래스 인스턴스의 반경 및 색상 데이터 속성을 초기화하는 데 사용됩니다. self 매개 변수는 새로 만든 클래스 인스턴스를 나타냅니다. 클래스가 생성될 때 클래스 생성자에 전달된 값에 액세스하기 위해 생성자 본문에서 radius 및 color 매개 변수를 사용할 수 있습니다. 반경 및 색상 데이터 속성의 값을 생성자 메서드에 전달된 값으로 설정할 수 있습니다.

마찬가지로 Python에서 클래스 사각형을 정의할 수 있습니다. 이번에는 클래스 데이터 속성이 색상, 높이 및 너비입니다. 클래스를 생성한 후, Circle 클래스의 객체를 생성하기 위해 변수를 도입합니다. 이것이 오브젝트의 이름이 될 것입니다. 객체 생성자를 사용하여 객체를 생성합니다.

객체 생성자는 클래스의 이름과 매개 변수로 구성됩니다. 원 객체를 만들 때 코드를 함수처럼 호출합니다. circle 생성자에 전달된 인수는 새로 생성된 circle 인스턴스의 데이터 속성을 초기화하는 데 사용됩니다. self를 객체의 모든 데이터 속성을 포함하는 상자라고 생각하면 도움이 됩니다. 객체 이름 뒤에 점과 데이터 속성 이름을 입력하면 데이터 속성 값 (예: radius) 이 표시됩니다.

self 매개변수와 객체 간의 관계를 볼 수 있습니다. Python에서는 데이터 속성을 직접 설정하거나 변경할 수도 있습니다. 객체 이름 뒤에 점과 데이터 속성 이름을 입력하고 해당 값과 동일하게 설정할 수 있습니다. 색상 데이터 속성이 변경되었음을 확인할 수 있습니다. 일반적으로 객체의 데이터를 변경하기 위해 클래스에 메서드를 정의합니다.

데이터 속성이 객체를 정의하는 데이터로 어떻게 구성되는지 살펴보았습니다. 메서드는 객체의 데이터 속성을 변경하거나 사용하여 상호 작용하고 데이터 속성을 변경하는 함수입니다. 원의 크기를 변경하고 싶다고 가정해 봅시다. 여기에는 반경 속성 변경이 포함됩니다. 클래스 원에 반경 위치의 메서드를 추가합니다.

메서드는 self와 기타 매개 변수가 필요한 함수입니다. 이 경우 반경에 값을 추가할 것입니다. r을 데이터 속성 반경에 더할 것입니다. 객체를 생성하고 add radius 메서드를 호출할 때 코드의 이 부분이 어떻게 작동하는지 살펴보겠습니다. 이전과 마찬가지로 객체 생성자를 사용하여 객체를 만듭니다.

생성자에 두 개의 인수를 전달합니다. 반경은 2로 설정되고 색상은 빨간색으로 설정됩니다. 생성자 본문에는 데이터 속성이 설정됩니다. 상자 비유를 사용하여 개체의 현재 상태를 볼 수 있습니다. 점 뒤에 메서드 이름과 괄호를 추가하여 메서드를 호출합니다.

이 경우 함수의 인수는 추가하려는 양입니다. 메서드를 호출할 때 self 매개 변수에 대해 걱정할 필요가 없습니다. 생성자와 마찬가지로 Python도 이를 처리해 줍니다. 대부분의 경우 메서드 정의에 self 이외의 매개 변수가 지정되지 않을 수 있으므로 함수를 호출할 때 인수를 전달하지 않습니다. 내부적으로 이 메서드는 값 8과 적절한 자체 객체를 사용하여 호출됩니다.

이렇게 하면 객체 , 특히 반경 데이터 속성이 변경됩니다. add radius 메소드를 호출하면 radius 데이터 속성의 값을 변경하여 객체를 변경합니다. 클래스 생성자의 매개 변수에 기본값을 추가할 수 있습니다. 실습에서는 DrawCircle이라는 메서드도 만들었습니다. DrawCircle의 구현에 대해서는 랩을 참조하십시오.

실습에서는 생성자를 사용하여 circle 유형의 새 객체를 만들 수 있습니다. 데이터 속성 반경에 액세스할 수 있습니다. 마지막으로 drawCircle 메서드를 사용하여 원을 그릴 수 있습니다. 마찬가지로, circle 유형의 새 객체를 만들 수 있습니다. 반경의 데이터 속성에 액세스할 수 있습니다.

데이터 속성 색상에 액세스할 수 있습니다. drawCircle 메소드를 사용하여 원을 그릴 수 있습니다. 요약하자면, 반경 속성이 3이고 색상 속성이 빨간색인 RedCircle 클래스의 객체를 만들었습니다. 또한 반경 속성이 10이고 색상 속성이 파란색인 BlueCircle 클래스의 객체를 만들었습니다. 실험실에는 사각형에 대한 유사한 클래스가 있습니다.

생성자를 사용하여 사각형 유형의 새 객체를 만들 수 있습니다. 높이의 데이터 속성에 액세스할 수 있습니다. 너비의 데이터 속성에 액세스할 수도 있습니다. 색상의 데이터 속성에 대해서도 동일한 작업을 수행할 수 있습니다. drawRectangle 메소드를 사용하여 사각형을 그릴 수 있습니다.

클래스가 있는데, 이 클래스는 그 클래스를 구현하거나 인스턴스화한 객체입니다. 예를 들어, 클래스 서클의 두 객체 또는 클래스 사각형의 두 객체를 만들 수 있습니다. dir 함수는 클래스와 관련된 데이터 특성 및 메서드 목록을 가져오는 데 유용합니다. 관심 있는 개체가 인수로 전달됩니다. 반환값은 해당 객체의 데이터 속성 목록입니다.

밑줄로 둘러싸인 속성은 내부용이므로 걱정할 필요가 없습니다. 규칙적으로 보이는 속성은 여러분이 신경 써야 하는 것들입니다. 다음은 객체의 메서드와 데이터 속성입니다. Python에서는 객체를 사용하여 할 수 있는 일이 훨씬 더 많습니다.

## 예시
- 예를 들어 유형 1과 유형 2의 두 가지 유형이 있습니다.
- 몇 가지 덜 추상적인 예를 들어보겠습니다.
- type 명령을 사용하여 개체의 유형을 찾을 수 있습니다.
- 원 객체를 만들 때 코드를 함수처럼 호출합니다.

## 요약
- 마찬가지로, circle 유형의 새 객체를 만들 수 있습니다.
- 생성자를 사용하여 사각형 유형의 새 객체를 만들 수 있습니다.
- 예를 들어, 클래스 서클의 두 객체 또는 클래스 사각형의 두 객체를 만들 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

In this module, we are going to talk about objects and classes. Python has many different kinds of data types, integers, floats, strings, lists, dictionaries, Booleans. In Python, each is an object. Every object has the following; a type, internal representation, a set of functions called methods to interact with the data. An object is an instance of a particular type.

For example, we have two types, Type 1 and Type 2. We can have several objects of Type 1 as shown in yellow. Each object is an instance of Type 1. We also have several objects of Type 2 shown in green. Each object is an instance of Type 2.

Let's do several less abstract examples. Every time we create an integer, we are creating an instance of type integer, or we are creating an integer object. In this case, we are creating five instances of type integer or five integer objects. Similarly, every time we create a list, we are creating an instance of type list, or we are creating a list object. In this case, we are creating five instances of type list or five list objects.

We can find out the type of an object by using the type command. In this case, we have an object of type list. We have an object of type integer. We have an object of type string. Finally, we have an object of type dictionary.

A class or type methods are functions that every instance of that class or type provides. It's how you interact with the object. We have been using methods all this time, for example, on lists. Sorting is an example of a method that interacts with the data in the object. Consider the list ratings.

The data is a series of numbers contained within the list. The method sort will change the data within the object. We call the method by adding a period at the end of the object's name, and the method's name we would like to call with parentheses. We have the ratings list represented in orange. The data contained in the list is a sequence of numbers.

We call the sort method. This changes the data contained in the object. You can say it changes the state of the object. We can call the reverse method on the list, changing the list again. We call the method reversing the order of the sequence within the object.

In many cases, you don't have to know the inner workings of the class and its methods, you just have to know how to use them. Next, we will cover how to construct your own classes. You can create your own type or class in Python. In this section, you'll create a class. The class has data attributes.

The class has methods. We then create instances or instances of that class or objects. The class data attributes define the class. Let's create two classes. The first class will be a circle.

The second will be a rectangle. Let's think about what constitutes a circle. Examining this image, all we need is a radius to define a circle and let's add color to make it easier to distinguish between different instances of the class later. Therefore, our class data attributes are radius and color. Similarly, examining the image in order to define a rectangle, we need the height and width.

We will also add color to distinguish between instances later. Therefore, the data attributes are color, height and width. To create the class circle, you will need to include the class definition. This tells Python you are creating your own class, the name of the class. For this course in parentheses, you will always place the term object.

This is the parent of the class. For the class rectangle, we change the name of the class, but the rest is kept the same. Classes are outlines we have to set the attributes to create objects. We can create an object that is an instance of type circle. The color data attribute is red, and the data attribute radius is four.

We can also create a second object that is an instance of type circle. In this case, the color data attribute is green, and the data attribute radius is two. We can also create an object that is an instance of type rectangle. The color data attribute is blue, and the data attribute of height and width is two. The second object is also an instance of type rectangle.

In this case, the color data attribute is yellow, and the height is one, and the width is three. We now have different objects of class circle or type circle. We also have different objects of class rectangle or type rectangle. Let us continue building the circle class in Python. We define our class.

We then initialize each instance of the class with data attributes, radius and color using the class constructor. Function in it is a constructor. It's a special function that tells Python you are making a new class. There are other special functions in Python to make more complex classes. The radius and color parameters are used to initialize the radius and color data attributes of the class instance.

The self parameter refers to the newly created instance of the class. The parameters radius and color can be used in the constructor's body to access the values passed to the class constructor when the class is constructed. We can set the value of the radius and color data attributes to the values passed to the constructor method. Similarly, we can define the class rectangle in Python. The name of the class is different.

This time, the class data attributes are color, height and width. After we have created the class, in order to create an object of class circle, we introduce a variable. This will be the name of the object. We create the object by using the object constructor. The object constructor consists of the name of the class, as well as the parameters.

These are the data attributes. When we create a circle object, we call the code like a function. The arguments passed to the circle constructor are used to initialize the data attributes of the newly created circle instance. It is helpful to think of self as a box that contains all the data attributes of the object. Typing the object's name followed by a dot and the data attribute name gives us the data attribute value, for example, radius.

In this case, the radius is 10. We can do the same for color. We can see the relationship between the self parameter and the object. In Python, we can also set or change the data attribute directly, typing the object's name followed by a dot and the data attribute name and set it equal to the corresponding value. We can verify that the color data attribute has changed.

Usually, in order to change the data in an object, we define methods in the class. Let's discuss methods. We have seen how data attributes consist of the data defining the objects. Methods are functions that interact and change the data attributes, changing or using the data attributes of the object. Let's say we would like to change the size of a circle.

This involves changing the radius attribute. We add a method at radius to the class circle. The method is a function that requires a self as well as other parameters. In this case, we are going to add a value to the radius. We denote that value as r.

We are going to add r to the data attribute radius. Let's see how this part of the code works when we create an object and call the add radius method. As before, we create an object with the object constructor. We pass two arguments to the constructor. The radius is set to two and the color is set to red.

In the constructor's body, the data attributes are set. We can use the box analogy to see the current state of the object. We call the method by adding a dot followed by the method name and parentheses. In this case, the argument of the function is the amount we would like to add. We do not need to worry about the self parameter when calling the method.

Just like with the constructor, Python will take care of that for us. In many cases, there may not be any parameters other than self specified in the methods definition, so we don't pass any arguments when calling the function. Internally, the method is called with a value of eight and the proper self object. The method assigns a new value to self. This changes the object, in particular, the radius data attribute.

When we call the add radius method, this changes the object by changing the value of the radius data attribute. We can add default values to the parameters of a class's constructor. In the labs, we also create the method called drawCircle. See the lab for the implementation of drawCircle. In the labs, we can create a new object of type circle using the constructor.

The color will be red and the radius will be three. We can access the data attribute radius. We can access the attribute color. Finally, we can use the method drawCircle to draw the circle. Similarly, we can create a new object of type circle.

We can access the data attribute of radius. We can access the data attribute color. We can use the method drawCircle to draw the circle. In summary, we have created an object of class circle called RedCircle with a radius attribute of three and a color attribute of red. We also created an object of class circle called BlueCircle with a radius attribute of 10 and a color attribute of blue.

In the lab, we have a similar class for rectangle. We can create a new object of type rectangle using the constructor. We can access a data attribute of height. We can also access the data attribute of width. We can do the same for the data attribute of color.

We can use the method drawRectangle to draw the rectangle. We have a class, an object that is a realization or instantiation of that class. For example, we can create two objects of class circle or two objects of class rectangle. The dir function is useful for obtaining the list of data attributes and methods associated with a class. The object you're interested in is passed as an argument.

The return value is a list of that object's data attributes. The attributes surrounded by underscores are for internal use, and you shouldn't have to worry about them. The regular looking attributes are the ones you should concern yourself with. These are the objects methods and data attributes. There is a lot more you can do with objects in Python.

</details>
