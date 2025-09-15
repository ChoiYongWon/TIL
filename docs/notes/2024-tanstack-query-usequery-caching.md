---
permalink: /notes/2024-tanstack-query-usequery-caching/
comment: true
---

# Tanstack Query useQuery 캐싱

useQuery가 자동으로 refetch 하는 경우는 다음과 같다. 우선 데이터가 Stale 상태여야하고,

- 네트워크 재연결
- 윈도우 재포커스
- 컴포넌트 마운트
- refetchInterval

수동으로 refetch하는 과정은 useQuery에서 제공하는 refetch 함수를 실행하면 된다.  
refetch 함수를 실행하면 일단 기존 캐시값을 반환하고 백그라운드에서 최신 데이터를 가져와서 캐시를 업데이트한다.

(확실하지 않음) useQuery 함수에 enabled를 false로 주면 useQuery가 위와 같이 자동으로 refetch 하지 않으므로 수동(refetch 함수)으로 호출해야 된다.

[[TIL-35] react-query와 검색 기능에서의 캐싱 처리](https://junvelee.tistory.com/129)  
[[React Query] 리액트 쿼리 '잘' 사용해보자 - 네트워크 비용 감소 / UX 개선](https://heycoding.tistory.com/128)
