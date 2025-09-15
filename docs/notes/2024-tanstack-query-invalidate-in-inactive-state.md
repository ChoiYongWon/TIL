---
permalink: /notes/2024-tanstack-query-invalidate-in-inactive-state/
comment: true
---

# Tanstack Query Inactive 상태에서 invalidate 시키기

Tanstack Query에서는 다음과 같이 캐싱된 query를 강제로 stale상태로 만들 수 있다.

```ts
queryClient.invalidateQueries({ queryKey: ["/at/count"] });
```

하지만 다음과 같이 Inactive 상태에서는 stale 상태가 되지 않는다.

<div class="img-container">
    <img class="img" src="https://github.com/ChoiYongWon/AT/assets/40623433/4bc82bb6-457a-46ca-a760-ccdd5ce2d8fa" alt=""/>
    <span class="caption">그림 1. Tanstack Query Developer Tool.</span>
</div>

뒤에 refetchType을 지정해주어 어느 상태일때 동작할지 명시해주면 된다.

```ts
queryClient.invalidateQueries({ queryKey: ["/at/count"], refetchType: "all" });
```

- `all` Inactive, Active 상태일때
- `inactive` Inactive 상태일때
- `active` Active 상태일때

**Reference**  
[Tanstack Query 공식문서 - refetchActive / refetchInactive](https://tanstack.com/query/latest/docs/framework/react/guides/migrating-to-react-query-4#refetchactive--refetchinactive)
