FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

CMD ["node ", "/src/index.js"]