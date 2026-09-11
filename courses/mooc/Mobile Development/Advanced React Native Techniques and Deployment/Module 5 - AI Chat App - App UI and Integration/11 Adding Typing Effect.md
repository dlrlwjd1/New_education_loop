# Adding Typing Effect

## 개요
- AI 응답 전체를 한 번에 표시하지 않고 단어를 하나씩 보여 주는 `TypingEffect` 컴포넌트를 만든다.
- `split`, `setInterval`, `useEffect`, `useState`로 표시 문자열을 점진적으로 구성한다.
- 인터벌을 정리(cleanup)해 컴포넌트 언마운트나 텍스트 변경 시 메모리 누수를 막는다.

## 내용
### 문장을 단어 배열로 변환
- `text.split(' ')`은 문장을 공백 기준의 단어 배열로 나눈다.
- 인터벌이 실행될 때마다 현재 인덱스의 단어를 `displayedText` 뒤에 붙인다.
- 기존 텍스트가 있으면 새 단어 앞에 공백을 넣는다.

### 인터벌과 정리 함수
- `setInterval`은 지정된 시간마다 콜백을 반복한다. 강의에서는 최종적으로 `100ms` 간격을 사용한다.
- 모든 단어를 표시하면 `clearInterval(interval)`로 반복을 멈춘다.
- `useEffect`의 반환 함수에서도 인터벌을 제거해 텍스트 변경이나 언마운트 시 남은 타이머를 정리한다.

### 응답 카드에 적용
- `ResponseMessageCard`의 기존 `Text` 대신 `TypingEffect`에 `message`와 텍스트 스타일을 전달한다.
- 컴포넌트 props는 `text: string`과 선택적 `style`로 타입을 지정한다.

## 예시
```tsx
interface TypingEffectProps {
  text: string;
  style?: TextStyle;
}

const TypingEffect: FC<TypingEffectProps> = ({ text, style }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const words = text.split(' ');
    let index = 0;

    const interval = setInterval(() => {
      if (index < words.length) {
        setDisplayedText(prev => (prev ? `${prev} ${words[index]}` : words[index]));
        index += 1;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return <Text style={style}>{displayedText}</Text>;
};
```

## 요약
- 문자열을 단어 배열로 나누고 인터벌마다 한 단어씩 상태에 추가한다.
- `clearInterval` 정리 함수는 중복 타이머와 메모리 누수를 예방한다.
- `TypingEffect`를 응답 카드에 넣어 ChatGPT와 비슷한 점진적 출력 효과를 만든다.
