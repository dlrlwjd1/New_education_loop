# [Optional] More Possible Concurrency Solutions

## 개요
- 이건 일방통행 작전이에요 NATS에 연락해서 좀 전에 공개한 이벤트에서 시퀀스 넘버가 뭐냐고 물을 수 없죠

## 내용
### 자막·본문 기반 핵심 내용
- 이건 일방통행 작전이에요 NATS에 연락해서 좀 전에 공개한 이벤트에서 시퀀스 넘버가 뭐냐고 물을 수 없죠
- 공개되거나 NATS만 아는 것으로 그 시퀀스 번호가 무엇인지 알아내기란 꽤 힘든 시간이죠
- 아니면 그냥 랙이거나 무슨 일인지 아무도 모르죠 이 예금 또는 이 이벤트가 30초간 타임아웃이 되어 NAT 서버에서 다시 재생될 때까지 기다려야 하죠
- NAT 스트리밍 서버로 가서 시퀀스 번호를 할당받고 나면 거기 있는 LIST들에게 전송될 거예요

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `NATS`

## 예시
`NATS`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **[Optional] More Possible Concurrency Solutions**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19124576#overview)
