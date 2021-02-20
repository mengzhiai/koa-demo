const Sequelize = require('sequelize');
const sequelize = require('../../config/db');


const Users = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  password: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
}, {
  sequelize,
  timestamps: false,//禁用时间戳
  tableName: 'users'
})

module.exports = Users;