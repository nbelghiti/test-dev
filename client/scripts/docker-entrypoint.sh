#!/usr/bin/env sh
set -eu

sed -i "s%AUTH0_DOMAIN_PLACEHOLDER%${AUTH0_DOMAIN}%g" /usr/share/nginx/html/*.js
sed -i "s%AUTH0_CLIENT_ID_PLACEHOLDER%${AUTH0_CLIENT_ID}%g" /usr/share/nginx/html/*.js
sed -i "s%AUTH0_AUDIENCE_PLACEHOLDER%${AUTH0_AUDIENCE}%g" /usr/share/nginx/html/*.js
sed -i "s%AUTH0_CALLBACK_PLACEHOLDER%${AUTH0_CALLBACK}%g" /usr/share/nginx/html/*.js
sed -i "s%HOST_PLACEHOLDER%${HOST}%g" /usr/share/nginx/html/*.js

exec "$@"
