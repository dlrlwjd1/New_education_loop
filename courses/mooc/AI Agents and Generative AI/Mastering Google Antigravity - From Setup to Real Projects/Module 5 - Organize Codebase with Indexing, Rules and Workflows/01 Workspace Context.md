# Understand How Workspace Context Works

## 개요

- Agent의 기본 컨텍스트 경계는 현재 workspace다.
- 프로젝트별 대화와 파일을 분리해 혼선과 정보 노출을 줄인다.

## 내용

workspace는 Agent가 작업하는 프로젝트 폴더다. 기본적으로 현재 workspace 내부 파일만 접근하며 대화도 해당 공간에 연결된다. 여러 프로젝트를 하나의 거대한 컨텍스트로 취급하지 않는다.

더 엄격한 격리가 필요하면 strict mode를 활성화한다. 프로젝트마다 별도 workspace를 열고 민감도에 맞게 설정을 점검한다.

## 예시

```text
Workspace A → A의 파일·대화
Workspace B → B의 파일·대화
Strict mode → 경계 강화
```

## 요약

- 작업 전 올바른 workspace인지 확인한다.
- 보안 요구가 높으면 strict mode를 사용한다.
