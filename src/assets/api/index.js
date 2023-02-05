import fetch from '../utils/axios'
//新建数据
export function insertWallApi(data){
    return fetch.post('/insertwall',data)
}
//获取IP
export function signIpApi(){
    return fetch.post('/signip')
}
//查询墙
export function findWallPageApi(data){
    return fetch.post('/findwallpage',data)
}
//新建反馈
export function insertFeedBackApi(data){
    return fetch.post('/insertfeedback',data)
}
//新建评论
export function insertCommentApi(data){
    return fetch.post('/insertcomment',data)
}
//获取评论
export function findCommentPage(data){
    return fetch.post('/findcommentpage',data)
}
//上传图片
export function proFileApi(data){
    return fetch.post('/profile',data)
}