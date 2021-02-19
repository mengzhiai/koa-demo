const Sequelize = require('sequelize');
const sequelize = require('../../config/db');

const UserInfo = sequelize.define("user_info", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  birthday: {
    type: Sequelize.STRING,
    allowNull: true
  },
  nickname: {
    type: Sequelize.STRING,
    allowNull: true
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: true
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: true
  }
},{
  tableName: 'user_info'
})

module.exports = UserInfo;