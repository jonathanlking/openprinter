FROM node:latest
MAINTAINER hello@elliotgreenwood.co.uk

COPY ./package.json src/
RUN cd src && npm install
COPY . /src
RUN cd src && gulp
