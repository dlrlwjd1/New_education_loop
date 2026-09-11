# Debugging Tools - React Native Debugger and Flipper

## 개요

- React Native Debugger, React Native DevTools와 Flipper의 용도를 비교한다.
- 컴포넌트 구조, props·state, 로그, 네트워크와 렌더링 시간을 조사하는 방법을 설명한다.

## 내용

### 도구별 강점

React Native Debugger는 React DevTools, 네트워크 검사와 Redux DevTools를 묶은 독립 도구로 소개된다. React Native DevTools는 컴포넌트 계층과 props·state, 콘솔과 Profiler를 조사하는 데 적합하다. Flipper는 네이티브 로그, 레이아웃, 네트워크, 충돌과 플러그인 기반 분석에 강점이 있다.

### Profiler 사용

기록을 시작한 뒤 앱에서 실제 동작을 수행하고 중지하면 어떤 컴포넌트가 왜 렌더링됐는지, commit과 컴포넌트별 시간이 얼마나 걸렸는지 확인할 수 있다. 짧은 commit을 숨기는 임계값도 설정할 수 있다.

## 예시

```tsx
console.warn('count is decreasing');
console.error('request failed', error);
```

Profiler에서는 기록 중 상태를 변경한 뒤 다음을 확인한다.

- 렌더링된 컴포넌트
- mount/update 원인
- commit별 소요 시간
- 반복적으로 갱신된 컴포넌트

## 요약

- 컴포넌트 분석은 DevTools, 상태·네트워크는 Debugger, 네이티브 분석은 Flipper가 유용하다.
- 도구 하나에 한정하지 않고 문제 계층에 맞춰 선택한다.
- Profiler는 실제 상호작용을 재현하면서 기록한다.
