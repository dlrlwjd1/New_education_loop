# Important Info About the Next Lecture - Don't Skip

## 개요
- Important Info About the Next Lecture - Don't Skip At the beginning of this section, it was mentioned that we would need to fix up some issues related to our Orders service cancelling an order that had already been paid for. The upcoming video will address this fix. Please remember that this change will be made in the Orders service, n…

## 내용
### 자막·본문 기반 핵심 내용
- Important Info About the Next Lecture - Don't Skip At the beginning of this section, it was mentioned that we would need to fix up some issues related to our Orders service cancelling an order that had already been paid for. The upcoming video will address this fix. Please remember that this change will be made in the Orders service, n…
- [orders] Message received: ticket:updated / orders-service [orders] Message received: payment:created / orders-service [payments] Event published to subject payment:created [expiration] Event published to subject expiration:complete [orders] Message received: expiration:complete / orders-service
- The file we are editing will be: orders/src/events/listeners/expiration-complete-listener.ts After completing that lecture it would then be a good idea to fully test your services to ensure they are working and that you will no longer get an [payments] Error: Order not found error in the Skaffold output. Using Postman:
- Sign in with your user's credentials. Create a new ticket. Create an order for that ticket. Send payment for that order within 60 seconds of the initial order. You should see some Skaffold output similar to below: [tickets] Event published to subject ticket:created [orders] Message received: ticket:created / orders-service

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `service`, `listener`, `ts`, `Skaffold`, `Event`, `Skaffold output`, `Skaffold output similar to below`, `expiration-complete-listener.ts`

## 예시
`service`, `listener`, `ts`, `Skaffold`, `Event`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Important Info About the Next Lecture - Don't Skip**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/27539986#overview)
