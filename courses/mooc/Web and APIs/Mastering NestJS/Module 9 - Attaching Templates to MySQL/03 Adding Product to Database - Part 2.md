# Adding Product to Database - Part 2

## 개요
- NestJS에 내장된 **Multer**를 이용해 상품 이미지 파일 업로드를 실제로 구현하고, 업로드된 파일명을 데이터베이스에 저장한 뒤, 홈 페이지에서 실제 이미지가 표시되도록 연결하는 강의.

## 내용
### Multer 타입 패키지 설치
- `npm install -D @types/multer` 명령으로 Multer 타입 패키지를 설치한다.

### FileInterceptor로 파일 업로드 처리
- POST 라우트 핸들러에 `@UseInterceptors()` 데코레이터를 붙이고 `FileInterceptor()` 함수를 지정한다.
- `FileInterceptor`는 Multer를 이용해 파일 업로드를 처리하는 내장 유틸리티(built-in utility)로, 들어오는 HTTP 요청을 가로채(intercept) 파일 데이터를 처리하는 인터셉터로 사용된다. Node.js의 Multer와 거의 동일한 원리로 동작하며, 그 위에 만들어져 있다.
- `FileInterceptor`는 두 개의 인자를 받는다.
  - 첫 번째는 필드 이름(field name)이다. Add Product 템플릿의 이미지 입력 필드에서 `name` 속성을 `image`로 설정했으므로, 같은 이름인 `'image'`를 전달한다.
  - 두 번째는 저장 옵션(storage option)이다. Node.js에서는 별도로 storage 상수를 만들고 disk storage 엔진을 할당했지만, 내장 Multer의 `FileInterceptor`는 `storage` 속성을 제공한다.

### diskStorage 설정
- storage 옵션에는 `diskStorage()`를 지정한다.
- `destination` 속성은 업로드된 파일이 저장될 디렉터리를 지정한다. `public` 폴더 안에 `uploads`라는 별도 디렉터리를 만들고, 경로를 `./public/uploads`로 지정한다. 이 디렉터리에는 서버에 업로드된 이미지들이 저장된다.
- `filename` 속성은 디스크에 저장될 파일의 이름을 지정하는, 가장 중요한 속성이다. 이 속성은 요청(request) 객체, 파일(file) 객체, 콜백(callback)을 받는 함수를 값으로 가진다.
- 이 함수는 콜백을 `null`(에러 없음)과 원하는 파일 이름(문자열)이라는 두 인자로 호출해야 한다.
- 파일 이름은 `new Date().toISOString()`과 `file.originalname`을 이어붙여(join) 만든다. 파일 시스템은 파일을 생성하고 참조할 때 문자열 이름이 필요하므로 파일 이름은 항상 문자열이어야 하며, 이렇게 하면 호환성을 보장하고 파일 이름 관련 에러를 피할 수 있다.
- 이 로직은 순수 Node.js의 Multer와 다를 바 없는 코드라고 설명한다.

### @UploadedFile 데코레이터로 업로드된 파일 받기
- `FileInterceptor`는 파일 업로드 처리만 담당하므로, 업로드된 파일을 POST 핸들러 메서드 안에서 실제로 받으려면 별도 처리가 필요하다.
- `addProduct` 메서드의 파라미터에 `@UploadedFile()` 데코레이터를 추가한다. 이 데코레이터는 업로드된 파일을 메서드 파라미터에 주입(inject)하는 역할을 하며, multipart form data 요청에서 업로드된 파일을 추출해 메서드에서 사용할 수 있게 해준다.
- 이 데코레이터는 파일 업로드를 처리하는 컨트롤러 메서드 안에서만 사용되며, `FileInterceptor` 없이는 정의할 수 없다.
- 이 데코레이터와 함께 `file` 프로퍼티를 지정하며, 타입은 `Express.Multer.File`이다. 이 타입은 multipart form data를 처리하는 Multer 미들웨어에서 제공되며, 주로 파일 업로드에 사용된다.
- `file` 파라미터는 업로드된 파일의 원본 이름(original name), 저장된 이름(name), 저장 경로(path), 크기(size), MIME 타입(MIME type) 등의 정보를 담고 있다. `Express.Multer.File`은 Multer가 제공하는, 업로드된 파일 객체의 구조를 정의하는 인터페이스에 가깝다.

### 파일명을 productData.image에 저장
- 메서드 안에 if 조건문을 추가해, `file`이 존재하면 `productData.image`를 `file.filename`으로 설정한다. 여기서 `filename`은 `Express.Multer.File` 인터페이스가 제공하는 속성이다.
- 이 코드는 상품 생성 시 파일이 업로드되었다면 그 파일 이름이 `productData.image`에 저장되도록 보장한다.

### home.ejs 속성명 업데이트
- `home.ejs` 템플릿에서 정적 데이터 시절에 쓰던 속성 이름을, 실제 데이터베이스 엔티티의 속성 이름에 맞게 업데이트한다. 이미지 속성과 상품 이름(product name) 속성 참조를 실제 엔티티 필드명에 맞춰 수정한다.

### 리다이렉트 경로 수정
- 상품을 추가해보면 `Cannot GET /product/mystore/home`이라는 에러가 발생한다.
- `products.controller.ts`의 `@Redirect()` 데코레이터에 슬래시(`/`)가 빠져 있었던 것이 원인이다. 경로를 `/mystore/home`으로 수정한다.
- 수정 후 다시 이름, 가격, 이미지를 입력해 상품을 추가하면 테이블에 정상적으로 저장된다.

### 이미지 경로 수정
- 이미지는 아직 화면에 표시되지 않는데, 이는 경로(path) 문제다.
- `home.ejs`에서 `<img>`의 `src` 경로를 `/uploads/`로 시작하도록 업데이트하고, EJS 스크립틀릿으로 `product.image`를 바인딩한다. 이제 데이터베이스 테이블에서 가져온 이미지를 표시하기 때문이다.
- 새로고침하면 `products` 테이블의 이미지가 정상적으로 렌더링된다.
- 터미널을 확인하면 데이터베이스 테이블에서 온 상품 데이터가 출력된다.
- MySQL에서 `select * from products;`를 실행해 테이블 데이터를 확인한다.
- Orange 상품을 하나 더 추가(가격, 이미지 선택 포함)하면 테이블에 정상적으로 저장되고, `uploads` 폴더 안에도 두 개의 상품 이미지 파일이 저장되어 있는 것을 확인할 수 있다.
- 이렇게 해서 MySQL 데이터베이스를 이용한 상품 추가 기능이 완성된다.

## 예시
```bash
npm install -D @types/multer
```

```typescript
// products.controller.ts
import { Controller, Post, Body, Redirect, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post('create')
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
  async addProduct(
    @Body() productData: ProductDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (file) {
      productData.image = file.filename;
    }
    return this.productService.addProduct(productData);
  }
}
```

```html
<!-- views/home.ejs (이미지 경로 및 속성명 업데이트) -->
<img class="card-img-top card-image" src="/uploads/<%= product.image %>" alt="<%= product.productName %>">
```

```sql
-- 확인용 쿼리
select * from products;
```

## 요약
- NestJS는 `@UseInterceptors(FileInterceptor('필드명', { storage: diskStorage(...) }))`로 Multer 기반 파일 업로드를 내장 지원한다.
- `diskStorage`의 `destination`으로 저장 위치를, `filename` 콜백으로 저장될 파일명을 지정한다.
- 컨트롤러 메서드에서 업로드된 파일은 `@UploadedFile()` 데코레이터와 `Express.Multer.File` 타입으로 받는다.
- 업로드된 파일의 `filename`을 `productData.image`에 담아 DTO와 함께 저장한다.
- `@Redirect()` 데코레이터의 경로에 슬래시가 빠지면 라우팅 에러가 발생하므로 정확한 절대 경로(`/mystore/home`)를 지정해야 한다.
- 홈 페이지의 이미지 `src`는 `/uploads/` 경로와 데이터베이스에 저장된 `image` 값을 조합해 구성한다.
