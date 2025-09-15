---
permalink: /notes/2024-upload-image-to-s3-via-cloudfront/
comment: true
---

# upload image to s3 via cloudfront

s3와 cloudfront를 연결한 상태에서 presigned url을 사용해서 업로드를 할려니 에러가 난다.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Error>
    <Code>InvalidArgument</Code>
        <Message>x-amz-content-sha256 must be UNSIGNED-PAYLOAD, STREAMING-UNSIGNED-PAYLOAD-TRAILER, STREAMING-AWS4-HMAC-SHA256-PAYLOAD, STREAMING-AWS4-HMAC-SHA256-PAYLOAD-TRAILER, STREAMING-AWS4-ECDSA-P256-SHA256-PAYLOAD, STREAMING-AWS4-ECDSA-P256-SHA256-PAYLOAD-TRAILER or a valid sha256 value.
        </Message>
    <ArgumentName>x-amz-content-sha256<ArgumentName>
    <ArgumentValue>null</ArgumentValue>
    <RequestId>C3B2DY8CB4FZ4N40</RequestId>
    <HostId>SgOlN+Wp+2kbRHOaPfywiIMg2f8mwabKW+Ex3AUtrUuMXbdxnpq7zM5xYIM9DydChOjr77MlTlw=</HostId>
</Error>
```

몇몇 글을 보면서 삽질을 해보았다.

[Uploading into S3 directly vs through CloudFront](https://www.reddit.com/r/aws/comments/13efai9/uploading_into_s3_directly_vs_through_cloudfront/)  
[Patterns for building an API to upload files to Amazon S3](https://aws.amazon.com/ko/blogs/compute/patterns-for-building-an-api-to-upload-files-to-amazon-s3/)  
[Using CloudFront to upload files to S3 bucket using presign URL and custom domain](https://repost.aws/questions/QUK6WNxu6XQsSmGgljY5de9w/using-cloudfront-to-upload-files-to-s3-bucket-using-presign-url-and-custom-domain)

첫번째 글에서 cloudfront를 통해 업로드하는 방법은 바람직하지 못한 방법이라고 언급하였고 (업로드 시 캐싱 이득을 못보기 때문)  
두번째 글에서는 s3에 업로드하는 다양한 패턴들을 소개하는데 cloutfront를 통해 업로드하는 경우는 없었다.  
세번째 글은 그냥 긴가민가하다.

생각해본 결과, 이미지 get은 cloudfront로 하되, 업로드는 s3의 presigned url로 하도록하는게 해답인것 같다.
