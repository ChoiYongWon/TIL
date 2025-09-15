---
permalink: /notes/2024-js-object-key/
comment: true
---

# Object.keys는 O(n)이다.

객체의 길이를 가져오고 싶어서 `Object.keys(obj)`를 사용해서 길이를 구했다.

```js
const obj = {
  1: 4,
  2: 6,
};
console.log(Object.keys(obj).length);
// 2
```

이는 O(n)의 시간복잡도를 갖고있으므로 반복문 내에서 사용하면 비효율적이다.
