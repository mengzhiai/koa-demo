const Student = require("../models/student");

const Users = require("../models/users");

const UserInfo = require('../models/userInfo');

const Phone = require('../models/phone');

// 一对一
Users.hasMany(Phone, {foreignKey: 'user_id', sourceKey: 'id'})
Phone.belongsTo(Users, {foreignKey: 'user_id', targetKey: 'id'})

// User.hasMany(UserInfo, {foreignKey: 'user_id', sourceKey: 'id', as: 'phone'})
// Phone.belongsTo(User, {foreignKey: 'user_id', targetKey: 'id', as: 'phone'})

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
    /* return await Phone.create({
      // username: '张三2',
      // status: 2,
      // password: 234567,

      // user_id: 2,
      // birthday: '1996',
      // nickname: 'test222'

      // user_id: 1,
      // phoneName: '小米10',
      // phonePrice: 3299,
    }) */

    // return

    /* return await UserInfo.findAndCountAll({
      include: [
        { model: UserInfo, as: 'userInfo' },
      ],
      include: [{ all: true }]
    }) */

    return await Users.findAndCountAll({
      where: {
        username: '张三'
      },
      include: [UserInfo, Phone]
      // include: [
      //   {model: UserInfo, as: 'user_info'},
      //   {model: Phone, as: 'phone'},
      // ]
      // include: [{all: true}]
    })
  }
}