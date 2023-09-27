FROM node:18-alpine

WORKDIR /lux-shop/backend

COPY package*.json ./

RUN npm i 

RUN npx sequelize-cli db:migrate

RUN npm i -g @babel/core @babel/cli

COPY . .

RUN npm run build-src

CMD ["npm" , "run" , "build"]

# docker build --tag node-docker .
# docker run -p 8080:8080 -d node-docker