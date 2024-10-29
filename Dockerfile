FROM node:alpine

WORKDIR /app

copy package*.json ./

RUN npm install

COPY . .

RUN npm run build