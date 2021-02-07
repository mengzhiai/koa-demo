/*
 * @Date: 2021-02-07 14:46:39
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-02-07 17:31:38
 * @FilePath: \koa-demo\models\user.js
 */


const Sequelize = require('sequelize');
const sequelize = require('../config/db');

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
      unique: true
    },
    nameMaster: {
      type: Sequelize.STRING
    }
  },
  {
    // sequelize:db,
    sequelize,
    timestamps: false,//禁用时间戳
    tableName: "user",//明确定义表名
  }
);

module.exports = User;




















/* const Sequelize = require("sequelize");
const sequelize = require('../config/db');
const User = sequelize.define('user', [
  {
    
    id: Sequelize.STRING(100),
  },
  {
    name: Sequelize.STRING(100),
  }
]);
//timestamp字段，默认为true，表示数据库中是否会自动更新createdAt和updatedAt字段，false表示不会增加这个字段。
//freezeTableName,默认为true,会自动给表名表示为复数: user => users，为false则表示，使用我设置的表名


//创建表，默认是false，true则是删除原有表，再创建
User.sync({
    force: false,
});

module.exports = User; */
// module.exports = User; 

