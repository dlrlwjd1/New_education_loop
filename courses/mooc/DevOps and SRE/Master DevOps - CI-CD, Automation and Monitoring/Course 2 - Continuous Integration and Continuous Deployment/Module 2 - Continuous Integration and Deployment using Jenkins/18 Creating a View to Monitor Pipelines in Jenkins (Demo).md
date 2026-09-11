# Creating a View to Monitor Pipelines in Jenkins (Demo)

## 개요
- Build Pipeline Plugin을 설치하고, 서로 연결된 3개의 Freestyle Job을 하나의 파이프라인 뷰로 시각화하는 실습.

## 내용
### 1. Build Pipeline Plugin 설치
- **Manage Jenkins → Plugins → Available** → **Build Pipeline Plugin** 검색 후 설치
- Upstream/Downstream으로 연결된 Job들을 하나의 빌드 파이프라인 형태로 렌더링해준다.
- (Pipeline 프로젝트는 자체 Stage View가 있어 이 플러그인은 주로 **Freestyle 프로젝트**를 연결할 때 사용)

### 2. 독립적인 3개 Job 생성
- `1.compile` — Freestyle project, Execute Shell로 "compile the code"
- `2.test` — Freestyle project, Execute Shell로 "test the code"
- `3.build` — Freestyle project, Execute Shell로 빌드 단계

### 3. Job 간 트리거 연결 (Upstream/Downstream)
- Job 2 (`2.test`) → Configure → Build Triggers → **"Build after other projects are built"** → Job 1(`1.compile`) 지정 후 저장
- Job 3 (`3.build`) → 동일하게 Job 2를 지정
- 저장 후 각 Job 상세 페이지에서 Upstream/Downstream 프로젝트 관계가 표시됨

### 4. Pipeline View 생성
1. 대시보드 **+** → **Build Pipeline View** 선택, 이름 지정
2. **초기 Job(Initial Job)**으로 `1.compile` 지정 → 연결된 Job들이 자동으로 뒤이어 표시
3. 저장하면 파이프라인 뷰에 각 Job이 박스 형태로 표시됨

### 5. 파이프라인 실행·확인
- **Run** 클릭 → `1.compile`(초록색, 성공) → 새로고침 → `2.test` 실행 → `3.build`까지 순차 진행
- **History**로 이전 실행 이력 확인, **Configure**로 개별 Job 설정, **Add Step**으로 단계 추가, **Delete**로 뷰 삭제, **Manage**로 뷰 설정 편집

## 요약
- Build Pipeline Plugin을 설치한 뒤 "Build after other projects" 트리거로 여러 Freestyle Job을 Upstream/Downstream 관계로 연결하고, Build Pipeline View에서 초기 Job을 지정하면 전체 흐름을 하나의 시각적 파이프라인으로 실행·모니터링할 수 있다.
