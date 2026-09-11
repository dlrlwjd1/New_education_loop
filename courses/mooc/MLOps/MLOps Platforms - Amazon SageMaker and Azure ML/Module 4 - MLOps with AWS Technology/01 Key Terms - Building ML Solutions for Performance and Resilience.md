# Key Terms — Building Machine Learning Solutions for Performance, Availability, Scalability, Resilience and Fault

## 개요
- Lesson 1 핵심 용어 정리. Infrastructure as Code(IaC), CDK, 로깅, 회복탄력성, 확장성, 모니터링을 다룬다.

## 내용

| 용어 | 설명 |
|---|---|
| **Infrastructure as Code(IaC)** | 수동 프로세스 대신 코드로 인프라를 관리·프로비저닝하는 것. 버전 관리, 테스트, 인프라의 신뢰할 수 있는 재현이 가능해짐. |
| **CDK(Cloud Development Kit)** | 클라우드 인프라를 코드로 정의하고 IaC를 통해 프로비저닝하는 오픈소스 소프트웨어 개발 프레임워크. |
| **Logging(로깅)** | 애플리케이션의 이벤트와 런타임 정보를 기록하는 것. 문제 디버깅과 시스템 상태 모니터링에 활용되는 감사 추적(audit trail)을 만듦. |
| **Resiliency(회복탄력성)** | 장애로부터 회복해 계속 기능할 수 있는 시스템의 능력. 회복탄력적인 시스템은 이중화(redundancy), 자동 페일오버(automatic failover), 우아한 성능 저하(graceful degradation)를 활용. |
| **Scalability(확장성)** | 리소스를 추가해 증가한 부하를 처리할 수 있는 시스템의 능력. 기존 하드웨어에 성능을 더하는 수직 확장(vertical scaling), 인스턴스를 늘리는 수평 확장(horizontal scaling)이 있음. |
| **Monitoring(모니터링)** | CPU, 메모리, 디스크, 네트워크 사용량 등 시스템의 성능 통계를 수집·추적하는 것. 장애가 발생하기 전에 선제적 조치를 가능하게 함. |

### CDK에 대해 알아야 할 핵심 사항
- 콘솔이나 CLI 대신 프로그래밍 언어를 통한 인프라 프로비저닝을 가능하게 함.
- Python, JavaScript, Java, C# 등 여러 언어 지원.
- AWS 서비스와 통합되며 VPC, 보안 그룹, IAM 역할 같은 세부 사항을 처리.
- 인프라를 코드처럼 다룰 수 있음 — 소스 컨트롤에 커밋, 테스트, 배포, diff 확인 등.
- CloudFormation 템플릿보다 더 높은 수준의 추상화.

## 예시
```python
from aws_cdk import core
import aws_cdk.aws_s3 as s3

class S3Stack(core.Stack):

    def __init__(self, scope: core.Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        # Create S3 Bucket
        bucket = s3.Bucket(self,
                           "MyBucket",
                           versioned=True)
```

## 요약
- 이번 레슨은 CDK를 통한 Infrastructure as Code, 로깅을 통한 감사 추적, 회복탄력성(이중화·페일오버)과 확장성(수직/수평), 그리고 선제적 문제 대응을 위한 모니터링까지 프로덕션 ML 시스템의 성능·가용성·회복탄력성을 뒷받침하는 핵심 개념들을 다룬다.
