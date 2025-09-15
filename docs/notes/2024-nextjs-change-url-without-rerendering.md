---
permalink: /notes/2024-nextjs-change-url-without-rerendering/
comment: true
---

# Next.js에서 리렌더링 없이 url 바꾸기

버튼 클릭시 동일한 페이지에서 렌더링해주고 싶은데 뒤로가기가 동작했으면 했다.  
(1번 케이스 사용)

**1. history stack에 포함시키고 변경**

```js
window.history.pushState({ ...window.history.state }, "", "/add");
```

**2. history stack 포함시키지 않고 변경**

```js
window.history.replaceState(
  { ...window.history.state, as: "/", url: "/" },
  "",
  "/"
);
```

**Reference**

- [Ability to push changes to url without re-rendering #18072](https://github.com/vercel/next.js/discussions/18072)
