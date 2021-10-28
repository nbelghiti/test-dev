# Dev Test API #
API of Dev Test for the client.

## Setup ##

### System requirements ###

* [Docker](https://docs.docker.com/engine/installation/)
* [Node.js](https://nodejs.org/en/) (LTS)

Node.js is optional and only required if you want to run the linters in your IDE. Running them inside Docker works without Node.js.

### Installation ###

Start the Docker container:

```bash
$ docker-compose up
```

_Optional_: Install the Node.js packages locally (used for linting):

```bash
$ npm install
```

## Getting started ##

Once your Docker container is running, your application is accessible on [localhost:3000](http://localhost:3000) (assuming you did not change the port in the local config file).

Postgresql is available on [localhost:5432](http://localhost:5432)

### Running linter ###

Running TSlint inside Docker:

```bash
docker-compose exec server npm run lint
```

### Running tests ###

Running commands inside Docker:

```bash
docker-compose exec server npm test
```
