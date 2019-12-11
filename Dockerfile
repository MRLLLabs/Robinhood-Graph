FROM node:10.17-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm run seed

EXPOSE 3003

CMD [ "npm", "run", "start" ]