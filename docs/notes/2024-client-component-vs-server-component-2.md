---
permalink: /notes/2024-client-component-vs-server-component-2/
comment: true
---

# ClientComponent와 ServerComponent의 동작 방식 feat. 번들 최적화 #2

어제 했던 삽질에 이어서

```ts
// app/layout.tsx
import { createContext } from "react";

//  createContext is not supported in Server Components
export const ThemeContext = createContext({});

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
      </body>
    </html>
  );
}
```

ThemeContext는 ServerComponent에서 사용할 수 없기에 아래와 같이 theme-provider라는 ClientComponent를 만들고 children props로 넘겨준다.

```ts
// app/theme-provider.tsx
"use client";

import { createContext } from "react";

export const ThemeContext = createContext({});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
}
```

다시 돌아와서 app/layout.tsx에서 아래와 같이 Root를 ServerComponent로 유지할 수 있다

```ts
// app/layout.tsx
import ThemeProvider from "./theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

> You should render providers as deep as possible in the tree – notice how ThemeProvider only wraps `{children}` instead of the entire `<html>` document. This makes it easier for Next.js to optimize the static parts of your Server Components.

출처 : [NextJS 공식문서 rendering/composition-patterns](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#using-context-providers)

대충 Provider를 따로 Client Component로 만들어서 {children} props로 넘기면 그 내부의 컴포넌트는 ServerComponent로 사용할 수 있다는 내용이다.  
이렇게 하면 추가적으로 Client Javascript Bundle Size도 줄일 수 있다고 한다.

## 추가 삽질

> 여러개의 'use client' 지시어를 사용하면 여러개의 client 번들로 나뉘어진다.  
> 'use client' 지시어를 사용하면 해당 컴포넌트내에 있는 모든 모듈과(import) ChildComponent들이 client 번들에 추가되는걸로 간주된다.

출처 : [If I pass a server component to a client component via the children prop, will it be rendered on the client?](https://stackoverflow.com/questions/77015023/if-i-pass-a-server-component-to-a-client-component-via-the-children-prop-will-i)

> 서버 컴포넌트는 렌더링 과정에서 직렬화된 결과가 inline script로 삽입된다는 정보를 얻을 수 있었다.

출처 : [새로 등장한 React ServerComponent 이해하기](https://yozm.wishket.com/magazine/detail/2271/)

> 서버 컴포넌트에서 데이터를 가져오는 경우, 클라이언트 컴포넌트에 props로 데이터를 전달하고 싶을 수 있는데, ServerComponent에서 ClientComponent로 전달되는 props는 React에서 직렬화할 수 있어야 한다.  
> 이건 내 생각 👉 (서버 렌더링을 위해서는 직렬화를 해야되기 때문에 만약 ServerComponent에서 ClientComponent로 전달되는 props가 직렬화가 안될 경우에는 해당 ServerComponent도 직렬화가 안되기 때문으로 예상. 직렬화가 안되면 아예 js 번들로 빼고 참조값만 남겨야한다.)

출처 : [rocketengine 티스토리 Getting Started - React Essentials](<https://rocketengine.tistory.com/entry/NextJS-13-Getting-Started-React-Essentials#%EC%84%9C%EB%B2%84%EC%97%90%EC%84%9C%20%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A1%9C%20props%20%EC%A0%84%EB%8B%AC(serializable)-1>)

> 'use client' 지시어는 모듈 단위로 동작하며, ClientComponent에서 import 되는 Component는 모두 ClientComponent 이다. ServerComponent와 ClientComponent의 차이는 결국 직렬화 여부이다. ServerComponent의 경우 인라인 스크립트로 컴포넌트 정보가 제공되어 추가적인 네트워크 요청이 필요 없지만, ClientComponent의 경우 초기 렌더링 이후 컴포넌트의 정보를 추가적으로 요청하며 Hydate 시키는 과정이 필요하다.

출처 : [Making Sense of React Server Components](https://www.joshwcomeau.com/react/server-components/#compatible-environments-4)

## 정리

우리가 사이트에 방문하면 서버와 브라우저에선 다음과 같은 과정을 거친다.

1. [Server] RootComponent부터 순회를 하면서 ServerComponent를 다 렌더링하고 직렬화 한다.
2. [Server] ClientComponent는 js 번들에 포함시킨다.  
   `이 때, use client로 명시된 ClientComponent를 기준으로 선언된 모든 import나 ChildComponent는 js 번들에 포함된다. children으로 넘겨진 데이터는 실제로 ServerComponent에서 import된 Component이기 때문에 ServerComponent로 간주된다.`
3. [Server] ServerComponent를 직렬화한 결과를 inline script에 포함시킨 html을 브라우저에 응답한다.
4. [Browser] 이미 렌더링 된 ServerComponent에 대한 렌더트리 정보는 js 번들에 포함되어있지 않으므로 inline script에 포함되어있는 ServerComponent를 직렬화한 결과를 해석하여 가상돔에 포함시킨다.
5. [Browser] 이후 ClientComponent는 렌더트리 정보가 담긴 js 번들을 다시 서버에 요청하여 Hydrate 과정을 수행한다.

즉, 의문점에 대한 대답은  
최상단 컴포넌트가 Client Component일 경우 초기 렌더링 이후 전체 렌더트리 정보가 네트워크를 통해서 전달된다.

## 결론

가장 인상깊었고 중요하게 생각하는 부분은

- ServerComponent를 직렬화한 결과를 첫 html에 포함시켜 준다는것.
- 'use client' 지시어는 파일이나 모듈 레벨에서 작동한다는것,

  - 즉, 'use client' 지시어가 선언된 컴포넌트를 기준으로 모든 import나 ChildComponent는 모두 ClientComponent이고 client bundle에 포함된다는것이다. 하지만 props (특히 children)로 넘겨진 데이터는 Server에서 렌더링할 수 있다. (ServerComponent에서 children props로 전달된 컴포넌트는 서버에 의해 고정된 정적인 데이터이기 때문.)

- ClientComponent와 ServerComponent의 차이는 렌더트리 정보를 인라인으로 주입해주냐 추가적인 네트워크로 주입해주냐의 차이인것 같다. 즉, 적절히 활용하는게 맞는 방법인것 같다.

개인적으로 힘든 삽질이었다.  
하지만 아직 완벽히 이해한 느낌은 아니다. 나머지 개념은 사용하면서 배워야겠다.

## 참고하면 좋을듯한 정보

[NextJS App router 시뮬 사이트](https://nextjs-app-router-training.vercel.app/)  
[RSC Payload에 대해서 (해외)](https://hrtyy.dev/web/rsc_payload/)  
[How React server components work: an in-depth guide](https://www.plasmic.app/blog/how-react-server-components-work)
