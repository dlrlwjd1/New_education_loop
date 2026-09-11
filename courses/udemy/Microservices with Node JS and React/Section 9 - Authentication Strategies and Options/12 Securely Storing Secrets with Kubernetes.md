# Securely Storing Secrets with Kubernetes

## 개요
- JSON 키나 JSON 웹 토큰 키가 SDF와 같다면 그걸 이 환경 변수 집합에 할당할 거예요 그럼 우리 노드 내에서 그 정보에 쉽게 액세스할 수 있죠 js 코드요

## 내용
### 자막·본문 기반 핵심 내용
- JSON 키나 JSON 웹 토큰 키가 SDF와 같다면 그걸 이 환경 변수 집합에 할당할 거예요 그럼 우리 노드 내에서 그 정보에 쉽게 액세스할 수 있죠 js 코드요
- 지난 비디오에서 논의했듯이 JSON WebTken 기호 키를 모든 다양한 서비스에 사용 가능하게 쿠버네티스 내부의 기능을 이용해 이 문제를 해결할 겁니다 응용 프로그램의 다양한 부분에 걸쳐 비밀 정보를 공유하도록 설계된 기능이죠
- 따라서 비밀을 만들어 JSON WebToken 키가 SDF와 같다고 하는 걸 저장할 수 있죠
- 도표를 보여드릴게요 쿠버네티스 노드 도표예요 그 안에는 다양한 포드가 있어요 우리 경우엔 이 모든 다른 포드가 컨테이너를 실행하고 있어요 JSON 웹 토큰 서명 키에 엑세스 권한을 얻어야 하는 거죠

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `JSON`

## 예시
`JSON`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Securely Storing Secrets with Kubernetes**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19119808#overview)
