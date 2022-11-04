# FROM node:alpine
# WORKDIR /app
# COPY package.json ./
# COPY package-lock.json ./
# COPY ./ ./
# RUN npm i
# CMD ["npm", "run", "start"]



FROM node:16.15-alpine3.14
RUN mkdir -p /app
WORKDIR /app
RUN adduser -S app
COPY package.json/ .
RUN npm install
# RUN npm install --save pm2
RUN chown -R app /app
USER app
# EXPOSE 3000
# CMD [ "npm", "start" ]

