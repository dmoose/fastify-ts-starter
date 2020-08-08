# Docker Services are configured here

## Postgresql Dev Server
The docker-compose.devdb.yml file contains the specifications for the development postgresql server.
- server data is in ./data/data-dev
- postgres-dev.conf contains the server configuration
- schema-dev.sql is an initialization file run on an empty image
- if you stop the server and rm -rf data/data-dev/\* you will have a clean postgresql instance on next service start

## Postgresql Test Server
The docker-compose.testdb.yml file contains the specifications for the testing postgresql server.

## Postgres and Docker commands
| Command | Description |
| --- | --- |
| docker-compose -f docker-compose.devdb.yml run postgresql bash | open a shell into the running service image |
| docker inspect pg-dev | get information on our running service |

## psql
| Command | Description |
| --- | --- |
| psql -h host -d database -U user -W | start psql |
| psql -h 0.0.0.0 -p 5401 -U docker | example to access test db from command line |
| \c dbname [username]    | change db |
| \l                    | list databases |
| \dt                   | list tables |
| \d [table_name]         | describe table(s) |
| \d+ [table_name]         | describe table(s) with extra info |
| \dn | list schemas |
| \df | list functions |
| \dv | list views |
| \du | list users |
| \timing | turn on query timing |
| \q | quit |

