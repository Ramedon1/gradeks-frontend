# Use a Node.js image with Alpine for a lightweight image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

# Build the Nuxt application
RUN npm run build

# Expose the port that Nuxt will run on
EXPOSE 3000

# Start the Nuxt application using the production server command
CMD ["node", "./.output/server/index.mjs"]
