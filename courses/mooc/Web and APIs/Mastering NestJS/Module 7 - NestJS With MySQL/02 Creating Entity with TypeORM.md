# Creating Entity with TypeORM

## 개요
- TypeORM에서 **엔티티(entity)**가 무엇인지 설명하고, `Product` 엔티티를 직접 만들면서 `@Entity`, `@PrimaryGeneratedColumn`, `@Column`, `@CreateDateColumn` 등 주요 데코레이터(decorator)를 살펴보는 강의.

## 내용
### 엔티티란
- **엔티티(entity)**는 데이터베이스 안의 테이블(table)을 의미하며, 데이터를 저장할 테이블의 구조인 스키마(schema)를 정의할 수 있게 해준다.
- **ORM**은 매퍼(mapper)이므로, 직접 원시(raw) SQL 쿼리를 작성하지 않아도 TypeScript/JavaScript 클래스를 데이터베이스 테이블에 바로 매핑(map)할 수 있다.
- `entities` 폴더를 만들고 그 안에 `product.ts` 파일을 생성해 `Product` 클래스를 정의한다.

### @Entity 데코레이터
- 클래스를 데이터베이스 안의 엔티티(테이블)로 만들려면 TypeORM이 제공하는 `@Entity()` 데코레이터를 클래스에 붙인다.
- 기본적으로 테이블 이름은 클래스 이름과 동일하게 설정된다.
- 커스텀 테이블 이름을 쓰고 싶다면 `@Entity()`에 문자열 값을 직접 전달하거나, 더 나은 방법으로 `name` 속성을 사용해 이름을 지정할 수 있다.

### 기본 키(primary key)와 @PrimaryGeneratedColumn
- 테이블에는 각 데이터 필드를 나타내는 컬럼(column)과 각 행을 고유하게 식별하는 기본 키(primary key)가 필요하다.
- `id` 속성(number 타입)에 `@PrimaryGeneratedColumn()` 데코레이터를 붙여 기본 키로 설정한다. 이 데코레이터는 값을 자동 증가(auto increment)시킨다.
- 다른 증가 방식 옵션으로 128비트 UUID를 설정하는 `uuid`, 고유한 row id를 설정하는 `rowid`, `identity` 옵션 등이 있으며, 기본값은 `increment`다. 강의에서는 기본값을 그대로 사용한다.
- 컬럼 이름도 기본적으로는 속성 이름(`id`)과 같지만, `name` 속성으로 커스텀 필드 이름을 지정할 수 있다.

### 일반 컬럼과 @Column 데코레이터
- `productName`(string 타입)과 `price`(number 타입) 속성을 `@Column()` 데코레이터로 컬럼으로 지정한다.
- `@Column()`에는 integer, decimal, float, text, varchar 등 구체적인 데이터 타입(data type)을 지정할 수 있다.
- `unique` 속성(boolean)으로 값의 유일성(unique)을 설정할 수 있고, `nullable` 속성(boolean)으로 null 값 허용 여부를 설정해 사용자가 특정 필드에 반드시 값을 넣지 않아도 되도록 만들 수 있다.
- `length` 속성으로 필드 길이를 지정할 수 있다. 예를 들어 `productName` 컬럼의 길이를 기본값 255에서 100으로 변경할 수 있다.

### 날짜 컬럼과 기본값
- 데이터가 새로 생성/삽입될 때의 날짜 값을 저장하려면 `@CreateDateColumn()` 데코레이터로 `createdAt`(date 타입) 컬럼을 별도로 만든다.
- 컬럼에는 기본값(default value)도 설정할 수 있는데, 예를 들어 날짜 필드의 `default` 속성을 `new Date()` 인스턴스로 설정할 수 있다.

### 엔티티를 데이터베이스 설정에 등록
- 정의한 엔티티를 실제로 사용하려면 모듈 파일의 데이터베이스 설정(`TypeOrmModule.forRoot()`) 안에 `entities` 속성을 추가해야 한다.
- `entities` 속성은 배열(array)을 받으며, 여기에 `Product` 엔티티 클래스를 값으로 전달한다.
- 애플리케이션을 실행한 뒤 터미널에 에러가 없으면, MySQL에서 `show tables;` 명령으로 `products` 테이블이 생성된 것을 확인할 수 있다.
- `describe products;`(테이블 구조 확인) 명령으로 `id`(primary key), `productName`(varchar), `price`(decimal), 날짜 필드 등의 컬럼과 타입을 확인한다.
- `productName` 컬럼에 `length: 100`을 추가하고 다시 `describe products;`를 실행하면 필드 길이가 100으로 변경된 것을 확인할 수 있다.

## 예시
```typescript
// entities/product.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  productName: string;

  @Column({ type: 'decimal' })
  price: number;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
```

```typescript
// app.module.ts (엔티티 등록)
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_mysql',
      synchronize: true,
      entities: [Product],
    }),
  ],
})
export class AppModule {}
```

```sql
-- 확인용 MySQL 명령
show tables;
describe products;
```

## 요약
- **엔티티(entity)**는 `@Entity()` 데코레이터로 정의하며, 클래스가 곧 데이터베이스 테이블이 된다.
- 기본 키는 `@PrimaryGeneratedColumn()`으로, 일반 컬럼은 `@Column()`으로 정의하며 타입, 길이(`length`), 유일성(`unique`), null 허용(`nullable`), 기본값(`default`) 등을 옵션으로 지정할 수 있다.
- 생성 날짜 컬럼은 `@CreateDateColumn()`으로 별도 정의한다.
- 정의한 엔티티는 `TypeOrmModule.forRoot()`의 `entities` 배열에 등록해야 실제 테이블로 생성된다.
- MySQL의 `show tables;`, `describe <table>;` 명령으로 생성된 테이블 구조를 직접 확인할 수 있다.
