---
permalink: /notes/2024-prisma-migrate-dev-vs-deploy/
comment: true
---

# prisma migrate dev vs prisma migrate deploy

prisma 스키마를 작성하고 실제 db에 반영시키는 두가지 방법이다.

```
npx prisma migrate dev
```

- shadoww db에서 기존 마이그레이션 기록을 전부 재실행
- shadow db에 보류중인 마이그레이션 모두 적용
- 스키마에 변경이 생겼을 경우 새 마이그레이션 생성
- 모든 마이그레이션 적용 후 \_prisma_migrations 에 기록
- prisma client 재 생성
- 마이그레이션 적용 시 모든 데이터 리셋

```
npx prisma migrate dev --create-only
```

`--create-only` 명령어를 사용하면 원격으로 적용하지 않고 마이그레이션을 생성한다.

```
npx prisma migrate deploy
```

- 보류중인 마이그레이션을 적용한다
- 데이터베이스를 리셋하지 않는다
- shadow db에 의존하지 않는다
