# File Upload with Cloudflare R2

> 원문 [file-image-spec.md](file-image-spec.md)의 한국어 번역본입니다.

## 개요(Overview)

Cloudflare R2 스토리지(storage)를 사용하여 파일 및 이미지 업로드 기능을 추가한다.

## 요구사항(Requirements)

- R2용 업로드 API 라우트(route) 생성
- prisma/db 함수는 lib/db/items.ts를 계속 사용
- 드래그 앤 드롭(drag-and-drop)을 지원하는 FileUpload 컴포넌트 생성
- 항목(item) 생성 모달을 파일/이미지 타입에 대해 FileUpload를 사용하도록 업데이트
- 항목이 삭제될 때 R2에서 파일 삭제
- 다운로드 프록시(proxy) API 라우트 생성(CORS 문제 방지)
- ItemDrawer에서 파일 타입에 대한 다운로드 버튼 추가
- 업로드 진행 표시기(progress indicator) 표시
- 이미지는 미리보기(preview)를, 파일은 파일 정보를 표시

## 파일 제약(File Constraints)

| Type   | Max Size | Extensions                                            |
| ------ | -------- | ----------------------------------------------------- |
| 이미지 | 5 MB     | `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.svg`      |
| 파일   | 10 MB    | `.pdf`, `.txt`, `.md`, `.json`, `.yaml`, `.yml`, `.xml`, `.csv`, `.toml`, `.ini` |

## MIME 타입(MIME Types)

**이미지:**
- `image/png`
- `image/jpeg`
- `image/gif`
- `image/webp`
- `image/svg+xml`

**파일:**
- `application/pdf`
- `text/plain`
- `text/markdown`
- `application/json`
- `application/x-yaml`, `text/yaml`
- `application/xml`, `text/xml`
- `text/csv`
- `application/toml`
- `text/plain` (`.ini`용)
