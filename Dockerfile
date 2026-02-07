# Stage 1: Build the Angular application
# Use a specific Node version for reproducibility
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies (ci is cleaner for CI/CD environments)
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the application for production
# Check your package.json for the correct build output path (e.g., dist/project-name)
RUN npm run build -- --configuration production

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built artifacts from the build stage to the Nginx web root
# NOTE: Replace 'angular_demo_project' with the actual name of your project in the dist folder
COPY --from=build /app/dist/angular_demo_project/browser /usr/share/nginx/html

# Optional: Copy custom Nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
