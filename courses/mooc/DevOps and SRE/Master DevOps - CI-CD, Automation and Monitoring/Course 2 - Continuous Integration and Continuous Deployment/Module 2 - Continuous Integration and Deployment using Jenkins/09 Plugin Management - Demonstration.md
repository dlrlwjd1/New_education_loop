# Plugin Management - Demonstration

## 개요
- Jenkins 대시보드의 **Manage Jenkins → Plugins** 화면에서 플러그인을 설치·확인하는 실습.

## 내용
### 플러그인 관리 화면 구조
- **Manage Jenkins** — 모든 Jenkins 설정을 관리하는 섹션(휴대폰의 "설정"과 유사)
- **Installed Plugins** — 이미 설치된 플러그인 목록 확인, X 버튼으로 제거 가능
- **Updates** — 업데이트가 필요한 플러그인 표시
- **Available Plugins** — 새 플러그인을 검색·설치

### 새 플러그인 설치 실습
1. Available Plugins에서 원하는 플러그인 검색
2. 예시로 설치한 플러그인:
   - **Slack Notification** — 알림용
   - **SonarQube Scanner** — 코드 품질 분석용
   - **Docker** — 파이프라인에 컨테이너 자동화 추가
3. 여러 플러그인을 동시에 선택 후 **Install** 클릭 → 다운로드 진행 상황 확인 가능
4. 설치 완료 후 **Installed Plugins**에서 정상 설치 여부 재확인

### 기타 기능
- **Advanced Settings** — 직접 개발한 커스텀 플러그인을 업로드해 Jenkins 서버에 배포 가능

## 요약
- Jenkins 플러그인은 Manage Jenkins → Plugins의 Available 탭에서 검색·선택해 설치하며, Installed/Updates 탭으로 현재 상태를 확인하고, Advanced Settings로 커스텀 플러그인도 업로드할 수 있다.
