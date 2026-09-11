# Container Port Forwarding

## 개요
- 종속성을 설치할 때마다 이러한 현상이 발생하는 것을 이미 확인했습니다. 방금 전 도커 빌드 프로세스 중에 npm 설치를 실행했을 때 npm이 외부 세계에 도달했습니다.

## 내용
### 자막·본문 기반 핵심 내용
- 종속성을 설치할 때마다 이러한 현상이 발생하는 것을 이미 확인했습니다. 방금 전 도커 빌드 프로세스 중에 npm 설치를 실행했을 때 npm이 외부 세계에 도달했습니다.
- Ctrl c를 눌러 실행을 중지한 다음 docker 실행 대시 p를 실행하겠습니다.
- Docker 컨테이너는 기본적으로 외부 세계에 자체적으로 요청을 할 수 있습니다.
- 따라서 이것은 Docker 파일을 변경하는 것이 아닙니다. 도커 파일 내부에는 포트 포워딩을 설정하지 않습니다.

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Docker`, `npm`, `json`, `Docker ID`

## 예시
`Docker`, `npm`, `json`, `Docker ID`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Container Port Forwarding**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/50120291#overview)
