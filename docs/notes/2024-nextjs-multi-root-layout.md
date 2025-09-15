---
permalink: /notes/2024-nextjs-multi-root-layout/
comment: true
---

# NextJS multi root layout 간의 라우팅

NextJS에서 Multi root layout 구조에서 root 간의 이동은 전체 페이지가 다시 로드된다 (캐싱이 안됨). `Link` 컴포넌트나 `route prefetch` 메소드로도 안통함.

Multi root layout 구조에서만 해당됨.
