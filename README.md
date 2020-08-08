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

### **convict**
  Used to create a schema for configuration and verify it at run time

  - [convict config managment](https://www.npmjs.com/package/convict)

### **copyfiles**
  Used to copy non typescript file into the dist dirctory during build

  - [copyfiles](https://www.npmjs.com/package/copyfiles)

### **ts-node-dev**
  Restarts on file changes but re-uses compiled files as it can

  - [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

### **json-schema-to-typescript**
  Used to convert the json schemas used by fastify for request/response typing
  into typescript typings.

  - example provided in user service
  - [json-schema-to-typescript](https://www.npmjs.com/package/json-schema-to-typescript)

### **Majestic**
  Jest interactive test runner. Should install globally
  - [majestic](https://github.com/Raathigesh/majestic)

### **Dbmate**
  Golang tool for database migrations (updates the schema dump in db directory)
  - .env file contains the default connection string
  - [dbmate docs and installation](https://github.com/amacneil/dbmate)
### Dbmate Commands

```sh
dbmate           # print help
dbmate new       # generate a new migration file
dbmate up        # create the database (if it does not already exist) and run any pending migrations
dbmate create    # create the database
dbmate drop      # drop the database
dbmate migrate   # run any pending migrations
dbmate rollback  # roll back the most recent migration
dbmate down      # alias for rollback
dbmate status    # show the status of all migrations (supports --exit-code and --quiet)
dbmate dump      # write the database schema.sql file
dbmate wait      # wait for the database server to become available
```


## Actions
``` sh
npm run db:dev:start     # bring up a docker image for postgres development server (see services README)
npm run db:dev:stop      # bring down the docker image for postgres development server (see services README)
npm run db:dev:clean     # starts a fresh dev postgres docker image and creates an empty database in it (follow with dbmate up to get full schema)
npm run db:test:clean    # starts a fresh test postgres docker image and creates an empty database and then uses schema.sql to create
```

> https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-migrate
> prisma db setup

```
npx prisma migrate save --experimental
npx prisma migrate up --experimental
npx prisma generate
```
