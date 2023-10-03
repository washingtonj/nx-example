FROM nginx:1.17.1-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/apps /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
