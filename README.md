# 留言墙
本留言墙来源自B站UP主yike陈，分为留言墙与照片墙两部分
[视频链接](https://www.bilibili.com/video/BV11t4y157L2/?spm_id_from=333.999.0.0&vd_source=290b6b566a6de4759a1517c89cdae2c8)

**Web文件夹为前端，API文件夹为后端，前端配置文件位置为：src/assets/utils/env.js，后端配置文件位置为：config/default.js，并且需要导入相关sql文件，与配置反向代理**


**由于本项目后端使用Nodejs编写，请在Web/src/assets/utils/env.js中修改后端API地址，其中的avatarUrl为留言墙右上方小图标**

- 本项目采用前后端分离方式编写，前端使用Vue3改写，后端使用Nodejs编写
- 本项目改写自B站UP主**yike陈**，并在其视频基础上增添移动端与适当改写
- 如果喜欢该项目就给个Star吧！

## 部署教程
### 后端
将后端文件导入网站，使用npm install命令安装模块
![导入后端文件](https://img.5i21.cn/LightPicture/2023/07/0bea3485c3077674.png)
![Alt text](https://img.5i21.cn/LightPicture/2023/07/00959330117886b2.png)
将config文件夹中的walls数据库文件导入后端数据库
![导入数据库](https://img.5i21.cn/LightPicture/2023/07/181b36b753e22058.png)
之后配置反向代理（防火墙放行）
![配置反向代理，端口取决于config里面port参数](https://img.5i21.cn/LightPicture/2023/07/729a876ea023dfce.png)
之后使用pm2持久化运行
![持久化运行](https://img.5i21.cn/LightPicture/2023/07/0e34b01e6645ec0a.png)

## 前端
首先npm install安装相关包，之后修改env.js文件的baseUrl与baseImgPath为后端API地址、avatarUrl为头像地址
![安装相关包](https://img.5i21.cn/LightPicture/2023/07/c506983796661f2d.png)
之后npm run build构建后直接上传服务器即可使用

## 项目地址
**Demo地址：[一刻时空-苦苦的码人](https://www.5i21.cn/walls)**
## 项目截图
### PC端
![留言墙](https://img.5i21.cn/LightPicture/2023/02/ec3624a0132679e9.png)
![照片墙](https://img.5i21.cn/LightPicture/2023/02/55b4a4c6aaa6d16f.png)
![添加留言](https://img.5i21.cn/LightPicture/2023/02/12c70efe9cf0484d.png)
![添加图片](https://img.5i21.cn/LightPicture/2023/02/686af7a16b47f9de.png)

### 移动端
![留言墙](https://img.5i21.cn/LightPicture/2023/02/f6038a02f914de92.png)
![照片墙](https://img.5i21.cn/LightPicture/2023/02/9fdfc73c8e65ba6c.png)
