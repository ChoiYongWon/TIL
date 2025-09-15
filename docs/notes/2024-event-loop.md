---
permalink: /notes/2024-event-loop/
comment: true
---

# Event Loop란

> Javascript가 비동기 작업을 관리하기 위한 구현체

우리가 흔히 쓰는 브라우저에서 실행되는 자바스크립트의 환경은 다음과 같다.

<div class="img-container">
    <img class="img" src="https://github.com/ChoiYongWon/awesome-resume/assets/40623433/18fe6409-1c83-4041-84e0-af570eb5b5c6" alt=""/>
    <sup>출처 : https://dev.to/jasmin/difference-between-the-event-loop-in-browser-and-node-js-1113</sup>   
    <span class="caption">그림 1. 브라우저 JS 환경.</span>
</div>

자 이제 자바스크립트는 동기적으로 동작하는데 비동기 작업은 어떻게 처리하나?
실제 자바스크립트 엔진인 V8은 여기서 Call Stack을 담당하고 동기적으로 실행된다.
(Call Stack는 현재 실행 중인 함수의 정보를 저장하는 자료구조이다.)

정답은 WEB API에게 있다.

브라우저는 실제로 멀티쓰레드로 동작하며 비동기 작업을 수행할 수 있는데
브라우저에서 직접 비동기 작업을 위임할 수 있도록 WEB API을 제공한다.
V8엔진은 WEB API를 통해서 비동기 작업을 브라우저에게 위임하여 수행한다.

그럼 이후에는 어떻게 되는가?

브라우저에서 처리를 마친 비동기 작업은 V8에서 관리하는 Micro Task Queue나 Macro TaskQueue (이하 Task Queue)에게 결과값을 넘기는데, 이 때 Queue에 있는 값들을 Call Stack에 넘기는 역할을 `이벤트 루프`가 담당한다.

더 상세하게 접근해보자

브라우저에서 비동기 작업을 처리하고 Micro Task Queue나 Task Queue에 넘긴다고 했는데,

비동기 작업의 종류에 따라 나뉜다.

**Micro Task Queue**

- Promise에서 then, catch, finally
- new MutationObserver
- await
- queueMicroTask

**Task Queue**

- Web API Callback
- Event Handler
- setTimeout

Micro Task Queue가 Task Queue보다 우선순위가 높다.

Event Loop는 항상 Micro Task Queue와 Task Queue를 지켜보고 있으며,

Call Stack이 비었을 때 Micro Task Queue > Task Queue 순으로 완료된 작업을 Call Stack으로 옮긴다.

```js
new Promise((res, rej) => {
  console.log(1);
  res();
}).then(() => console.log(2));

setTimeout(() => console.log(3), 0);

Promise.resolve().then(() => console.log(4));

queueMicrotask(() => console.log(5));

console.log(6);
```

위 코드의 출력 순서는 다음과 같다.

```sh
1 6 2 4 5 3
```

## 그러면 NodeJS 환경에서의 EventLoop는?

이 때까지는 브라우저 환경에서의 이벤트 루프였고,

NodeJS 환경은 브라우저가 존재하지 않으므로 WEB API 역시 존재하지 않는다. 그럼 어떻게 비동기 작업을 수행할까?

<div class="img-container">
    <img class="img" src="https://github.com/ChoiYongWon/awesome-resume/assets/40623433/085ccb4a-27b8-4aa9-8243-4c2fc4e4a6d5" alt=""/>
    <sup>출처 : https://www.c-sharpcorner.com/article/node-js-event-loop/</sup>   
    <span class="caption">그림 2. NodeJS 환경.</span>
</div>

NodeJS는 플랫폼에서 제공하는 라이브러리를 사용하며, 대표적으로 Libuv (비동기 I/O 라이브러리)를 사용한다.

또한, 브라우저 처럼 Queue가 2개만 존재하는게 아니라 여러개가 존재한다.

<div class="img-container">
    <img class="img" src="https://github.com/ChoiYongWon/awesome-resume/assets/40623433/df1f8e99-53ab-443d-b76b-b9fe09582083" alt=""/>
    <sup>출처 : https://www.korecmblog.com/blog/node-js-event-loop/</sup>   
    <span class="caption">그림 3. NodeJS의 EventLoop 사이클.</span>
</div>

위 사진은 이벤트 루프의 한 사이클이다. 브라우저에서는 이벤트 루프가 실행될 때 2개의 Queue만 탐색 했지만,

NodeJS 환경에서는 8개의 Queue가 존재한다.

Timer부터 사이클이 시작되며 각각 페이즈라고 부르고 담당하는 비동기 작업이 다르다.

**`Timer`** : setTimeout, setInterval 등  
**`Pending Callbacks`** : 이전 이벤트 루프에서 실행되지 못한 콜백  
**`Idle, Prepare`** : 내부적인 관리를 위한 페이즈  
**`Poll`** : Timer를 제외한 비동기 I/O작업 (fetch, readFile 등)  
**`Check`** : setImmediate를 위한 페이즈  
**`Close`** : 종료된 핸들러의 콜백을 처리하는 페이즈 ( socket.onClose, file.close 등)

`nextTickQueue`와 `microTaskQueue`는 우선순위가 가장 높으며 현재 페이즈와 상관없이 수행하고 있는 작업이 끝나면 그 즉시 실행된다.

nextTick이 microTask 보다 높다.

**`nextTick`** : process.nextTick() 콜백 관리  
**`microTask`** : Promise 관련 콜백
