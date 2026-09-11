# Demo: Setting up CI/CD Pipeline with Jenkins and Docker - Part 3 (데모 — Jenkins·Docker CI/CD 파이프라인 3부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 6: CI/CD & Chaos Engineering

## 개요
- 3부: **Jenkins 컨테이너에 Docker CLI 준비 → 파이프라인 잡 생성·빌드 → 배포된 Flask 앱 검증**.

## 내용 · 예시 (절차)

### 8. Jenkins 컨테이너 안에서 업데이트 (Docker CLI 준비)
```bash
docker exec -it <container-id> bash    # Jenkins 컨테이너로 bash 진입
apt-get update -y                      # 컨테이너 패키지 업데이트
exit                                   # 컨테이너 빠져나옴
```

### 9. Jenkins 파이프라인 잡 생성·빌드
- Jenkins UI → **New Item** → 이름 `simple job` → **Pipeline** 선택 → OK.
- **Script** 란에 워크북 파이프라인 스크립트 붙여넣기(형식 정리) → Save.
- **Build Now** 클릭 → 빌드 시작(약 1분).
  - 빌드 링크·**Console Output**에서 진행 상황 확인.
  - **success**로 완료되면 성공.

### 검증
```bash
# 브라우저: http://<EC2-public-IP>:5000  → Flask 앱 표시
curl http://<EC2-public-IP>:5000          # Jenkins가 배포한 앱 응답
curl http://<EC2-public-IP>:5000/health   # 헬스 체크 → "ok"
```
- Jenkins 파이프라인이 **GitHub 코드를 가져와 빌드·테스트·배포**하고, Docker 컨테이너로 실행된 Flask 앱이 응답함을 확인.

## 요약
- **`docker exec -it ... bash`**로 Jenkins 컨테이너에 들어가 CLI 준비.
- Jenkins **Pipeline 잡** 생성 후 스크립트 붙여넣고 **Build Now** → Console Output에서 success 확인.
- `:5000`(브라우저·curl)과 `/health`로 배포된 Flask 앱 검증 — GitHub→빌드→테스트→컨테이너 배포 전 과정을 파이프라인으로 완료.
