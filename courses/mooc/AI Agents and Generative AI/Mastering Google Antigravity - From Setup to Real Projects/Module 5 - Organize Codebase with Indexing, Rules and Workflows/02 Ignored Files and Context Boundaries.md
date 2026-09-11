# Manage Ignored Files and Context Boundaries

## 개요

- 불필요하거나 민감한 파일을 Agent 컨텍스트에서 제외한다.
- strict mode에서는 `.gitignore`를 컨텍스트 경계로 활용한다.

## 내용

build output, generated files, local environment 설정, machine-specific 폴더가 컨텍스트에 들어가면 응답 품질과 보안이 떨어질 수 있다. 저장소의 ignore 정책을 정리하고 strict mode가 이를 존중하도록 구성한다.

`.env`, 빌드 산출물, dependency 폴더 등은 프로젝트 필요에 따라 제외한다.

## 예시

```gitignore
node_modules/
dist/
.env
*.local
```

## 요약

- 깨끗한 컨텍스트는 정확도와 안전성을 함께 높인다.
- `.gitignore`가 민감 파일을 충분히 제외하는지 검토한다.
