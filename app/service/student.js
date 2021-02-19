const Student = require("../models/student");

const Users = require("../models/users");

const UserInfo = require('../models/userInfo')

const { Op } = require("sequelize");


// 定义关系
// 1----1   一对一关系
Users.hasOne(UserInfo, { foreignKey: 'user_id', sourceKey: 'id' })
UserInfo.belongsTo(Users, { foreignKey: 'user_id', targetKey: 'id' })
// User.hasOne(UserInfo, {foreignKey: 'user_id', sourceKey: 'id', as: 'user_info'})
// UserInfo.belongsTo(User, {foreignKey: 'user_id', targetKey: 'id', as: 'user_info'})


module.exports = {
  async add(params) {
    return await Student.create({
      name: params.name,
      studentId: params.studentId
    })
  },

  async stuList() {
    return await Student.findAll()
  },


  async messageList() {
    // return await UserInfo.findAll();
    /* return await UserInfo.create({
      // username: '张三2',
      // status: 2,
      // password: 234567,

      // user_id: 2,
      // birthday: '1996',
      // nickname: 'test222'
    }) */


    return await UserInfo.findAndCountAll({
      /* where: {
        username: '张三'
      },
      include: [UserInfo], */

      
      include: [
        { model: UserInfo, as: 'userInfo' },
      ],
      include: [{ all: true }]
    })
  }
}