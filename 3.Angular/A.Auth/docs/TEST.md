# Running the Authentication Scheme

:one: Run the below backend 

https://github.com/CollegeBoreal/play-silhouette-reactive-mongo.g8

```
$ sbt new CollegeBoreal/play-silhouette-reactive-mongo.g8 --name=backend
```

:two: Configuring the [backend](https://angular.io/guide/build#proxying-to-a-backend-server) by creating a config file called `proxy-config.json`

```json
{
  "/api/*": {
    "target": "http://localhost:9000",
    "secure": false,
    "logLevel": "debug"
  }
}
```

:three: Run the Front End Application

```
$ ng serve --proxy-config proxy-config.json
```

:four: Launch your browser (you should hit the login page, register first)

http://localhost:4200

