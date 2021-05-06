# useElementWidth

Pass an element `ref` that you’d like to observe. Its changing `width` is returned.

Example:

```js
const Element = () => {
  const ref = useRef()
  const width = useElementWidth(ref)

  const classNames = width > 300 ?  styles.wide : ''

  return (
    <div ref={ref} className={`${styles.el} ${classNames}`} />
  )
}
```

```css
.el {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.wide {
  flex-direction: row;
}
```

[Read the blog post](https://blog.nathanfitzsimmons.com/2021/05/05/window-pains-using-element-queries-in-your-react-app/)
