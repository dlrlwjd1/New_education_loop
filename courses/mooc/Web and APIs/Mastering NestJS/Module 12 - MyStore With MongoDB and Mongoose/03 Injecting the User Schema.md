# Injecting the User Schema

## 개요
- user 서비스(service) 파일에서 기존 TypeORM 리포지토리(repository) 대신 `@InjectModel()`로 User 모델을 주입받아, 회원가입(create)과 아이디 조회(findByUsername) 로직을 Mongoose 방식으로 다시 작성하는 강의.

## 내용
### user 모델 주입
- user 서비스 파일에서 먼저 user 모델을 주입한다.
- `@InjectModel(User.name)` 데코레이터를 주고, `Model<User>` 타입의 private readonly 프로퍼티 `userModel`을 선언한다. 제네릭(generic) 타입으로 `User` 스키마를 전달한다.

### create 메서드 업데이트
- 기존 user 리포지토리를 제거하고 대신 user 모델을 사용한다.
- 기존의 `create` 메서드도 제거하는데, user 모델 자체가 생성자(constructor) 역할을 하기 때문이다. 따라서 `new` 키워드로 직접 인스턴스화(instantiate)해야 한다.
- 기존 user 리포지토리 대신 새로운 `user` 변수를 만들고 여기에 `save` 메서드를 붙여 사용한다.

### findUserByUsername 메서드 업데이트
- `findUserByUsername` 메서드에서도 user 리포지토리 대신 user 모델을 사용하고, `exec()` 메서드를 붙여 실행한다.

### 변경하지 않는 부분
- `comparePasswords` 메서드는 그대로 유지한다.

### 아직 남은 문제
- 여기까지 수정했지만 애플리케이션은 아직 실행되지 않는다. "Nest cannot resolve dependencies of the product repository" 오류가 발생하기 때문이다.
- 이를 해결하려면 product 스키마와 product용 Mongoose 모듈도 함께 구성해야 하며, 이는 다음 강의에서 다룬다.

## 예시
```typescript
// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(userDto: any) {
    const user = new this.userModel(userDto);
    return user.save();
  }

  async findUserByUsername(userName: string) {
    return this.userModel.findOne({ userName }).exec();
  }

  // comparePasswords 메서드는 기존과 동일하게 유지
}
```

## 요약
- user 서비스에서 `@InjectModel(User.name)`으로 `Model<User>` 타입의 `userModel`을 주입받아 리포지토리를 대체한다.
- 회원가입 로직은 `new this.userModel(dto)`로 인스턴스를 만들고 `save()`를 호출하는 방식으로 바뀐다.
- 아이디 조회 로직은 `userModel`의 쿼리 메서드에 `exec()`를 붙여 실행한다.
- `comparePasswords` 메서드는 변경 없이 그대로 유지되며, 아직 product 리포지토리 의존성 문제가 남아 있어 애플리케이션은 다음 강의(product 스키마 구성)까지는 실행되지 않는다.
