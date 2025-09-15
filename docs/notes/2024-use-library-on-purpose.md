---
permalink: /notes/2024-use-library-on-purpose/
comment: true
---

# 라이브러리는 목적성을 갖고 사용하자.

이번 AT 프로젝트를 진행하면서 요청 라이브러리는 아무 생각없이 axios로 채택을 했다.  
axios가 내놓는 장점들을 알지도 못한 채 말이다..

그러다가 Param을 전달받아서 빈 값이 아닌 경우에만 쿼리 스트링에 포함하고 싶어서 아래와 같이 더러운 로직을 짰다.

```ts
type Param = {
  query: string;
  name: string;
  at_id: string;
};

// TODO axios 테스트환경 & 배포환경 baseurl 지정해주기
export const URL = "https://www.a-spot-thur.app/api/at/count";
export const GETALLMAP_QUERY_KEY = `${URL}[GET]`;

export const fetcher = ({ query, name, at_id }: Param) => {
  const querie_str = query ? `query=${query}` : "";
  const name_str = name ? `name=${name}` : "";
  const at_id_str = at_id && at_id != "index" ? `at_id=${at_id}` : "";
  const merge = [querie_str, name_str, at_id_str].filter((str) => str != "");
  const query_string = merge.length ? `?${merge.join("&")}` : "";

  return atAxios.get(`${URL}${query_string}`).then(({ data }) => data);
};
```

오늘 axios 공식 문서를 보는데

```js
{
  // `params`은 요청과 함께 전송되는 URL 파라미터입니다.
  // 반드시 일반 객체나 URLSearchParams 객체여야 합니다.
  // 참고: null이나 undefined는 URL에 렌더링되지 않습니다.
  params: {
    ID: 12345
  },
}
```

이런 편리한 기능이 있더라.

```ts
type Param = {
  query: string;
  name: string;
  at_id: string;
};

// TODO axios 테스트환경 & 배포환경 baseurl 지정해주기
export const URL = "https://www.a-spot-thur.app/api/at/count";
export const GETALLMAP_QUERY_KEY = `${URL}[GET]`;

export const fetcher = ({ query, name, at_id }: Param) => {
  return atAxios
    .get(`${URL}`, {
      params: {
        query,
        name,
        at_id,
      },
    })
    .then(({ data }) => data);
};
```

바로 수정.  
라이브러리는 단순 트렌디하고 핫하다는 이유보단 목적성을 갖고 사용하자.
