---
permalink: /notes/git-commit-ignore/
tags: [git]
comment: true
---

# rebase나 cherry-pick시 무시되는 commit

rebase나 cherry-pick은 커밋의 변경사항(diff)을 적용한다는 공통점이 있다.  
[👉 rebase가 동작하는 원리](/notes/git-how-rebase-works/)

변경 사항은 patch-id로 구별할 수 있는데, 만약 patch-id가 동일한 커밋이 이미 존재한다면 해당 커밋은 제외되고 아래와 같은 메세지가 출력된다
[👉 patch-id란?](/notes/git-what-is-patch-id/)

```sh
warning: skipped previously applied commit {commit-id}
hint: use --reapply-cherry-picks to include skipped commits
hint: Disable this message with "git config advice.skippedCherryPicks false"
Successfully rebased and updated refs/heads/base.
```
