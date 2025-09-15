---
permalink: /notes/2024-lambda-sharp-image-compression/
comment: true
---

# lambda 에서 sharp로 이미지 압축

> 최신 버전의 sharp(0.33)는 Lambda와 호환되지 않는다. `0.32.6` 버전을 사용해야한다.

```sh

npm install --arch=x64 --platform=linux --target=16x sharp@0.32.6

```

[더 나은 사용자 경험을 위한 이미지 리사이징을 해보자](https://medium.com/@wj2kim/%EB%8D%94-%EB%82%98%EC%9D%80-%EC%82%AC%EC%9A%A9%EC%9E%90-%EA%B2%BD%ED%97%98%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A6%AC%EC%82%AC%EC%9D%B4%EC%A7%95%EC%9D%84-%ED%95%B4%EB%B3%B4%EC%9E%90-cffbb55b9d95)  
[자습서: Amazon S3 트리거를 사용하여 썸네일 이미지 생성](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/with-s3-tutorial.html)

### NextJS Image Optimizing

알아보니 NextJS에서 remote 이미지도 최적화 해준다. 이러한 이유로 next.config.js에 Next Image에서 사용하는 src의 도메인을 작성하라고 하는것 같다.  
동작 방식은 클라이언트에서 이미지를 요청하면 Next Server에서 이미지를 요청하여 자체적으로 최적화해서 브라우저에 제공해주는걸로 보인다.

Next Server와 Next Client간의 로딩은 빠르겠지만 Next Server와 S3(이미지 저장소)간의 통신은 S3에 이미지를 압축해서 저장하지 않으면 여전히 느리고 비용도 많이 나올것으로 보인다.  
일단 Next에서 제공해주는 최적화 방식을 사용해보고 문제가 있다 싶으면 바꾸자.

Next Server에서 자체적으로 압축해줄때 기본적으로 squoosh를 쓰는데 sharp가 더 성능이 좋다고 매우 추천하니 써보자.
