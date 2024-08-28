FROM node:latest

WORKDIR /home/node/app

COPY package*.json ./

ARG API_URL

ENV API_URL ${API_URL}

RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]