# Solving the Maximum Pairwise Product Programming Challenge: Improving the Naive Solution, Testing, Debugging

## 개요
- 최대 쌍별 곱(maximum pairwise product) 문제를 통해 순진한 해답(naive solution) 구현 → 디버깅 → 성능 개선의 과정을 실습한다.
- 정수 오버플로(integer overflow)와 시간 제한 초과(time limit exceeded)라는 두 가지 전형적인 실패 사례를 실제로 겪고 고친다.
- 빠른 해답을 만들었어도 여전히 버그가 남아있을 수 있음을 보여주며, 다음 강의의 스트레스 테스트(stress test)로 이어진다.

## 내용

### 문제 정의
- n개의 음이 아닌 정수(non-negative integer)로 이루어진 수열이 주어졌을 때, 그중 두 수를 곱해서 얻을 수 있는 최댓값을 구한다.
- 입력: 첫 줄에 n (2 ≤ n ≤ 2×10^5), 둘째 줄에 n개의 수열 원소 (각 원소는 10^5 이하의 음이 아닌 정수).
- 출력: 최대 쌍별 곱 하나.
- 샘플 1: 길이 3의 수열 `1, 2, 3` → 출력 `6` (2×3).
- 샘플 2: 길이 10의 수열 → 출력 `140` (10×14).

### 1차 시도: 순진한 해답(naive solution)
- `result`를 0으로 초기화한 뒤, `i < j`인 모든 쌍 (i, j)을 이중 반복문(nested loop)으로 순회하며 두 원소의 곱이 현재 `result`보다 크면 갱신한다.
- 모든 쌍을 검사하므로 정답이 나오는 것은 자명하게 옳다(correct).
- 로컬에서 작은 샘플들로는 정상 동작하는 것을 확인했지만, 채점 시스템 제출 시 테스트 3번(입력: 10^5와 90,000)에서 실패했다.

### 버그 1: 정수 오버플로(integer overflow)
- 두 수를 곱한 결과(약 90억)가 표준 `int` 타입 범위를 초과해 임의의 값이 출력된 것이 원인이다.
- 해결: 결과를 저장하는 변수와 반환 타입을 `long long`으로 바꾸고, 곱셈 시 피연산자 중 하나를 `long long`으로 캐스팅(cast)한다.
- 수정 후 로컬 테스트(10^5, 90,000)에서 정확히 9,000,000,000이 출력됨을 확인했다.

### 버그 2: 시간 제한 초과(time limit exceeded)
- 오버플로를 고친 뒤 다시 제출했으나 테스트 4번에서 시간 제한 초과가 발생했다.
- 원인 분석: 이중 반복문으로 모든 쌍을 검사하는 알고리즘은 약 n^2번의 연산을 수행한다. n = 10^5일 때 n^2 = 10^10로, 이는 10억(현대 컴퓨터가 1초에 처리 가능한 대략적인 기본 연산 수)을 훨씬 초과한다.
- 결론: 모든 쌍을 순회하지 않는 더 빠른 알고리즘이 필요하다.

### 개선된 해답: 두 최댓값만 찾기
- 힌트: 샘플 2에서 답 140은 수열 내 두 최댓값 14와 10의 곱이다. 다른 어떤 두 수의 곱도 이보다 작다.
- 아이디어: 모든 원소가 음이 아니므로, 최대 쌍별 곱을 구하려면 수열에서 가장 큰 두 수만 찾으면 된다.
- 구현(`MaxPairwiseProductFast`):
  1. 배열을 한 번 스캔하여 첫 번째 최댓값의 인덱스(`max_index`)를 찾는다.
  2. 배열을 다시 스캔하되 첫 번째 최댓값의 인덱스를 건너뛰며 두 번째 최댓값을 찾는다.
  3. 두 최댓값의 곱을 반환한다.
- 배열을 두 번만 스캔하므로 O(n) 시간에 동작하며, 10^5 크기의 0으로 채운 배열에서도 즉시 결과를 반환할 정도로 빠름을 확인했다.
- 그러나 이 해답도 논리적으로는 옳아 보이지만(가장 큰 두 수를 곱하므로), 채점 시스템에 제출하면 특정 테스트 케이스에서 오답(wrong answer)이 나온다. 원인 규명은 다음 강의(스트레스 테스트)에서 다룬다.

## 예시
```text
[문제]
입력: n, 그리고 n개의 음이 아닌 정수
출력: 두 원소를 곱해 얻을 수 있는 최댓값

샘플 1: n=3, 배열=[1,2,3] → 출력 6 (=2*3)
샘플 2: n=10, 배열=[7,5,14,2,8,8,10,1,2,3] → 출력 140 (=10*14)
```

```cpp
// 순진한 해답 (O(n^2), 오버플로 수정 후)
long long MaxPairwiseProduct(const vector<int>& numbers) {
    long long result = 0;
    for (int i = 0; i < numbers.size(); ++i)
        for (int j = i + 1; j < numbers.size(); ++j)
            result = max(result, (long long)numbers[i] * numbers[j]);
    return result;
}

// 빠른 해답 (O(n))
long long MaxPairwiseProductFast(const vector<int>& numbers) {
    int max_index1 = -1;
    for (int i = 0; i < numbers.size(); ++i)
        if (max_index1 == -1 || numbers[i] > numbers[max_index1])
            max_index1 = i;

    int max_index2 = -1;
    for (int j = 0; j < numbers.size(); ++j)
        if (j != max_index1 &&
            (max_index2 == -1 || numbers[j] > numbers[max_index2]))
            max_index2 = j;

    return (long long)numbers[max_index1] * numbers[max_index2];
}
```

## 요약
- 순진한 O(n^2) 해답은 정수 오버플로(long long 미사용)와 시간 제한 초과 두 가지 문제를 겪었다.
- n = 10^5일 때 O(n^2) ≈ 10^10 연산은 1초 내에 처리 불가능하므로 O(n) 알고리즘이 필요하다.
- 배열에서 최댓값 두 개만 찾아 곱하는 O(n) 해답으로 성능 문제는 해결했지만, 여전히 숨겨진 버그가 남아있어 다음 강의의 스트레스 테스트로 찾아내야 한다.
