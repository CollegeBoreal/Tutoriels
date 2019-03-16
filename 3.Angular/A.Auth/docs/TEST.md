# Running the Authentication Scheme

:one: Run the below backend 

https://github.com/CollegeBoreal/play-silhouette-reactive-mongo.g8

```
$ sbt new CollegeBoreal/play-silhouette-reactive-mongo.g8 --name=backend
```

:two: Create a config file called `proxy-config.json`

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

:five: Debug through the console (if under Google Chrome hit key F12 Windows, Option/Command J MacOS) 

* Header (In Network/XHR/Header Tab)

![alt tag](./images/Header.png)

* Response (In Network/XHR/Response Tab)

![alt tag](./images/Response.png)

* Local Storage (In Application Tab)

![alt tag](./images/Application.png)

:bangbang: Force Login

Clear the `LocalSorage` in Application  to reset the `token`

---

References:

https://angular.io/guide/build#proxying-to-a-backend-server
