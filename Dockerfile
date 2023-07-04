FROM node:16 AS cache

ENV CI true
WORKDIR /srv
#COPY package*.json ./
COPY . .

RUN npm i --force
FROM cache AS build

RUN CI=false && npm run build

FROM nginx:1.21-alpine

COPY --from=build /srv/dist /usr/share/nginx/html
COPY ./.github/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
