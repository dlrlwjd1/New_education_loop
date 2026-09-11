# UpdateClasses Implementation

## 개요
- 앞서 설명한, 정렬된 doubled 부분 순환 이동에 새 클래스 번호를 매기는 `UpdateClasses` 절차를 구현한다.
- 입력: doubled 부분 순환 이동의 정렬 순서 `newOrder`, 현재(길이 L) 부분 순환 이동의 클래스 번호 `class`, 현재 길이 `L`.
- 문자열 `S` 자체는 입력으로 받지 않는다 — 필요 없기 때문이다.

## 내용

### 입력과 출력
- `newOrder`: doubled(길이 2L) 부분 순환 이동의 정렬된 순서(값은 문자열 내 위치).
- `class`: 길이 L 부분 순환 이동의 클래스 번호 배열(doubled 이동이 아닌 원래 길이의 것).
- `L`: 현재 부분 순환 이동의 길이.
- 문자열 길이 `n`은 `newOrder` 배열의 크기로부터 구한다(`newOrder`의 크기가 문자열 길이와 같으므로).
- 출력: `newClass` — 각 위치에서 시작하는 doubled 부분 순환 이동의 새 클래스 번호를 담은 크기 `n`의 배열.

### 절차 구성
1. `newClass`를 크기 `n`인 배열로 초기화한다.
2. 가장 작은 doubled 부분 순환 이동, 즉 `newOrder[0]`에서 시작하는 이동의 클래스 번호를 0으로 지정한다.
3. `i = 1`부터 `n-1`까지 오름차순으로 순회하며, 현재 이동과 바로 이전 이동을 비교해 클래스 번호를 매긴다.
   - 현재 이동의 시작 위치: `cur = newOrder[i]`
   - 이전 이동의 시작 위치: `prev = newOrder[i-1]`
   - 각 이동의 둘째 반쪽 시작 위치: `cur + L mod n`, `prev + L mod n`
   - 첫 반쪽 비교: `class[cur]`와 `class[prev]`
   - 둘째 반쪽 비교: `class[(cur + L) mod n]`와 `class[(prev + L) mod n]`
   - 첫 반쪽 또는 둘째 반쪽의 클래스 번호가 하나라도 다르면, 두 doubled 이동은 서로 다르므로 `newClass[cur] = newClass[prev] + 1`.
   - 둘 다 같으면 두 doubled 이동은 같으므로 `newClass[cur] = newClass[prev]`.
4. `newClass`를 반환한다.

### UpdateClasses 의사코드

```
UpdateClasses(newOrder, class, L):
    n = len(newOrder)
    newClass = array of size n
    newClass[newOrder[0]] = 0
    for i from 1 to n - 1:
        cur = newOrder[i]
        prev = newOrder[i-1]
        mid = (cur + L) mod n
        midPrev = (prev + L) mod n
        if class[cur] != class[prev] or class[mid] != class[midPrev]:
            newClass[cur] = newClass[prev] + 1
        else:
            newClass[cur] = newClass[prev]
    return newClass
```

- **Lemma**: UpdateClasses의 실행 시간은 선형(linear)이다. for 루프가 하나뿐이고 반복 횟수가 선형이며, 루프 내부는 모두 상수 시간이기 때문이다. 루프 밖의 초기화도 상수 또는 선형 시간이다.

## 요약
- `UpdateClasses`는 문자열 `S`를 직접 보지 않고, `newOrder`와 기존 `class` 배열만으로 doubled 부분 순환 이동의 새 클래스 번호를 매긴다.
- 각 이동을 이전 이동과 (첫 반쪽 클래스, 둘째 반쪽 클래스) 쌍으로 비교해 다르면 +1, 같으면 유지한다.
- 둘째 반쪽 위치는 `(시작위치 + L) mod n`으로 계산한다.
- 실행 시간: 선형 O(S).
