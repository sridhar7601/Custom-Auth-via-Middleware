FROM node:alpine3.18
WORKDIR /app
COPY package.json ./
RUN echo "$PWD"
RUN npm install
COPY . . 
EXPOSE 3030
CMD ["npm","run","start"]
