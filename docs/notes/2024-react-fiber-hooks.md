---
permalink: /notes/2024-react-fiber-hooks/
comment: true
---

# ReactFiberHooks의 역할

React의 상태 관리는 react-reconcile 패키지에서 담당한다. React는 VDOM에서 노드를 관리하기 위해 Fiber 형태로 관리하고 있으며 이는 React Element에서 확장된 정보(상태 등)를 가진 객체이다.

ReactFiberHooks는 Fiber 객체에 Hook에 관련된 정보를 마운트 시켜주는 역할을 한다. [react-reconcile의 ReactFiber Github 링크](https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js#L496)  
Fiber 객체에는 memoizedState 프로퍼티가 존재하는데 renderWithHooks 함수를 통해 momoizedState에 Hook 객체를 할당해준다.  
Hook 객체는 LinkedList 형태로 존재하며 하나의 Hook 객체는 next로 다른 Hook 객체를 참조할 수 있다.  
그래서 실제 memoizedState에 할당되는 값은 첫번째 Hook 객체이며 이는 해당 Fiber에서 사용하는 모든 Hooks와 LinkedList 형태로 연결되어있다.

ReactCurrentDispatcher.current -> HookDispatcherOnMount -> mountState -> mountWorkInProgressHook -> currentlyRenderingFiber.memoizedState에 Hook 객체를 LinkedList로 mount

> mountWorkInProgressHook은 Fiber에 Hook을 LinkedList 형태로 연결시켜주는 역할
