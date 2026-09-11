# Cross Namespace Service Communication

## 개요
- CTL, get service, DN을 쓰고 네임스페이스 이름을 써요 이 경우엔 Ingress 엔진 X죠

## 내용
### 자막·본문 기반 핵심 내용
- CTL, get service, DN을 쓰고 네임스페이스 이름을 써요 이 경우엔 Ingress 엔진 X죠
- get namespace를 하고요 쿠버네티스 클러스터 내에 현재 존재하는 모든 다른 네임스페이스를 출력할 거예요
- CRV의 HTTP 같은 거죠 불행히도 이 규칙은 이런 서비스에서만 통해요 같은 네임스페이스 안에 있는 서비스에 접근하려고 할 때 참조하거나 가정하는 거죠
- 여기 공간이 좀 있어서 우리를 쉽게 볼 수 있어요 http를 적어요 슬래시, 서비스 이름 입력하기 대시 X세대죠 그런 다음 SVC 클러스터 로컬 이름 스페이스 입력하기 대시요

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `HTTP`, `service`, `Ingress`

## 예시
`HTTP`, `service`, `Ingress`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Cross Namespace Service Communication**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/26986156#overview)
