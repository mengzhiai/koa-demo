const { Op } = require("sequelize");

const Student = require("../models/student");

const Users = require("../models/users");

const UserInfo = require('../models/userInfo');

const Phone = require('../models/phone');

/* 一对一 */
// Users.hasOne(UserInfo, {foreignKey: 'userId', sourceKey: 'id'});
// UserInfo.belongsTo(Users);

// Users.hasMany(UserInfo, {foreignKey: 'user_id', sourceKey: 'id'})
// UserInfo.belongsTo(Users, {foreignKey: 'user_id', targetKey: 'id'})



// 1----1   一对多关系
Users.hasMany(Phone, {foreignKey: 'userId', sourceKey: 'id', as: 'phoneList'});
Phone.belongsTo(Users);

Users.hasMany(UserInfo, {foreignKey: 'userId', sourceKey: 'id'});
UserInfo.belongsTo(Users);


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
    // return await Phone.create({
    //   // username: '张三2',
    //   // status: 2,
    //   // password: 234567,

    //   // user_id: 2,
    //   // birthday: '1996',
    //   // nickname: 'test222'

    //   // user_id: 2,
    //   // phoneName: '华为Mate40',
    //   // phonePrice: 6999,
    // })

    // return

    // 一对一
    /* return await Users.findAndCountAll({
      // 一对一
      // where: {
      //   username: '张三'
      // },
      // include: [UserInfo],


      // include: [
      //   { model: UserInfo, as: 'userInfo' },
      // ],

      // include: [UserInfo],
      // include: [{ all: true }]
      // ----------------------

    }) */

    // 一对多
    /* return await Users.findAndCountAll({
      include: 'phoneList'
    }) */
    
    return await Users.findAndCountAll({
      // where: {
      //   name: '张三'
      // },
      include: 'phoneList',
      distinct: true,

      
      /* include: [{
        model: Phone,
        as: 'phoneList'
      }],
      distinct: true, */ // 去重,返回数据的count不会把include中的值算进去



      // include: [
      //   {model: UserInfo, as: 'user_info'},
      //   {model: Phone, as: 'phone'},
      // ]
      // include: [{all: true}]
    })
  }
}