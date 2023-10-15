FROM node:latest
WORKDIR /usr/src/index
COPY package*.json .
RUN npm ci
COPY . .
CMD ["npm","run","dev"]
