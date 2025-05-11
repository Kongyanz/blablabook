FROM node:lts
RUN apt-get update && apt-get install -y postgresql-client
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install --save-dev vitest
COPY . .
EXPOSE 3000
CMD ["npm", "start"]