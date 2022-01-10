#################
## DEVELOPMENT ##
#################
FROM node:16-alpine3.15 AS development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

################
## PRODUCTION ##
################
FROM node:16-alpine3.15 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY --from=development /app/ .

EXPOSE 3000

CMD [ "node", "dist/main"]
