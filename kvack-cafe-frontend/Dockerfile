FROM node:current-alpine

WORKDIR /src/app

COPY ./package.json ./

RUN npm install

RUN npm i -g serve

COPY ./src/ ./src/
COPY ../../public/ ../../public/
COPY ../../tsconfig.json ../../tsconfig.json

EXPOSE 3000