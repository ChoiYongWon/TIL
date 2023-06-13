# DNS CNAME Record 흐름

## CNAME 시나리오

유저 A는 자신의 블로그 `choiyongwon.github.io`의 주소가 마음에 안들어서  
도메인 `til.choiyongwon.me`를 구입하여 연결시키려 한다.

DNS 공급자(ex: 가비아)를 통해 `til.choiyongwon.me` CNAME에 `choiyongwon.github.io`을 등록하였다.

추가로, `github` 사이트에서 Custom Domain으로 `til.choiyongwon.me`을 등록하였다.
이는 주 Domain을 바꾸기 위한 과정이다.  
즉, 기존 `choiyongwon.github.io`으로 접속하면 `til.choiyongwon.me`으로 리다렉트된다.

## CNAME 실제 동작 과정

### Case 1 (`til.choiyongwon.me`으로 접속할 경우)

1. `til.choiyongwon.me`으로 접속한다.
2. DNS Server로부터 CNAME 레코드로 등록된 `choiyongwon.github.io`을 받아온다.
3. `choiyongwon.github.io`으로 접속한다.
4. DNS Server로부터 A 레코드로 등록된 `choiyongwon.github.io`의 `IP`를 받아온다.
5. `IP`로 접속한다.
6. github 서버에서 source URL이 `til.choiyongwon.me`임을 확인하고 매핑된 github page로 연결해준다.

### Case 2 (`choiyongwon.github.io`로 접속할 경우)

1. `choiyongwon.github.io`으로 접속한다.
2. DNS Server로부터 A 레코드로 등록된 `choiyongwon.github.io`의 `IP`를 받아온다.
3. `IP`로 접속한다.
4. github 서버에서 source URL이 `choiyongwon.github.io`임을 확인하고 아래 결과값과 같이 301 응답코드를 반환하고 바뀐 등록된 주 도메인(`til.choiyongwon.me`)으로 리디렉트 시킨다.

```http
GET /TIL HTTP/2
Host: choiyongwon.github.io
user-agent: insomnia/2022.7.0
accept: */*

HTTP/2 301
location: https://til.choiyongwon.me
```

5. goto Case 1
