## 静态资源

> 客户端接受服务器返回的所有文件,这些文件就是静态资源

- html / css / js
- 图片 / word /pdf / 音频 / 视频


### 服务器是如何处理静态资源的???

~~~js
app.use(Express.static(path.resolve('./www')))
~~~