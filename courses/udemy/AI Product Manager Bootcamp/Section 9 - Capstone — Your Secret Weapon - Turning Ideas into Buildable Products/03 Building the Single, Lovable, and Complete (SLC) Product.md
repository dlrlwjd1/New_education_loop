# Building the Single, Lovable, and Complete (SLC) Product

## 개요
- 상세 작업 목록을 한 항목씩 구현하고 로컬·배포·데이터 계층을 함께 검증한다.
- 원본 강의: https://www.udemy.com/course/ai-product-manager-bootcamp/learn/lecture/53244195

## 내용
### 구현 루프
- Claude Code에 `task 1.1을 구현하라`처럼 한 하위 작업만 맡긴다.
- 로컬 개발 서버에서 결과를 확인하고 부모 작업 단위로 커밋·푸시한다.
- Vercel 빌드 오류는 로그를 복사해 원인을 수정한 뒤 다시 배포한다.

```bash
npm run dev
```

### 실제 점검
- 회의 정보 입력, 규정 체크리스트, 회의록 생성, 기록 화면과 Supabase 행을 확인한다.
- 필드 검증, PDF·문서 내보내기, 저장된 회의록 본문 등 작동하지 않거나 빠진 부분을 발견했다.
- 초기 결과는 완성품이 아니라 반복 가능한 통합 POC로 평가한다.

## 예시
- `npm run dev`로 한 하위 작업을 로컬 검증하고, 커밋·배포 뒤 Vercel 로그와 Supabase 저장 행까지 확인한다.

## 요약
- 작은 작업 → 로컬 검증 → 커밋 → 배포 검증 순서를 반복한다.
- 화면이 보인다는 이유로 완료하지 말고 데이터 저장과 내보내기까지 실제로 시험한다.
