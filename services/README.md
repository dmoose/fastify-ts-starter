# Docker Services are configured here

## Postgresql Dev Server
The docker-compose.devdb.yml file contains the specifications for the development postgresql server.
- server data is in ./data/data-dev
- postgres-dev.conf contains the server configuration
- schema-dev.sql is an initialization file run on an empty image
- if you stop the server and rm -rf data/data-dev/\* you will have a clean postgresql instance on next service start
