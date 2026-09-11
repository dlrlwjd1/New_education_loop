# Installing Azure Command-Line Interface (CLI)

## 개요
- MLOps에서 자동화(automation)를 구축하려면 CLI 설치·사용·인증법을 아는 것이 중요하다는 전제하에, Azure CLI(`az`)를 설치하고 확장(extension)을 추가하고 인증하는 법, 그리고 Azure ML Python SDK를 가상환경에 설치하는 법을 다룬다.

## 내용

### Azure CLI 설치의 유연성
- Azure CLI는 Windows(MSI 설치 프로그램 포함), macOS, Linux 등 **다양한 시스템에 설치 가능**해서, GitHub Actions·Jenkins·CircleCI 등 어떤 CI/CD 시스템에서도 유연하게 쓸 수 있다.
- 설치 확인: `az --version`으로 버전과 업데이트 가능 여부 확인.

### 확장(Extension) 설치 — `az extension`
- `az extension list`로 설치된 확장 목록 확인.
- `az extension add --name ml -y`로 **ML 확장**을 설치하면 Azure Machine Learning Studio와 연동할 수 있게 된다.
- `az ml --help`로 온라인 엔드포인트, 워크스페이스, 배치 배포 등 Azure ML 관련 명령을 확인 가능.

### 인증 — `az login`
- `az login`은 브라우저를 띄워 **대화형(interactive) 인증**을 진행한다.
- 인증 후 계정 정보는 JSON으로 출력되는데(테넌트, 클라우드 이름 등), **민감 정보이므로 공유 시 주의**해야 한다.
- `az account list --all --output table`로 사용 가능한 계정/구독을 표 형태로 확인 가능.

### Azure ML Python SDK 설치
- 항상 그렇듯 **가상환경을 먼저 만들고 활성화**: `python -m venv .venv` → 활성화.
- `pip install azureml-core`로 Azure ML Python SDK를 설치 — 이걸로 Studio·CLI·Python SDK 간에 동일한 기능을 쓸 수 있게 된다.
- 설치 후 `import azureml`로 정상 임포트되는지, 그리고 그 모듈이 실제로 가상환경에서 오는지 확인.

## 예시
```bash
az --version
az extension list
az extension add --name ml -y
az ml --help

az login
az account list --all --output table

python -m venv .venv
source .venv/bin/activate
pip install azureml-core
python -c "import azureml; print(azureml.__file__)"
```

## 요약
- Azure CLI(`az`)는 다양한 시스템에 설치 가능하며, `az extension add --name ml`로 ML 관련 명령을 추가하고 `az login`으로 인증한다.
- Azure ML Python SDK(`azureml-core`)는 항상 가상환경에 설치해, CLI·Studio·Python 코드 간 일관된 방식으로 Azure ML 리소스를 다룰 수 있게 한다.
