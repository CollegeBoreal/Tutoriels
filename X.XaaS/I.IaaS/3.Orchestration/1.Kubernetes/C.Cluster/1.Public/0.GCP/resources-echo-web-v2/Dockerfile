FROM golang:1.8-alpine
ADD . /go/src/echo-app
RUN go install echo-app

FROM alpine:latest
COPY --from=0 /go/bin/echo-app .
ENV PORT 8000
CMD ["./echo-app"]
