# Terraform Modules

## 개요
- Terraform Module의 정의, 구조, 종류(Root/Child/Published), 이점을 설명.

## 내용
### Terraform Module이란
- 리소스를 한 번 정의해 여러 프로젝트에서 커스터마이징 옵션과 함께 재사용할 수 있는 인프라 코드 패키지.
- 관련 리소스를 그룹화한 재사용 단위 — 코드를 중복 작성하지 않고 한 번 정의해 여러 프로젝트/환경에서 재사용.
- `.tf`/`.tf.json` 파일들을 하나의 디렉터리에 모아 놓은 것.
- 파라미터화(커스텀 입력 변수), 출력값 공유, 복잡한 설정의 조합(Composition)을 지원해 복잡도를 줄인다.

### 모듈 폴더 구조

```
modules/
  s3/          (또는 vpc, dynamodb, sql 등)
    main.tf       # 핵심 로직·주요 리소스 설정
    variables.tf  # 커스터마이징용 입력 변수
    outputs.tf    # 리소스 정보를 내보내는 출력값
```

### 모듈 종류
1. **Root Module** — 모든 Terraform 설정에 기본으로 존재하는 모듈. Terraform을 실행하는 현재 작업 디렉터리에 있는 모든 `.tf` 파일이 여기 속함.
2. **Child Module** — 다른 모듈 안에서 호출되는 모듈. 인프라를 더 작고 관리하기 쉬운 단위로 나눠 복잡한 인프라를 단순화하고 재사용을 돕는다.
3. **Published Module** — Terraform Registry(공개/비공개)를 통해 공유되는 버전 관리된 모듈. 명명 규칙을 따르며 다른 사람이 만든 모듈을 가져와 쓸 수 있다(예: EC2 생성 모듈을 만들어 동료와 공유하면, 동료는 Terraform Registry에서 이를 가져와 재사용).

### 이점
1. **재사용성(Reusability)** — 인프라를 한 번 정의해 여러 프로젝트에서 재사용, 중복 노력 감소
2. **유지보수성(Maintainability)** — 인프라 로직을 모듈에 중앙화 — 로직을 한 곳에서만 수정하면 되고, 여러 프로젝트에 흩어져 있으면 각각 수정해야 하는 번거로움을 피함
3. **일관성(Consistency)** — dev/test/prod 등 모든 환경에서 동일한 패턴·네이밍·설정이 적용되도록 보장

## 요약
- Terraform Module은 main.tf/variables.tf/outputs.tf로 구성된 재사용 가능한 인프라 코드 단위이며, Root(기본)/Child(호출되는 하위 모듈)/Published(Registry로 공유)로 나뉘어 재사용성·유지보수성·일관성을 크게 향상시킨다.
