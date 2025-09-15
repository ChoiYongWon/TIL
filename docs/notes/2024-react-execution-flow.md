---
permalink: /notes/2024-react-execution-flow/
comment: true
---

# React 실행 흐름

## 초기화

1. 진입점 (예: index.js)

   - `import React from 'react'`
   - `import ReactDOM from 'react-dom/client'`
   - `import App from './App'`

2. `packages/react/index.js`

   - React 코어 API를 내보냅니다.

3. `packages/react-dom/index.js`

   - ReactDOM API를 내보냅니다.

4. `packages/react-dom/src/client/ReactDOM.js`

   - `createRoot()`: 루트 컨테이너를 생성합니다.

5. `packages/react-dom/src/client/ReactDOMRoot.js`

   - `root.render()`: 애플리케이션 렌더링을 시작합니다.

6. `packages/react-reconciler/src/ReactFiberReconciler.js`

   - `updateContainer()`: 컨테이너 업데이트를 시작합니다.

7. `packages/react-reconciler/src/ReactFiberWorkLoop.js`

   - `scheduleUpdateOnFiber()`: Fiber 업데이트를 스케줄링합니다.
   - `performSyncWorkOnRoot()` 또는 `performConcurrentWorkOnRoot()`

8. `packages/react-reconciler/src/ReactFiberBeginWork.js`

   - `beginWork()`: 각 Fiber 노드 작업을 시작합니다.

9. `packages/react-reconciler/src/ReactFiberHooks.js`

   - `renderWithHooks()`: 함수 컴포넌트 렌더링 및 훅 처리

10. `packages/react-reconciler/src/ReactFiberClassComponent.js`

    - 클래스 컴포넌트 처리 (해당하는 경우)

11. `packages/react-reconciler/src/ReactChildFiber.js`

    - `reconcileChildFibers()`: 자식 요소 재조정

12. `packages/react-reconciler/src/ReactFiberCompleteWork.js`

    - `completeWork()`: 각 Fiber 노드 작업 완료

13. `packages/react-reconciler/src/ReactFiberCommitWork.js`

    - `commitRoot()`: 변경사항 DOM에 적용

14. `packages/react-dom/src/client/ReactDOMHostConfig.js`
    - DOM 조작 함수들 (예: `appendChild()`, `insertBefore()`)

## 이벤트 처리

15. `packages/react-dom/src/events/DOMPluginEventSystem.js`
    - 이벤트 리스너 설정 및 처리

## 상태 업데이트 시

16. `packages/react-reconciler/src/ReactUpdateQueue.js`
    - `enqueueUpdate()`: 업데이트 큐에 추가

## 렌더링 완료 후

17. `packages/react-reconciler/src/ReactFiberWorkLoop.js`
    - `finishConcurrentRender()` 또는 `commitRootImpl()`

## 클린업 및 부수 효과

18. `packages/react-reconciler/src/ReactFiberCommitWork.js`
    - `commitPassiveUnmountEffects()`, `commitPassiveMountEffects()`
