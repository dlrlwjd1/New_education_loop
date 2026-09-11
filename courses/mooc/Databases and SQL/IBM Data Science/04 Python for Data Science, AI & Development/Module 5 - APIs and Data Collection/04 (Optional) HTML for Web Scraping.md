# (Optional) HTML for Web Scraping

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: APIs and Data Collection
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/nUuvs/optional-html-for-web-scraping)
- 이 영상에서는 웹스크래핑 HTML에 대한 내용을 다뤄 보겠습니다.
- 웹 페이지에서는 부동산 가격, 코딩 질문 해답 등 수많은 유용한 데이터를 확인할 수 있습니다.

## 내용
### 핵심 내용
- 이 영상에서는 웹스크래핑 HTML에 대한 내용을 다뤄 보겠습니다.
- 웹 페이지에서는 부동산 가격, 코딩 질문 해답 등 수많은 유용한 데이터를 확인할 수 있습니다.
- 이 영상에서는 기본 웹 페이지의 HTML을 정리해 보고 HTML 태그의 구성과 HTML 트리, HTML 테이블에 대해 알아보도록 하겠습니다.
- 이 두 태그가 HTML 태그의 하위에 있고 HTML 태그는 상위에 있습니다.
- title 태그는 head 태그의 하위에 있으며 head 태그가 그 상위에 있습니다.
- 지금까지 HTML에 대한 기본 지식을 정리해 보았습니다.

### 한국어 Transcript

이 영상에서는 웹스크래핑 HTML에 대한 내용을 다뤄 보겠습니다. 웹 페이지에서는 부동산 가격, 코딩 질문 해답 등 수많은 유용한 데이터를 확인할 수 있습니다. 일례로 위키피디아 웹 사이트는 전 세계 정보의 저장소 역할을 합니다. HTML을 잘 이해하고 있다면 Python으로 이 정보를 추출할 수 있습니다. 이 영상에서는 기본 웹 페이지의 HTML을 정리해 보고 HTML 태그의 구성과 HTML 트리, HTML 테이블에 대해 알아보도록 하겠습니다.

다음 웹 페이지에서 미국 NBL 선수의 이름과 연봉을 찾아보겠습니다. 이 웹 페이지는 HTML로 제작되었으며 꺾쇠 괄호로 묶은 태그라고 하는 일련의 파란색 텍스트 요소와 그 안의 텍스트로 구성됩니다. 태그는 브라우저에 콘텐츠 표시 방법을 알려줍니다. 우리에게 필요한 데이터가 이 텍스트에 있습니다. 이 시작 부분에는 이 문서가 HTML 문서임을 선언하는 "DOCTYPE html”이 포함됩니다.

요소는 HTML 페이지의 루트 요소로, 요소는 HTML 페이지에 대한 메타 정보를 포함합니다. 다음은 본문으로, 웹 페이지에 표시되는 내용입니다. 일반적으로 사용자가 관심을 갖는 데이터입니다. “h3"이 있는 요소는 유형 3 제목을 의미하며 텍스트가 크고 굵게 표시됩니다. 이 태그 안에는 선수 이름이 표시됩니다.

괄호로 묶인 h3으로 시작되며 역시 괄호로 묶인 슬래시 h3으로 끝납니다. 이 태그는 단락을 의미하며 각 p 태그 안에는 선수의 연봉이 표시됩니다. HTML 태그 구성을 좀 더 자세히 살펴보겠습니다. 이 태그는 특정 페이지에서 다른 페이지로 연결하는 데 사용되는 하이퍼링크를 정의합니다. 각 태그 이름을 Python의 클래스로, 각 개별 태그를 인스턴스로 생각하면 쉽습니다.

여는 태그 또는 시작 태그가 있고 끝 태그도 있습니다. 끝 태그 이름 앞에는 슬래시가 옵니다. 이 경우 이 두 태그 사이에는 콘텐츠, 웹 페이지에 표시되는 내용이 포함됩니다. 특성은 특성 이름과 특성 값으로 구성됩니다. 이 경우 특성 값은 대상 웹 페이지의 URL입니다.

특정 브라우저에서 HTML 요소를 선택한 다음 검사를 클릭합니다. 그러면 HTML을 검사할 수 있습니다. CSS, JavaScript와 같은 다른 유형의 콘텐츠도 있지만 이 강좌에서는 다루지 않습니다. 각 HTML 문서는 실제로 문서 트리로 참조될 수 있습니다. 태그는 문자열과 다른 태그를 포함할 수 있습니다.

이들 요소는 태그의 하위에 있습니다. 이를 가계도와 같은 트리 형태로 나타낼 수 있습니다. 각각의 중첩 태그는 트리에서 한 수준이 됩니다. HTML 태그는 head 태그와 body 태그로 구성됩니다. head 태그와 body 태그는 html 태그의 하위 항목입니다.

이 두 태그가 HTML 태그의 하위에 있고 HTML 태그는 상위에 있습니다. head 태그와 body 태그는 같은 수준이므로 형제와 같습니다. title 태그는 head 태그의 하위에 있으며 head 태그가 그 상위에 있습니다. title 태그는 HTML 태그의 하위 항목이지만 하위에 있는 것은 아닙니다. heading 태그와 paragraph 태그는 body 태그의 하위에 있습니다.

bold 태그는 heading 태그의 하위에 있으며 태그 내용이 트리에 포함되지만 그림으로 나타내기는 복잡합니다. 다음은 HTML 테이블을 살펴보겠습니다. HTML 테이블을 정의하기 위해 table 태그를 사용하겠습니다. 각 테이블 행은 태그로 정의되며 첫 번째 행에도 테이블 header 태그를 사용할 수 있습니다. 테이블 행 셀에는 일련의 태그가 포함되며 각각의 태그가 테이블 셀을 정의합니다.

첫 번째 행에 첫 번째 셀이 있고 두 번째 셀도 있습니다. 두 번째 행의 경우 첫 번째 셀과 두 번째 셀이 있습니다. 지금까지 HTML에 대한 기본 지식을 정리해 보았습니다. 이제 웹 페이지에서 데이터를 추출해 보겠습니다.

## 예시
- 이 강의는 개념 설명 중심이며 Transcript에서 독립된 예시를 확인하기 어렵다.

## 요약
- 이 두 태그가 HTML 태그의 하위에 있고 HTML 태그는 상위에 있습니다.
- title 태그는 head 태그의 하위에 있으며 head 태그가 그 상위에 있습니다.
- 지금까지 HTML에 대한 기본 지식을 정리해 보았습니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video we will review Hypertext Markup Language or HTML for Web Scraping. Lots of useful data is available on web pages, such as real estate prices and solutions to coding questions. The website Wikipedia is a repository of the world's information. If you have an understanding of HTML, you can use Python to extract this information. In this video, you will: review the HTML of a basic web page; understand the Composition of an HTML Tag; understand HTML Trees; and understand HTML Tables.

Let’s say you were asked to find the name and salary of players in a National Basketball League from the following page. The web page is comprised of HTML. It consists of text surrounded by a series of blue text elements enclosed in angle brackets called tags. The tags tells the browser how to display the content. The data we require is in this text.

The first portion contains the "DOCTYPE html” which declares this document is an HTML document. The "html" element is the root element of an HTML page, and "head" element contains meta information about the HTML page. Next, we have the body, this is what's displayed on the web page. This is usually the data we are interested in, we see the elements with an “h3”, this means type 3 heading, makes the text larger and bold. These tags have the names of the players, notice the data is enclosed in the elements.

It starts with a h3 in brackets and ends in a slash h3 in brackets. There is also a different tag “p”, this means paragraph, each p tag contains a player's salary. Let’s take a closer look at the composition of an HTML tag. Here is an example of an HTML Anchor tag. It will display IBM and when you click it, it will send you to IBM.

We have the tag name, in this case “a”. This tag defines a hyperlink, which is used to link from one page to another. It’s helpful to think of each tag name as a class in Python and each individual tag as an instance. We have the opening or start tag and we have the end tag. This has the tag name preceded by a slash.

These tags contain the content, in this case what’s displayed on the web page. We have the attribute, this is composed of the Attribute Name and Attribute Value. In this case it the url to the destination web page. Real web pages are more complex, depending on your browser you can select the HTML element, then click Inspect. The result will give you the ability to inspect the HTML.

There is also other types of content such as CSS and JavaScript that we will not go over in this course. The actual element is shown here. Each HTML document can actually be referred to as a document tree. Let's go over a simple example. Tags may contain strings and other tags.

These elements are the tag’s children. We can represent this as a family tree. Each nested tag is a level in the tree. The tag HTML tag contains the head and body tag. The Head and body tag are the descendants of the html tag.

In particular they are the children of the HTML tag. HTML tag is their parent. The head and body tag are siblings as they are on the same level. Title tag is the child of the head tag and its parent is the head tag. The title tag is a descendant of the HTML tag but not its child.

The heading and paragraph tags are the children of the body tag; and as they are all children of the body tag they are siblings of each other. The bold tag is a child of the heading tag, the content of the tag is also part of the tree but this can get unwieldy to draw. Next, let’s review HTML tables. To define an HTML table we have the table tag. Each table row is defined with a "tr" tag, you can also use a table header tag for the first row.

The table row cell contains a set of "td" tags, each defines a table cell. For the first row first cell we have; for the first row second cell we have; and so on. For the second row we have; and for the second row first cell we have; for the second row second cell we have; and so on. We now have some basic knowledge of HTML. Now let's try and extract some data from a web page.

</details>
