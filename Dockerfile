# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the Angular CLI globally and the project dependencies
RUN npm install -g @angular/cli@latest \
    && npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the application runs on
EXPOSE 4200

# Start the application using Angular's development server
CMD ["ng", "serve", "--host", "0.0.0.0"]
