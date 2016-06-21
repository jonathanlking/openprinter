FROM node:latest
MAINTAINER hello@elliotgreenwood.co.uk

RUN npm install -g gulp

COPY ./package.json src/
RUN cd src && npm install
COPY . /src

WORKDIR src/
RUN rm -rf dist/*
RUN gulp
