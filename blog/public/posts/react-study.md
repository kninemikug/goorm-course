# React와 Framer Motion으로 애니메이션 구현하기

웹사이트에 생동감을 불어넣는 것은 사용자 경험(UX)에 큰 영향을 미칩니다.

## Framer Motion 소개
Framer Motion은 React를 위한 강력한 애니메이션 라이브러리입니다.

## 기본 사용법

```jsx
import { motion } from 'framer-motion';

const Box = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    Hello Motion
  </motion.div>
);
```

이 코드는 컴포넌트가 마운트될 때 부드럽게 나타나는 페이드 인 효과를 줍니다.
