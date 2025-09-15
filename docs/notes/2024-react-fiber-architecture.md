---
permalink: /notes/2024-react-fiber-architecture/
comment: true
---

# React Fiber Architecture

Reconcilation 단계에서 React 16 이전 Stack Reconcilation 구조에서 Fiber Reconcilation으로 바뀐 아키텍처이다.

#### Stack Reconcilation의 단점

React는 변화를 탐지할때 상태가 변한 컴포넌트들을 모두 CallStack에서 render 메소드를 호출하여 반영한다. 이는 브라우저의 프레임 드랍을 유발할 수 있다.

브라우저는 60fps(초당 60프레임)으로 화면을 갱신하려고 한다. 이는 각 프레임 당 약 16.67ms(1000ms / 60)가 걸린다.

만약 16.67ms동안 콜스택을 비우지 못하면 브라우저가 화면을 갱신하지 못하기 때문에 프레임 드랍이 발생하는 원리이다.

즉, 대규모 렌더링이 발생할 때 React가 16.67ms내로 렌더링하지 못하면 프레임 드랍이 발생하는 문제가 있었다.

#### Fiber Architecture

Fiber는 React가 각각의 렌더링 작업에 대해서 스케쥴링을 가능하게 하는 아키텍쳐이고 다음과 같은 목표를 가지고 있다.

- 작업을 중단하고 나중에 다시 진행
- 작업별 우선순위 지정
- 이전에 완료된 작업 재사용
- 더 이상 필요하지 않은 작업 중단

[출처 - React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)

즉, Fiber는 각각의 작업을 최대한 효율적으로 처리하고자 설계된 구조다.

그러면 각각의 스택 프레임에 우선순위를 부여한다는 의미인데 JS 환경을 이해했을때 "어떻게 가능하지?" 라는 의문이 생긴다. 이를 해결하기 위해 React는 [workLoop](https://github.com/facebook/react/blob/66df94460e27ff382c07b13d0bcc4b2778bfc201/packages/scheduler/src/forks/Scheduler.js#L188)라는 가상의 스케줄러를 만들어서 렌더링 작업을 스케줄링한다.

```js
// react/packages/scheduler/src/forks/Scheduler.js

function workLoop(...){
    while(...){
        if (currentTask.expirationTime > currentTime && shouldYieldToHost()) {
            // This currentTask hasn't expired, and we've reached the deadline.
            break;
        }
    }
}

```

_workLoop는 while문으로 구성되어있는데 할당된 시간 동안만 수행된다. _

workLoop는 하나의 스택 프레임으로 동작하며 호스트(브라우저)의 렌더링 주기에 맞춰서 생명주기가 정해지며, 대게 매우 짧은 생명주기 시간을 갖고있다. ex) 16.67ms

이전에 Stack 구조에서는 콜스택에 일괄로 렌더링 작업을 진행했다면, Fiber 구조는 workLoop을 콜스택에 넣고 생명주기 시간동안 while문을 반복하여 렌더링 작업을 처리하고 생명주기 시간이 끝나거나, 더이상 처리할 작업이 없을 때 제어권을 브라우저에게 반납한다.

> 어? 그러면 생명주기 시간동안 렌더링 작업을 끝내지 못하면요?

이는 브라우저에서 제공하는 `requestIdleCallback` 함수를 활용한다. 이 함수는 브라우저가 중요한 작업(렌더링, 이벤트 처리 등)을 모두 마치고 여유가 있을 때 호출해주는 콜백이다.

React는 이를 활용하여 브라우저가 여유로울때마다 workLoop를 호출하여 렌더링 작업을 수행한다.

> 네? 브라우저가 여유로울때만 렌더링 작업을 할 수 있나요? 우선순위가 높은 작업은요?

_좀 더 알아봐야됨_

Fiber는 우선순위에 따라 처리하는 작업의 방식도 다르다. 보통은 `requestIdleCallback`가 호출되는 시점에 처리하는데 우선순위가 높은 작업은 `setTimeout`으로 처리된다.

#### 정리

즉, Fiber 구조는 React의 재조정(reconciliation) 과정을 작은 단위의 작업으로 나누어 중단과 재개가 가능하게 만들고, 작업 우선순위를 지정할 수 있게 하여 UI의 반응성과 성능을 향상시키는 내부 구현 아키텍처이다.
