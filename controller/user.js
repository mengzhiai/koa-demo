/*
 * @Date: 2021-02-07 14:31:19
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-02-07 17:40:47
 * @FilePath: \koa-demo\controller\user.js
 */
const User = require('../models/User')

module.exports = {
  list: async (ctx, next) => {

    // 查询
    /* let result = await User.findAll({
      limit: 5
    }) */

    // 新建
    /* let params = ctx.query;
    const result = await User.create(params)
    ctx.body = result; */

    let params = ctx.query;
    try {
      return await User.create(params)
    } catch(err) {
      ctx.body = err;
    }

    // 删除
    /* let result = await User.destroy({
      where: {
        id: 2
      },
    }) */
    


    // ctx.body = result;




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

