# Implementing File and Image Uploads

## 개요
- Cloudflare R2 설정을 바탕으로 file/image item upload 기능을 구현한다.
- R2 upload API route, download proxy route, drag-and-drop upload component, DB metadata 저장, delete 시 R2 object 삭제를 연결한다.
- File은 다운로드 가능하게, image는 preview/display가 가능하게 만든다.

## 내용

### Feature scope
이번 기능은 비교적 큰 feature다.

Spec file:

```text
file-image-spec.md
```

주요 요구사항:
- R2 upload API route 생성
- R2 interaction utility 작성
- file upload component 생성
- create item modal에서 file/image 선택 시 upload UI 표시
- item 삭제 시 R2 object도 삭제
- download proxy API route 생성
- drawer에 download button 추가
- upload progress 표시
- image preview 표시
- file info 표시

### R2와 S3-compatible SDK
Cloudflare R2는 S3-compatible API를 제공하므로 AWS SDK의 S3 client를 사용한다.

설치 package:

```text
@aws-sdk/client-s3
```

R2 전용 package가 아니라 S3 client를 사용하는 이유는 R2가 S3 호환 API를 제공하기 때문이다.

### R2 utility
R2 관련 로직은 `src/lib/r2.ts`에 모은다.

역할:
- environment variables 읽기
- S3 client 초기화
- file constraints 정의
- allowed MIME types 정의
- file validation
- unique file key 생성
- R2 upload
- R2 delete
- file size formatting

필요한 env vars:

```env
CLOUDFLARE_R2_ACCOUNT_ID=
CLOUDFLARE_R2_ACCESS_KEY_ID=
CLOUDFLARE_R2_SECRET_ACCESS_KEY=
CLOUDFLARE_R2_BUCKET_NAME=
CLOUDFLARE_R2_PUBLIC_URL=
```

### File constraints
Spec에서는 upload 제한을 명확히 둔다.

제한:
- image: 최대 5MB
- file: 최대 10MB

허용 image:
- 일반적인 image MIME types

허용 file:
- PDF
- text/config/data files
- JSON
- YAML
- 기타 문서/설정 파일

강사는 JavaScript, Python 같은 code file upload는 의도적으로 제한했다.

이유:
- code는 file upload보다 snippet으로 저장하는 것이 DevStash의 목적에 맞음
- 큰 code file 저장소가 아니라 빠르게 접근 가능한 snippet hub를 지향함

### Upload API route
File/image를 업로드하는 API route를 만든다.

역할:
1. session/user 확인
2. `formData()`로 uploaded file 읽기
3. item type이 `file` 또는 `image`인지 확인
4. file size/MIME type validation
5. file을 buffer로 변환
6. R2에 upload
7. upload 결과 반환

DB 저장은 upload route에서 직접 하지 않고, 기존 create item flow에서 `lib/db/items.ts`를 통해 처리한다.

### Download proxy route
File download는 R2 public URL을 직접 열기보다 download proxy route를 사용한다.

목적:
- user ownership 확인
- CORS 문제 회피
- 다운로드용 response headers 설정
- 일반 웹사이트 다운로드처럼 동작하게 함

처리 흐름:
1. request path에서 file path 확인
2. 현재 user session 확인
3. 해당 file item이 user 소유인지 검증
4. R2에서 file data fetch
5. filename 추출
6. `Content-Disposition` 등 download headers 설정
7. file response 반환

### File upload component
Drag-and-drop upload component를 만든다.

예:

```text
components/items/file-upload.tsx
```

State:
- dragging
- uploading
- upload progress
- selected file
- uploaded file data
- error

기능:
- drag and drop
- click to choose file
- upload progress 표시
- image preview 표시
- file name/size 표시

### New Item modal integration
`new-item-dialog`에서 item type이 `file` 또는 `image`일 때 file upload component를 표시한다.

동작:
- snippet/command: code editor
- prompt/note: markdown editor
- link: URL input
- file/image: file upload component

File/image 선택 시 실제 file을 업로드하지 않으면 validation error를 보여준다.

### DB create item 확장
`src/lib/db/items.ts`의 create item 관련 type과 function에 file metadata를 추가한다.

추가 field:

```text
fileUrl
fileName
fileSize
```

또한 item detail type에도 file field를 포함해 drawer에서 표시할 수 있게 한다.

### Server action schema 확장
`src/actions/items.ts`의 create item Zod schema에도 file 관련 field를 추가한다.

역할:
- file/image item에서 file metadata가 있는지 검증
- file/image가 아닌 type에서는 기존 flow 유지
- create item action이 DB query에 file metadata 전달

### Drawer download button
`item-drawer.tsx`에 file download button을 추가한다.

Download URL은 R2 public URL을 직접 쓰지 않고 download proxy를 향한다.

예:

```text
/api/download/{filePath}
```

이렇게 하면 browser CORS 문제를 줄이고, 접근 제어도 route에서 처리할 수 있다.

### Build와 TypeScript errors
이 feature는 생성되는 코드가 많아서 TypeScript error가 발생했다.

예:
- file upload component type issue
- create item type/test fixture에 file fields 누락

AI가 build error를 확인하고 수정한 뒤 다시 build를 실행했다.

결과:
- build pass
- existing tests update 후 pass

### 추가 테스트
처음에는 기존 tests만 수정되었다.

강사는 추가 test가 필요한지 물었고, AI가 `validateFile`, `formatFileSize` 같은 utility tests를 제안했다.

추가 test 대상:
- file size limit
- invalid extension/MIME type
- different byte size formatting

이런 테스트는 R2에 실제 업로드하지 않고도 validation logic을 확인할 수 있다.

### Manual file upload test
강사는 file item을 직접 생성해 테스트했다.

흐름:
1. Files page 이동
2. `New File` 클릭
3. file 선택
4. title/description/tags 입력
5. Create
6. item created toast 확인
7. Cloudflare R2 bucket에서 object 생성 확인

R2 bucket에는 unique id가 포함된 file key로 object가 저장된다.

### Download bug
처음 download를 눌렀을 때 `403 Forbidden`이 발생했다.

원인:
- download handler가 file path만 넘겨야 하는데 full public URL을 넘김
- `/api/download/https://...` 형태가 되어 route가 잘못 처리됨

강사는 다음처럼 지적했다.

```text
The download handler is passing the full URL instead of just the path.
```

수정:
- full URL에서 path만 추출
- download route가 path를 올바르게 재구성하도록 조정

수정 후 download가 정상 동작했다.

### Delete test
File item을 삭제하면 database item만 삭제되는 것이 아니라 R2 object도 삭제되어야 한다.

테스트:
1. File item delete
2. UI에서 card 제거 확인
3. Cloudflare R2 bucket refresh
4. object가 사라졌는지 확인

결과:
- R2 object도 함께 삭제됨

### Image upload test
마지막으로 image item도 테스트했다.

흐름:
1. Images page 이동
2. `New Image` 클릭
3. image 선택
4. preview 표시 확인
5. title 입력
6. create
7. image item display 확인

강사는 upload 자체는 동작하지만, file/image list display는 나중에 개선하고 싶다고 말했다.

개선 아이디어:
- files page는 Google Drive/Dropbox처럼 row layout
- file name, size, date를 명확히 표시
- images page는 actual image grid로 표시

### Feature complete
기능이 크기 때문에 review나 추가 test를 더 할 수도 있지만, 강사는 manual test와 build/test 통과 후 `/feature complete`를 실행했다.

이후 main에 merge/push된다.

## 예시

R2 utility 역할:

```ts
validateFile(file, type);
uploadToR2(fileBuffer, key, contentType);
deleteFromR2(fileUrl);
formatFileSize(bytes);
```

Upload flow:

```text
New File/Image -> Select file -> Upload API -> R2 -> file metadata -> create item
```

Download flow:

```text
Download button -> /api/download/:path -> auth check -> R2 fetch -> file response
```

File metadata:

```ts
{
  fileUrl: string;
  fileName: string;
  fileSize: number;
}
```

## 요약
- Cloudflare R2와 AWS S3 client를 사용해 file/image upload를 구현했다.
- R2 관련 로직은 `src/lib/r2.ts`에 모으고, DB metadata 저장은 기존 `lib/db/items.ts` 흐름을 확장했다.
- File/image item 생성 시 drag-and-drop upload component를 사용한다.
- Download는 proxy API route를 통해 처리해 CORS와 접근 제어 문제를 줄인다.
- Item 삭제 시 R2 object도 함께 삭제된다.
- 다음 개선 대상은 file/image list UI를 type에 맞게 더 보기 좋게 다듬는 것이다.
