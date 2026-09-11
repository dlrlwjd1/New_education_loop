# One Dimensional Numpy

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: Working with Data in Python
- 재생 시간: 11분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/XCjRw/one-dimensional-numpy)
- 이 비디오에서는 1D의 NumPy, 특히 ndarray에 대해 다룰 것입니다.
- 속도 및 메모리와 같은 다른 많은 이점이 있습니다.

## 내용
### 핵심 내용
- 이 비디오에서는 1D의 NumPy, 특히 ndarray에 대해 다룰 것입니다.
- 속도 및 메모리와 같은 다른 많은 이점이 있습니다.
- 1에서 3까지의 요소를 선택하여 다음과 같이 새 NumPy 배열 d에 할당할 수 있습니다.
- NumPy 코드 한 줄로 벡터 추가를 수행할 수도 있습니다.
- NumPy를 사용하여 NumPy 배열을 새 NumPy 배열에 매핑하는 함수를 만들 수 있습니다.
- NumPy 함수 sine을 사용하여 배열 x를 새 배열 y에 매핑할 수 있습니다.

### 한국어 Transcript

이 비디오에서는 1D의 NumPy, 특히 ndarray에 대해 다룰 것입니다. NumPy는 과학 컴퓨팅을 위한 라이브러리입니다. 속도 및 메모리와 같은 다른 많은 이점이 있습니다. NumPy는 팬더의 기반이기도 합니다. 이 비디오에서는 기본 및 배열 생성, 인덱싱 및 슬라이싱, 기본 연산, 범용 함수를 다룹니다.

NumPy 배열을 만드는 방법을 살펴 보겠습니다. Python 목록은 데이터를 저장하고 액세스할 수 있는 컨테이너입니다. 다음과 같이 대괄호를 사용하여 각 요소에 액세스 할 수 있습니다. NumPy 배열 또는 ndarray는 목록과 유사합니다. 일반적으로 크기는 고정되어 있으며 각 요소는 같은 유형입니다.

먼저 NumPy를 가져와서 목록을 NumPy 배열로 캐스팅할 수 있습니다. 그런 다음 목록을 다음과 같이 캐스팅합니다. 인덱스를 통해 데이터에 액세스할 수 있습니다. 목록과 마찬가지로 정수와 대괄호를 사용하여 각 요소에 액세스할 수 있습니다. NumPy 배열에는 동일한 유형의 데이터가 포함되어 있으므로 dtype 속성을 사용하여 배열 요소의 데이터 유형을 얻을 수 있습니다.

배열 a를 사용하여 몇 가지 기본 배열 속성을 살펴보겠습니다. 다음 두 속성은 더 높은 차원에 도달할 때 더 의미가 있을 것입니다. 속성 ndim은 배열 차원의 수 또는 배열의 순위 (이 경우 1) 를 나타냅니다. 속성 셰이프는 각 차원의 배열 크기를 나타내는 정수 튜플입니다. 실수로 NumPy 배열을 만들 수 있습니다.

dtype 속성을 살펴보면 요소가 정수가 아니기 때문에 float 64가 표시됩니다. 몇 가지 인덱싱 및 슬라이싱 방법을 살펴보겠습니다. 다음과 같이 배열의 첫 번째 요소를 100으로 변경할 수 있습니다. 배열의 첫 번째 값은 이제 100입니다. 배열의 다섯 번째 요소를 다음과 같이 변경할 수 있습니다.

리스트 및 튜플과 마찬가지로 NumPy 배열을 슬라이스할 수 있습니다. 배열의 요소는 다음 인덱스에 해당합니다. 1에서 3까지의 요소를 선택하여 다음과 같이 새 NumPy 배열 d에 할당할 수 있습니다. 목록과 마찬가지로 마지막 색인에 해당하는 요소는 계산하지 않습니다. 다음과 같이 해당 인덱스를 새 값에 할당할 수 있습니다.

이제 배열 c에 새 값이 생겼습니다. NumPy로 수행할 수 있는 작업에 대한 더 많은 예는 실험실 또는 NumPy. NumPy를 사용하면 데이터 과학에서 일반적으로 수행되는 많은 작업을 더 쉽게 수행할 수 있습니다. 이러한 동일한 작업은 일반적으로 계산 속도가 더 빠르며 일반 Python에 비해 NumPy에서 더 적은 메모리를 필요로 합니다. 1차원 배열에 대한 이러한 연산 중 일부를 살펴보겠습니다.

좀 더 흥미롭게 만들기 위해 유클리드 벡터의 맥락에서 많은 연산을 살펴보겠습니다. 벡터 추가는 데이터 과학에서 널리 사용되는 작업입니다. 요소가 두 개 있는 벡터 u를 생각해 봅시다. 요소는 서로 다른 색상으로 구분됩니다. 마찬가지로, 성분이 두 개 있는 벡터 v도 생각해 보십시오.

벡터를 더하여 새 벡터 (이 경우 z) 를 생성합니다. z의 첫 번째 성분은 벡터 u와 v의 첫 번째 성분을 더한 것입니다. 마찬가지로, 두 번째 성분은 u와 v의 두 번째 성분의 합입니다. 이제 이 새 벡터 z는 벡터 u와 v의 선형 조합입니다. 선 세그먼트나 화살표로 벡터 덧셈을 나타내는 것이 도움이 됩니다.

첫 번째 벡터는 빨간색으로 표시됩니다. 벡터는 두 구성요소의 방향을 가리킬 것입니다. 따라서 화살표는 원점에서 수평 방향으로 한 단위 오프셋됩니다. 이 구성 요소를 수직 방향으로 표현합니다. 이 성분은 0이므로 벡터는 수직 방향을 가리키지 않습니다.

두 번째 벡터를 파란색으로 나타냅니다. 따라서 화살표는 수평 방향을 가리키지 않습니다. 결과적으로 벡터는 수직 방향을 한 단위 가리킵니다. 벡터 u와 v를 더하면 새 벡터 z가 되고 첫 번째 구성요소가 추가됩니다. 벡터를 추가할 때 벡터 v의 꼬리를 벡터 u의 끝에 배치하는 것이 좋습니다.

새 벡터 z는 첫 번째 벡터 u의 밑과 두 번째 벡터의 꼬리를 연결하여 생성됩니다. 다음 세 줄의 코드는 두 목록을 추가하고 결과를 목록 z에 배치합니다. NumPy 코드 한 줄로 벡터 추가를 수행할 수도 있습니다. 화면 오른쪽에 표시된 것처럼 두 목록에서 벡터 추가를 수행하려면 여러 줄이 필요합니다. 또한 NumPy 코드가 훨씬 빠르게 실행됩니다.

이는 데이터가 많은 경우 중요합니다. 더하기 기호를 빼기 부호로 변경하여 벡터 뺄셈을 수행할 수도 있습니다. 화면 오른쪽에 표시된 것처럼 두 목록에서 벡터 빼기를 수행하려면 여러 줄이 필요합니다. 스칼라를 사용한 벡터 곱셈은 일반적으로 수행되는 또 다른 작업입니다. 각 성분은 서로 다른 색으로 지정됩니다.

벡터에 스칼라 값 (이 경우 2) 을 곱하면 됩니다. 벡터의 각 구성요소에 2를 곱합니다. 이 경우 각 구성 요소가 두 배로 늘어납니다. 선분이나 화살표를 사용하여 현재 상황을 시각화할 수 있습니다. 여기에 스칼라 값 2를 곱하면 벡터가 빨간색으로 표시된 것처럼 2단위씩 늘어납니다.

새 벡터의 길이는 각 방향의 두 배입니다. 스칼라를 사용한 벡터 곱셈에는 NumPy를 사용하는 코드 한 줄만 필요합니다. 화면 오른쪽에 표시된 것처럼 Python 목록에 표시된 것과 동일한 작업을 수행하려면 여러 줄이 필요합니다. 또한 작업 속도도 훨씬 느려질 것입니다. Hadamard 제품은 데이터 과학에서 널리 사용되는 또 다른 작업입니다.

다음 두 벡터 u와 v를 예로 들어 보겠습니다. u와 v의 Hadamard 곱은 새로운 벡터 z입니다. z의 첫 번째 성분은 u와 v의 첫 번째 요소의 곱입니다. 마찬가지로, 두 번째 성분은 u와 v의 두 번째 요소의 곱입니다. 결과 벡터는 u와 v의 항목별 곱으로 구성됩니다.

NumPy에서 코드 한 줄로 Hadamard 곱을 수행할 수도 있습니다. 화면 오른쪽에 표시된 것처럼 두 목록에서 Hadamard 제품을 실행하려면 여러 줄이 필요합니다. 도트 프로덕트는 데이터 과학에서 널리 사용되는 또 다른 연산입니다. 벡터 u와 v를 예로 들어 보겠습니다. 점의 곱은 다음 항에서 주어진 단일 숫자이며 두 벡터가 얼마나 유사한지를 나타냅니다.

v와 u의 첫 번째 성분을 곱한 다음, 두 번째 성분을 곱하고 그 결과를 더합니다. 결과는 두 벡터가 얼마나 유사한지를 나타내는 숫자입니다. NumPy 함수 dot을 사용하여 도트 곱을 수행하고 다음과 같이 변수 결과를 할당할 수도 있습니다. 배열 u가 있다고 가정해 보겠습니다. 배열에는 다음과 같은 요소가 포함됩니다.

배열에 스칼라 값을 추가하면 NumPy는 해당 값을 각 요소에 추가합니다. 이 속성을 브로드캐스팅이라고 합니다. 범용 함수는 nd 배열에서 작동하는 함수입니다. 범용 함수를 NumPy 배열에 적용할 수 있습니다. 평균 메서드를 사용하여 a에 있는 모든 요소의 평균값 또는 평균값을 계산할 수 있습니다.

이는 모든 요소의 평균에 해당합니다. 예를 들어 NumPy 배열 b를 예로 들어 보겠습니다. max 메서드를 사용하여 최대값을 찾을 수 있습니다. 가장 큰 값은 5라는 것을 알 수 있습니다. 따라서 max 메서드는 5를 반환합니다.

NumPy를 사용하여 NumPy 배열을 새 NumPy 배열에 매핑하는 함수를 만들 수 있습니다. 화면 왼쪽에 몇 가지 코드를 구현하고 화면 오른쪽을 사용하여 진행 상황을 보여 드리겠습니다. 다음과 같이 NumPy에서 pi 값에 액세스 할 수 있습니다. 다음과 같은 NumPy 배열을 라디안 단위로 만들 수 있습니다. sine 함수를 배열 x에 적용하고 값을 배열 y에 할당할 수 있습니다.

이렇게 하면 sine 함수가 배열의 각 요소에 적용됩니다. 이는 벡터의 각 성분에 사인 함수를 적용하는 것과 같습니다. 결과는 각 값이 배열 x의 각 요소에 적용되는 사인 함수에 대응되는 새 배열 y입니다. 수학 함수를 플로팅하는 데 유용한 함수는 행 공간입니다. 줄 간격은 지정된 간격 동안 균일한 간격의 숫자를 반환합니다.

시퀀스의 시작점, 시퀀스의 끝점을 지정합니다. 매개변수 num은 생성할 샘플 수 (이 경우 5) 를 나타냅니다. 매개변수 num을 9로 변경하면 음수 2에서 2까지의 구간에 걸쳐 균일한 간격의 숫자 9개를 얻습니다. 결과는 후속 샘플 간의 차이가 이전의 1이 아닌 0.5라는 것입니다. 함수 줄 공간을 사용하여 0에서 2pi 사이의 균일한 간격의 샘플 100개를 생성할 수 있습니다.

NumPy 함수 sine을 사용하여 배열 x를 새 배열 y에 매핑할 수 있습니다. pi 플롯을 plt로 가져와서 함수를 플로팅할 수 있습니다. Jupyter 노트북을 사용하고 있으므로 matplotlib 명령을 인라인으로 사용하여 플롯을 표시합니다. 첫 번째 입력값은 가로축 또는 x축의 값에 해당합니다. 두 번째 입력값은 세로 또는 y축의 값에 해당합니다.

NumPy로 할 수 있는 일은 훨씬 더 많습니다. 이 비디오를 시청해 주셔서 감사합니다.

## 예시
- 다음 세 줄의 코드는 두 목록을 추가하고 결과를 목록 z에 배치합니다.
- NumPy 코드 한 줄로 벡터 추가를 수행할 수도 있습니다.
- 또한 NumPy 코드가 훨씬 빠르게 실행됩니다.
- 스칼라를 사용한 벡터 곱셈에는 NumPy를 사용하는 코드 한 줄만 필요합니다.

## 요약
- NumPy 코드 한 줄로 벡터 추가를 수행할 수도 있습니다.
- NumPy를 사용하여 NumPy 배열을 새 NumPy 배열에 매핑하는 함수를 만들 수 있습니다.
- NumPy 함수 sine을 사용하여 배열 x를 새 배열 y에 매핑할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we will be covering NumPy in 1D, in particular, ndarrays. NumPy is a library for scientific computing. It has many useful functions. There are many other advantages like speed and memory. NumPy is also the basis for pandas, so check out our pandas video.

In this video, we will be covering the basics and array creation, indexing and slicing, basic operations, universal functions. Let's go over how to create a NumPy array. A Python list is a container that allows you to store and access data. Each element is associated with an index. We can access each element using a square bracket as follows.

A NumPy array, or ndarray, is similar to a list. It's usually fixed in size, and each element is of the same type. In this case, integers. We can cast a list to a NumPy array by first importing NumPy. We then cast the list as follows.

We can access the data via an index. As with the lists, we can access each element with an integer and a square bracket. The value of a is stored as follows. If we check the type of the array, we get NumPy. As NumPy arrays contain data of the same type, we can use the attribute dtype to obtain the data type of the array's elements.

In this case, a 64-bit integer. Let's review some basic array attributes using the array a. The attribute size is the number of elements in the array. As there are five elements, the result is five. The next two attributes will make more sense when we get to higher dimensions.

But let's review them. The attribute ndim represents the number of array dimensions or the rank of the array, in this case, one. The attribute shape is a tuple of integers indicating the size of the array in each dimension. We can create a NumPy array with real numbers. When we check the type of the array, we get NumPy.

If we examine the attribute dtype, we see float 64 as the elements are not integers. There are many other attributes. Let's review some indexing and slicing methods. We can change the first element of the array to 100 as follows. The array's first value is now 100.

We can change the fifth element of the array as follows. The fifth element is now zero. Like lists and tuples, we can slice a NumPy array. The elements of the array correspond to the following index. We can select the elements from one to three and assign it to a new NumPy array, d, as follows.

The elements in d correspond to the index. Like lists, we do not count the element corresponding to the last index. We can assign the corresponding indices to new values as follows. The array c now has new values. See the labs or NumPy.

org for more examples of what you can do with NumPy. NumPy makes it easier to do many operations that are commonly performed in data science. These same operations are usually computationally faster and require less memory in NumPy compared to regular Python. Let's review some of these operations on one-dimensional arrays. We will look at many of the operations in the context of Euclidean vectors to make things more interesting.

Vector addition is a widely used operation in data science. Consider the vector u with two elements. The elements are distinguished by the different colors. Similarly, consider the vector v with two components. In vector addition, we create a new vector, in this case z.

The first component of z is the addition of the first component of vectors u and v. Similarly, the second component is the sum of the second components of u and v. This new vector z is now a linear combination of the vector u and v. Representing vector addition with line segment or arrows is helpful. The first vector is represented in red.

The vector will point in the direction of the two components. The first component of the vector is 1. As a result, the arrow is offset one unit from the origin in the horizontal direction. The second component is 0. We represent this component in the vertical direction.

As this component is 0, the vector does not point in the vertical direction. We represent the second vector in blue. The first component is 0. Therefore, the arrow does not point to the horizontal direction. The second component is 1.

As a result, the vector points in the vertical direction one unit. When we add the vector u and v, we get the new vector z. We add the first component. This corresponds to the horizontal direction. We also add the second component.

It's helpful to use the tip-to-tail method when adding vectors, placing the tail of a vector v on the tip of vector u. The new vector z is constructed by connecting the base of the first vector u with the tail of the second v. The following three lines of code will add the two lists and place the result in the list z. We can also perform vector addition with one line of NumPy code. It would require multiple lines to perform vector addition on two lists, as shown on the right side of the screen.

In addition, the NumPy code will run much faster. This is important if you have lots of data. We can also perform vector subtraction by changing the addition sign to a subtraction sign. It would require multiple lines to perform vector subtraction on two lists, as shown on the right side of the screen. Vector multiplication with a scalar is another commonly performed operation.

Consider the vector y. Each component is specified by a different color. We simply multiply the vector by a scalar value, in this case 2. Each component of the vector is multiplied by 2. In this case, each component is doubled.

We can use the line segment or arrows to visualize what's going on. The original vector y is in purple. After multiplying it by a scalar value of 2, the vector is stretched out by 2 units, as shown in red. The new vector is twice as long in each direction. Vector multiplication with a scalar only requires one line of code using NumPy.

It would require multiple lines to perform the same task as shown with Python lists, as shown on the right side of the screen. In addition, the operation would also be much slower. Hadamard product is another widely used operation in data science. Consider the following two vectors, u and v. The Hadamard product of u and v is a new vector z.

The first component of z is the product of the first element of u and v. Similarly, the second component is the product of the second element of u and v. The resultant vector consists of the entry-wise product of u and v. We can also perform Hadamard product with one line of code in NumPy. It would require multiple lines to perform Hadamard product on two lists, as shown on the right side of the screen.

The dot product is another widely used operation in data science. Consider the vector u and v. The dot product is a single number given by the following term and represents how similar two vectors are. We multiply the first component from v and u. We then multiply the second component and add the result together.

The result is a number that represents how similar the two vectors are. We can also perform dot product using the NumPy function dot and assign it with the variable result as follows. Consider the array u. The array contains the following elements. If we add a scalar value to the array, NumPy will add that value to each element.

This property is known as broadcasting. A universal function is a function that operates on nd arrays. We can apply a universal function to a NumPy array. Consider the arrays a. We can calculate the mean or average value of all the elements in a using the method mean.

This corresponds to the average of all the elements. In this case, the result is zero. There are many other functions. For example, consider the NumPy arrays b. We can find the maximum value using the method max.

We see the largest value is 5. Therefore, the method max returns a 5. We can use NumPy to create functions that map NumPy arrays to new NumPy arrays. Let's implement some code on the left side of the screen and use the right side of the screen to demonstrate what's going on. We can access the value of pi in NumPy as follows.

We can create the following NumPy array in radians. This array corresponds to the following vector. We can apply the function sine to the array x and assign the values to the array y. This applies the sine function to each element in the array. This corresponds to applying the sine function to each component of the vector.

The result is a new array y where each value corresponds to a sine function being applied to each element in the array x. A useful function for plotting mathematical functions is line space. Line space returns evenly spaced numbers over specified interval. We specify the starting point of the sequence, the ending point of the sequence, the parameter num indicates the number of samples to generate, in this case, 5. The space between samples is 1.

If we change the parameter num to 9, we get 9 evenly spaced numbers over the interval from negative 2 to 2. The result is the difference between subsequent samples is 0.5 as opposed to 1 as before. We can use the function line space to generate 100 evenly spaced samples from the interval 0 to 2 pi. We can use the NumPy function sine to map the array x to a new array y. We can import the library pi plot as plt to help us plot the function.

As we are using a Jupyter notebook, we use the command matplotlib inline to display the plot. The following command plots a graph. The first input corresponds to the values for the horizontal or x-axis. The second input corresponds to the values for the vertical or y-axis. There is a lot more you can do with NumPy.

Check out the labs at numpy. Thanks for watching this video.

</details>
