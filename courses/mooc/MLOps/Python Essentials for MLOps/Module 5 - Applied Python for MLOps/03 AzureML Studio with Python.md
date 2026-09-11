# AzureML Studio with Python

## 개요
- Azure ML Python SDK로 **워크스페이스(Workspace) 생성 → 컴퓨트 클러스터(compute cluster) 생성 → 확인 → 자원 삭제**까지 전체 흐름을 실습으로 보여준다. 특히 **비용 관리를 위해 끝나면 반드시 리소스를 정리(destroy)해야 한다**는 점을 강조한다.

## 내용

### 인증에 필요한 정보
- 서비스 프린시펄(service principal)을 만들었다면 `SUBSCRIPTION_ID`, `AZURE_SERVICE_PRINCIPAL_TENANT`, `PRINCIPAL_APPID`, `PRINCIPAL_PASSWORD` 4가지가 필요하다.
- 서비스 프린시펄 없이도 `SUBSCRIPTION_ID`만으로 동적 로그인 프롬프트를 통해 인증할 수 있다.
- GitHub Codespaces 같은 환경에서는 저장소 설정(Secrets)에 이 값들을 미리 등록해둘 수 있다.

### 워크스페이스 생성
- Azure ML core에서 필요한 클래스를 임포트하고 서비스 프린시펄로 인증한 뒤, **워크스페이스(Workspace)를 생성**한다 — 이때 StorageAccount, KeyVault, AppInsights 등 **여러 부속 리소스가 함께 배포**된다.
- 생성된 워크스페이스는 Azure 포털에서 직접 확인 가능하고, "Launch Studio"로 Azure ML Studio 웹 UI에 진입할 수 있다.

### 컴퓨트 클러스터 생성
- Python 코드로 **컴퓨트 클러스터**를 정의(예: `STANDARD_DS3_V2` VM 크기, `idle_seconds_before_scale_down` 설정)하고 `wait_for_completion=True`로 생성이 끝날 때까지 대기한다.
- **주의**: "컴퓨트 인스턴스(compute instance)"와 "컴퓨트 클러스터(compute cluster)"는 다른 개념 — Studio의 Compute 섹션에서 인스턴스 탭에는 아무것도 안 보여도, 클러스터 탭에는 방금 만든 것이 나타난다.

### 자원 정리 — 비용 관리의 핵심
- 탐색 작업이 끝나면 **반드시 워크스페이스와 리소스를 삭제(destroy)**해야 예상치 못한 과금을 피할 수 있다.
- 삭제에 걸리는 시간은 보통 몇 분이지만, 클라우드 제공자 쪽 이슈로 훨씬 오래 걸릴 수도 있다(예시에서는 90분 넘게 걸림 — 이례적인 경우).
- 삭제 후 Azure 포털에서 새로고침하면 해당 리소스 그룹이 404(존재하지 않음)로 뜨는 것으로 확인 가능.

## 예시
```python
from azureml.core.authentication import ServicePrincipalAuthentication
from azureml.core import Workspace
from azureml.core.compute import AmlCompute, ComputeTarget

auth = ServicePrincipalAuthentication(
    tenant_id=TENANT_ID, service_principal_id=APP_ID, service_principal_password=PASSWORD)

ws = Workspace.create(
    name="demo_try_azureml", subscription_id=SUBSCRIPTION_ID,
    resource_group="demo_try_azureml", location="eastus2", auth=auth)

compute_config = AmlCompute.provisioning_configuration(
    vm_size="STANDARD_DS3_V2", idle_seconds_before_scaledown=1200)
cpu_cluster = ComputeTarget.create(ws, "cpu-cluster", compute_config)
cpu_cluster.wait_for_completion(show_output=True)

# 탐색 작업 후 ...
ws.delete(delete_dependent_resources=True)   # 비용 방지를 위한 자원 정리
```

## 요약
- Azure ML Python SDK로 워크스페이스 생성 → 컴퓨트 클러스터 생성 → Studio에서 확인 → 삭제까지 프로그래밍 방식으로 전체를 다룰 수 있다.
- 탐색이 끝나면 반드시 워크스페이스/리소스를 삭제해 불필요한 과금을 방지해야 한다.
