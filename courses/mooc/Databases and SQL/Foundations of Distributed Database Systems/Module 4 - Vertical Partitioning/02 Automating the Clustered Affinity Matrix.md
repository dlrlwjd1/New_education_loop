# Automating the Clustered Affinity Matrix

## 개요

- 속성 친화도 행렬(attribute affinity matrix)의 열을 재배치해 함께 쓰이는 속성을 가까이 모으는 방법을 설명한다.
- Bond Energy Algorithm(BEA)이 각 새 열의 삽입 위치를 선택하는 흐름을 다룬다.

## 내용

### 친화도와 bond energy

행렬의 셀은 두 속성이 같은 질의에서 함께 사용되는 정도를 나타낸다. 전체 affinity measure는 각 셀과 인접한 셀의 결합 정도를 합산한다. 대칭 행렬이므로 가로 또는 세로 인접 관계만 계산해도 같은 비교 결과를 얻을 수 있다.

### 점진적 열 배치

처음 두 열을 놓은 뒤 다음 열을 맨 앞, 기존 열 사이, 맨 뒤에 각각 시험한다. 전체 bond energy가 가장 커지는 위치를 선택하고 모든 열이 배치될 때까지 반복한다. 마지막에 행 순서를 열 순서와 맞춰 clustered affinity matrix를 만든다.

## 예시

```text
현재 순서: A1, A2
새 열 A3 후보:

A3, A1, A2
A1, A3, A2
A1, A2, A3

각 후보의 인접 bond를 비교해 가장 큰 위치를 채택
```

## 요약

- affinity는 속성이 함께 조회되는 정도를 표현한다.
- BEA는 새 열을 모든 가능한 틈에 넣어 가장 강한 인접 관계를 선택한다.
- 결과 행렬에서 강한 block이 수직 fragment 후보가 된다.
