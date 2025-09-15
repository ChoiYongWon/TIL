---
permalink: /notes/2024-execute-prisma-client-in-edge-env/
comment: true
---

# prismaClient를 edge 환경에서 실행

middleware에서 prismaClient를 사용할 일이 생겼다.  
[middleware은 vercel edge 환경에서 실행](https://vercel.com/docs/functions/edge-middleware)되는데, prismaClient를 edge 환경에서 실행하려면 Accelerate를 사용해야된다.

Accelerate는 Edge환경의 DB 캐싱서비스. [참고](https://www.prisma.io/docs/accelerate/getting-started)  
Accelerate 서비스를 생성하고 기존 DB URL을 연결하면 매핑된 새로운 URL을 반환해준다.

해당 URL에 요청하면 Accelerate에서 기존 우리의 DB에 요청을 하고 결과값을 응답해준다.  
해당 요청에 대한 응답은 캐싱된다.

기존 DB도 캐싱기능이 있을텐데 Accelerate를 사용하는 이유는??  
아마 Edge환경에 배포되어있기에 응답과 처리속도(Accelerate 구조상)가 빨라서 Edge 환경에서 쓰기 적합하지 않을까?  
기존 prismaClient을 edge환경(리소스가 제한
