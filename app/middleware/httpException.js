

const httpError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.body = {
      code: 400,
      msg: '服务器错误',
      // data: error
    }
  }
}

module.exports = httpError;