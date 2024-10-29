FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Move build to /dist so that it’s accessible to Nginx
RUN mkdir -p /app/build && cp -r ./.output/public /app/build

CMD ["npm", "run", "start"]
