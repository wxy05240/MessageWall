const express = require('express')
const path = require('path')
const ejs = require('ejs')
const config = require('./config/default')
const router = require('./routes/files')
const routerApi = require('./routes/index')
const app = express()
const fs = require('fs')
// 递归创建路径
const mkdirs = (dirpath) => {
    console.log(path.dirname(dirpath))
    if (!fs.existsSync(path.dirname(dirpath))) {
        mkdirs(path.dirname(dirpath))
    }
    fs.mkdirSync(dirpath)
    console.log('路径创建成功')
}
var img_dir = path.join(__dirname, './assets/wallimgs/')
fs.existsSync(img_dir) == false ? mkdirs(img_dir) : console.log('路径已经存在')
app.use('/assets/wallimgs',express.static(path.join(__dirname,'./assets/wallimgs')))
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
app.use('/walls',routerApi)
app.use('/walls',router)
// require('./routes/files')(app)
app.listen(config.port,() => {
    console.log(`我启动了端口${config.port}`)
})