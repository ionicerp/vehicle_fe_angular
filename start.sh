#!/bin/sh

# Replace placeholder values in JavaScript files with environment variables
sed -i -e 's|API_URL|'"$API_URL"'|g' /usr/share/nginx/html/vehicle/main*.js

# Start NGINX
nginx -g 'daemon off;'