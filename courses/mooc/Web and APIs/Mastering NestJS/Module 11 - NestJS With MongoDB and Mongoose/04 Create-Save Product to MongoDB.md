# Create & Save Product to MongoDB

## 개요
- product 서비스(service)에서 `@InjectModel()`로 Mongoose 모델을 주입받고, DTO(Data Transfer Object)와 함께 새 문서(document)를 생성·저장(save)해 실제로 MongoDB에 추가하는 강의.

## 내용
### 서비스 파일 생성 및 모델 주입
- CRUD 기능 구현을 위해 서비스 파일을 생성한다: `nest generate service products/product --no-spec`
- 서비스 파일에서 먼저 product 모델(스키마)을 주입해야 한다. 생성자(constructor)에서 `@nestjs/mongoose` 패키지가 제공하는 `@InjectModel()` 데코레이터를 사용한다. 이 데코레이터는 Mongoose 모델을 서비스 파일에 주입하기 위해 특별히 쓰인다.
- `@InjectModel()`에는 모델 이름, 즉 `Product.name`을 전달한다.
- 왜 계속 `.name` 프로퍼티를 쓰는지에 대해: `Product` 클래스의 `name` 프로퍼티는 클래스 이름의 문자열 표현을 담고 있으며, Mongoose는 이 문자열로 모델을 등록하고 참조한다. `Product.name`을 사용하면 모델을 등록할 때 쓰는 문자열과 주입할 때 쓰는 문자열이 항상 일치하게 되어, 모델 식별 문제를 방지하고 코드 유지보수성을 높여준다.
- 이어서 private 프로퍼티 `productModel`을 `Model` 타입으로 선언한다. `Model`은 데이터베이스 안의 컬렉션을 나타내는 타입이며, 제네릭(generic) 타입으로 스키마 자체(`Product`)를 전달한다.

### DTO 작성
- 새 상품을 삽입하는 메서드는 이름을 `create`로 정하고, `productName`과 `price`를 파라미터로 받는다.
- 파라미터를 직접 나열하는 대신, 더 나은 방법으로 DTO 파일을 만든다. `dto`라는 폴더를 만들고 그 안에 `product.dto.ts` 파일을 생성한다.
- `ProductDto` 클래스를 만들고, `productName`(`string` 타입)에는 `@IsString()`, `@IsNotEmpty()` 클래스 유효성 검사기(class validator)를 적용한다.
- `price`(`number` 타입)에는 `@IsNumber()`, `@IsNotEmpty()` 클래스 유효성 검사기를 적용한다.

### create 메서드 구현
- `create` 메서드에 `ProductDto`를 파라미터로 전달받고, 메서드의 반환 타입은 `Promise<Product>`(스키마 타입)로 설정한다.
- 상수 `product`를 만들고 `new this.productModel(상품 데이터)` 형태로 값을 할당한다. `new` 키워드를 사용해 product 모델의 새 인스턴스(instance)를 생성하는 것이 Mongoose로 새 문서를 추가할 때의 좋은 관행(good practice)으로 여겨진다.
- 그 다음 `return await product.save()`로 컬렉션 안에 상품을 저장(save)한다.

### 컨트롤러에서 create 메서드 호출
- product 컨트롤러 파일에서 먼저 product 서비스를 주입한다.
- POST 라우트 핸들러(route handler)를 만들고, `@Body()` 데코레이터와 `ProductDto` 타입의 파라미터를 메서드에 전달받는다.
- 이 메서드 안에서 product 서비스의 `create` 메서드를 호출하고 `ProductDto` 값을 전달한 뒤, "상품이 성공적으로 추가되었다(product added successfully)"는 메시지를 반환한다.

### Postman으로 요청 테스트
- Postman에서 요청 타입을 POST로 설정하고 경로를 `localhost:3000/product`로 지정한다.
- 요청 본문(request body)을 정의한 뒤 요청을 보내면 문서가 추가된다.
- MongoDB의 products 컬렉션을 확인하면 실제로 문서가 추가된 것을 볼 수 있다.
- 동일한 상품을 다시 추가하려고 하면 내부 서버 오류(internal server error)가 발생한다. VS Code 터미널을 확인하면 이는 컬렉션 안의 중복 키(duplicate key) 오류임을 알 수 있는데, 스키마에서 `unique` 속성을 `true`로 설정했기 때문이다.
- 새로운 상품(이름을 orange, 가격을 8로 변경)을 추가하면 두 번째 상품도 정상적으로 컬렉션에 추가되는 것을 확인한다.

## 예시
```typescript
// product.dto.ts
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class ProductDto {
  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
```

```typescript
// product.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(productDto: ProductDto): Promise<Product> {
    const product = new this.productModel(productDto);
    return await product.save();
  }
}
```

```typescript
// product.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() productDto: ProductDto) {
    await this.productService.create(productDto);
    return 'product added successfully';
  }
}
```

## 요약
- 서비스에서 `@InjectModel(Product.name)`으로 Mongoose 모델을 주입받고, `Model<Product>` 타입의 프로퍼티로 선언한다.
- 파라미터를 직접 나열하는 대신 `class-validator` 데코레이터(`@IsString`, `@IsNotEmpty`, `@IsNumber`)를 적용한 DTO를 만들어 사용한다.
- 새 문서를 만들 때는 `new this.productModel(dto)`로 인스턴스를 생성한 뒤 `await 인스턴스.save()`로 저장하는 것이 Mongoose의 권장 방식이다.
- 컨트롤러의 POST 핸들러가 서비스의 `create`를 호출해 상품을 추가하고, 스키마의 `unique: true` 제약을 위반하면 중복 키 오류(internal server error)가 발생한다.
