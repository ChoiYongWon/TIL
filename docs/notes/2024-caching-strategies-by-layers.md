---
permalink: /notes/2024-caching-strategies-by-layers/
comment: true
---

# 여러 Layer에서 캐싱 전략

cache 유효 시간이 지나면 revalidation(재검증)을 수행한다.

재검증은 요청 헤더에 다음과 같은 헤더를 추가함으로서 수행할 수 있다.

- If-None-Match : 캐시된 리소스의 ETag 값으로 비고
- If-Modified-Since : 캐시된 리소스의 Last-Modified 값 이후 서버 리소스와 비교

결과가 유효하면 304 유효하지 않으면 200을 내려준다.

GPT 피셜로는 304 응답을 받은 경우에도 max-age가 다시 초기화되는게 아니라 서버 구현에 따라 다르다고 한다.

- **`no-cache`** 캐시의 max-age가 항상 0인 값 사용하려고 할 때마다 재검증 요청을 보냄-

- **`no-store`** 캐시를 아예 저장안함. 가장 강력한 Cache-Control 값

- **`public`** 중간 서버(cdn)도 캐시를 저장할 수 있음

- **`private`** 가장 끝에 사용자만 캐시를 저장할 수 있음

- **`s-maxage`** 중간 서버에만 적용되는 캐시 max-age

```json
s-maxage=31536000, max-age=0 // 중간서버에는 1년, 브라우저에는 매번 재검증 요청
```

**Reference**  
[Toss 웹 서비스 캐시 똑똑하게 다루기](https://toss.tech/article/smart-web-service-cache)
