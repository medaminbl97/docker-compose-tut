# Use the official Nginx base image
FROM nginx:alpine

# Copy static website files into Nginx's default directory

COPY nginx.conf /etc/nginx/nginx.conf

COPY . /website

# Expose port 80 (default HTTP)
EXPOSE 80
