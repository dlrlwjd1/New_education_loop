# Deleting the Product

## 개요
- 홈 페이지의 삭제(delete) 버튼을 실제 DELETE 요청과 연결하는 강의. HTML `<a>` 태그가 기본적으로 GET 요청만 보낼 수 있다는 한계를 `method-override` 미들웨어와 `<form>` 태그로 해결한다.

## 내용
### DELETE 라우트는 이미 준비됨
- 삭제 기능을 위한 DELETE 라우트 핸들러는 이미 지정되어 있으므로, `home.ejs`에서 삭제 버튼의 앵커(anchor) 태그를 실제 요청과 연결하는 작업만 남았다.

### 앵커(anchor) 태그의 한계
- HTML의 `<a>` 태그는 기본적으로 GET 메서드에 묶여(bound) 있다. 다른 URL로 이동(navigate)할 때 서버로 GET 요청을 보내는 용도로 쓰이며, DELETE, POST, PUT 같은 다른 HTTP 메서드를 직접 수행할 수 없다.
- DELETE 요청을 보내려면 방법이 몇 가지밖에 없다. `<form>` 태그를 사용하거나, `onclick` 이벤트에 별도의 메서드를 바인딩해 DELETE 요청을 처리하도록 만드는 방법이다.
- 이미 `method-override` 미들웨어를 사용하고 있으므로, 이번에는 `<form>` 태그를 사용하는 방식을 선택한다.

### form 태그로 삭제 요청 구성
- 기존의 삭제 앵커 태그를 제거하고, 대신 `<form>` 태그를 사용한다.
- `action` 경로는 `product/delete`로 설정하고, 스크립틀릿으로 `product.id`를 바인딩하며, 쿼리 문자열로 `?_method=delete`를 붙인다.
- `method`는 `post`로 설정한다.
- 폼의 클래스는 `display: inline`으로 지정해, 기존 버튼들과 나란히 배치되는 구조를 유지한다.
- 폼 안에는 `type="submit"`의 `<button>`을 만들고, 이전에 정의했던 것과 동일한 클래스들, 그리고 삭제 아이콘을 그대로 적용한다.
- 상품이 삭제된 뒤에는 다시 홈 페이지로 리다이렉트(redirect)되도록 설정한다.

### 확인
- 현재 4개의 상품이 있는 상태에서 상품 하나를 삭제해보면, 실제로 데이터베이스에서 해당 상품이 삭제된다.
- 이로써 MyStore 애플리케이션의 상품 CRUD(Create, Read, Update, Delete) 기능이 모두 성공적으로 구현되었다.

## 예시
```html
<!-- views/home.ejs (삭제 폼) -->
<form action="/product/delete/<%= product.id %>?_method=delete" method="post" style="display: inline;">
  <button type="submit" class="btn btn-outline-dark mx-1 mt-4 edit-buttons hover-red">
    <i class="bi bi-trash-fill"></i>
  </button>
</form>
```

```typescript
// products.controller.ts
@Delete('delete/:id')
@Redirect('/mystore/home')
async deleteProduct(@Param('id', ParseIntPipe) id: number) {
  return await this.productService.deleteProduct(id);
}
```

## 요약
- `<a>` 태그는 GET 요청만 보낼 수 있으므로, DELETE 요청은 `<form>` 태그와 `method-override` 미들웨어의 `?_method=delete` 쿼리 문자열 조합으로 구현한다.
- 폼의 `method`는 `post`로 두고, 쿼리의 `_method` 값을 미들웨어가 실제 HTTP 메서드로 오버라이드한다.
- 버튼 스타일과 아이콘은 기존 앵커 태그에서 쓰던 클래스를 그대로 재사용하되, `<form>`에 `display: inline` 스타일을 적용해 레이아웃을 유지한다.
- 상품 삭제 후에는 홈 페이지로 리다이렉트되며, 이렇게 MyStore 앱의 CRUD 기능이 모두 완성된다.
