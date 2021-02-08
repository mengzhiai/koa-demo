const User = require("../models/User")

module.exports = {
  // 获取列表
  async list(page, limit) {
    return await User.findAndCountAll({
      offset: page,
      limit: limit
    })
  },

  // 添加
  async add(params) {
    return await User.create({
      name: params.name,
      nameMaster: params.nameMaster
    })
  },

  // 删除
  async delete(id) {
    return await User.destroy({
      where: { id: id }
    })
  },


  // 编辑
  async edit(params) {
    return await User.update()
  }
}