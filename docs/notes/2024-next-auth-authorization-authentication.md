---
permalink: /notes/2024-next-auth-authorization-authentication/
comment: true
---

# next-auth 인증/인가 고민

로그인 과정에서 (next-auth 사용)  
next-auth에서 제공하는 `session-token` 만으로 인증/인가를 담당해도 될까??  
JWT를 안써도 될까?? 라는 고민중

[next-auth를 활용한 인증 및 인가 이해하기](https://geuni620.github.io/blog/2024/1/17/authorization/)
[next-auth credential provider에서 jwt 사용하기 (해외)](https://remaster.com/blog/next-auth-jwt-session)
[next-auth에서 세션 및 JWT에 대한 ISSUE (해외)](https://github.com/nextauthjs/next-auth/discussions/2790)

현재 개발하고 있는 서비스 자체가 NextJS 풀스택으로 개발중이다.  
즉, route handler에서 들어오는 요청에 대한 세션에 접근할 수 있다. (요청한 유저의 신원을 조회할 수 있다.)

만약 API 서버가 따로 있다고 하면 JWT가 필요할 수 있겠다.

[next-auth FAQ: next-auth에서 제공하는 JWT(session-token)의 장점은 뭔가요](https://next-auth.js.org/faq)

위 FAQ에,

`NextAuth.js의 JSON 웹 토큰은 암호화 암호화(JWE)를 사용하여 포함된 정보를 JWT 세션 토큰에 직접 저장하여 보안을 유지합니다. 그런 다음 이 토큰을 사용하여 포함된 정보를 확인하기 위해 데이터베이스에 연결할 필요 없이 동일한 도메인의 서비스 및 API 간에 정보를 전달할 수 있습니다.`

또한,

`JWT는 서버 읽기 전용 쿠키에 저장되므로 사이트에서 실행 중인 타사 JavaScript가 JWT의 데이터에 액세스할 수 없으므로 암호화 없이도 클라이언트가 알아도 상관없는 정보를 안전하게 저장하는 데 JWT를 사용할 수 있습니다.`

문항을 읽어보았을 때, Session-token만으로 인증/인가를 담당해도 될것같은 느낌을 받았다.

그럼 Session Expire 시간을 늘려야되나..??  
일단 Session Token만 사용해보자.
