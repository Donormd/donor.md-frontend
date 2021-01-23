## CSS

Мы используем [Styled Components](https://styled-components.com/)

## Работа с изображениями

Мы используем [Next.js Image](https://nextjs.org/docs/api-reference/next/image) **и только его**  
Каждая картинка, даже без смысловой нагрузки должна содержать `alt`.

```jsx
<Image src=".." width={..} height={..} alt="..">
```

## React/Redux

Старайтесь не раздувать stack

Используйте всю мощь Redux Toolkit.
