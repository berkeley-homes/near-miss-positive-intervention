# berkeley-homes
Near Miss &amp; Positive Intervention

## Setup:
  1. Clone this repository
  2. Execute `npm i`
  3. Create a `.env` file:

  ```bash
  export DB_USER={USER_NAME}
  export DB_PASSWORD=''
  export DATABASE_URL={DB_URL}
  export AWS_ACCESS_KEY_ID=****
  export AWS_SECRET_ACCESS_KEY=****
  export EMAIL_SENDER_ADDRESS=****
  export EMAIL_RECIPIENT_ADDRESS=****
  ```

## Build:
none

## Test:
  1. Execute `npm test`

## Run
  1. create `.env` file in project routes
  2. add aws tokens
    AWS_ACCESS_KEY_ID=****
    AWS_SECRET_ACCESS_KEY=****
  3. add your s3 bucket name
    BUCKET_NAME=****
    **nb** This defaults to `berkeley-homes-near-miss`
  4. Execute `npm run`

## DB Migrations

We're using [DB-Migrate](http://db-migrate.readthedocs.io/en/latest/) for DB migrations. You might want to install this globally with `npm i db-migrate db-migrate-pg -g`

We run the `db-migrate-up` command during post install.

## Design
### inVision link
for the app MVP prototype: https://invis.io/47AWIVUTU#/226771304_Splash_1-0
