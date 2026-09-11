# Profiling and Debugging Performance Bottlenecks

## 개요

- 느린 렌더링, 불필요한 재렌더링, 큰 자산, 네트워크 지연과 메모리 누수를 대표 병목으로 설명한다.
- React Profiler와 목록 최적화 기법을 이용해 측정하고 개선한다.

## 내용

### 먼저 측정하기

React Profiler의 `onRender` 콜백은 컴포넌트 ID, mount/update 단계와 실제 렌더링 시간을 제공한다. React Native DevTools와 Flipper도 컴포넌트, 네트워크, 로그와 성능을 조사하는 데 사용한다.

### 목록 개선

항목 높이가 일정하면 `getItemLayout`으로 위치를 미리 계산해 스크롤 중 측정 비용을 줄일 수 있다. 목록 항목을 별도 컴포넌트로 분리하고 `React.memo`를 적용하면 props가 같은 행의 재렌더링을 피할 수 있다.

## 예시

```tsx
<Profiler
  id="ProductList"
  onRender={(id, phase, duration) =>
    console.log({ id, phase, duration })
  }
>
  <FlatList
    data={data}
    getItemLayout={(_, index) => ({
      length: 50,
      offset: 50 * index,
      index,
    })}
    renderItem={renderItem}
  />
</Profiler>
```

## 요약

- 추측보다 Profiler로 병목 위치와 렌더링 시간을 먼저 확인한다.
- 고정 높이 목록은 `getItemLayout`으로 측정 비용을 줄인다.
- 메모이제이션, 자산 최적화와 네트워크 개선을 측정 결과에 따라 적용한다.
