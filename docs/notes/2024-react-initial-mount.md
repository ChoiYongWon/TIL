---
permalink: /notes/2024-react-initial-mount/
comment: true
---

# 리액트 인스턴스를 생성하고 렌더링하는 과정 feat. 초기 마운트

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

React는 여러 호스트(앱, 브라우저)에서 사용할 수 있습니다. 그 중에서 ReactDOM은 React를 브라우저에서 그려주는 역할을 담당합니다. createRoot 메소드를 통해 브라우저에서 연결된 Container (실제 DOM)을 연결하고 FiberRootNode와 HostRoot를 생성하고 render 메소드를 통해 workInProgress에서 App 컴포넌트를 생성해서 Render, Commit Phase를 거쳐 Container에 페인팅합니다.
