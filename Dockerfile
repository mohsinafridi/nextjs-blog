# Use latest Node LTS or specific version
FROM node:22-alpine

# Create app directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm config set strict-ssl false && \
    npm config set registry http://registry.npmjs.org/ && \
    npm install

# Copy project files
COPY . .

# Expose Next.js default port
EXPOSE 3000

# Start development server
CMD ["npm", "run", "dev"]


#docker run -it --rm -p 3000:3000 -v %cd%:/app nextjs-latest
