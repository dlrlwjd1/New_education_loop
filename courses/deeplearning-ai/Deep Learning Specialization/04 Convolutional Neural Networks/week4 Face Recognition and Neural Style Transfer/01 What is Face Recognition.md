# 01 What is Face Recognition?

## 개요
- Week 4는 CNN의 특수 응용 두 가지: **얼굴 인식(face recognition)** 과 **뉴럴 스타일 트랜스퍼**.

---

## 내용

### 용어: Verification vs Recognition
- **Face verification (검증, 1:1)**: 입력 이미지 + 주장된 이름/ID → 그 사람이 맞는지 확인.
- **Face recognition (인식, 1:K)**: 입력 이미지 → K명 DB 중 누구인지(또는 없는지) 식별.

### recognition이 더 어려운 이유 ⭐
- verification 정확도 99%여도, K=100명 DB에서 인식하면 오류 기회가 100배 → 실질 오류가 커짐.
- 100명 DB에서 잘 작동하려면 verification 정확도가 **99.9% 이상** 필요할 수 있음.
- → 먼저 정확한 **verification 시스템을 building block**으로 만들고, 이를 recognition에 확장.

### 부가
- 데모엔 **liveness detection(살아있는 사람인지)** 도 포함 — 지도학습으로 구현 가능 (본 강의는 인식에 집중).

---

## 요약
- verification(1:1 확인) vs recognition(1:K 식별). recognition은 오류 기회가 K배라 훨씬 어려움.
- 정확한 verification을 먼저 만들어 recognition에 활용.

## 다음 주제
- 원샷 학습 (One Shot Learning)
