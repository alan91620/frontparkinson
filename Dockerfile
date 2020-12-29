FROM node:15.5.0-alpine3.10
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY . /app
ENV REACT_APP_TARGET=http://127.0.0.1:8080/
CMD ["npm", "start"]
