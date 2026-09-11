# Response Message Card

## 개요
- 보낸 메시지 카드에 이어 응답 메시지 카드(response message card)를 만든다.
- 회색 배경의 말풍선으로, 보낸 메시지 카드와는 다른 스타일을 가진다.
- `message` prop과 TypeScript 인터페이스를 추가해 동적 컴포넌트로 만든다.

## 내용
### 컴포넌트 생성
- `components` 폴더에 `ResponseMessageCard.tsx`를 만들고 스니펫 `rnfes`로 함수형 컴포넌트를 생성한다.
- `ChatScreen`에서 import 후 렌더링해 확인한다.

### 컨테이너 스타일
- 바깥 `View`(`styles.container`): `marginVertical: verticalScale(4)`, `paddingVertical: verticalScale(12)`.
- 확인용으로 배경을 빨간색으로 줬다가 이후 제거한다.
- `marginHorizontal: scale(8)`도 넣었다가 제거 — 좌우 여백은 나중에 FlatList 쪽에서 패딩으로 처리할 예정이기 때문이다.

### 메시지 컨테이너와 텍스트 스타일
- 내부 `View`(`styles.messageContainer`): `backgroundColor: '#E8E8E8'`, `borderRadius: scale(20)`, `maxWidth: '80%'`(화면 전체를 채우지 않게), `padding: scale(10)`.
- 텍스트(`styles.messageText`): `color: colors.black`, `fontSize: scale(16)`.
- 하드코딩한 `#E8E8E8`는 colors 객체에 `grayBack`으로 저장하고 `colors.grayBack`으로 참조한다.

### message prop과 TypeScript
- 정적 텍스트 대신 `message` prop을 받아 렌더링하고, `ChatScreen`에서 "Here is the response"류의 긴 텍스트를 전달해 UI를 확인한다.
- `interface ResponseMessageCardProps { message: string }`을 만들고 컴포넌트를 `FC<ResponseMessageCardProps>`로 타입 지정한다.

## 예시
```tsx
// components/ResponseMessageCard.tsx
import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

interface ResponseMessageCardProps {
  message: string;
}

const ResponseMessageCard: FC<ResponseMessageCardProps> = ({ message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(4),
    paddingVertical: verticalScale(12),
  },
  messageContainer: {
    backgroundColor: colors.grayBack, // '#E8E8E8'
    borderRadius: scale(20),
    maxWidth: '80%',
    padding: scale(10),
  },
  messageText: {
    color: colors.black,
    fontSize: scale(16),
  },
});
```

## 요약
- 응답 카드는 회색 배경(`#E8E8E8` → `colors.grayBack`)의 왼쪽 말풍선이다.
- `maxWidth: '80%'`로 폭을 제한하고 좌우 여백은 FlatList에서 처리하기로 한다.
- `message: string` prop과 인터페이스로 재사용 가능한 동적 컴포넌트를 완성했다.
