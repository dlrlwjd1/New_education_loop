# Exploring the Project Structure

## 개요
- `nest new` 명령으로 생성된 NestJS 프로젝트의 폴더·파일 구조를 하나씩 살펴보고, 프로젝트를 실행해 기본 엔드포인트를 확인하는 강의.

## 내용
### node_modules 폴더
- 이 프로젝트에서 필요로 하는 모든 패키지(package)들을 담고 있는 폴더다.

### src(source) 폴더
- 앞으로 가장 많이 다루게 될 중요한 폴더다.
- 기본적으로 `nest new` 명령은 **TypeScript** 기반 프로젝트를 생성하므로 이 폴더 안의 파일들은 TypeScript로 작성되어 있다.
- JavaScript를 사용하고 싶다면 `nest new <프로젝트명> --language js` 명령을 사용하면 된다. TypeScript로 하는 것과 코스 진행에는 차이가 없으며, 유일한 차이는 파일 확장자가 `.ts`에서 `.js`로 바뀐다는 점이다.

### 주요 파일 살펴보기
- `main.ts` — 프로젝트의 메인 파일(main file)이다. 이 파일을 실행하면 애플리케이션이 포트 3000번(port 3000)에서 요청을 수신(listening)한다.
- `main.ts`에서는 `app module`이 프로젝트를 생성하는 데 사용된다는 것을 볼 수 있다.
- **모듈(module)** 안에는 여러 요소가 있지만, 이번 강의에서는 그중 **컨트롤러(controller)**와 **서비스(service)**에 집중한다.
- 컨트롤러를 열어보면 GET 요청(get request)이 정의되어 있고, 이 요청은 `getHello` 서비스를 호출해 반환(return)하고 있다.
- 서비스(`getHello`)를 열어보면 `"Hello World"` 문자열을 반환하고 있는 것을 확인할 수 있다.
- 즉, 루트 엔드포인트(root endpoint)를 호출하면 `"Hello World"`를 응답받게 될 것으로 예상할 수 있다.

### 테스트 및 설정 관련 파일
- `app.controller.spec.ts` — TypeScript 테스트 케이스 파일(spec 파일)로, 이름에서 알 수 있듯 컨트롤러에 대한 테스트다.
- `test` 폴더 — 엔드포인트에 대한 API 테스트 케이스를 담고 있지만, 이 코스의 범위(scope)를 벗어나므로 깊이 다루지 않는다.
- 린팅(linting) 규칙 파일, `.gitignore`, prettier 관련 파일들은 기본적인 린팅 규칙 파일이므로 무시해도 된다.
- `nest-cli.json` — 현재 Nest CLI에 대한 정보를 담고 있는 파일이다.
- `package-lock.json` — 프로젝트를 빌드할 때 생성되며, node_modules에 대한 모든 정보를 담고 있다.
- `package.json` — 프로젝트 전체에 대한 요약 파일(summary file)로, 의존성(dependencies)과 실행 스크립트(scripts) 정보를 담고 있다. 이 중 `start:dev` 스크립트를 사용해 watch 모드(watch mode)로 프로젝트를 실행할 예정이다.
- `README.md` — 기본 안내 파일.
- TypeScript 설정 파일들 — JavaScript로 작업한다면 필요하지 않다.

### 프로젝트 실행 및 확인
- `npm run start:dev` 명령으로 NestJS 프로젝트를 실행할 수 있다.
- 실행 시 Node 버전이 오래되어 오류가 발생할 수 있으므로 항상 Node 버전을 확인해야 한다. 강의에서는 `node -v`로 확인했을 때 버전 14로 오래된 상태였기에, `nvm list`와 `nvm use`로 버전 18로 전환한 뒤 다시 실행해 정상적으로 프로젝트가 구동되었다.
- Postman을 사용해 `localhost:3000`으로 GET 요청을 보내면 `"Hello World"` 응답을 확인할 수 있다. 이는 앞서 살펴본 서비스 파일에 정의된 그대로다.

## 예시
```typescript
// main.ts - 애플리케이션 부트스트랩, 포트 3000에서 리스닝
// (app module을 사용해 프로젝트를 생성)

// app.controller.ts (개념적 구조)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// app.service.ts (개념적 구조)
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
```

```bash
# 프로젝트를 JavaScript로 생성하고 싶은 경우
nest new my-project-name --language js

# 개발 모드(watch mode)로 프로젝트 실행
npm run start:dev

# Node 버전이 오래된 경우 버전 전환
node -v
nvm list
nvm use 18
```

## 요약
- `node_modules`는 패키지, `src`는 실제 애플리케이션 코드가 위치하는 핵심 폴더다.
- `main.ts`가 애플리케이션의 진입점이며 포트 3000에서 요청을 수신하고, `app module`을 통해 컨트롤러와 서비스가 연결된다.
- 컨트롤러는 GET 요청을 처리하고 서비스의 `getHello` 메서드를 호출해 `"Hello World"`를 반환한다.
- `package.json`의 `start:dev` 스크립트로 프로젝트를 watch 모드로 실행하며, `localhost:3000`에 GET 요청을 보내면 `"Hello World"` 응답을 받는다.
- 다음 영상에서는 컨트롤러(controller)에 대해 더 깊이 다룬다.
