const controller = require('../controller/dbServe')
const express = require('express')
const router = express.Router()
router.get('/test',(req,res) => {
    res.type('html')
    res.render('test')
})
//新建数据
router.post('/insertwall',(req,res)=>{
    controller.insertWall(req,res)
})
//新建反馈
router.post('/insertfeedback',(req,res)=>{
    controller.insertFeedback(req,res)
})
//新建评论
router.post('/insertcomment',(req,res)=>{
    controller.insertComment(req,res)
})
//删除墙
router.post('/deletewall',(req,res)=>{
    controller.deleteWall(req,res)
})
//删除反馈
router.post('/deletefeedback',(req,res)=>{
    controller.deleteFeedback(req,res)
})
//删除评论
router.post('/deletecomment',(req,res)=>{
    controller.deleteComment(req,res)
})
//分页查询wall并获取赞、举报、撤销数据
router.post('/findwallpage',(req,res)=>{
    controller.findWallPage(req,res)
})
// 倒序分页查询墙的评论
router.post('/findcommentpage',(req,res)=>{
    controller.findCommentPage(req,res)
})

//查询IP
router.post('/signip',(req,res)=>{
    var ip = req.ip
    res.send({
        code : 200,
        ip : ip
    })
})
module.exports = router