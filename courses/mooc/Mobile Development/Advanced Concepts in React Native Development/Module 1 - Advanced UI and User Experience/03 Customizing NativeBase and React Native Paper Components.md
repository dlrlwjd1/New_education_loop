# Customizing NativeBase and React Native Paper Components

## 개요

- NativeBase와 React Native Paper의 테마와 컴포넌트 변형(variant)을 조정하는 방법을 다룬다.
- 강의 시연은 React Native Paper의 Provider, Card, Button, Text를 중심으로 진행한다.

## 내용

### 전역 테마

앱을 `PaperProvider`로 감싸면 색상·글꼴 등 테마 값을 하위 컴포넌트에 일관되게 전달할 수 있다. 이러한 중앙 설정은 브랜드 일관성과 재사용성을 높인다.

### 컴포넌트 변형

Button은 `contained`, `outlined`, `text` 모드를 제공한다. Text는 `bodyLarge`, `titleMedium`, `headlineSmall` 같은 변형으로 타이포그래피 계층을 표현한다.

## 예시

```tsx
<PaperProvider>
  <Card>
    <Card.Title title="Welcome" />
    <Card.Content>
      <Text variant="bodyMedium">React Native Paper</Text>
    </Card.Content>
    <Card.Actions>
      <Button mode="contained" onPress={() => console.log('pressed')}>
        Press me
      </Button>
    </Card.Actions>
  </Card>
</PaperProvider>
```

## 요약

- Provider 기반 테마는 앱 전반의 디자인을 통일한다.
- 컴포넌트의 mode와 variant로 용도와 시각적 계층을 표현한다.
- 반복 스타일은 전역 테마나 재사용 컴포넌트로 모은다.
