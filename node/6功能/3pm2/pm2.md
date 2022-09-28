## 痛点
1：服务端代码每次修改后都需要重启服务

>nodemon  
`npm i -D nodemon`

`npx nodemon -v`
运行
`npx nodemon xx.js`


2 服务器报错后，因为某个接口报错的，导致整个服务器挂掉了
例如
~~~
/a   访问A 服务器出错了--> 服务器就崩了
/b
/c
~~~

> pm2  保证一个接口出现问题话，其他接口也可以继续运行
> pm2 是一个**守护进程**管理器，它将帮助您管理和保持您的应用程序在线。PM2 入门很简单，它以简单直观的 C​​LI 形式提供，可通过 NPM 安装。

- 安装
- `npm i -g pm2`
- 局部 `npm i --save-dev pm2`

通过 pm2 运行的文件  与 nodemon 不同点
> nodemon 关闭终端停止运行 
> pm2 是后台 运行 关闭终端pm2 继续运行 

## pm2 常用命令

~~~
pm2 start app.js # 启动app.js应用程序

$ pm2 start app.js -i 4        # cluster mode 模式启动4个app.js的应用实例

# 4个应用程序会自动进行负载均衡

$ pm2 start app.js --name="api" # 启动应用程序并命名为 "api"

$ pm2 start app.js --watch      # 当文件变化时自动重启应用

$ pm2 start script.sh          # 启动 bash 脚本

$ pm2 list                      # 列表 PM2 启动的所有的应用程序

$ pm2 monit                    # 显示每个应用程序的CPU和内存占用情况

$ pm2 show [app-name]          # 显示应用程序的所有信息

$ pm2 logs                      # 显示所有应用程序的日志

$ pm2 logs [app-name]           # 显示指定应用程序的日志

$ pm2 flush                       # 清空所有日志文件

$ pm2 stop all                  # 停止所有的应用程序

$ pm2 stop 0                    # 停止 id为 0的指定应用程序

$ pm2 restart all               # 重启所有应用

$ pm2 reload all                # 重启 cluster mode下的所有应用

$ pm2 gracefulReload all        # Graceful reload all apps in cluster mode

$ pm2 delete all                # 关闭并删除所有应用

$ pm2 delete 0                  # 删除指定应用 id 0

$ pm2 scale api 10              # 把名字叫api的应用扩展到10个实例

$ pm2 reset [app-name]          # 重置重启数量

$ pm2 startup                  # 创建开机自启动命令

$ pm2 save                      # 保存当前应用列表

$ pm2 resurrect                # 重新加载保存的应用列表

$ pm2 update                    # Save processes, kill PM2 and restore processes

$ pm2 generate                  # Generate a sample json configuration file

pm2文档地址：http://pm2.keymetrics.io/docs/usage/quick-start/
~~~

## pm2 配置文件
~~~js
apps: [{
    "name": "测试运行程序名",                     // 运行程序名 name          
    "script": "./bug.js",                       // 执行文件
    "cwd": "./",                                // 根目录
    "args": "",                                 // 传递给脚本的参数
    "interpreter": "",                          // 指定的脚本解释器
    "interpreter_args": "",                     // 传递给解释器的参数
    "watch": true,                              // 是否监听文件变动然后重启
    "ignore_watch": [                           // 不用监听的文件
      "node_modules",
      "logs"
    ],
    "exec_mode": "cluster_mode",                // 应用启动模式，支持fork和cluster模式
    "instances": 2,                             // 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max
    "max_memory_restart": 8,                    // 最大内存限制数，超出自动重启
    "error_file": "./logs/app-err.log",         // 错误日志文件
    "out_file": "./logs/app-out.log",           // 正常日志文件
    "merge_logs": true,                         // 设置追加日志而不是新建日志
    "log_date_format": "YYYY-MM-DD HH:mm:ss",   // 指定日志文件的时间格式
    "min_uptime": "60s",                        // 应用运行少于时间被认为是异常启动
    "max_restarts": 30,                         // 最大异常重启次数，即小于min_uptime运行时间重启次数；
    "autorestart": true,                        // 默认为true, 发生异常的情况下自动重启
    "cron_restart": "",                         // crontab时间格式重启应用，目前只支持cluster模式;
    "restart_delay": 60,                      // 异常重启情况下，延时重启时间
    "env": {
      "NODE_ENV": "production",                // 环境参数，当前指定为生产环境 process.env.NODE_ENV
      "REMOTE_ADDR": "爱上大声地"               // process.env.REMOTE_ADDR
    },
    "env_dev": {
      "NODE_ENV": "development",              // 环境参数，当前指定为开发环境 pm2 start app.js --env_dev
      "REMOTE_ADDR": ""
    },
    "env_test": {                               // 环境参数，当前指定为测试环境 pm2 start app.js --env_test
      "NODE_ENV": "test",
      "REMOTE_ADDR": ""
    }
  }
~~~

启动pm2
> pm2 start pm2.config.js 
## node 优化问题

- 1: http 请求时间过长如何处理？(数据库链接时间过长)
- 2：服务器宕机 
> 代码
- 3：服务因为Bug 停运运行  
> pm2
- 4：修改代码重启服务，自动重启问题i
> nodemon 
- 5：错误异常处理 404  500 错误
> 异常处理中间件
- 6：并发业务，如果减轻服务器的负载  
> ngix 

