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


const studentController = require('../controller/student');

// 获取列表
router.get('/list', userController.list);

// 添加
router.post('/add', userController.add);

// 删除
router.post('/delete', userController.delete);

// 详情
router.get('/detail', userController.detail)

// 更新
router.post('/update', userController.update);


router.post('/upload', userController.upload);


// 获取关联信息
router.get('/userStu', userController.useStu)

router.get('/student', studentController.stuList)


router.post('/stuAdd', studentController.stuAdd);

router.get('/message', studentController.messageList)

module.exports = router;