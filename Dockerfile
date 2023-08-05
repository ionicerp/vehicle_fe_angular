# # Stage 1
# FROM node:18.16.1-alpine AS build
# WORKDIR /usr/src/app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Stage 2
# FROM nginx:stable-alpine3.17
# RUN mkdir -p /usr/share/nginx/html/vehicle
# COPY --from=build /usr/src/app/dist/vehicle_fe_angular/ /usr/share/nginx/html/vehicle

# COPY ./start.sh /usr/src/app/start.sh
# RUN chmod +x /usr/src/app/start.sh
# # CMD ["/bin/sh", "/usr/src/app/start.sh"]
# # CMD ["/bin/sh", "/usr/src/app/start.sh >> /usr/src/app/startup.log 2>&1"]
# CMD ["/bin/sh", "-c", "/usr/src/app/start.sh >> /usr/src/app/startup.log 2>&1"]


# Stage 1
FROM node:18.16.1-alpine AS build
ARG NPM_AUTH_TOKEN
WORKDIR /usr/src/app

# Set up .npmrc with authentication token
RUN echo "//npm.pkg.github.com/:_authToken=${NPM_AUTH_TOKEN}" > .npmrc

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2
FROM nginx:stable-alpine3.17

# Remove default Nginx configuration
RUN rm -rf /etc/nginx/conf.d/*
# Copy custom Nginx configuration that handles Angular routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /usr/share/nginx/html/vehicle
COPY --from=build /usr/src/app/dist/vehicle_fe_angular/ /usr/share/nginx/html/vehicle

COPY ./start.sh /usr/src/app/start.sh
RUN chmod +x /usr/src/app/start.sh
# CMD ["/bin/sh", "/usr/src/app/start.sh"]
# CMD ["/bin/sh", "/usr/src/app/start.sh >> /usr/src/app/startup.log 2>&1"]
CMD ["/bin/sh", "-c", "/usr/src/app/start.sh >> /usr/src/app/startup.log 2>&1"]
