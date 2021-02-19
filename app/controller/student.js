const Student = require('../service/student');


const { errorMsg, successMsg } = require('../middleware/message')


module.exports = {
  async stuAdd(ctx) {
    let params = ctx.request.body;
    try {
      let result = await Student.add(params);
      ctx.body = {
        data: result
      }
      if (result) {
        ctx.body = errorMsg('', '添加成功')
      }
    } catch(err) {
      ctx.body = {
        data: err
      }
    }
    
  },

  // 获取
  async stuList(ctx) {
    let result = await Student.stuList();
    ctx.body = successMsg(result, '获取成功');
  },



  async messageList(ctx) {
    try {
      let result = await Student.messageList();
      ctx.body = successMsg(result);
    } catch(err) {
      ctx.body = {
        data: err
      }
    }
  }
}