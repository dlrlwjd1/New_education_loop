# Implement synchronous communication between microservices

## 개요
- customer · product · order 세 마이크로서비스로 동기 통신을 구현하는 프로젝트 구조와 각 서비스의 포트·파일·Postman 결과를 살펴보는 강의

## 내용

### 통신 관계
- 클라이언트가 요청하면 **product service, order service, customer service** 와 통신한다.
- 그리고 **order service가 product service와 customer service와 통신**한다.
- `axios`, `superagent` 같은 HTTP 클라이언트 라이브러리를 쓸 때 기본으로 만드는 요청이 **HTTP/1.1** 이다.

### 프로젝트 구조
- **customer 마이크로서비스** — `customer id`, `name`, `address` 같은 고객 관련 데이터와 그 스키마를 담는다.
- **DB Config** — mongoose를 사용해 MongoDB와 연결을 확립하는 `.js` 파일을 갖는다.
- **order service** — 주문 정보를 조회하기 위해 **customer service와 product service와 동기 통신을 수행**한다.
- **product 마이크로서비스** — `product ID`, `name` 같은 상품 서비스 관련 데이터와 그 스키마를 담는다.

### 서비스별 구성

**Customer service — 포트 4000**
- `index.js` 가 **customer router 라우팅 파일**을 호출한다.
- `customer model.js` 에서 mongoose를 사용해 데이터가 MongoDB에 저장된다.
- Postman 결과: 파일 타입은 **JSON**. 본문(body)에 `customer id`, `customer name`, `customer age`, `customer address` 가 저장된다. 상태는 **200(성공)**.

**Product service — 포트 3000**
- `index.js` 가 **product router 라우팅 파일**을 호출한다.
- `product model.js` 에서 mongoose를 사용해 데이터가 MongoDB에 저장된다.
- Postman 결과: 파일 타입은 **JSON**. 본문에 `product ID`, `product name`, `product details` 가 저장된다. 상태는 **200(성공)**.

**Order service — 포트 5000**
- `index.js` 가 **order router 라우팅 파일**을 호출한다.
- `order model.js` 에서 mongoose를 사용해 데이터가 MongoDB에 저장된다.
- Postman 결과: 본문에 `customer name`, `product name`, `product details` 가 저장된다. 상태는 **200(성공)**.

> order service의 본문에 customer name과 product name이 함께 들어오는 것이 **동기 통신의 결과**다. order service가 다른 두 서비스를 호출해 정보를 모아 조립한다.

## 예시
```text
클라이언트
  ├──> product service   (포트 3000)
  ├──> order service     (포트 5000)
  └──> customer service  (포트 4000)

order service ──> customer service   (동기 호출)
              ──> product service    (동기 호출)
   → 주문 정보를 조립해 반환
```

| 서비스 | 포트 | 라우팅 | 모델 | 본문 데이터 |
|---|---|---|---|---|
| product | 3000 | product router | `product model.js` | product ID · name · details |
| customer | 4000 | customer router | `customer model.js` | customer id · name · age · address |
| order | 5000 | order router | `order model.js` | customer name · product name · product details |

```javascript
// order service가 다른 서비스를 동기 호출하는 형태 (axios · HTTP/1.1)
const axios = require('axios');

const customer = await axios.get(`http://localhost:4000/customer/${customerId}`);
const product  = await axios.get(`http://localhost:3000/product/${productId}`);

res.status(200).json({
  customerName:   customer.data.customerName,
  productName:    product.data.productName,
  productDetails: product.data.productDetails,
});
```

## 요약
- 클라이언트는 product·order·customer 세 서비스와 통신하고, order service가 다시 나머지 두 서비스를 동기 호출한다.
- `axios`·`superagent` 같은 HTTP 클라이언트의 기본 요청은 HTTP/1.1이다.
- 각 서비스는 포트 3000(product)·4000(customer)·5000(order)에서 돌고, `index.js`가 라우터를 호출하며 모델이 mongoose로 MongoDB에 저장한다.
- order service의 응답에 고객명과 상품 정보가 함께 담기는 것이 동기 통신으로 데이터를 조립한 결과다.
