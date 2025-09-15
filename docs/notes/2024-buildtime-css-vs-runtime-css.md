---
permalink: /notes/2024-buildtime-css-vs-runtime-css/
comment: true
---

# BuildTime Css와 RunTime Css에 대한 고찰

기술 스택을 정하는 도중 Build Time Css와 Run Time Css에 대한 의문점이 들었다.

나는 이 둘의 차이점이 CSS가 적용된 상태로 오느냐 아니면 브라우저에서 JS 런타임에서 CSS를 만들어주냐의 차이점인줄 알았다. 반은 맞고 반은 틀렸다.

초기 HTML 파일을 응답받은 상태에서 브라우저에서 Preview를 보면 뼈대만 있는데 (CSS 적용 X) 여기서 부터 이상함을 감지했다.

> 어? 왜 스타일이 적용 안되어있지?

라고 생각했지만 이후 Critical Rendering Path를 생각해보면 당연한 결과였다.  
브라우저는 HTML을 전부 해석하기 전까진 Paint룰 안해준다.

주요 차이점은 다음과 같다.

**BuildTime CSS**

- link 태그에 있는 CSS 요청
- CSS 파일 다운로드 및 파싱
- CSSOM 생성
- DOM + CSSOM을 결합하여 Render Tree 생성
- Paint

**Runtime CSS**

- script 태그 해석
- Javascript에 의한 동적 스타일 변경
- CSSOM 업데이트
- Render Tree 재계산 및 업데이트
- Paint
- 이후 업데이트가 있을때마다 2 ~ 6 과정 반복

추가로 JS에서 Runtime으로 CSS를 생성할 때 렌더링 엔진이 JS 엔진에게 제어권을 위임하기 때문에 렌더링 과정이 수행되지 않기에 더 오래 걸린다는 점도 있다.

정리하자면 BuildTime과 RunTime 모두 초기 CSS가 Paint 전에 반영되지만 속도면에서 차이가 있다.  
브라우저 렌더링 방식의 중요성을 깨달았다.
