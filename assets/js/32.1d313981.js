(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{325:function(t,e,n){"use strict";n.r(e);var r=n(8),a=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_2024-03"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2024-03"}},[t._v("#")]),t._v(" 2024. 03.")]),t._v(" "),e("h2",{attrs:{id:"_03-19"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_03-19"}},[t._v("#")]),t._v(" 03. 19.")]),t._v(" "),e("h3",{attrs:{id:"next-auth-인증-인가-고민"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next-auth-인증-인가-고민"}},[t._v("#")]),t._v(" next-auth 인증/인가 고민")]),t._v(" "),e("p",[t._v("로그인 과정에서 (next-auth 사용)"),e("br"),t._v("\nnext-auth에서 제공하는 "),e("code",[t._v("session-token")]),t._v(" 만으로 인증/인가를 담당해도 될까??"),e("br"),t._v("\nJWT를 안써도 될까?? 라는 고민중")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://geuni620.github.io/blog/2024/1/17/authorization/",target:"_blank",rel:"noopener noreferrer"}},[t._v("next-auth를 활용한 인증 및 인가 이해하기"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://remaster.com/blog/next-auth-jwt-session",target:"_blank",rel:"noopener noreferrer"}},[t._v("next-auth credential provider에서 jwt 사용하기 (해외)"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/nextauthjs/next-auth/discussions/2790",target:"_blank",rel:"noopener noreferrer"}},[t._v("next-auth에서 세션 및 JWT에 대한 ISSUE (해외)"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("현재 개발하고 있는 서비스 자체가 NextJS 풀스택으로 개발중이다."),e("br"),t._v("\n즉, route handler에서 들어오는 요청에 대한 세션에 접근할 수 있다. (요청한 유저의 신원을 조회할 수 있다.)")]),t._v(" "),e("p",[t._v("만약 API 서버가 따로 있다고 하면 JWT가 필요할 수 있겠다.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://next-auth.js.org/faq",target:"_blank",rel:"noopener noreferrer"}},[t._v("next-auth FAQ: next-auth에서 제공하는 JWT(session-token)의 장점은 뭔가요"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("위 FAQ에,")]),t._v(" "),e("p",[e("code",[t._v("NextAuth.js의 JSON 웹 토큰은 암호화 암호화(JWE)를 사용하여 포함된 정보를 JWT 세션 토큰에 직접 저장하여 보안을 유지합니다. 그런 다음 이 토큰을 사용하여 포함된 정보를 확인하기 위해 데이터베이스에 연결할 필요 없이 동일한 도메인의 서비스 및 API 간에 정보를 전달할 수 있습니다.")])]),t._v(" "),e("p",[t._v("또한,")]),t._v(" "),e("p",[e("code",[t._v("JWT는 서버 읽기 전용 쿠키에 저장되므로 사이트에서 실행 중인 타사 JavaScript가 JWT의 데이터에 액세스할 수 없으므로 암호화 없이도 클라이언트가 알아도 상관없는 정보를 안전하게 저장하는 데 JWT를 사용할 수 있습니다.")])]),t._v(" "),e("p",[t._v("문항을 읽어보았을 때, Session-token만으로 인증/인가를 담당해도 될것같은 느낌을 받았다.")]),t._v(" "),e("p",[t._v("그럼 Session Expire 시간을 늘려야되나..??"),e("br"),t._v("\n일단 Session Token만 사용해보자.")]),t._v(" "),e("h2",{attrs:{id:"_03-23"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_03-23"}},[t._v("#")]),t._v(" 03. 23.")]),t._v(" "),e("h3",{attrs:{id:"next-auth-클라이언트-세션-수정-가능"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next-auth-클라이언트-세션-수정-가능"}},[t._v("#")]),t._v(" next-auth 클라이언트 세션 수정 가능")]),t._v(" "),e("p",[t._v("클라이언트에서 useSession, auth 세션 바꿀 수있음"),e("br"),t._v(" "),e("a",{attrs:{href:"https://next-auth.js.org/getting-started/client#updating-the-session",target:"_blank",rel:"noopener noreferrer"}},[t._v("next-auth 공식 문서 #updating-the-session"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("야 호")]),t._v(" "),e("h3",{attrs:{id:"prismaclient를-edge-환경에서-실행"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prismaclient를-edge-환경에서-실행"}},[t._v("#")]),t._v(" prismaClient를 edge 환경에서 실행")]),t._v(" "),e("p",[t._v("middleware에서 prismaClient를 사용할 일이 생겼다."),e("br"),t._v(" "),e("a",{attrs:{href:"https://vercel.com/docs/functions/edge-middleware",target:"_blank",rel:"noopener noreferrer"}},[t._v("middleware은 vercel edge 환경에서 실행"),e("OutboundLink")],1),t._v("되는데, prismaClient를 edge 환경에서 실행하려면 Accelerate를 사용해야된다.")]),t._v(" "),e("p",[t._v("Accelerate는 Edge환경의 DB 캐싱서비스. "),e("a",{attrs:{href:"https://www.prisma.io/docs/accelerate/getting-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("참고"),e("OutboundLink")],1),e("br"),t._v("\nAccelerate 서비스를 생성하고 기존 DB URL을 연결하면 매핑된 새로운 URL을 반환해준다.")]),t._v(" "),e("p",[t._v("해당 URL에 요청하면 Accelerate에서 기존 우리의 DB에 요청을 하고 결과값을 응답해준다."),e("br"),t._v("\n해당 요청에 대한 응답은 캐싱된다.")]),t._v(" "),e("p",[t._v("기존 DB도 캐싱기능이 있을텐데 Accelerate를 사용하는 이유는??"),e("br"),t._v("\n아마 Edge환경에 배포되어있기에 응답과 처리속도(Accelerate 구조상)가 빨라서 Edge 환경에서 쓰기 적합하지 않을까?"),e("br"),t._v("\n기존 prismaClient을 edge환경(리소스가 제한된 환경)에서 실행시키기에는 느리기에 내장되어있는 prisma/edge에서 prismaClient를 사용해야한다.")]),t._v(" "),e("h2",{attrs:{id:"_03-24"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_03-24"}},[t._v("#")]),t._v(" 03. 24.")]),t._v(" "),e("h3",{attrs:{id:"clientcomponent와-servercomponent의-동작-방식-feat-번들-최적화-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clientcomponent와-servercomponent의-동작-방식-feat-번들-최적화-1"}},[t._v("#")]),t._v(" ClientComponent와 ServerComponent의 동작 방식 feat. 번들 최적화 #1")]),t._v(" "),e("p",[t._v("번들 최적화 과정에서, ClientComponenet와 ServerComponent이 번들 크기에 어떻게 영향을 주는지 알고 싶었다.")]),t._v(" "),e("p",[t._v("NextJS에서 컴포넌트들을 직렬화 할 때 ClientComponent는 직렬화가 안되므로 자체 참조값(./ClientComponent.js)으로 변환시킨다.")]),t._v(" "),e("p",[t._v("이 때, 트리 구조로 컴포넌트들이 구성되어있는데 가장 최상단의 컴포넌트가 ClientComponent로 구성되어있으면"),e("br"),t._v("\n우리가 브라우저에 처음 접속했을 때 최상단 컴포넌트에 대한 참조값만 전달받는거 아닌가??")]),t._v(" "),e("p",[t._v("라는 의문도 들었다.")]),t._v(" "),e("p",[t._v("직접 테스트 해보았을 떄,")]),t._v(" "),e("p",[t._v("NextJS에서는 직렬화 단계에서 ClientComponent의 직렬화 가능한 부분(예를 들어, "),e("code",[t._v("시맨틱 태그")]),t._v(", "),e("code",[t._v("텍스트")]),t._v(", "),e("code",[t._v("스타일")]),t._v(")은 직렬화 하고 나머지 "),e("code",[t._v("onClick 함수")]),t._v("등 직렬화 되지 않는 부분은 참조값으로 변환시켜 클라이언트 쪽에서 Hydration 하는듯하다.")]),t._v(" "),e("p",[t._v("좋은글"),e("br"),t._v(" "),e("a",{attrs:{href:"https://velog.io/@2ast/React-%EC%84%9C%EB%B2%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8React-Server-Component%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B3%A0%EC%B0%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Next) 서버 컴포넌트(React Server Component)에 대한 고찰"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("'use client' 즉, ClientComponent가 코드스플리팅의 분기점이 된다고 한다.\nServerComponent와 ClientComponent 둘다 서버에서 렌더링되는건 마찬가진데, 'use client'를 사용하는 이유가 단순 서버에서 렌더링할 때 "),e("code",[t._v("이 컴포넌트는 Hydration이 필요한 컴포넌트야")]),t._v("라고 알려주는것 빼고는 다른 역할이 있는지 궁금하다.")]),t._v(" "),e("h2",{attrs:{id:"_03-25"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_03-25"}},[t._v("#")]),t._v(" 03. 25.")]),t._v(" "),e("h3",{attrs:{id:"clientcomponent와-servercomponent의-동작-방식-feat-번들-최적화-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clientcomponent와-servercomponent의-동작-방식-feat-번들-최적화-2"}},[t._v("#")]),t._v(" ClientComponent와 ServerComponent의 동작 방식 feat. 번들 최적화 #2")]),t._v(" "),e("p",[t._v("어제 했던 삽질에 이어서")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app/layout.tsx")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createContext "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  createContext is not supported in Server Components")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ThemeContext "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createContext")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("RootLayout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" children "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("html"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ThemeContext"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dark"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("children"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ThemeContext"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("ThemeContext는 ServerComponent에서 사용할 수 없기에 아래와 같이 theme-provider라는 ClientComponent를 만들고 children props로 넘겨준다.")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app/theme-provider.tsx")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use client"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createContext "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ThemeContext "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createContext")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ThemeProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  children"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  children"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" React"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReactNode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ThemeContext"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dark"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("children"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ThemeContext"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("다시 돌아와서 app/layout.tsx에서 아래와 같이 Root를 ServerComponent로 유지할 수 있다")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app/layout.tsx")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ThemeProvider "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./theme-provider"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("RootLayout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  children"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  children"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" React"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReactNode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("html"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ThemeProvider"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("children"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ThemeProvider"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("You should render providers as deep as possible in the tree – notice how ThemeProvider only wraps "),e("code",[t._v("{children}")]),t._v(" instead of the entire "),e("code",[t._v("<html>")]),t._v(" document. This makes it easier for Next.js to optimize the static parts of your Server Components.")])]),t._v(" "),e("p",[t._v("출처 : "),e("a",{attrs:{href:"https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#using-context-providers",target:"_blank",rel:"noopener noreferrer"}},[t._v("NextJS 공식문서 rendering/composition-patterns"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("대충 Provider를 따로 Client Component로 만들어서 {children} props로 넘기면 그 내부의 컴포넌트는 ServerComponent로 사용할 수 있다는 내용이다."),e("br"),t._v("\n이렇게 하면 추가적으로 Client Javascript Bundle Size도 줄일 수 있다고 한다.")]),t._v(" "),e("h4",{attrs:{id:"추가-삽질"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#추가-삽질"}},[t._v("#")]),t._v(" 추가 삽질")]),t._v(" "),e("blockquote",[e("p",[t._v("여러개의 'use client' 지시어를 사용하면 여러개의 client 번들로 나뉘어진다."),e("br"),t._v("\n'use client' 지시어를 사용하면 해당 컴포넌트내에 있는 모든 모듈과(import) ChildComponent들이 client 번들에 추가되는걸로 간주된다.")])]),t._v(" "),e("p",[t._v("출처 : "),e("a",{attrs:{href:"https://stackoverflow.com/questions/77015023/if-i-pass-a-server-component-to-a-client-component-via-the-children-prop-will-i",target:"_blank",rel:"noopener noreferrer"}},[t._v("If I pass a server component to a client component via the children prop, will it be rendered on the client?"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("서버 컴포넌트는 렌더링 과정에서 직렬화된 결과가 inline script로 삽입된다는 정보를 얻을 수 있었다.")])]),t._v(" "),e("p",[t._v("출처 : "),e("a",{attrs:{href:"https://yozm.wishket.com/magazine/detail/2271/",target:"_blank",rel:"noopener noreferrer"}},[t._v("새로 등장한 React ServerComponent 이해하기"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("서버 컴포넌트에서 데이터를 가져오는 경우, 클라이언트 컴포넌트에 props로 데이터를 전달하고 싶을 수 있는데, ServerComponent에서 ClientComponent로 전달되는 props는 React에서 직렬화할 수 있어야 한다."),e("br"),t._v("\n이건 내 생각 👉 (서버 렌더링을 위해서는 직렬화를 해야되기 때문에 만약 ServerComponent에서 ClientComponent로 전달되는 props가 직렬화가 안될 경우에는 해당 ServerComponent도 직렬화가 안되기 때문으로 예상. 직렬화가 안되면 아예 js 번들로 빼고 참조값만 남겨야한다.)")])]),t._v(" "),e("p",[t._v("출처 : "),e("a",{attrs:{href:"https://rocketengine.tistory.com/entry/NextJS-13-Getting-Started-React-Essentials#%EC%84%9C%EB%B2%84%EC%97%90%EC%84%9C%20%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A1%9C%20props%20%EC%A0%84%EB%8B%AC(serializable)-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("rocketengine 티스토리 Getting Started - React Essentials"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("'use client' 지시어는 모듈 단위로 동작하며, ClientComponent에서 import 되는 Component는 모두 ClientComponent 이다. ServerComponent와 ClientComponent의 차이는 결국 직렬화 여부이다. ServerComponent의 경우 인라인 스크립트로 컴포넌트 정보가 제공되어 추가적인 네트워크 요청이 필요 없지만, ClientComponent의 경우 초기 렌더링 이후 컴포넌트의 정보를 추가적으로 요청하며 Hydate 시키는 과정이 필요하다.")])]),t._v(" "),e("p",[t._v("출처 : "),e("a",{attrs:{href:"https://www.joshwcomeau.com/react/server-components/#compatible-environments-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Making Sense of React Server Components"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"정리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#정리"}},[t._v("#")]),t._v(" 정리")]),t._v(" "),e("p",[t._v("우리가 사이트에 방문하면 서버와 브라우저에선 다음과 같은 과정을 거친다.")]),t._v(" "),e("ol",[e("li",[t._v("[Server] RootComponent부터 순회를 하면서 ServerComponent를 다 렌더링하고 직렬화 한다.")]),t._v(" "),e("li",[t._v("[Server] ClientComponent는 js 번들에 포함시킨다."),e("br"),t._v(" "),e("code",[t._v("이 때, use client로 명시된 ClientComponent를 기준으로 선언된 모든 import나 ChildComponent는 js 번들에 포함된다. children으로 넘겨진 데이터는 실제로 ServerComponent에서 import된 Component이기 때문에 ServerComponent로 간주된다.")])]),t._v(" "),e("li",[t._v("[Server] ServerComponent를 직렬화한 결과를 inline script에 포함시킨 html을 브라우저에 응답한다.")]),t._v(" "),e("li",[t._v("[Browser] 이미 렌더링 된 ServerComponent에 대한 렌더트리 정보는 js 번들에 포함되어있지 않으므로 inline script에 포함되어있는 ServerComponent를 직렬화한 결과를 해석하여 가상돔에 포함시킨다.")]),t._v(" "),e("li",[t._v("[Browser] 이후 ClientComponent는 렌더트리 정보가 담긴 js 번들을 다시 서버에 요청하여 Hydrate 과정을 수행한다.")])]),t._v(" "),e("p",[t._v("즉, 의문점에 대한 대답은"),e("br"),t._v("\n최상단 컴포넌트가 Client Component일 경우 초기 렌더링 이후 전체 렌더트리 정보가 네트워크를 통해서 전달된다.")]),t._v(" "),e("h4",{attrs:{id:"결론"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#결론"}},[t._v("#")]),t._v(" 결론")]),t._v(" "),e("p",[t._v("가장 인상깊었고 중요하게 생각하는 부분은")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("ServerComponent를 직렬화한 결과를 첫 html에 포함시켜 준다는것.")])]),t._v(" "),e("li",[e("p",[t._v("'use client' 지시어는 파일이나 모듈 레벨에서 작동한다는것,")]),t._v(" "),e("ul",[e("li",[t._v("즉, 'use client' 지시어가 선언된 컴포넌트를 기준으로 모든 import나 ChildComponent는 모두 ClientComponent이고 client bundle에 포함된다는것이다. 하지만 props (특히 children)로 넘겨진 데이터는 Server에서 렌더링할 수 있다. (ServerComponent에서 children props로 전달된 컴포넌트는 서버에 의해 고정된 정적인 데이터이기 때문.)")])])]),t._v(" "),e("li",[e("p",[t._v("ClientComponent와 ServerComponent의 차이는 렌더트리 정보를 인라인으로 주입해주냐 추가적인 네트워크로 주입해주냐의 차이인것 같다. 즉, 적절히 활용하는게 맞는 방법인것 같다.")])])]),t._v(" "),e("p",[t._v("개인적으로 힘든 삽질이었다."),e("br"),t._v("\n하지만 아직 완벽히 이해한 느낌은 아니다. 나머지 개념은 사용하면서 배워야겠다.")]),t._v(" "),e("h4",{attrs:{id:"참고하면-좋을듯한-정보"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#참고하면-좋을듯한-정보"}},[t._v("#")]),t._v(" 참고하면 좋을듯한 정보")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://nextjs-app-router-training.vercel.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NextJS App router 시뮬 사이트"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://hrtyy.dev/web/rsc_payload/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RSC Payload에 대해서 (해외)"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://www.plasmic.app/blog/how-react-server-components-work",target:"_blank",rel:"noopener noreferrer"}},[t._v("How React server components work: an in-depth guide"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);