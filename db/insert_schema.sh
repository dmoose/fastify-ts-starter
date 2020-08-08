#!/bin/bash
export PGPASSWORD="docker"
export TEST_DATABASE_URL="postgres://docker:docker@127.0.0.1:5401/pts-test?sslmode=disable"
dbmate -e TEST_DATABASE_URL wait
createdb -p 5401 -h 0.0.0.0 -U docker pts-test
psql -h 0.0.0.0 -p 5401 -U docker -d pts-test -a -q -f ./db/schema.sql
