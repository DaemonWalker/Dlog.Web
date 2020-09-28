# Daemon博客的前台

## 架构
使用React,TypeScript和Antd构建前台

## 后台API接口地址配置
配置环境变量 REACT_APP_API_ADDRESS 的值即可

# 版本说明
## Release-1.0 -> 1.0.2
+ 第一个能运行的版本🎉🎉🎉
+ 在Docker内build React所以镜像比较大
+ 使用node的http-server插件负载React，存在刷新出现404的问题
+ 对应后端版本 [Release-1.0](https://github.com/DaemonWalker/Dlog.Api/tree/Release-1.0)
## Release-1.1 -> 1.1.0
+ 使用Nginx代替http-server负载React，修复了文章直接访问出现404
+ 由于直接使用Build后的代码，所以极大的缩减了镜像所占的空间
+ 对应后端 [Release-1.0](https://github.com/DaemonWalker/Dlog.Api/tree/Release-1.0)
## Release-1.2 -> 1.2.0
+ 调整了静态资源文件存放的位置，现在改为通过前端的Nginx进行获取
+ 对应后端
  + [Release-1.0](https://github.com/DaemonWalker/Dlog.Api/tree/Release-1.0) 这个版本可以运行但是文章缩略图丢失
  + [Release-1.2](https://github.com/DaemonWalker/Dlog.Api/tree/Release-1.2) 可以完整支撑前端