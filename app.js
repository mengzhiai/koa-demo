/*
 * @Date: 2021-02-07 14:17:10
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-02-07 15:22:40
 * @FilePath: \koa-demo\app.js
 */
const Koa = require("koa2");
const app = new Koa();

const koaBody = require('koa-body');

const path = require('path')


app.use(koaBody({
  multipart: true,
  formidable: {
    // 上传目录
    uploadDir: path.join(__dirname, './static'),
    // 保留文件扩展名
    keepExtensions: true,
    maxFileSize: 200 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
  }
}));
// app.use(koaBody());


const httpError = require('./app/middleware/httpException');

app.use(httpError);

const routers = require('./app/router/index');
app.use(routers.routes()).use(routers.allowedMethods());

app.listen(4000, () => {
  console.log('server 4000');
})