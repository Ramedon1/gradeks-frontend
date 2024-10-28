FROM node:alpine

WORKDIR /app

copy package*.json /app

RUN npm install

COPY . .

RUN npm run build