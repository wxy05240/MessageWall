const multer = require('multer')
const express = require('express')
const router = express.Router()
//生成随机数
const random = (min,max) => {
    return Math.floor(Math.random()*(max-min)) + min;
}
const storage = multer.diskStorage({
    //保存路径
    destination : function(req,file,cb){
        cb(null,'./assets/wallimgs')
        //不是相对路径
    },
    filename : (req,file,cb) => {
        //正则匹配后缀名
        let type = file.originalname.replace(/.+\./,'.')
        cb(null,Date.now() + random(1,100) + type)
    }
})
const upload = multer({storage : storage })
router.post('/profile',upload.single('file'),(req,res)=>{
    let imgurl = `/assets/wallimgs/${req.file.filename}`
    res.send(imgurl)
})

module.exports = router