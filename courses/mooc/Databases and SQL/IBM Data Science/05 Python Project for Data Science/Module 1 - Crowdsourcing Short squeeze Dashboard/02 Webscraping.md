# Webscraping

## 개요
- 강좌: Python Project for Data Science
- 모듈:  Crowdsourcing Short squeeze Dashboard
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-project-for-data-science/lecture/rkMDa/webscraping)
- 이 영상에서 다룰 주제는 웹 스크래핑입니다 이 영상의 목적은 웹 스크래핑의 정의, BeautifulSoup 개체의 역할, find_all 메서드 적용 방법과 웹사이트 웹 스크리핑 방법을 알아보는 것입니다 수백 개의 데이터 요소를 분석하여 스포츠팀의 최우수 선수를 선정해야 한다면 어떤 방법을 사용하시겠습니까?
- 여러 웹사이트의 정보를 직접 복사하여 스프레드시트에 붙여넣으시겠습니까?

## 내용
### 핵심 내용
- 이 영상에서 다룰 주제는 웹 스크래핑입니다 이 영상의 목적은 웹 스크래핑의 정의, BeautifulSoup 개체의 역할, find_all 메서드 적용 방법과 웹사이트 웹 스크리핑 방법을 알아보는 것입니다 수백 개의 데이터 요소를 분석하여 스포츠팀의 최우수 선수를 선정해야 한다면 어떤 방법을 사용하시겠습니까?
- 여러 웹사이트의 정보를 직접 복사하여 스프레드시트에 붙여넣으시겠습니까?
- 필요한 데이터를 찾는 데 시간을 보내다가 많은 작업량에 대한 부담으로 결국 도중에 포기하지는 않나요?
- 이 때 유용한 방법이 바로 웹 스크래핑입니다 웹 스크래핑은 웹사이트에서 자동으로 정보를 추출하는 데 사용되는 프로세스로 몇 분 내지 몇 시간 내에 원하는 정보를 쉽게 얻을 수 있습니다 이 기능을 사용하려면 간단한 Python 코드와 Beautiful Soup과 Requests라는 두 가지 Python 모듈만 있으면 됩니다 웹페이지에서 NBL 리그 선수들의 이름과 연봉을 찾아야 하는 경우를 예로 들어 보겠습니다 먼저 BeautifulSoup을 가져옵니다 웹페이지 HTML은 변수 HTML에 문자열로 저장할 수 있습니다 문서를 구문 분석하려면 BeautifulSoup 생성자로 전달합니다 그러면 문서를 중첩 데이터 구조로 나타내는 BeautifulSoup 개체, soup를 얻을 수 있습니다 BeautifulSoup는 HTML을 구문 분석하는 데 사용되는 메서드를 포함하는 개체와 같은 트리 집합으로 나타냅니다 이제 앞에서 만든 BeautifulSoup 개체, soup를 사용하여 BeautifulSoup 개체에 대해 알아보도록 하겠습니다 tag_object는 원래 문서의 “title” 태그와 같은 HTML 태그에 해당합니다 태그를 예로 보겠습니다 이름이 같은 태그가 여러 개 있으면 해당 태그를 사용하는 첫 번째 요소를 선택합니다 여기서는 Lebron James라는 이름이 볼드체 특성 b로 묶여 있습니다 이 이름을 추출하려면 트리 표시를 사용합니다 트리 표시를 사용해 보겠습니다 여기서는 tag_object 변수를 사용합니다 트리에 나타나는 것처럼 태그의 하위 항목에 액세스하거나 분기 아래로 이동할 수 있습니다 parent 특성을 사용하여 트리 위쪽으로 이동할 수도 있습니다 여기서는 tag_child 하위를 사용합니다 상위 항목에 액세스할 수도 있습니다 이는 원래 태그 개체에 해당합니다 tag_object의 형제를 찾을 수도 있습니다 next_sibling 특성을 사용하면 됩니다 sibling_1의 형제를 찾을 수도 있습니다 next_sibling 특성을 사용하면 됩니다 tag_child 개체를 예로 들어 보겠습니다 이 경우처럼 특성 이름과 값을 사전의 키 값 쌍으로 액세스할 수 있습니다 그 내용을 탐색 가능 문자열로 반환할 수 있으며 이는 BeautifulSoup 기능을 지원하는 Python 문자열과 같습니다 이번에는 find_all 메서드를 살펴보겠습니다 이 메서드는 일종의 필터로, 태그의 이름과 특성, 문자열 텍스트 또는 이들의 조합을 기반으로 내용을 필터링합니다 피자 가게 목록을 예로 들어 보겠습니다 여기서도 먼저 BautifulSoup 개체를 만듭니다 그러나 이번에는 이름을 table로 지정합니다 find_all () 메서드는 태그의 하위 항목에서 필터와 일치하는 모든 하위 항목을 검색하며 태그를 사용하여 테이블에 적용합니다 그 결과는 목록과 같은 Python 이터러블입니다 여기서 각 요소는 의 태그 개체가 되며 테이블 헤더를 포함하여 목록에서 각 행에 해당합니다 각 요소는 태그 개체입니다 첫 번째 행을 예로 들어 보겠습니다 예를 들어 첫 번째 테이블 셀을 추출할 수 있습니다 각 테이블 셀을 반복할 수도 있습니다 먼저 변수 row를 통해 table_rows 목록을 반복합니다 각 요소는 테이블에서 행에 해당합니다 find_all 메서드를 적용하여 모든 테이블 셀을 찾은 다음 각 행마다 변수 cell을 반복할 수 있습니다 반복할 때마다 변수 cell은 테이블에서 해당 특정 행의 요소에 해당합니다 각 요소를 계속 반복하고 각 행에 대해 프로세스를 반복할 수 있습니다 이제 BeautifulSoup를 웹페이지에 적용하는 방법을 알아보겠습니다 웹페이지를 스크래핑하려면 Requests 라이브러리가 필요합니다 첫 번째 단계는 필요한 모듈을 가져오는 것입니다 Requests 라이브러리에서 get 메서드를 사용하여 웹페이지를 다운로드합니다 입력은 URL입니다 text 특성을 사용하여 텍스트를 가져온 후 page 변수에 지정합니다 그런 다음 page 변수에서 BeautifulSoup 개체, ‘soup’를 만듭니다 이 개체를 사용하면 HTML 페이지를 구문 분석할 수 있습니다.
- 이제 페이지를 스크래핑할 수 있습니다 자세한 내용은 실험실을 참조하십시오

### 한국어 Transcript

이 영상에서 다룰 주제는 웹 스크래핑입니다 이 영상의 목적은 웹 스크래핑의 정의, BeautifulSoup 개체의 역할, find_all 메서드 적용 방법과 웹사이트 웹 스크리핑 방법을 알아보는 것입니다 수백 개의 데이터 요소를 분석하여 스포츠팀의 최우수 선수를 선정해야 한다면 어떤 방법을 사용하시겠습니까? 여러 웹사이트의 정보를 직접 복사하여 스프레드시트에 붙여넣으시겠습니까? 필요한 데이터를 찾는 데 시간을 보내다가 많은 작업량에 대한 부담으로 결국 도중에 포기하지는 않나요? 이 때 유용한 방법이 바로 웹 스크래핑입니다 웹 스크래핑은 웹사이트에서 자동으로 정보를 추출하는 데 사용되는 프로세스로 몇 분 내지 몇 시간 내에 원하는 정보를 쉽게 얻을 수 있습니다 이 기능을 사용하려면 간단한 Python 코드와 Beautiful Soup과 Requests라는 두 가지 Python 모듈만 있으면 됩니다 웹페이지에서 NBL 리그 선수들의 이름과 연봉을 찾아야 하는 경우를 예로 들어 보겠습니다 먼저 BeautifulSoup을 가져옵니다 웹페이지 HTML은 변수 HTML에 문자열로 저장할 수 있습니다 문서를 구문 분석하려면 BeautifulSoup 생성자로 전달합니다 그러면 문서를 중첩 데이터 구조로 나타내는 BeautifulSoup 개체, soup를 얻을 수 있습니다 BeautifulSoup는 HTML을 구문 분석하는 데 사용되는 메서드를 포함하는 개체와 같은 트리 집합으로 나타냅니다 이제 앞에서 만든 BeautifulSoup 개체, soup를 사용하여 BeautifulSoup 개체에 대해 알아보도록 하겠습니다 tag_object는 원래 문서의 “title” 태그와 같은 HTML 태그에 해당합니다 태그를 예로 보겠습니다 이름이 같은 태그가 여러 개 있으면 해당 태그를 사용하는 첫 번째 요소를 선택합니다 여기서는 Lebron James라는 이름이 볼드체 특성 b로 묶여 있습니다 이 이름을 추출하려면 트리 표시를 사용합니다 트리 표시를 사용해 보겠습니다 여기서는 tag_object 변수를 사용합니다 트리에 나타나는 것처럼 태그의 하위 항목에 액세스하거나 분기 아래로 이동할 수 있습니다 parent 특성을 사용하여 트리 위쪽으로 이동할 수도 있습니다 여기서는 tag_child 하위를 사용합니다 상위 항목에 액세스할 수도 있습니다 이는 원래 태그 개체에 해당합니다 tag_object의 형제를 찾을 수도 있습니다 next_sibling 특성을 사용하면 됩니다 sibling_1의 형제를 찾을 수도 있습니다 next_sibling 특성을 사용하면 됩니다 tag_child 개체를 예로 들어 보겠습니다 이 경우처럼 특성 이름과 값을 사전의 키 값 쌍으로 액세스할 수 있습니다 그 내용을 탐색 가능 문자열로 반환할 수 있으며 이는 BeautifulSoup 기능을 지원하는 Python 문자열과 같습니다 이번에는 find_all 메서드를 살펴보겠습니다 이 메서드는 일종의 필터로, 태그의 이름과 특성, 문자열 텍스트 또는 이들의 조합을 기반으로 내용을 필터링합니다 피자 가게 목록을 예로 들어 보겠습니다 여기서도 먼저 BautifulSoup 개체를 만듭니다 그러나 이번에는 이름을 table로 지정합니다 find_all () 메서드는 태그의 하위 항목에서 필터와 일치하는 모든 하위 항목을 검색하며 태그를 사용하여 테이블에 적용합니다 그 결과는 목록과 같은 Python 이터러블입니다 여기서 각 요소는 의 태그 개체가 되며 테이블 헤더를 포함하여 목록에서 각 행에 해당합니다 각 요소는 태그 개체입니다 첫 번째 행을 예로 들어 보겠습니다 예를 들어 첫 번째 테이블 셀을 추출할 수 있습니다 각 테이블 셀을 반복할 수도 있습니다 먼저 변수 row를 통해 table_rows 목록을 반복합니다 각 요소는 테이블에서 행에 해당합니다 find_all 메서드를 적용하여 모든 테이블 셀을 찾은 다음 각 행마다 변수 cell을 반복할 수 있습니다 반복할 때마다 변수 cell은 테이블에서 해당 특정 행의 요소에 해당합니다 각 요소를 계속 반복하고 각 행에 대해 프로세스를 반복할 수 있습니다 이제 BeautifulSoup를 웹페이지에 적용하는 방법을 알아보겠습니다 웹페이지를 스크래핑하려면 Requests 라이브러리가 필요합니다 첫 번째 단계는 필요한 모듈을 가져오는 것입니다 Requests 라이브러리에서 get 메서드를 사용하여 웹페이지를 다운로드합니다 입력은 URL입니다 text 특성을 사용하여 텍스트를 가져온 후 page 변수에 지정합니다 그런 다음 page 변수에서 BeautifulSoup 개체, ‘soup’를 만듭니다 이 개체를 사용하면 HTML 페이지를 구문 분석할 수 있습니다. 이제 페이지를 스크래핑할 수 있습니다 자세한 내용은 실험실을 참조하십시오

## 예시
- 이 강의는 개념 설명 중심이며 Transcript에서 독립된 예시를 확인하기 어렵다.

## 요약
- 필요한 데이터를 찾는 데 시간을 보내다가 많은 작업량에 대한 부담으로 결국 도중에 포기하지는 않나요?
- 이 때 유용한 방법이 바로 웹 스크래핑입니다 웹 스크래핑은 웹사이트에서 자동으로 정보를 추출하는 데 사용되는 프로세스로 몇 분 내지 몇 시간 내에 원하는 정보를 쉽게 얻을 수 있습니다 이 기능을 사용하려면 간단한 Python 코드와 Beautiful Soup과 Requests라는 두 가지 Python 모듈만 있으면 됩니다 웹페이지에서 NBL 리그 선수들의 이름과 연봉을 찾아야 하는 경우를 예로 들어 보겠습니다 먼저 BeautifulSoup을 가져옵니다 웹페이지 HTML은 변수 HTML에 문자열로 저장할 수 있습니다 문서를 구문 분석하려면 BeautifulSoup 생성자로 전달합니다 그러면 문서를 중첩 데이터 구조로 나타내는 BeautifulSoup 개체, soup를 얻을 수 있습니다 BeautifulSoup는 HTML을 구문 분석하는 데 사용되는 메서드를 포함하는 개체와 같은 트리 집합으로 나타냅니다 이제 앞에서 만든 BeautifulSoup 개체, soup를 사용하여 BeautifulSoup 개체에 대해 알아보도록 하겠습니다 tag_object는 원래 문서의 “title” 태그와 같은 HTML 태그에 해당합니다 태그를 예로 보겠습니다 이름이 같은 태그가 여러 개 있으면 해당 태그를 사용하는 첫 번째 요소를 선택합니다 여기서는 Lebron James라는 이름이 볼드체 특성 b로 묶여 있습니다 이 이름을 추출하려면 트리 표시를 사용합니다 트리 표시를 사용해 보겠습니다 여기서는 tag_object 변수를 사용합니다 트리에 나타나는 것처럼 태그의 하위 항목에 액세스하거나 분기 아래로 이동할 수 있습니다 parent 특성을 사용하여 트리 위쪽으로 이동할 수도 있습니다 여기서는 tag_child 하위를 사용합니다 상위 항목에 액세스할 수도 있습니다 이는 원래 태그 개체에 해당합니다 tag_object의 형제를 찾을 수도 있습니다 next_sibling 특성을 사용하면 됩니다 sibling_1의 형제를 찾을 수도 있습니다 next_sibling 특성을 사용하면 됩니다 tag_child 개체를 예로 들어 보겠습니다 이 경우처럼 특성 이름과 값을 사전의 키 값 쌍으로 액세스할 수 있습니다 그 내용을 탐색 가능 문자열로 반환할 수 있으며 이는 BeautifulSoup 기능을 지원하는 Python 문자열과 같습니다 이번에는 find_all 메서드를 살펴보겠습니다 이 메서드는 일종의 필터로, 태그의 이름과 특성, 문자열 텍스트 또는 이들의 조합을 기반으로 내용을 필터링합니다 피자 가게 목록을 예로 들어 보겠습니다 여기서도 먼저 BautifulSoup 개체를 만듭니다 그러나 이번에는 이름을 table로 지정합니다 find_all () 메서드는 태그의 하위 항목에서 필터와 일치하는 모든 하위 항목을 검색하며 태그를 사용하여 테이블에 적용합니다 그 결과는 목록과 같은 Python 이터러블입니다 여기서 각 요소는 의 태그 개체가 되며 테이블 헤더를 포함하여 목록에서 각 행에 해당합니다 각 요소는 태그 개체입니다 첫 번째 행을 예로 들어 보겠습니다 예를 들어 첫 번째 테이블 셀을 추출할 수 있습니다 각 테이블 셀을 반복할 수도 있습니다 먼저 변수 row를 통해 table_rows 목록을 반복합니다 각 요소는 테이블에서 행에 해당합니다 find_all 메서드를 적용하여 모든 테이블 셀을 찾은 다음 각 행마다 변수 cell을 반복할 수 있습니다 반복할 때마다 변수 cell은 테이블에서 해당 특정 행의 요소에 해당합니다 각 요소를 계속 반복하고 각 행에 대해 프로세스를 반복할 수 있습니다 이제 BeautifulSoup를 웹페이지에 적용하는 방법을 알아보겠습니다 웹페이지를 스크래핑하려면 Requests 라이브러리가 필요합니다 첫 번째 단계는 필요한 모듈을 가져오는 것입니다 Requests 라이브러리에서 get 메서드를 사용하여 웹페이지를 다운로드합니다 입력은 URL입니다 text 특성을 사용하여 텍스트를 가져온 후 page 변수에 지정합니다 그런 다음 page 변수에서 BeautifulSoup 개체, ‘soup’를 만듭니다 이 개체를 사용하면 HTML 페이지를 구문 분석할 수 있습니다.
- 이제 페이지를 스크래핑할 수 있습니다 자세한 내용은 실험실을 참조하십시오

<details>
<summary>영문 Transcript 원문</summary>

In this video we will cover Webscraping. After watching this video you will be able to: define web scraping; understand the role of BeautifulSoup Objects; apply the find_all method; and webscrape a website. What would you do if you wanted to analyze hundreds of points of data to find the best players of a sports team? Would you start manually copying and pasting information from different websites into a spreadsheet? Spending hours trying to find the right data, and eventually giving up because the task was to overwhelming?

That’s where webscraping can help. Webscraping is a process that can be used to automatically extract information from a website, and can easily be accomplished within a matter of minutes and not hours. To get started we just need a little Python code and the help of two modules named Requests and Beautiful Soup. Let’s say you were asked to find the name and salary of players in a National Basketball League, from the following webpage. We import BeautifulSoup.

We can store the webpage HTML as a string in the variable HTML. To parse a document, pass it into the BeautifulSoup constructor. We get the Beautiful Soup object , soup, which represents the document as a nested data structure. BeautifulSoup represents HTML as a set of Tree like objects with methods used to parse the HTML. We will review the BeautifulSoup object Using the BeautifulSoup object, soup, we created The tag object corresponds to an HTML tag in the original document.

For example, the tag “title.” Consider the tag . If there is more than one tag with the same name, the first element with that tag is selected. In this case with Lebron James, we see the name is Enclosed in the bold attribute "b". To extract it, use the Tree representation. Let’s use the Tree representation.

The variable tag-object is located here. We can access the child of the tag or navigate down the branch as follows: You can navigate up the tree by using the parent attribute. The variable tag child is located here. We can access the parent. This is the original tag object.

We can find the sibling of “tag object.” We simply use the next sibling attribute. We can find the sibling of sibling one. We simply use the next sibling attribute. Consider the tag child object. You can access the attribute name and value as a key value pair in a dictionary as follows.

You can return the content as a Navigable string, this is like a Python string that supports BeautifulSoup functionality. Let's review the method find_all. This is a filter, you can use filters to filter based on a tag’s name, it’s attributes, the text of a string, or on some combination of these. Consider the list of pizza places. Like before, create a BeautifulSoup object.

But this time, name it table. The find_all () method looks through a tag’s descendants and retrieves all descendants that match your filters. Apply it to the table with the tag . The result is a Python iterable just like a list, each element is a tag object for . This corresponds to each row in the list- including the table header.

Each element is a tag object. Consider the first row. For example, we can extract the first table cell. We can also iterate through each table cell. First, we iterate through the list “table rows,” via the variable row.

Each element corresponds to a row in the table. We can apply the method find all to find all the table cells, then we can iterate through the variable cells for each row. For each iteration, the variable cell corresponds to an element in the table for that particular row. We continue to iterate through each element and repeat the process for each row. Let’s see how to apply BeautifulSoup to a webpage.

To scrape a webpage we also need the Requests library. The first step is to import the modules that are needed. Use the get method from the requests library to download the webpage. The input is the URL. Use the text attribute to get the text and assign it to the variable page.

Then, create a BeautifulSoup object ‘soup’ from the variable page. It will allow you to parse through the HTML page. You can now scrape the Page. Check out the labs for more.

</details>
