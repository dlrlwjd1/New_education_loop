# Sent Message Card

## 개요
- ChatGPT처럼 보낸 메시지(sent message)와 응답 메시지(response message) 두 가지 메시지 카드가 필요하다.
- 이 강의에서는 보낸 메시지 카드 `SentMessageCard.tsx` 컴포넌트를 만든다.
- `message`를 prop으로 받고, TypeScript 인터페이스(`ISentMessageCard`)로 타입을 지정한다.

## 내용
### 두 종류의 메시지 카드
- ChatGPT에 질문을 보내면 오른쪽에 보낸 메시지 카드, 아래에 단어별로 출력되는 응답이 표시된다.
- 이를 본떠 보낸 메시지 컴포넌트와 응답 메시지 컴포넌트를 각각 만든다.

### 컴포넌트 생성
- `components` 폴더에 `SentMessageCard.tsx` 생성, 스니펫 `rnfes`로 함수형 컴포넌트를 만든다.
- 우선 `ChatScreen`에서 정적으로 렌더링해 확인한다.

### 스타일링
- 바깥 `View`(`styles.container`): `flexDirection: 'row'`, `justifyContent: 'flex-end'`(오른쪽 정렬), `marginVertical: verticalScale(4)`.
- 내부 `View`(`styles.messageContainer`): `backgroundColor: colors.black`, `borderRadius: scale(20)`, `maxWidth: '80%'`, `padding: scale(20)`.
- 텍스트(`styles.message`): `fontSize: scale(16)`, `color: colors.white`.

### message prop과 TypeScript
- `Text` 안에 `message` prop을 렌더링하고, `ChatScreen`에서 `message="Hello AI, tell me about React Native..."`처럼 전달한다.
- 인터페이스 `ISentMessageCard`를 만들어 `message: string`을 정의하고, 컴포넌트 타입을 React의 `FunctionComponent`(FC)로 지정해 props 타입을 적용한다.

## 예시
```tsx
// components/SentMessageCard.tsx
import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

interface ISentMessageCard {
  message: string;
}

const SentMessageCard: FC<ISentMessageCard> = ({ message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: verticalScale(4),
  },
  messageContainer: {
    backgroundColor: colors.black,
    borderRadius: scale(20),
    maxWidth: '80%',
    padding: scale(20),
  },
  message: {
    fontSize: scale(16),
    color: colors.white,
  },
});
```

## 요약
- 보낸 메시지 카드는 오른쪽 정렬(`flex-end`)된 검정 말풍선으로 구현한다.
- `maxWidth: '80%'`로 카드가 화면 전체를 차지하지 않게 한다.
- `message`는 string 타입 prop으로 받고 `ISentMessageCard` 인터페이스 + `FC` 제네릭으로 타입을 지정한다.
