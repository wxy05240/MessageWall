const express = require('express')
const path = require('path')
const ejs = require('ejs')
const config = require('./config/default')
const router = require('./routes/files')
const app = express()

//静态资源路径
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/data'))
//配置跨域
app.all('*',(req,res,next) => {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Credentials',true)
    res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS')

    //返回json
    res.header('Content-Type','application/json;charset=utf-8')
    if(req.method == 'OPTIONS'){
        //让options请求快速返回
        res.sendStatus(200)
    }else{
        next()
    }
})


//加入html视图
app.engine('html',ejs.__express)
app.set('view engine','html')

//解析前端数据
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
//引入路由
require('./routes/index')(app)
app.use(router)
// require('./routes/files')(app)
app.listen(config.port,() => {
    console.log(`我启动了端口${config.port}`)
})