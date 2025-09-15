---
permalink: /notes/2024-presigned-url-condition-content-type-issue/
comment: true
---

# presigned URL에 업로드할 때 Condition Content-Type issue

presigned url 생성 시  
Condition (제약조건)은 다음과 같다.

```js
const Conditions: any = [
    ["eq", "$acl", "public-read"],
    ["eq", "$bucket", process.env.AWS_S3_BUCKET as string], // 버킷
    ["starts-with", "$Content-Type", "image/"], // 이미지 타입만
    ["starts-with", "$key", `user/${session.user.id}/`], // 사용자 폴더에만
];

```

업로드 요청 후 s3에서 에러가 날아왔다.

```xml
<Error>
    <Code>AccessDenied</Code>
    <Message>Invalid according to Policy: Policy Condition failed: ["starts-with", "$Content-Type", "image/"]</Message>
    <RequestId>0CPB85WE4SJQ18GW</RequestId>
    <HostId>o2mMEAUT0jrGx+eOnaPkPPZRNJKncnjDHZwkjsM3bMCzxa/d0cWNkQy9BfkVThuzvu0iuNx7P3o=</HostId>
</Error>
```

axios에 요청 때 Content-Type를 바꿔서 보냈는데 안되었고

```js
form.append("file", file);
form.append("Content-Type", type);
```

Form 타입에 이와 같이 기입해줘었는데 에러가 났다.

```js
form.append("Content-Type", type);
form.append("file", file);
```

순서 바꿔주니까 되더라  
어이없음.
