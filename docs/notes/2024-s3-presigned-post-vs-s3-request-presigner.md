---
permalink: /notes/2024-s3-presigned-post-vs-s3-request-presigner/
comment: true
---

# s3-presigned-post vs s3-request-presigner

presigned url을 사용해야하는데 두가지 방식이 보였다.  
`s3-request-presigner`는 PUT 메소드를 사용하고 만료 시간밖에 정하지 못하는 반면 `s3-presigned-post`는 POST 메소드를 사용하여 더 많은 제약 조건을 설정할 수 있다. `s3-request-presigner`의 상위 호환 느낌이다.

[s3-request-presigner AWS 공식문서](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-s3-request-presigner/)  
[s3-presigned-post AWS 공식문서](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-s3-presigned-post/)

[POST 메소드를 활용한 제약조건 예시](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-HTTPPOSTConstructPolicy.html)

[S3-Presigned-Url-도입하기](https://velog.io/@invidam/S3-Presigned-Url-%EB%8F%84%EC%9E%85%ED%95%98%EA%B8%B0)
