FROM node:12.13.0-alpine
WORKDIR /app
ENV DOCKERIZE_VERSION v0.6.1
COPY package.json /app/package.json
RUN npm install nodemon -g
RUN npm install
CMD ["nodemon", "start"]
COPY . .
# "dockerize", "-wait", "tcp://mongo:27017",