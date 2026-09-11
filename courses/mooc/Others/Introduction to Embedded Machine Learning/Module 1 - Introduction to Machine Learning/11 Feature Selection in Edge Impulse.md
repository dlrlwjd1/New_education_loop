# Feature Selection in Edge Impulse

## 개요

앞 강의의 이론(RMS, FFT/PSD)을 **Edge Impulse UI에서 클릭 몇 번으로 실행**하는 실습. FFT/PSD를 직접 계산할 필요 없이 Edge Impulse가 다 해준다는 것이 핵심.

## 내용

### 1. 원본 데이터 확인 — Data Acquisition

- 앞서 모은 샘플을 클릭해 raw 그래프를 확인. 좌우(left-right) 샘플은 **z축이 중력 때문에 약 10 m/s²로 유지**, y축은 0 부근, **x축만 좌우로 진동**하는 게 보인다.
- circle 샘플과 비교해서 클래스 간 차이를 눈으로 먼저 확인해본다.

### 2. 임펄스(Impulse) 설계 — ML 파이프라인 구성

**임펄스**는 Edge Impulse가 "머신러닝 파이프라인"을 부르는 용어다.

1. **Impulse Design** 페이지에서 첫 블록은 원본 데이터(윈도우 크기·스텝 증가량은 기본값 유지).
2. **Processing block(특징 추출 방식)**: 모션 데이터에는 Edge Impulse가 **Spectral Analysis(스펙트럼 분석)** 블록을 추천 — 클릭해서 추가.
3. **Learning block(모델)**: **Neural Network (Classification)** 블록 추가 — 신경망 자체는 다음 모듈에서 자세히 다루지만, 간단한 신경망이 이런 모션 데이터 분류에 잘 맞는다고 언급.
4. **Save Impulse**로 저장.

### 3. 스펙트럼 특징(Spectral Features) 설정

- Spectral Features 페이지에서 각종 계산 파라미터를 조정할 수 있지만, 지금은 **기본값 유지** → Save Parameters.
- 샘플을 하나 열어보면 지난 강의에서 본 것과 비슷한 그래프가 나온다. **Edge Impulse가 고주파 노이즈를 필터링**해줘서 원본보다 매끄럽게 보인다.
- **주파수 영역/파워 스펙트럼 그래프로 클래스별 특징을 눈으로 확인**:
  - **좌우(left-right)**: x축에서 1Hz 부근에 강한 에너지.
  - **상하(up-down)**: y축에서 1Hz 부근에 비슷한 에너지.
  - **원(circle)**: x축과 z축 모두에서 1Hz 부근 에너지 — 원을 그리려면 좌우+상하 움직임이 같이 필요하고 앞뒤 움직임은 없어서 **y축엔 에너지가 없다.**
  - **정지(idle)**: 어느 축에도 에너지가 없어야 정상.

### 4. 특징 생성 — Generate Features

- **Generate Features** 탭 → 버튼 클릭 → 1~2분 대기하면 모든 raw 샘플이 특징 세트로 변환된다.
- **Feature Explorer**에서 결과를 3D로 시각화 가능 — RMS 값만으로도 클래스 군집이 뚜렷이 분리되는 것을 확인할 수 있다(지난 강의 내용과 일치).
- **아쉬운 점**: 이 시점에는 개별 특징을 골라 쓸 수 없다 — **33개 특징을 전부** 써야 한다. 다만 33개면 스마트폰이나 마이크로컨트롤러에서 돌리기에 충분히 적은 수다.

### 5. Arduino 프로젝트에도 동일하게 반복

- Arduino로 수집한 프로젝트가 따로 있다면, 그쪽에도 **Spectral Analysis + Neural Network 블록을 똑같이 추가** → Save Impulse → Generate Features를 반복한다.
- 한 번 생성된 특징은 **Edge Impulse 서버에 배열로 저장**되므로, Processing block을 삭제하지 않는 한 다시 생성할 필요는 없다.

## 예시

원(circle) 샘플의 스펙트럼 그래프에서 x축과 z축에 1Hz 피크가 동시에 나타나고 y축은 평평한 것을 확인하는 것 — 이론(강의 10) → 실습(이 강의)으로 바로 이어지는 확인 지점이다.

## 요약

- Edge Impulse는 FFT/PSD 계산을 GUI 클릭만으로 처리해준다 — Spectral Analysis 블록 추가 → Generate Features가 전부다.
- "임펄스"는 원본 데이터 → 처리(특징 추출) → 학습(모델) 3단계로 구성된 파이프라인을 뜻하는 Edge Impulse 용어다.
- Feature Explorer로 특징이 클래스별로 잘 갈리는지 미리 시각적으로 확인할 수 있다 — 다음 단계는 이 33차원 특징으로 실제 모델을 학습시키는 것이다.
