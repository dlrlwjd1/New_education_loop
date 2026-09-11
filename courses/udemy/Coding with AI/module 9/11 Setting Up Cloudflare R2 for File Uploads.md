# Setting Up Cloudflare R2 for File Uploads

## 개요
- File과 image item을 구현하기 전에 Cloudflare R2 object storage를 설정한다.
- R2 bucket을 만들고 public development URL을 활성화한다.
- Local `.env`, `.env.production`, `.env.example`, Vercel environment variables에 필요한 값을 정리한다.

## 내용

### 왜 Cloudflare R2를 사용하는가
File/image upload에는 object storage가 필요하다.

선택지는 여러 가지가 있다.

- Cloudflare R2
- Amazon S3
- 기타 object storage 서비스

강사는 Cloudflare R2를 선택했다.

이유:
- 무료 제공량이 넉넉함
- AWS보다 설정이 비교적 단순함
- S3-compatible storage처럼 사용할 수 있음

### R2 dashboard로 이동
Cloudflare에 로그인한 뒤 dashboard에서 R2를 찾는다.

검색:

```text
R2
```

선택:

```text
R2 Object Storage
```

Cloudflare dashboard는 항목이 많아 찾기 어려울 수 있지만, 검색을 사용하면 빠르게 접근할 수 있다.

### Bucket 생성
새 bucket을 만든다.

예:

```text
Bucket name: devstash-files
```

강의에서는 기본 설정을 유지하고 bucket을 생성했다.

이 bucket에 DevStash의 uploaded files와 images가 저장된다.

### 필요한 environment variables
R2 연동에는 여러 값이 필요하다.

필요한 env vars:

```env
CLOUDFLARE_R2_ACCOUNT_ID=
CLOUDFLARE_R2_ACCESS_KEY_ID=
CLOUDFLARE_R2_SECRET_ACCESS_KEY=
CLOUDFLARE_R2_BUCKET_NAME=
CLOUDFLARE_R2_PUBLIC_URL=
```

강의에서 bucket name은 다음과 같다.

```env
CLOUDFLARE_R2_BUCKET_NAME=devstash-files
```

각자 만든 bucket name에 맞게 수정해야 한다.

### Public development URL 활성화
Uploaded file/image를 browser에서 접근하려면 public URL이 필요하다.

R2 bucket settings에서 Public development URL을 활성화한다.

흐름:
1. Bucket 선택
2. Settings 이동
3. Public development URL 찾기
4. Enable 클릭
5. `Allow` 입력
6. 생성된 URL 복사

복사한 값을 env var에 넣는다.

```env
CLOUDFLARE_R2_PUBLIC_URL=https://...
```

### Account ID 확인
R2 overview page에서 account ID를 복사한다.

```env
CLOUDFLARE_R2_ACCOUNT_ID=
```

이 값은 R2 API endpoint 구성에 필요하다.

### API token 생성
R2에서 object를 읽고 쓰려면 access key가 필요하다.

위치:

```text
R2 -> Manage API Tokens -> Create API Token
```

설정 예:

```text
Name: devstash-token
Permissions: Object Read and Write
Bucket scope: devstash-files
```

보안을 위해 모든 bucket이 아니라 특정 bucket에만 권한을 제한한다.

필요하다면 client IP filtering 같은 추가 제한도 걸 수 있다.

### Access key와 secret
Token 생성 후 다음 값을 복사한다.

```env
CLOUDFLARE_R2_ACCESS_KEY_ID=
CLOUDFLARE_R2_SECRET_ACCESS_KEY=
```

주의:
- secret access key는 다시 보기 어려울 수 있으므로 즉시 저장한다.
- access key와 secret access key를 헷갈리지 않게 확인한다.
- 실제 값은 repo에 commit하면 안 된다.

### Local `.env`에 추가
Local development용 `.env`에 모든 값을 추가한다.

예:

```env
CLOUDFLARE_R2_ACCOUNT_ID=...
CLOUDFLARE_R2_ACCESS_KEY_ID=...
CLOUDFLARE_R2_SECRET_ACCESS_KEY=...
CLOUDFLARE_R2_BUCKET_NAME=devstash-files
CLOUDFLARE_R2_PUBLIC_URL=https://...
```

### `.env.production`에 추가
강사는 production 참고용으로 `.env.production`에도 같은 값을 넣었다.

이 파일을 실제로 commit하는지, `.gitignore`에 포함되어 있는지 반드시 확인해야 한다.

Secret이 포함된 production env file은 공개 repo에 올라가면 안 된다.

### `.env.example` 업데이트
`.env.example`은 다른 사람이 필요한 environment variables를 알 수 있게 해주는 공개 파일이다.

따라서 key 이름만 넣고 실제 값은 비워 둔다.

예:

```env
CLOUDFLARE_R2_ACCOUNT_ID=
CLOUDFLARE_R2_ACCESS_KEY_ID=
CLOUDFLARE_R2_SECRET_ACCESS_KEY=
CLOUDFLARE_R2_BUCKET_NAME=
CLOUDFLARE_R2_PUBLIC_URL=
```

### Vercel environment variables
Production에서도 upload가 동작하려면 Vercel에 같은 env vars를 등록해야 한다.

위치:

```text
Vercel -> Project -> Settings -> Environment Variables
```

`Add Environment Variable`에 여러 줄을 붙여 넣으면 한 번에 등록할 수 있다.

등록 후:
1. Save
2. Redeploy
3. Deployment 상태 확인

### 다음 단계
이번 강의는 R2 설정까지만 진행한다.

다음 단계에서는 실제 file/image upload 기능을 구현한다.

예상 작업:
- R2 client 설정
- upload API 또는 server action 작성
- file/image item create form 수정
- uploaded file metadata 저장
- drawer에서 file/image 표시

## 예시

R2 env vars:

```env
CLOUDFLARE_R2_ACCOUNT_ID=
CLOUDFLARE_R2_ACCESS_KEY_ID=
CLOUDFLARE_R2_SECRET_ACCESS_KEY=
CLOUDFLARE_R2_BUCKET_NAME=devstash-files
CLOUDFLARE_R2_PUBLIC_URL=
```

`.env.example`에는 실제 값을 넣지 않는다.

```env
CLOUDFLARE_R2_SECRET_ACCESS_KEY=
```

API token 권한:

```text
Object Read and Write
Specific bucket only
```

## 요약
- File/image upload를 위해 Cloudflare R2 bucket을 만든다.
- Public development URL을 활성화해 uploaded asset에 접근할 URL을 확보한다.
- Account ID, access key, secret key, bucket name, public URL을 env vars로 관리한다.
- `.env.example`에는 변수명만 넣고 실제 secret은 비워 둔다.
- Vercel에도 같은 env vars를 등록하고 redeploy한다.
