---
permalink: /notes/2024-react-reconcile-flow/
comment: true
---

# React Reconcile 과정 beginWork, completeWork

beginwork -> updateFunctionComponent 여기서 workInProgress.child를 반환해줌
이 후 completeWork를 통해 sibling 탐색 후 존재하면 workInProgress를 sibling으로 변경 (beginWork 반복)
