/*
 * @Date: 2021-02-07 14:31:19
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-02-07 17:40:47
 * @FilePath: \koa-demo\controller\user.js
 */
// const User = require('../models/user');

const User = require('../service/user');

const { errorMsg, successMsg } = require('../middleware/message')

module.exports = {
  // 添加
  async add(ctx) {
    let params = ctx.request.body;
    try {
      const result = await User.add(params);
      if(!result) {
        ctx.body = errorMsg('', '添加失败')
        return ctx;
      }
      ctx.body = successMsg('', '添加成功');
    } catch (err) {
      ctx.body = errorMsg(err.errors, '添加失败')
    }


  },

  // 删除
  async delete(ctx) {
    let params = ctx.request.body;
    if (!params.id) {
      ctx.body = {
        code: 422,
        msg: 'id不存在'
      }
      return
    }

    try {
      const result = await User.delete(params.id)
      if (!result) {
        ctx.body = errorMsg('', '刪除失败')
        
      }
      ctx.body = successMsg('', '删除成功');
    } catch (err) {
      ctx.body = errorMsg(err.errors, '刪除失败')
    }

  },


  // 获取列表
  async list(ctx) {
    let params = ctx.query;
    // 查询
    try {
      let result = await User.list((parseInt(params.page) - 1) * parseInt(params.limit), parseInt(params.limit));
      ctx.body = successMsg(result);
    } catch(err) {
      ctx.body = errorMsg(err.errorMsg, '获取失败');
    }
  },

  
  // 更新
  async update(ctx) {
    let params = ctx.request.body;
    try {
      let result = await User.edit(params);
    } catch (err) {
      ctx.body = errorMsg(err.errors, '更新失败');
    }
  }
}
