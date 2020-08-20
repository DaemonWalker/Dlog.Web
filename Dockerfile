# 使用node latest
FROM nginx

# 代表生产环境
ENV PROJECT_ENV production
ENV NODE_ENV production
ENV API_ADDRESS http://blogapi.daemonwow.com/
ENV REACT_APP_API_ADDRESS http://blogapi.daemonwow.com/

COPY ./build/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080