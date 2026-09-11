# Adding TypeScript

## 개요
- 하드코딩된 문자열(`'sent'`, `'received'`)을 상수(constants) 파일로 분리한다.
- 메시지 객체에 `Message` 인터페이스를 정의해 `useState`에 타입을 지정한다.
- TypeScript 코드는 실행 동작에 영향이 없고, 코드 품질과 리팩터링 용이성을 위한 것이다.

## 내용
### 문자열을 상수로 추출
- 문자열을 코드 곳곳에 직접 쓰는 것은 나쁜 접근이다. 상수로 저장하는 것이 좋다.
- `constants` 폴더에 `chat.ts` 파일을 만들고 두 상수를 export 한다.
- `ChatScreen`에서 `'sent'`/`'received'` 문자열을 모두 이 상수로 교체하고 import 한다.
- 장점: 코드가 간결해지고, 값 변경 시 한 곳만 수정하면 되며(리팩터링 용이), 오타로 인한 타입 문제를 방지한다.

### Message 인터페이스
- 메시지 객체용 인터페이스 `Message`를 정의한다: `id: number`, `message: string`, `type: string`.
- `useState`에 제네릭으로 배열 타입을 지정한다: `useState<Message[]>(...)`.
- 초기 메시지 배열(`messagesList`)에도 `: Message[]` 타입을 붙인다.

### TypeScript는 선택적 안전장치
- 이 코드는 JavaScript가 아니라 TypeScript 전용 코드다. 타입을 쓰지 않아도 앱은 정상 동작하지만, 코드를 더 좋게 만들기 위한 것이다.

## 예시
```ts
// constants/chat.ts
export const SENT = 'sent';
export const RECEIVED = 'received';
```

```tsx
// screens/ChatScreen.tsx
import { SENT, RECEIVED } from '../constants/chat';

interface Message {
  id: number;
  message: string;
  type: string;
}

const messagesList: Message[] = [
  { id: 1, message: 'Hello', type: SENT },
  { id: 2, message: 'Hi, how can I help you today?', type: RECEIVED },
];

const [messages, setMessages] = useState<Message[]>(messagesList);
```

## 요약
- 반복되는 문자열 리터럴은 `constants/chat.ts`의 상수로 관리한다.
- `Message` 인터페이스(`id`, `message`, `type`)로 메시지 배열과 `useState`의 타입을 지정했다.
- TypeScript는 실행에 필수는 아니지만 유지보수성과 안정성을 높인다.
