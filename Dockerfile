FROM node:14-alpine as builder

WORKDIR /app
ENV NODE_ENV production

ADD client/package.json .
ADD client/package-lock.json .
RUN npm install

ADD client/ .
RUN npm run build

FROM node:14-alpine

WORKDIR /app
ENV NODE_ENV production

ADD package.json .
ADD package-lock.json .
RUN npm install

COPY --from=builder /app/build /app/client/build
ADD server/ /app/server/
ADD index.js .

CMD ["npm", "start"]
