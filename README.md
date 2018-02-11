# microservices-nodejs-docker
The goal of this example is to show you how to get a Node.js rest service into a Docker container. 

### what is a microservice?
A microservice is a single self-contained unit which, together with many others, makes up a large application. By splitting your app into small units every part of it is independently deployable and scalable, can be written by different teams and in different programming languages and can be tested individually. — Max Stoiber

### Stack
  We’ll use a simple NodeJS service for our backend.

    NodeJS - Carbon
    NodeJS - Latest
    Docker for Linux
    
### How to run the microservices

We need to have docker installed previously.

For each microservice we run the next command to build the docker image.

```
$ docker build -t <user-service or tokenGenerator>
```

after, for each microservice we executed the next command to run the container in detached mode.

```
$ docker run -p <public port>:8080 -d <user-service or tokenGenerator>
```

Call first, the microservice token generator

```
$ curl -d '{"idUser": "123456"}' -H "Content-Type: application/json" -X POST localhost:8082/api/authenticate
```

Call second, the microservice user

```
$ curl --header "x-access-token: TOKEN" localhost:8081/api/user 
```

### LICENSE
The MIT License (MIT)

Copyright (c) 2018 Juan Guillermo Gómez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
