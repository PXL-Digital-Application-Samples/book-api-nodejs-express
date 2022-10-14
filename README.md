# Setup
- Adjust the environment variables in the `docker-compose.yml` file
- run `docker-compose up` (this will also create a `mysql` service)


## Available endpoints
`GET /api/book` returns all book objects
`POST /api/book` will add a new book object to the database. You can use postman with the following json body:
```json
{
    "title": "voorbeeld boek",
    "author": "Dries Swinnen",
    "isbn": "123456789",
    "genre": "horror",
}
```

## Cron
The database will be cleared every minute. The cronjob will also add one record to the database (the hobbit).