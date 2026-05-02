# Echo application example

This example can be used to demonstrate how to build and deploy a containerized Go web server
application with [Kubernetes](https://kubernetes.io).

This directory contains:

- `main.go` contains the HTTP server implementation that responds to requests with inforamtion
-  about the service responding to the request. 
- `Dockerfile` is used to build the Docker image for the application and simply compiles all go files
-  in the current directory to an application called echo-app.
- The Dockerfile is configured by default to configure the app to use port 8000 for the http listener service

- [Kubernetes Engine Quickstart](https://cloud.google.com/kubernetes-engine/docs/quickstart)

