# Property 'version' is missing TS Errors After Running Skaffold

## 개요
- Property 'version' is missing TS Errors After Running Skaffold In the upcoming lecture, you will likely get a bunch of TS errors when re-running skaffold dev to test our services with Postman: [orders] Compilation error in /app/src/routes/delete.ts [orders] [ERROR] 23:45:07 ⨯ Unable to compile TypeScript: [orders] src/routes/delete.ts(…

## 내용
### 자막·본문 기반 핵심 내용
- Property 'version' is missing TS Errors After Running Skaffold In the upcoming lecture, you will likely get a bunch of TS errors when re-running skaffold dev to test our services with Postman: [orders] Compilation error in /app/src/routes/delete.ts [orders] [ERROR] 23:45:07 ⨯ Unable to compile TypeScript: [orders] src/routes/delete.ts(…
- userId: string; status: OrderStatus; expiresAt: Date; ticket: TicketDoc; version: number; Then, we'll need to update both the delete and new routes and specify a version: routes/delete.ts new OrderCancelledPublisher(natsWrapper.client).publish({ id: order.id, version: order.version, ticket: { id: order.ticket.id, routes/new.ts
- [orders] Property 'version' is missing in type '{ id: any; ticket: { id: any; }; }' but required in type '{ id: string; version: number; ticket: { id: string; }; }'. [orders] At the minimum, we'll need to add a version property to the Order model interface: models/order.ts interface OrderDoc extends mongoose.Document {
- new OrderCreatedPublisher(natsWrapper.client).publish({ id: order.id, version: order.version, status: order.status, userId: order.userId, expiresAt: order.expiresAt.toISOString(), ticket: { id: ticket.id, price: ticket.price, Note - All of these changes will be made in the course around the Next Few Videos and Fixing a Few Tests lectures.

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `TS`, `Skaffold`, `TypeScript`, `model`, `interface`, `mongoose`, `Skaffold

In the upcoming lecture`, `skaffold dev to test our services with Postman`, `delete.ts`, `order.ts`

## 예시
`TS`, `Skaffold`, `TypeScript`, `model`, `interface`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Property 'version' is missing TS Errors After Running Skaffold**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/27317704#overview)
