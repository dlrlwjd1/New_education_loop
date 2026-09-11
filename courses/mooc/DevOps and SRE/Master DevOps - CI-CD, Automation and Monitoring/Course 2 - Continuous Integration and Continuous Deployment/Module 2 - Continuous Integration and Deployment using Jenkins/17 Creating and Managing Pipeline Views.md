# Creating and Managing Pipeline Views

## 개요
- Jenkins의 Build Pipeline View를 생성·관리하는 방법과 파이프라인 상태를 나타내는 색상 코드를 설명.

## 내용
### Pipeline View 생성
1. 대시보드에서 **+** 버튼 클릭
2. 파이프라인의 시작점이 될 **초기 Job** 선택
3. View 이름 지정, View 타입 선택(**Build Pipeline View**, List View, My View 등)
4. Display 옵션 설정 — 빌드 개수, 헤더, 커스텀 헤더, 새로고침 주기, build 곡선 등

### Pipeline View 관리
- 여러 Job이 **"Build after another project"** 트리거로 서로 연결되어 파이프라인 형태로 표시됨
- **Run** 버튼 — 전체 파이프라인의 모든 Job을 순서대로 자동 트리거
- **History** — 이전 빌드 이력 조회
- **Configure** — 특정 Job의 설정 페이지로 이동
- **Add Step** — 파이프라인에 새 단계 추가
- **Delete** — 뷰/파이프라인 삭제
- **Manage** — 뷰 설정 편집

### 파이프라인 상태 색상
- **노란색** — 진행 중(In Progress)
- **파란색** — 대기 중(Pending)
- **초록색** — 성공적으로 실행 완료(Success)
- **빨간색** — 실패(Failed)

## 요약
- Build Pipeline View는 여러 Job을 "Build after another project" 트리거로 연결해 하나의 시각적 파이프라인으로 보여주며, 각 단계는 노랑(진행중)/파랑(대기)/초록(성공)/빨강(실패) 색상으로 상태를 직관적으로 표시한다.
