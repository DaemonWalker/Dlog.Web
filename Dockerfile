# 使用node latest
FROM nginx

# 代表生产环境
ENV PROJECT_ENV production
# 许多 package 会根据此环境变量，做出不同的行为
# 另外，在 webpack 中打包也会根据此环境变量做出优化，但是 create-react-app 在打包时会写死该环境变量
ENV NODE_ENV production
ENV API_ADDRESS http://blogapi.daemonwow.com/
ENV REACT_APP_API_ADDRESS http://blogapi.daemonwow.com/

COPY ./build/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# 暴露容器端口 8080
EXPOSE 8080

# 当执行docker run的时候会执行以下shell 脚本。
CMD http-server ./build -p 8080