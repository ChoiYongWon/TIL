---
permalink: /notes/2024-access-s3-by-only-cloudfront/
comment: true
---

# CloudFront를 통해서만 S3 객체 접근

CloudFront로 s3를 연결했고 get은 CloudFront의 url로만, upload는 s3의 presigned url로만 하고 싶었다.

버킷 권한 설정을 다음과 같이하고

> 객체를 get하는 요청은 CloudFront로부터만 받겠다.

```json
{
  "Version": "2008-10-17",
  "Id": "PolicyForCloudFrontPrivateContent",
  "Statement": [
    {
      "Sid": "AllowCloudFrontServicePrincipal",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::a-spot-thur/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::533267392768:distribution/E2C03KKK1Y4NIL"
        }
      }
    }
  ]
}
```

버킷 권한을 다음과 같이 해주었다.

![](https://github.com/ChoiYongWon/TIL/assets/40623433/5aa6e8c1-2092-402e-a53c-b4530f621179)

> 모든 객체에 대해 퍼블릭 액세스를 무시한다.

이러면 모든 객체에 대한 퍼블릭 액세스는 무시되고 버킷 정책이 적용되어 CloudFront를 통해서면 객체에 접근(get)할 수 있다.

야매로 읽고 하긴헀는데,
조만간 버킷 퍼블릭 엑세스에 대해서 더 공부해야겠다.
