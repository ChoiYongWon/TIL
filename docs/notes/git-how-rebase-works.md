---
permalink: /notes/git-how-rebase-works/
tags: [git]
comment: true
---

# rebase가 동작하는 원리?

### rebase 전 브랜치

```git-graph
    commit id: "A"
    branch feature
    checkout main
    commit id: "B"
    commit id: "C"
    checkout feature
    commit id: "D"
    commit id: "E"
```

### rebase 시

```sh
# feature 브랜치
git rebase main
```

1. feature 브랜치의 각 `D` `E` 커밋을 임시저장 한다.
2. 이후 각 커밋의 변경 사항들을 main 브랜치의 `C` 커밋을 기준으로 다시 적용한다.
   - 재적용 과정에서 feature 브랜치의 커밋 아이디는 다시 계산된다
   - 재적용 과정에서 이미 main 브랜치에 존재하는 동일한 변경 사항은 자동으로 제외된다.

즉, feature 브랜치의 개발 환경이 `C` 커밋을 기준으로 재 설정 되었다고 보면 된다.

### rebase 이후 브랜치

```git-graph
    commit id: "A"

    checkout main
    commit id: "B"
    commit id: "C"
    branch feature

    commit id: "D`"
    commit id: "E`"
```

이제 feature 브랜치에서는 커밋 `B`와 `C`의 변경사항도 적용된 상태가 된다.

### 어떤 상황에서 사용하나요?

main에 적용된 변경 사항을 feature 브랜치에도 적용하고 싶을 때 주로 사용된다.
