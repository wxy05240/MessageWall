let baseUrl = ''
let routerMode = 'hash'
let avatarUrl = ''
let baseImgPath
if(process.env.NODE_ENV == 'development'){
    baseUrl = 'https://localhost:3000/'
    baseImgPath = 'https://localhost:3000'
    avatarUrl = 'http://img.5i21.cn/LightPicture/2022/10/eeaaaa6df26aefe5.jpg'
}else{
    // 此处只需要修改api.5i21.cn为你的后端地址
    baseUrl = 'https://api.5i21.cn/walls'
    // 此处只需要修改api.5i21.cn为你的后端地址
    baseImgPath = 'https://api.5i21.cn'
    // 此处需要修改为自己的头像地址
    avatarUrl = 'http://img.5i21.cn/LightPicture/2022/10/eeaaaa6df26aefe5.jpg'
}
export {
    baseUrl,
    routerMode,
    baseImgPath,
    avatarUrl
}