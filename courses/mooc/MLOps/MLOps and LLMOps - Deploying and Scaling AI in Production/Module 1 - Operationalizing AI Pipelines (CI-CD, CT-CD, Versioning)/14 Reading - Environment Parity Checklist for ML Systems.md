# "Environment Parity Checklist for ML Systems"

## 개요
- 앞선 3개 영상([11 Why ML Environments Drift](11%20Why%20ML%20Environments%20Drift.md), [12 Reproducibility with Docker, Conda, Lockfiles, and Hashes](12%20Reproducibility%20with%20Docker%2C%20Conda%2C%20Lockfiles%2C%20and%20Hashes.md), [13 Promoting Environments Across Dev to Staging to Production](13%20Promoting%20Environments%20Across%20Dev%20to%20Staging%20to%20Production.md))의 핵심을 요약하는 리딩(30분). 각 단락에 외부 사이트로 연결되는 "Read more" 링크 포함.

## 내용

### 환경 드리프트가 ML에서 특히 취약한 이유
- ML 환경은 수치 연산 패키지, GPU 드라이버, 프레임워크 버전, 시스템 수준 의존성 같은 상호 의존적인 복잡한 스택에 의존하므로 드리프트에 특히 취약함.
- 개발자의 노트북에서 완벽하게 학습된 모델도 의존성 버전 하나만 달라도 스테이징에서 다른 결과를 낼 수 있음.
- "내 컴퓨터에서는 되는데" 문제는 ML에서 더욱 증폭됨 — 수치 연산이 라이브러리 버전, 랜덤 시드, 하드웨어 특화 최적화에 민감하기 때문.

### 재현성을 위한 도구 조합
- **Docker**: OS 수준의 격리를 제공하고 전체 런타임 환경이 머신 간에 동일함을 보장.
- **Conda**: 정교한 충돌 해결(conflict resolution)로 Python 및 비-Python 의존성을 관리.
- **암호화 해시가 포함된 로그(lock) 파일**: 모든 패키지를 정확한 버전으로 고정.
- **모범 사례**: 최소한의 베이스 이미지(예: `miniconda3`)로 시작, `environment.yml` 파일에 고정된 버전으로 모든 의존성을 선언, 동일한 이미지를 여러 번 빌드해 출력을 비교함으로써 빌드가 결정론적인지 검증.

### Dev → Staging → Production 승격의 구조화된 파이프라인
- 각 단계가 CI 중에 빌드된 **동일한 컨테이너 이미지**를 사용하는 구조화된 파이프라인이 필요.
- **개발(dev)**: 빠른 실험을 허용.
- **스테이징(staging)**: 프로덕션 인프라를 그대로 반영(mirror)하고 전체 통합 테스트를 실행.
- **프로덕션(production)**: 엄격한 접근 통제와 모니터링을 강제.
- **환경 패리티 체크리스트(environment parity checklist)**는 어떤 승격이든 이루어지기 전에 다음이 일치하는지 검증해야 함: Python 버전, 라이브러리 버전, GPU 드라이버 호환성, 환경 변수, 데이터 접근 설정.

## 요약
- 이 리딩은 ML 환경이 복잡한 상호 의존적 스택으로 인해 드리프트에 특히 취약하다는 점, Docker·Conda·로그 파일의 조합으로 재현성을 달성하는 방법, 그리고 dev/staging/production 각 단계에서 동일한 이미지와 환경 패리티 체크리스트(Python·라이브러리 버전, GPU 드라이버, 환경 변수, 데이터 접근 설정 일치)를 사용해 승격을 구조화해야 한다는 앞선 3개 영상의 핵심을 재확인한다.
