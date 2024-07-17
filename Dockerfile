FROM node:20-alpine

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 3000 5173 3001 3003 8080

CMD [ "npm","run","dev"]