# Two Dimensional Numpy

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: Working with Data in Python
- 재생 시간: 7분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/0oVHr/two-dimensional-numpy)
- 이 섹션에서는 2D 어레이만 중점적으로 다루지만 넘파이로 훨씬 더 높은 차원의 어레이를 만들 수 있습니다.
- 이 영상에서는 기본 개념과 함께 2D 어레이를 만드는 방법, 2D 인덱싱 및 슬라이싱과 2D 기본 연산에 대해 살펴봅니다.

## 내용
### 핵심 내용
- 이 섹션에서는 2D 어레이만 중점적으로 다루지만 넘파이로 훨씬 더 높은 차원의 어레이를 만들 수 있습니다.
- 이 영상에서는 기본 개념과 함께 2D 어레이를 만드는 방법, 2D 인덱싱 및 슬라이싱과 2D 기본 연산에 대해 살펴봅니다.
- 행렬 곱셈에서는 새 행렬의 i 번째 행과 j 번째 열을 얻기 위해 A의 i 번째 행과 B의 j 번째 열의 내적을 사용합니다.
- 새 행렬의 첫 번째 행과 두 번째 열의 경우 행렬 A의 첫 번째 행의 내적을 사용합니다.
- 마지막으로 새 행렬의 두 번째 행과 두 번째 열의 경우 행렬 A의 두 번째 행과 행렬 B의 두 번째 열의 내적을 사용합니다.
- 이 외에도 넘파이를 통해 다양한 작업을 수행할 수 있습니다.

### 한국어 Transcript

넘파이 어레이는 여러 차원으로 만들 수 있습니다. 이 섹션에서는 2D 어레이만 중점적으로 다루지만 넘파이로 훨씬 더 높은 차원의 어레이를 만들 수 있습니다. 이 영상에서는 기본 개념과 함께 2D 어레이를 만드는 방법, 2D 인덱싱 및 슬라이싱과 2D 기본 연산에 대해 살펴봅니다. 여기 목록 a에는 각각 같은 크기의 중첩 목록 세 개가 포함됩니다. 각 목록은 이해를 돕기 위해 색상이 지정되었습니다.

이 목록을 보시는 것처럼 넘파이 어레이에 캐스팅할 수 있습니다. 넘파이 어레이를 직사각형 어레이로 시각화하면 더 쉽게 이해할 수 있습니다. 각 중첩 목록은 행렬의 다른 행에 해당합니다. ndim 특성을 사용하면 축 또는 차원의 수를 얻을 수 있으며 이를 순위라고 합니다. 순위라는 용어는 행렬과 같이 선형으로 독립된 열의 수를 의미하지는 않습니다.

ndim은 중첩 목록의 수로 이해하는 것이 좋습니다. 첫 번째 목록은 첫 번째 차원을 나타냅니다. 이 목록에는 다른 목록 집합이 들어 있습니다. 이는 두 번째 차원 또는 축을 나타냅니다. 목록에 포함된 목록의 수는 차원이 아닌 목록의 형태와 관련이 있습니다.

1D 어레이와 마찬가지로, shape 특성은 튜플을 반환합니다. 직사각형 표현을 사용하는 것도 좋습니다. 튜플의 첫 번째 요소는 원래 목록에 포함된 중첩 목록의 수 또는 직사각형 표현의 행 수에 해당합니다. 두 번째 요소는 각 중첩 목록의 크기 또는 직사각형 어레이 0의 열 수에 해당합니다. 규칙은 보시는 것처럼 축 0과 축 1로 표시하는 것입니다.

size 특성을 사용하여 어레이의 크기를 얻을 수도 있습니다. 여기 세 개 행과 세 개 열이 있습니다. 열과 행의 수를 곱하면 총 요소 수, 이 경우 9를 얻을 수 있습니다. 다양한 형태의 어레이와 기타 특성은 실험실을 참조하십시오. 대괄호를 사용하면 어레이의 다른 요소에 액세스할 수 있습니다.

이 이미지는 표현과 같은 목록에 대한 인덱싱 규칙의 관계를 보여줍니다. 첫 번째 괄호 내 인덱스는 각각 다른 색상의 다른 중첩 목록에 해당합니다. 두 번째 대괄호는 중첩 목록 내 특정 요소의 인덱스에 해당합니다. 직사각형 표현을 사용하면 첫 번째 인덱스는 행 인덱스에 해당하고 두 번째 인덱스는 열 인덱스에 해당합니다. 여기처럼 단일 괄호를 사용하여 요소에 액세스할 수도 있습니다.

이 인덱스는 두 번째 행에 해당하고 이 인덱스는 세 번째 열에 해당합니다. 이 예에서는 이 인덱스는 첫 번째 행에 해당하고 두 번째 인덱스는 첫 번째 열에 해당하므로 값은 11입니다. 넘파이 어레이에서 슬라이싱을 사용할 수도 있습니다. 첫 번째 인덱스는 첫 번째 행에 해당합니다. 두 번째 인덱스는 처음 두 열에 액세스합니다.

첫 번째 인덱스는 처음 두 행에 해당합니다. 두 번째 인덱스는 마지막 열에 액세스합니다. 이 프로세스는 행렬 덧셈과 동일합니다. 행렬 Y 역시 각 요소에 다른 색을 지정했습니다. 동일한 위치의 요소를 더하는 것과 같습니다.

즉 같은 색상의 상자에 포함되어 있는 요소를 함께 더하는 것입니다. 그 결과는 행렬 Y 또는 X와 크기가 같은 새로운 행렬입니다. 이 새 행렬의 각 요소는 X와 Y의 해당 요소를 합한 것입니다. 넘파이에서 두 어레이를 더하려면 먼저 어레이, 이 경우 X를 정의합니다. 그런 다음 두 번째 어레이 Y를 정의하고 두 어레이를 더합니다.

넘파이 어레이에 스칼라를 곱하는 것은 행렬에 스칼라를 곱하는 것과 같습니다. 행렬에 이 스칼라 2를 곱하면 행렬의 모든 요소에 2를 곱하게 됩니다. 그 결과는 각 요소에 2를 곱한 동일한 크기의 새 행렬입니다. 먼저 어레이를 정의하고 보시는 것처럼 어레이에 스칼라를 곱한 후 변수 Z에 지정합니다. 그 결과는 각 요소에 2를 곱하는 새로운 어레이입니다.

두 어레이의 곱은 요소곱 또는 아다마르 곱과 같습니다. 어레이 X와 어레이 Y를 예로 들어 보겠습니다. 아다마르 곱은 동일한 위치의 각 요소를 곱하는 것과 같습니다. 즉 동일한 색상 상자에 포함되어 있는 요소를 곱하는 것과 같습니다. 그 결과는 행렬 Y 또는 X와 크기가 같은 새 행렬입니다.

이 새 행렬의 각 요소는 X와 Y의 해당 요소를 곱한 값입니다. 어레이 X와 Y의 곱이 한 줄에 나타나며 그 값을 변수 Z에 지정합니다. 넘파이 어레이로 행렬 곱셈을 수행할 수도 있습니다. 행렬 곱셈은 좀 더 복잡하지만 기본적인 개요를 살펴보겠습니다. 행렬 B에서는 각 열이 다른 색입니다.

선형 대수학에서는 행렬 A에 행렬 B를 곱하기 전에 행렬 A의 열 수가 행렬 B의 행 수와 같은지 확인해야 합니다. 행렬 곱셈에서는 새 행렬의 i 번째 행과 j 번째 열을 얻기 위해 A의 i 번째 행과 B의 j 번째 열의 내적을 사용합니다. 첫 번째 열에서 첫 번째 행은 A의 첫 번째 행과 B의 첫 번째 열의 내적을 사용합니다. 새 행렬의 첫 번째 행과 두 번째 열의 경우 행렬 A의 첫 번째 행의 내적을 사용합니다. 그러나 이번에는 행렬 B의 두 번째 열을 사용합니다.

새 행렬의 두 번째 행과 첫 번째 열은 행렬 A의 두 번째 행의 내적을 사용합니다. 행렬 B의 첫 번째 열의 경우 결과는 0입니다. 마지막으로 새 행렬의 두 번째 행과 두 번째 열의 경우 행렬 A의 두 번째 행과 행렬 B의 두 번째 열의 내적을 사용합니다. 넘파이에서는 넘파이 어레이 A와 B를 정의할 수 있습니다. 행렬 곱셈을 수행하여 어레이 C에 지정하면 됩니다.

결과는 어레이 C이며 어레이 A와 B의 행렬 곱셈에 해당합니다. 이 외에도 넘파이를 통해 다양한 작업을 수행할 수 있습니다.

## 예시
- 이 강의는 개념 설명 중심이며 Transcript에서 독립된 예시를 확인하기 어렵다.

## 요약
- 새 행렬의 첫 번째 행과 두 번째 열의 경우 행렬 A의 첫 번째 행의 내적을 사용합니다.
- 마지막으로 새 행렬의 두 번째 행과 두 번째 열의 경우 행렬 A의 두 번째 행과 행렬 B의 두 번째 열의 내적을 사용합니다.
- 이 외에도 넘파이를 통해 다양한 작업을 수행할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

We can create Numpy arrays with more than one dimension. This section will focus only on 2D arrays but you can use Numpy to build arrays of much higher dimensions. In this video, we will cover the basics and array creation in 2D, indexing and slicing in 2D, and basic operations in 2D. Consider the list a, the list contains three nested lists each of equal size. Each list is color-coded for simplicity.

We can cast the list to a Numpy array as follows. It is helpful to visualize the Numpy array as a rectangular array each nested lists corresponds to a different row of the matrix. We can use the attribute ndim to obtain the number of axes or dimensions referred to as the rank. The term rank does not refer to the number of linearly independent columns like a matrix. It's useful to think of ndim as the number of nested lists.

The first list represents the first dimension. This list contains another set of lists. This represents the second dimension or axis. The number of lists the list contains does not have to do with the dimension but the shape of the list. As with a 1D array, the attribute shape returns a tuple.

It's helpful to use the rectangular representation as well. The first element in the tuple corresponds to the number of nested lists contained in the original list or the number of rows in the rectangular representation, in this case three. The second element corresponds to the size of each of the nested list or the number of columns in the rectangular array zero. The convention is to label this axis zero and this axis one as follows. We can also use the attribute size to get the size of the array.

We see there are three rows and three columns. Multiplying the number of columns and rows together, we get the total number of elements, in this case nine. Check out the labs for arrays of different shapes and other attributes. We can use rectangular brackets to access the different elements of the array. The following image demonstrates the relationship between the indexing conventions for the lists like representation.

The index in the first bracket corresponds to the different nested lists each a different color. The second bracket corresponds to the index of a particular element within the nested list. Using the rectangular representation, the first index corresponds to the row index. The second index corresponds to the column index. We could also use a single bracket to access the elements as follows.

Consider the following syntax. This index corresponds to the second row, and this index the third column, the value is 23. Consider this example, this index corresponds to the first row and the second index corresponds to the first column, and a value of 11. We can also use slicing in Numpy arrays. The first index corresponds to the first row.

The second index accesses the first two columns. Consider this example, the first index corresponds to the first two rows. The second index accesses the last column. We can also add arrays, the process is identical to matrix addition. Consider the matrix X, each element is colored differently.

Consider the matrix Y. Similarly, each element is colored differently. We can add the matrices. This corresponds to adding the elements in the same position, i. e adding elements contained in the same color boxes together.

The result is a new matrix that has the same size as matrix Y or X. Each element in this new matrix is the sum of the corresponding elements in X and Y. To add two arrays in Numpy, we define the array in this case X. Then we define the second array Y, we add the arrays. The result is identical to matrix addition.

Multiplying a Numpy array by a scalar is identical to multiplying a matrix by a scalar. Consider the matrix Y. If we multiply the matrix by this scalar two, we simply multiply every element in the matrix by two. The result is a new matrix of the same size where each element is multiplied by two. Consider the array Y.

We first define the array, we multiply the array by a scalar as follows and assign it to the variable Z. The result is a new array where each element is multiplied by two. Multiplication of two arrays corresponds to an element-wise product, or Hadamard product. Consider array X and array Y. Hadamard product corresponds to multiplying each of the elements in the same position i.

e multiplying elements contained in the same color boxes together. The result is a new matrix that is the same size as matrix Y or X. Each element in this new matrix is the product of the corresponding elements in X and Y. Consider the array X and Y. We can find the product of two arrays X and Y in one line, and assign it to the variable Z as follows.

The result is identical to Hadamard product. We can also perform matrix multiplication with Numpy arrays. Matrix multiplication is a little more complex but let's provide a basic overview. Consider the matrix A where each row is a different color. Also, consider the matrix B where each column is a different color.

In linear algebra, before we multiply matrix A by matrix B, we must make sure that the number of columns in matrix A in this case three is equal to the number of rows in matrix B, in this case three. From matrix multiplication, to obtain the ith row and jth column of the new matrix, we take the dot product of the ith row of a with the jth columns of B. For the first column, first row we take the dot product of the first row of A with the first column of B as follows. For the first row and the second column of the new matrix, we take the dot product of the first row of the matrix A, but this time we use the second column of matrix B, the result is two. For the second row and the first column of the new matrix, we take the dot product of the second row of the matrix A.

With the first column of matrix B, the result is zero. Finally, for the second row and the second column of the new matrix, we take the dot product of the second row of the matrix A with the second column of matrix B, the result is two. In Numpy, we can define the Numpy arrays A and B. We can perform matrix multiplication and assign it to array C. The result is the array C.

It corresponds to the matrix multiplication of array A and B. There is a lot more you can do with it in Numpy. Thanks for watching this video.

</details>
