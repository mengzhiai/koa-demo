module.exports = {
  // 添加成功
  addSuccess(msg = '添加成功') {
    let obj = {
      code: 200,
      msg: msg
    }
    return obj;
  },

  // 获取成功
  getSucccess(data, msg = '获取成功') {
    let obj = {
      code: 200,
      msg: msg,
      data: data
    }
    return obj;
  },

  // 返回失败
  errorMsg(data, msg = '失败') {
    let obj = {
      code: 422,
      msg: msg
    }
    if (data) {
      obj.data = data;
    }
    return obj;
  },

  successMsg(data, msg = '获取成功') {
    let obj = {
      code: 200,
      msg: msg
    }
    if(data) {
      obj.data = data;
    }
    return obj;
  }
}