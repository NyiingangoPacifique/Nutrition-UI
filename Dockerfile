# Using node:16-alpine base image
FROM node:16-alpine

# Set the default work directory
WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
