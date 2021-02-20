const Sequelize = require('sequelize');
const sequelize = require('../../config/db');

const UserInfo = sequelize.define("user_info", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  birthday: {
    type: Sequelize.STRING,
    allowNull: true
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true
  },
},{
  sequelize,
  timestamps: false,//禁用时间戳
  tableName: 'user_info'
})

module.exports = UserInfo;