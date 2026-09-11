# Stopping Containers

## 개요
- PS, ID를 복사해 Docker Stop이나 Docker 킬을 실행할 수 있죠 일반적으로 Docker stop을 사용하길 권합니다 내부 프로세스가 종료될 기회를 주기 핑 명령에서 봤듯이 잘 종료하지 않으면 결국 Docker는 뒤로 물러나 컨테이너에 킬을 발부하게 되죠

## 내용
### 자막·본문 기반 핵심 내용
- PS, ID를 복사해 Docker Stop이나 Docker 킬을 실행할 수 있죠 일반적으로 Docker stop을 사용하길 권합니다 내부 프로세스가 종료될 기회를 주기 핑 명령에서 봤듯이 잘 종료하지 않으면 결국 Docker는 뒤로 물러나 컨테이너에 킬을 발부하게 되죠
- 컨테이너를 재가동해서 이번에는 Docker 킬을 사용해 죽일 거예요 먼저 Docker Start로 컨테이너를 다시 시작하고 ID를 붙여넣습니다 그런 다음 Docker 킬을 발행하고 ID를 다시 붙여넣어요 이번엔 이게 끝이죠
- 제멋대로 날뛰는 컨테이너를 멈추려면 Docker Stop 명령을 내리거나 Docker Kill 명령을 내려야 해요
- 안 그러면 컨테이너가 잠겨서 Docker 멈춤 명령에 반응하지 않을 경우 Docker 킬을 대신 발령할 수 있죠

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Docker`, `Docker Stop`, `Docker

Kill`, `Docker PS`, `Docker Start`

## 예시
`Docker`, `Docker Stop`, `Docker

Kill`, `Docker PS`, `Docker Start`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Stopping Containers**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19223688#overview)
