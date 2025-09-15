---
permalink: /notes/2024-client-component-vs-server-component-1/
comment: true
---

# ClientComponent와 ServerComponent의 동작 방식 feat. 번들 최적화 #1

번들 최적화 과정에서, ClientComponenet와 ServerComponent이 번들 크기에 어떻게 영향을 주는지 알고 싶었다.

NextJS에서 컴포넌트들을 직렬화 할 때 ClientComponent는 직렬화가 안되므로 자체 참조값(./ClientComponent.js)으로 변환시킨다.

이 때, 트리 구조로 컴포넌트들이 구성되어있는데 가장 최상단의 컴포넌트가 ClientComponent로 구성되어있으면  
우리가 브라우저에 처음 접속했을 때 최상단 컴포넌트에 대한 참조값만 전달받는거 아닌가??

라는 의문도 들었다.

직접 테스트 해보았을 떄,

NextJS에서는 직렬화 단계에서 ClientComponent의 직렬화 가능한 부분(예를 들어, `시맨틱 태그`, `텍스트`, `스타일`)은 직렬화 하고 나머지 `onClick 함수`등 직렬화 되지 않는 부분은 참조값으로 변환시켜 클라이언트 쪽에서 Hydration 하는듯하다.

좋은글  
[Next) 서버 컴포넌트(React Server Component)에 대한 고찰](https://velog.io/@2ast/React-%EC%84%9C%EB%B2%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8React-Server-Component%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B3%A0%EC%B0%B0)

'use client' 즉, ClientComponent가 코드스플리팅의 분기점이 된다고 한다.
ServerComponent와 ClientComponent 둘다 서버에서 렌더링되는건 마찬가진데, 'use client'를 사용하는 이유가 단순 서버에서 렌더링할 때 `이 컴포넌트는 Hydration이 필요한 컴포넌트야`라고 알려주는것 빼고는 다른 역할이 있는지 궁금하다.
