FROM golang:latest
MAINTAINER jonathanlking@me.com
EXPOSE 8080

COPY server/ server/
RUN cd server && go get -t -d -v ./... && go build -v

# This should all be moved to a separate container
RUN apt-get update && apt-get install -y \
    nodejs \
    nodejs-legacy \
    npm
    
RUN npm install -g gulp

COPY client/package.json client/
RUN cd client && npm install
COPY client/ client/
RUN cd client && gulp
