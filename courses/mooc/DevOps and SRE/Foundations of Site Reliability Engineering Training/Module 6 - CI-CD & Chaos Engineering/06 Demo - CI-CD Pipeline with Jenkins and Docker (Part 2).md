# Demo: Setting up CI/CD Pipeline with Jenkins and Docker - Part 2 (데모 — Jenkins·Docker CI/CD 파이프라인 2부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 6: CI/CD & Chaos Engineering

## 개요
- 2부: **GitHub 저장소·개인 액세스 토큰 생성 → 로컬 코드 push → EC2 보안 그룹 인바운드 규칙 → Jenkins 웹 UI 초기 설정**.

## 내용 · 예시 (절차)

### 4. GitHub 저장소·토큰
- GitHub에서 **New repo** → `python_flask_test` (Public, README 포함) 생성 → HTTPS URL 복사(메모).
- **Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token (classic)**:
  - 이름 예: "our demo", 만료 30일, 스코프: **delete:packages, write:packages, workflow**.
  - 생성된 **토큰을 반드시 복사·저장**(push 시 비밀번호로 사용).

### 5. 로컬 → GitHub push
```bash
sudo yum install -y git
git init                                   # 저장소 초기화
git add .                                  # 모든 파일 스테이징 (. 앞 공백 주의)
git branch -m main                         # main 브랜치 생성
git commit -m "initial Flask app"          # 커밋
git remote add origin <HTTPS-repo-url>     # 원격 연결
git push -u origin main                    # push
# Username: GitHub 사용자명 / Password: (실제 비번 아님) 위에서 만든 토큰
```
> GitHub는 비밀번호 대신 **토큰 인증** → password 프롬프트에 토큰 붙여넣기.

### 6. EC2 보안 그룹 (인바운드 규칙)
- 인스턴스 → **Security 탭 → 보안 그룹 → Edit inbound rules**.
- 데모는 워크북에 맞춰 **All traffic / All IPs** 허용 후 저장 (실무는 필요한 포트만 열 것).

### 7. Jenkins 웹 UI 초기 설정
```bash
# 초기 관리자 비밀번호 확인 (컨테이너 내부 파일)
docker exec <jenkins> cat /var/jenkins_home/secrets/initialAdminPassword
```
- 브라우저에서 `http://<EC2-public-IP>:8080` 접속 → 위 비밀번호 입력.
- **Install suggested plugins** 선택 → 관리자 계정(사용자명/비번/이메일) 생성 → Jenkins URL(8080) 확인 → **Save and Finish → Start using Jenkins**.

## 요약
- GitHub **repo + 클래식 토큰**(packages·workflow 스코프) 생성.
- `git init → add → branch -m main → commit → remote add → push`(비번=토큰)로 코드 업로드.
- EC2 **보안 그룹 인바운드** 개방 후 `:8080`에서 Jenkins 초기 설정(비밀번호·플러그인·관리자 계정). (다음: Docker CLI 설치 + 파이프라인 — Part 3)
