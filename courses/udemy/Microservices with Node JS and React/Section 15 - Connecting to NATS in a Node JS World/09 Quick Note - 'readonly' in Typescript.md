# Quick Note: 'readonly' in Typescript

## 개요
- Quick Note: 'readonly' in Typescript In the last video, I said that Typescript doesn't have a final keyword that can make sure that a given property does not get changed. That was a mistake on my part. Typescript does have a keyword of readonly. It prevents a property of a class from being changed. You can read more about readonly here…

## 내용
### 자막·본문 기반 핵심 내용
- Quick Note: 'readonly' in Typescript In the last video, I said that Typescript doesn't have a final keyword that can make sure that a given property does not get changed. That was a mistake on my part. Typescript does have a keyword of readonly. It prevents a property of a class from being changed. You can read more about readonly here…
- With this in mind, we can update the TicketCreatedListener class to the following: export class TicketCreatedListener extends Listener<TicketCreatedEvent> { readonly subject = Subjects.TicketCreated; // ...everything else This change can be made in all other listeners that we create in this course. Credit for this fix goes to Sergio Mu…

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Typescript`, `class`, `https`, `Listener`, `react`

## 예시
`Typescript`, `class`, `https`, `Listener`, `react`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Quick Note: 'readonly' in Typescript**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/20221444#overview)
