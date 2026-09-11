# Injecting the Product Schema

## 개요
- product 서비스 파일의 add/get all/get one/update/delete 메서드를 TypeORM 리포지토리 방식에서 `@InjectModel()`로 주입받은 Mongoose 모델 방식으로 모두 다시 작성하고, 컨트롤러의 ID 타입도 함께 수정하는 강의.

## 내용
### product 모델 주입
- product 서비스 파일에서 먼저 product 모델을 주입한다.
- `@InjectModel(Product.name)` 데코레이터를 주고, `Model<Product>` 타입의 private readonly 프로퍼티 `productModel`을 선언한다.

### addProduct 메서드
- product 리포지토리 대신 product 모델을 사용한다.
- 기존의 `create` 메서드는 제거하고, `new` 키워드로 인스턴스를 생성한 뒤 `save` 메서드를 호출하도록 수정한다.

### getAll 메서드
- product 모델을 사용해 `find()`와 `exec()` 메서드를 호출한다.

### getOne 메서드
- MongoDB가 각 문서(document)의 ID를 문자열(string)로 생성하기 때문에, `id`의 타입을 `string`으로 설정한다.
- `product` 모델의 `findById` 메서드를 사용하며, 기존에 있던 `where` 프로퍼티는 제거하고 `id` 값만 전달한 뒤 `exec()` 메서드를 붙인다.

### updateProduct 메서드
- `id`의 타입을 `string`으로 설정한다.
- `product` 모델의 `findByIdAndUpdate` 메서드를 사용하며, `id`, 업데이트할 데이터, 그리고 `new` 속성을 `true`로 설정한 옵션 객체를 전달해 새로 업데이트된 문서를 반환하도록 하고 `exec()` 메서드를 붙인다.
- 업데이트된 데이터를 다시 저장(save)할 필요가 없으므로 — Mongoose가 알아서 처리해주므로 — `product`만 반환한다.

### deleteProduct 메서드
- `id`의 타입을 `string`으로 설정한다.
- `product` 모델의 `findByIdAndDelete` 메서드를 사용하며 ID 값만 전달하고 `exec()` 메서드를 붙인다.
- 기존에 있던 불필요한 라인(별도 삭제 처리 라인)은 제거하고, 삭제된 상품(deleted product)을 반환한다.

### 컨트롤러 수정
- 서비스 파일 저장 후 product 컨트롤러 파일을 확인하면 몇 가지 오류가 발생한다.
- ID가 필요한 부분마다 ID 타입을 `string`으로 바꾸고, 기존에 쓰이던 `ParseIntPipe`는 제거한다.

### 실행 및 데이터베이스 확인
- 저장 후 코드를 실행하면 오류가 없다.
- MongoDB 데이터베이스를 확인하면 `products`와 `users` 컬렉션이 생성되어 있는 것을 확인한다.
- 더 이상 필요 없는 `test` 컬렉션은 삭제(remove)한다.
- 한 가지 남은 작업은 세션 컬렉션(session collection)이다. MongoDB에는 자체적인 세션 스토어(session store)가 있으며, 이는 다음 강의에서 구성(configure)할 예정이다.

## 예시
```typescript
// product.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './entities/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async addProduct(productDto: any) {
    const product = new this.productModel(productDto);
    return product.save();
  }

  async getAll() {
    return this.productModel.find().exec();
  }

  async getOne(id: string) {
    return this.productModel.findById(id).exec();
  }

  async updateProduct(id: string, updatedData: any) {
    const product = await this.productModel
      .findByIdAndUpdate(id, updatedData, { new: true })
      .exec();
    return product;
  }

  async deleteProduct(id: string) {
    const deletedProduct = await this.productModel
      .findByIdAndDelete(id)
      .exec();
    return deletedProduct;
  }
}
```

```typescript
// product.controller.ts (일부)
@Get(':id')
getOne(@Param('id') id: string) {
  return this.productService.getOne(id);
}

@Patch(':id')
updateProduct(@Param('id') id: string, @Body() updatedData: any) {
  return this.productService.updateProduct(id, updatedData);
}

@Delete(':id')
deleteProduct(@Param('id') id: string) {
  return this.productService.deleteProduct(id);
}
```

## 요약
- product 서비스의 모든 CRUD 메서드가 `@InjectModel(Product.name)`으로 주입한 `Model<Product>` 기반으로 재작성된다.
- 생성은 `new this.productModel()` + `save()`, 조회는 `find()`/`findById()`, 수정은 `findByIdAndUpdate(id, data, { new: true })`, 삭제는 `findByIdAndDelete(id)`를 사용한다.
- MongoDB의 ID는 문자열이므로 컨트롤러의 `id` 파라미터 타입을 `string`으로 바꾸고 기존 `ParseIntPipe`는 제거해야 한다.
- 실행 후 데이터베이스에서 `products`, `users` 컬렉션을 확인했으며, 남은 작업은 세션 스토어(session store) 구성이다.
