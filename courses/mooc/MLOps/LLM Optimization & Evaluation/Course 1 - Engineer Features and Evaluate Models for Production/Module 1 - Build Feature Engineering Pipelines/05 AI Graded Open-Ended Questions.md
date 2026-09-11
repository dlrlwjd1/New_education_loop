# AI Graded Open-Ended Questions

## 개요
- 형식: 연습 과제 (Practice Assignment · 약 30분)
- 채점: **AI 채점(Graded by AI)** · 시도 횟수 무제한
- 성적: **강좌 성적에 반영되지 않는다** (연습용)

## 내용

과제 페이지가 명시하는 것은 이것뿐이다.

> 이것은 이해도를 점검하는 데 도움이 되는 **연습 과제**다. **강좌 성적에는 반영되지 않는다.**

- 무제한 재시도 가능
- **AI가 채점**하는 서술형(open-ended) 문항

## 상태

**문항 미확인.** 과제를 시작해야 문항이 노출되는 형식이라 본문을 가져올 수 없다. 임의로 문항을 만들지 않는다.

## 준비 — Module 1 점검

서술형이므로 다음을 **말로 설명할 수 있어야** 한다.

- `Pipeline`과 `ColumnTransformer`의 역할 차이 → [02](02%20The%20What%20and%20How%20of%20Scikit-learn%20Pipelines.md)
- `ColumnTransformer` 튜플의 세 요소(이름 / 변환기 / 컬럼)
- **`handle_unknown='ignore'`가 프로덕션에 왜 결정적인가** → [03](03%20How%20to%20Build%20a%20ColumnTransformer%20-%20Step-by-Step.md)
- **데이터 누출 방지 3원칙** — 분리 후 적합 / 전처리는 파이프라인 안에서만 / 불균형이면 층화 분리
- 파이프라인을 쓰는 이유를 "편리해서"가 아니라 **재현성**으로 설명할 수 있는가
- 희소 행렬이 섞일 때 `StandardScaler(with_mean=False)`를 쓰는 이유
