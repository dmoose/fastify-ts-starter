-- migrate:up
create table users (
  id integer,
  name text,
  email text not null
);

-- migrate:down
drop table users;

