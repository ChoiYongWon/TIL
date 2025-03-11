---
permalink: /notes/git-search-commit-id/
tags: [git, 작성중]
---

# branch에서 특정 commit id가 존재하는지 확인

git 체리픽을 하다보면 특정 커밋이 체리픽하는 브랜치에 포함되어있는지 헷갈릴때가 있다

### commit id가 포함된 모든 브랜치 출력

```sh
git branch --contains {commitId}

# * develop
#   feat/1
#   feat/2
```

### 특정 branch 내에서 commit id 검색

```sh
git log {branch} | grep {commitId}

# commit {commitId}
```
