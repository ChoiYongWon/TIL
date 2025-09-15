---
permalink: /notes/2024-reason-why-react-error-boundary-cant-catch-fetch-error/
comment: true
---

# React ErrorBoundary에서 fetch 에러를 catch 하지 못하는 이유

React에서는 class component의 `getDerivedStateFromError` 메소드로 컴포넌트에서 throw하는 에러를 catch할 수 있다.

```ts
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

하지만 fetch에서 throw 하는 에러는 catch하지 못하는데 그 이유는 바로 실행 컨텍스트가 다르기 때문이다. React는 동일한 실행컨텍스트 내에서 발생하는 에러만 핸들링 할 수 있다. fetch가 실행되는 시점은 V8 엔진의 콜스택이지만, 비동기적으로 Web API에서 별도의 실행 컨텍스트에서 실행되고, 이 Web API는 C++ 등의 네이티브 언어로 개발 되었기에 여기서 말하는 실행 컨텍스트는 C++의 실행컨텍스트이다. 즉, 브라우저에 console에 출력되는 fetch 에러 메세지도 C++에서 출력된 것 이므로 V8 엔진 실행컨텍스트에서 C++ 실행컨텍스트에서 발생한 에러를 catch 할 방법은 없기에 ErrorBoundary가 catch 할 수 없다.

이를 해결하기 위해선 비동기 작업이 끝난 이후 응답에 따라 Javascript 실행 컨텍스트 내에서 throw 해주면 ErrorBoundary가 catch 할 수 있다.
