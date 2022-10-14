## Readme
This repository contains 2 branches:

## Main branch
This branch uses a mongodb database. Please set the following environment variables before running:
- `DBURL`: connectionstring url to the database, defaults to `mongodb://localhost/sampledb` if not set.
- `PORT`: port for the webserver, defaults to `3000` if not set.

###  Cron
The database will be cleared every minute. The cronjob will also add one record to the database (the hobbit).

## sequelize branch
This branch uses a mysql database. For more information swap to this branch and read the `README.md` file.