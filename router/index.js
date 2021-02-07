/*
 * @Date: 2021-02-07 14:20:33
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-02-07 16:04:25
 * @FilePath: \koa-demo\router\index.js
 */
const Router = require('koa-router');
const router = new Router();
router.prefix('/user');

const userController = require('../controller/user');

router.get('/list', userController.list);

module.exports = router;