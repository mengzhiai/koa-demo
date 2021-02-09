const User = require("../models/User");

const { Op } = require("sequelize");

module.exports = {
  // 获取列表
  async list(keyword, page, limit) {
    return await User.findAndCountAll({
      where: {
        name: {
          [Op.like]: `${keyword}%` || ''
        }
      },
      order: [['create_time', 'DESC']],
      offset: page,
      limit: limit,
      attributes: {
        exclude: ['create_time', 'update_time', 'delete_time']
      }
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

  // 查询
  async detail(id) {
    return await User.findAll({
      where: { id: id }
    })
  },


  // 编辑
  async edit(params, id) {
    return await User.update(params, {
      where: {
        id: id
      }
    })
  }
}