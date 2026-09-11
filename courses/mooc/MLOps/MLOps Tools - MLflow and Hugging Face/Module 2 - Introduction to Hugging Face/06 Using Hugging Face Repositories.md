# Using Hugging Face Repositories

## 개요
- `huggingface_hub` 라이브러리와 CLI로 **로그인 → 토큰 발급 → 리포지토리 생성 → 대용량 모델 파일 업로드(CLI/웹 UI 두 방식)**까지 전체 흐름을 실제로 진행하는 7분 실습.

## 내용

### 환경 설정 및 로그인
- 가상환경 생성·활성화 → `pip install huggingface_hub`.
- **`huggingface-cli login`** 실행 → 토큰이 필요하다는 안내 → 웹에서 새 토큰 생성.
- 토큰 생성 시 **"read"뿐 아니라 "write" 권한도 포함**해서 생성(업로드까지 하려면 write 필요) — 토큰은 임시 비밀번호 같은 개념이며, 필요 없어지면 삭제 가능.
- 발급받은 토큰을 터미널에 붙여넣기 → `~/.huggingface/token`에 저장되고 `git-credential-store`로 인증 완료.

### CLI로 리포지토리 생성
```bash
huggingface-cli repo create demo-onnx --type model
```
- 생성 확인 프롬프트(`Proceed?`)에 yes 응답 → `alfredodeza/demo-onnx` 리포지토리 생성 완료.
- 처음엔 모델 카드도 파일도 없는 빈 리포지토리.

### 대용량 모델 파일 업로드 — Git 방식
- 리포지토리를 로컬로 클론(`git clone`) → T5 대형 모델 파일을 디렉터리에 복사 → `git add` → `git push`.
- **push 시 재인증 필요** — 사용자명 + 비밀번호 대신 **발급받은 토큰을 비밀번호 자리에 붙여넣기**(커맨드라인 인증 시 흔히 겪는 문제로 언급).

### 대용량 모델 파일 업로드 — 웹 UI 방식
- Hugging Face 웹 UI에서 **파일 드래그 앤 드롭으로 직접 업로드** → 메인 브랜치에 바로 커밋.
- 실제로 **439MB짜리 T5 인코더 파일**을 업로드하는 과정을 시연 — 약 60MB/s 속도로 진행, 완료 후 **"파일이 Git LFS로 저장되어 있어 너무 커서 미리보기 불가"**라는 안내 확인.

### 모델 카드(Model Card) 작성
- 다른 사람이 모델을 쉽게 소비할 수 있게 하려면 **모델 카드**(사실상 `README.md`)에 사용법·설명·유용한 링크를 문서화해야 함.
- 예시로 **Stable Diffusion** 모델 페이지의 모델 카드를 살펴보며, 이것이 결국 마크다운 파일이라는 것을 확인.

## 예시
```bash
# 환경 설정 및 로그인
pip install huggingface_hub
huggingface-cli login   # 토큰 붙여넣기 (write 권한 포함)

# CLI로 모델 리포지토리 생성
huggingface-cli repo create demo-onnx --type model

# Git으로 대용량 모델 업로드
git clone https://huggingface.co/<username>/demo-onnx
cp t5_large_model.bin demo-onnx/
cd demo-onnx
git add .
git commit -m "Add T5 encoder model"
git push   # 비밀번호 자리에 Access Token 입력
```

## 요약
- Hugging Face 리포지토리 생성·업로드는 **CLI(`huggingface-cli repo create` + `git push`) 또는 웹 UI 드래그 앤 드롭** 두 가지 방식으로 가능하며, write 권한을 포함한 Access Token이 인증에 필수다.
- 대용량 모델 파일은 **Git LFS**로 저장되며, 다른 사람이 모델을 쉽게 활용하게 하려면 마크다운 기반 **모델 카드(README.md)**로 문서화하는 것이 중요하다.
