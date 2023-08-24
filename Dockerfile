FROM node:16 
WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5004

CMD ["node", "app.js"]
