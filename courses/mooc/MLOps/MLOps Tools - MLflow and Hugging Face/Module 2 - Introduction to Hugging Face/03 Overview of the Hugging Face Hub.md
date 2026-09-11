# Overview of the Hugging Face Hub

## 개요
- Hugging Face Hub의 **"New" 버튼**으로 실제 Model/Dataset/Space를 생성해보며 Hub의 3대 리포지토리 유형과 조직(Organizations) 개념까지 살펴보는 5분 개괄 영상.

## 내용

### Hub의 "New" 메뉴 — 3가지 생성 옵션
1. **Model** — 사실상 하나의 리포지토리. 이름, 소유자(개인 또는 조직), **라이선스**(예: MIT), 공개/비공개 여부를 설정해 생성. GitHub에 익숙하다면 매우 친숙한 흐름 — Hugging Face CLI로도 동일하게 생성 가능.
2. **Dataset** — 모델과 동일한 인터페이스로 생성, 커맨드라인 도구로도 가능.
3. **Space** — 자신의 애플리케이션을 호스팅된 형태로 시연할 수 있는 곳. **Streamlit, Gradio, Static** 세 가지 옵션 중 선택 — 인터랙티브하게 애플리케이션을 시연하고 싶을 때 사용.

### 모든 리포지토리는 Git 기반
- 모델과 데이터셋 모두 **실제로는 Git 리포지토리**이며, PR(pull request)과 변경 이력, 로컬 클론까지 가능.
- 대용량 파일 때문에 **Git LFS(Large File Storage)**가 필요 — 최신 Git CLI에는 기본 포함되어 있을 수 있지만, 없다면 `git lfs install` 후 클론.

### 조직(Organizations)
- 팀이나 회사 단위로 협업하려면 GitHub의 조직(Organization)과 유사한 개념으로 **Hugging Face Organization**을 만들거나 가입.
- 예시로 **Google이 소유한 조직**의 프로젝트를 살펴봄 — 그 조직에 협업하려면 Google 측에서 접근 권한을 부여해야 기여 가능.

## 예시
```bash
# Git LFS 설치 및 모델/데이터셋 리포지토리 클론
git lfs install
git clone https://huggingface.co/<owner>/<model-name>
```

## 요약
- Hugging Face Hub는 **Model/Dataset/Space**라는 세 가지 리포지토리 유형(모두 Git 기반, LFS 필요)과 **Organizations**(팀 협업 단위)로 구성되며, GitHub의 워크플로(생성, 클론, PR)와 매우 유사한 경험을 제공한다.
- Space는 특히 **Streamlit/Gradio/Static** 중 선택해 인터랙티브한 데모 앱을 호스팅할 수 있다는 점에서, 다음 실습들에서 다룰 실전 배포와 직결된다.
