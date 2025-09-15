---
permalink: /notes/2024-how-react-hook-works/
comment: true
---

# React Hook 동작 방식

#### 의문

실제 코드를 짤 때 hook은 컴포넌트 내부에 있다. 정확히 말하면 함수 내부에 있음.
hook을 호출할 때 컴포넌트에 관련된 정보가 없음에도 해당 상태는 컴포넌트와 어떻게 매핑이 되는가?? 내부 자료구조가 궁금함.

실제 React 코드를 들여다보기 시작..

mountState에서 dispatch변수는 setter 함수이고 mountState 함수에서 마지막에 반환된다. dispatch는 dispatchAction 함수이며 currentlyRenderingFiber와 queue를 포함하고 있다. queue.dispatch는 dispatch function이랑 같은 참조를 하고 있다.

아오 삽질하면서도 뭔말인지 모르겠다 다음에 다시 하자.

#### 삽질 Reference

**전체 틀**

[React Codebase Overview](https://legacy.reactjs.org/docs/codebase-overview.html)

**Fiber**

[Naver D2 React 파이버 아키텍처 분석](https://d2.naver.com/helloworld/2690975)  
[React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)

**Hook 탄생 배경**

[[10분 테코톡] 룩소의 React Hooks](https://www.youtube.com/watch?v=qjEcsNYFWYg)

**클로저 기반 설명**

[JSCont - Can Swyx recreate React Hooks and useState in under 30 min?](https://www.youtube.com/watch?v=KJP1E-Y-xyo)

**React Code 기반 분석**

[Under the hood of React’s hooks system](https://medium.com/the-guild/under-the-hood-of-reacts-hooks-system-eb59638c9dba)  
[How does React associate Hook calls with components?](https://legacy.reactjs.org/docs/hooks-faq.html#how-does-react-associate-hook-calls-with-components)  
[React Hooks - What's happening under the hood?](https://stackoverflow.com/questions/53729917/react-hooks-whats-happening-under-the-hood)  
[How Does setState Know What to Do?](https://overreacted.io/how-does-setstate-know-what-to-do/)  
[How React Hooks Work - in depth + React Render Cycle Explained](https://eliav2.github.io/how-react-hooks-work/)  
[How do react hooks determine the component that they are for?](https://stackoverflow.com/questions/53974865/how-do-react-hooks-determine-the-component-that-they-are-for/53980190#53980190)
