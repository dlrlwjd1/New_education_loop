# Updating the Product

## 개요
- Edit Product 화면에 실제 데이터베이스 상품 데이터를 표시하고, 이미지 업로드까지 포함해 상품을 수정(update)하는 기능을 완성하는 강의. 특히 HTML 폼이 PUT 요청을 기본 지원하지 않는 문제를 POST 우회 방식과 `method-override` 미들웨어 방식 두 가지로 해결한다.

## 내용
### Edit 라우트 연결 수정
- Edit 버튼을 클릭하면 원래 "Cannot GET" 에러가 발생하는데, `id`는 파라미터로 잘 전달되고 있다.
- `home.ejs`의 Edit 앵커(anchor) 링크의 `href`를 `product/getone/:id`(get one 라우트)로 업데이트한다. `ProductsController`에 이미 `getone` 라우트를 GET 핸들러로 정의해 두었기 때문이다.
- 수정 후 Edit 버튼을 클릭하면 `products` 테이블에서 가져온 상품 데이터가 표시된다.

### getOne 메서드를 템플릿 렌더링용으로 수정
- Edit Product 템플릿을 렌더링하도록 `@Render('editproduct')` 데코레이터를 추가한다.
- 그런데 이 상태로는 internal server error가 발생한다. 원인은 `getOne` 메서드의 반환 타입이 `Promise<Product>`로 지정되어 있고, `return this.productService.getOne(id);`처럼 서비스 메서드의 결과를 그대로 반환하고 있기 때문이다. 이 코드는 Postman으로 기능을 테스트할 때 쓰던 방식이다.
- 이제는 템플릿을 다루므로 상품 데이터를 객체로 감싸서 반환해야 한다. 메서드의 반환 타입을 제거하고, `product`라는 상수를 만들어 `productService.getOne()` 결과를 할당한 뒤, `{ product }` 객체로 반환하도록 바꾼다.
- 수정 후 Edit 버튼을 클릭하면 Edit Product 템플릿이 정상적으로 렌더링된다.

### 템플릿 속성명 수정
- 이름(name)이 표시되지 않는데, 이는 속성 이름을 업데이트해야 하기 때문이다.
- `editproduct.ejs`의 이름 입력 필드에서 `value` 값을 `product.productName`으로 설정한다.
- 새로고침하면 이름 값도 정상적으로 표시된다.

### PUT 라우트에 파일 업로드 적용
- 업데이트 요청은 PUT 라우트 핸들러로 처리한다. 라우트 메서드는 이미 `ProductsService`의 `updateProduct` 메서드를 사용하도록 되어 있으므로 잘 작동한다.
- 이제 Multer를 이용한 파일 업로드만 처리하면 되므로, POST 라우트 핸들러에서 사용했던 `FileInterceptor` 코드를 그대로 복사해 PUT 핸들러에 붙여넣는다.
- `@UploadedFile()`로 파일을 받는 로직도 `updateProduct` 메서드 안에 그대로 가져와 문법을 맞춰 업데이트하고, 반환문(return statement)도 옮겨온다.

### HTML 폼의 한계와 PUT/DELETE 우회 방법
- 기본적으로 HTML 폼(form)은 GET과 POST 요청만 처리할 수 있으며, PUT과 DELETE 요청은 지원하도록 설계되어 있지 않다.
- 이 한계를 우회하는 대표적인 방법 두 가지를 소개한다.

#### 방법 1 — 단일 ID를 대상으로 한 POST 요청
- PUT 대신 단일 ID를 대상으로 하는 POST 요청을 보내고, 실제 업데이트 처리는 서비스 메서드에서 담당하도록 한다.
- 업데이트 후에는 홈 페이지로 리다이렉트(redirect)하도록 설정한다.
- `editproduct.ejs` 폼의 `action` 속성을 `/product/update` 라우트로 바꾸고, `enctype` 속성을 `multipart/form-data`로 지정한다.
- 실제로 상품 이름을 Banana로, 가격을 4로 바꾸고 이미지를 업로드해 업데이트해보면 정상적으로 Banana로 변경된다. MySQL 테이블을 확인해도 Apple과 Banana 두 상품이 있는 것을 확인할 수 있다.
- 즉, POST 요청만으로도 업데이트를 구현할 수 있다.

#### 방법 2 — method-override로 PUT 요청 사용
- PUT 핸들러를 그대로 사용하고 싶다면, HTTP 메서드를 오버라이드(override)해야 한다.
- 라우트 핸들러는 PUT으로 유지하고, `editproduct.ejs`의 폼 `action`에 쿼리 문자열 `?_method=put`을 추가한 update 라우트를 지정한다. 이렇게 폼의 기본 제출 방식을 POST에서 PUT으로 오버라이드하도록 지시하는 것이다.
- 하지만 이 쿼리 문자열만으로는 동작하지 않는다. 서버가 실제 HTTP 요청을 처리하기 때문에, NestJS 서버에서는 **method-override**라는 미들웨어(middleware)를 별도로 지정해야 한다.
- `npm i method-override` 명령으로 패키지를 설치한다.
- `main.ts`에서 `import * as methodOverride from 'method-override';`로 모듈을 가져온다.
- `app.use(methodOverride('_method'))`로 미들웨어를 지정한다.
- 동작 원리는 다음과 같다. 폼이 제출되면 서버는 처음에는 POST 요청을 받는다. 하지만 쿼리에 `_method=put`이 있는 것을 method-override 미들웨어가 감지하면, 요청 메서드를 PUT으로 덮어쓴다(overwrite).
- 저장한 뒤 다시 Apple 상품을 수정해본다. 상품 이름을 Pineapple로, 가격을 8로 바꾸고 이미지를 선택해 업데이트하면 정상적으로 업데이트된다.
- 결론적으로 POST 요청과 PUT 요청 중 어느 방식으로도 상품 업데이트를 구현할 수 있다.

## 예시
```html
<!-- views/home.ejs (Edit 링크 수정) -->
<a href="/product/getone/<%= product.id %>" class="btn btn-outline-dark mx-1 mt-4 edit-buttons hover-yellow">
  <i class="bi bi-pencil-fill"></i>
</a>
```

```typescript
// products.controller.ts (getOne을 템플릿 렌더링용으로 수정)
@Get('getone/:id')
@Render('editproduct')
async getOne(@Param('id', ParseIntPipe) id: number) {
  const product = await this.productService.getOne(id);
  return { product };
}
```

```html
<!-- views/editproduct.ejs (이름 필드 값 바인딩) -->
<input type="text" name="productname" class="form-control" value="<%= product.productName %>">
```

```typescript
// products.controller.ts (PUT 핸들러 + 파일 업로드)
@Put('update/:id')
@Redirect('/mystore/home')
@UseInterceptors(
  FileInterceptor('image', {
    storage: diskStorage({
      destination: './public/uploads',
      filename: (req, file, callback) => {
        callback(null, new Date().toISOString() + file.originalname);
      },
    }),
  }),
)
async updateProduct(
  @Param('id', ParseIntPipe) id: number,
  @Body() updateData: ProductDto,
  @UploadedFile() file: Express.Multer.File,
) {
  if (file) {
    updateData.image = file.filename;
  }
  return await this.productService.updateProduct(id, updateData);
}
```

```html
<!-- 방법 1: POST 요청으로 업데이트 -->
<form class="w-25" action="/product/update/1" method="post" enctype="multipart/form-data">
  <!-- ... -->
</form>
```

```html
<!-- 방법 2: method-override로 PUT 요청 사용 -->
<form class="w-25" action="/product/update/1?_method=put" method="post" enctype="multipart/form-data">
  <!-- ... -->
</form>
```

```bash
npm i method-override
```

```typescript
// main.ts
import * as methodOverride from 'method-override';
// ...
app.use(methodOverride('_method'));
```

## 요약
- 템플릿에서 데이터를 다룰 때는 서비스 메서드의 반환값을 그대로 넘기지 말고 `{ product }` 형태의 객체로 감싸서 반환해야 한다.
- HTML 폼은 GET/POST만 지원하므로 PUT/DELETE 요청은 (1) 단일 ID 대상 POST 요청으로 우회하거나 (2) `method-override` 미들웨어와 쿼리 문자열(`?_method=put`)로 실제 메서드를 오버라이드하는 방식으로 처리한다.
- PUT 핸들러에도 POST와 동일한 `FileInterceptor` + `@UploadedFile()` 조합으로 이미지 업로드를 붙일 수 있다.
- `method-override`는 `app.use(methodOverride('_method'))`로 등록하며, 쿼리 파라미터 `_method`의 값을 실제 HTTP 메서드로 덮어쓴다.
