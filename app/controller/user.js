/*
 * @Date: 2021-02-07 14:31:19
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-02-07 17:40:47
 * @FilePath: \koa-demo\controller\user.js
 */
// const User = require('../models/user');

const User = require('../service/user');

const path = require('path')

let fs = require("fs");

const { errorMsg, successMsg } = require('../middleware/message')

module.exports = {
  // 添加
  async add(ctx) {
    let params = ctx.request.body;
    if (!params.name) {
      ctx.body = errorMsg('', 'name不能为空');
      return
    }
    try {
      const result = await User.add(params);
      if (!result) {
        ctx.body = errorMsg('', '添加失败')
        return ctx;
      }
      ctx.body = successMsg('', '添加成功');
    } catch (err) {
      ctx.body = {
        code: 422,
        msg: err.errors[0].message
      }
    }


  },

  // 删除
  async delete(ctx) {
    let { id } = ctx.request.body;
    if (!id) {
      ctx.body = {
        code: 422,
        msg: 'id不存在'
      }
      return
    }

    try {
      let resultId = await User.detail(id);
      if (!resultId.length) {
        ctx.body = errorMsg('', '当前id有误,删除失败');
        return
      }


      const result = await User.delete(id)
      if (!result) {
        ctx.body = errorMsg('', '刪除失败')
        return
      }
      ctx.body = successMsg('', '删除成功');
    } catch (err) {
      ctx.body = errorMsg(err.errors, '刪除失败')
    }

  },


  // 获取列表
  async list(ctx) {
    let params = ctx.query;

    if (!params.page) {
      let val = new CatchException('分页page', 400);
      throw error;
    }
    // 查询
    let result = await User.list(params.keywords, (parseInt(params.page) - 1) * parseInt(params.limit), parseInt(params.limit));
    ctx.body = successMsg(result);
  },

  // 详情
  async detail(ctx) {
    let { id } = ctx.query;
    if (!id) {
      ctx.body = errorMsg('', 'id不能为空');
      return
    }
    let result = await User.detail(id);

    if (!result.length) {
      ctx.body = errorMsg('', 'id有误');
      return
    }
    ctx.body = successMsg(result[0])
  },


  // 更新
  async update(ctx) {
    let params = ctx.request.body;
    try {
      let result = await User.edit({ name: params.name, nameMaster: params.nameMaster }, params.id);
      if (!result) {
        ctx.body = errorMsg('', '更新失败');
        return
      }
      ctx.body = successMsg('', '更新成功');
    } catch (err) {
      ctx.body = errorMsg(err, '更新失败');
    }
  },


  async upload(ctx) {
    // 上传单个文件
    const file = ctx.request.files.file // 获取上传文件
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    let filePath = path.join(__dirname, '/public/upload/') + `/${file.name}`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
    return ctx.body = {
      msg: '上传成功',
      code: 200,
      url: file.path
    };
  },


  async useStu(ctx) {
    let params = ctx.query;
    try {
      let result = await User.useStu(params.typeId);
      ctx.body = successMsg(result);
    } catch (err) {
      ctx.body = {
        data: err
      }
    }
  }
}

