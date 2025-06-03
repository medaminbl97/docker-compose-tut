# Use official Node.js image with Alpine
FROM node:18-alpine

WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Build Next.js app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
