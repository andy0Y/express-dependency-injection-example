# express-dependency-injection-example
a small example of how to use express-dependency-injection module

## About

This project example showcase the usage of express-dependency-injection combined with a mongoose
database, using [typegoose module](https://github.com/szokodiakos/typegoose) for annotated model definition
and [rxjs](https://github.com/ReactiveX/rxjs) for async database query handling.

## Prerequisite

you need root access to a mongodb database at least version 3.4.5

## Installation

Clone the repository
`git clone git@github.com:andy0Y/express-dependency-injection-example.git`

install dependencies
`npm install`

install ts-node globally
`npm install -g ts-node`

You need to configure the .env root file with configuration informations :

```shell
DATABASE_ADRESS=*URL_OF_YOUR_DATABASE*
DATABASE_NAME=*YOUR_MONGO_DESIRED_DATABASE_NAME*
DATABASE_PORT=*PORT_OF_DISTANT_DATABASE_IS_LISTENING_ON*
DATABASE_USER=*MONGO_DB_USERNAME*
DATABASE_PASS=*USER_PASSWORD*
DATABASE_POOL_SIZE=15
SERVER_URL=*YOUR_WEB_SERVER_URL*
SERVER_PORT=*PORT_YOUR_SERVER_SHOULD_LISTEN_ON*
```
you need to configure your database to accept this user on the desired database :

first start your database `mongod` as root or administrator on windows, then also as root `mongo` on another shell,
 then select the admin database to work on `use admin`, then create the user :

```javascript
db.createUser(
  {
    user: *MONGO_DB_USERNAME*,
    pwd: *USER_PASSWORD*,
    roles: [
       { role: "readWrite", db: *YOUR_MONGO_DESIRED_DATABASE_NAME* }
    ]
  }
)
```
**You're good to go !**

## Experiment

This example project comes with a predefined ready-to-go server with commented classes so you can learn and try it for yourself

to start the server, go to the root of the project with a terminal, then `npm run-script run`

server should start up on the desired specified port

## Test Default Routes

### Default Post Route

this route showcase a basic save into database using POST verb :

open you're rest client of preference, enter the url `http://localhost:3000/example/saveAll` select POST verb, set up the `Content-Type: application/json` header and the following body :
```json
[{
	"property1": "property1",
	"property2": "property2"
},{
	"property1": "property1",
	"property2": "property2"
},{
	"property1": "property1",
	"property2": "property2"
},{
	"property1": "property1",
	"property2": "property2"
},{
	"property1": "property1",
	"property2": "property2"
},{
	"property1": "property1",
	"property2": "property2"
},{
	"property1": "property1",
	"property2": "property2"
}]
```
send the request, you should receive saved documents from the database in return with a 200 OK code.
the console you started the application on should output `middleware called` as there is a middleware attached to the main router `src/routers/main.router.ts` that only serve this purpose.

### Default Get Route

this route showcase a basic retrieval of previously saved documents in the database.

open you're rest client of preference, enter the url `http://localhost:3000/example/get` select GET verb, then send the request.

you should get in return the previously saved documents from the database with a 200 OK code.
the console you started the application on should output `middleware called` as there is a middleware attached to the main router `src/routers/main.router.ts` that only serve this purpose.

### Default Delete Route

this route solely demonstrate the usage of other HTTP  verbs, and only return text without acting on the database.


open you're rest client of preference, enter the url `http://localhost:3000/otherexample/delete/1000` select DELETE verb, then send the request.

you should get in return the text `called with DELETE verb with 1000 param` with a 200 OK code.
the console you started the application on should output `middleware called` twice, as there is a middleware attached to the main router `src/routers/main.router.ts` and the same attached to `src/routers/router1.router.ts`.
