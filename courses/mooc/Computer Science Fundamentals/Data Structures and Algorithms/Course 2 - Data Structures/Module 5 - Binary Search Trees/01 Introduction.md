# Introduction

## 개요
- 새로운 데이터 구조 주제인 이진 탐색 트리(binary search tree)를 시작하며, 이 구조가 풀어야 할 문제(local search problem)와 기존 데이터 구조가 왜 부족한지를 소개한다.

## 내용
### Local Search Problem
- 예시: 사전에서 특정 문자열로 시작하는 단어 찾기, 특정 기간에 보낸/받은 이메일 찾기, 키가 나와 가장 가까운 사람 찾기.
- 이런 문제들은 원소마다 선형 순서를 갖는 키(key)가 있고, 데이터 구조가 다음 연산을 지원해야 하는 local search problem이다.
  - **Range Search**: 키가 x와 y 사이인 모든 원소를 반환.
  - **Nearest Neighbors**: 키 z가 주어졌을 때 z의 양옆에서 가장 가까운 원소를 반환.
- 예: {1, 4, 6, 7, 10, 14}에서 Range Search(5, 12) → 6, 7, 10 반환. Nearest Neighbors(3) → 1, 4 반환.
- 동적(dynamic)이어야 하므로 다음 연산도 필요하다.
  - **Insert(x)**: 키 x를 가진 새 원소 추가.
  - **Delete(x)**: 키 x를 가진 원소 삭제.

### 기존 데이터 구조의 한계
- **해시 테이블(hash table)**: Insert/Delete는 O(1)이지만 Range Search나 Nearest Neighbors는 사실상 불가능하다. 특정 원소가 있는지만 확인 가능.
- **배열(array)**: Range Search·Nearest Neighbors는 O(n) (전체 스캔). Insert/Delete는 확장 가능한 배열이라면 O(1) (끝에 추가, 마지막 원소로 빈칸 채우기).
- **정렬된 배열(sorted array)**: 이진 탐색(binary search)이 가능해 Range Search와 Nearest Neighbors가 O(log n). 하지만 Insert/Delete는 정렬 순서를 유지하기 위해 나머지 원소를 한 칸씩 밀어야 해서 O(n).
- **연결 리스트(linked list)**: Insert/Delete는 O(1) (doubly linked list 기준)이지만, 정렬되어 있어도 중간으로 바로 점프할 수 없어 이진 탐색이 불가능하므로 Range Search·Nearest Neighbors는 O(n).

## 요약
- 지금까지 배운 데이터 구조 중 어느 것도 탐색(search)과 갱신(update)을 동시에 빠르게 지원하지 못한다.
- 정렬된 배열이 탐색은 빠르지만 갱신이 느린 이유(순서 유지 필요)가 다음 강의에서 다룰 새로운 구조의 출발점이 된다.
