---
permalink: /notes/2024-react-reconcile-update-standard/
comment: true
---

# react 재조정 과정에서 컴포넌트를 업데이트 대상으로 정하는 기준

1. props의 변경 (얕은 비교를 통해 감지)
2. 내부 state 변경
3. 부모 컴포넌트의 리렌더링
   - 부모 컴포넌트가 리렌더링 되면 모든 자식 컴포넌트가 리렌더링 대상이 된다
4. key 변경
5. hooks 의존성 변경

등이 있다.
