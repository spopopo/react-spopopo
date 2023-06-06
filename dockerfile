FROM node:14
COPY . /app-node
WORKDIR /app-node
RUN npm install 
ENTRYPOINT npm start
