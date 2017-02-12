# [COMPONENT_NAME]-api

[SERVICE DESCRIPTION].

[![Build Status](https://travis-ci.org/FrescoDev/service-container-scaffolding.svg?branch=master)](https://travis-ci.org/FrescoDev/service-container-scaffolding)

### Prerequisities

* node/npm
* docker
* nodemon

### Install and Run Locally

1. Clone the repo
2. run: ```npm install``` to install project dependencies
3. run: ```npm run build``` to transpile and build the application
4. run: ```npm start``` to kickstart and run the server

### Run as Docker Container

1. Run: ```docker build -t "frescodev/service-scaffolding:latest" .``` to build the container image hosted on port 8888
2. Run: ```docker run -p 8888:8888 -d frescodev/service-scaffolding``` to run the container image and map it to your local 8888 port

## Running the Tests

- ```npm run test```

## Testing the API

Test the API using [Postman](https://www.getpostman.com/collections/{id})

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/{id})

## Request & Response Examples

### API Resources

  - [GET /meta](#get-meta)

### GET /meta

Example: http:/{url}/meta

Response body:

    {
        "description": "This skeletal applicaiton should serve as a template for developing http services",
        "version" : "v1",
        "status": "ok"
    }
