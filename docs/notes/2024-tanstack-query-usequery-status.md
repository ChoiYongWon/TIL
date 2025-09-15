---
permalink: /notes/2024-tanstack-query-usequery-status/
comment: true
---

# Tanstack Query useQuery 상태

상태는 총 4가지

- `Fresh`
- `Fetching`
- `Stale`
- `Pause`
- `Inactive`

`Stale`은 Fresh의 반대이며, `Stale` 상태에 있으면 데이터가 신선하지 않다는 뜻이다 (오래된 데이터)

staleTime이 지나면 데이터는 더이상 Fresh하지 않다.

query가 언마운트되면 쿼리는 `Inactive` 상태가 되며 gcTime이 지나면 아예 삭제된다.

`Stale`과 `Fresh` 상태는 `Inactive` 상태여도 기억하고 있다가, 다시 마운트되면 반영된다.  
즉, staleTime이 Infinity면 `Inactive`된 상태에서 다시 마운트가 되어도 재요청하지 않는다.  
반대로 stale 상태의 쿼리가 언마운트되어 `Inactive`가 되었다면 이 후에 마운트 되면 다시 refetch된다.

staleTime과 gcTime을 Infinity로 두면 처음 요청 이외에는 자동으로 요청하지 않는다.(데이터가 계속 `Fresh`하기 때문) -> refetch 함수로 캐시를 업데이트할 수 있다. (refetch 함수는 캐시가 있더라도 최신 데이터로 다시 업데이트 하기 때문)

[Tanstack Query Caching Examples](https://tanstack.com/query/latest/docs/framework/react/guides/caching?from=reactQueryV3)
