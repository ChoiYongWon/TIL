---
permalink: /notes/2024-react-expiration-time/
comment: true
---

# React에서 expirationTime

Scheduler가 Work에게 처리 우선순위를 알려주는 기준이 expirationTime. 여기에 할당되는 값은 이벤트 발생 시점 시간

expirationTime이 클수록 우선순위가 높아짐 (expirationTime은 MAGIC_NUMBER에 performance.now()를 뺀값이어서 시간이 흐를 수록 작아짐. 즉, 나중에 발생한 이벤트일수록 작어지고, 먼저 발생한 이벤트일수록 커짐)
