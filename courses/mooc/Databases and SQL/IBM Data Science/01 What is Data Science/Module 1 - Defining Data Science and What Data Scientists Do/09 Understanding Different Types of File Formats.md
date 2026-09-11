# Understanding Different Types of File Formats

## 개요
- 강좌: What is Data Science?
- 모듈: Defining Data Science and What Data Scientists Do
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/what-is-datascience/lecture/nVEjl/understanding-different-types-of-file-formats)
- 데이터 전문가는 다양한 데이터 파일 유형 및 형식으로 작업하게 됩니다.
- 파일 형식의 기본 구조와 그 이점 및 한계를 이해하는 것이 중요합니다.

## 내용
### 핵심 내용
- 데이터 전문가는 다양한 데이터 파일 유형 및 형식으로 작업하게 됩니다.
- 파일 형식의 기본 구조와 그 이점 및 한계를 이해하는 것이 중요합니다.
- 이 비디오에서 다룰 표준 파일 형식으로는 구분된 텍스트 파일 형식, Microsoft Excel Open XML 스프레드시트 또는 XLSX 확장 마크업 언어, XML, 휴대용 문서 형식 또는 PDF, JavaScript 개체 표기법 또는 JSON 등이 있습니다.
- XML 파일 형식은 사람과 기계 모두 읽을 수 있습니다.
- 이 형식은 법률 및 재무 문서에 자주 사용되며 양식과 같은 데이터를 채우는 데에도 사용할 수 있습니다.
- 파일 형식은 언어에 구애받지 않는 데이터 형식이므로 모든 프로그래밍 언어에서 읽을 수 있습니다.

### 한국어 Transcript

데이터 전문가는 다양한 데이터 파일 유형 및 형식으로 작업하게 됩니다. 파일 형식의 기본 구조와 그 이점 및 한계를 이해하는 것이 중요합니다. 이러한 이해를 통해 데이터 및 성능 요구 사항에 가장 적합한 형식을 올바르게 결정할 수 있습니다. 이 비디오에서 다룰 표준 파일 형식으로는 구분된 텍스트 파일 형식, Microsoft Excel Open XML 스프레드시트 또는 XLSX 확장 마크업 언어, XML, 휴대용 문서 형식 또는 PDF, JavaScript 개체 표기법 또는 JSON 등이 있습니다. 구분된 텍스트 파일은 데이터를 텍스트로 저장하는 데 사용되는 텍스트 파일이며 각 줄 또는 행에 구분 기호로 구분된 값이 있습니다 .

독립 엔티티나 값 사이의 경계를 지정하기 위한 하나 이상의 문자로 구성된 시퀀스 모든 문자를 사용하여 값을 구분할 수 있지만 가장 일반적인 구분 기호는 쉼표, 탭, 콜론, 세로 막대 및 공백입니다. 쉼표로 구분된 값 (또는 CSV) 과 탭으로 구분된 값 (또는 TSV) 은 이 범주에서 가장 일반적으로 사용되는 파일 유형입니다. CSV에서 구분 기호는 쉼표이고 TSV에서는 구분 기호가 탭입니다. 텍스트 데이터에 리터럴 쉼표가 있어 구분 기호로 사용할 수 없는 경우 TSV는 CSV 형식 대신 사용할 수 있습니다. 텍스트 실행 시 탭 중단이 자주 발생하지 않습니다.

텍스트 파일의 각 행 또는 가로줄에는 구분 기호로 구분된 값 집합이 있으며 이는 레코드를 나타냅니다. 첫 번째 행은 열 머리글로 작동하며, 각 열은 서로 다른 유형의 데이터를 포함할 수 있습니다. 예를 들어, 한 열은 날짜 유형이고 다른 열은 문자열 또는 정수 유형의 데이터일 수 있습니다. 구분된 파일은 모든 길이의 필드 값을 허용하며, 구분된 파일은 간단한 정보 스키마를 제공하기 위한 표준 형식으로 간주됩니다. 거의 모든 기존 애플리케이션에서 처리할 수 있습니다.

구분자는 데이터 스트림에서 경계를 지정하는 다양한 수단 중 하나이기도 합니다. 마이크로소프트 엑셀 오픈 XML 스프레드시트 (XLSX) 는 스프레드시트 파일 형식에 속하는 마이크로소프트 엑셀 오픈 XML 파일 형식입니다. 마이크로소프트에서 만든 XML 기반 파일 형식입니다. XLSX에는 워크시트가 여러 개 있을 수 있습니다. 그리고 각 워크시트는 행과 열로 구성되며, 행과 열의 교차점에 셀이 있습니다.

XLSX는 열린 파일 형식을 사용하므로 대부분의 다른 응용 프로그램에서 일반적으로 액세스할 수 있습니다. Excel에서 사용할 수 있는 모든 기능을 사용하고 저장할 수 있으며 악성 코드를 저장할 수 없기 때문에 더 안전한 파일 형식 중 하나로도 알려져 있습니다. XML (확장 마크업 언어) 은 데이터 인코딩 규칙이 설정된 마크업 언어입니다. XML 파일 형식은 사람과 기계 모두 읽을 수 있습니다. 인터넷을 통해 정보를 전송하기 위해 설계된 자체 설명 언어입니다.

XML은 일부 측면에서 HTML과 비슷하지만 차이점도 있습니다. HTML처럼 미리 정의된 태그를 사용하지 않습니다. XML은 플랫폼과 프로그래밍 언어에 구애받지 않으므로 다양한 시스템 간의 데이터 공유를 단순화합니다. PDF (Portable Document Format) 는 애플리케이션 소프트웨어, 하드웨어 및 운영 체제에 구애받지 않고 문서를 표시할 수 있도록 Adobe에서 개발한 파일 형식입니다. 즉, 모든 디바이스에서 동일한 방식으로 볼 수 있습니다.

이 형식은 법률 및 재무 문서에 자주 사용되며 양식과 같은 데이터를 채우는 데에도 사용할 수 있습니다. JavaScript 객체 표기법 (JSON) 은 웹을 통해 구조화된 데이터를 전송하기 위해 설계된 텍스트 기반 개방형 표준입니다. 파일 형식은 언어에 구애받지 않는 데이터 형식이므로 모든 프로그래밍 언어에서 읽을 수 있습니다. JSON은 사용하기 쉽고 다양한 브라우저와 호환되며 오디오와 비디오를 비롯한 모든 크기 및 유형의 데이터를 공유하는 데 가장 적합한 도구 중 하나로 간주됩니다. 많은 API와 웹 서비스가 데이터를 JSON으로 반환하는 것도 그 이유 중 하나입니다.

이 비디오에서는 몇 가지 인기 있는 파일 및 데이터 형식을 살펴보았습니다. 다음 비디오에서는 다양한 데이터 소스에 대해 알아보겠습니다.

## 예시
- 텍스트 파일의 각 행 또는 가로줄에는 구분 기호로 구분된 값 집합이 있으며 이는 레코드를 나타냅니다.
- 예를 들어, 한 열은 날짜 유형이고 다른 열은 문자열 또는 정수 유형의 데이터일 수 있습니다.
- Excel에서 사용할 수 있는 모든 기능을 사용하고 저장할 수 있으며 악성 코드를 저장할 수 없기 때문에 더 안전한 파일 형식 중 하나로도 알려져 있습니다.

## 요약
- XML 파일 형식은 사람과 기계 모두 읽을 수 있습니다.
- 이 형식은 법률 및 재무 문서에 자주 사용되며 양식과 같은 데이터를 채우는 데에도 사용할 수 있습니다.
- 파일 형식은 언어에 구애받지 않는 데이터 형식이므로 모든 프로그래밍 언어에서 읽을 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

As a data professional, you will be working with a variety of data file types, and formats. It is important to understand the underlying structure of file formats along with their benefits and limitations. This understanding will support you to make the right decisions on the formats best suited for your data and performance needs. Some of the standard file formats that we will cover in this video include: Delimited text file formats, Microsoft Excel Open XML Spreadsheet, or XLSX Extensible Markup Language, or XML, Portable Document Format, or PDF, JavaScript Object Notation, or JSON, Delimited text files are text files used to store data as text in which each line, or row, has values separated by a delimiter; where a delimiter is a sequence of one or more characters for specifying the boundary between independent entities or values. Any character can be used to separate the values, but most common delimiters are the comma, tab, colon, vertical bar, and space.

Comma-separated values (or CSVs) and tab-separated values (or TSVs) are the most commonly used file types in this category. In CSVs, the delimiter is a comma while in TSVs, the delimiter is a tab. When literal commas are present in text data and therefore cannot be used as delimiters, TSVs serve as an alternative to CSV format. Tab stops are infrequent in running text. Each row, or horizontal line, in the text file has a set of values separated by the delimiter, and represents a record.

The first row works as a column header, where each column can have a different type of data. For example, a column can be of date type, while another can be a string or integer type data. Delimited files allow field values of any length and are considered a standard format for providing straightforward information schema. They can be processed by almost all existing applications. Delimiters also represent one of various means to specify boundaries in a data stream.

Microsoft Excel Open XML Spreadsheet, or XLSX, is a Microsoft Excel Open XML file format that falls under the spreadsheet file format. It is an XML-based file format created by Microsoft. XLSX, also known as a workbook, there can be multiple worksheets. And each worksheet is organized into rows and columns, at the intersection of which is the cell. Each cell contains data.

XLSX uses the open file format, which means it is generally accessible to most other applications. It can use and save all functions available in Excel and is also known to be one of the more secure file formats as it cannot save malicious code. Extensible Markup Language, or XML, is a markup language with set rules for encoding data. The XML file format is both readable by humans and machines. It is a self-descriptive language designed for sending information over the internet.

XML is similar to HTML in some respects, but also has differences. XML does not use predefined tags like . XML is platform independent and programming language independent and therefore simplifies data sharing between various systems. Portable Document Format, or PDF, is a file format developed by Adobe to present documents independent of application software, hardware, and operating systems, which means it can be viewed the same way on any device. This format is frequently used in legal and financial documents and can also be used to fill in data such as for forms.

JavaScript Object Notation, or JSON, is a text-based open standard designed for transmitting structured data over the web. The file format is a language-independent data format that can be read in any programming language. JSON is easy to use, is compatible with a wide range of browsers, and is considered as one of the best tools for sharing data of any size and type, even audio and video. That is one reason, many APIs and Web Services return data as JSON. In this video, we looked at some popular file and data formats.

In the next video, we will learn about the different sources of data.

</details>
