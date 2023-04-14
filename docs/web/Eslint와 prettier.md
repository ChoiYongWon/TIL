# Eslint와 Prettier

## Eslint

Eslint는 코드 품질 관리를 목적으로 개발되었다.

```js
//main.js
const A = "Hello"; // 사용되지 않는 변수 no-unused-vars 규칙 위반

for (var i = 0; i < 10; i--) {
  // 무한 루프 for-direction 규칙 위반
}
```

위와 같은 코드는 장기적으로 봤을때  
시스템적으로 성능에 문제가 있거나 방해가 되는 코드들임

## Prettier

Eslint는 코드 포맷팅을 목적으로 개발되었다.

```js
const A = "Hello";

function f() {
  console.log(A); //tab-width : 4, semi : true
}
```

위와 같이 prettier는 코드 품질과 관련이 없다.  
단지 코드를 일정한 규칙으로 작성할 수 있게 도와준다.

예시로, 협업을 할때 통일된 prettier 설정을 가지면 개발자들간에 일정한 코드 규칙을 적용시켜 마치 한명의 개발자가 개발한듯한 모습을 보여준다.

이는 추후에 유지보수할때 개발자로 하여금 본인이 개발한 코드가 아니어도, 코드에 대한 이질감을 감소시키는 효과가 있어 생산성이 좋다.

## eslint-config-prettier

eslint에서 prettier와 충돌되는 포맷팅 기능만 끔

## eslint-plugin-prettier

prettier의 포맷팅 기능을 eslint의 규칙으로 실행

## eslint configuration

### extends

### plugin
