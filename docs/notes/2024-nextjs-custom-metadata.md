---
permalink: /notes/2024-nextjs-custom-metadata/
comment: true
---

# NextJS 14에서 커스텀 metadata (google) 추가

크롬으로 접속할때 항상 번역 팝업이 떠서 짜증나서 비활성화하려고 메타데이터에 `google: notranslate`를 추가해야되는데 NextJS에 기본 제공되는 필드가 아니었다.

![](https://github.com/ChoiYongWon/AT/assets/40623433/e689be5e-7fa2-403c-8a91-b2eed727daa1)

NextJS 14에서 메타데이터를 추가하려면 기본 제공되는 메타 데이터들을 활용해야한다.  
그 이 외의 데이터들은 [other](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#other) 필드를 사용해서 추가하면 된다.

```js
export const metadata: Metadata = {
  title: "AT - A Spot Thur",
  description: "나만의 지도를 만들어보세요!",
  other: {
    google: "notranslate",
  },
};
```
