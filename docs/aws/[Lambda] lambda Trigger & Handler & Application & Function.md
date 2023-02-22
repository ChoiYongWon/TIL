# [Lambda] lambda Trigger & Handler & Application

## 전체적인 틀

대표적인 아마존의 PAAS이자 FAAS 서비스이다.

`이벤트 방식`으로 동작한다.
예를 들어, Lambda에 `이벤트 A`를 트리거 해놓고 `핸들러 A`를 설정해놓으면
`이벤트 A`가 발생할때마다 Lambda에 등록된 `핸들러 A`를 호출한다.

여기서 `핸들러`는 하나의 `함수`이다.

이때 `트리거`가 발생하기 전에는 서버가 꺼져있고
`트리거`가 발생된 후 서버가 잠시 실행되어 작업을 처리하고
다시 꺼진다

이때 비용은 서버가 핸들러에 등록된 함수를 수행한 시간에 따라 청구된다.

### Lambda 트리거

`Lambda 트리거`는 `Lambda 함수`를 호출할 수 있는 역할을 한다.  
`트리거`에는 `이벤트`를 연결할 수 있는데, `이벤트`가 발생할 수 있는 요소는 다음과 같다.

- AWS CLI
- Lambda CLI
- AWS 리소스 (S3, API Gateway, SQS 등)
- 함수 URL

등이 있다.

### Lambda 핸들러

Lambda 핸들러는 Lambda 트리거로 인해 발생되는 함수같은 개념이다.
핸들러는 Lambda 함수 안에 정의되는데 핸들러 이름 유형은 다음과 같다.

`핸들러 함수가 있는 파일명`.`핸들러 함수의 이름`

즉, `핸들러`에는 `트리거`가 발동되었을때 실행시킬 함수의 정보를 담고있다.

Lambda가 이벤트 함수를 호출할 때 Lambda 런타임은 함수 핸들러에 다음 두가지 인수를 전달한다.

- 이벤트 객체 : 처리할 Lambda 함수에 대한 데이터
- 컨텍스트 객체 : 호출, 함수 및 런타임 환경에 관한 정보

또한 핸들러 함수는 값을 반환 할 수 있는데, 아직 잘 모르겠다.

## Lambda 애플리케이션

여러개의 함수와 여러개의 리소스(AWS 서비스)로 구성되있다.  
`Lambda 애플리케이션`을 생성하기 위해선 CloudFormation `template이` 필요하며,
`template` 안에는 다음과 같은 정보들이 있다.

- API Gateway
- Lambda function
- S3 (CloudFormation Template 저장)
- S3 (Server Application 파일 ex) nestJS)
- IAM Role

등등

`Lambda 애플리케이션`은 등록된 `template`를 기반으로 리소스를 생성하며 하나의 어플리케이션을 구성한다.

### Serverless Framework

Serverless Framework를 사용하면 개발자는 보다 더 서비스 개발에 집중할 수 있도록
알아서 Template을 만들고 배포해준다.

## Lambda 함수

함수는 Lambda에서 코드를 실행하기 위해 호출할 수 있는 리소스이다. 함수에는 사용자가 함수에 전달하거나 다른 AWS 서비스가 함수에 보내는 이벤트를 처리하는 코드가 있다.

## Reference

- [https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/welcome.html](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/welcome.html)
