FROM node:16-alpine

WORKDIR /usr/src/frontend

COPY package*.json ./

RUN npm install

COPY . .

CMD ["yarn", "run", "dev"]