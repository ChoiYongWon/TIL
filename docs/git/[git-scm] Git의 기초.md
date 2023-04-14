# Git의 기초

## git 저장소 만들기

보통 다음 두가지 방법으로 저장소를 만들 수 있다.

- 아직 버전관리를 하지 않는 로컬 디렉토리 하나를 선택해서 Git 저장소를 적용하는 방법

  ```sh
  # 버전관리를 하고 싶은 디렉토리
  # 디렉토리 내에 .git 디렉토리가 생성되고 버전관리가 시작된다.

  $ git init
  ```

- 다른 어딘가에서 Git 저장소를 Clone 하는 방법

  ```sh
  # 불러오고 싶은 디렉토리

  $ git clone <저장소 url>
  ```

  ```sh
  # 저장소명 =! 폴더이름

  $ git clone <저장소 url> <폴더 이름>
  ```

## 수정하고 저장소에 저장하기

워킹 디렉토리의 모든 파일은 크게 `Tracked(관리대상임)`와 `Untracked(관리대상이 아님)`로 나눈다.  
`Tracked` 파일은 또 `Unmodified(수정하지 않음)`와 `Modified(수정함)` 그리고 `Staged(커밋으로 저장소에 기록할)` 상태 중 하나이다

### 파일의 상태 확인하기

이러한 파일의 상태를 확인하는 명령어가 있다.

```sh
$ git status
```

### 파일을 새로 추적하기

`git add` 명령어로 파일을 새로 추적할 수 있다.
여기서 추적이란 `.git/object/` 내부에 해당 파일 내용이 해시화되서 파일 이름으로 저장된다.

```sh
$ git add <filename>
```

### Staged와 Unstaged 상태의 변경 내용을 보기

`git diff` 명령어로 Unstaged 된 파일들중 Staged되거나 Commit된 파일들과 비교를 할 수 있다.

```sh
$ git diff <filename>
```

`git diff` 명령어를 수행하면 우선적으로 Unstaged된 상태와 동시에 Staged 된 파일이 있으면 (Modified 상태) Staged 된 파일과 비교를 해주고, 이 외에는 Commit 된 파일과 비교해준다.

`git diff` 명령어는 Unstaged 된 파일들만 대상으로 하며 Staged 된 파일들과 Commit된 파일들을 비교할때는 `git diff --staged` 명령어를 사용하면된다.

### 변경사항 커밋하기

`git commit` 명령어를 통해 staged 된 파일을 대상으로 commit을 수행한다.
commit을 수행한다란, `.git/object` 내에 Tree 객체와, Commit 객체를 생성한다.

```sh
$ git commit
```

### 파일 삭제하기

`git rm` 명령어를 통해 파일을 삭제하고 커밋할 수 있다.

```sh
$ git rm <filename>
```

`git rm` 명령어를 수행하면 파일이 삭제됨과 동시에 Staging-area에 추가되어있다.
단, 커밋된 파일을 대상으로 수행할 수 있으며, --cached 옵션을 사용하면 Staged 된 파일을 Untracked 로 바꿀 수 있다.

즉, 이 파일을 더 이상 추적하지 않겠다는 의미다.

```sh
$ git rm --cached <filename>
```

이 때, 파일은 삭제되지 않는다.

### 파일 이름 변경하기

git은 파일 이름의 변경이나 파일의 이동을 명시적으로 관리하지 않는다.
`git mv` 명령어를 통해 파일 이름을 변경할 수 있다.

```sh
$ git mv file_from file_to
```

명시적인 명령어는 이렇지만,
git은 내부적으로 파일 내용을 hash한 결과값이 같은데 파일 이름이 다르면 `renamed`로 인식한다.

## 커밋 히스토리 조회하기

`git log` 명령어를 통해 commit 기록을 시간 순서대로 보여준다.

```sh
$ git log
commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700

    changed the version number

commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Sat Mar 15 16:40:33 2008 -0700

    removed unnecessary test

commit a11bef06a3f659402fe7563abf99ad00de2209e6
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Sat Mar 15 10:31:28 2008 -0700

    first commit
```

## 되돌리기

git commit을 수행하고 수정하고 싶은 순간이 있다.

- commit message를 잘못 적은 순간
- 까먹고 파일을 추가 안한 순간

이 때 git commit 에 --amend 옵션을 주면 다시 커밋할 수 있다.

```sh
$ git commit --amend
```

커밋 이후 빠뜨린 파일을 추가 안했을 때 아래와 같이 수행하면된다.

```sh
$ git commit -m 'initial commit'
$ git add forgotten_file
$ git commit --amend
```

이 때, 새로 커밋이 생성되는게 아니라 가장 최신 커밋을 덮어쓰는 개념이다.

### 파일 상태를 Unstage로 변경하기

git reset 명령어를 통해 Staged 된 파일을 Unstaged 시킬 수 있다.

```sh
$ git reset HEAD <filename>
```

### Modified 파일 되돌리기

git reset 명령어를 통해 Unstaged 되었지만, 파일 내용은 아직 변경된 상태이다. 이 파일 내용 마저도 마음에 안들어 수정하기 전으로 돌리고 싶을때 git checkout -- 명령어를 통해 파일을 이전 커밋의 내용으로 돌릴 수 있다.

```sh
$ git checkout -- <filename>
```
