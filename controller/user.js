/*
 * @Date: 2021-02-07 14:31:19
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-02-07 17:13:13
 * @FilePath: \koa-demo\controller\user.js
 */
const User = require('../models/User')

module.exports = {
  list: async (ctx, next) => {

    // 查询
    let result = await User.findAll({
      limit: 5
    })

    // 新建
    /* const result = await User.create({
      name: 'test1',
      nameMaster: '3423423'
    })
    ctx.body = result; */

    // 删除
    /* let result = await User.destroy({
      where: {
        id: 2
      },
    }) */
    


    ctx.body = result;




    /* await User.findAll({
      raw: true,
      attributes: { // 不返回password字段
        exclude: ['name'] 
      }
    }).then((res) => {
      // 成功返回
      ctx.body = '123'
    }).catch((err) => {
      // 失败，捕获异常并输出
      ctx.body = 'fdsa'
    }) */
  }
}

