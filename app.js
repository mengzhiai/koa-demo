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
app.use(koaBody())

const routers = require('./app/router/index');
app.use(routers.routes()).use(routers.allowedMethods());

app.listen(4000, () => {
  console.log('server 4000');
})