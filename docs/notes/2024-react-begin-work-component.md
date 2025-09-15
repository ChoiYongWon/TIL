---
permalink: /notes/2024-react-begin-work-component/
comment: true
---

# React beginWork에서 만들어지는 Component

beginWork에서 만들어지는 Class 혹은 Function 컴포넌트의 tag는 `IndeterminateComponent`이다.
이후 `mountIndeterminateComponent()` 함수를 통해 mount가 된 상태에서는 tag가 바뀐다.
