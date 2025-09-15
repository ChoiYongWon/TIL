---
permalink: /notes/2024-react-lane-vs-flag/
comment: true
---

# React Lane vs React Flag

React에서 변화를 감지할 때 RootFiber의 ChildLane를 기준으로 판단한다. 그리고 해당 Fiber에서 어떤 변화가 있었는지를 Flag를 기준으로 판단한다.

Flag의 종류는 다음과 같다.

- Placement: 요소가 DOM에 추가되거나 이동해야 함
- Update: 요소의 속성이나 스타일이 변경되었음
- Deletion: 요소가 DOM에서 제거되어야 함
- EffectMask: 생명주기 메서드나 훅이 호출되어야 함

따라서, lanes는 '어떤' 컴포넌트가 변경되었는지를 감지하는 데 사용되고, flags는 '어떻게' 그 컴포넌트를 업데이트해야 하는지를 결정하는 데 사용된다.
