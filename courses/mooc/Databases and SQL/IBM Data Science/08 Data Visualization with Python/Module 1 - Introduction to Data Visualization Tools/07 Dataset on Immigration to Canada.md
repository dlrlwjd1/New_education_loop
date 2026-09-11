# Dataset on Immigration to Canada

## 개요
- 강좌: Data Visualization with Python
- 모듈: Introduction to Data Visualization Tools
- 재생 시간: 3분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/lKMUN/dataset-on-immigration-to-canada)
- Pandas를 사용하여 프로그램에서 DataFrame으로 데이터를 가져오세요.
- 우리는 45개국에 대해 집계한 유엔 인구국 이민 데이터를 사용할 것입니다.

## 내용
### 핵심 내용
- Pandas를 사용하여 프로그램에서 DataFrame으로 데이터를 가져오세요.
- 우리는 45개국에 대해 집계한 유엔 인구국 이민 데이터를 사용할 것입니다.
- 다음은 캐나다 이민에 관한 UN 데이터를 Excel 파일 형식으로 정리한 것입니다.
- 따라서 탐색적 분석용이든 프레젠테이션용이든 다양한 유형의 데이터 플롯을 만들기 시작하려면 데이터를 pandas DataFrame으로 가져와야 합니다.
- 데이터를 pandas DataFrame으로 읽어오려면 처음 20개 행을 건너뛰고 각 국가에 해당하는 데이터만 읽는다는 점에 유의하세요.
- 다양한 유형의 데이터 플롯을 만들기 시작하려면 데이터를 Pandas 데이터 프레임으로 가져와야 합니다.

### 한국어 Transcript

캐나다 이민 데이터 세트에 오신 것을 환영합니다. 이 비디오를 보고 나면 이 과정에서 데이터 시각화를 위해 사용할 데이터 세트를 이해할 수 있을 것입니다. Pandas를 사용하여 프로그램에서 DataFrame으로 데이터를 가져오세요. 플로팅에 적합하도록 데이터를 처리합니다. 우리는 45개국에 대해 집계한 유엔 인구국 이민 데이터를 사용할 것입니다.

이 데이터에는 각 국가에 대해 전 세계 모든 국가의 총 이민자 수에 해당하는 데이터가 보고됩니다. 이 과정에서는 이민자 출신 국가와 관련된 다른 메타데이터 외에도 캐나다에 초점을 맞추고 주로 그레이트 화이트 노스 이민과 관련된 데이터 세트를 다룰 것입니다. 다음은 캐나다 이민에 관한 UN 데이터를 Excel 파일 형식으로 정리한 것입니다. 처음 20개 행에는 UN 부서에 대한 텍스트 데이터와 기타 정보가 들어 있습니다. 21행에는 열의 레이블이 들어 있습니다.

그 다음 각 행은 국가가 위치한 대륙, 속한 지역, 개발 또는 개발 지역 등 국가에 대한 메타데이터와 함께 국가를 나타냅니다. 그러면 1980년부터 2013년까지 그 나라에서 온 총 이민자 수가 집계됩니다. 이 과정에서는 시각화 도구를 만들기 전에 데이터 분석에 판다를 사용하게 됩니다. 따라서 탐색적 분석용이든 프레젠테이션용이든 다양한 유형의 데이터 플롯을 만들기 시작하려면 데이터를 pandas DataFrame으로 가져와야 합니다. 이를 위해서는 판다스 라이브러리와 Excel 스프레드시트 파일에서 데이터를 추출하는 데 필요한 openpyxl 라이브러리를 가져와야 합니다.

그런 다음 pandas 함수를 호출하여 엑셀을 읽어보겠습니다. 데이터를 pandas DataFrame으로 읽어오려면 처음 20개 행을 건너뛰고 각 국가에 해당하는 데이터만 읽는다는 점에 유의하세요. 데이터를 제대로 가져왔는지 확인하려면 언제든지 head 함수를 사용하여 DataFrame의 처음 5개 행을 표시할 수 있습니다. 이제 국가 이름이 각 행의 색인이 되도록 데이터 프레임을 처리해 보겠습니다. 이렇게 하면 특정 국가를 더 쉽게 쿼리할 수 있을 것입니다.

또한 1980년부터 2013년까지의 각 국가의 총 이민자 수를 나타내는 열을 추가해 보겠습니다. 따라서 아프가니스탄의 경우 58,639명, 알바니아의 경우 15,699명, 이런 식으로 계속됩니다. 이제 데이터프레임 이름을 df_canada 로 지정해 보겠습니다. 이 영상에서 여러분은 유엔의 인구 부서가 45개국에 대한 이민 데이터를 집계했다는 것을 알게 되었습니다. 캐나다 이민에 관한 UN 데이터에는 이주한 사람들의 수와 관련된 데이터가 나와 있습니다.

다양한 유형의 데이터 플롯을 만들기 시작하려면 데이터를 Pandas 데이터 프레임으로 가져와야 합니다.

## 예시
- 이렇게 하면 특정 국가를 더 쉽게 쿼리할 수 있을 것입니다.

## 요약
- 따라서 탐색적 분석용이든 프레젠테이션용이든 다양한 유형의 데이터 플롯을 만들기 시작하려면 데이터를 pandas DataFrame으로 가져와야 합니다.
- 데이터를 pandas DataFrame으로 읽어오려면 처음 20개 행을 건너뛰고 각 국가에 해당하는 데이터만 읽는다는 점에 유의하세요.
- 다양한 유형의 데이터 플롯을 만들기 시작하려면 데이터를 Pandas 데이터 프레임으로 가져와야 합니다.

<details>
<summary>영문 Transcript 원문</summary>

[MUSIC] Hello, and welcome to Dataset on Immigration to Canada. After watching this video, you'll be able to understand the data set to be used in this course for data visualization. Import data with pandas as a DataFrame in your program. Process data to make it suitable for plotting. We will use the Population Division of the United Nations compiled immigration data pertaining to 45 countries, where for each country, data corresponding to the total number of immigrants from all world countries are reported.

In addition to other metadata pertaining to the immigrants countries of origin, in this course, we'll focus on Canada and work primarily with the data set involving immigration to the Great White North. Here is a snapshot of the UN data on immigration to Canada in the form of an Excel file. The first 20 rows contain textual data about the UN department and other information. Row 21 contains the labels of the columns. Following that, each row represents a country along with metadata about the country, such as the continent it resides in, what region it belongs to, and whether the region is developing or developed.

Then we have the total number of immigrants from that country for the years 1980 all the way to 2013. Throughout this course, we will be using pandas for any analysis of the data before creating visualization tools. So in order to start creating different types of plots of the data, whether for exploratory analysis or for presentation, we will need to import the data into a pandas DataFrame. To do that, we will need to import the pandas library, as well as the openpyxl library, which is required to extract data from Excel spreadsheets files. Then we will call the pandas function, read excel.

To read the data into a pandas DataFrame, notice how we're skipping the first 20 rows to read only the data corresponding to each country. If you want to confirm that you have imported your data correctly, you can always use the head function to display the first five rows in the DataFrame. Now, let's process the data frame so that the country name becomes the index of each row. This should make querying specific countries easier. Also, let's add an extra column which represents the total immigration for each country from 1980 to 2013.

So, for Afghanistan it's 58,639, and for Albania it's 15,699, and so on. Now let's name our DataFrame df_canada. In this video, you learned that, the population division of the United Nations compiled immigration data pertaining to 45 countries. The UN data on immigration to Canada shows data related to the number of people who migrated. In order to start creating different types of plots of the data, you will need to import the data into a Pandas data frame.

</details>
