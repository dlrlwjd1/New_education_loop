# Actions

## 개요
- **액션(actions)** 은 대시보드에 상호작용을 더한다 — **필터(Filter)·하이라이트(Highlight)·URL 이동(Go to URL)**.

## 내용

### 액션 종류
- **필터**: 다른 차트 선택으로 차트 동적 갱신.
- **하이라이트**: 여러 차트의 관련 데이터 강조(맥락 유지).
- **Go to URL**: 외부 웹사이트 링크.

### 필터 적용 범위
- **Use as Filter**(지도)로 필터 생성 시 개별 시각화만 영향 → **Options → Apply to Worksheets → All using this data source** 로 전체 적용.

### 하이라이트 vs 필터
- 필터는 데이터를 줄이고(다른 라인 제거), **하이라이트는 맥락 유지**하며 강조. **Dashboard → Actions → Add Action → Highlight**.
  - 이름·**소스 시트(클릭할 곳)**·Run Action on(Select/Hover)·**타깃 시트(변할 곳)** 설정.
  - 기존 필터 액션이 덮어쓰면 해당 필터에서 그 타깃 체크 해제.

### Go to URL
- **Add Action → Go to URL**. 소스 시트=지도, Run Action on=**Menu**(충돌 방지, Select면 클릭 시 새 탭+필터 혼란).
- URL: 기본 엔드포인트(wikipedia.org) + **Insert → Country**(동적 삽입). 링크 작동 검증.

### 저장
- **Publish**.

## 요약
- **액션**은 **필터·하이라이트·Go to URL** 로 상호작용을 더하며, 필터는 **Apply to Worksheets → All** 로 전체 적용한다.
- **하이라이트**는 맥락 유지 강조, **필터**는 데이터 축소이며, **Go to URL**(Menu·동적 삽입)로 외부 링크한다.
- 다음 강의는 대시보드 **게시**다.
