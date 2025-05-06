FROM node:lts
RUN apt-get update && apt-get install -y postgresql-client
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["sh", "-c", "npm run db:create && npm run db:seed && npm start"]
CMD ["npm", "start"]