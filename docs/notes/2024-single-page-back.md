---
permalink: /notes/2024-single-page-back/
comment: true
---

# 하나의 페이지에서 뒤로가기 구현

하나의 페이지 내에서 컴포넌트간에 이동을 구현하고 싶은데 뒤로가기가 적용되었으면 했다.

![](https://github.com/ChoiYongWon/AT/assets/40623433/133fb78f-b4bc-4372-a73f-809119eaac17)

이 화면에서 상단 바만 남기고

![](https://github.com/ChoiYongWon/AT/assets/40623433/41baa532-cd99-480d-b132-5717f5361f8e)

이렇게 변했으면 했다.

layout으로 감싸고 page만 이동하면 되는거 아니냐 할 수 있겠지만 다음과 같은 조건을 부합하지 못했다.

- URL이 바뀌면 안된다. (page.tsx는 하나의 url을 대표하는 컴포넌트이기 때문에 하나에 두개의 page 컴포넌트로는 부합할 수 없다.)
- 애니메이션이 적용되야 함 (url이 바뀌면 왜인진 모르겠는데 Next에서 exit 애니메이션이 동작하지 않았다. Framer 기준)

해결 방법

1.  지도를 보여주는 Map 컴포넌트와 목록을 보여주는 List 컴포넌트는 selectedArea라는 상태로 인해 분기된다. (값이 없으면 Map 있으면 List)
2.  Map에서 List로 페이지가 이동할 때 `window.history.pushState()`를 사용하여 history에 스택을 쌓는다. (동일한 url)
3.  List에 popState 이벤트를 리스너에 연결해주어 뒤로갈 때 selectedArea 상태를 null로 변경한다. 이 때, 2번에서 쌓아준 스택은 없어진다.

코드

```js
/* useGhostHistory.ts */

import { useEffect } from "react";

type Props = {
  onPopState?: any,
};

export const useGhostHistory = () => {
  const push = () => {
    // ghost stack 하나 쌓기
    window.history.pushState(null, "", "/");
  };

  function use({ onPopState }: Props) {
    const handlePopState = (e: any) => {
      // 뒤로가기 시 호출
      if (onPopState) onPopState();
    };

    useEffect(() => {
      // 브라우저 history에 stack 하나 쌓기 (뒤로가기 눌렀을때 이 스택이 사라짐)
      window.addEventListener("popstate", handlePopState);
      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }, []);
  }
  return { push, use };
};
```

Hook으로 만들어봤다.  
Map 컴포넌트에 push를 하고, List 컴포넌트에서 use를 사용하면된다. 위와 같은 예에서는 onPopState에는 selectArea의 상태를 바꿔주는 함수를 작성하면된다.
