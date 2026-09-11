# Exception Handling

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: Python Programming Fundamentals
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/3dEjg/exception-handling)
- 이번 강의의 목적은 예외 처리의 개념을 설명하고 예외 처리 용례를 시연하며 예외 처리의 기본 원리를 설명하는 것입니다.
- 텍스트를 입력해야 하는 입력 필드에 실수로 숫자를 입력하신 적이 있나요?

## 내용
### 핵심 내용
- 이번 강의의 목적은 예외 처리의 개념을 설명하고 예외 처리 용례를 시연하며 예외 처리의 기본 원리를 설명하는 것입니다.
- 텍스트를 입력해야 하는 입력 필드에 실수로 숫자를 입력하신 적이 있나요?
- 프로그램은 이 코드를 예외 처리기에 포함시켜 이 오류 유형을 처리하는 방법을 알고 있었으며 오류 메시지를 출력하여 프로그램을 계속 진행할 수 있었습니다.
- 단순한 프로그램을 작성할 때 때때로 except 문을 하나만 사용하는 경우가 있습니다.
- 지금까지 프로그램에서는 오류 발생 시 오류 메시지를 출력해야 하는 것으로 정의했지만 프로그램이 올바르게 실행되었다는 어떤 메시지도 수신하지 못하고 있습니다.
- 이 영상에서는 try…except 문을 작성하는 방법, 예외 생성 시 항상 오류를 정의해야 하는 이유, else 및 finally 문을 추가하는 방법을 설명했습니다.

### 한국어 Transcript

이번 강의의 목적은 예외 처리의 개념을 설명하고 예외 처리 용례를 시연하며 예외 처리의 기본 원리를 설명하는 것입니다. 텍스트를 입력해야 하는 입력 필드에 실수로 숫자를 입력하신 적이 있나요? 대부분의 사용자가 실수로 또는 프로그램을 테스트할 때 겪는 경험입니다. 그러나 이러한 경우 프로그램이 완료, 종료되지 않고 오류 메시지가 표시되는 이유를 알고 계신가요? 오류 메시지를 표시하기 위해 백그라운드에서 이벤트가 트리거됩니다.

이 이벤트가 활성화된 이유는 프로그램이 이름 항목에 대한 계산을 수행하려고 시도했지만 항목에 문자가 아닌 숫자가 포함되어 있다는 것을 인지했기 때문입니다. 프로그램은 이 코드를 예외 처리기에 포함시켜 이 오류 유형을 처리하는 방법을 알고 있었으며 오류 메시지를 출력하여 프로그램을 계속 진행할 수 있었습니다. 이 오류는 사용자 입력이 필요할 때 발생할 수 있는 많은 오류 중 하나입니다. 이제 예외 처리의 원리를 알아보도록 하겠습니다. 먼저 try…except 문에 대해 알아보겠습니다.

이 명령문은 먼저 “try” 블록에서 코드를 실행하지만 오류가 발생하면 무시하고 오류와 일치하는 예외를 검색합니다. 오류를 처리할 수 있는 올바른 예외를 발견하면 해당 코드 행을 실행합니다. 예를 들어 파일을 열고 쓰는 프로그램을 작성한다고 가정해 보겠습니다. 프로그램을 실행한 후 데이터를 읽을 수 없어 오류가 발생했습니다. 이 오류로 인해 프로그램이 “try” 문 아래 코드 행을 건너뛰고 예외 행으로 직접 이동했습니다.

이 오류는 IOError 지침에 해당하므로 콘솔에 “Unable to open or read the data in the file.”이 출력됩니다. 단순한 프로그램을 작성할 때 때때로 except 문을 하나만 사용하는 경우가 있습니다. 그러나 IOError에 해당하지 않는 다른 오류가 발생하는 경우에는 어떻게 될까요? 이러한 경우에는 다른 except 문을 추가해야 합니다. 이 except 문의 경우 발견할 오류 유형이 지정되지 않았음을 알 수 있습니다.

그러나 표면상으로는 논리적으로 보이므로 프로그램이 모든 오류를 발견하고 종료되지 않습니다. 작은 프로그램이 천 개가 넘는 코드 행으로 구성된 훨씬 더 큰 프로그램의 한 섹션에 불과한 경우를 예로 들어 보겠습니다. 이 경우 오류가 계속 발생하여 사용자에게 혼란을 주므로 프로그램을 디버깅해야 합니다. 프로그램을 조사한 결과, 이 오류가 계속 발생한다는 사실을 발견했습니다. 이 오류는 세부 정보가 없어 결국 오류를 정확하게 식별하고 해결하는 데 많은 시간을 허비했습니다.

지금까지 프로그램에서는 오류 발생 시 오류 메시지를 출력해야 하는 것으로 정의했지만 프로그램이 올바르게 실행되었다는 어떤 메시지도 수신하지 못하고 있습니다. 이제 해당 내용을 알려주는 else 문을 여기에 추가할 수 있습니다. 이 else 문을 추가함으로써 콘솔에 “The file was written successfully.”라고 표시할 수 있습니다. 프로그램이 올바르게 실행되거나 오류가 발생할 때 어떤 조치를 취해야 하는지 정의했으므로 마지막 명령문 하나만 추가하면 됩니다. 이 예의 경우 파일을 열게 되므로 마지막으로 해야 할 일은 파일을 닫는 것입니다.

finally 문을 추가함으로써 최종 결과에 관계 없이 프로그램이 파일을 닫고 콘솔에 “File is now closed”가 출력됩니다. 이 영상에서는 try…except 문을 작성하는 방법, 예외 생성 시 항상 오류를 정의해야 하는 이유, else 및 finally 문을 추가하는 방법을 설명했습니다.

## 예시
- 프로그램은 이 코드를 예외 처리기에 포함시켜 이 오류 유형을 처리하는 방법을 알고 있었으며 오류 메시지를 출력하여 프로그램을 계속 진행할 수 있었습니다.
- 이 명령문은 먼저 “try” 블록에서 코드를 실행하지만 오류가 발생하면 무시하고 오류와 일치하는 예외를 검색합니다.
- 오류를 처리할 수 있는 올바른 예외를 발견하면 해당 코드 행을 실행합니다.
- 예를 들어 파일을 열고 쓰는 프로그램을 작성한다고 가정해 보겠습니다.

## 요약
- 단순한 프로그램을 작성할 때 때때로 except 문을 하나만 사용하는 경우가 있습니다.
- 지금까지 프로그램에서는 오류 발생 시 오류 메시지를 출력해야 하는 것으로 정의했지만 프로그램이 올바르게 실행되었다는 어떤 메시지도 수신하지 못하고 있습니다.
- 이 영상에서는 try…except 문을 작성하는 방법, 예외 생성 시 항상 오류를 정의해야 하는 이유, else 및 finally 문을 추가하는 방법을 설명했습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Exception Handling. After watching this video, you will be able to explain exception handling, demonstrate the use of exception handling, and understand the basics of exception handling. Have you ever mistakenly entered a number when you were supposed to enter text in an input field? Most of us have either in error or when testing out a program, but do you know why it gave an error message instead of completing and terminating the program? In order for the error message to appear, an event was triggered in the background.

This event was activated because the program tried to perform a computation on the name entry and realized the entry contained numbers and not letters. By encasing this code in an exception handler the program knew how to deal with this type of error and was able to output the error message to continue along with the program. This is one of many errors that can happen when asking for user input, so let’s see how exception handling works. We will first explore the try…except statement. This type of statement will first attempt to execute the code in the “try” block, but if an error occurs it will kick out and begin searching for the exception that matches the error.

Once it finds the correct exception to handle the error, it will then execute that line of code. For example, perhaps you are writing a program that will open and write a file. After starting the program, an error occurred as the data was not able to be read. Because of this error the program skipped over the code lines under the “try” statement and went directly to the exception line. Since this error fell within the IOError guidelines it printed “Unable to open or read the data in the file.” to our console.

When writing simple programs we can sometimes get away with only one except statement, but what happens if another error occurs that is not caught by the IOError? If that happened we would need to add another except statement. For this except statement you will notice that the type of error to catch is not specified. While this may seem a logical step so the program will catch all errors and not terminate, this is not a best practice. For example, let’s say our small program was just one section of a much larger program that was over a thousand lines of code.

Our task was to debug the program as it kept throwing an error causing a disruption for our users. When investigating the program you found this error kept appearing. Because this error had no details you ended up spending hours trying to pinpoint and fix the error. So far in our program we have defined that an error message should print out if an error occurs, but we do not receive any messages that the program executed properly. This is where we can now add an else statement to give us that notification.

By adding this else statement it will provide us a notification to the console that “The file was written successfully.” Now that we have defined what will happen if our program executes properly, or if an error occurs there is one last statement to add. For this example, since we are opening a file the last thing we need to do is close the file. By adding a finally statement it will tell the program to close the file no matter the end result and print “File is now closed” to our console. In this video, you learned how to write a try…except statement, why it is important to always define errors when creating exceptions, and how to add an else and finally statement.

</details>
