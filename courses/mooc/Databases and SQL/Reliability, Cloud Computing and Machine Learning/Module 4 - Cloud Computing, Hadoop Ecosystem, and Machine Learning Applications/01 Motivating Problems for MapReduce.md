# Motivating Problems for MapReduce

## 개요

- MapReduce의 필요성을 보여주는 두 가지 동기 부여 문제(motivating problem)를 다룬다: 단어 세기(word count)와 웹 페이지 역링크 세기(who points to me).
- 두 문제 모두 중첩 루프(nested loop) 방식의 순차 알고리즘은 O(N×M) 수준의 연산이 필요해 매우 느리다.
- MapReduce는 map 단계와 reduce 단계를 병렬로 실행하고 중간에 정렬(sort)을 끼워 넣어 이를 크게 가속한다.

## 내용

### 동기 문제 1 — 단어 세기 (word count)

- 큰 문서 집합(corpus)에서 각 고유 단어가 전체적으로 몇 번 나오는지 세는 문제.
- 순차 알고리즘(중첩 루프):
  - 단어와 카운트를 원소로 갖는 word count 배열을 둔다.
  - 각 문서(외부 루프)의 각 단어(내부 루프)에 대해, 배열에서 단어를 찾으면 카운트를 1 증가시키고, 없으면 배열 크기를 1 늘려 새 단어를 삽입하고 카운트를 1로 설정한다.
- 복잡도: 문서당 평균 N개 단어, 문서 M개면 내부 루프 N회 × 외부 루프 M회 = **O(N×M)**.
  - 문서당 1,000단어(N=1,000), 문서 10⁹개면 약 **10¹²** 연산 → 매우 오래 걸림.
- 내부 루프는 문서마다 독립적이므로 병렬 실행이 가능하고, 마지막에 각 문서의 단어 카운트 배열을 병합(merge)하면 된다.

### 단어 세기의 MapReduce 관점

- **Map 단계**: 각 문서에 map 프로세스를 하나씩 할당해 문서별 단어 카운트를 병렬로 계산.
  - 중간 결과 예: 문서1 → (anteater, 3), (zoo, 2); 문서2 → (aardvark, 4), (zoo, 1); 문서 10⁹ → (aardvark, 2), (anteater, 1), (zoo, 3).
- **Sort 단계**: 중간 결과를 단어(key)로 정렬해 같은 단어를 묶는다.
  - 예: aardvark → (문서2: 4), (문서10⁹: 2); anteater → (문서1: 3), (문서10⁹: 1); …
- **Reduce 단계**: 각 단어 그룹의 카운트를 합산해 (단어, 전체 카운트) 리스트를 만든다.
- 알고리즘 요약:
  - map: 키-값 쌍을 입력받아, 텍스트의 각 단어마다 중간 키-값 쌍 (단어, 1)을 emit.
  - reduce: 각 단어 그룹의 값(1들)을 모두 더해 (단어, 총 카운트)를 emit.

### 단어 세기 속도 분석

- **Map 시간**: 총 연산 수는 O(N×M)로 동일하나 프로세스 수로 나뉘어, 병렬 프로세스가 많을수록 크게 줄어든다.
- **Sort 시간**: 중복 단어 수에 따라 정렬 대상이 N개에서 N×M개 사이. 정렬 시간은 대상 수 × log(대상 수), 즉 N log N에서 N×M log(N×M) 사이. 여전히 크지만 여러 머신에서 빠르게 처리 가능.
- **Reduce 시간**: 중복 단어 수에 의존하며, 병렬 reduce는 (N/프로세스 수)에서 (N×M/프로세스 수) 사이.
- 총 연산은 여전히 O(N×M)이지만 병렬 프로세스로 실질 시간이 크게 감소한다 — 이것이 MapReduce의 핵심이다.

### 동기 문제 2 — 웹 페이지 역링크 세기 (who points to me)

- 인터넷의 각 페이지에 대해 **다른 어떤 페이지들이 그 페이지를 가리키는지** 알아내는 문제. 개별 페이지는 누가 자신을 가리키는지 알 수 없어 모든 다른 페이지를 봐야 한다.
- 순차 알고리즘: target-source 리스트(대상 페이지, 그리고 그를 가리키는 소스)를 만든다.
  - 각 소스(외부 루프)의 각 대상 URL(내부 루프)에 대해, 대상이 리스트에 없으면 추가한다.
  - 내부 루프 N개(소스당 대상 수), 외부 루프 M개(소스 수).
- 복잡도: 페이지당 링크 10개(N=10), 웹 페이지 10⁹개면 O(N×M), 약 **10¹⁰** 연산.

### 역링크 세기의 MapReduce 관점

- 문서를 샤드(shard)로 나누고, 각 map 연산이 소스의 대상 링크를 찾는다.
  - 예: 문서1(URL1) → (targetA, URL1), (targetB, URL1); 문서2(URL2) → (targetA, URL2), (targetC, URL2).
- Sort로 대상 URL(key) 기준 정렬 후, reduce가 각 대상 URL별 소스 리스트를 만든다.
  - 대상 A를 가리키는 URL들을 모두 세어 그 페이지가 얼마나 인기 있는지(몇 페이지가 가리키는지) 계산.
- 알고리즘 요약:
  - map: 각 소스 URL의 텍스트에서 대상 URL마다 중간 키-값 쌍 (대상 URL, 소스 페이지)를 emit.
  - reduce: (대상 URL, 소스 리스트)를 받아 각 대상 URL의 소스 리스트를 만들어 (대상 URL, 소스 리스트)를 emit.
- 결과는 정렬된 (대상 URL, 소스 URL 리스트)로, 소스 리스트 길이를 세면 그 페이지를 가리키는 페이지 수를 알 수 있다. 선형 중첩 루프보다 빠르고 효율적이다.

## 예시

단어 세기 MapReduce 의사 알고리즘:

```text
map(key, document):
    for each word in document:
        emit(word, 1)          # 중간 키-값 쌍

reduce(word, counts):          # counts = [1, 1, 1, ...]
    total = sum(counts)
    emit(word, total)
```

역링크 세기 MapReduce 의사 알고리즘:

```text
map(sourceURL, text):
    for each targetURL in text:
        emit(targetURL, sourceURL)

reduce(targetURL, sources):
    emit(targetURL, sources)   # targetURL을 가리키는 소스 리스트
```

## 요약

- 단어 세기와 웹 역링크 세기 모두 순차 중첩 루프로는 O(N×M) 연산이 필요해 대규모에서 매우 느리다(각각 약 10¹², 10¹⁰ 연산).
- 두 문제 모두 내부 루프가 문서별로 독립적이라 병렬화가 가능하다.
- MapReduce는 map(병렬로 중간 키-값 쌍 emit) → sort(key로 정렬해 그룹화) → reduce(그룹별 집계) 세 단계로 처리한다.
- 총 연산 수는 O(N×M)로 동일하지만 map·reduce를 다수의 프로세스로 병렬 실행해 실질 처리 시간을 크게 줄이는 것이 MapReduce의 핵심이다.
