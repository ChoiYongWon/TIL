---
permalink: /notes/2024-react-dependency-array-value/
comment: true
---

# React Dependency Array에 일반 값이 들어오면?

아래의 컴포넌트의 부모 요소가 리렌더링 될 때 TestComponent는 재 호출 된다. 이 때 a라는 개체는 새로 생성되고 새로운 참조값을 갖게 되면서 useEffect가 실행된다.

```ts
import { useEffect } from "react";

const TestComponent = () => {
  const a = [];

  useEffect(() => {
    console.log("리렌더링");
  }, [a]);

  return <h1>HI</h1>;
};

export default TestComponent;
```

반대로 a 값이 원시값인 경우 React의 부모가 리렌더링 되더라도 Dependency Array에 있는 a 값은 값으로 비교하기 때문에 부모 컴포넌트가 리렌더링 되더라도 useEffect에 callBack 함수가 실행되지 않는다.

```ts
import { useEffect } from "react";

const TestComponent = () => {
  const a = 1;

  useEffect(() => {
    console.log("리렌더링");
  }, [a]);

  return <h1>HI</h1>;
};

export default TestComponent;
```

즉, useEffect에 Dependency Array는 얕은 비교를 통해 동작하며, 이는 꼭 React에서 관리하는 상태값이 아니어도 된다.
