# Themes & Palettes

## 개요
- Seaborn의 두 스타일링 도구: **테마(theme)**(`sns.set_theme`)와 **팔레트(palette)**(색 세트).
- 테마는 전체 기본값을, 팔레트는 색 구성을 바꿔 시각적 매력을 높인다.

## 내용

### 테마 — sns.set_theme()
- 한 번 호출하면 이후 모든 그래프에 적용(기본값 변경). 예: 흰 테두리 막대·어두운 배경·투명 경계선.
- **style** 인수로 선택: `sns.set_theme(style="white")` — Matplotlib 기본 룩으로(밀집 정보 전달에 적합).

### 팔레트 — palette 인수
- 플롯 함수에 `palette="이름"` 추가. 종류 많음(Practical Python for Data Science에서 이름 조회).
- **대소문자 구분**: `palette="blues"` 는 오류 → **"Blues"**(대문자). 오류 시 LLM으로 디버깅.
- 팔레트 예:
  - **순차(sequential)**: "Blues" — 강조 약함.
  - **발산(diverging)**: "RdYlGn_r"(초록→빨강) — 인사이트 강조.
  - **색맹 친화**: "plasma"(보라→노랑), "icefire"(파랑→주황).

## 예시

### 테마·팔레트
```python
sns.set_theme(style="white")   # 한 번, 전체 적용
sns.barplot(filter_df, x="state", y="interest rate", hue="grade",
            palette="RdYlGn_r")   # 팔레트 (대소문자 주의)
```

## 요약
- **sns.set_theme(style=)** 로 전체 기본 스타일을, **palette** 인수로 색 구성을 바꾼다.
- 팔레트 이름은 **대소문자 구분**이며, 발산 팔레트(RdYlGn_r)는 인사이트를 강조한다.
- 팔레트로 색을 수동 선택할 필요가 없다. 다음 강의는 분포 플롯(**박스플롯**)이다.
