# [fastify](https://www.fastify.io/) with typescript

![Node.js CI](https://github.com/dmoose/fastify-ts-starter/workflows/Node.js%20CI/badge.svg)

## Integrations covered here:

- local development setup
- prettier and lint with editor integration
- integration with a database
- debugging (launch configurations for vscode for app and jest tests)
- deployment
- error logging

## Tools:

- convict
  Used to create a schema for configuration and verify it at run time

  - [convict config managment](https://www.npmjs.com/package/convict)

- copyfiles
  Used to copy non typescript file into the dist dirctory during build

  - [copyfiles](https://www.npmjs.com/package/copyfiles)

- ts-node-dev
  Restarts on file changes but re-uses compiled files as it can

  - [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

- json-schema-to-typescript
  Used to convert the json schemas used by fastify for request/response typing
  into typescript typings.

  - example provided in user service
  - [json-schema-to-typescript](https://www.npmjs.com/package/json-schema-to-typescript)

- Majestic
  Jest interactive test runner. Should install globally
  - [majestic](https://github.com/Raathigesh/majestic)

- Dbmate
  Golang tool for database migrations
  - [dbmate docs and installation](https://github.com/amacneil/dbmate)


## Actions
- npm run db:dev:start -> bring up a docker image for postgres development server (see services README)
- npm run db:dev:stop -> bring down the docker image for postgres development server (see services README)

> https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-migrate
> prisma db setup

```
npx prisma migrate save --experimental
npx prisma migrate up --experimental
npx prisma generate
```
