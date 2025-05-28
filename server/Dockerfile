FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ENV PORT=5000
ENV MONGO_URI=<your-mongodb-atlas-uri>
ENV NODE_ENV=production

EXPOSE 5000
CMD ["npm", "run", "start"]