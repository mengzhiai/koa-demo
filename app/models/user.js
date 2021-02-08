/*
 * @Date: 2021-02-07 14:46:39
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-02-07 17:37:56
 * @FilePath: \koa-demo\models\user.js
 */


const Sequelize = require('sequelize');
const sequelize = require('../../config/db');

const User = sequelize.define( "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nameMaster: {
      type: Sequelize.STRING
    }
  },
  {
    // sequelize:db,
    sequelize,
    timestamps: true,//禁用时间戳
    tableName: "user",//明确定义表名
  }
);

module.exports = User;


