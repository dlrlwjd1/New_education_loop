# Demo: Correlations & Scatterplots in Spreadsheets

## 개요
- LendingTree 데이터로 두 수치 특성의 상관을 **산점도(추세선) + CORREL 함수**로 분석하는 데모.
- 상관은 **대칭(symmetric)** — 열 선택 순서 무관.

## 내용

### Paid Interest vs Installment
- **산점도 + 추세선**: 양의 기울기, 작은 값끼리·큰 값끼리 대응 → 양의 상관(중간~강).
- **`=CORREL(열1, 열2)`** ≈ **0.69**(중간~강한 양의 상관 경계). 순서 무관(대칭).

### Paid Interest vs Annual Income
- 산점도: 저이자·저소득에 밀집하나 넓게 분산, 멀리 떨어진 점도 있어 추세선에 느슨히 맞음 → **약한 양의 상관**.
- `=CORREL(...)` ≈ **0.20** → 약한 양의 상관. 소득↑ 시 이자↑ 경향이나 변동을 설명하는 다른 요인이 많아 소득으로 이자를 정확히 예측하긴 어려움.

### Annual Income vs Debt-to-Income
- **부채상환비율(debt-to-income)** = 부채/연소득. 낮을수록 상환 능력↑.
- `=CORREL(...)` ≈ **−0.177** → **약한 음의 상관**(고소득일수록 부채비율이 다소 낮은 경향, 관계는 약함).

## 예시

### CORREL 결과
| 특성 쌍 | r | 해석 |
|---------|-----|------|
| Paid Interest ↔ Installment | 0.69 | 중간~강 양 |
| Paid Interest ↔ Annual Income | 0.20 | 약한 양 |
| Annual Income ↔ Debt-to-Income | −0.177 | 약한 음 |

## 요약
- 상관은 **산점도(추세선)로 부호·강도를 눈으로**, **`=CORREL(열1,열2)`(대칭)** 으로 수치로 확인한다.
- LendingTree에서 Paid Interest↔Installment(0.69), ↔Income(0.20), Income↔부채비율(−0.177)을 계산했다.
- 이로써 레슨이 마무리되며, 다음 레슨은 **세그멘테이션(segmentation)** 이다.
