FROM node:current-alpine

WORKDIR /src

COPY ./package.json ./

RUN npm install

COPY ./src/ ./src/

EXPOSE 3001