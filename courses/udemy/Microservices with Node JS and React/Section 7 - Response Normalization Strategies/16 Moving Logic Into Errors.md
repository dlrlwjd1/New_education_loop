# Moving Logic Into Errors

## 개요
- 다시 에디터로 돌아가죠 Reperactor database connection, error 또 다른 건 여기 뒤에 있는데요 요청 유효성 검사죠

## 내용
### 자막·본문 기반 핵심 내용
- 다시 에디터로 돌아가죠 Reperactor database connection, error 또 다른 건 여기 뒤에 있는데요 요청 유효성 검사죠
- Message가 그 이유죠 여기에 추가로 status code도 할당할 거예요. 데이터베이스 연결 오류가 발생할 때마다 반응에 500개의 상태 코드를 이 경우 다시 한 번 데이터베이스 연결 오류는 본질적으로 아주 여기서 이성의 개별 속성을 정의할 필요는 없어요
- 대신 오류 상태 코드 속성만 살펴보면 되죠 400은 IRC status 코드로 바꾸고 500은 에러 status로 바꿀게요
- 사용자 지정 오류를 만드는 방법과 다른 라우트 처리기에서 오류를 보내는 방법 공기 처리기 안에서 오류를 포착하고 모든 종류의 오류에 대한 일반적인 응답을 보내는 방법을 하지만 아직 끝난 게 아니죠

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `database`

## 예시
`database`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Moving Logic Into Errors**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19102690#overview)
