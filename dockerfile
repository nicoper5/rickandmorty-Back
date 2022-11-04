FROM node:16.15-alpine3.14
RUN mkdir -p /rickandmorty-Back/server
WORKDIR /rickandmorty-Back/server
RUN adduser -S server
COPY package.json/ .
COPY package-lock.json ./
RUN npm install
RUN npm install --save pm2
RUN chown -R server /rickandmorty-Back/server
USER root
EXPOSE 8000
CMD [ "npm", "start" ]




