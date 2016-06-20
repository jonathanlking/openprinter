FROM golang:latest
MAINTAINER jonathanlking@me.com
EXPOSE 8080

COPY . server/
RUN cd server && go get -t -d -v ./... && go build -v
